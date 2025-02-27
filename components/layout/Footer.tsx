import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MyMiamiDoctor</h3>
            <p className="mb-4">Quality healthcare services in Miami.</p>
            <p>© {new Date().getFullYear()} MyMiamiDoctor. All rights reserved.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-300">Services</Link></li>
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">123 Medical Drive, Miami, FL</p>
            <p className="mb-2">Phone: (305) 555-1234</p>
            <p>Email: info@mymiamidoctor.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 