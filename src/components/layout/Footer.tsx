'use client';

import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const { t } = useTranslation();
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="space-y-4">
               <Link href="/" className="flex items-center gap-2">
                    <Image 
                      src="https://content-provider.payshia.com/eco-fleix/logo-eflix.png" 
                      alt="ECO FLEIX Logo"
                      width={60}
                      height={60}
                      className="dark:invert"
                    />
                </Link>
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
                  <span>info@eferecycling.com</span>
                </li>
                 <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5" />
                  <a href="https://eferecycling.com" className="hover:text-white">www.eferecycling.com</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t('quick_links')}</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white">{t('home')}</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">{t('about')}</Link></li>
                <li><Link href="/services" className="text-gray-400 hover:text-white">{t('services')}</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">{t('contact')}</Link></li>
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
                    <Link href="/privacy-policy" className="hover:text-white">{t('privacy_policy')}</Link>
                    <Link href="/terms-and-conditions" className="hover:text-white">{t('terms_of_service')}</Link>
                    <Link href="/cookie-policy" className="hover:text-white">{t('cookie_policy')}</Link>
                </div>
            </div>
        </div>
      </footer>
    );
};

export default Footer;
