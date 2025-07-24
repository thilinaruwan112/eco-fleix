import { Recycle, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
               <div className="flex items-center gap-2">
                    <Recycle className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl text-white">ECO FLEIX</span>
                </div>
              <p className="text-gray-400">
                Leading sustainable e-waste recycling company transforming electronic waste management through innovative solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>123 Green Street, Eco City</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>info@ecofleix.com</span>
                </li>
                 <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  <span>www.ecofleix.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Newsletter</h3>
              <p className="text-gray-400">Stay updated with our latest news and offers.</p>
              <form className="flex">
                <Input type="email" placeholder="Enter email" className="bg-gray-700 border-gray-600 text-white rounded-r-none" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-l-none">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} ECO FLEIX. All rights reserved.</p>
                <div className="flex gap-4 items-center">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                </div>
            </div>
        </div>
      </footer>
    );
};

export default Footer;
