'use client';

import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ChevronDown, Recycle, Menu, ArrowRight, Sun, Moon } from 'lucide-react';
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


const NavLink = ({ children, href, hasDropdown = false }: { children: React.ReactNode, href?: string, hasDropdown?: boolean }) => {
  const Comp = href ? 'a' : 'div';
  return (
      <Comp href={href} className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer">
        {children}
        {hasDropdown && <ChevronDown className="h-4 w-4" />}
      </Comp>
  )
};

const services = [
  { name: 'IT Asset Remarketing', href: '/services#it-asset-remarketing', description: 'Maximize value from retired IT assets.', image: 'https://placehold.co/400x400.png', aiHint: 'refurbished laptops' },
  { name: 'IT Asset Remanufacturing', href: '/services#it-asset-remanufacturing', description: 'Breathe new life into aging IT hardware.', image: 'https://placehold.co/400x400.png', aiHint: 'technician repairing computer' },
  { name: 'IT Asset Disposition', href: '/services#it-asset-disposition', description: 'Secure and sustainable management of retired assets.', image: 'https://placehold.co/400x400.png', aiHint: 'e-waste collection bins' },
  { name: 'Data Destruction', href: '/services#data-destruction', description: 'Ensure complete data elimination.', image: 'https://placehold.co/400x400.png', aiHint: 'hard drive shredder' },
];

const whoWeServe = [
    { name: 'Corporations', href: '/who-we-serve#corporations', description: 'Scalable solutions for businesses.', image: 'https://placehold.co/400x400.png', aiHint: 'modern office building' },
    { name: 'Government Agencies', href: '/who-we-serve#government-agencies', description: 'Secure and compliant disposal.', image: 'https://placehold.co/400x400.png', aiHint: 'government building' },
    { name: 'Educational Institutions', href: '/who-we-serve#educational-institutions', description: 'Responsible recycling for schools.', image: 'https://placehold.co/400x400.png', aiHint: 'university campus' },
    { name: 'Financial Institutions', href: '/who-we-serve#financial-institutions', description: 'Secure data destruction for finance.', image: 'https://placehold.co/400x400.png', aiHint: 'bank building exterior' },
    { name: 'Healthcare & Medical', href: '/who-we-serve#healthcare-medical', description: 'Specialized handling of medical e-waste.', image: 'https://placehold.co/400x400.png', aiHint: 'hospital building' },
];

const MegaMenu = ({title, items, viewAllHref} : {title: string, items: typeof services, viewAllHref: string}) => (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6 w-full max-w-6xl">
        <div className="bg-primary/5 rounded-lg p-6 flex flex-col justify-between col-span-1">
            <div>
                <h3 className="text-xl font-bold text-foreground">Shop by {title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Discover our curated collections.</p>
            </div>
            <a href={viewAllHref} className="flex items-center text-sm font-semibold text-primary mt-4 hover:underline">
                View All <ArrowRight className="ml-1 h-4 w-4" />
            </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 col-span-4">
            {items.map(item => (
                <a key={item.name} href={item.href} className="group">
                    <div className="aspect-square relative rounded-lg overflow-hidden mb-2">
                         <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="transform group-hover:scale-105 transition-transform" data-ai-hint={item.aiHint}/>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                </a>
            ))}
        </div>
    </div>
);

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


const Header = () => {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [whoWeServeOpen, setWhoWeServeOpen] = React.useState(false);
  const phoneNumber = '+97141234567';
  const message = "Hello! I'm interested in your e-waste recycling services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex justify-between items-center py-2 text-xs">
          <div className="flex items-center gap-2 md:gap-4 flex-wrap">
            <a href="mailto:info@ecofleix.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@ecofleix.com</span>
            </a>
            <a href="tel:+97141234567" className="hidden sm:flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+971 4 123 4567</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>Connect with us</span>
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
          <a href="/" className="flex items-center gap-2">
            <Recycle className="h-8 w-8 text-primary" />
            <div className='flex flex-col'>
              <span className="font-bold text-lg md:text-2xl text-primary">ECO FLEIX</span>
              <span className="text-xs text-foreground/70 -mt-1">ELECTRONICS WASTE RECYCLING</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blogs</NavLink>
            <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
              <DropdownMenuTrigger asChild>
                <div onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                  <NavLink hasDropdown>Services</NavLink>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen max-w-6xl" align="center" sideOffset={18} onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <MegaMenu title="Service" items={services} viewAllHref="/services"/>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu open={whoWeServeOpen} onOpenChange={setWhoWeServeOpen}>
              <DropdownMenuTrigger asChild>
                <div onMouseEnter={() => setWhoWeServeOpen(true)} onMouseLeave={() => setWhoWeServeOpen(false)}>
                  <NavLink hasDropdown>Who We Serve</NavLink>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-screen max-w-6xl" align="center" sideOffset={18} onMouseEnter={() => setWhoWeServeOpen(true)} onMouseLeave={() => setWhoWeServeOpen(false)}>
                <MegaMenu title="Sector" items={whoWeServe.slice(0,4)} viewAllHref="/who-we-serve"/>
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink href="/our-process">Our Process</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button className="hidden sm:inline-flex">Get a Quote</Button>
            </a>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-6 pt-12">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/blog">Blogs</NavLink>
                            {/* Simple dropdowns for mobile */}
                            <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus-visible:outline-none">
                                Services <ChevronDown className="h-4 w-4" />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                {services.map(service => (
                                  <DropdownMenuItem key={service.name} asChild>
                                    <a href={service.href}>{service.name}</a>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors focus-visible:outline-none">
                                Who We Serve <ChevronDown className="h-4 w-4" />
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                {whoWeServe.map(item => (
                                  <DropdownMenuItem key={item.name} asChild>
                                    <a href={item.href}>{item.name}</a>
                                  </DropdownMenuItem>
                                ))}
                              </DropdownMenuContent>
                            </DropdownMenu>
                            <NavLink href="/our-process">Our Process</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                             <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                <Button>Get a Quote</Button>
                             </a>
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
