"use client";

/**
 * Performance monitoring utilities for tracking and optimizing web vitals
 */

// Core Web Vitals thresholds
const THRESHOLDS = {
  LCP: {
    good: 2500, // ms
    poor: 4000, // ms
  },
  FID: {
    good: 100, // ms
    poor: 300, // ms
  },
  CLS: {
    good: 0.1,
    poor: 0.25,
  },
  FCP: {
    good: 1800, // ms
    poor: 3000, // ms
  },
  TTI: {
    good: 3800, // ms
    poor: 7300, // ms
  },
};

/**
 * Measures Largest Contentful Paint (LCP)
 * @param callback Function to call with LCP value
 */
export function measureLCP(callback: (value: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const po = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      callback(lastEntry.startTime);
    });

    po.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.error('Failed to measure LCP:', e);
  }
}

/**
 * Measures First Input Delay (FID)
 * @param callback Function to call with FID value
 */
export function measureFID(callback: (value: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const po = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstInput = entries[0] as PerformanceEventTiming;
      callback(firstInput.processingStart - firstInput.startTime);
    });

    po.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.error('Failed to measure FID:', e);
  }
}

// Define the PerformanceEventTiming interface if it doesn't exist
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  duration: number;
  cancelable: boolean;
  target?: Node;
}

/**
 * Measures Cumulative Layout Shift (CLS)
 * @param callback Function to call with CLS value
 */
export function measureCLS(callback: (value: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];
    let sessionValue = 0;
    let sessionEntries: PerformanceEntry[] = [];
    let sessionId = 0;

    const entryHandler = (entries: PerformanceEntry[]) => {
      entries.forEach((entry) => {
        // Only count layout shifts without recent user input
        if (!(entry as any).hadRecentInput) {
          const firstSessionEntry = sessionEntries[0];
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1];

          // If the entry occurred less than 1 second after the previous entry and
          // less than 5 seconds after the first entry in the session, include it
          // in the current session. Otherwise, start a new session.
          if (
            sessionValue &&
            entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000
          ) {
            sessionValue += (entry as any).value;
            sessionEntries.push(entry);
          } else {
            sessionValue = (entry as any).value;
            sessionEntries = [entry];
            sessionId++;
          }

          // If the current session value is larger than the CLS value,
          // update the CLS value and entries.
          if (sessionValue > clsValue) {
            clsValue = sessionValue;
            clsEntries = sessionEntries;
            callback(clsValue);
          }
        }
      });
    };

    const po = new PerformanceObserver((entryList) => {
      entryHandler(entryList.getEntries());
    });

    po.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.error('Failed to measure CLS:', e);
  }
}

/**
 * Measures First Contentful Paint (FCP)
 * @param callback Function to call with FCP value
 */
export function measureFCP(callback: (value: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  try {
    const po = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstPaint = entries[0];
      callback(firstPaint.startTime);
    });

    po.observe({ type: 'paint', buffered: true });
  } catch (e) {
    console.error('Failed to measure FCP:', e);
  }
}

/**
 * Evaluates a performance metric against thresholds
 * @param metric The metric name (LCP, FID, CLS, FCP, TTI)
 * @param value The metric value
 * @returns 'good', 'needs-improvement', or 'poor'
 */
export function evaluateMetric(
  metric: keyof typeof THRESHOLDS,
  value: number
): 'good' | 'needs-improvement' | 'poor' {
  const thresholds = THRESHOLDS[metric];
  
  if (value <= thresholds.good) {
    return 'good';
  } else if (value <= thresholds.poor) {
    return 'needs-improvement';
  } else {
    return 'poor';
  }
}

/**
 * Hook to measure and report web vitals
 * @param onReport Callback function to report metrics
 */
export function useWebVitals(
  onReport?: (metric: { name: string; value: number; rating: string }) => void
): void {
  if (typeof window === 'undefined') return;

  const reportMetric = (name: string, value: number, metric: keyof typeof THRESHOLDS) => {
    const rating = evaluateMetric(metric, value);
    if (onReport) {
      onReport({ name, value, rating });
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vital] ${name}: ${value} (${rating})`);
    }
  };

  // Measure LCP
  measureLCP((value) => {
    reportMetric('LCP', value, 'LCP');
  });

  // Measure FID
  measureFID((value) => {
    reportMetric('FID', value, 'FID');
  });

  // Measure CLS
  measureCLS((value) => {
    reportMetric('CLS', value, 'CLS');
  });

  // Measure FCP
  measureFCP((value) => {
    reportMetric('FCP', value, 'FCP');
  });
}