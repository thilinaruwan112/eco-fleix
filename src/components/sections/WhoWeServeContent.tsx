'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Building2, Landmark, School, Banknote, Stethoscope, Check, Shield, Globe, FileText, Users, DollarSign, Leaf, RefreshCw, BarChart, Eye, Star } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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

const CorporationsContent = () => {
    const benefits = [
        { icon: <Leaf className="h-7 w-7" />, title: 'Enhanced Brand Reputation', description: 'Showcase your commitment to sustainability and corporate responsibility.' },
        { icon: <DollarSign className="h-7 w-7" />, title: 'Maximized Value Recovery', description: 'Our remarketing services turn your retired IT assets into revenue.' },
        { icon: <RefreshCw className="h-7 w-7" />, title: 'Streamlined IT Lifecycle', description: 'We manage the entire disposition process, freeing up your internal resources.' },
        { icon: <Shield className="h-7 w-7" />, title: 'Guaranteed Data Security', description: 'Protect your sensitive corporate data with our certified destruction services.' },
    ];
    const metrics = [
        { value: '40%', label: 'Average cost reduction on IT disposal' },
        { value: '99.9%', label: 'Data destruction success rate' },
        { value: '1,200+', label: 'Corporate assets processed monthly' },
    ];
    return (
    <div id="corporations" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Overview</Badge>
            <h2 className="text-3xl font-bold">E-Waste Solutions for Corporations</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                We provide comprehensive and scalable e-waste management solutions for corporate clients of all sizes. From secure data destruction to maximizing value recovery from retired IT assets, we help your business stay compliant, secure, and sustainable.
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </section>
        
        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Impact Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Client Testimonial</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform -rotate-1 bg-white">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 left-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "Their professionalism and detailed reporting gave us complete peace of mind. ECO FLEIX transformed our asset disposition from a liability into a value-driver for our company."
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Jane Doe" data-ai-hint="woman portrait" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">Jane Doe</p>
                            <p className="text-muted-foreground text-sm">COO, Innovatech Ltd.</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="Corporations" />
    </div>
    )
};

const GovernmentAgenciesContent = () => {
    const benefits = [
        { icon: <Globe className="h-7 w-7" />, title: 'Strict Regulatory Compliance', description: 'Adherence to all federal and local regulations for public sector e-waste.' },
        { icon: <Shield className="h-7 w-7" />, title: 'Unbreachable Data Security', description: 'Secure, certified destruction of sensitive government and citizen data.' },
        { icon: <FileText className="h-7 w-7" />, title: 'Transparent Chain of Custody', description: 'Complete documentation and reporting for full accountability and audit trails.' },
        { icon: <DollarSign className="h-7 w-7" />, title: 'Cost-Effective Public Service', description: 'Efficient processing and value recovery to serve the public interest.' },
    ];
    const metrics = [
        { value: '100%', label: 'Compliance with government standards' },
        { value: '50+', label: 'Public sector agencies served' },
        { value: '0', label: 'Data breaches on our watch' },
    ];

    return(
    <div id="government-agencies" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Overview</Badge>
            <h2 className="text-3xl font-bold">Secure E-Waste Management for Government Agencies</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                We provide secure, compliant, and transparent e-waste disposal services for government and public sector agencies. Our processes adhere to the strictest security protocols to ensure sensitive public data is protected and destroyed properly.
            </p>
        </section>
        
        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </section>

        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Impact Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Client Testimonial</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform rotate-1 bg-white">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 right-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "The security and transparency provided by ECO FLEIX are unmatched. Their team understands the unique requirements of the public sector, and their flawless execution is why we trust them."
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="H.E. Fatima Al Neyadi" data-ai-hint="woman portrait" />
                            <AvatarFallback>FA</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">H.E. Fatima Al Neyadi</p>
                            <p className="text-muted-foreground text-sm">Director of IT, Federal Authority</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="Government Agencies" />
    </div>
    )
};

const EducationalInstitutionsContent = () => {
    const benefits = [
        { icon: <Users className="h-7 w-7" />, title: 'Protect Student & Faculty Data', description: 'Ensure all sensitive academic and personal data is securely destroyed.' },
        { icon: <DollarSign className="h-7 w-7" />, title: 'Cost-Effective Solutions', description: 'Budget-friendly services with free pickups and value recovery options.' },
        { icon: <Leaf className="h-7 w-7" />, title: 'Promote Campus Sustainability', description: 'Lead by example and demonstrate environmental leadership to your community.' },
        { icon: <Eye className="h-7 w-7" />, title: 'Educational Opportunities', description: 'Partner with us for on-campus e-waste drives and awareness programs.' },
    ];
    const metrics = [
        { value: '250+', label: 'Schools & universities partnered with' },
        { value: '10,000+', label: 'Student devices recycled annually' },
        { value: '5-Star', label: 'Rating for campus event support' },
    ];

    return(
    <div id="educational-institutions" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Overview</Badge>
            <h2 className="text-3xl font-bold">Responsible E-Waste Recycling for Education</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                From classrooms to computer labs, educational institutions manage a vast amount of electronic equipment. We offer schools, colleges, and universities a cost-effective and environmentally sound way to dispose of obsolete technology, while ensuring student and faculty data is secure.
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </section>

        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Impact Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Client Testimonial</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform -rotate-1 bg-white">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 left-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "ECO FLEIX makes it easy for us to manage our e-waste responsibly. Their campus collection events are a huge success, and their reliable service helps us meet our sustainability goals."
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Dr. David Chen" data-ai-hint="man portrait"/>
                            <AvatarFallback>DC</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">Dr. David Chen</p>
                            <p className="text-muted-foreground text-sm">Head of IT, Dubai International Academy</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="Educational Institutions" />
    </div>
    )
};

