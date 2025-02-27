import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Services | Dr. Marina Gafanovich",
  description: "Comprehensive medical services offered by Dr. Marina Gafanovich in Miami - from preventive care to chronic disease management and specialized treatments.",
  keywords: "medical services Miami, primary care services, Dr. Marina Gafanovich services, telehealth Miami, preventive care",
};

export default function Services() {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-navy">
              Our Medical Services
              <span className="block text-primary mt-2">Comprehensive Care for Your Health</span>
            </h1>
            <p className="text-lg mb-8">
              Dr. Marina Gafanovich offers a wide range of medical services to address your health needs, from preventive care to managing chronic conditions.
            </p>
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Schedule an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl text-navy mb-4">Our Service Categories</h2>
            <p className="max-w-2xl mx-auto text-lg">We provide a comprehensive range of healthcare services to meet your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Preventive Care */}
            <div className="bg-white rounded-xl shadow-md transition-transform hover:scale-105 p-6 border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-navy text-center mb-3">Preventive Care</h3>
              <p className="text-center mb-4">Regular check-ups and screenings to maintain optimal health and prevent illness.</p>
              <a href="#preventive" className="text-primary hover:text-primary/80 text-center block">Learn More →</a>
            </div>

            {/* Chronic Disease Management */}
            <div className="bg-white rounded-xl shadow-md transition-transform hover:scale-105 p-6 border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-navy text-center mb-3">Chronic Disease Management</h3>
              <p className="text-center mb-4">Ongoing care for conditions like diabetes, hypertension, and heart disease.</p>
              <a href="#chronic" className="text-primary hover:text-primary/80 text-center block">Learn More →</a>
            </div>

            {/* Women's Health */}
            <div className="bg-white rounded-xl shadow-md transition-transform hover:scale-105 p-6 border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-navy text-center mb-3">Women's Health</h3>
              <p className="text-center mb-4">Specialized care addressing the unique health needs of women.</p>
              <a href="#womens" className="text-primary hover:text-primary/80 text-center block">Learn More →</a>
            </div>

            {/* Telehealth Services */}
            <div className="bg-white rounded-xl shadow-md transition-transform hover:scale-105 p-6 border-t-4 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-navy text-center mb-3">Telehealth Services</h3>
              <p className="text-center mb-4">Virtual care options for convenient access to medical services.</p>
              <Link href="/telehealth" className="text-primary hover:text-primary/80 text-center block">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section id="preventive" className="py-16 px-4 bg-light">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-6">Preventive Care Services</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="mb-6">
                Dr. Gafanovich emphasizes preventive care as a cornerstone of maintaining good health. Our preventive services are designed to detect potential health issues early and help you stay healthy.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Annual Physical Exams</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Comprehensive health assessment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Vital signs monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>BMI calculation and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Personal health risk assessment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Health Screenings</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cholesterol screenings</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Diabetes screening</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cancer screenings</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Osteoporosis screening</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="chronic" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-6">Chronic Disease Management</h2>
            <div className="bg-light p-8 rounded-xl shadow-md">
              <p className="mb-6">
                We provide comprehensive care for patients with chronic conditions, helping you manage your health effectively and improve your quality of life.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Conditions We Manage</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Diabetes (Type 1 and Type 2)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hypertension (High Blood Pressure)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>High Cholesterol</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Heart Disease</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Asthma and COPD</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Our Approach</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Personalized treatment plans</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Regular monitoring and adjustments</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Medication management</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Lifestyle modification guidance</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Coordination with specialists</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="womens" className="py-16 px-4 bg-light">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-6">Women's Health Services</h2>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <p className="mb-6">
                Dr. Gafanovich provides specialized care for women's unique health needs, focusing on both preventive measures and treatment of conditions specific to women.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Preventive Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Well-woman exams</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Breast cancer screening</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Osteoporosis screening</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Reproductive health counseling</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl text-navy mb-3">Treatment Services</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Menopause management</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hormonal imbalance treatment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Urinary tract infection treatment</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Management of common gynecological issues</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">What should I bring to my first appointment?</h3>
                <p>Please bring your photo ID, insurance card, a list of current medications, and any relevant medical records or test results. Arriving 15 minutes early to complete paperwork is recommended.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">How often should I schedule a check-up?</h3>
                <p>For most adults, an annual physical exam is recommended. However, the frequency may vary based on age, existing health conditions, and risk factors. Dr. Gafanovich will advise you on the appropriate schedule for your specific needs.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">Do you offer same-day appointments?</h3>
                <p>Yes, we make every effort to accommodate same-day appointments for urgent medical needs. Please call our office as early as possible to check availability.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">What insurances do you accept?</h3>
                <p>We accept most major insurance plans. Please visit our <Link href="/insurance" className="text-primary hover:underline">Insurance & Pricing</Link> page for detailed information or contact our office to verify your coverage.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">Can I request a telehealth appointment instead of an in-person visit?</h3>
                <p>Yes, telehealth appointments are available for many types of consultations. Visit our <Link href="/telehealth" className="text-primary hover:underline">Telehealth</Link> page to learn more about virtual care options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl text-navy mb-6">Ready to Experience Quality Healthcare?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Schedule your appointment with Dr. Gafanovich today and take the first step toward better health.
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
              Telehealth Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 