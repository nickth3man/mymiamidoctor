"use client";

import React, { useState } from 'react';
import { 
  Heading, 
  Text, 
  TextField, 
  Select, 
  FormGroup, 
  FormLabel, 
  FormError,
  Button
} from '@/components';

export default function FormExamplePage() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formState.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formState.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    if (formState.phone.trim() && !/^\d{10}$/.test(formState.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formState.service) {
      newErrors.service = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
          setIsSuccess(false);
        }, 3000);
      }, 1500);
    }
  };

  const serviceOptions = [
    { value: 'general', label: 'General Consultation' },
    { value: 'telehealth', label: 'Telehealth Appointment' },
    { value: 'followup', label: 'Follow-up Visit' },
    { value: 'prescription', label: 'Prescription Renewal' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Heading level={1}>Form Components Example</Heading>
      <Text className="mt-4 mb-8">
        This page demonstrates the form components available in the MyMiamiDoctor website.
      </Text>

      {isSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8" role="alert">
          <Heading level={4} className="mb-2">Thank you for your submission!</Heading>
          <Text>We have received your information and will contact you shortly.</Text>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormGroup>
              <TextField
                label="First Name"
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                error={errors.firstName}
                required
                fullWidth
              />
            </FormGroup>

            <FormGroup>
              <TextField
                label="Last Name"
                name="lastName"
                value={formState.lastName}
                onChange={handleChange}
                error={errors.lastName}
                required
                fullWidth
              />
            </FormGroup>
          </div>

          <FormGroup>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              error={errors.email}
              required
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              error={errors.phone}
              hint="Format: (123) 456-7890"
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <Select
              label="Service Needed"
              name="service"
              value={formState.service}
              onChange={handleChange}
              options={serviceOptions}
              placeholder="Select a service"
              error={errors.service}
              required
              fullWidth
            />
          </FormGroup>

          <FormGroup>
            <FormLabel htmlFor="message" id="message-label">Additional Information</FormLabel>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              aria-labelledby="message-label"
              placeholder="Enter any additional information here"
            />
          </FormGroup>

          <div className="mt-8">
            <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
              Submit Form
            </Button>
          </div>
        </form>
      )}

      <div className="mt-16">
        <Heading level={2} className="mb-6">Individual Form Components</Heading>
        
        <div className="space-y-8">
          <div>
            <Heading level={3} className="mb-4">TextField Component</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextField label="Default TextField" />
              <TextField label="Disabled TextField" disabled />
              <TextField label="With Error" error="This is an error message" />
              <TextField label="With Hint" hint="This is a hint message" />
              <TextField label="Required Field" required />
              <TextField label="With Placeholder" placeholder="Enter text here" />
            </div>
          </div>
          
          <div>
            <Heading level={3} className="mb-4">Select Component</Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select 
                label="Default Select" 
                options={serviceOptions} 
              />
              <Select 
                label="With Placeholder" 
                options={serviceOptions} 
                placeholder="Select an option" 
              />
              <Select 
                label="Disabled Select" 
                options={serviceOptions} 
                disabled 
              />
              <Select 
                label="With Error" 
                options={serviceOptions} 
                error="This is an error message" 
              />
              <Select 
                label="Required Select" 
                options={serviceOptions} 
                required 
              />
              <Select 
                label="With Hint" 
                options={serviceOptions} 
                hint="This is a hint message" 
              />
            </div>
          </div>
          
          <div>
            <Heading level={3} className="mb-4">Form Container Components</Heading>
            <div className="space-y-6">
              <div>
                <Heading level={4} className="mb-2">FormGroup</Heading>
                <FormGroup className="border border-dashed border-gray-300 p-4">
                  <TextField label="Field inside FormGroup" />
                </FormGroup>
              </div>
              
              <div>
                <Heading level={4} className="mb-2">FormLabel</Heading>
                <FormLabel htmlFor="example-input" id="example-input-label">Standalone Label</FormLabel>
                <input 
                  id="example-input" 
                  type="text" 
                  className="px-4 py-2 rounded-md border border-gray-300" 
                  aria-labelledby="example-input-label"
                  placeholder="Example input"
                />
              </div>
              
              <div>
                <Heading level={4} className="mb-2">FormError</Heading>
                <FormLabel htmlFor="error-input" id="error-input-label">Input with Standalone Error</FormLabel>
                <input 
                  id="error-input" 
                  type="text" 
                  className="px-4 py-2 rounded-md border border-red-500" 
                  aria-labelledby="error-input-label"
                  placeholder="Input with error"
                />
                <FormError>This is a standalone error message</FormError>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 