import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Marina Gafanovich | Miami Primary Care Physician",
  description: "Learn about Dr. Marina Gafanovich's credentials, experience, and approach to patient care in Miami. Board-certified physician specializing in primary care.",
  keywords: "Dr. Marina Gafanovich Miami, about Dr. Gafanovich, Miami doctor credentials, Russian speaking doctor Miami",
};

export default function About() {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-navy">
              About Dr. Marina Gafanovich
              <span className="block text-primary mt-2">Your Dedicated Primary Care Physician</span>
            </h1>
            <p className="text-lg mb-8">
              With over 15 years of experience, Dr. Gafanovich provides personalized, compassionate care to patients throughout Miami.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Doctor Image Placeholder */}
            <div className="md:col-span-2">
              <div className="bg-white border-2 border-dashed border-gray-300 flex items-center justify-center p-6 rounded-lg h-96 shadow-md">
                <div className="text-gray-700 text-center font-body">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm">Doctor's Portrait</p>
                </div>
              </div>
              <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h3 className="font-heading text-xl text-navy mb-4">Languages</h3>
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm">
                    <span className="font-bold text-sm">EN</span>
                  </div>
                  <span>English (Fluent)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm">
                    <span className="font-bold text-sm">RU</span>
                  </div>
                  <span>Russian (Native)</span>
                </div>
              </div>
            </div>

            {/* Bio Information */}
            <div className="md:col-span-3">
              <h2 className="font-heading text-2xl text-navy mb-6">Professional Biography</h2>
              <p className="mb-4">
                Dr. Marina Gafanovich is a board-certified primary care physician providing exceptional healthcare to the Miami community. With a passion for preventive medicine and patient education, Dr. Gafanovich is dedicated to helping her patients achieve optimal health and wellness.
              </p>
              <p className="mb-4">
                After completing her medical education at [University Name] and residency at [Hospital Name], Dr. Gafanovich established her practice with the vision of creating a medical environment where patients feel heard, respected, and properly cared for.
              </p>
              <p className="mb-6">
                She specializes in preventive medicine, chronic disease management, women's health, and geriatric care. Dr. Gafanovich is known for her thorough approach to diagnosis and treatment, taking the time to listen to each patient's concerns and developing personalized treatment plans.
              </p>

              <div className="mt-8">
                <h3 className="font-heading text-xl text-navy mb-4">Credentials & Certifications</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Board Certified in Internal Medicine</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>American Board of Internal Medicine (ABIM) Certification</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>M.D. from [University Name]</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Residency at [Hospital Name]</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Member, American Medical Association</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Approach Section */}
      <section className="py-16 px-4 bg-light">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-6 text-center">My Approach to Patient Care</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="mb-4 italic text-lg text-center">
                "I believe that the best healthcare comes from a strong doctor-patient relationship built on trust, respect, and open communication."
              </p>
              <p className="mb-4">
                My practice is founded on the principle that each patient deserves individualized care. I take the time to listen to your concerns, understand your health goals, and develop treatment plans that fit your unique needs and lifestyle.
              </p>
              <p className="mb-4">
                Whether you're coming in for a routine check-up, managing a chronic condition, or seeking preventive care advice, my goal is to provide you with the highest quality healthcare in a comfortable and supportive environment.
              </p>
              <p>
                I embrace both traditional medical practices and evidence-based modern approaches, combining them to offer the most effective treatment options for my patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl text-navy mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience personalized care with Dr. Gafanovich. Book an appointment today for in-person or telehealth consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Book Appointment
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