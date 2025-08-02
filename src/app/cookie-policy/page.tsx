import type { Metadata } from 'next';
import { LegalContent } from '@/components/layout/LegalContent';

export const metadata: Metadata = {
  title: 'Cookie Policy | ECO FLEIX',
  description: 'Learn about the cookies used on the ECO FLEIX website. Understand how we use cookies to improve your browsing experience.',
};

export default function CookiePolicyPage() {
    return (
        <LegalContent title="Cookie Policy" lastUpdated="July 27, 2024">
            <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the site's functionality.</p>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.</p>

            <h2>Disabling Cookies</h2>
            <p>You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.</p>

            <h2>The Cookies We Set</h2>
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

            <h2>More Information</h2>
            <p>Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through one of our preferred contact methods:</p>
            <p>
                Email: info@eferecycling.com
            </p>
        </LegalContent>
    );
}
