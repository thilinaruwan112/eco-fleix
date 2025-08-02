import type { Metadata } from 'next';
import { LegalContent } from '@/components/layout/LegalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | ECO FLEIX',
  description: 'Read the Privacy Policy for ECO FLEIX. Understand how we collect, use, and protect your personal information and data when you use our e-waste recycling services.',
};

export default function PrivacyPolicyPage() {
    return (
        <LegalContent title="Privacy Policy" lastUpdated="July 27, 2024">
            <h2>1. Introduction</h2>
            <p>Welcome to ECO FLEIX ("we," "our," "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website eferecycling.com, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site").</p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <h3>Personal Data</h3>
            <p>Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</p>
            <h3>Derivative Data</h3>
            <p>Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</p>

            <h2>3. How We Use Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul>
                <li>Create and manage your account.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
                <li>Offer new products, services, and/or recommendations to you.</li>
            </ul>

            <h2>4. Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            <h3>By Law or to Protect Rights</h3>
            <p>If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</p>
            <h3>Third-Party Service Providers</h3>
            <p>We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</p>
            
            <h2>5. Security of Your Information</h2>
            <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

            <h2>6. Policy for Children</h2>
            <p>We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.</p>

            <h2>7. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            
            <h2>8. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <address>
                ECO FLEIX<br />
                Al Raffa Street, Bur Dubai, Dubai<br />
                info@eferecycling.com<br />
                +971 54 456 3685
            </address>
        </LegalContent>
    );
}
