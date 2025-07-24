'use server';

/**
 * @fileOverview Calculates the environmental impact reduction (carbon footprint) achieved through recycling e-waste.
 *
 * - calculateEnvironmentalImpact - A function that calculates the environmental impact based on e-waste type and quantity.
 * - CalculateEnvironmentalImpactInput - The input type for the calculateEnvironmentalImpact function.
 * - CalculateEnvironmentalImpactOutput - The return type for the calculateEnvironmentalImpact function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CalculateEnvironmentalImpactInputSchema = z.object({
  ewasteType: z.string().describe('The type of e-waste being recycled (e.g., laptops, phones, batteries).'),
  quantityKg: z.number().describe('The quantity of e-waste in kilograms.'),
});
export type CalculateEnvironmentalImpactInput = z.infer<typeof CalculateEnvironmentalImpactInputSchema>;

const CalculateEnvironmentalImpactOutputSchema = z.object({
  carbonFootprintReductionKg: z.number().describe('The estimated carbon footprint reduction in kilograms of CO2 equivalent.'),
  explanation: z.string().describe('A detailed explanation of how the carbon footprint reduction was calculated.'),
});
export type CalculateEnvironmentalImpactOutput = z.infer<typeof CalculateEnvironmentalImpactOutputSchema>;

export async function calculateEnvironmentalImpact(input: CalculateEnvironmentalImpactInput): Promise<CalculateEnvironmentalImpactOutput> {
  return calculateEnvironmentalImpactFlow(input);
}

const calculateEnvironmentalImpactPrompt = ai.definePrompt({
  name: 'calculateEnvironmentalImpactPrompt',
  input: {schema: CalculateEnvironmentalImpactInputSchema},
  output: {schema: CalculateEnvironmentalImpactOutputSchema},
  prompt: `You are an expert in environmental science and waste management. Your task is to estimate the environmental impact reduction achieved through recycling electronic waste.

  Given the type of e-waste and the quantity recycled, calculate the carbon footprint reduction and provide a detailed explanation of your calculation. Use scientifically backed estimates and data for accurate results.

  E-waste Type: {{{ewasteType}}}
  Quantity: {{{quantityKg}}} kg`,
});

const calculateEnvironmentalImpactFlow = ai.defineFlow(
  {
    name: 'calculateEnvironmentalImpactFlow',
    inputSchema: CalculateEnvironmentalImpactInputSchema,
    outputSchema: CalculateEnvironmentalImpactOutputSchema,
  },
  async input => {
    const {output} = await calculateEnvironmentalImpactPrompt(input);
    return output!;
  }
);
