'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PickupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    ewasteDetails: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast({
      title: 'Request Received!',
      description: "Thank you! We'll be in touch shortly to confirm your e-waste pick-up.",
    });
    setFormData({ name: '', email: '', address: '', ewasteDetails: '' });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-6 w-6" />
          Request an E-Waste Pick-Up
        </CardTitle>
        <CardDescription>Fill out the form below to schedule a free collection for your electronic waste.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Pick-up Address</Label>
            <Input id="address" placeholder="Your address in Dubai" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ewasteDetails">E-waste Details</Label>
            <Textarea
              id="ewasteDetails"
              placeholder="e.g., 1 laptop, 2 old smartphones, various cables"
              value={formData.ewasteDetails}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Schedule Pick-Up'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PickupForm;
