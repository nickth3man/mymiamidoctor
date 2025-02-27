import React from 'react';
import { 
  Heading, 
  Text, 
  Container, 
  Grid, 
  Flex, 
  Section,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from '@/components';

export default function LayoutExamplePage() {
  return (
    <div>
      <Section padding="md" background="default">
        <Heading level={1}>Layout Components Example</Heading>
        <Text className="mt-4 mb-8">
          This page demonstrates the layout components available in the MyMiamiDoctor website.
        </Text>
      </Section>

      {/* Container Examples */}
      <Section padding="md" background="light">
        <Heading level={2} className="mb-6">Container Component</Heading>
        
        <div className="space-y-8">
          <div>
            <Text className="mb-2 font-semibold">Default Container (1280px)</Text>
            <Container className="bg-white p-4 border border-gray-200 rounded-md">
              <Text>This container has a maximum width of 1280px and is centered on the page.</Text>
            </Container>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Narrow Container (896px)</Text>
            <Container width="narrow" className="bg-white p-4 border border-gray-200 rounded-md">
              <Text>This container has a maximum width of 896px and is centered on the page.</Text>
            </Container>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Wide Container (1536px)</Text>
            <Container width="wide" className="bg-white p-4 border border-gray-200 rounded-md">
              <Text>This container has a maximum width of 1536px and is centered on the page.</Text>
            </Container>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Left-Aligned Container</Text>
            <Container alignment="left" className="bg-white p-4 border border-gray-200 rounded-md">
              <Text>This container is aligned to the left side of the page.</Text>
            </Container>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Right-Aligned Container</Text>
            <Container alignment="right" className="bg-white p-4 border border-gray-200 rounded-md">
              <Text>This container is aligned to the right side of the page.</Text>
            </Container>
          </div>
        </div>
      </Section>

      {/* Grid Examples */}
      <Section padding="md" background="default">
        <Heading level={2} className="mb-6">Grid Component</Heading>
        
        <div className="space-y-8">
          <div>
            <Text className="mb-2 font-semibold">2-Column Grid</Text>
            <Grid columns={2} gap="md">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white p-4 border border-gray-200 rounded-md">
                  <Text>Grid Item {item}</Text>
                </div>
              ))}
            </Grid>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">3-Column Grid</Text>
            <Grid columns={3} gap="md">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white p-4 border border-gray-200 rounded-md">
                  <Text>Grid Item {item}</Text>
                </div>
              ))}
            </Grid>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Responsive Grid (1 → 2 → 3 → 4 columns)</Text>
            <Grid columns={1} columnsSm={2} columnsMd={3} columnsLg={4} gap="md">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="bg-white p-4 border border-gray-200 rounded-md">
                  <Text>Grid Item {item}</Text>
                </div>
              ))}
            </Grid>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Grid with Different Gap Sizes</Text>
            <div className="space-y-4">
              <Text>Small Gap (gap-4)</Text>
              <Grid columns={3} gap="sm" className="mb-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white p-4 border border-gray-200 rounded-md">
                    <Text>Item {item}</Text>
                  </div>
                ))}
              </Grid>
              
              <Text>Large Gap (gap-8)</Text>
              <Grid columns={3} gap="lg">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white p-4 border border-gray-200 rounded-md">
                    <Text>Item {item}</Text>
                  </div>
                ))}
              </Grid>
            </div>
          </div>
        </div>
      </Section>

      {/* Flex Examples */}
      <Section padding="md" background="light">
        <Heading level={2} className="mb-6">Flex Component</Heading>
        
        <div className="space-y-8">
          <div>
            <Text className="mb-2 font-semibold">Row Direction (default)</Text>
            <Flex className="bg-white p-4 border border-gray-200 rounded-md">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 p-4 border border-gray-200 rounded-md">
                  <Text>Flex Item {item}</Text>
                </div>
              ))}
            </Flex>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Column Direction</Text>
            <Flex direction="col" className="bg-white p-4 border border-gray-200 rounded-md">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 p-4 border border-gray-200 rounded-md">
                  <Text>Flex Item {item}</Text>
                </div>
              ))}
            </Flex>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Justify Content</Text>
            <div className="space-y-4">
              <Text>Justify Start (default)</Text>
              <Flex justify="start" className="bg-white p-4 border border-gray-200 rounded-md mb-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-100 p-4 border border-gray-200 rounded-md">
                    <Text>Item {item}</Text>
                  </div>
                ))}
              </Flex>
              
              <Text>Justify Center</Text>
              <Flex justify="center" className="bg-white p-4 border border-gray-200 rounded-md mb-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-100 p-4 border border-gray-200 rounded-md">
                    <Text>Item {item}</Text>
                  </div>
                ))}
              </Flex>
              
              <Text>Justify Between</Text>
              <Flex justify="between" className="bg-white p-4 border border-gray-200 rounded-md">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-gray-100 p-4 border border-gray-200 rounded-md">
                    <Text>Item {item}</Text>
                  </div>
                ))}
              </Flex>
            </div>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Align Items</Text>
            <Flex align="center" className="bg-white p-4 border border-gray-200 rounded-md h-40">
              <div className="bg-gray-100 p-4 h-16 border border-gray-200 rounded-md">
                <Text>Short</Text>
              </div>
              <div className="bg-gray-100 p-4 h-32 border border-gray-200 rounded-md">
                <Text>Tall</Text>
              </div>
              <div className="bg-gray-100 p-4 h-24 border border-gray-200 rounded-md">
                <Text>Medium</Text>
              </div>
            </Flex>
          </div>
          
          <div>
            <Text className="mb-2 font-semibold">Responsive Direction</Text>
            <Flex 
              direction="col" 
              directionMd="row" 
              gap="md" 
              className="bg-white p-4 border border-gray-200 rounded-md"
            >
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-100 p-4 border border-gray-200 rounded-md">
                  <Text>Flex Item {item}</Text>
                </div>
              ))}
            </Flex>
            <Text className="mt-2 text-sm text-gray-500">
              This flex container is column on mobile and row on medium screens and up.
            </Text>
          </div>
        </div>
      </Section>

      {/* Section Examples */}
      <Section padding="md" background="default">
        <Heading level={2} className="mb-6">Section Component</Heading>
        
        <Text className="mb-4">
          The Section component is used to create consistent page sections with appropriate padding and background colors.
          This page itself uses multiple Section components with different backgrounds and padding.
        </Text>
        
        <Text className="mb-8">
          Below are examples of Sections with different background colors:
        </Text>
      </Section>
      
      <Section padding="md" background="primary">
        <Heading level={3} className="mb-4">Primary Background Section</Heading>
        <Text>This section has a primary background color with medium padding.</Text>
      </Section>
      
      <Section padding="md" background="secondary">
        <Heading level={3} className="mb-4">Secondary Background Section</Heading>
        <Text>This section has a secondary background color with medium padding.</Text>
      </Section>
      
      <Section padding="md" background="dark">
        <Heading level={3} className="mb-4">Dark Background Section</Heading>
        <Text>This section has a dark background color with medium padding.</Text>
      </Section>
      
      <Section padding="md" background="light">
        <Heading level={3} className="mb-4">Light Background Section</Heading>
        <Text>This section has a light background color with medium padding.</Text>
      </Section>
      
      <Section padding="md" background="accent">
        <Heading level={3} className="mb-4">Accent Background Section</Heading>
        <Text>This section has an accent background color with medium padding.</Text>
      </Section>

      {/* Combined Layout Example */}
      <Section padding="lg" background="default">
        <Heading level={2} className="mb-8">Combined Layout Example</Heading>
        
        <Grid columns={1} columnsMd={3} gap="lg">
          <Card>
            <CardHeader>
              <Heading level={3} size="lg">Service 1</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                This is an example of combining multiple layout components to create a complex layout.
                This card is inside a Grid, which is inside a Section with a Container.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="primary">Learn More</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading level={3} size="lg">Service 2</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The Grid component makes it easy to create responsive layouts that adapt to different screen sizes.
                This grid changes from 1 column on mobile to 3 columns on desktop.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="primary">Learn More</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading level={3} size="lg">Service 3</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Using these layout components ensures consistent spacing, alignment, and responsive behavior
                across the entire site, making it easier to maintain and extend.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="primary">Learn More</Button>
            </CardFooter>
          </Card>
        </Grid>
      </Section>
    </div>
  );
} 