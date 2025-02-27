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
  CardBody,
  CardFooter
} from '@/components';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Services | MyMiamiDoctor",
  description: "Comprehensive medical services offered by Dr. Miami including general consultations, telehealth appointments, follow-up visits, and prescription renewals.",
  keywords: "Miami doctor services, telehealth Miami, medical consultations, prescription renewal Miami",
};

export default function ServicesPage() {
  // Services data
  const services = [
    {
      id: 'general-consultations',
      title: 'General Consultations',
      description: 'Comprehensive medical consultations for a wide range of health concerns.',
      icon: '👨‍⚕️',
      benefits: [
        'Complete physical examination',
        'Medical history review',
        'Preventive health screenings',
        'Personalized health recommendations'
      ],
      link: '/services/general-consultations'
    },
    {
      id: 'telehealth',
      title: 'Telehealth Appointments',
      description: 'Virtual appointments from the comfort of your home via secure video conferencing.',
      icon: '💻',
      benefits: [
        'No travel or waiting room time',
        'Same quality care as in-person visits',
        'Secure, HIPAA-compliant platform',
        'Prescription management available'
      ],
      link: '/services/telehealth'
    },
    {
      id: 'follow-up-visits',
      title: 'Follow-up Visits',
      description: 'Continued care and monitoring of your health progress and treatment effectiveness.',
      icon: '📋',
      benefits: [
        'Review of treatment progress',
        'Adjustment of care plans as needed',
        'Discussion of test results',
        'Addressing new or ongoing concerns'
      ],
      link: '/services/follow-up-visits'
    },
    {
      id: 'prescription-renewals',
      title: 'Prescription Renewals',
      description: 'Easy and convenient prescription renewal service for existing patients.',
      icon: '💊',
      benefits: [
        'Streamlined renewal process',
        'Medication review and adjustments',
        'Discussion of side effects or concerns',
        'Coordination with your pharmacy'
      ],
      link: '/services/prescription-renewals'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/30 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Heading level={1}>
              Our Medical Services
              <span className="block text-primary mt-2">Comprehensive Care for Your Health Needs</span>
            </Heading>
            <Text className="mt-4 text-lg max-w-3xl">
              At MyMiamiDoctor, we offer a range of medical services designed to provide you with 
              convenient, high-quality healthcare. Whether you prefer in-person visits or the 
              convenience of telehealth, we're here to address your health concerns.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Services Overview Section */}
      <Section>
        <Container>
          <Grid className="grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                    <Heading level={3}>{service.title}</Heading>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text className="mb-4">{service.description}</Text>
                  <Heading level={4} className="text-sm uppercase tracking-wider text-gray-600 mb-2">Key Benefits</Heading>
                  <ul className="list-disc pl-5 space-y-1 mb-6">
                    {service.benefits.map((benefit, index) => (
                      <li key={index}>
                        <Text>{benefit}</Text>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button href={service.link}>Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Insurance Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2}>Insurance & Payment Options</Heading>
            <Text className="mt-4 mb-8">
              We accept most major insurance plans and offer flexible payment options to ensure 
              you receive the care you need without financial stress.
            </Text>
            
            <Grid className="grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div>
                <Heading level={3} className="mb-4">Accepted Insurance Plans</Heading>
                <ul className="list-disc pl-5 space-y-2">
                  <li><Text>Blue Cross Blue Shield</Text></li>
                  <li><Text>Aetna</Text></li>
                  <li><Text>Cigna</Text></li>
                  <li><Text>United Healthcare</Text></li>
                  <li><Text>Medicare</Text></li>
                  <li><Text>And many more</Text></li>
                </ul>
                <Text className="mt-4 text-sm italic">
                  Please contact our office to verify your specific insurance coverage.
                </Text>
              </div>
              
              <div>
                <Heading level={3} className="mb-4">Payment Options</Heading>
                <ul className="list-disc pl-5 space-y-2">
                  <li><Text>Credit/Debit Cards</Text></li>
                  <li><Text>Health Savings Accounts (HSA)</Text></li>
                  <li><Text>Flexible Spending Accounts (FSA)</Text></li>
                  <li><Text>Cash or Check</Text></li>
                  <li><Text>Payment Plans (for qualifying patients)</Text></li>
                </ul>
                <Text className="mt-4 text-sm italic">
                  We strive to make healthcare accessible. Please discuss any financial concerns with our staff.
                </Text>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="text-center py-8">
            <Heading level={2} className="text-white">Ready to Schedule Your Appointment?</Heading>
            <Text className="mt-4 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule an appointment for any of our services.
              We look forward to providing you with exceptional care.
            </Text>
            <Button href="/contact" variant="secondary">Book an Appointment</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
} 