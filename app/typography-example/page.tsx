import React from 'react';
import { Heading, Text } from '@/components';

export default function TypographyExamplePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Heading level={1}>Typography Examples</Heading>
      <Text className="mt-4 mb-8">
        This page demonstrates the typography components available in the MyMiamiDoctor website.
      </Text>

      <div className="mb-12">
        <Heading level={2} className="mb-6">Heading Component</Heading>
        
        <div className="space-y-6">
          <div>
            <Heading level={1}>Heading Level 1</Heading>
            <Text variant="caption">Default size: 4xl</Text>
          </div>
          
          <div>
            <Heading level={2}>Heading Level 2</Heading>
            <Text variant="caption">Default size: 3xl</Text>
          </div>
          
          <div>
            <Heading level={3}>Heading Level 3</Heading>
            <Text variant="caption">Default size: 2xl</Text>
          </div>
          
          <div>
            <Heading level={4}>Heading Level 4</Heading>
            <Text variant="caption">Default size: xl</Text>
          </div>
          
          <div>
            <Heading level={5}>Heading Level 5</Heading>
            <Text variant="caption">Default size: lg</Text>
          </div>
          
          <div>
            <Heading level={6}>Heading Level 6</Heading>
            <Text variant="caption">Default size: md</Text>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <Heading level={2} size="4xl">Custom Size: 4xl</Heading>
          </div>
          
          <div>
            <Heading level={2} weight="normal">Custom Weight: Normal</Heading>
          </div>
          
          <div>
            <Heading level={2} align="center">Custom Alignment: Center</Heading>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <Heading level={2} className="mb-6">Text Component</Heading>
        
        <div className="space-y-6">
          <div>
            <Text size="xs">Text Size: xs</Text>
          </div>
          
          <div>
            <Text size="sm">Text Size: sm</Text>
          </div>
          
          <div>
            <Text size="md">Text Size: md (default)</Text>
          </div>
          
          <div>
            <Text size="lg">Text Size: lg</Text>
          </div>
          
          <div>
            <Text size="xl">Text Size: xl</Text>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <Text weight="normal">Text Weight: Normal (default)</Text>
          </div>
          
          <div>
            <Text weight="medium">Text Weight: Medium</Text>
          </div>
          
          <div>
            <Text weight="semibold">Text Weight: Semibold</Text>
          </div>
          
          <div>
            <Text weight="bold">Text Weight: Bold</Text>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <Text variant="body">Text Variant: Body (default)</Text>
          </div>
          
          <div>
            <Text variant="caption">Text Variant: Caption</Text>
          </div>
          
          <div>
            <Text variant="label">Text Variant: Label</Text>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <Text align="left">Text Align: Left (default)</Text>
          </div>
          
          <div>
            <Text align="center">Text Align: Center</Text>
          </div>
          
          <div>
            <Text align="right">Text Align: Right</Text>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <Text as="span">Rendered as a span element</Text>
          </div>
          
          <div>
            <Text as="div">Rendered as a div element</Text>
          </div>
        </div>
      </div>
    </div>
  );
} 