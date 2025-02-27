"use client";

import React, { useState } from 'react';
import { 
  Heading, 
  Text, 
  TextField, 
  Select, 
  Button,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '@/components';

export default function BrowserCompatibilityPage() {
  const [browserInfo, setBrowserInfo] = useState<string>('Detecting browser...');
  const [cssFeatures, setCssFeatures] = useState<Record<string, boolean>>({});
  
  // Detect browser and CSS feature support on component mount
  React.useEffect(() => {
    // Detect browser
    const userAgent = window.navigator.userAgent;
    let browserName = 'Unknown';
    
    if (userAgent.indexOf('Chrome') > -1) {
      browserName = 'Chrome';
    } else if (userAgent.indexOf('Firefox') > -1) {
      browserName = 'Firefox';
    } else if (userAgent.indexOf('Safari') > -1) {
      browserName = 'Safari';
    } else if (userAgent.indexOf('Edge') > -1 || userAgent.indexOf('Edg') > -1) {
      browserName = 'Edge';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
      browserName = 'Internet Explorer';
    }
    
    setBrowserInfo(`${browserName} - ${userAgent}`);
    
    // Check CSS feature support
    const features = {
      grid: typeof document.createElement('div').style.grid !== 'undefined',
      flexbox: typeof document.createElement('div').style.flexDirection !== 'undefined',
      customProperties: window.CSS && CSS.supports('color', 'var(--primary)'),
      focusVisible: CSS.supports('selector(:focus-visible)'),
      aspectRatio: CSS.supports('aspect-ratio: 1 / 1'),
    };
    
    setCssFeatures(features);
  }, []);

  return (
    <Container>
      <div className="py-12">
        <Heading level={1}>Browser Compatibility Testing</Heading>
        <Text className="mt-4 mb-8">
          This page is used to test cross-browser compatibility of our components.
          Open this page in different browsers to verify consistent behavior.
        </Text>
        
        <Card className="mb-8">
          <CardHeader>
            <Heading level={3}>Browser Information</Heading>
          </CardHeader>
          <CardBody>
            <Text className="mb-4">{browserInfo}</Text>
            
            <Heading level={4} className="mb-2">CSS Feature Support</Heading>
            <ul className="list-disc pl-5 space-y-1">
              {Object.entries(cssFeatures).map(([feature, supported]) => (
                <li key={feature} className={supported ? 'text-green-600' : 'text-red-600'}>
                  {feature}: {supported ? 'Supported' : 'Not supported'}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        
        <div className="space-y-12">
          <section>
            <Heading level={2} className="mb-6">Form Controls</Heading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <Heading level={4}>Text Input Styling</Heading>
                </CardHeader>
                <CardBody>
                  <TextField 
                    label="Standard Text Input" 
                    placeholder="Enter text here"
                    fullWidth
                  />
                  <div className="h-4"></div>
                  <TextField 
                    label="With Special Characters" 
                    placeholder="Try typing emoji or special chars"
                    fullWidth
                  />
                </CardBody>
              </Card>
              
              <Card>
                <CardHeader>
                  <Heading level={4}>Select Dropdown Styling</Heading>
                </CardHeader>
                <CardBody>
                  <Select 
                    label="Standard Select" 
                    options={[
                      { value: 'option1', label: 'Option 1' },
                      { value: 'option2', label: 'Option 2' },
                      { value: 'option3', label: 'Option with a very long name that might cause overflow issues in some browsers' }
                    ]}
                    fullWidth
                  />
                </CardBody>
              </Card>
            </div>
          </section>
          
          <section>
            <Heading level={2} className="mb-6">Focus States</Heading>
            
            <Text className="mb-4">
              Tab through these elements to test focus styles across browsers.
            </Text>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button>Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="text">Text Button</Button>
              <Button href="#">Link Button</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField label="Focus Test Input" />
              <Select 
                label="Focus Test Select" 
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' }
                ]}
              />
            </div>
          </section>
          
          <section>
            <Heading level={2} className="mb-6">CSS Grid Layout</Heading>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div 
                  key={item} 
                  className="bg-primary/10 p-4 rounded flex items-center justify-center"
                  style={{ minHeight: '100px' }}
                >
                  <Text>Grid Item {item}</Text>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <Heading level={2} className="mb-6">Flexbox Layout</Heading>
            
            <div className="flex flex-wrap md:flex-nowrap gap-4 mb-8">
              <div className="bg-secondary/10 p-4 rounded flex-1 flex items-center justify-center" style={{ minHeight: '100px' }}>
                <Text>Flex Item 1</Text>
              </div>
              <div className="bg-secondary/20 p-4 rounded flex-1 flex items-center justify-center" style={{ minHeight: '100px' }}>
                <Text>Flex Item 2</Text>
              </div>
              <div className="bg-secondary/30 p-4 rounded flex-1 flex items-center justify-center" style={{ minHeight: '100px' }}>
                <Text>Flex Item 3</Text>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
} 