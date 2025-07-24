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

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState('dubai');
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg bg-card p-8 rounded-2xl">
            <Tabs defaultValue="send-message">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="send-message">Send Message</TabsTrigger>
                <TabsTrigger value="schedule-pickup">Schedule A Free Pickup</TabsTrigger>
              </TabsList>
              <TabsContent value="send-message">
                <form className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input type="tel" placeholder="Phone Number" />
                    <Input placeholder="Company Name" />
                  </div>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Service Required" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it-asset-remarketing">IT Asset Remarketing</SelectItem>
                      <SelectItem value="it-asset-remanufacturing">IT Asset Remanufacturing</SelectItem>
                      <SelectItem value="it-asset-disposition">IT Asset Disposition</SelectItem>
                      <SelectItem value="data-destruction">Data Destruction</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How did you find us?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="Message" rows={4} />
                  <Button className="w-full">Send Message <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </form>
              </TabsContent>
              <TabsContent value="schedule-pickup">
                 <form className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" />
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input type="tel" placeholder="Phone Number" />
                    <Input placeholder="Company Name" />
                  </div>
                   <Input placeholder="Pickup Address" />
                   <Textarea placeholder="E-waste details (e.g., 5 laptops, 10 monitors)" rows={4}/>
                  <Button className="w-full">Schedule Pickup <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </form>
              </TabsContent>
            </Tabs>
          </Card>
          <Card className="shadow-lg bg-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <a href="mailto:ecofleixewasterecyclinguae@gmail.com" className="text-muted-foreground hover:text-primary">ecofleixewasterecyclinguae@gmail.com</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <a href="tel:+971529058388" className="text-muted-foreground hover:text-primary">+971 52 905 8388</a><br/>
                  <a href="tel:+971544563685" className="text-muted-foreground hover:text-primary">+971 54 456 3685</a>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full"><Clock className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="dubai">Dubai Office</TabsTrigger>
                <TabsTrigger value="sharjah">Sharjah Office</TabsTrigger>
              </TabsList>
              <TabsContent value="dubai">
                <div className="mt-4">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-5 w-5 text-primary" />
                        <p className="text-muted-foreground">Raja Building, Bur Dubai, Dubai</p>
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
                        <p className="text-muted-foreground">Al Sajaa Industrial Area, Sharjah</p>
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
