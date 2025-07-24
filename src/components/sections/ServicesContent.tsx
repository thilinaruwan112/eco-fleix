'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ShieldCheck, Trash2, Shield, AlertTriangle, Settings, FileText, Eye, HelpCircle, Clock } from 'lucide-react';

const services = [
  { id: 'data-destruction', name: 'Data Destruction', icon: <ShieldCheck className="h-5 w-5" /> },
  { id: 'it-asset-recovery', name: 'IT Asset Recovery', icon: <Trash2 className="h-5 w-5" /> },
  { id: 'equipment-recycling', name: 'Equipment Recycling', icon: <Trash2 className="h-5 w-5" /> },
  { id: 'compliance-services', name: 'Compliance Services', icon: <Shield className="h-5 w-5" /> },
];

const keyBenefits = [
  { icon: <ShieldCheck className="h-8 w-8 text-white" />, title: 'Data Security', description: 'Complete protection of sensitive information' },
  { icon: <Shield className="h-8 w-8 text-white" />, title: 'Compliance', description: 'Meet regulatory requirements' },
  { icon: <AlertTriangle className="h-8 w-8 text-white" />, title: 'Risk Mitigation', description: 'Eliminate data breach risks' },
  { icon: <Trash2 className="h-8 w-8 text-white" />, title: 'Environmental Responsibility', description: 'Eco-friendly disposal methods' },
];

const destructionMethods = [
  'Physical Hard Drive Shredding',
  'Degaussing Technology',
  'Software-based Data Wiping',
  'SSD Destruction Services',
];

const comprehensiveSolutions = [
  'Certificate of Destruction',
  'Chain of Custody Documentation',
  'On-site and Off-site Services',
  'Compliance Reporting',
];

const yourDataYourControlItems = [
    { icon: <Eye className="h-8 w-8 text-primary" />, title: 'Witness Destruction' },
    { icon: <HelpCircle className="h-8 w-8 text-primary" />, title: 'Certified Documentation' },
    { icon: <Clock className="h-8 w-8 text-primary" />, title: 'Scheduled Services' },
]

const ServicesContent = () => {
  const [activeService, setActiveService] = useState('data-destruction');

  return (
    <div className="bg-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-8">
                <aside className="md:col-span-3">
                    <Card className="p-4 shadow-lg">
                    <h3 className="text-lg font-bold mb-4 px-4">Our Services</h3>
                    <nav className="flex flex-col gap-2">
                        {services.map((service) => (
                        <Button
                            key={service.id}
                            variant={activeService === service.id ? 'default' : 'ghost'}
                            className="justify-start gap-3"
                            onClick={() => setActiveService(service.id)}
                        >
                            {service.icon}
                            {service.name}
                        </Button>
                        ))}
                    </nav>
                    </Card>
                </aside>

                <main className="md:col-span-9 space-y-12">
                {activeService === 'data-destruction' && (
                    <div className="space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold">Data Destruction</h2>
                        <p className="mt-4 text-muted-foreground">
                        Secure data destruction is critical for protecting sensitive information and maintaining compliance. Our certified processes ensure complete data elimination from all storage devices, providing peace of mind and regulatory compliance for your organization.
                        </p>
                    </section>

                    <section>
                        <Card className="bg-white/60 shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {keyBenefits.map(item => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="bg-primary rounded-full p-3 flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{item.title}</h4>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <Card className="shadow-lg">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Settings className="h-7 w-7 text-primary" />
                                    <h3 className="text-xl font-bold">State-of-the-art Data Destruction Methods</h3>
                                </div>
                                <ul className="space-y-3">
                                {destructionMethods.map(method => (
                                    <li key={method} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-green-600" />
                                        <span>{method}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="shadow-lg">
                             <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <FileText className="h-7 w-7 text-primary" />
                                    <h3 className="text-xl font-bold">Comprehensive Solutions</h3>
                                </div>
                                <ul className="space-y-3">
                                {comprehensiveSolutions.map(solution => (
                                    <li key={solution} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-green-600" />
                                        <span>{solution}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </section>
                    
                    <section>
                        <Card className="shadow-lg">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold">Safeguarding Your Business</h3>
                                <p className="mt-4 text-muted-foreground">
                                Our data destruction services protect your organization from data breaches, identity theft, and regulatory non-compliance. We follow strict protocols to ensure your sensitive information is completely destroyed beyond recovery.
                                </p>
                                <p className="mt-4 text-muted-foreground">
                                From financial records to customer databases, we handle all types of sensitive data with the highest level of security and professionalism.
                                </p>
                            </CardContent>
                        </Card>
                    </section>

                    <section>
                         <Card className="bg-white/60 shadow-lg">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold">Your Data, Your Control</h3>
                                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                                    Maintain complete control over your data destruction process. Our transparent procedures allow you to witness the destruction process and receive detailed documentation for your records.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                                    {yourDataYourControlItems.map(item => (
                                        <div key={item.title} className="flex flex-col items-center gap-3">
                                            <div className="bg-primary/10 rounded-full p-3">
                                                {item.icon}
                                            </div>
                                            <h4 className="font-semibold">{item.title}</h4>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                    </div>
                )}
                </main>
            </div>
        </div>
    </div>
  );
};

export default ServicesContent;
