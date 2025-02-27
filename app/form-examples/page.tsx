'use client';

import React, { useState, ChangeEvent } from 'react';
import { Container } from '../../components/ui/Container';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import { TextField, TextFieldType } from '../../components/ui/TextField';
import { Select } from '../../components/ui/Select';
import { FormGroup } from '../../components/ui/FormGroup';
import { FormLabel } from '../../components/ui/FormLabel';
import { FormError } from '../../components/ui/FormError';
import { Button } from '../../components/ui/Button';
import { Section } from '../../components/ui/Section';
import { Checkbox } from '../../components/ui/Checkbox';
import { Radio } from '../../components/ui/Radio';
import { TextArea } from '../../components/ui/TextArea';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/ui/Card';

export default function FormExamplesPage() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    appointmentType: '',
    preferredDate: '',
    preferredTime: '',
    symptoms: '',
    contactMethod: '',
    termsAccepted: false,
    marketingOptIn: false,
  });

  // Form errors state
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle input changes
  const handleChange = (field: string, value: string | boolean) => {
    setFormData({
      ...formData,
      [field]: value
    });
    
    // Clear error when field is updated
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: ''
      });
    }
  };

  // Handle select changes
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    handleChange(e.target.name, e.target.value);
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Required fields validation
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.appointmentType) newErrors.appointmentType = 'Please select an appointment type';
    if (!formData.contactMethod) newErrors.contactMethod = 'Please select a preferred contact method';
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must accept the terms and conditions';
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation (if provided)
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would submit the form data to your backend here
      alert('Form submitted successfully!');
      console.log('Form data:', formData);
    } else {
      alert('Please correct the errors in the form');
    }
  };

  // Appointment type options
  const appointmentTypeOptions = [
    { value: '', label: 'Select an appointment type', disabled: true },
    { value: 'new-patient', label: 'New Patient Consultation' },
    { value: 'follow-up', label: 'Follow-up Appointment' },
    { value: 'annual-checkup', label: 'Annual Check-up' },
    { value: 'urgent-care', label: 'Urgent Care' },
  ];

  // Time slot options
  const timeSlotOptions = [
    { value: '', label: 'Select a time', disabled: true },
    { value: 'morning', label: 'Morning (9am - 12pm)' },
    { value: 'afternoon', label: 'Afternoon (1pm - 5pm)' },
    { value: 'evening', label: 'Evening (6pm - 8pm)' },
  ];

  // Contact method options
  const contactMethodOptions = [
    { value: 'email', label: 'Email', disabled: false },
    { value: 'phone', label: 'Phone', disabled: false },
    { value: 'text', label: 'Text Message', disabled: false },
  ];

  return (
    <Container className="py-12">
      <Heading level={1} className="mb-8 text-center">Appointment Request Form</Heading>
      <Text className="mb-8 text-center text-gray-600 max-w-2xl mx-auto">
        Please fill out the form below to request an appointment with Dr. Miami. 
        We will contact you within 24 hours to confirm your appointment.
      </Text>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <Heading level={2} className="text-xl">Patient Information</Heading>
        </CardHeader>
        
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="space-y-4">
              <Heading level={3} className="text-lg font-medium">Personal Information</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  label="First Name"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  error={errors.firstName}
                  required
                />
                
                <TextField
                  label="Last Name"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  error={errors.lastName}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  label="Email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  error={errors.email}
                  required
                />
                
                <TextField
                  label="Phone Number"
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  error={errors.phone}
                  hint="Format: (123) 456-7890"
                />
              </div>
            </div>
            
            {/* Appointment Details Section */}
            <div className="space-y-4">
              <Heading level={3} className="text-lg font-medium">Appointment Details</Heading>
              
              <Select
                label="Appointment Type"
                id="appointmentType"
                name="appointmentType"
                options={appointmentTypeOptions}
                value={formData.appointmentType}
                onChange={handleSelectChange}
                error={errors.appointmentType}
                required
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  label="Preferred Date"
                  id="preferredDate"
                  type={"date" as TextFieldType}
                  value={formData.preferredDate}
                  onChange={(e) => handleChange('preferredDate', e.target.value)}
                  hint="Select a date at least 2 days from today"
                />
                
                <Select
                  label="Preferred Time"
                  id="preferredTime"
                  name="preferredTime"
                  options={timeSlotOptions}
                  value={formData.preferredTime}
                  onChange={handleSelectChange}
                  hint="Subject to availability"
                />
              </div>
              
              <TextArea
                label="Symptoms or Concerns"
                id="symptoms"
                rows={4}
                maxLength={500}
                showCharacterCount
                value={formData.symptoms}
                onChange={(e) => handleChange('symptoms', e.target.value)}
                hint="Briefly describe your symptoms or reason for visit"
              />
            </div>
            
            {/* Contact Preferences Section */}
            <div className="space-y-4">
              <Heading level={3} className="text-lg font-medium">Contact Preferences</Heading>
              
              <Radio
                name="contactMethod"
                label="Preferred Contact Method"
                options={contactMethodOptions}
                value={formData.contactMethod}
                onChange={(value: string) => handleChange('contactMethod', value)}
                error={errors.contactMethod}
                required
                inline
              />
              
              <div className="space-y-2">
                <Checkbox
                  label="I accept the terms and conditions"
                  id="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleChange('termsAccepted', e.target.checked)}
                  error={errors.termsAccepted}
                  required
                />
                
                <Checkbox
                  label="I would like to receive health tips and updates via email"
                  id="marketingOptIn"
                  checked={formData.marketingOptIn}
                  onChange={(e) => handleChange('marketingOptIn', e.target.checked)}
                />
              </div>
            </div>
          </form>
        </CardBody>
        
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Reset Form
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit Request
          </Button>
        </CardFooter>
      </Card>
      
      {/* Form Components Reference */}
      <div className="mt-16">
        <Heading level={2} className="mb-6 text-center">Form Components Reference</Heading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Heading level={3} className="text-lg">Text Field</Heading>
            </CardHeader>
            <CardBody>
              <TextField
                label="Example Text Field"
                id="example-text"
                placeholder="Enter text here"
                hint="This is a standard text input field"
              />
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading level={3} className="text-lg">Select Dropdown</Heading>
            </CardHeader>
            <CardBody>
              <Select
                label="Example Select"
                id="example-select"
                options={[
                  { value: 'option1', label: 'Option 1' },
                  { value: 'option2', label: 'Option 2' },
                  { value: 'option3', label: 'Option 3' },
                ]}
                hint="This is a dropdown select field"
              />
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading level={3} className="text-lg">Text Area</Heading>
            </CardHeader>
            <CardBody>
              <TextArea
                label="Example Text Area"
                id="example-textarea"
                placeholder="Enter longer text here"
                rows={3}
                hint="This is a multi-line text input"
              />
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading level={3} className="text-lg">Checkbox</Heading>
            </CardHeader>
            <CardBody>
              <Checkbox
                label="Example Checkbox"
                id="example-checkbox"
                hint="This is a checkbox for boolean selections"
              />
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading level={3} className="text-lg">Radio Group</Heading>
            </CardHeader>
            <CardBody>
              <Radio
                name="example-radio"
                label="Example Radio Group"
                options={[
                  { value: 'radio1', label: 'Option 1' },
                  { value: 'radio2', label: 'Option 2' },
                ]}
                hint="This is a radio button group for single selections"
              />
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader>
              <Heading level={3} className="text-lg">Buttons</Heading>
            </CardHeader>
            <CardBody className="space-y-2">
              <Button>Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="outline">Secondary Button</Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  );
} 