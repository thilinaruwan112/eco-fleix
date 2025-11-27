
'use client';

import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ChevronDown, Menu, ArrowRight, Sun, Moon, Globe, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';
import * as React from 'react';
import { useTheme } from 'next-themes';
import { useTranslation } from '@/hooks/use-translation';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { acceptedItems, AcceptedItem } from '@/lib/accepted-items';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';


const NavLink = ({ children, href, hasDropdown = false, className }: { children: React.ReactNode, href?: string, hasDropdown?: boolean, className?: string }) => {
  const pathname = usePathname();
  const isActive = href === '/' ? pathname === href : href && pathname.startsWith(href);
  const Comp = href ? Link : 'div';
  return (
      <Comp
        href={href || ''}
        className={cn(
            "flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer",
            isActive ? "text-primary" : "text-foreground/80 hover:text-primary",
            className
        )}
      >
        {children}
        {hasDropdown && <ChevronDown className="h-4 w-4" />}
      </Comp>
  )
};

const services = [
  { name: 'it_asset_remarketing', href: '/services#it-asset-remarketing', description: 'it_asset_remarketing_desc_short', image: 'https://images.unsplash.com/photo-1589913649361-56d3f8762bc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxyZWZ1cmJpc2hlZCUyMGxhcHRvcHN8ZW58MHx8fHwxNzUzNjM5NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'refurbished laptops' },
  { name: 'it_asset_remanufacturing', href: '/services#it-asset-remanufacturing', description: 'it_asset_remanufacturing_desc_short', image: 'https://images.unsplash.com/photo-1724475439756-675ec5ee4053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHx0ZWNobmljaWFuJTIwcmVwYWlyaW5nJTIwY29tcHV0ZXJ8ZW58MHx8fHwxNzUzNjM5NDA0fDA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'technician repairing computer' },
  { name: 'it_asset_disposition', href: '/services#it-asset-disposition', description: 'it_asset_disposition_desc_short', image: 'https://images.unsplash.com/photo-1582748298043-0c0d31aa506e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxlLXdhc3RlJTIwY29sbGVjdGlvbiUyMGJpbnN8ZW58MHx8fHwxNzUzNjM5NDAzfDA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'e-waste collection bins' },
  { name: 'data_destruction', href: '/services#data-destruction', description: 'data_destruction_desc_short', image: 'https://images.unsplash.com/photo-1582184131482-5806da4a05c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxoYXJkJTIwZHJpdmUlMjBzaHJlZGRlcnxlbnwwfHx8fDE3NTM2Mzk0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'hard drive shredder' },
];

const whoWeServe = [
    { name: 'corporations', href: '/who-we-serve#corporations', description: 'corporations_desc', image: 'https://images.unsplash.com/photo-1703355685722-2996b01483be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwwfHx8fDE3NTM2Mzk3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'modern office building' },
    { name: 'government_agencies', href: '/who-we-serve#government-agencies', description: 'government_agencies_desc', image: 'https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MHx8fHwxNzUzNjM5NzU4fDA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'government building' },
    { name: 'educational_institutions', href: '/who-we-serve#educational-institutions', description: 'educational_institutions_desc', image: 'https://images.unsplash.com/photo-1642130935796-1409d7e075dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc1MzYzOTc1OHww&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'university campus' },
    { name: 'financial_institutions', href: '/who-we-serve#financial-institutions', description: 'financial_institutions_desc', image: 'https://images.unsplash.com/photo-1702396221197-4ed573fec8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxiYW5rJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwwfHx8fDE3NTM2Mzk3NTh8MA&ixlib=rb-4.1.0&q=80&w=1080', aiHint: 'bank building exterior' },
    { name: 'healthcare_medical', href: '/who-we-serve#healthcare-medical', description: 'healthcare_medical_desc', image: 'https://placehold.co/400x400.png', aiHint: 'hospital building' },
];

const MegaMenu = ({title, items, viewAllHref} : {title: string, items: any[], viewAllHref: string}) => {
    const { t } = useTranslation();
    return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 w-full max-w-6xl">
        <div className="bg-primary/5 rounded-lg p-6 flex flex-col justify-between col-span-1">
            <div>
                <h3 className="text-xl font-bold text-foreground">{t('shop_by_title', { title: t(title) })}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t('discover_our_collections')}</p>
            </div>
            <Link href={viewAllHref} className="flex items-center text-sm font-semibold text-primary mt-4 hover:underline">
                {t('view_all')} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 col-span-4">
            {items.map((item: AcceptedItem) => (
                <Link key={item.title} href={viewAllHref} className="group">
                    <div className="aspect-square relative rounded-lg overflow-hidden mb-2">
                         <Image src={item.image} alt={t(item.title)} fill objectFit="cover" className="transform group-hover:scale-105 transition-transform" data-ai-hint={item.aiHint}/>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary">{t(item.title)}</h4>
                    <p className="text-xs text-muted-foreground">{t(item.description)}</p>
                </Link>
            ))}
        </div>
    </div>
)};

const MobileMenuCollapsible = ({ title, items, href, closeSheet }: { title: string, items: {name: string, href: string}[], href: string, closeSheet: () => void}) => {
    const { t } = useTranslation();
    return (
        <Collapsible>
            <CollapsibleTrigger className="flex justify-between items-center w-full py-3 text-lg font-semibold">
                {t(title)}
                <ChevronDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent>
                <div className="pl-4 border-l border-muted-foreground/20">
                    {items.map(item => (
                        <Link
                            key={item.name}
                            href={item.href}
                            onClick={closeSheet}
                            className="block py-2 text-muted-foreground hover:text-primary"
                        >
                            {t(item.name)}
                        </Link>
                    ))}
                    <Link href={href} onClick={closeSheet} className="block py-2 font-semibold text-primary">
                        {t('view_all')}
                    </Link>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

const LanguageToggle = () => {
    const { setLanguage } = useTranslation();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Globe className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setLanguage('en')}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ar')}>العربية</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


const Header = () => {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = React.useState(false);
  const [whatWeAcceptOpen, setWhatWeAcceptOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const phoneNumber = '+971544563685';
  const message = "Hello! I'm interested in your e-waste recycling services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const { t } = useTranslation();

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex justify-between items-center py-2 text-xs">
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <a href="mailto:info@eferecycling.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@eferecycling.com</span>
            </a>
            <a href="tel:+971544563685" className="hidden sm:flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+971 54 456 3685</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>{t('connect_with_us')}</span>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-t border-border/50">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://content-provider.payshia.com/eco-fleix/logo-horizontal.png"
              alt="ECO FLEIX Logo"
              width={180}
              height={40}
              className="dark:filter dark:grayscale dark:invert"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">{t('home')}</NavLink>
            <NavLink href="/about">{t('about')}</NavLink>
            <NavLink href="/blog">{t('blogs')}</NavLink>
            <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger asChild>
                    <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)} className="py-2">
                      <NavLink hasDropdown href="/services">{t('services')}</NavLink>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="center"
                    sideOffset={18}
                    className="w-screen max-w-6xl"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                >
                    <MegaMenu title="service" items={services} viewAllHref="/services"/>
                </DropdownMenuContent>
            </DropdownMenu>
             <DropdownMenu open={whatWeAcceptOpen} onOpenChange={setWhatWeAcceptOpen}>
                <DropdownMenuTrigger asChild>
                    <div onMouseEnter={() => setWhatWeAcceptOpen(true)} onMouseLeave={() => setWhatWeAcceptOpen(false)} className="py-2">
                      <NavLink hasDropdown href="/what-we-accept">{t('what_we_accept')}</NavLink>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="center"
                    sideOffset={18}
                    className="w-screen max-w-6xl"
                    onMouseEnter={() => setWhatWeAcceptOpen(true)}
                    onMouseLeave={() => setWhatWeAcceptOpen(false)}
                >
                    <MegaMenu title="item" items={acceptedItems.slice(0,8)} viewAllHref="/what-we-accept"/>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu open={whoWeServeOpen} onOpenChange={setWhoWeServeOpen}>
                <DropdownMenuTrigger asChild>
                    <div onMouseEnter={() => setWhoWeServeOpen(true)} onMouseLeave={() => setWhoWeServeOpen(false)} className="py-2">
                      <NavLink hasDropdown href="/who-we-serve">{t('who_we_serve')}</NavLink>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="center"
                    sideOffset={18}
                    className="w-screen max-w-6xl"
                    onMouseEnter={() => setWhoWeServeOpen(true)}
                    onMouseLeave={() => setWhoWeServeOpen(false)}
                >
                    <MegaMenu title="sector" items={whoWeServe.slice(0,4)} viewAllHref="/who-we-serve"/>
                </DropdownMenuContent>
            </DropdownMenu>
            <NavLink href="/our-process">{t('our_process')}</NavLink>
            <NavLink href="/contact">{t('contact')}</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="hidden sm:inline-flex">{t('get_a_quote')}</Button>
            </a>
            <div className="md:hidden">
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-sm p-0">
                        <div className="flex flex-col h-full">
                            <div className="p-6 flex justify-between items-center border-b">
                               <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                                    <Image
                                    src="https://content-provider.payshia.com/eco-fleix/logo-horizontal.png"
                                    alt="ECO FLEIX Logo"
                                    width={150}
                                    height={33}
                                    className="dark:filter dark:grayscale dark:invert"
                                    />
                                </Link>
                            </div>
                            <div className="flex-grow overflow-y-auto p-6">
                                <div className="flex flex-col gap-2">
                                    <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold">{t('home')}</Link>
                                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold">{t('about')}</Link>
                                    <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold">{t('blogs')}</Link>
                                    
                                    <MobileMenuCollapsible
                                        title='services'
                                        items={services}
                                        href="/services"
                                        closeSheet={() => setMobileMenuOpen(false)}
                                    />
                                     <MobileMenuCollapsible
                                        title='what_we_accept'
                                        items={acceptedItems.map(i => ({name: i.title, href: '/what-we-accept'}))}
                                        href="/what-we-accept"
                                        closeSheet={() => setMobileMenuOpen(false)}
                                    />
                                    <MobileMenuCollapsible
                                        title='who_we_serve'
                                        items={whoWeServe}
                                        href="/who-we-serve"
                                        closeSheet={() => setMobileMenuOpen(false)}
                                    />
                                    
                                    <Link href="/our-process" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold">{t('our_process')}</Link>
                                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-3 text-lg font-semibold">{t('contact')}</Link>
                                </div>
                            </div>
                            <div className="p-6 border-t">
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                                    <Button className="w-full" size="lg">{t('get_a_quote')}</Button>
                                </a>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
