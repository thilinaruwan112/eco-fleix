'use client';

import { Recycle, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

const Footer = () => {
    const { t } = useTranslation();
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
               <a href="/" className="flex items-center gap-2">
                    <Recycle className="h-8 w-8 text-primary" />
                    <span className="font-bold text-xl text-white">ECO FLEIX</span>
                </a>
              <p className="text-gray-400">
                {t('footer_desc')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t('contact_info')}</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>{t('dubai_office_address')}</span>
                </li>
                 <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5" />
                  <span>{t('sharjah_office_address')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+971 52 905 8388</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <span>+971 54 456 3685</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>ecofleixewasterecyclinguae@gmail.com</span>
                </li>
                 <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  <span>www.ecofleixewasterecycling.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t('quick_links')}</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">{t('home')}</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">{t('about')}</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white">{t('services')}</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">{t('contact')}</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t('newsletter')}</h3>
              <p className="text-gray-400">{t('newsletter_desc')}</p>
              <form className="flex">
                <Input type="email" placeholder={t('enter_email')} className="bg-gray-700 border-gray-600 text-white rounded-r-none" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-l-none">{t('subscribe')}</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 gap-4">
                <p>&copy; {new Date().getFullYear()} ECO FLEIX. {t('all_rights_reserved')}</p>
                <div className="flex flex-wrap justify-center gap-4 items-center">
                    <a href="#" className="hover:text-white">{t('privacy_policy')}</a>
                    <a href="#" className="hover:text-white">{t('terms_of_service')}</a>
                    <a href="#" className="hover:text-white">{t('cookie_policy')}</a>
                </div>
            </div>
        </div>
      </footer>
    );
};

export default Footer;
