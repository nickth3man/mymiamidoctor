import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telehealth Services | Dr. Marina Gafanovich",
  description: "Connect with Dr. Marina Gafanovich through convenient telehealth appointments. Get quality healthcare from the comfort of your home in Miami.",
  keywords: "telehealth Miami, virtual doctor Miami, online doctor appointment Miami, Dr. Marina Gafanovich telehealth",
};

export default function Telehealth() {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-navy">
              Telehealth Services
              <span className="block text-primary mt-2">Healthcare at Your Fingertips</span>
            </h1>
            <p className="text-lg mb-8">
              Connect with Dr. Marina Gafanovich from the comfort of your home. Get the same quality care you'd receive in-office, without the commute or wait times.
            </p>
            <Link 
              href="#booking"
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Book Your Telehealth Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Benefits of Telehealth</h2>
            <p className="max-w-2xl mx-auto text-lg">Why patients choose virtual visits with Dr. Gafanovich</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-accent hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  width="32"
                  height="32"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3 text-center text-navy">Save Time</h3>
              <p className="text-center">No travel time, no waiting room. Connect from your home, office, or anywhere with internet access.</p>
            </div>
            
            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-accent hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3 text-center text-navy">Comfort & Privacy</h3>
              <p className="text-center">Discuss your health concerns in the privacy and comfort of your own space.</p>
            </div>
            
            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-accent hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3 text-center text-navy">Reduced Exposure</h3>
              <p className="text-center">Minimize your risk of exposure to contagious illnesses by avoiding in-person waiting rooms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">How Telehealth Works</h2>
            <p className="max-w-2xl mx-auto text-lg">Simple, secure, and convenient virtual care</p>
          </div>
          
          {/* Three-Step Process */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md border border-accent hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  width="40"
                  height="40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2 text-navy">1. Schedule</h3>
              <p>Book your appointment online or call our office. Select a time that works for your schedule.</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md border border-accent hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  width="40"
                  height="40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2 text-navy">2. Prepare</h3>
              <p>You'll receive a secure link via email. Make sure you have a device with a camera and internet connection.</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center bg-white p-6 rounded-lg shadow-md border border-accent hover:shadow-lg transition-shadow">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-10 w-10 text-primary" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  width="40"
                  height="40"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2 text-navy">3. Connect</h3>
              <p>Click the link at your appointment time to join the secure video visit with Dr. Gafanovich.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">What We Treat Via Telehealth</h2>
            <p className="max-w-2xl mx-auto text-lg">Many conditions can be effectively diagnosed and treated through virtual visits</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
              <h3 className="font-heading text-xl mb-4 text-navy border-b border-accent pb-2">Common Conditions</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Cold and flu symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Allergies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Sinus infections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Skin conditions (rashes, acne)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Urinary tract infections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Headaches</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-accent">
              <h3 className="font-heading text-xl mb-4 text-navy border-b border-accent pb-2">Ongoing Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Medication management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Chronic disease monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Lab result reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Follow-up appointments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Mental health check-ins</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Prescription refills</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto mt-8 p-4 bg-primary/10 rounded-lg">
            <p className="text-center"><strong>Note:</strong> Some conditions require in-person evaluation. Dr. Gafanovich will advise if an office visit is necessary for your specific situation.</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 px-4 bg-navy text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl mb-6">Book Your Telehealth Appointment</h2>
            <p className="text-lg mb-8">Our telehealth platform is currently being integrated. Please contact us to schedule your virtual visit.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-secondary hover:bg-secondary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
              >
                Contact Us
              </Link>
              <a 
                href="tel:3055551234" 
                className="bg-white text-navy hover:bg-accent font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
              >
                Call (305) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-lg">Common questions about our telehealth services</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 p-6 bg-white rounded-lg shadow-md border border-accent">
              <h3 className="font-heading text-xl mb-2 text-navy">Is telehealth covered by insurance?</h3>
              <p>Most insurance plans now cover telehealth visits. We accept most major insurance providers. Contact our office to verify your coverage.</p>
            </div>
            
            <div className="mb-6 p-6 bg-white rounded-lg shadow-md border border-accent">
              <h3 className="font-heading text-xl mb-2 text-navy">What technology do I need?</h3>
              <p>You'll need a device with a camera and microphone (smartphone, tablet, or computer) and a stable internet connection. Our system works with most modern browsers without requiring additional software.</p>
            </div>
            
            <div className="mb-6 p-6 bg-white rounded-lg shadow-md border border-accent">
              <h3 className="font-heading text-xl mb-2 text-navy">Is telehealth secure and private?</h3>
              <p>Yes, we use a HIPAA-compliant telehealth platform that encrypts all video communications to ensure your privacy and security.</p>
            </div>
            
            <div className="mb-6 p-6 bg-white rounded-lg shadow-md border border-accent">
              <h3 className="font-heading text-xl mb-2 text-navy">Can Dr. Gafanovich prescribe medications during a telehealth visit?</h3>
              <p>Yes, Dr. Gafanovich can prescribe many medications during telehealth visits. Prescriptions will be sent electronically to your preferred pharmacy. Some controlled substances may require an in-person visit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 