'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ShieldCheck, Trash2, Shield, AlertTriangle, Settings, FileText, Eye, HelpCircle, Clock, RefreshCw, Box, Package, Recycle, CheckCircle, DollarSign, Leaf, Globe, Settings2, Truck, BarChart3, HardDrive, Cpu, Wrench, CheckSquare, Search, Award } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';

const services = [
  { id: 'it-asset-remarketing', name: 'IT Asset Remarketing', icon: <Recycle className="h-5 w-5" /> },
  { id: 'it-asset-remanufacturing', name: 'IT Asset Remanufacturing', icon: <RefreshCw className="h-5 w-5" /> },
  { id: 'it-asset-disposition', name: 'IT Asset Disposition', icon: <Package className="h-5 w-5" /> },
  { id: 'data-destruction', name: 'Data Destruction', icon: <ShieldCheck className="h-5 w-5" /> },
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

const ItAssetRemanufacturingContent = () => {
    const benefits = [
        { icon: <DollarSign className="h-8 w-8 text-primary" />, title: 'Economical Solution', description: 'Revitalize existing IT assets, avoiding high costs of new purchases.' },
        { icon: <Leaf className="h-8 w-8 text-primary" />, title: 'Eco-Conscious', description: 'Significantly reduce electronic waste and support a circular economy.' },
        { icon: <Cpu className="h-8 w-8 text-primary" />, title: 'Enhanced Functionality', description: 'Boost hardware and software capabilities to meet current demands.' },
        { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: 'Data Integrity', description: 'Your sensitive information is securely managed throughout the process.' },
    ];
    const processSteps = [
        { icon: <Search className="h-7 w-7 text-primary" />, title: '1. In-depth Assessment', description: 'We conduct a thorough analysis of your IT assets to determine their remanufacturing potential.' },
        { icon: <Wrench className="h-7 w-7 text-primary" />, title: '2. Expert Restoration', description: 'Our certified engineers use state-of-the-art tools to repair and upgrade your hardware components.' },
        { icon: <HardDrive className="h-7 w-7 text-primary" />, title: '3. Secure Data Handling', description: 'We perform secure data wiping and management to protect your confidential information.' },
        { icon: <CheckSquare className="h-7 w-7 text-primary" />, title: '4. Rigorous Testing', description: 'Every remanufactured asset undergoes extensive quality assurance checks for peak performance.' },
        { icon: <Award className="h-7 w-7 text-primary" />, title: '5. Warranty & Assurance', description: 'We stand by our work with comprehensive warranty coverage and dedicated support.' },
    ];
    return(
    <div id="it-asset-remanufacturing" className="space-y-12">
        <section>
            <Badge className="mb-2 bg-primary/10 text-primary border-transparent">Service Overview</Badge>
            <h2 className="text-3xl font-bold">IT Asset Remanufacturing</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full"></div>
            <p className="mt-4 text-muted-foreground">
                We specialize in breathing new life into your aging IT infrastructure. Our remanufacturing service restores, repairs, and enhances your outdated technology, transforming it to perform like new and extending its operational lifespan.
            </p>
        </section>

        <section>
            <Card className="bg-white/60 shadow-lg">
                <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">The Advantages of Remanufacturing</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map(item => (
                            <div key={item.title} className="flex flex-col items-center text-center gap-3">
                                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
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

        <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
                 <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <RefreshCw className="h-7 w-7 text-primary" />
                    Our Comprehensive Process
                </h3>
                <div className="space-y-6">
                    {processSteps.map((step) => (
                        <div key={step.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex-shrink-0">{step.icon}</div>
                            <div>
                                <h4 className="font-bold">{step.title}</h4>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
             <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image 
                    src="https://images.unsplash.com/photo-1593722872436-f3655572a813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                    alt="Technician remanufacturing IT assets"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="technician electronics repair"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
        </section>

        <section>
            <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold">Ready to Upgrade Your Infrastructure?</h3>
                        <p className="mt-2 text-primary-foreground/90">
                            Discover how our IT asset remanufacturing can help you save money, reduce e-waste, and boost performance.
                        </p>
                    </div>
                    <Button variant="secondary" size="lg" className="flex-shrink-0">Contact Us Today</Button>
                </CardContent>
            </Card>
        </section>
    </div>
);
}

const ItAssetRemarketingContent = () => (
    <div id="it-asset-remarketing" className="space-y-12">
        <section>
            <Badge className="mb-2 bg-primary/10 text-primary border-transparent">Service Overview</Badge>
            <h2 className="text-3xl font-bold">IT Asset Remarketing</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full"></div>
            <p className="mt-4 text-muted-foreground">
                IT Asset Remarketing provides a strategic way to handle your company's outdated or surplus technology. Instead of disposal, we focus on reselling or redeploying these assets to maximize their value, lessen your financial outlay on new equipment, and promote environmental sustainability by giving your hardware a second life.
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="h-7 w-7 text-primary" />
                Benefits of IT Asset Remarketing
            </h3>
            <div className="border-l-4 border-primary pl-6 space-y-6">
                <div>
                    <h4 className="font-bold flex items-center gap-2"><DollarSign className="h-5 w-5 text-green-600" />Maximize Value</h4>
                    <p className="text-muted-foreground ml-7">We help you achieve the highest possible financial return on your outdated IT equipment, boosting your company's budget.</p>
                </div>
                <div>
                    <h4 className="font-bold flex items-center gap-2"><Settings2 className="h-5 w-5 text-green-600" />Cost Savings</h4>
                    <p className="text-muted-foreground ml-7">Lower the expense of new technology acquisitions and replacements by recovering value from your existing assets.</p>
                </div>
                <div>
                    <h4 className="font-bold flex items-center gap-2"><Leaf className="h-5 w-5 text-green-600" />Environmental Responsibility</h4>
                    <p className="text-muted-foreground ml-7">Contribute to a greener planet by extending the functional life of your IT hardware, which minimizes e-waste and supports circular economy principles.</p>
                </div>
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-7 w-7 text-primary" />
                Our IT Asset Remarketing Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">1</div>
                            <h4 className="font-bold">Assessment</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Our team evaluates your IT assets to ascertain their condition, value, and potential for resale.</p>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">2</div>
                            <h4 className="font-bold">Refurbishment</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">We professionally recondition and repair assets to ensure they meet market standards for resale.</p>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">3</div>
                            <h4 className="font-bold">Market Analysis</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">We perform in-depth market research to find the best sales channels and target buyers for your specific IT equipment.</p>
                    </CardContent>
                </Card>
                 <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">4</div>
                            <h4 className="font-bold">Resale</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">Our experts handle the complete sales cycle, from strategic marketing to secure transaction processing.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
                <Globe className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">Access a Worldwide Audience</h4>
                <p className="text-muted-foreground">Go beyond local markets. Our extensive network links you with international buyers, improving your odds of finding a buyer who recognizes the full value of your equipment.</p>
            </div>
            <div className="space-y-2">
                <Leaf className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">Sustainable Practices</h4>
                <p className="text-muted-foreground">Opting for remarketing over disposal is a smart environmental choice. You give your hardware a new purpose and play a part in minimizing electronic waste.</p>
            </div>
             <div className="space-y-2">
                <Truck className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">Streamlined Logistics</h4>
                <p className="text-muted-foreground">We manage all logistical details for you. After a sale, our team coordinates the packing and shipping, guaranteeing your equipment arrives safely at its new destination.</p>
            </div>
        </section>

        <section>
            <Card className="bg-primary/10 border-l-4 border-primary">
                <CardContent className="p-8">
                    <BarChart3 className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">Conclusion</h3>
                    <p className="mt-4 text-muted-foreground italic">
                        "IT Asset Remarketing is more than just a way to sell old devices; it's a key component of modern asset management. It offers a path to boost your organization's financial health, champion environmental sustainability, and guarantee data security."
                    </p>
                </CardContent>
            </Card>
        </section>
    </div>
);


const PlaceholderContent = ({ title }: {title: string}) => (
    <div id={title.toLowerCase().replace(/\s/g, '-')} className="space-y-12">
        <section>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mt-4 text-muted-foreground">
                Detailed information about our {title.toLowerCase()} services will be available soon. Please check back later or contact us for more information. We are committed to providing secure, compliant, and environmentally responsible solutions for all your IT asset needs.
            </p>
        </section>
        <section>
            <Card className="bg-white/60 shadow-lg">
                <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
                    <p className="text-muted-foreground">
                        We are currently updating this section to provide you with the best information possible.
                    </p>
                </CardContent>
            </Card>
        </section>
    </div>
);


const ServicesContent = () => {
  const [activeService, setActiveService] = useState('it-asset-remarketing');

  return (
    <div className="bg-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-8">
                <aside className="md:col-span-3 sticky top-28 self-start">
                    <Card className="p-4 shadow-lg">
                    <h3 className="text-lg font-bold mb-4 px-4">Our Services</h3>
                    <nav className="flex flex-col gap-2">
                        {services.map((service) => (
                        <a href={`#${service.id}`} key={service.id} onClick={(e) => { e.preventDefault(); setActiveService(service.id); const el = document.getElementById(service.id); el?.scrollIntoView({ behavior: 'smooth' }); }}>
                            <Button
                                variant={activeService === service.id ? 'default' : 'ghost'}
                                className="w-full justify-start gap-3 h-auto py-2 px-4 text-left whitespace-normal"
                                onClick={() => setActiveService(service.id)}
                            >
                                {service.icon}
                                <span className="flex-1">{service.name}</span>
                            </Button>
                        </a>
                        ))}
                    </nav>
                    </Card>
                </aside>

                <main className="md:col-span-9 space-y-12">
                {activeService === 'data-destruction' && (
                    <div id="data-destruction" className="space-y-12">
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
                 {activeService === 'it-asset-remarketing' && <ItAssetRemarketingContent />}
                 {activeService === 'it-asset-remanufacturing' && <ItAssetRemanufacturingContent />}
                 {activeService === 'it-asset-disposition' && <PlaceholderContent title="IT Asset Disposition" />}
                </main>
            </div>
        </div>
    </div>
  );
};

export default ServicesContent;
