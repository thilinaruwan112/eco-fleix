import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ChevronDown, Recycle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavLink = ({ children, href, hasDropdown = false }: { children: React.ReactNode, href: string, hasDropdown?: boolean }) => (
  <a href={href} className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
    {children}
    {hasDropdown && <ChevronDown className="h-4 w-4" />}
  </a>
);

const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 flex justify-between items-center py-2 text-xs">
          <div className="flex items-center gap-4">
            <a href="mailto:info@ecofleix.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@ecofleix.com</span>
            </a>
            <a href="tel:+97141234567" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+971 4 123 4567</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
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
          <div className="flex items-center gap-2">
            <Recycle className="h-8 w-8 text-primary" />
            <div className='flex flex-col'>
              <span className="font-bold text-2xl text-primary">ECO FLEIX</span>
              <span className="text-xs text-foreground/70 -mt-1">ELECTRONIC WASTE RECYCLING</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Blogs</NavLink>
            <NavLink href="#" hasDropdown>Services</NavLink>
            <NavLink href="#" hasDropdown>Who We Serve</NavLink>
            <NavLink href="#">Our Process</NavLink>
            <NavLink href="#">Contact</NavLink>
          </nav>
          <Button>Get a Quote</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
