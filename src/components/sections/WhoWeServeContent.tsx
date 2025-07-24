'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Building2, Landmark, School, Banknote, Stethoscope, Check, Shield, Globe, FileText, Users, DollarSign, Leaf, RefreshCw, BarChart, Eye, Star, Recycle } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useTranslation } from '@/hooks/use-translation';

const sectors = [
  { id: 'corporations', name: 'corporations', icon: <Building2 className="h-8 w-8 text-primary" />, description: 'corporations_desc' },
  { id: 'government-agencies', name: 'government_agencies', icon: <Landmark className="h-8 w-8 text-primary" />, description: 'government_agencies_desc' },
  { id: 'educational-institutions', name: 'educational_institutions', icon: <School className="h-8 w-8 text-primary" />, description: 'educational_institutions_desc' },
  { id: 'financial-institutions', name: 'financial_institutions', icon: <Banknote className="h-8 w-8 text-primary" />, description: 'financial_institutions_desc' },
  { id: 'healthcare-medical', name: 'healthcare_medical', icon: <Stethoscope className="h-8 w-8 text-primary" />, description: 'healthcare_medical_desc' },
];

const ReadyToServe = ({title} : {title: string}) => {
    const { t } = useTranslation();
    return (
    <section>
        <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-bold">{t('ready_to_serve_title', { sector: t(title) })}</h3>
                    <p className="mt-2 text-primary-foreground/90">
                        {t('ready_to_serve_desc')}
                    </p>
                </div>
                <Button variant="secondary" size="lg" className="flex-shrink-0">{t('get_free_consultation')}</Button>
            </CardContent>
        </Card>
    </section>
    )
};

const CorporationsContent = () => {
    const { t } = useTranslation();
    const benefits = [
        { icon: <Leaf className="h-7 w-7" />, title: 'corporations_benefit_1_title', description: 'corporations_benefit_1_desc' },
        { icon: <DollarSign className="h-7 w-7" />, title: 'corporations_benefit_2_title', description: 'corporations_benefit_2_desc' },
        { icon: <RefreshCw className="h-7 w-7" />, title: 'corporations_benefit_3_title', description: 'corporations_benefit_3_desc' },
        { icon: <Shield className="h-7 w-7" />, title: 'corporations_benefit_4_title', description: 'corporations_benefit_4_desc' },
    ];
    const metrics = [
        { value: '40%', label: 'corporations_metric_1_label' },
        { value: '99.9%', label: 'corporations_metric_2_label' },
        { value: '1,200+', label: 'corporations_metric_3_label' },
    ];
    return (
    <div id="corporations" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">{t('overview')}</Badge>
            <h2 className="text-3xl font-bold">{t('corporations_title')}</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                {t('corporations_overview_desc')}
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('key_benefits')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{t(benefit.title)}</h4>
                        <p className="text-sm text-muted-foreground">{t(benefit.description)}</p>
                    </Card>
                ))}
            </div>
        </section>
        
        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">{t('impact_metrics')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{t(metric.label)}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('client_testimonial')}</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform -rotate-1 bg-card">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 left-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "{t('corporations_testimonial_quote')}"
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Jane Doe" data-ai-hint="woman portrait" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{t('corporations_testimonial_author')}</p>
                            <p className="text-muted-foreground text-sm">{t('corporations_testimonial_title')}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="corporations" />
    </div>
    )
};

