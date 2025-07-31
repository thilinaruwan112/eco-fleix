import { Metadata } from 'next';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export const metadata: Metadata = {
  title: 'Cookie Policy | ECO FLEIX',
  description: 'Learn about the cookies used on the ECO FLEIX website. Understand how we use cookies to improve your browsing experience.',
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

export default function CookiePolicyPage() {
    return (
        <LegalContent title="Cookie Policy" lastUpdated="July 27, 2024">
            <h2>1. What Are Cookies</h2>
            <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.</p>

            <h2>2. How We Use Cookies</h2>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

            <h2>3. Disabling Cookies</h2>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.</p>

            <h2>4. The Cookies We Set</h2>
            <ul>
                <li>
                    <strong>Language Preference Cookies:</strong> We use cookies to remember your preferred language (English or Arabic) to provide a consistent experience across our site. These are essential for the site's multilingual functionality.
                </li>
                <li>
                    <strong>Site Preferences Cookies:</strong> In order to provide you with a great experience on this site, we provide the functionality to set your preferences for how this site runs when you use it. In order to remember your preferences, we need to set cookies so that this information can be called whenever you interact with a page that is affected by your preferences.
                </li>
                <li>
                    <strong>Third-Party Cookies:</strong> In some special cases, we also use cookies provided by trusted third parties. For example, this site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                </li>
            </ul>

            <h2>5. More Information</h2>
            <p>Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through one of our preferred contact methods:</p>
            <p>
                Email: info@eferecycling.com
            </p>
        </LegalContent>
    );
}
