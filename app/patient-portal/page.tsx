"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  TextField,
  FormGroup,
  Button
} from "@/components";

// Metadata is defined in the separate metadata.ts file

interface NotificationFormData {
  fullName: string;
  email: string;
  phone: string;
  isExistingPatient: boolean;
}

export default function PatientPortal() {
  // Form state
  const [formState, setFormState] = useState<NotificationFormData>({
    fullName: '',
    email: '',
    phone: '',
    isExistingPatient: false
  });

  // Form validation and submission states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    // Type assertion for checkbox
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
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
    
    if (!formState.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        
        // Reset form after successful submission
        setFormState({
          fullName: '',
          email: '',
          phone: '',
          isExistingPatient: false
        });
      }, 1500);
    }
  };

  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full">
              Coming Soon
            </div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-navy">
              Patient Portal
              <span className="block text-primary mt-2">Securely Access Your Health Information</span>
            </h1>
            <p className="text-lg mb-8">
              We're working on a state-of-the-art patient portal to give you convenient, secure access to your health information and services.
            </p>
            <a 
              href="#notify" 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Get Notified When It Launches
            </a>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">Coming Portal Features</h2>
            <p className="text-center mb-12">
              Our upcoming patient portal will offer these convenient features to enhance your healthcare experience:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-light p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">Medical Records Access</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>View your test results</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access visit summaries</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Track your health metrics over time</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>View medication history</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">Appointment Management</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Schedule appointments online</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>View upcoming appointments</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive appointment reminders</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Reschedule or cancel as needed</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">Secure Messaging</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Direct message with our office</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ask non-urgent medical questions</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Request prescription refills</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive important notifications</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-light p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl text-navy mb-3">Billing & Forms</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Pay your bills online</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>View billing history</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Complete forms electronically</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Access and download statements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Signup Section */}
      <section id="notify" className="py-16 px-4 bg-light">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl text-navy mb-6 text-center">Get Notified When Our Portal Launches</h2>
            <p className="text-center mb-8">
              Sign up to be among the first to access our patient portal when it goes live. We'll email you with instructions on how to create your account.
            </p>
            
            {isSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded mb-8" role="alert">
                <h3 className="font-heading text-xl mb-2">Thank You for Signing Up!</h3>
                <p>
                  We've added you to our notification list. You'll be among the first to know when our patient portal launches.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <FormGroup>
                  <TextField
                    label="Full Name"
                    name="fullName"
                    id="notify-name"
                    value={formState.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                    placeholder="Your full name"
                    required
                    fullWidth
                  />
                </FormGroup>
                
                <FormGroup>
                  <TextField
                    label="Email Address"
                    name="email"
                    id="notify-email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    error={errors.email}
                    placeholder="Your email address"
                    required
                    fullWidth
                  />
                </FormGroup>
                
                <FormGroup>
                  <TextField
                    label="Phone Number (Optional)"
                    name="phone"
                    id="notify-phone"
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    placeholder="(123) 456-7890"
                    hint="We'll only use this for portal-related notifications"
                    fullWidth
                  />
                </FormGroup>
                
                <div className="flex items-start pt-2">
                  <input 
                    type="checkbox" 
                    id="notify-patient" 
                    name="isExistingPatient"
                    checked={formState.isExistingPatient}
                    onChange={handleChange}
                    className="mt-1 mr-2" 
                  />
                  <label htmlFor="notify-patient" className="text-sm">
                    I am an existing patient of Dr. Gafanovich
                  </label>
                </div>
                
                <div className="text-center pt-4">
                  <Button 
                    type="submit" 
                    isLoading={isSubmitting} 
                    disabled={isSubmitting}
                  >
                    Notify Me When Portal Launches
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">Portal Launch Timeline</h2>
            
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>
              
              <div className="space-y-12">
                {/* Phase 1 */}
                <div className="relative flex items-center justify-between">
                  <div className="flex-1 pr-8 text-right md:pr-16">
                    <h3 className="font-heading text-xl text-navy mb-2">Phase 1: Development</h3>
                    <p className="text-gray-700">Building a secure portal infrastructure with robust protection for your sensitive health information.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-primary/70 shadow-md flex items-center justify-center text-white">
                    <span>1</span>
                  </div>
                  <div className="flex-1 pl-8 md:pl-16">
                    <span className="text-primary font-semibold">In Progress</span>
                  </div>
                </div>
                
                {/* Phase 2 */}
                <div className="relative flex items-center justify-between">
                  <div className="flex-1 pr-8 text-right md:pr-16">
                    <h3 className="font-heading text-xl text-navy mb-2">Phase 2: Testing</h3>
                    <p className="text-gray-700">Rigorous testing and refinement to ensure a smooth, intuitive user experience.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-gray-200 shadow-md flex items-center justify-center text-gray-500">
                    <span>2</span>
                  </div>
                  <div className="flex-1 pl-8 md:pl-16">
                    <span className="text-gray-500">Coming Soon</span>
                  </div>
                </div>
                
                {/* Phase 3 */}
                <div className="relative flex items-center justify-between">
                  <div className="flex-1 pr-8 text-right md:pr-16">
                    <h3 className="font-heading text-xl text-navy mb-2">Phase 3: Beta Launch</h3>
                    <p className="text-gray-700">Limited rollout to selected patients to gather feedback and make final adjustments.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-gray-200 shadow-md flex items-center justify-center text-gray-500">
                    <span>3</span>
                  </div>
                  <div className="flex-1 pl-8 md:pl-16">
                    <span className="text-gray-500">Q3 2023</span>
                  </div>
                </div>
                
                {/* Phase 4 */}
                <div className="relative flex items-center justify-between">
                  <div className="flex-1 pr-8 text-right md:pr-16">
                    <h3 className="font-heading text-xl text-navy mb-2">Phase 4: Full Launch</h3>
                    <p className="text-gray-700">Complete portal launch available to all patients of Dr. Gafanovich.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white bg-gray-200 shadow-md flex items-center justify-center text-gray-500">
                    <span>4</span>
                  </div>
                  <div className="flex-1 pl-8 md:pl-16">
                    <span className="text-gray-500">Q4 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl text-navy mb-6">Need Help Before the Portal Launches?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            While our patient portal is in development, you can still access many of our services through traditional methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Contact Our Office
            </Link>
            <Link 
              href="/telehealth" 
              className="border border-primary text-primary hover:bg-primary/10 font-body font-bold py-3 px-8 rounded-button transition duration-300 inline-block"
            >
              Learn About Telehealth
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 