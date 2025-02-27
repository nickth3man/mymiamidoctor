"use client";

import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const ButtonExample: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  
  return (
    <div className="space-y-8 p-6 bg-light rounded-lg">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-navy">Button Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="text">Text</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-navy">Button Sizes</h2>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="xs">X-Small</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-navy">Full Width Buttons</h2>
        <div className="space-y-4 max-w-md">
          <Button variant="primary" isFullWidth>Full Width Primary</Button>
          <Button variant="outline" isFullWidth>Full Width Outline</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-navy">Loading State</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            isLoading={isLoading}
            onClick={handleLoadingClick}
          >
            Click to Load
          </Button>
          <Button variant="secondary" isLoading>Always Loading</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-navy">Disabled State</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Disabled Primary</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-navy">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary"
            leftIcon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
            }
          >
            Left Icon
          </Button>
          
          <Button 
            variant="outline"
            rightIcon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            Right Icon
          </Button>
          
          <Button 
            variant="secondary"
            leftIcon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
            }
            rightIcon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            Both Icons
          </Button>
        </div>
      </div>
      
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-navy">Link Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button 
            variant="primary" 
            href="/"
          >
            Link to Home
          </Button>
          <Button 
            variant="outline" 
            href="/about"
          >
            Link to About
          </Button>
          <Button 
            variant="text" 
            href="/contact"
            rightIcon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
          >
            Link with Icon
          </Button>
          <Button 
            variant="primary" 
            href="/patient-portal"
            disabled
          >
            Disabled Link
          </Button>
        </div>
      </div>
    </div>
  );
}; 