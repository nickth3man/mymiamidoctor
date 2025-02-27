'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

declare global {
  interface Window {
    netlifyIdentity: {
      on: (event: string, callback: Function) => void;
      open: (tab?: string) => void;
      close: () => void;
      currentUser: () => any;
    };
  }
}

/**
 * NetlifyCMS component handles Netlify Identity integration
 * This component should be included in the app layout to enable Netlify CMS functionality
 */
export const NetlifyCMS = () => {
  const router = useRouter();

  useEffect(() => {
    // Load the Netlify Identity widget script
    const loadNetlifyIdentityScript = () => {
      const script = document.createElement('script');
      script.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js';
      script.async = true;
      script.onload = initNetlifyIdentity;
      document.head.appendChild(script);
    };

    // Initialize Netlify Identity and set up event handlers
    const initNetlifyIdentity = () => {
      if (window.netlifyIdentity) {
        // Handle redirect after login
        window.netlifyIdentity.on('init', (user: any) => {
          if (!user) {
            window.netlifyIdentity.on('login', () => {
              document.location.href = '/admin/';
            });
          }
        });

        // Handle redirect after logout
        window.netlifyIdentity.on('logout', () => {
          document.location.href = '/';
        });

        // Check for Netlify Identity redirect
        const hash = window.location.hash;
        if (hash && hash.startsWith('#invite_token=')) {
          window.netlifyIdentity.open('signup');
        }
      }
    };

    // Check if we're not in the admin section before loading the script
    if (!window.location.pathname.startsWith('/admin/')) {
      loadNetlifyIdentityScript();
    }

    return () => {
      // Clean up event listeners if needed
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on('init', () => {});
        window.netlifyIdentity.on('login', () => {});
        window.netlifyIdentity.on('logout', () => {});
      }
    };
  }, [router]);

  // This component doesn't render anything visible
  return null;
};

export default NetlifyCMS;