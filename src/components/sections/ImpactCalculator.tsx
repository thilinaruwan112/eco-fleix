'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, Loader2, BarChart } from 'lucide-react';
import { calculateEnvironmentalImpact, CalculateEnvironmentalImpactOutput } from '@/ai/flows/calculate-environmental-impact';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ImpactCalculator = () => {
  const [ewasteType, setEwasteType] = useState('');
  const [quantityKg, setQuantityKg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CalculateEnvironmentalImpactOutput | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ewasteType || !quantityKg) {
      setError('Please select an e-waste type and enter a quantity.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const output = await calculateEnvironmentalImpact({
        ewasteType,
        quantityKg: parseFloat(quantityKg),
      });
      setResult(output);
    } catch (err) {
      setError('Failed to calculate impact. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          Environmental Impact Calculator
        </CardTitle>
        <CardDescription>Estimate the positive impact of your recycling efforts.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="ewaste-type">Type of E-Waste</Label>
            <Select onValueChange={setEwasteType} value={ewasteType}>
              <SelectTrigger id="ewaste-type">
                <SelectValue placeholder="Select a type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Laptops">Laptops</SelectItem>
                <SelectItem value="Smartphones">Smartphones</SelectItem>
                <SelectItem value="Batteries">Batteries</SelectItem>
                <SelectItem value="TVs">TVs</SelectItem>
                <SelectItem value="Mixed Electronics">Mixed Electronics</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity (in kg)</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="e.g., 5"
              value={quantityKg}
              onChange={(e) => setQuantityKg(e.target.value)}
              min="0.1"
              step="0.1"
            />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {isLoading ? 'Calculating...' : 'Calculate Impact'}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {result && (
          <Alert className="mt-4">
            <BarChart className="h-4 w-4" />
            <AlertTitle>Your Estimated Impact</AlertTitle>
            <AlertDescription className="space-y-2">
              <p className="font-bold text-primary text-lg">
                {result.carbonFootprintReductionKg.toFixed(2)} kg CO₂ reduction
              </p>
              <p>{result.explanation}</p>
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default ImpactCalculator;
