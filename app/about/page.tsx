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
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Marina Gafanovich | Miami Primary Care Physician",
  description: "Learn about Dr. Marina Gafanovich's credentials, experience, and approach to patient care in Miami. Board-certified physician specializing in primary care.",
  keywords: "Dr. Marina Gafanovich Miami, about Dr. Gafanovich, Miami doctor credentials, Russian speaking doctor Miami",
};

export default function AboutPage() {
  // Sample credentials data
  const credentials = [
    {
      title: 'Education',
      items: [
        'Doctor of Medicine, University of Miami School of Medicine',
        'Residency in Internal Medicine, Jackson Memorial Hospital',
        'Board Certification in Internal Medicine'
      ]
    },
    {
      title: 'Professional Memberships',
      items: [
        'American Medical Association',
        'Florida Medical Association',
        'American College of Physicians'
      ]
    },
    {
      title: 'Languages',
      items: [
        'English',
        'Spanish',
        'Russian'
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/30 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Heading level={1}>
              About Dr. Marina Gafanovich
              <span className="block text-primary mt-2">Your Dedicated Primary Care Physician</span>
            </Heading>
            <Text className="mt-4 text-lg max-w-3xl">
              With over 15 years of experience, Dr. Gafanovich provides personalized, compassionate care 
              to patients throughout the Miami area, combining medical expertise with a patient-centered approach.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Doctor Profile Section */}
      <Section>
        <Container>
          <Grid className="grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-secondary/10 rounded-lg p-8 aspect-square flex items-center justify-center">
                <span className="text-6xl">👨‍⚕️</span>
                {/* Placeholder for doctor's photo */}
                <Text className="text-center mt-4">Doctor's photo will be placed here</Text>
              </div>
            </div>
            
            <div>
              <Heading level={2}>Professional Biography</Heading>
              <Text className="mt-4 mb-6">
                Dr. Gafanovich is a board-certified physician specializing in primary care and internal medicine. 
                After graduating from the University of Miami School of Medicine, Dr. Gafanovich completed residency 
                training at Jackson Memorial Hospital and has been serving the South Florida community ever since.
              </Text>
              <Text className="mb-6">
                With a focus on preventive care and chronic disease management, Dr. Gafanovich is committed to 
                helping patients achieve optimal health through personalized treatment plans and education. 
                Dr. Gafanovich takes the time to listen to each patient's concerns and works collaboratively to 
                develop effective healthcare strategies.
              </Text>
              <Text className="mb-8">
                As a multilingual physician fluent in English, Spanish, and Russian, Dr. Gafanovich is able to 
                provide culturally sensitive care to Miami's diverse population. This commitment to accessible 
                healthcare extends to the practice's telehealth services, which allow patients to receive 
                quality care from the comfort of their homes.
              </Text>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Credentials Section */}
      <Section className="bg-gray-50">
        <Container>
          <Heading level={2} className="text-center mb-12">Credentials & Experience</Heading>
          
          <Grid className="grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((credential) => (
              <Card key={credential.title} className="h-full">
                <CardHeader>
                  <Heading level={3}>{credential.title}</Heading>
                </CardHeader>
                <CardBody>
                  <ul className="list-disc pl-5 space-y-2">
                    {credential.items.map((item, index) => (
                      <li key={index}>
                        <Text>{item}</Text>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Philosophy Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2}>Our Philosophy</Heading>
            <Text className="mt-4 mb-8 text-lg">
              At MyMiamiDoctor, we believe in a patient-centered approach to healthcare that emphasizes 
              prevention, education, and personalized treatment plans.
            </Text>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-12">
              <div>
                <Heading level={3} className="mb-4">Patient-Centered Care</Heading>
                <Text>
                  We take the time to listen to your concerns, answer your questions, and involve you 
                  in decisions about your healthcare. Your comfort and well-being are our top priorities.
                </Text>
              </div>
              
              <div>
                <Heading level={3} className="mb-4">Preventive Approach</Heading>
                <Text>
                  We emphasize preventive care to help you maintain good health and catch potential 
                  issues before they become serious problems. Regular check-ups and screenings are 
                  essential components of our care philosophy.
                </Text>
              </div>
              
              <div>
                <Heading level={3} className="mb-4">Comprehensive Treatment</Heading>
                <Text>
                  We consider all aspects of your health—physical, emotional, and social—when developing 
                  treatment plans. This holistic approach leads to better outcomes and improved quality of life.
                </Text>
              </div>
              
              <div>
                <Heading level={3} className="mb-4">Accessible Healthcare</Heading>
                <Text>
                  We believe that quality healthcare should be accessible to everyone. Our telehealth 
                  services and multilingual capabilities help break down barriers to care.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="text-center py-8">
            <Heading level={2} className="text-white">Ready to Experience Our Care?</Heading>
            <Text className="mt-4 mb-8 max-w-2xl mx-auto">
              Schedule an appointment today and discover the difference that personalized, 
              compassionate healthcare can make in your life.
            </Text>
            <Button href="/contact" variant="secondary">Book an Appointment</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
} 