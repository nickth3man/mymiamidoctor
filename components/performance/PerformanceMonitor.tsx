"use client";

import { useEffect } from 'react';
import { useWebVitals } from '../../lib/performanceMonitoring';

interface PerformanceMonitorProps {
  onReport?: (metric: { name: string; value: number; rating: string }) => void;
  sendToAnalytics?: boolean;
}

/**
 * Component that monitors web vitals and reports them
 * This is a non-visual component that should be included in the app layout
 */
export const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onReport,
  sendToAnalytics = false,
}) => {
  // Custom reporting function
  const reportWebVitals = (metric: { name: string; value: number; rating: string }) => {
    // Call the provided onReport callback if available
    if (onReport) {
      onReport(metric);
    }

    // Send to analytics if enabled
    if (sendToAnalytics) {
      // This is where you would integrate with your analytics provider
      // Example for Google Analytics:
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as any).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: metric.name,
          value: Math.round(metric.value),
          non_interaction: true,
          metric_rating: metric.rating,
        });
      }
    }
  };

  // Use the web vitals hook
  useWebVitals(reportWebVitals);

  return null;
};

export default PerformanceMonitor;