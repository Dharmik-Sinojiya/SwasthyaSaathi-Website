import {
    Box,
    Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import '../../public/css/index.css'
import Footer from "../components/Footer";
import TermsList from "../components/TermsList";
import { getTheme } from "../utils/theme";
import { useEffect } from "react";

export default function PrivacyPolicy() {
    const data = [
        {
            title: '1. Categories of Data We Collect',
            onlyList: [
                'A. Personal Identification Data',
                'When you create an account, book sessions, complete assessments, or contact support, we may collect:',
                'Full name',
                'Email address',
                'Phone number',
                'Address (if provided)',
                'Date of birth',
                'Gender',
                'Fitness goals and health conditions (if voluntarily provided)',
                'Payment or billing details (processed securely via third-party providers)',
                'User-generated content (reviews, photos, feedback)',
                ' ',
                'B. Technical and Usage Data',
                'We may automatically collect:',
                'Device type and model',
                'Operating system',
                'Browser type',
                'IP address',
                'App usage patterns (pages visited, features used, session duration)',
                'Location data (if enabled)',
                'Training Data Logged',
                'Unique device identifiers (e.g., advertising IDs)',
                ' ',
                'C. Special Categories of Data',
                'In providing our services, we may collect health-related information, such as responses to health questionnaires and goals.'
            ],
        },
        {
            title: '2. How We Use Your Data',
            onlyList: [
                'We use your data to:',
                'Create and manage your account',
                'Track fitness sessions and training',
                'Process payments and send receipts',
                'Send updates, notifications, fitness tips, and promotional messages (you can opt out)',
                'Track your progress and personalise your experience',
                'Respond to inquiries and support requests',
                'Improve our app’s functionality and user experience',
                'Comply with legal obligations'
            ]
        },
        {
            title: '3. How We Use Your Data for Marketing and Analytics',
            onlyList: [
                'A. Cookies and Tracking Technologies',
                'We use cookies and similar technologies to:',
                'Recognise repeat visitors',
                'Save your preferences',
                'Improve user experience',
                'Track website/app usage analytics',
                'Partner Cookies:',
                'Facebook and Google: We use Facebook and Google cookies to serve targeted advertisements, measure ad performance, and re-engage visitors.',
                'You can manage cookies via your browser settings; disabling cookies may affect your experience.'
            ]
        },
        {
            title: '4. How We Protect Your Data',
            content: 'We implement industry-standard security measures and encryption, access controls, and regular audits. Despite these measures, no system guarantees complete security. We are committed to protecting your information and will notify you of any breach where legally required.'
        },
        {
            title: '5. Sharing Your Data',
            onlyList: [
                'Your personal data may be shared with:',
                'Fitness professionals and trainers  involved in delivering your services',
                'Service providers  (payment processors, hosting, analytics, marketing platforms)',
                'Legal authorities  when required by law',
                'Business partners  involved in service development or improvement',
                'All third parties are bound by confidentiality agreements and data processing obligations.'
            ]
        },
        {
            title: '6. International Data Transfers',
            content: 'Your data may be transferred outside your country, including to countries, with appropriate safeguards such as Standard Contractual Clauses to ensure protection.'
        },
        {
            title: '7. Your Rights and Data Management ',
            onlyList: [
                'A. Your Rights',
                'Depending on your jurisdiction, you have rights including:',
                'Access to your personal data',
                'Correct or update your data',
                'Delete your data',
                'Restrict or object to processing',
                'Withdraw consent at any time',
                ' ',
                'B. How to Exercise Your Rights',
                'To exercise your rights or request deletion, contact us at support@trainaero.com.',
                ' ',
                'C. Data Retention',
                'We retain your data only as long as necessary for the purposes outlined or as required by law (e.g., tax or legal obligations). You may request deletion at any time.'
            ]
        },
        {
            title: '8. Children’s Privacy & Age Policy',
            content: {
                text: 'TrainAero is designed to support users of all ages, including children under 12. We have a dedicated youth section to promote healthy activity among the next generation. Under 16 years old require parental consent and users may access the programs with restricted access in line with our policies.',
                text2: 'We do not knowingly allow children under the age of 16 full access. If you believe a child under 16 has provided us false information, contact us to delete it.'
            }
        },
        {
            title: '9. Cookies, Marketing Cookies & Tracking Technologies',
            onlyList: [
                'A. Cookies We Use',
                'We place cookies on your device to:',
                'Enable core functionalities and navigation',
                'Analyse usage patterns Deliver targeted advertising (via Facebook and Google)',
                ' ',
                'B. Marketing Cookies & Tracking',
                'Facebook Cookies: Recognise your visit, enable targeted ads, and measure ad effectiveness.',
                'Google Ads (AdWords): Re-engage visitors based on online behavior.',
                'You can disable cookies through your browser settings; however, this might limit functionality.',
                ' ',
                'C. User Control',
                'You can opt out of cookies or tracking cookies at any time via browser settings or opt-out links provided by the service providers.'
            ]
        },
        {
            title: '10. Data Security',
            content: 'We take appropriate technical and organisational measures, including encryption and access controls, to protect your data. Despite this, no method is entirely secure, and we cannot guarantee absolute security.'
        },
        {
            title: '11. Data Sharing & Legal Disclosures Your data may be shared with:',
            onlyList: [
                'Your data may be shared with:',
                'Third-party service providers (payment, hosting, analytics, marketing)',
                'Legal authorities (when required)',
                'Third-party acquisitions or mergers',
                'All third parties are bound by confidentiality and data protection obligations.'
            ]
        },
        {
            title: '12. International Data Transfers',
            content: 'Some service providers may process data outside the AUS. We ensure appropriate safeguards, such as Standard Contractual Clauses, are in place to protect your data.'
        },
        {
            title: '13. Retention & Your Rights',
            content: {
                text: 'Retention: Your data is retained only as long as necessary. You can request deletion at any time.',
                text2: 'Your Rights: You may request access, correction, deletion, restriction, or object to processing. To do so, contact us at support@trainaero.com.'
            }
        },
        {
            title: '14. Changes to This Privacy Policy',
            content: 'We may update this policy periodically. The latest version will always be posted here with an updated “Effective Date.” We encourage you to review it regularly.'
        },
        {
            title: '15. Contact Us',
            content: {
                text: 'For questions, concerns, or to exercise your rights:',
                text2: 'Email: support@trainaero.com'
            }
        },
    ]
    const theme = getTheme();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <Navbar />
            <Box className='container'>
                <Typography variant="heading1" sx={{ textAlign: "center", color: theme.palette.secondary.main, mt: 7, mb: 2 }}>Privacy Policy for TrainAero</Typography>
                <Typography variant="h6" sx={{ textAlign: "center", color: theme.palette.secondary.main, fontSize: '22px', width: '100%', maxWidth: '1120px', mx: 'auto' }}>
                    Welcome to TrainAero (“we,” “us,” “our”). We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our app and services. Please read this policy carefully.
                </Typography>
                <TermsList data={data} />
            </Box>
            <Footer />
        </>
    );
}
