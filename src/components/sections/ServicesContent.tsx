'use client';

import { useState } from 'react';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, ShieldCheck, Trash2, Shield, AlertTriangle, Settings, FileText, Eye, HelpCircle, Clock, RefreshCw, Box, Package, Recycle, CheckCircle, DollarSign, Leaf, Globe, Settings2, Truck, BarChart3, HardDrive, Cpu, Wrench, CheckSquare, Search, Award, Users, BookUser, BarChartHorizontal, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { useTranslation } from '@/hooks/use-translation';

const services = [
  { id: 'it-asset-remarketing', name: 'it_asset_remarketing', icon: <Recycle className="h-8 w-8 text-primary" />, description: 'it_asset_remarketing_desc' },
  { id: 'it-asset-remanufacturing', name: 'it_asset_remanufacturing', icon: <RefreshCw className="h-8 w-8 text-primary" />, description: 'it_asset_remanufacturing_desc' },
  { id: 'it-asset-disposition', name: 'it_asset_disposition', icon: <Package className="h-8 w-8 text-primary" />, description: 'it_asset_disposition_desc' },
  { id: 'data-destruction', name: 'data_destruction', icon: <ShieldCheck className="h-8 w-8 text-primary" />, description: 'data_destruction_desc' },
];

const ItAssetDispositionContent = () => {
    const { t } = useTranslation();
    const features = [
        { icon: <Leaf className="h-7 w-7 text-green-600" />, title: 'itad_feature_1_title', description: 'itad_feature_1_desc' },
        { icon: <Clock className="h-7 w-7 text-blue-600" />, title: 'itad_feature_2_title', description: 'itad_feature_2_desc' },
        { icon: <Shield className="h-7 w-7 text-red-600" />, title: 'itad_feature_3_title', description: 'itad_feature_3_desc' },
        { icon: <BookUser className="h-7 w-7 text-yellow-600" />, title: 'itad_feature_4_title', description: 'itad_feature_4_desc' },
    ];
    return (
        <div id="it-asset-disposition" className="space-y-12">
            <section className="text-center">
                <Badge className="mb-4 bg-primary/10 text-primary border-transparent">{t('service_overview')}</Badge>
                <h2 className="text-3xl font-bold">{t('it_asset_disposition')}</h2>
                <div className="w-16 h-1.5 bg-primary my-4 rounded-full mx-auto"></div>
                <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
                    {t('itad_overview_desc')}
                </p>
            </section>
            
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map(feature => (
                        <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                           <CardContent className="p-6 flex items-start gap-4">
                               <div className="flex-shrink-0 bg-muted rounded-full p-3">{feature.icon}</div>
                               <div>
                                   <h3 className="font-bold text-lg">{t(feature.title)}</h3>
                                   <p className="text-muted-foreground text-sm mt-1">{t(feature.description)}</p>
                               </div>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8 items-center bg-muted/30 p-8 rounded-lg">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">{t('itad_custom_solutions_title')}</h3>
                    <p className="text-muted-foreground">
                        {t('itad_custom_solutions_desc')}
                    </p>
                     <Button>{t('request_a_consultation')}</Button>
                </div>
                 <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image 
                        src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt="Customized IT solutions meeting"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="business meeting technology"
                    />
                </div>
            </section>

            <section>
                <Card className="border-l-4 border-primary shadow-lg bg-card">
                    <CardContent className="p-8">
                       <div className="flex items-start gap-6">
                            <Users className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-2xl font-bold">{t('itad_experience_title')}</h3>
                                <p className="mt-2 text-muted-foreground">
                                    {t('itad_experience_desc')}
                                </p>
                            </div>
                       </div>
                    </CardContent>
                </Card>
            </section>

             <section>
                <Card className="bg-primary text-primary-foreground">
                    <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold">{t('itad_cta_title')}</h3>
                            <p className="mt-2 text-primary-foreground/90">
                                {t('itad_cta_desc')}
                            </p>
                        </div>
                        <Button variant="secondary" size="lg" className="flex-shrink-0">{t('contact_us_today')}</Button>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
};


const ItAssetRemanufacturingContent = () => {
    const { t } = useTranslation();
    const benefits = [
        { icon: <DollarSign className="h-8 w-8 text-primary" />, title: 'remanufacturing_benefit_1_title', description: 'remanufacturing_benefit_1_desc' },
        { icon: <Leaf className="h-8 w-8 text-primary" />, title: 'remanufacturing_benefit_2_title', description: 'remanufacturing_benefit_2_desc' },
        { icon: <Cpu className="h-8 w-8 text-primary" />, title: 'remanufacturing_benefit_3_title', description: 'remanufacturing_benefit_3_desc' },
        { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: 'remanufacturing_benefit_4_title', description: 'remanufacturing_benefit_4_desc' },
    ];
    const processSteps = [
        { icon: <Search className="h-7 w-7 text-primary" />, title: 'remanufacturing_step_1_title', description: 'remanufacturing_step_1_desc' },
        { icon: <Wrench className="h-7 w-7 text-primary" />, title: 'remanufacturing_step_2_title', description: 'remanufacturing_step_2_desc' },
        { icon: <HardDrive className="h-7 w-7 text-primary" />, title: 'remanufacturing_step_3_title', description: 'remanufacturing_step_3_desc' },
        { icon: <CheckSquare className="h-7 w-7 text-primary" />, title: 'remanufacturing_step_4_title', description: 'remanufacturing_step_4_desc' },
        { icon: <Award className="h-7 w-7 text-primary" />, title: 'remanufacturing_step_5_title', description: 'remanufacturing_step_5_desc' },
    ];
    return(
    <div id="it-asset-remanufacturing" className="space-y-12">
        <section>
            <Badge className="mb-2 bg-primary/10 text-primary border-transparent">{t('service_overview')}</Badge>
            <h2 className="text-3xl font-bold">{t('it_asset_remanufacturing')}</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full"></div>
            <p className="mt-4 text-muted-foreground">
                {t('remanufacturing_overview_desc')}
            </p>
        </section>

        <section>
            <Card className="bg-card/60 shadow-lg">
                <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">{t('remanufacturing_advantages_title')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map(item => (
                            <div key={item.title} className="flex flex-col items-center text-center gap-3">
                                <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold">{t(item.title)}</h4>
                                    <p className="text-sm text-muted-foreground">{t(item.description)}</p>
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
                    {t('remanufacturing_process_title')}
                </h3>
                <div className="space-y-6">
                    {processSteps.map((step) => (
                        <div key={step.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex-shrink-0">{step.icon}</div>
                            <div>
                                <h4 className="font-bold">{t(step.title)}</h4>
                                <p className="text-sm text-muted-foreground">{t(step.description)}</p>
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
                        <h3 className="text-2xl font-bold">{t('remanufacturing_cta_title')}</h3>
                        <p className="mt-2 text-primary-foreground/90">
                           {t('remanufacturing_cta_desc')}
                        </p>
                    </div>
                    <Button variant="secondary" size="lg" className="flex-shrink-0">{t('contact_us_today')}</Button>
                </CardContent>
            </Card>
        </section>
    </div>
);
}

const ItAssetRemarketingContent = () => {
    const { t } = useTranslation();
    return (
    <div id="it-asset-remarketing" className="space-y-12">
        <section>
            <Badge className="mb-2 bg-primary/10 text-primary border-transparent">{t('service_overview')}</Badge>
            <h2 className="text-3xl font-bold">{t('it_asset_remarketing')}</h2>
            <div className="w-16 h-1.5 bg-primary my-4 rounded-full"></div>
            <p className="mt-4 text-muted-foreground">
                {t('remarketing_overview_desc')}
            </p>
        </section>

        <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="h-7 w-7 text-primary" />
                {t('remarketing_benefits_title')}
            </h3>
            <div className="border-l-4 border-primary pl-6 space-y-6">
                <div>
                    <h4 className="font-bold flex items-center gap-2"><DollarSign className="h-5 w-5 text-green-600" />{t('remarketing_benefit_1_title')}</h4>
                    <p className="text-muted-foreground ml-7">{t('remarketing_benefit_1_desc')}</p>
                </div>
                <div>
                    <h4 className="font-bold flex items-center gap-2"><Settings2 className="h-5 w-5 text-green-600" />{t('remarketing_benefit_2_title')}</h4>
                    <p className="text-muted-foreground ml-7">{t('remarketing_benefit_2_desc')}</p>
                </div>
                <div>
                    <h4 className="font-bold flex items-center gap-2"><Leaf className="h-5 w-5 text-green-600" />{t('remarketing_benefit_3_title')}</h4>
                    <p className="text-muted-foreground ml-7">{t('remarketing_benefit_3_desc')}</p>
                </div>
            </div>
        </section>

        <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="h-7 w-7 text-primary" />
                {t('remarketing_process_title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">1</div>
                            <h4 className="font-bold">{t('remarketing_step_1_title')}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{t('remarketing_step_1_desc')}</p>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">2</div>
                            <h4 className="font-bold">{t('remarketing_step_2_title')}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{t('remarketing_step_2_desc')}</p>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">3</div>
                            <h4 className="font-bold">{t('remarketing_step_3_title')}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{t('remarketing_step_3_desc')}</p>
                    </CardContent>
                </Card>
                 <Card className="bg-muted/30">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary/10 text-primary font-bold rounded-full h-10 w-10 flex items-center justify-center">4</div>
                            <h4 className="font-bold">{t('remarketing_step_4_title')}</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{t('remarketing_step_4_desc')}</p>
                    </CardContent>
                </Card>
            </div>
        </section>
        
        <section className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
                <Globe className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">{t('remarketing_feature_1_title')}</h4>
                <p className="text-muted-foreground">{t('remarketing_feature_1_desc')}</p>
            </div>
            <div className="space-y-2">
                <Leaf className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">{t('remarketing_feature_2_title')}</h4>
                <p className="text-muted-foreground">{t('remarketing_feature_2_desc')}</p>
            </div>
             <div className="space-y-2">
                <Truck className="h-8 w-8 text-primary" />
                <h4 className="font-bold text-lg">{t('remarketing_feature_3_title')}</h4>
                <p className="text-muted-foreground">{t('remarketing_feature_3_desc')}</p>
            </div>
        </section>

        <section>
            <Card className="bg-primary/10 border-l-4 border-primary">
                <CardContent className="p-8">
                    <BarChart3 className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">{t('conclusion')}</h3>
                    <p className="mt-4 text-muted-foreground italic">
                        "{t('remarketing_conclusion_desc')}"
                    </p>
                </CardContent>
            </Card>
        </section>

         <section>
            <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold">{t('remarketing_cta_title')}</h3>
                        <p className="mt-2 text-primary-foreground/90">
                            {t('remarketing_cta_desc')}
                        </p>
                    </div>
                    <Button variant="secondary" size="lg" className="flex-shrink-0">{t('contact_us_today')}</Button>
                </CardContent>
            </Card>
        </section>
    </div>
);
}

const DataDestructionContent = () => {
    const { t } = useTranslation();
    const keyBenefits = [
      { icon: <ShieldCheck className="h-8 w-8 text-green-700" />, title: 'data_destruction_benefit_1_title', description: 'data_destruction_benefit_1_desc' },
      { icon: <Shield className="h-8 w-8 text-blue-700" />, title: 'data_destruction_benefit_2_title', description: 'data_destruction_benefit_2_desc' },
      { icon: <AlertTriangle className="h-8 w-8 text-green-700" />, title: 'data_destruction_benefit_3_title', description: 'data_destruction_benefit_3_desc' },
      { icon: <Trash2 className="h-8 w-8 text-blue-700" />, title: 'data_destruction_benefit_4_title', description: 'data_destruction_benefit_4_desc' },
    ];
    const destructionMethods = [
      'data_destruction_method_1',
      'data_destruction_method_2',
      'data_destruction_method_3',
      'data_destruction_method_4',
    ];
    const comprehensiveSolutions = [
      'data_destruction_solution_1',
      'data_destruction_solution_2',
      'data_destruction_solution_3',
      'data_destruction_solution_4',
    ];
    const yourDataYourControlItems = [
        { icon: <Eye className="h-8 w-8 text-primary" />, title: 'data_destruction_control_1_title' },
        { icon: <HelpCircle className="h-8 w-8 text-primary" />, title: 'data_destruction_control_2_title' },
        { icon: <Clock className="h-8 w-8 text-primary" />, title: 'data_destruction_control_3_title' },
    ]

    return(
    <div id="data-destruction" className="space-y-12">
    <section>
        <Badge className="mb-2 bg-primary/10 text-primary border-transparent">{t('service_overview')}</Badge>
        <h2 className="text-3xl font-bold">{t('data_destruction')}</h2>
        <div className="w-16 h-1.5 bg-primary my-4 rounded-full"></div>
        <p className="mt-4 text-muted-foreground">
        {t('data_destruction_overview_desc')}
        </p>
    </section>

    <section>
        <Card className="bg-card/60 shadow-lg">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{t('key_benefits')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {keyBenefits.map(item => (
                    <div key={item.title} className="flex flex-col items-center text-center gap-3">
                        <div className="bg-primary/10 rounded-full p-3 flex-shrink-0 group hover:bg-primary transition-colors duration-300">
                            {React.cloneElement(item.icon, { className: "h-8 w-8 text-primary group-hover:text-white transition-colors duration-300"})}
                        </div>
                        <div>
                            <h4 className="font-bold">{t(item.title)}</h4>
                            <p className="text-sm text-muted-foreground">{t(item.description)}</p>
                        </div>
                    </div>
                ))}
                </div>
            </CardContent>
        </Card>
    </section>

    <section className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg bg-card">
            <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                    <Settings className="h-7 w-7 text-primary" />
                    <h3 className="text-xl font-bold">{t('data_destruction_methods_title')}</h3>
                </div>
                <ul className="space-y-3">
                {destructionMethods.map(method => (
                    <li key={method} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600" />
                        <span>{t(method)}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
        <Card className="shadow-lg bg-card">
             <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-7 w-7 text-primary" />
                    <h3 className="text-xl font-bold">{t('data_destruction_solutions_title')}</h3>
                </div>
                <ul className="space-y-3">
                {comprehensiveSolutions.map(solution => (
                    <li key={solution} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-600" />
                        <span>{t(solution)}</span>
                    </li>
                ))}
                </ul>
            </CardContent>
        </Card>
    </section>
    
    <section>
        <Card className="shadow-lg bg-card">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold">{t('data_destruction_safeguarding_title')}</h3>
                <p className="mt-4 text-muted-foreground">
                {t('data_destruction_safeguarding_desc_1')}
                </p>
                <p className="mt-4 text-muted-foreground">
                {t('data_destruction_safeguarding_desc_2')}
                </p>
            </CardContent>
        </Card>
    </section>

    <section>
         <Card className="bg-card/60 shadow-lg">
            <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold">{t('data_destruction_control_title')}</h3>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                    {t('data_destruction_control_desc')}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
                    {yourDataYourControlItems.map(item => (
                        <div key={item.title} className="flex flex-col items-center gap-3">
                            <div className="bg-primary/10 rounded-full p-3">
                                {item.icon}
                            </div>
                            <h4 className="font-semibold">{t(item.title)}</h4>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </section>
     <section>
        <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 className="text-2xl font-bold">{t('data_destruction_cta_title')}</h3>
                    <p className="mt-2 text-primary-foreground/90">
                        {t('data_destruction_cta_desc')}
                    </p>
                </div>
                <Button variant="secondary" size="lg" className="flex-shrink-0">{t('contact_us_today')}</Button>
            </CardContent>
        </Card>
    </section>
    </div>
    )
};


const ServicesContent = () => {
  const { t } = useTranslation();
  const [activeService, setActiveService] = useState<string | null>(null);

  const renderContent = () => {
    if (!activeService) return null;
    switch(activeService) {
        case 'it-asset-remarketing': return <ItAssetRemarketingContent />;
        case 'it-asset-remanufacturing': return <ItAssetRemanufacturingContent />;
        case 'it-asset-disposition': return <ItAssetDispositionContent />;
        case 'data-destruction': return <DataDestructionContent />;
        default: return null;
    }
  }

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
            {activeService ? (
                <div>
                     <Button onClick={() => setActiveService(null)} variant="outline" className="mb-8">
                        &larr; {t('back_to_all_services')}
                    </Button>
                    {renderContent()}
                </div>
            ) : (
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                            {t('explore_our_services')}
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('explore_our_services_desc')}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <button key={service.id} onClick={() => setActiveService(service.id)} className="block group text-left">
                                <Card className="text-left shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl bg-card h-full transform hover:-translate-y-2">
                                    <CardContent className="p-8 flex flex-col h-full">
                                    <div className="bg-primary/10 rounded-full p-3 mb-4 w-max">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground flex-grow">
                                        {t(service.name)}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-2 mb-4 flex-grow">{t(service.description)}</p>
                                    <div className="flex justify-between items-center mt-auto">
                                        <p className="text-sm font-semibold text-primary">{t('learn_more')}</p>
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

export default ServicesContent;