const GovernmentAgenciesContent = () => {
    const { t } = useTranslation();
    const benefits = [
        { icon: <Globe className="h-7 w-7" />, title: 'government_benefit_1_title', description: 'government_benefit_1_desc' },
        { icon: <Shield className="h-7 w-7" />, title: 'government_benefit_2_title', description: 'government_benefit_2_desc' },
        { icon: <FileText className="h-7 w-7" />, title: 'government_benefit_3_title', description: 'government_benefit_3_desc' },
        { icon: <DollarSign className="h-7 w-7" />, title: 'government_benefit_4_title', description: 'government_benefit_4_desc' },
    ];
    const metrics = [
        { value: '100%', label: 'government_metric_1_label' },
        { value: '50+', label: 'government_metric_2_label' },
        { value: '0', label: 'government_metric_3_label' },
    ];

    return(
    <div id="government-agencies" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">{t('overview')}</Badge>
            <h2 className="text-3xl font-bold">{t('government_title')}</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                {t('government_overview_desc')}
            </p>
        </section>
        
        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('key_benefits')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{t(benefit.title)}</h4>
                        <p className="text-sm text-muted-foreground">{t(benefit.description)}</p>
                    </Card>
                ))}
            </div>
        </section>

        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">{t('impact_metrics')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{t(metric.label)}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('client_testimonial')}</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform rotate-1 bg-card">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 right-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "{t('government_testimonial_quote')}"
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="H.E. Fatima Al Neyadi" data-ai-hint="woman portrait" />
                            <AvatarFallback>FA</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{t('government_testimonial_author')}</p>
                            <p className="text-muted-foreground text-sm">{t('government_testimonial_title')}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="government_agencies" />
    </div>
    )
};

const EducationalInstitutionsContent = () => {
    const { t } = useTranslation();
    const benefits = [
        { icon: <Users className="h-7 w-7" />, title: 'education_benefit_1_title', description: 'education_benefit_1_desc' },
        { icon: <DollarSign className="h-7 w-7" />, title: 'education_benefit_2_title', description: 'education_benefit_2_desc' },
        { icon: <Leaf className="h-7 w-7" />, title: 'education_benefit_3_title', description: 'education_benefit_3_desc' },
        { icon: <Eye className="h-7 w-7" />, title: 'education_benefit_4_title', description: 'education_benefit_4_desc' },
    ];
    const metrics = [
        { value: '250+', label: 'education_metric_1_label' },
        { value: '10,000+', label: 'education_metric_2_label' },
        { value: '5-Star', label: 'education_metric_3_label' },
    ];

    return(
    <div id="educational-institutions" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">{t('overview')}</Badge>
            <h2 className="text-3xl font-bold">{t('education_title')}</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                {t('education_overview_desc')}
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('key_benefits')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{t(benefit.title)}</h4>
                        <p className="text-sm text-muted-foreground">{t(benefit.description)}</p>
                    </Card>
                ))}
            </div>
        </section>

        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">{t('impact_metrics')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{t(metric.label)}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('client_testimonial')}</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform -rotate-1 bg-card">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 left-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "{t('education_testimonial_quote')}"
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Dr. David Chen" data-ai-hint="man portrait"/>
                            <AvatarFallback>DC</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{t('education_testimonial_author')}</p>
                            <p className="text-muted-foreground text-sm">{t('education_testimonial_title')}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="educational_institutions" />
    </div>
    )
};

const FinancialInstitutionsContent = () => {
    const { t } = useTranslation();
    const benefits = [
        { icon: <Shield className="h-7 w-7" />, title: 'finance_benefit_1_title', description: 'finance_benefit_1_desc' },
        { icon: <FileText className="h-7 w-7" />, title: 'finance_benefit_2_title', description: 'finance_benefit_2_desc' },
        { icon: <Eye className="h-7 w-7" />, title: 'finance_benefit_3_title', description: 'finance_benefit_3_desc' },
        { icon: <Globe className="h-7 w-7" />, title: 'finance_benefit_4_title', description: 'finance_benefit_4_desc' },
    ];
    const metrics = [
        { value: '100%', label: 'finance_metric_1_label' },
        { value: 'Tier-1', label: 'finance_metric_2_label' },
        { value: 'Zero', label: 'finance_metric_3_label' },
    ];
    return (
    <div id="financial-institutions" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">{t('overview')}</Badge>
            <h2 className="text-3xl font-bold">{t('finance_title')}</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                {t('finance_overview_desc')}
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('key_benefits')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{t(benefit.title)}</h4>
                        <p className="text-sm text-muted-foreground">{t(benefit.description)}</p>
                    </Card>
                ))}
            </div>
        </section>
        
        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">{t('impact_metrics')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{t(metric.label)}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('client_testimonial')}</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform rotate-1 bg-card">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 right-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "{t('finance_testimonial_quote')}"
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Sarah Khan" data-ai-hint="woman portrait" />
                            <AvatarFallback>SK</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{t('finance_testimonial_author')}</p>
                            <p className="text-muted-foreground text-sm">{t('finance_testimonial_title')}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>

        <ReadyToServe title="financial_institutions" />
    </div>
    )
};


