"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    // For now, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your message! We'll get back to you shortly.",
    });
  };

  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-navy">
              Contact Us
              <span className="block text-primary mt-2">We're Here to Help</span>
            </h1>
            <p className="text-lg mb-8">
              Have questions or ready to schedule an appointment? Reach out to Dr. Gafanovich's office using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl text-navy mb-6">Office Information</h2>
              
              <div className="mb-8">
                <h3 className="font-heading text-xl mb-3 text-primary">Address</h3>
                <p className="mb-1">123 Medical Plaza</p>
                <p className="mb-1">Suite 456</p>
                <p className="mb-4">Miami, FL 33101</p>
                <a 
                  href="https://maps.google.com/?q=123+Medical+Plaza+Miami+FL+33101" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  <span>Get Directions</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              
              <div className="mb-8">
                <h3 className="font-heading text-xl mb-3 text-primary">Phone & Email</h3>
                <p className="mb-1">
                  <span className="font-semibold">Phone:</span>{" "}
                  <a href="tel:3055551234" className="hover:text-primary">(305) 555-1234</a>
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Fax:</span>{" "}
                  <span>(305) 555-5678</span>
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:info@miamidoctor.com" className="hover:text-primary">info@miamidoctor.com</a>
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-heading text-xl mb-3 text-primary">Office Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <p>Monday - Friday:</p>
                  <p>9:00 AM - 5:00 PM</p>
                  <p>Saturday:</p>
                  <p>10:00 AM - 2:00 PM</p>
                  <p>Sunday:</p>
                  <p>Closed</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-xl mb-3 text-primary">Telehealth</h3>
                <p className="mb-4">Telehealth appointments are available during regular office hours and by special arrangement.</p>
                <a 
                  href="/telehealth" 
                  className="text-primary hover:underline inline-flex items-center"
                >
                  <span>Learn more about telehealth</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl text-navy mb-6">Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className="bg-primary/10 p-6 rounded-lg border border-primary">
                  <p className="text-center text-lg">{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-semibold">
                      Name <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold">
                      Email <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredContact" className="block mb-2 font-semibold">
                      Preferred Contact Method
                    </label>
                    <select
                      id="preferredContact"
                      name="preferredContact"
                      value={formData.preferredContact}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-semibold">
                      Message <span className="text-secondary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p>Fields marked with <span className="text-secondary">*</span> are required</p>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Find Our Office</h2>
            <p className="max-w-2xl mx-auto text-lg">Conveniently located in the heart of Miami</p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-white border-2 border-dashed border-gray-300 flex items-center justify-center p-8 rounded-lg h-80 md:h-96 shadow-md max-w-5xl mx-auto">
            <div className="text-gray-700 text-center font-body">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="font-semibold">Interactive Map</p>
              <p className="text-sm mt-2">Map integration coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl text-navy mb-4">Insurance & Payment</h2>
            <p className="text-lg mb-8">
              We accept most major insurance plans. Please contact our office to verify your coverage.
            </p>
            <div className="bg-primary/10 p-6 rounded-lg border border-primary inline-block">
              <p className="font-semibold">For insurance verification or payment questions:</p>
              <p className="mt-2">Call: <a href="tel:3055551234" className="text-primary">(305) 555-1234</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 