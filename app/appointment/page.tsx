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
import { SelectOption } from '@/components/ui/Select';

// Define types
interface AppointmentFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  datePreference: string;
  timePreference: string;
  service: string;
  insuranceProvider: string;
  patientType: string;
  message: string;
}

export default function AppointmentPage() {
  // Initial form state
  const [formState, setFormState] = useState<AppointmentFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    datePreference: '',
    timePreference: '',
    service: '',
    insuranceProvider: '',
    patientType: 'new',
    message: ''
  });

  // Form states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form input changes
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

  // Validate the form
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
    
    if (!formState.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formState.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formState.datePreference) {
      newErrors.datePreference = 'Please select your preferred date';
    }
    
    if (!formState.timePreference) {
      newErrors.timePreference = 'Please select your preferred time';
    }
    
    if (!formState.service) {
      newErrors.service = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call for appointment request
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
          setFormState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            datePreference: '',
            timePreference: '',
            service: '',
            insuranceProvider: '',
            patientType: 'new',
            message: ''
          });
          setIsSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  // Prepare date options (next 14 days)
  const dateOptions: SelectOption[] = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1); // Skip today
    
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) {
      return null;
    }
    
    const formattedDate = date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    
    return { 
      value: date.toISOString().split('T')[0], 
      label: formattedDate 
    };
  })
  // Filter out null values and ensure the type is correct
  .filter((option): option is SelectOption => option !== null);

  // Time slot options
  const timeOptions: SelectOption[] = [
    { value: '09:00', label: '9:00 AM' },
    { value: '09:30', label: '9:30 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '13:30', label: '1:30 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '16:00', label: '4:00 PM' },
  ];

  // Service options
  const serviceOptions: SelectOption[] = [
    { value: 'general', label: 'General Consultation' },
    { value: 'annual', label: 'Annual Physical' },
    { value: 'telehealth', label: 'Telehealth Appointment' },
    { value: 'followup', label: 'Follow-up Visit' },
    { value: 'urgent', label: 'Urgent Care' },
    { value: 'specialist', label: 'Specialist Referral' },
  ];

  // Insurance provider options
  const insuranceOptions: SelectOption[] = [
    { value: 'aetna', label: 'Aetna' },
    { value: 'bluecross', label: 'Blue Cross Blue Shield' },
    { value: 'cigna', label: 'Cigna' },
    { value: 'humana', label: 'Humana' },
    { value: 'medicare', label: 'Medicare' },
    { value: 'medicaid', label: 'Medicaid' },
    { value: 'united', label: 'UnitedHealthcare' },
    { value: 'other', label: 'Other' },
    { value: 'none', label: 'No Insurance (Self-Pay)' },
  ];

  // Patient type options
  const patientTypeOptions: SelectOption[] = [
    { value: 'new', label: 'New Patient' },
    { value: 'existing', label: 'Existing Patient' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Heading level={1}>Book an Appointment</Heading>
      <Text className="mt-4 mb-8">
        Please fill out this form to request an appointment. This is a demonstration form and not yet connected to our scheduling system. When our online booking system is fully operational, you'll be able to view and select from available time slots in real-time.
      </Text>

      {isSuccess ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded mb-8" role="alert">
          <Heading level={3} className="mb-2">Appointment Request Received</Heading>
          <Text>
            Thank you for your appointment request. In a real system, we would contact you shortly to confirm your appointment. 
            Please note that this is currently a demonstration form, so no actual appointment has been scheduled.
          </Text>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-3xl bg-white p-8 rounded-lg shadow-md">
          <Heading level={2} className="mb-6">Appointment Request Form</Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                required
                hint="Format: (123) 456-7890"
                fullWidth
              />
            </FormGroup>
          </div>

          <Heading level={3} className="mt-8 mb-4">Appointment Details</Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <FormGroup>
              <Select
                label="Preferred Date"
                name="datePreference"
                value={formState.datePreference}
                onChange={handleChange}
                options={dateOptions}
                placeholder="Select a date"
                error={errors.datePreference}
                required
                fullWidth
              />
            </FormGroup>

            <FormGroup>
              <Select
                label="Preferred Time"
                name="timePreference"
                value={formState.timePreference}
                onChange={handleChange}
                options={timeOptions}
                placeholder="Select a time"
                error={errors.timePreference}
                required
                fullWidth
              />
            </FormGroup>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
              <Select
                label="Insurance Provider"
                name="insuranceProvider"
                value={formState.insuranceProvider}
                onChange={handleChange}
                options={insuranceOptions}
                placeholder="Select insurance provider"
                fullWidth
              />
            </FormGroup>
          </div>

          <FormGroup className="mb-6">
            <Select
              label="Patient Type"
              name="patientType"
              value={formState.patientType}
              onChange={handleChange}
              options={patientTypeOptions}
              fullWidth
            />
          </FormGroup>

          <FormGroup className="mb-6">
            <FormLabel htmlFor="message" id="message-label">Additional Information</FormLabel>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              aria-labelledby="message-label"
              placeholder="Please include any additional information about your appointment request"
            />
          </FormGroup>

          <div className="mt-8">
            <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
              Request Appointment
            </Button>
          </div>
          
          <Text className="mt-6 text-sm text-gray-500">
            Note: This is a demonstration form. In a fully implemented system, you would receive 
            immediate confirmation if the time slot is available. Our staff may contact you to 
            reschedule if necessary.
          </Text>
        </form>
      )}
      
      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <Heading level={2} className="mb-4">Appointment Policies</Heading>
        
        <div className="space-y-4">
          <div>
            <Heading level={4}>Cancellation Policy</Heading>
            <Text>Please provide at least 24 hours notice if you need to cancel or reschedule your appointment.</Text>
          </div>
          
          <div>
            <Heading level={4}>Insurance and Payments</Heading>
            <Text>We accept most major insurance plans. Please bring your insurance card to your appointment. Co-payments are due at the time of service.</Text>
          </div>
          
          <div>
            <Heading level={4}>New Patients</Heading>
            <Text>New patients should arrive 15 minutes before their appointment time to complete paperwork. Alternatively, forms can be accessed through our patient portal when it becomes available.</Text>
          </div>
          
          <div>
            <Heading level={4}>Telehealth Appointments</Heading>
            <Text>For telehealth appointments, you will receive a link via email with instructions on how to join your virtual visit.</Text>
          </div>
        </div>
      </div>
    </div>
  );
} 