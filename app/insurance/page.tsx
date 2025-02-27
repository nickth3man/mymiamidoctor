import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insurance & Pricing | Dr. Marina Gafanovich",
  description: "Information about accepted insurance plans and self-pay pricing options at Dr. Marina Gafanovich's Miami practice. Transparent pricing for all medical services.",
  keywords: "insurance Miami physician, self-pay doctor Miami, medical pricing Miami, affordable healthcare Miami, Dr. Gafanovich insurance",
};

export default function Insurance() {
  return (
    <div className="font-body">
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-navy">
              Insurance & Pricing
              <span className="block text-primary mt-2">Transparent Healthcare Costs</span>
            </h1>
            <p className="text-lg mb-8">
              Dr. Gafanovich accepts most major insurance plans and offers affordable self-pay options for patients without insurance.
            </p>
            <Link 
              href="#verification" 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Verify Your Insurance
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">Accepted Insurance Plans</h2>
            <p className="text-center mb-10">
              We work with most major insurance providers to ensure you receive the care you need. If you don't see your insurance listed, please contact our office to verify coverage.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Insurance Category 1 */}
              <div className="bg-light p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-xl text-navy mb-4 text-center">Major Medical Insurance</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Aetna</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Blue Cross Blue Shield</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Cigna</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Humana</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>UnitedHealthcare</span>
                  </li>
                </ul>
              </div>
              
              {/* Insurance Category 2 */}
              <div className="bg-light p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-xl text-navy mb-4 text-center">Medicare & Medicaid</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Medicare Part B</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Medicare Advantage Plans</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Medicare Supplement Plans</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Florida Medicaid</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Medicaid Managed Care Plans</span>
                  </li>
                </ul>
              </div>
              
              {/* Insurance Category 3 */}
              <div className="bg-light p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-xl text-navy mb-4 text-center">Additional Plans</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>AvMed</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Oscar Health</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Molina Healthcare</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Ambetter</span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Bright Health</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="verification" className="mt-12 bg-primary/10 p-8 rounded-xl border border-primary/20">
              <h3 className="font-heading text-2xl text-navy mb-4 text-center">Insurance Verification</h3>
              <p className="text-center mb-6">
                To verify your insurance coverage before your appointment, please provide the following information:
              </p>
              <form className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="(123) 456-7890" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="insurance">Insurance Provider</label>
                    <input type="text" id="insurance" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Insurance company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="policy">Policy/Member ID</label>
                    <input type="text" id="policy" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your policy or member ID" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-1" htmlFor="email">Email Address</label>
                  <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your email address" />
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-2.5 px-6 rounded-button transition duration-300 shadow hover:shadow-md">
                    Submit Verification Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Pay Pricing Section */}
      <section className="py-16 px-4 bg-light">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">Self-Pay Pricing</h2>
            <p className="text-center mb-10">
              We offer transparent and competitive pricing for patients without insurance or those who prefer to pay directly for services.
            </p>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary text-white py-4 px-6">
                <h3 className="font-heading text-xl text-center">Standard Service Pricing</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Service</th>
                      <th className="py-3 px-6 text-right text-sm font-semibold text-gray-700">Price Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-6">New Patient Visit</td>
                      <td className="py-4 px-6 text-right">$150 - $250</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-4 px-6">Established Patient Visit</td>
                      <td className="py-4 px-6 text-right">$75 - $150</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">Annual Physical Exam</td>
                      <td className="py-4 px-6 text-right">$200 - $300</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-4 px-6">Telehealth Consultation</td>
                      <td className="py-4 px-6 text-right">$70 - $120</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">Basic Blood Work (Standard Panel)</td>
                      <td className="py-4 px-6 text-right">$60 - $150</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-4 px-6">EKG</td>
                      <td className="py-4 px-6 text-right">$75 - $100</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6">Vaccination (Price varies by type)</td>
                      <td className="py-4 px-6 text-right">$40 - $120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="py-3 px-6 text-sm text-gray-500 bg-gray-50">
                * Prices may vary based on complexity and duration of visit. Additional tests or procedures may incur additional costs.
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
              <h3 className="font-heading text-2xl text-navy mb-4">Payment Options</h3>
              <p className="mb-6">
                We offer several payment options to make healthcare more accessible:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-heading text-lg text-navy mb-3">Accepted Payment Methods:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Credit Cards (Visa, MasterCard, Amex, Discover)</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Debit Cards</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>HSA/FSA Cards</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Cash</span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Apple Pay / Google Pay</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading text-lg text-navy mb-3">Payment Plans:</h4>
                  <p className="mb-4">
                    We understand that healthcare costs can be significant. For eligible patients, we offer flexible payment plans to help manage out-of-pocket expenses.
                  </p>
                  <p>
                    Please speak with our office staff to discuss payment plan options based on your specific needs and circumstances.
                  </p>
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
            <h2 className="font-heading text-3xl text-navy mb-8 text-center">Payment & Insurance FAQ</h2>
            
            <div className="space-y-6">
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">When do I need to pay for my visit?</h3>
                <p>Co-pays and self-pay fees are due at the time of service. For procedures and services not covered by insurance, payment arrangements should be made prior to service.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">What if my insurance doesn't cover a service I need?</h3>
                <p>We'll inform you before performing any service that may not be covered by your insurance. You'll have the option to pay out-of-pocket or discuss alternative options with Dr. Gafanovich.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">Do you offer discounts for self-pay patients?</h3>
                <p>Yes, we offer discounted rates for patients who pay in full at the time of service. We also have package deals for patients who require multiple services or ongoing care.</p>
              </div>
              
              <div className="bg-light p-6 rounded-lg shadow-sm">
                <h3 className="font-heading text-xl text-navy mb-3">How can I find out what my out-of-pocket costs will be?</h3>
                <p>Our staff can provide an estimate of costs based on your insurance plan before your appointment. For the most accurate information, we recommend contacting your insurance provider directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl text-navy mb-6">Have Questions About Billing or Insurance?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our friendly staff is here to help you navigate insurance and payment options. Contact us today for assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md inline-block"
            >
              Contact Our Billing Team
            </Link>
            <Link 
              href="#verification" 
              className="border border-primary text-primary hover:bg-primary/10 font-body font-bold py-3 px-8 rounded-button transition duration-300 inline-block"
            >
              Verify Your Insurance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 