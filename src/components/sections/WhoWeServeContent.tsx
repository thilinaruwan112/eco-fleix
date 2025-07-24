'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Building2, Landmark, School, Banknote, Stethoscope, Check, Shield, Globe, FileText, Users, DollarSign, Leaf, RefreshCw } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';

const sectors = [
  { id: 'corporations', name: 'Corporations', icon: <Building2 className="h-8 w-8 text-primary" />, description: 'Scalable e-waste solutions for large and small businesses.' },
  { id: 'government-agencies', name: 'Government Agencies', icon: <Landmark className="h-8 w-8 text-primary" />, description: 'Secure and compliant disposal for public sector entities.' },
  { id: 'educational-institutions', name: 'Educational Institutions', icon: <School className="h-8 w-8 text-primary" />, description: 'Responsible recycling for schools, colleges, and universities.' },
  { id: 'financial-institutions', name: 'Financial Institutions', icon: <Banknote className="h-8 w-8 text-primary" />, description: 'Secure data destruction and asset disposal for the finance sector.' },
  { id: 'healthcare-medical', name: 'Healthcare & Medical', icon: <Stethoscope className="h-8 w-8 text-primary" />, description: 'Specialized handling of medical and laboratory electronic waste.' },
];

const ReadyToServe = ({title} : {title: string}) => (
    <section>
        <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-bold">Your Trusted E-Waste Partner for {title}</h3>
                    <p className="mt-2 text-primary-foreground/90">
                        Let us handle your e-waste securely and sustainably.
                    </p>
                </div>
                <Button variant="secondary" size="lg" className="flex-shrink-0">Get a Free Consultation</Button>
            </CardContent>
        </Card>
    </section>
);

const CorporationsContent = () => (
    <div id="corporations" className="space-y-12">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Sector Focus</Badge>
            <h2 className="text-3xl font-bold">E-Waste Solutions for Corporations</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                We provide comprehensive and scalable e-waste management solutions for corporate clients of all sizes. From secure data destruction to maximizing value recovery from retired IT assets, we help your business stay compliant, secure, and sustainable.
            </p>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8 items-center">
             <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb3Jwb3JhdGUlMjBvZmZpY2V8ZW58MHx8fHwxNzUzNDU0NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Modern corporate office"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="corporate office team"
                />
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Why Partner With Us?</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Tailored Programs:</span> Customized ITAD solutions to fit your business needs and asset lifecycle.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Data Security:</span> Certified data destruction to protect your sensitive corporate information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Value Recovery:</span> Maximize ROI through our professional IT asset remarketing and remanufacturing services.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Compliance & Reporting:</span> Detailed documentation and certificates to ensure you meet all environmental and data protection regulations.</span>
                    </li>
                </ul>
            </div>
        </section>

        <ReadyToServe title="Corporations" />
    </div>
);

const GovernmentAgenciesContent = () => (
    <div id="government-agencies" className="space-y-12">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Sector Focus</Badge>
            <h2 className="text-3xl font-bold">Secure E-Waste Management for Government Agencies</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                We provide secure, compliant, and transparent e-waste disposal services for government and public sector agencies. Our processes adhere to the strictest security protocols to ensure sensitive public data is protected and destroyed properly.
            </p>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8 items-center bg-muted/40 p-8 rounded-lg">
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Our Commitment to the Public Sector</h3>
                <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Highest Security Standards:</span> Secure chain of custody and certified data destruction for all assets.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <Globe className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Full Compliance:</span> Adherence to all local and federal regulations for e-waste disposal and data protection.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Transparent Reporting:</span> Detailed reports and certificates of destruction for full accountability.</span>
                    </li>
                </ul>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzUzNDU0NDYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Government building"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="government building architecture"
                />
            </div>
        </section>

        <ReadyToServe title="Government Agencies" />
    </div>
);

const EducationalInstitutionsContent = () => (
    <div id="educational-institutions" className="space-y-12">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Sector Focus</Badge>
            <h2 className="text-3xl font-bold">Responsible E-Waste Recycling for Education</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                From classrooms to computer labs, educational institutions manage a vast amount of electronic equipment. We offer schools, colleges, and universities a cost-effective and environmentally sound way to dispose of obsolete technology, while ensuring student and faculty data is secure.
            </p>
        </section>
        
        <section>
             <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="flex flex-col items-center gap-3">
                            <Users className="h-10 w-10 text-primary" />
                            <h4 className="font-bold text-lg">Protect Student Data</h4>
                            <p className="text-sm text-muted-foreground">Securely erase all data from computers, tablets, and servers.</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <DollarSign className="h-10 w-10 text-primary" />
                            <h4 className="font-bold text-lg">Budget-Friendly</h4>
                            <p className="text-sm text-muted-foreground">Free pickups and potential value recovery for newer equipment.</p>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <Leaf className="h-10 w-10 text-primary" />
                            <h4 className="font-bold text-lg">Promote Sustainability</h4>
                            <p className="text-sm text-muted-foreground">Demonstrate environmental responsibility to your community.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="Educational Institutions" />
    </div>
);

