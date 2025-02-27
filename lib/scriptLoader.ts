"use client";

import { useEffect, useState } from 'react';

type ScriptStatus = 'idle' | 'loading' | 'ready' | 'error';
type ScriptStrategy = 'afterInteractive' | 'lazyOnload' | 'beforeInteractive';

interface ScriptProps {
  src: string;
  strategy?: ScriptStrategy;
  onLoad?: () => void;
  onError?: () => void;
  id?: string;
  defer?: boolean;
  async?: boolean;
}

/**
 * Custom hook for loading external scripts with different strategies
 */
export function useScript({
  src,
  strategy = 'afterInteractive',
  onLoad,
  onError,
  id,
  defer = true,
  async = true,
}: ScriptProps): ScriptStatus {
  const [status, setStatus] = useState<ScriptStatus>(
    strategy === 'beforeInteractive' ? 'loading' : 'idle'
  );

  useEffect(() => {
    // If the script is already in the DOM, don't add it again
    if (document.querySelector(`script[src="${src}"]`)) {
      setStatus('ready');
      if (onLoad) onLoad();
      return;
    }

    // Don't load script if strategy is lazyOnload and not in viewport yet
    if (strategy === 'lazyOnload') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadScript();
            observer.disconnect();
          }
        });
      });

      // Observe the document body as a proxy for viewport visibility
      observer.observe(document.body);

      return () => {
        observer.disconnect();
      };
    }

    // For afterInteractive, load when component mounts
    if (strategy === 'afterInteractive') {
      loadScript();
    }

    // For beforeInteractive, script should be added in the document head
    // This is handled by the Next.js Script component, but we simulate it here
    if (strategy === 'beforeInteractive') {
      setStatus('ready');
      if (onLoad) onLoad();
    }

    function loadScript() {
      setStatus('loading');

      const script = document.createElement('script');
      script.src = src;
      script.defer = defer;
      script.async = async;
      if (id) script.id = id;

      script.onload = () => {
        setStatus('ready');
        if (onLoad) onLoad();
      };

      script.onerror = () => {
        setStatus('error');
        if (onError) onError();
      };

      document.body.appendChild(script);
    }

    return () => {
      // Cleanup function if component unmounts before script loads
      if (status === 'loading') {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      }
    };
  }, [src, strategy, onLoad, onError, id, defer, async, status]);

  return status;
}

/**
 * Preloads a script to improve performance
 */
export function preloadScript(src: string): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'script';
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Component for loading external scripts with different strategies
 */
export function Script({
  src,
  strategy = 'afterInteractive',
  onLoad,
  onError,
  id,
  defer = true,
  async = true,
}: ScriptProps): null {
  useScript({ src, strategy, onLoad, onError, id, defer, async });
  return null;
}