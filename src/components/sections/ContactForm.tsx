'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, Clock, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';

const ContactForm = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dubai');
  const phoneNumber = '971544563685';

  // State for Send Message form
  const [messageForm, setMessageForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    foundUs: '',
    message: '',
  });

  // State for Schedule Pickup form
  const [pickupForm, setPickupForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    details: '',
  });

  const handleMessageFormChange = (field: string, value: string) => {
    setMessageForm(prev => ({ ...prev, [field]: value }));
  };

  const handlePickupFormChange = (field: string, value: string) => {
    setPickupForm(prev => ({ ...prev, [field]: value }));
  };

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, company, service, foundUs, message } = messageForm;
    const whatsappMessage = `*New Message Inquiry*

*Full Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company || 'N/A'}
*Service Required:* ${service}
*How did you find us?:* ${foundUs}

*Message:*
${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePickupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, company, address, details } = pickupForm;
    const whatsappMessage = `*New Pickup Request*

*Full Name:* ${fullName}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company || 'N/A'}
*Pickup Address:* ${address}

*E-waste Details:*
${details}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg bg-card p-8 rounded-2xl">
            <Tabs defaultValue="send-message">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="send-message">{t('send_message')}</TabsTrigger>
                <TabsTrigger value="schedule-pickup">{t('schedule_free_pickup')}</TabsTrigger>
              </TabsList>
              <TabsContent value="send-message">
                <form onSubmit={handleMessageSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder={t('full_name')} value={messageForm.fullName} onChange={(e) => handleMessageFormChange('fullName', e.target.value)} required />
                    <Input type="email" placeholder={t('email')} value={messageForm.email} onChange={(e) => handleMessageFormChange('email', e.target.value)} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input type="tel" placeholder={t('phone_number')} value={messageForm.phone} onChange={(e) => handleMessageFormChange('phone', e.target.value)} required />
                    <Input placeholder={t('company_name')} value={messageForm.company} onChange={(e) => handleMessageFormChange('company', e.target.value)} />
                  </div>
                  <Select onValueChange={(value) => handleMessageFormChange('service', value)} value={messageForm.service}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('service_required')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it-asset-remarketing">{t('it_asset_remarketing')}</SelectItem>
                      <SelectItem value="it-asset-remanufacturing">{t('it_asset_remanufacturing')}</SelectItem>
                      <SelectItem value="it-asset-disposition">{t('it_asset_disposition')}</SelectItem>
                      <SelectItem value="data-destruction">{t('data_destruction')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select onValueChange={(value) => handleMessageFormChange('foundUs', value)} value={messageForm.foundUs}>
                    <SelectTrigger>
                      <SelectValue placeholder={t('how_did_you_find_us')} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="social-media">{t('social_media')}</SelectItem>
                      <SelectItem value="referral">{t('referral')}</SelectItem>
                      <SelectItem value="other">{t('other')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder={t('message')} rows={4} value={messageForm.message} onChange={(e) => handleMessageFormChange('message', e.target.value)} required />
                  <Button type="submit" className="w-full">{t('send_message')} <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </form>
              </TabsContent>
              <TabsContent value="schedule-pickup">
                 <form onSubmit={handlePickupSubmit} className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder={t('full_name')} value={pickupForm.fullName} onChange={(e) => handlePickupFormChange('fullName', e.target.value)} required />
                    <Input type="email" placeholder={t('email')} value={pickupForm.email} onChange={(e) => handlePickupFormChange('email', e.target.value)} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input type="tel" placeholder={t('phone_number')} value={pickupForm.phone} onChange={(e) => handlePickupFormChange('phone', e.target.value)} required />
                    <Input placeholder={t('company_name')} value={pickupForm.company} onChange={(e) => handlePickupFormChange('company', e.target.value)} />
                  </div>
                   <Input placeholder={t('pickup_address')} value={pickupForm.address} onChange={(e) => handlePickupFormChange('address', e.target.value)} required />
                   <Textarea placeholder={t('ewaste_details')} rows={4} value={pickupForm.details} onChange={(e) => handlePickupFormChange('details', e.target.value)} required />
                  <Button type="submit" className="w-full">{t('schedule_pickup')} <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
          <Card className="shadow-lg bg-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('contact_information')}</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-lg">{t('email')}</h4>
                  <a href="mailto:info@eferecycling.com" className="text-muted-foreground hover:text-primary">info@eferecycling.com</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-lg">{t('phone')}</h4>
                  <a href="tel:+971529058388" className="text-muted-foreground hover:text-primary">+971 52 905 8388</a><br/>
                  <a href="tel:+971544563685" className="text-muted-foreground hover:text-primary">+971 54 456 3685</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Clock className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-lg">{t('office_hours')}</h4>
                  <p className="text-muted-foreground">{t('office_hours_mon_fri')}</p>
                  <p className="text-muted-foreground">{t('office_hours_sat')}</p>
                </div>
              </div>
            </div>
             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="dubai">{t('dubai_office')}</TabsTrigger>
                <TabsTrigger value="sharjah">{t('sharjah_office')}</TabsTrigger>
              </TabsList>
              <TabsContent value="dubai">
                <div className="mt-4">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <p className="text-muted-foreground">{t('dubai_office_address')}</p>
                    </div>
                    <div className="aspect-video w-full rounded-lg overflow-hidden border">
                         <Image src="https://placehold.co/600x400.png" alt="Google Map" width={600} height={400} data-ai-hint="map" className="w-full h-full object-cover"/>
                    </div>
                </div>
              </TabsContent>
              <TabsContent value="sharjah">
                 <div className="mt-4">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <p className="text-muted-foreground">{t('sharjah_office_address')}</p>
                    </div>
                    <div className="aspect-video w-full rounded-lg overflow-hidden border">
                         <Image src="https://placehold.co/600x400.png" alt="Google Map" width={600} height={400} data-ai-hint="map" className="w-full h-full object-cover"/>
                    </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

    