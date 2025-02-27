import Image from "next/image";
import Link from "next/link";
import { HeroSection, ContactForm } from "@/components";

export default function Home() {
  return (
    <>
      <HeroSection 
        title="Quality Healthcare in Miami"
        subtitle="Expert doctors providing personalized care for you and your family"
        ctaText="Book an Appointment"
        ctaLink="/contact"
        imageSrc="/images/hero-image.jpg"
      />
      
      {/* Other sections */}
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Why Choose Us</h2>
            <p className="max-w-2xl mx-auto text-lg">Dr. Marina Gafanovich provides compassionate, personalized care for all patients.</p>
          </div>
        </div>
      </section>

      {/* Telehealth Feature Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Telehealth Services</h2>
            <p className="max-w-2xl mx-auto text-lg">Connect with Dr. Gafanovich from anywhere in Miami. Get the care you need without leaving your home.</p>
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
              <h3 className="font-heading text-xl mb-2 text-navy">Book Your Appointment</h3>
              <p>Choose a time that works for your schedule through our easy online booking system.</p>
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
              <h3 className="font-heading text-xl mb-2 text-navy">Connect From Anywhere</h3>
              <p>Join your video visit using your phone, tablet, or computer – no special equipment needed.</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-2 text-navy">Get Personalized Care</h3>
              <p>Discuss your health concerns, get a diagnosis, and receive a treatment plan—all without leaving home.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/telehealth" 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-6 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Learn More About Telehealth
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Our Services</h2>
            <p className="max-w-2xl mx-auto text-lg">Comprehensive primary care services for all your healthcare needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3 text-center text-navy">Chronic Disease Management</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>High blood pressure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Diabetes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Heart disease</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 2 */}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-heading text-xl mb-3 text-center text-navy">Preventive Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Annual physicals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Vaccinations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Health screenings</span>
                </li>
              </ul>
            </div>
            
            {/* Service Card 3 */}
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
              <h3 className="font-heading text-xl mb-3 text-center text-navy">Urgent Care</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Cold & flu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Infections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Minor injuries</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/services" 
              className="border border-primary text-primary hover:bg-primary/10 font-body font-bold py-3 px-6 rounded-button transition duration-300 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">What Our Patients Say</h2>
            <p className="max-w-2xl mx-auto text-lg">Hear from patients who have experienced Dr. Gafanovich's care.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex text-secondary mb-2">★★★★★</div>
              <p className="italic mb-4">"Dr. Gafanovich is an exceptional doctor who takes the time to listen to my concerns. Her telehealth visits are convenient and thorough."</p>
              <p className="font-semibold">Sarah M.</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex text-secondary mb-2">★★★★★</div>
              <p className="italic mb-4">"As a busy professional, I appreciate being able to see Dr. Gafanovich via telehealth. She provides the same quality care as in-person visits."</p>
              <p className="font-semibold">Michael R.</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <div className="flex text-secondary mb-2">★★★★★</div>
              <p className="italic mb-4">"Dr. Gafanovich speaks Russian, which makes it so much easier for my parents to communicate their health concerns. We're grateful to have found her."</p>
              <p className="font-semibold">Elena K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-navy text-white">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl mb-6">Ready to Experience Better Healthcare?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">Schedule your telehealth appointment today and connect with Dr. Gafanovich from the comfort of your home.</p>
          <Link 
            href="/telehealth" 
            className="bg-secondary hover:bg-secondary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
          >
            Book Your Telehealth Visit Now
          </Link>
        </div>
      </section>
    </>
  );
}
