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
  title: "Follow-up Visits | MyMiamiDoctor",
  description: "Continued care and monitoring of your health progress with Dr. Miami. Schedule your follow-up appointment to ensure effective treatment and optimal health outcomes.",
  keywords: "follow-up appointment, medical follow-up, treatment monitoring, health progress check, Miami doctor",
};

export default function FollowUpVisitsPage() {
  // Benefits of follow-up visits
  const benefits = [
    {
      title: 'Treatment Monitoring',
      description: 'Evaluate the effectiveness of your current treatment plan and make adjustments as needed.',
      icon: '📊'
    },
    {
      title: 'Continuity of Care',
      description: 'Maintain a consistent relationship with Dr. Miami for comprehensive, ongoing healthcare.',
      icon: '🔄'
    },
    {
      title: 'Health Progress Tracking',
      description: 'Track improvements in your condition and address any new or persistent symptoms.',
      icon: '📈'
    },
    {
      title: 'Preventive Care',
      description: 'Identify and address potential health issues before they become serious problems.',
      icon: '🛡️'
    }
  ];

  // Types of follow-up visits
  const visitTypes = [
    {
      title: 'Post-Treatment Follow-Up',
      description: 'Evaluate the effectiveness of prescribed treatments and medications, making adjustments as needed.',
      icon: '💊'
    },
    {
      title: 'Chronic Condition Management',
      description: 'Regular monitoring of ongoing health conditions such as diabetes, hypertension, or asthma.',
      icon: '❤️'
    },
    {
      title: 'Test Result Review',
      description: 'Discussion of laboratory, imaging, or other diagnostic test results and their implications for your health.',
      icon: '📋'
    },
    {
      title: 'Medication Review',
      description: 'Assessment of current medications, their effectiveness, and any side effects you may be experiencing.',
      icon: '💉'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/30 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Heading level={1}>
              Follow-Up Visits
              <span className="block text-primary mt-2">Continued Care for Your Health Journey</span>
            </Heading>
            <Text className="mt-4 text-lg max-w-3xl">
              Follow-up visits are an essential part of your healthcare journey, allowing Dr. Miami to 
              monitor your progress, adjust treatments as needed, and ensure you're on the path to optimal health.
            </Text>
            <div className="mt-8">
              <Button href="/contact">Schedule a Follow-Up</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section>
        <Container>
          <Heading level={2} className="text-center mb-12">
            Benefits of Regular Follow-Up Visits
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

      {/* Types of Follow-Up Visits Section */}
      <Section className="bg-gray-50">
        <Container>
          <Heading level={2} className="text-center mb-12">
            Types of Follow-Up Visits
          </Heading>
          <Grid className="grid-cols-1 md:grid-cols-2 gap-8">
            {visitTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">{type.icon}</span>
                    <Heading level={3} className="text-xl">{type.title}</Heading>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text>{type.description}</Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* What to Expect Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <Heading level={2} className="text-center mb-12">
              What to Expect During Your Follow-Up Visit
            </Heading>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="space-y-6">
                <div>
                  <Heading level={3} className="text-xl mb-3">Before Your Visit</Heading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><Text>Make note of any changes in your symptoms or condition since your last visit</Text></li>
                    <li><Text>Track any side effects from medications or treatments</Text></li>
                    <li><Text>Prepare questions you'd like to discuss with Dr. Miami</Text></li>
                    <li><Text>Bring an updated list of all medications you're currently taking</Text></li>
                  </ul>
                </div>
                
                <div>
                  <Heading level={3} className="text-xl mb-3">During Your Visit</Heading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><Text>Review of your progress since the last appointment</Text></li>
                    <li><Text>Discussion of any new or persistent symptoms</Text></li>
                    <li><Text>Evaluation of treatment effectiveness</Text></li>
                    <li><Text>Review of any test results</Text></li>
                    <li><Text>Adjustments to your treatment plan if necessary</Text></li>
                    <li><Text>Addressing your questions and concerns</Text></li>
                  </ul>
                </div>
                
                <div>
                  <Heading level={3} className="text-xl mb-3">After Your Visit</Heading>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><Text>Implementation of any treatment adjustments</Text></li>
                    <li><Text>Scheduling of any recommended tests or procedures</Text></li>
                    <li><Text>Coordination with specialists if needed</Text></li>
                    <li><Text>Planning for your next follow-up appointment</Text></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Telehealth Option Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Grid className="grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <Heading level={2} className="mb-4">
                  Telehealth Follow-Up Options
                </Heading>
                <Text className="mb-4">
                  Many follow-up visits can be conducted via our secure telehealth platform, 
                  offering you convenience without compromising on care quality.
                </Text>
                <Text className="mb-6">
                  Telehealth follow-ups are ideal for:
                </Text>
                <ul className="list-disc pl-5 space-y-2 mb-6">
                  <li><Text>Medication reviews</Text></li>
                  <li><Text>Discussion of test results</Text></li>
                  <li><Text>Monitoring of stable chronic conditions</Text></li>
                  <li><Text>Minor symptom checks</Text></li>
                </ul>
                <Button href="/services/telehealth">Learn About Telehealth</Button>
              </div>
              <div className="bg-primary/10 p-8 rounded-xl">
                <div className="text-center">
                  <span className="text-5xl mb-4 block" aria-hidden="true">💻</span>
                  <Heading level={3} className="mb-4">Virtual Follow-Ups</Heading>
                  <Text className="mb-6">
                    Save time and receive the same quality care from the comfort of your home with our 
                    secure, HIPAA-compliant telehealth platform.
                  </Text>
                  <Button href="/contact" variant="outline">Schedule a Virtual Follow-Up</Button>
                </div>
              </div>
            </Grid>
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
                <Heading level={3} className="text-xl mb-3">How often should I schedule follow-up visits?</Heading>
                <Text>The frequency of follow-up visits depends on your specific health condition, treatment plan, and progress. Dr. Miami will recommend an appropriate schedule based on your individual needs.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Are follow-up visits covered by insurance?</Heading>
                <Text>Most insurance plans cover medically necessary follow-up visits. We recommend verifying coverage with your insurance provider before your appointment. Our staff can assist with insurance questions.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">What if I need to reschedule my follow-up?</Heading>
                <Text>We understand that schedules can change. Please contact our office at least 24 hours in advance to reschedule your appointment. This allows us to offer your time slot to another patient who may need it.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Can I request a telehealth follow-up instead of an in-person visit?</Heading>
                <Text>Yes, many follow-up appointments can be conducted via telehealth. Please discuss this option with our staff when scheduling your appointment. Dr. Miami will determine if your specific situation is appropriate for a virtual visit.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="text-center py-8">
            <Heading level={2} className="text-white">Ready to Schedule Your Follow-Up?</Heading>
            <Text className="mt-4 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule your follow-up appointment with Dr. Miami.
              Consistent follow-up care is essential for maintaining your health and achieving optimal outcomes.
            </Text>
            <Button href="/contact" variant="secondary">Book Your Follow-Up</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
} 