const HealthcareMedicalContent = () => {
    const { t } = useTranslation();
    const benefits = [
        { icon: <Shield className="h-7 w-7" />, title: 'healthcare_benefit_1_title', description: 'healthcare_benefit_1_desc' },
        { icon: <Recycle className="h-7 w-7" />, title: 'healthcare_benefit_2_title', description: 'healthcare_benefit_2_desc' },
        { icon: <FileText className="h-7 w-7" />, title: 'healthcare_benefit_3_title', description: 'healthcare_benefit_3_desc' },
        { icon: <Leaf className="h-7 w-7" />, title: 'healthcare_benefit_4_title', description: 'healthcare_benefit_4_desc' },
    ];
    const metrics = [
        { value: '100%', label: 'healthcare_metric_1_label' },
        { value: '15+', label: 'healthcare_metric_2_label' },
        { value: '2 Tons', label: 'healthcare_metric_3_label' },
    ];
    return (
    <div id="healthcare-medical" className="space-y-16">
        <section className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-transparent">{t('overview')}</Badge>
            <h2 className="text-3xl font-bold">{t('healthcare_title')}</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                {t('healthcare_overview_desc')}
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('key_benefits')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow bg-muted/20">
                        <div className="flex justify-center mb-4">
                           <div className="bg-primary/10 text-primary rounded-full p-3">{benefit.icon}</div>
                        </div>
                        <h4 className="font-bold text-lg mb-2">{t(benefit.title)}</h4>
                        <p className="text-sm text-muted-foreground">{t(benefit.description)}</p>
                    </Card>
                ))}
            </div>
        </section>
        
        <section className="bg-muted/40 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-8">{t('impact_metrics')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {metrics.map(metric => (
                    <div key={metric.label} className="text-center">
                        <p className="text-4xl font-extrabold text-primary">{metric.value}</p>
                        <p className="text-muted-foreground mt-1">{t(metric.label)}</p>
                    </div>
                ))}
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold text-center mb-8">{t('client_testimonial')}</h3>
             <Card className="max-w-3xl mx-auto shadow-xl rounded-2xl transform -rotate-1 bg-card">
                <CardContent className="p-8 relative text-center">
                    <Star className="h-16 w-16 text-primary/10 absolute top-6 left-6 -z-0" fill="currentColor"/>
                    <blockquote className="text-lg text-foreground italic relative z-10">
                        "{t('healthcare_testimonial_quote')}"
                    </blockquote>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage src="https://placehold.co/48x48.png" alt="Aisha Al-Jamil" data-ai-hint="woman portrait" />
                            <AvatarFallback>AA</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold text-foreground">{t('healthcare_testimonial_author')}</p>
                            <p className="text-muted-foreground text-sm">{t('healthcare_testimonial_title')}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
        
        <ReadyToServe title="healthcare_medical" />
    </div>
    )
};


const WhoWeServeContent = () => {
  const { t } = useTranslation();
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
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
            {activeSector ? (
                <div>
                     <Button onClick={() => { setActiveSector(null); window.location.hash = ''; }} variant="outline" className="mb-8 group">
                        <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1"/>
                        {t('back_to_all_sectors')}
                    </Button>
                    {renderContent()}
                </div>
            ) : (
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {t('industries_we_serve')}
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                           {t('industries_we_serve_desc')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectors.map((sector) => (
                            <button key={sector.id} onClick={() => handleSetActiveSector(sector.id)} className="block group text-left">
                                <Card className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card h-full transform hover:-translate-y-2">
                                    <CardContent className="p-8 flex flex-col h-full">
                                    <div className="bg-primary/10 rounded-full p-3 mb-4 w-max">
                                        {sector.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground flex-grow">
                                        {t(sector.name)}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-2 mb-4 flex-grow">{t(sector.description)}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <span className="text-sm font-semibold text-primary">{t('learn_more')}</span>
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
