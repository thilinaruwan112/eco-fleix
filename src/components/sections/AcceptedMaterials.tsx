'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Trash2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

const ALL_MATERIALS = [
  'Laptops', 'Smartphones', 'Tablets', 'Desktop Computers',
  'Monitors (LCD, LED)', 'Printers', 'Scanners', 'Keyboards',
  'Mice', 'Cables & Chargers', 'Power Banks', 'Batteries (all types)',
  'TVs (LCD, LED, Plasma)', 'DVD/Blu-ray Players', 'Speakers & Sound Systems',
  'Digital Cameras', 'Small Kitchen Appliances (e.g., toasters, blenders)',
  'Hair Dryers', 'Electric Shavers', 'Video Game Consoles'
];

const AcceptedMaterials = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMaterials = useMemo(() => {
    if (!searchTerm) return ALL_MATERIALS;
    return ALL_MATERIALS.filter(material =>
      material.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trash2 className="h-6 w-6" />
          Accepted Materials
        </CardTitle>
        <CardDescription>Use the search below to see if we accept your e-waste item.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="Search for an item..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <ScrollArea className="h-60 w-full rounded-md border p-4">
          {filteredMaterials.length > 0 ? (
            <ul className="space-y-2">
              {filteredMaterials.map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-center text-muted-foreground">No matching items found.</p>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AcceptedMaterials;
