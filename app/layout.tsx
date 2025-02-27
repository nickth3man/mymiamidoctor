import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "../components/layout/Navigation";
import { LanguageProvider } from "../contexts/LanguageContext";
import dynamic from "next/dynamic";

// Dynamically import the PerformanceMonitor component with no SSR
// This ensures it only runs on the client side
const PerformanceMonitor = dynamic(
  () => import("../components/performance/PerformanceMonitor"),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | MyMiamiDoctor",
    default: "MyMiamiDoctor | Quality Healthcare in Miami",
  },
  description: "MyMiamiDoctor provides comprehensive healthcare services in Miami, including general consultations, telehealth, follow-up visits, and prescription renewals.",
  keywords: "Miami doctor, healthcare Miami, medical services, telehealth, doctor appointments",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params?: { locale?: string };
}>) {
  // Default to English if no locale is specified
  const locale = params?.locale || 'en';
  
  return (
    <html lang={locale}>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {/* Performance monitoring (non-visual component) */}
          <PerformanceMonitor
            sendToAnalytics={process.env.NODE_ENV === 'production'}
          />
          
          <Navigation />
          {children}
          <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">MyMiamiDoctor</h3>
                  <p className="text-gray-300 mb-4">
                    Providing quality healthcare services to the Miami community.
                  </p>
                  <p className="text-gray-300">
                    123 Health Avenue, Suite 456<br />
                    Miami, FL 33101
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Services</h3>
                  <ul className="space-y-2">
                    <li><a href="/services/general-consultations" className="text-gray-300 hover:text-white">General Consultations</a></li>
                    <li><a href="/services/telehealth" className="text-gray-300 hover:text-white">Telehealth</a></li>
                    <li><a href="/services/follow-up-visits" className="text-gray-300 hover:text-white">Follow-up Visits</a></li>
                    <li><a href="/services/prescription-renewals" className="text-gray-300 hover:text-white">Prescription Renewals</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
                    <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
                    <li><a href="/services" className="text-gray-300 hover:text-white">Services</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-300">Phone: (305) 555-1234</li>
                    <li className="text-gray-300">Email: info@mymiamidoctor.com</li>
                    <li className="text-gray-300">Hours: Mon-Fri 8am-5pm, Sat 9am-1pm</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} MyMiamiDoctor. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
