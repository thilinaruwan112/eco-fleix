import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-foreground">EcoCollect Dubai</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
