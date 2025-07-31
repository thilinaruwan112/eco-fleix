import { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export const metadata: Metadata = {
  title: 'Terms and Conditions | ECO FLEIX',
  description: 'Read the Terms and Conditions for using ECO FLEIX\'s services and website. Understand your rights and responsibilities.',
};

const LegalContent = ({ title, lastUpdated, children }: { title: string, lastUpdated: string, children: React.ReactNode}) => {
    const { t } = useTranslation();
    return (
        <div className="bg-background">
            <section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4 text-center z-20 relative">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                        <a href="/" className="hover:text-primary">{t('home')}</a>
                        <ChevronRight className="h-4 w-4" />
                        <span>{title}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        {title}
                    </h1>
                    <p className="max-w-3xl mx-auto mt-4 text-sm text-muted-foreground">
                       Last Updated: {lastUpdated}
                    </p>
                </div>
            </section>
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="max-w-4xl mx-auto prose dark:prose-invert">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default function TermsAndConditionsPage() {
    return (
        <LegalContent title="Terms and Conditions" lastUpdated="July 27, 2024">
            <h2>1. Agreement to Terms</h2>
            <p>By using our website, eferecycling.com (the "Site"), and our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our Site or services.</p>
            
            <h2>2. Services</h2>
            <p>ECO FLEIX provides e-waste recycling, IT asset disposition (ITAD), and data destruction services. All services are provided "as is" and are subject to the terms outlined herein. We reserve the right to modify or discontinue services at any time.</p>

            <h2>3. User Responsibilities</h2>
            <p>You agree to provide accurate information when requesting services, including details about the e-waste to be collected. You are responsible for backing up any data from your devices before they are collected for recycling or destruction. While we offer secure data destruction, we are not liable for any data loss that occurs before the assets are in our possession.</p>

            <h2>4. Intellectual Property</h2>
            <p>All content on this Site, including text, graphics, logos, and images, is the property of ECO FLEIX or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content on this Site without our express written permission.</p>

            <h2>5. Limitation of Liability</h2>
            <p>In no event shall ECO FLEIX, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.</p>

            <h2>6. Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions.</p>
            
            <h2>7. Changes</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms and Conditions on this page. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

            <h2>8. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
                ECO FLEIX<br />
                Al Raffa Street, Bur Dubai, Dubai<br />
                info@eferecycling.com<br />
                +971 54 456 3685
            </p>
        </LegalContent>
    );
}
