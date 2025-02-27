"use client";

import React from 'react';
import { 
  Heading, 
  Text, 
  TextField, 
  Select, 
  FormGroup, 
  Button,
  Container,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '@/components';

export default function ResponsiveTestPage() {
  const serviceOptions = [
    { value: 'general', label: 'General Consultation' },
    { value: 'telehealth', label: 'Telehealth Appointment' },
    { value: 'followup', label: 'Follow-up Visit' },
    { value: 'prescription', label: 'Prescription Renewal' }
  ];

  return (
    <Container>
      <div className="py-12">
        <Heading level={1}>Responsive Design Testing</Heading>
        <Text className="mt-4 mb-8">
          This page is used to test the responsive design of our components.
          Resize your browser window or use device emulation to test different screen sizes.
        </Text>
        
        <div className="p-4 bg-yellow-100 mb-8 rounded">
          <Text>
            <strong>Current viewport size:</strong>{' '}
            <span className="hidden xs:inline sm:hidden">Extra Small (xs)</span>
            <span className="hidden sm:inline md:hidden">Small (sm)</span>
            <span className="hidden md:inline lg:hidden">Medium (md)</span>
            <span className="hidden lg:inline xl:hidden">Large (lg)</span>
            <span className="hidden xl:inline 2xl:hidden">Extra Large (xl)</span>
            <span className="hidden 2xl:inline">2XL</span>
          </Text>
        </div>
        
        <div className="space-y-12">
          <section>
            <Heading level={2} className="mb-6">Form Components</Heading>
            
            <Card className="mb-8">
              <CardHeader>
                <Heading level={3}>Contact Information</Heading>
              </CardHeader>
              <CardBody>
                <Grid className="grid-cols-1 md:grid-cols-2 gap-6">
                  <TextField label="First Name" required fullWidth />
                  <TextField label="Last Name" required fullWidth />
                  <TextField label="Email Address" type="email" required fullWidth />
                  <TextField label="Phone Number" type="tel" fullWidth />
                  <div className="col-span-1 md:col-span-2">
                    <Select 
                      label="Service Needed" 
                      options={serviceOptions}
                      placeholder="Select a service"
                      required
                      fullWidth
                    />
                  </div>
                </Grid>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <Button variant="outline">Cancel</Button>
                  <Button>Submit</Button>
                </div>
              </CardFooter>
            </Card>
          </section>
          
          <section>
            <Heading level={2} className="mb-6">Button Responsiveness</Heading>
            
            <div className="space-y-6">
              <div>
                <Text className="mb-2">Default Buttons</Text>
                <div className="flex flex-wrap gap-4">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="text">Text</Button>
                </div>
              </div>
              
              <div>
                <Text className="mb-2">Full Width on Mobile, Normal on Desktop</Text>
                <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
                  <Button className="w-full sm:w-auto">Primary</Button>
                  <Button variant="secondary" className="w-full sm:w-auto">Secondary</Button>
                </div>
              </div>
              
              <div>
                <Text className="mb-2">Button Sizes</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <Heading level={2} className="mb-6">Card Grid Responsiveness</Heading>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item}>
                  <CardHeader>
                    <Heading level={4}>Card {item}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      This is a responsive card that will adjust based on the screen size.
                      The grid will show 1 column on mobile, 2 columns on tablet, and 3 columns on desktop.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Button variant="text" size="sm">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
} 