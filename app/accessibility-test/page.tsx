"use client";

import React, { useState } from 'react';
import { 
  Heading, 
  Text, 
  TextField, 
  Select, 
  FormGroup, 
  FormLabel, 
  FormError,
  Button,
  Container
} from '@/components';

export default function AccessibilityTestPage() {
  const [focusedElement, setFocusedElement] = useState<string | null>(null);
  
  const handleFocus = (elementName: string) => {
    setFocusedElement(elementName);
  };
  
  const handleBlur = () => {
    setFocusedElement(null);
  };
  
  const serviceOptions = [
    { value: 'general', label: 'General Consultation' },
    { value: 'telehealth', label: 'Telehealth Appointment' },
    { value: 'followup', label: 'Follow-up Visit' },
    { value: 'prescription', label: 'Prescription Renewal' }
  ];

  return (
    <Container>
      <div className="py-12">
        <Heading level={1}>Accessibility Testing</Heading>
        <Text className="mt-4 mb-8">
          This page is used to test the accessibility features of our components. 
          Try navigating using only the keyboard (Tab, Shift+Tab, Arrow keys, Enter, Space).
        </Text>
        
        <div className="p-4 bg-blue-100 mb-8 rounded">
          <Text>Currently focused element: <strong>{focusedElement || 'None'}</strong></Text>
        </div>
        
        <div className="space-y-8">
          <div>
            <Heading level={2} className="mb-4">TextField Keyboard Navigation</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField 
                label="First Name" 
                onFocus={() => handleFocus('First Name TextField')}
                onBlur={handleBlur}
              />
              <TextField 
                label="Last Name" 
                onFocus={() => handleFocus('Last Name TextField')}
                onBlur={handleBlur}
              />
              <TextField 
                label="Email" 
                type="email" 
                required
                onFocus={() => handleFocus('Email TextField')}
                onBlur={handleBlur}
              />
              <TextField 
                label="With Error" 
                error="This is an error message"
                onFocus={() => handleFocus('Error TextField')}
                onBlur={handleBlur}
              />
            </div>
          </div>
          
          <div>
            <Heading level={2} className="mb-4">Select Keyboard Navigation</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select 
                label="Service Type" 
                options={serviceOptions}
                onFocus={() => handleFocus('Service Type Select')}
                onBlur={handleBlur}
              />
              <Select 
                label="With Placeholder" 
                options={serviceOptions}
                placeholder="Select an option"
                onFocus={() => handleFocus('Placeholder Select')}
                onBlur={handleBlur}
              />
              <Select 
                label="Required Select" 
                options={serviceOptions}
                required
                onFocus={() => handleFocus('Required Select')}
                onBlur={handleBlur}
              />
              <Select 
                label="With Error" 
                options={serviceOptions}
                error="Please select an option"
                onFocus={() => handleFocus('Error Select')}
                onBlur={handleBlur}
              />
            </div>
          </div>
          
          <div>
            <Heading level={2} className="mb-4">Button Keyboard Navigation</Heading>
            <div className="flex flex-wrap gap-4">
              <Button 
                onFocus={() => handleFocus('Primary Button')}
                onBlur={handleBlur}
              >
                Primary Button
              </Button>
              <Button 
                variant="secondary"
                onFocus={() => handleFocus('Secondary Button')}
                onBlur={handleBlur}
              >
                Secondary Button
              </Button>
              <Button 
                variant="outline"
                onFocus={() => handleFocus('Outline Button')}
                onBlur={handleBlur}
              >
                Outline Button
              </Button>
              <Button 
                isLoading
                onFocus={() => handleFocus('Loading Button')}
                onBlur={handleBlur}
              >
                Loading Button
              </Button>
              <Button 
                disabled
                onFocus={() => handleFocus('Disabled Button')}
                onBlur={handleBlur}
              >
                Disabled Button
              </Button>
              <Button 
                href="#"
                onFocus={() => handleFocus('Link Button')}
                onBlur={handleBlur}
              >
                Link Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
} 