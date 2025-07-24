import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ChevronDown, Recycle, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const NavLink = ({ children, href, hasDropdown = false }: { children: React.ReactNode, href: string, hasDropdown?: boolean }) => (
  <a href={href} className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
    {children}
    {hasDropdown && <ChevronDown className="h-4 w-4" />}
  </a>
);

const services = [
  { name: 'IT Asset Remarketing', href: '/services#it-asset-remarketing' },
  { name: 'IT Asset Remanufacturing', href: '/services#it-asset-remanufacturing' },
  { name: 'IT Asset Disposition', href: '/services#it-asset-disposition' },
  { name: 'Data Destruction', href: '/services#data-destruction' },
];

const whoWeServe = [
    { name: 'Corporations', href: '/who-we-serve#corporations' },
    { name: 'Government Agencies', href: '/who-we-serve#government-agencies' },
    { name: 'Educational Institutions', href: '/who-we-serve#educational-institutions' },
    { name: 'Financial Institutions', href: '/who-we-serve#financial-institutions' },
    { name: 'Healthcare & Medical', href: '/who-we-serve#healthcare-medical' },
];

const Header = () => {
  const phoneNumber = '+97141234567'; // Replace with your WhatsApp number
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
            <NavLink href="#">Our Process</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-2">
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
                            <NavLink href="#">Our Process</NavLink>
                            <NavLink href="#">Contact</NavLink>
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
