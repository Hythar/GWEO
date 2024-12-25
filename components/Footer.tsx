import Link from 'next/link';
import { Droplets } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl">GWEO</span>
            </div>
            <p className="text-gray-400">
              Dedicated to sustainable water management and environmental conservation in Garissa.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="#projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link href="#news" className="text-gray-400 hover:text-white">News</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white">Annual Reports</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Research Papers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Educational Materials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white">Newsletter Archive</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <address className="text-gray-400 not-italic">
              <p>123 Main Street</p>
              <p>Garissa, Kenya</p>
              <p className="mt-2">Email: info@gweo.org</p>
              <p>Phone: +254 123 456 789</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Garissa Water & Environmental Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}