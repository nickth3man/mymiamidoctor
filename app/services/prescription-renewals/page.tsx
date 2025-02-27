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
  title: "Prescription Renewals | MyMiamiDoctor",
  description: "Easy and convenient prescription renewal service for existing patients. Get your medications refilled efficiently with Dr. Miami.",
  keywords: "prescription renewal, medication refill, prescription refill Miami, medication management",
};

export default function PrescriptionRenewalsPage() {
  // Benefits of our prescription renewal service
  const benefits = [
    {
      title: 'Convenience',
      description: 'Simple process for renewing your medications without unnecessary appointments when appropriate.',
      icon: '⏱️'
    },
    {
      title: 'Medication Review',
      description: 'Thorough review of your current medications to ensure they remain appropriate for your condition.',
      icon: '📋'
    },
    {
      title: 'Pharmacy Coordination',
      description: 'Direct communication with your preferred pharmacy for a seamless renewal process.',
      icon: '💊'
    },
    {
      title: 'Timely Service',
      description: 'Quick turnaround on prescription renewals to ensure you don\'t run out of essential medications.',
      icon: '🔄'
    }
  ];

  // Renewal process steps
  const renewalSteps = [
    {
      title: 'Request Submission',
      description: 'Submit your renewal request through our patient portal, by phone, or during a visit.',
      icon: '📱'
    },
    {
      title: 'Medical Review',
      description: 'Dr. Miami reviews your medical history and current medication regimen.',
      icon: '👨‍⚕️'
    },
    {
      title: 'Evaluation',
      description: 'Assessment of whether an appointment is needed or if the prescription can be renewed directly.',
      icon: '🔍'
    },
    {
      title: 'Prescription Renewal',
      description: 'Approved prescriptions are sent electronically to your preferred pharmacy.',
      icon: '✅'
    },
    {
      title: 'Notification',
      description: 'You receive confirmation when your prescription has been renewed.',
      icon: '📲'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/30 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Heading level={1}>
              Prescription Renewals
              <span className="block text-primary mt-2">Seamless Medication Management</span>
            </Heading>
            <Text className="mt-4 text-lg max-w-3xl">
              Our prescription renewal service makes it easy to maintain your medication regimen 
              without interruption. Dr. Miami provides efficient, thorough prescription management 
              for existing patients.
            </Text>
            <div className="mt-8">
              <Button href="/contact">Request a Renewal</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <Heading level={2} className="text-center mb-12">
            Benefits of Our Prescription Renewal Service
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
              How Our Prescription Renewal Process Works
            </Heading>
            <div className="space-y-8">
              {renewalSteps.map((step, index) => (
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

      {/* Important Information Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-8">
              Important Information About Prescription Renewals
            </Heading>
            <Grid className="grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Heading level={3} className="text-xl">When to Request Renewals</Heading>
                </CardHeader>
                <CardBody>
                  <Text className="mb-4">
                    To ensure you don't run out of medication, please request renewals:
                  </Text>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><Text>At least 3-5 business days before you need the medication</Text></li>
                    <li><Text>When you have approximately one week's supply remaining</Text></li>
                    <li><Text>During regular office hours (Monday-Friday)</Text></li>
                  </ul>
                  <Text className="mt-4 text-sm italic">
                    For urgent renewal needs, please call our office directly.
                  </Text>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading level={3} className="text-xl">When an Appointment May Be Needed</Heading>
                </CardHeader>
                <CardBody>
                  <Text className="mb-4">
                    In some cases, Dr. Miami may require an appointment before renewing prescriptions:
                  </Text>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><Text>If it has been more than 6-12 months since your last visit</Text></li>
                    <li><Text>For controlled substances or medications requiring monitoring</Text></li>
                    <li><Text>If you're experiencing new symptoms or side effects</Text></li>
                    <li><Text>When lab work or other testing is needed</Text></li>
                  </ul>
                </CardBody>
              </Card>
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Controlled Substances Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-8">
              Special Considerations for Controlled Substances
            </Heading>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Text className="mb-6">
                Prescriptions for controlled substances (such as pain medications, anxiety medications, 
                ADHD medications, and certain sleep aids) are subject to special regulations and requirements:
              </Text>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <Text className="font-medium">Regular Monitoring Required</Text>
                  <Text className="text-sm">
                    Patients on controlled substances typically need to be seen in person at regular intervals 
                    (usually every 1-3 months, depending on the medication).
                  </Text>
                </li>
                <li>
                  <Text className="font-medium">Early Refills</Text>
                  <Text className="text-sm">
                    Early refills for controlled substances are generally not permitted except in special circumstances 
                    that must be discussed directly with Dr. Miami.
                  </Text>
                </li>
                <li>
                  <Text className="font-medium">Identification Required</Text>
                  <Text className="text-sm">
                    You may need to present identification when picking up controlled substance prescriptions 
                    at your pharmacy.
                  </Text>
                </li>
                <li>
                  <Text className="font-medium">Medication Agreements</Text>
                  <Text className="text-sm">
                    Patients on long-term controlled substance therapy may be required to sign a medication 
                    agreement outlining responsibilities and expectations.
                  </Text>
                </li>
              </ul>
              <Text className="mt-6 text-sm italic">
                These policies are in place to ensure patient safety and comply with state and federal regulations.
              </Text>
            </div>
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
                <Heading level={3} className="text-xl mb-3">How do I request a prescription renewal?</Heading>
                <Text>You can request prescription renewals through our patient portal, by calling our office during business hours, or during your regular appointments. Please provide your name, date of birth, the medication name, dosage, and your preferred pharmacy information.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">How long does it take to process a renewal request?</Heading>
                <Text>Most prescription renewal requests are processed within 1-2 business days. However, we recommend requesting renewals 3-5 days before you need them to allow for any potential delays.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Can I get my prescriptions mailed to me?</Heading>
                <Text>We don't mail prescriptions directly, but we can send electronic prescriptions to mail-order pharmacies if your insurance plan offers this option. Please provide the mail-order pharmacy details when requesting your renewal.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">What if I'm traveling and need a prescription renewal?</Heading>
                <Text>If you're traveling and need a prescription renewal, please contact our office as soon as possible. We can often send prescriptions to pharmacies in your travel location. For international travel, please plan ahead as there may be limitations on prescribing across borders.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="text-center py-8">
            <Heading level={2} className="text-white">Need a Prescription Renewal?</Heading>
            <Text className="mt-4 mb-8 max-w-2xl mx-auto">
              Contact us today to request your prescription renewal. Our streamlined process 
              ensures you receive your medications promptly and with proper medical oversight.
            </Text>
            <Button href="/contact" variant="secondary">Request a Renewal</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
} 