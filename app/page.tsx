"use client";

import React from 'react';
import { 
  Heading, 
  Text, 
  Button,
  Container,
  Section,
  HeroSection,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter
} from '../components';
import Link from 'next/link';

export default function HomePage() {
  // Sample data for services
  const services = [
    {
      title: 'General Consultations',
      description: 'Comprehensive medical consultations for a wide range of health concerns.',
      icon: '👨‍⚕️',
      link: '/services#general-consultations'
    },
    {
      title: 'Telehealth Appointments',
      description: 'Virtual appointments from the comfort of your home via secure video conferencing.',
      icon: '💻',
      link: '/telehealth'
    },
    {
      title: 'Follow-up Visits',
      description: 'Continued care and monitoring of your health progress and treatment effectiveness.',
      icon: '📋',
      link: '/services#follow-up-visits'
    },
    {
      title: 'Prescription Renewals',
      description: 'Easy and convenient prescription renewal service for existing patients.',
      icon: '💊',
      link: '/services#prescription-renewals'
    }
  ];

  // Sample data for testimonials
  const testimonials = [
    {
      quote: "Dr. Miami provided exceptional care during my telehealth appointment. The online process was seamless and I felt like I was in the office.",
      author: "Maria G.",
      location: "Coral Gables, FL"
    },
    {
      quote: "I've been a patient for years and the level of personalized care is outstanding. The new telehealth option has made it even more convenient.",
      author: "David R.",
      location: "Miami Beach, FL"
    },
    {
      quote: "As someone with a busy schedule, the flexible appointment options and patient portal have made managing my healthcare so much easier.",
      author: "Sophia T.",
      location: "Brickell, Miami"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Quality Healthcare in Miami"
        subtitle="Personalized medical care with convenient telehealth options"
        ctaText="Book an Appointment"
        ctaLink="/contact"
        secondaryCtaText="Learn About Telehealth"
        secondaryCtaLink="/telehealth"
        backgroundImage="/images/placeholders/widescreen.svg"
      />

      {/* Services Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2}>Our Services</Heading>
            <Text className="mt-4 max-w-2xl mx-auto">
              We offer a comprehensive range of medical services to meet your healthcare needs,
              both in-person and through our secure telehealth platform.
            </Text>
          </div>

          <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                    <Heading level={3}>{service.title}</Heading>
                  </div>
                </CardHeader>
                <CardBody>
                  <Text>{service.description}</Text>
                </CardBody>
                <CardFooter>
                  <Button href={service.link} variant="text">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Telehealth Benefits Section */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-primary/10 rounded-lg p-8 aspect-video flex items-center justify-center">
                <span className="text-6xl">🩺</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Heading level={2}>Telehealth Benefits</Heading>
              <Text className="mt-4 mb-6">
                Experience the convenience of quality healthcare from the comfort of your home.
                Our telehealth services provide secure, HIPAA-compliant video consultations with
                the same level of care you expect from in-person visits.
              </Text>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <Text>No travel or waiting room time</Text>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <Text>Same quality care as in-person visits</Text>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <Text>Secure, HIPAA-compliant platform</Text>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  <Text>Prescription management available</Text>
                </li>
              </ul>
              <Button href="/telehealth">Learn More About Telehealth</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <Heading level={2}>What Our Patients Say</Heading>
            <Text className="mt-4 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience.
            </Text>
          </div>

          <Grid className="grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardBody>
                  <div className="text-primary text-4xl mb-4">"</div>
                  <Text className="italic mb-6">{testimonial.quote}</Text>
                  <div className="mt-auto">
                    <Text className="font-bold">{testimonial.author}</Text>
                    <Text className="text-sm text-gray-600">{testimonial.location}</Text>
                  </div>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* About Preview Section */}
      <Section>
        <Container>
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-secondary/10 rounded-lg p-8 aspect-square flex items-center justify-center">
                <span className="text-6xl">👨‍⚕️</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Heading level={2}>About Dr. Miami</Heading>
              <Text className="mt-4 mb-6">
                Dr. Miami is a board-certified physician with over 15 years of experience
                providing exceptional healthcare to the Miami community. With a focus on
                patient-centered care, Dr. Miami combines medical expertise with a compassionate
                approach to help patients achieve their best health.
              </Text>
              <Text className="mb-8">
                After graduating from the University of Miami School of Medicine, Dr. Miami
                completed residency training at Jackson Memorial Hospital and has been serving
                the South Florida community ever since.
              </Text>
              <Button href="/about">Learn More About Dr. Miami</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <Container>
          <div className="text-center py-8">
            <Heading level={2} className="text-white">Ready to Schedule Your Appointment?</Heading>
            <Text className="mt-4 mb-8 max-w-2xl mx-auto">
              Whether you prefer an in-person visit or the convenience of telehealth,
              we're here to provide the care you need.
            </Text>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/contact" variant="secondary">Book an Appointment</Button>
              <Button href="/telehealth" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn About Telehealth
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
