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
  title: "General Consultations | MyMiamiDoctor",
  description: "Comprehensive medical consultations for a wide range of health concerns with Dr. Miami. Schedule your in-person or virtual consultation today.",
  keywords: "general medical consultation, doctor consultation Miami, primary care consultation, health assessment",
};

export default function GeneralConsultationsPage() {
  // Benefits of general consultations
  const benefits = [
    {
      title: 'Comprehensive Assessment',
      description: 'A thorough evaluation of your current health status, medical history, and any concerns you may have.',
      icon: '📋'
    },
    {
      title: 'Personalized Care',
      description: 'Individualized attention and care plans tailored to your specific health needs and goals.',
      icon: '👤'
    },
    {
      title: 'Preventive Focus',
      description: 'Identification of potential health risks and strategies to prevent future health problems.',
      icon: '🛡️'
    },
    {
      title: 'Coordinated Care',
      description: 'Seamless coordination with specialists and other healthcare providers when needed.',
      icon: '🔄'
    }
  ];

  // What to expect during a consultation
  const consultationSteps = [
    {
      title: 'Pre-Appointment',
      description: 'Complete any necessary paperwork and prepare questions or concerns you want to discuss.',
      icon: '📝'
    },
    {
      title: 'Initial Assessment',
      description: 'Vital signs check, review of medical history, and discussion of your current health concerns.',
      icon: '🩺'
    },
    {
      title: 'Physical Examination',
      description: 'A thorough examination focused on your specific health needs and concerns.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Discussion & Plan',
      description: 'Review of findings, diagnosis if applicable, and development of a treatment or care plan.',
      icon: '💬'
    },
    {
      title: 'Follow-Up',
      description: 'Scheduling of any necessary tests, referrals, or follow-up appointments.',
      icon: '📅'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/30 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Heading level={1}>
              General Consultations
              <span className="block text-primary mt-2">Comprehensive Care for Your Health</span>
            </Heading>
            <Text className="mt-4 text-lg max-w-3xl">
              Our general consultations provide a thorough assessment of your health, addressing your concerns 
              and creating personalized care plans to help you achieve optimal wellness.
            </Text>
            <div className="mt-8">
              <Button href="/contact">Schedule a Consultation</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <Heading level={2} className="text-center mb-12">
            Benefits of Our General Consultations
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

      {/* What to Expect Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-12">
              What to Expect During Your Consultation
            </Heading>
            <div className="space-y-8">
              {consultationSteps.map((step, index) => (
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

      {/* Common Conditions Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-8">
              Common Conditions We Address
            </Heading>
            <Text className="text-center mb-12">
              Our general consultations can address a wide range of health concerns, including but not limited to:
            </Text>
            <Grid className="grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Respiratory infections</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Digestive disorders</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Skin conditions</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Allergies</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Chronic disease management</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Preventive health screenings</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Mental health concerns</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Musculoskeletal pain</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Headaches and migraines</Text>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <Text>Fatigue and sleep disorders</Text>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-12">
              Frequently Asked Questions
            </Heading>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">How long does a general consultation typically last?</Heading>
                <Text>Initial consultations usually last between 30-45 minutes, allowing sufficient time for a thorough assessment and discussion of your health concerns.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">What should I bring to my consultation?</Heading>
                <Text>Please bring your photo ID, insurance card, a list of current medications (including dosages), any relevant medical records or test results, and a list of questions or concerns you'd like to discuss.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Can I request lab work during my consultation?</Heading>
                <Text>Yes, if medically necessary, Dr. Miami can order appropriate laboratory tests during your consultation. Results will be discussed in a follow-up appointment or via secure messaging.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Are virtual consultations available?</Heading>
                <Text>Yes, we offer telehealth consultations for many types of general health concerns. These virtual visits provide the same quality care while offering added convenience.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="text-center py-8">
            <Heading level={2} className="text-white">Ready to Schedule Your Consultation?</Heading>
            <Text className="mt-4 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your general consultation with Dr. Miami.
              We look forward to providing you with exceptional care.
            </Text>
            <Button href="/contact" variant="secondary">Book an Appointment</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
} 