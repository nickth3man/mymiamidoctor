import React from 'react';
import { 
  Heading, 
  Text, 
  Button,
  Container,
  Section,
  Grid,
  Card,
  CardHeader,
  CardBody
} from '@/components';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telehealth Services | MyMiamiDoctor",
  description: "Virtual healthcare appointments from the comfort of your home. Secure, convenient, and effective medical care via video conferencing.",
  keywords: "telehealth Miami, virtual doctor appointment, online medical consultation, remote healthcare",
};

export default function TelehealthPage() {
  // Benefits of telehealth
  const benefits = [
    {
      title: 'Convenience',
      description: 'Access medical care from anywhere – your home, office, or while traveling – eliminating travel and waiting room time.',
      icon: '🏠'
    },
    {
      title: 'Same Quality Care',
      description: 'Receive the same high standard of medical attention and personalized care as in-person visits.',
      icon: '⭐'
    },
    {
      title: 'Privacy & Security',
      description: 'All telehealth appointments are conducted through HIPAA-compliant platforms to ensure your privacy.',
      icon: '🔒'
    },
    {
      title: 'Reduced Exposure',
      description: 'Minimize potential exposure to contagious illnesses by avoiding in-person waiting rooms.',
      icon: '🛡️'
    }
  ];

  // Conditions suitable for telehealth
  const suitableConditions = [
    'Cold and flu symptoms',
    'Allergies',
    'Skin conditions (rashes, acne)',
    'Minor infections',
    'Medication management',
    'Follow-up appointments',
    'Chronic disease monitoring',
    'Mental health concerns',
    'Nutritional counseling',
    'General health questions'
  ];

  // How telehealth works steps
  const howItWorks = [
    {
      title: 'Schedule Your Appointment',
      description: 'Book your telehealth visit through our online portal or by calling our office.',
      icon: '📅'
    },
    {
      title: 'Receive Confirmation',
      description: 'Get appointment details and instructions via email, including a secure link to join your virtual visit.',
      icon: '📧'
    },
    {
      title: 'Prepare for Your Visit',
      description: 'Find a quiet, well-lit space with a reliable internet connection. Have your medication list and any relevant medical information ready.',
      icon: '📝'
    },
    {
      title: 'Join Your Appointment',
      description: 'Click the secure link at your scheduled time to enter the virtual waiting room. Dr. Miami will join shortly.',
      icon: '💻'
    },
    {
      title: 'Receive Care & Follow-Up',
      description: 'Discuss your concerns, receive diagnosis and treatment plans, and schedule any necessary follow-up care.',
      icon: '👨‍⚕️'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/30 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Heading level={1}>
              Telehealth Services
              <span className="block text-primary mt-2">Healthcare at Your Convenience</span>
            </Heading>
            <Text className="mt-4 text-lg max-w-3xl">
              Experience quality healthcare from the comfort of your home with our secure, 
              convenient telehealth services. Connect with Dr. Miami via video for consultations, 
              follow-ups, and more.
            </Text>
            <div className="mt-8">
              <Button href="/contact">Schedule a Telehealth Visit</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <Heading level={2} className="text-center mb-12">
            Benefits of Telehealth
          </Heading>
          <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">{benefit.icon}</span>
                    <Heading level={3} className="text-xl">{benefit.title}</Heading>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text>{benefit.description}</Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-12">
              How Telehealth Works
            </Heading>
            <div className="space-y-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    <span aria-hidden="true">{step.icon}</span>
                  </div>
                  <div>
                    <Heading level={3} className="text-xl mb-2">{step.title}</Heading>
                    <Text>{step.description}</Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Suitable Conditions Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-8">
              Conditions Suitable for Telehealth
            </Heading>
            <Text className="text-center mb-12">
              Many health concerns can be effectively addressed through telehealth appointments, including:
            </Text>
            <Grid className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {suitableConditions.map((condition, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <Text>{condition}</Text>
                </div>
              ))}
            </Grid>
            <Text className="mt-8 text-center text-sm italic">
              Note: Some medical conditions may require in-person evaluation. Dr. Miami will advise if an in-office visit is necessary.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Technical Requirements Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-8">
              Technical Requirements
            </Heading>
            <Text className="text-center mb-8">
              To ensure a smooth telehealth experience, please make sure you have:
            </Text>
            <Grid className="grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Heading level={3} className="text-xl">Device Requirements</Heading>
                </CardHeader>
                <CardBody>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><Text>Computer, tablet, or smartphone with camera and microphone</Text></li>
                    <li><Text>Updated web browser (Chrome, Firefox, Safari, or Edge recommended)</Text></li>
                    <li><Text>Email address to receive appointment links</Text></li>
                  </ul>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading level={3} className="text-xl">Connection Requirements</Heading>
                </CardHeader>
                <CardBody>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><Text>Stable internet connection (minimum 1 Mbps upload/download)</Text></li>
                    <li><Text>Quiet, private location with good lighting</Text></li>
                    <li><Text>Charged device or access to power outlet</Text></li>
                  </ul>
                </CardBody>
              </Card>
            </Grid>
            <Text className="mt-8 text-center">
              Need help with technical setup? Our staff is available to assist you before your appointment.
            </Text>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-12">
              Frequently Asked Questions
            </Heading>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Is telehealth covered by insurance?</Heading>
                <Text>Most insurance plans now cover telehealth visits. We recommend contacting your insurance provider to verify coverage before your appointment. Our staff can also assist with insurance verification.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">How secure is the telehealth platform?</Heading>
                <Text>We use HIPAA-compliant, secure video conferencing technology to ensure your privacy and the confidentiality of your medical information. All data is encrypted and protected.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Can medications be prescribed during a telehealth visit?</Heading>
                <Text>Yes, Dr. Miami can prescribe many medications during telehealth visits. Prescriptions will be sent electronically to your preferred pharmacy. However, certain controlled substances may require an in-person visit per federal regulations.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">What if I need lab work or imaging?</Heading>
                <Text>If lab work or imaging is needed, Dr. Miami can provide orders during your telehealth visit. You'll receive instructions on where to go for these services, and results will be discussed in a follow-up appointment.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="text-center py-8">
            <Heading level={2} className="text-white">Ready to Experience Healthcare from Home?</Heading>
            <Text className="mt-4 mb-8 max-w-2xl mx-auto">
              Schedule your telehealth appointment today and receive quality medical care without leaving your home.
            </Text>
            <Button href="/contact" variant="secondary">Book a Telehealth Visit</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
} 