const FinancialInstitutionsContent = () => (
    <div id="financial-institutions" className="space-y-12">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Sector Focus</Badge>
            <h2 className="text-3xl font-bold">Secure ITAD for Financial Institutions</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                The financial sector demands the highest level of data security. We provide specialized IT asset disposition services for banks and financial institutions, ensuring that all customer data and sensitive information is destroyed in compliance with industry regulations.
            </p>
        </section>
        
        <section className="grid md:grid-cols-2 gap-8 items-center">
             <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jZXxlbnwwfHx8fDE3NTM0NTQ0NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Financial district"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="finance banking money"
                />
            </div>
            <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Uncompromising Security</h3>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Certified Data Wiping:</span> Exceeds international standards for data erasure.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">On-Site Destruction:</span> Witness the physical destruction of hard drives and media at your location.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Audit Trails:</span> Complete chain-of-custody documentation for compliance and peace of mind.</span>
                    </li>
                </ul>
            </div>
        </section>

        <ReadyToServe title="Financial Institutions" />
    </div>
);


const HealthcareMedicalContent = () => (
    <div id="healthcare-medical" className="space-y-12">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Sector Focus</Badge>
            <h2 className="text-3xl font-bold">Compliant E-Waste for Healthcare</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Healthcare providers handle sensitive patient data and specialized medical equipment. We offer compliant and secure e-waste solutions for hospitals, clinics, and laboratories, ensuring proper handling of medical electronics and adherence to health data regulations.
            </p>
        </section>
        
        <section>
            <Card className="bg-muted/40 border-l-4 border-primary shadow-lg">
                <CardContent className="p-8">
                   <div className="flex items-start gap-6">
                        <Stethoscope className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-bold">Specialized Handling and Compliance</h3>
                            <p className="mt-2 text-muted-foreground">
                                We understand the unique requirements of medical e-waste. Our team is trained to handle a wide range of medical devices, from imaging equipment to lab instruments, ensuring they are recycled safely. We provide the necessary documentation to comply with health industry regulations.
                            </p>
                        </div>
                   </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="Healthcare & Medical" />
    </div>
);


const WhoWeServeContent = () => {
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && sectors.some(s => s.id === hash)) {
      setActiveSector(hash);
    }
  }, [searchParams]);

  const handleSetActiveSector = (id: string) => {
    setActiveSector(id);
    window.location.hash = id;
  }

  const renderContent = () => {
    if (!activeSector) return null;
    switch(activeSector) {
        case 'corporations': return <CorporationsContent />;
        case 'government-agencies': return <GovernmentAgenciesContent />;
        case 'educational-institutions': return <EducationalInstitutionsContent />;
        case 'financial-institutions': return <FinancialInstitutionsContent />;
        case 'healthcare-medical': return <HealthcareMedicalContent />;
        default: return null;
    }
  }

  return (
    <div className="bg-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
            {activeSector ? (
                <div>
                     <Button onClick={() => setActiveSector(null)} variant="outline" className="mb-8">
                        &larr; Back to All Sectors
                    </Button>
                    {renderContent()}
                </div>
            ) : (
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            Industries We Serve
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                           We provide tailored, secure, and compliant e-waste solutions across a variety of key sectors.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectors.map((sector) => (
                            <button key={sector.id} onClick={() => handleSetActiveSector(sector.id)} className="block group text-left">
                                <Card className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-white h-full transform hover:-translate-y-2">
                                    <CardContent className="p-8 flex flex-col h-full">
                                    <div className="bg-primary/10 rounded-full p-3 mb-4 w-max">
                                        {sector.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground flex-grow">
                                        {sector.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-2 mb-4 flex-grow">{sector.description}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <p className="text-sm font-semibold text-primary">Learn More</p>
                                        <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    </CardContent>
                                </Card>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default WhoWeServeContent;
