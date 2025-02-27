"use client";

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
  TextField,
  Select
} from '@/components';
import { TextArea } from '@/components/ui/TextArea';
import { Radio } from '@/components/ui/Radio';
import { Checkbox } from '@/components/ui/Checkbox';
import type { Metadata } from "next";
import type { TextFieldType } from '@/components/ui/TextField';

export const metadata: Metadata = {
  title: "Contact & Appointments | MyMiamiDoctor",
  description: "Schedule an appointment with Dr. Miami. Contact us for general inquiries, appointment scheduling, or to learn more about our services.",
  keywords: "doctor appointment Miami, schedule doctor visit, contact Miami doctor, medical appointment",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/30 py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <Heading level={1}>
              Contact & Appointments
              <span className="block text-primary mt-2">Schedule Your Visit with Dr. Miami</span>
            </Heading>
            <Text className="mt-4 text-lg max-w-3xl">
              We're here to help you schedule an appointment, answer your questions, 
              or address any concerns you may have. Use the form below or contact us directly.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Contact Information & Form Section */}
      <Section>
        <Container>
          <Grid className="grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <Heading level={2} className="text-xl">Contact Information</Heading>
                </CardHeader>
                <CardBody>
                  <div className="space-y-6">
                    <div>
                      <Heading level={3} className="text-lg mb-2">Office Hours</Heading>
                      <ul className="space-y-1">
                        <li className="flex justify-between">
                          <Text>Monday - Friday:</Text>
                          <Text className="font-medium">8:00 AM - 5:00 PM</Text>
                        </li>
                        <li className="flex justify-between">
                          <Text>Saturday:</Text>
                          <Text className="font-medium">9:00 AM - 1:00 PM</Text>
                        </li>
                        <li className="flex justify-between">
                          <Text>Sunday:</Text>
                          <Text className="font-medium">Closed</Text>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <Heading level={3} className="text-lg mb-2">Phone</Heading>
                      <Text className="flex items-center">
                        <span className="mr-2" aria-hidden="true">📞</span>
                        (305) 555-1234
                      </Text>
                      <Text className="text-sm text-gray-600 mt-1">
                        For urgent matters after hours, please call our answering service.
                      </Text>
                    </div>
                    
                    <div>
                      <Heading level={3} className="text-lg mb-2">Email</Heading>
                      <Text className="flex items-center">
                        <span className="mr-2" aria-hidden="true">✉️</span>
                        appointments@mymiamidoctor.com
                      </Text>
                    </div>
                    
                    <div>
                      <Heading level={3} className="text-lg mb-2">Address</Heading>
                      <Text className="flex items-start">
                        <span className="mr-2 mt-1" aria-hidden="true">📍</span>
                        <span>
                          123 Health Avenue<br />
                          Suite 456<br />
                          Miami, FL 33101
                        </span>
                      </Text>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-8">
                <Card>
                  <CardHeader>
                    <Heading level={3} className="text-xl">Emergency Information</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text className="mb-4">
                      If you are experiencing a medical emergency, please call 911 or go to the nearest emergency room.
                    </Text>
                    <Text className="text-sm">
                      For urgent but non-emergency medical concerns after hours, 
                      please call our main number and follow the prompts to reach our on-call provider.
                    </Text>
                  </CardBody>
                </Card>
              </div>
            </div>
            
            {/* Appointment Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <Heading level={2} className="text-xl">Schedule an Appointment</Heading>
                </CardHeader>
                <CardBody>
                  <Text className="mb-6">
                    Please fill out the form below to request an appointment. Our staff will contact you 
                    within 1 business day to confirm your appointment details.
                  </Text>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TextField
                        label="First Name"
                        id="firstName"
                        required
                      />
                      <TextField
                        label="Last Name"
                        id="lastName"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <TextField
                        label="Email Address"
                        id="email"
                        type="email"
                        required
                      />
                      <TextField
                        label="Phone Number"
                        id="phone"
                        type="tel"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select
                        label="Appointment Type"
                        id="appointmentType"
                        options={[
                          { value: "", label: "Select an option", disabled: true },
                          { value: "new-patient", label: "New Patient Consultation" },
                          { value: "follow-up", label: "Follow-up Visit" },
                          { value: "telehealth", label: "Telehealth Appointment" },
                          { value: "prescription", label: "Prescription Renewal" },
                          { value: "other", label: "Other" }
                        ]}
                        required
                      />
                      <TextField
                        label="Preferred Date"
                        id="preferredDate"
                        type={"date" as TextFieldType}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Select
                        label="Preferred Time"
                        id="preferredTime"
                        options={[
                          { value: "", label: "Select an option", disabled: true },
                          { value: "morning", label: "Morning (8:00 AM - 12:00 PM)" },
                          { value: "afternoon", label: "Afternoon (12:00 PM - 5:00 PM)" }
                        ]}
                        required
                      />
                      <div>
                        <Heading level={3} className="text-sm font-medium mb-2">Preferred Contact Method</Heading>
                        <Radio
                          name="contactMethod"
                          options={[
                            { value: "email", label: "Email" },
                            { value: "phone", label: "Phone" }
                          ]}
                          defaultValue="email"
                          onChange={(value: string) => {}}
                        />
                      </div>
                    </div>
                    
                    <TextArea
                      label="Reason for Visit / Additional Information"
                      id="visitReason"
                      rows={4}
                      placeholder="Please briefly describe the reason for your visit and any specific concerns you'd like to address."
                    />
                    
                    <div>
                      <Checkbox
                        id="newPatient"
                        label="I am a new patient"
                      />
                    </div>
                    
                    <div>
                      <Checkbox
                        id="insuranceInfo"
                        label="I will bring my insurance information to my appointment"
                      />
                    </div>
                    
                    <div>
                      <Checkbox
                        id="termsAgree"
                        label="I understand that this is only a request and not a confirmed appointment. Someone will contact me to finalize the details."
                        required
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button type="submit">Submit Appointment Request</Button>
                      <Text className="text-sm text-gray-600 mt-4">
                        * Required fields
                      </Text>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Map Section */}
      <Section className="bg-gray-50">
        <Container>
          <Heading level={2} className="text-center mb-8">Our Location</Heading>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <Text className="text-gray-600">
              [Interactive Map Would Be Embedded Here]
            </Text>
          </div>
          <div className="max-w-2xl mx-auto mt-8">
            <Heading level={3} className="text-xl mb-4">Directions</Heading>
            <Text className="mb-4">
              Our office is conveniently located in downtown Miami, easily accessible by public transportation and with ample parking available.
            </Text>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Heading level={4} className="text-lg mb-2">By Car</Heading>
                <ul className="list-disc pl-5 space-y-1">
                  <li><Text>From I-95: Take exit 2A toward Biscayne Boulevard</Text></li>
                  <li><Text>Continue on Biscayne Blvd for 0.5 miles</Text></li>
                  <li><Text>Turn right onto Health Avenue</Text></li>
                  <li><Text>Our office will be on the right in the Miami Medical Plaza</Text></li>
                </ul>
              </div>
              <div>
                <Heading level={4} className="text-lg mb-2">Parking</Heading>
                <Text>
                  Parking is available in the Miami Medical Plaza garage. We validate parking for patients.
                </Text>
                <Heading level={4} className="text-lg mt-4 mb-2">Public Transportation</Heading>
                <Text>
                  The Metromover Government Center Station is a 5-minute walk from our office.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Insurance Section */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="mb-6">Insurance Information</Heading>
            <Text className="mb-8">
              We accept most major insurance plans. Please bring your insurance card to your appointment.
              Contact your insurance provider to verify coverage for your specific visit type.
            </Text>
            <Grid className="grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">Blue Cross Blue Shield</Text>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">Aetna</Text>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">Cigna</Text>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">United Healthcare</Text>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">Medicare</Text>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">Humana</Text>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">Medicaid</Text>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center h-20">
                <Text className="font-medium">And More</Text>
              </div>
            </Grid>
            <Text className="mt-6 text-sm italic">
              If you don't see your insurance listed or have questions about coverage, please contact our office.
            </Text>
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
                <Heading level={3} className="text-xl mb-3">What should I bring to my first appointment?</Heading>
                <Text>Please bring your photo ID, insurance card, a list of current medications, and any relevant medical records or test results. Arriving 15 minutes early to complete paperwork is recommended.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">How far in advance should I schedule an appointment?</Heading>
                <Text>For routine appointments, we recommend scheduling 2-3 weeks in advance. For urgent matters, we offer same-day or next-day appointments when available. New patients typically need to schedule further in advance.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">What is your cancellation policy?</Heading>
                <Text>We request at least 24 hours' notice for appointment cancellations. Late cancellations or missed appointments may incur a fee. We understand that emergencies happen and will consider circumstances on a case-by-case basis.</Text>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heading level={3} className="text-xl mb-3">Do you offer telehealth appointments?</Heading>
                <Text>Yes, we offer telehealth appointments for many types of visits. Please indicate your preference for a telehealth appointment when scheduling, and our staff will confirm if your visit type is appropriate for virtual care.</Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
} 