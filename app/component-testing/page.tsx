import React from 'react';
import { 
  Heading, 
  Text, 
  Button,
  Container,
  Card,
  CardHeader,
  CardBody
} from '@/components';
import Link from 'next/link';

export default function ComponentTestingPage() {
  const testPages = [
    {
      title: 'Accessibility Testing',
      description: 'Test components for accessibility compliance',
      path: '/accessibility-testing',
      icon: '♿'
    },
    {
      title: 'Responsive Design Testing',
      description: 'Test components at different screen sizes',
      path: '/responsive-design',
      icon: '📱'
    },
    {
      title: 'Browser Compatibility Testing',
      description: 'Test components across different browsers',
      path: '/browser-compatibility',
      icon: '🌐'
    },
    {
      title: 'Form Components Example',
      description: 'View and interact with form components',
      path: '/form-examples',
      icon: '📝'
    }
  ];

  return (
    <Container>
      <div className="py-12">
        <Heading level={1}>Component Testing Suite</Heading>
        <Text className="mt-4 mb-8">
          Use these pages to test various aspects of our component library.
        </Text>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testPages.map((page) => (
            <Card key={page.path}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="text-2xl" aria-hidden="true">{page.icon}</span>
                  <Heading level={3}>{page.title}</Heading>
                </div>
              </CardHeader>
              <CardBody>
                <Text className="mb-4">{page.description}</Text>
                <Button href={page.path}>Go to {page.title}</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
} 