const FinancialInstitutionsContent = () => {
    const benefits = [
        { icon: <Shield className="h-7 w-7" />, title: 'Uncompromising Data Security', description: 'Exceeding regulatory standards for financial data destruction.' },
        { icon: <FileText className="h-7 w-7" />, title: 'Comprehensive Audit Trails', description: 'Complete chain-of-custody documentation for compliance.' },
        { icon: <Eye className="h-7 w-7" />, title: 'On-Site Destruction', description: 'Witness the secure destruction of sensitive assets at your own facility.' },
        { icon: <Globe className="h-7 w-7" />, title: 'Risk Mitigation', description: 'Protect your institution’s reputation by eliminating data breach risks.' },
    ];
    const metrics = [
        { value: '100%', label: 'Compliance with financial regulations' },
        { value: 'Tier-1', label: 'Banks among our satisfied clients' },
        { value: 'Zero', label: 'Compromises on data security' },
    ];
    return (
    <div id="financial-institutions" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Overview</Badge>
            <h2 className="text-3xl font-bold">Secure ITAD for Financial Institutions</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                The financial sector demands the highest level of data security. We provide specialized IT asset disposition services for banks and financial institutions, ensuring that all customer data and sensitive information is destroyed in compliance with industry regulations.
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </section>
        
        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Impact Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Client Testimonial</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform rotate-1 bg-white">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 right-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "For our institution, data security is non-negotiable. ECO FLEIX delivers with an exceptional level of professionalism and security that meets our stringent compliance needs. They are our trusted partner."
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Sarah Khan" data-ai-hint="woman portrait" />
                            <AvatarFallback>SK</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">Sarah Khan</p>
                            <p className="text-muted-foreground text-sm">Chief Security Officer, Premier Investment Bank</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="Financial Institutions" />
    </div>
    )
};


const HealthcareMedicalContent = () => {
    const benefits = [
        { icon: <Shield className="h-7 w-7" />, title: 'Patient Data Protection', description: 'Compliant data destruction services to protect sensitive patient information.' },
        { icon: <Recycle className="h-7 w-7" />, title: 'Specialized Equipment Handling', description: 'Expert handling and recycling of a wide range of medical electronic devices.' },
        { icon: <FileText className="h-7 w-7" />, title: 'Regulatory Compliance', description: 'Adherence to healthcare regulations for e-waste and data management.' },
        { icon: <Leaf className="h-7 w-7" />, title: 'Safe & Sustainable Disposal', description: 'Ensuring hazardous materials in medical devices are disposed of safely.' },
    ];
    const metrics = [
        { value: '100%', label: 'Compliance with health data regulations' },
        { value: '15+', label: 'Major hospitals and clinics served' },
        { value: '2 Tons', label: 'Of medical e-waste processed quarterly' },
    ];
    return (
    <div id="healthcare-medical" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">Overview</Badge>
            <h2 className="text-3xl font-bold">Compliant E-Waste for Healthcare</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                Healthcare providers handle sensitive patient data and specialized medical equipment. We offer compliant and secure e-waste solutions for hospitals, clinics, and laboratories, ensuring proper handling of medical electronics and adherence to health data regulations.
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </section>
        
        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">Impact Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{metric.label}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">Client Testimonial</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform -rotate-1 bg-white">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 left-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "The team at ECO FLEIX understands the complexities of healthcare e-waste. Their compliant and efficient service allows us to focus on what matters most: patient care."
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Aisha Al-Jamil" data-ai-hint="woman portrait" />
                            <AvatarFallback>AA</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">Aisha Al-Jamil</p>
                            <p className="text-muted-foreground text-sm">Hospital Administrator, City Medical Center</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
        
        <ReadyToServe title="Healthcare & Medical" />
    </div>
    )
};


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
                     <Button onClick={() => { setActiveSector(null); window.location.hash = ''; }} variant="outline" className="mb-8 group">
                        <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1"/>
                        Back to All Sectors
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
                                        <span className="text-sm font-semibold text-primary">Learn More</span>
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
