import {
    Box,
    Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import '../../public/css/index.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Footer from "../components/Footer";
import TermsList from "../components/TermsList";
import { getTheme } from "../utils/theme";
import { useEffect } from "react";

export default function TermsOfService() {
    const data = [
        { title: '1. About Us', content: 'The AERO platform is operated by TRAIN AERO Pty Ltd, an Australian-registered company ABN 45 678 000 327. Our mission "Making health and fitness accessible to the world"' },
        {
            title: '2. Subscription Terms', content: {
                text: 'TRAIN AERO operates on a flexible, cancel-anytime subscription model. No long-term contracts apply.',
                list: ['You are solely responsible for managing your subscription, including cancellation prior to the end of your current cycle if you do not wish to be charged next time.', 'All billing terms and pricing are clearly outlined on our platform\'s pricing page. By subscribing, you confirm that you accept these terms.'],
                text2: 'If a payment is missed or declined:',
                list2: [
                    'Access to the TRAIN AERO platform and its features will be suspended immediately until the outstanding balance is paid.',
                    'Repeated payment failures may result in cancellation of your subscription.'
                ],
                text3: 'We do not guarantee refunds for partial billing periods or unused features unless required under applicable consumer laws.'
            }
        },
        {
            title: '3. Access to the Platform', content: {
                text: 'We grant you a limited, non-transferable, and revocable right to use the TRAIN AERO platform for personal, non-commercial purposes. We may update, change, suspend or withdraw the platform (or any part of it) at any time without notice',
                text2: 'We are not liable for platform downtime or service interruptions and may restrict access to certain features to registered users only'
            }
        },
        {
            title: '4. Account Security', content: 'If you create an account, you are responsible for maintaining the confidentiality of your login details and for any activity under your account. Sharing login credentials is strictly prohibited and may result in account suspension or termination.'
        },
        {
            title: '5. User Responsibilities',
            content: {
                text: 'You are responsible for ensuring:',
                list: ['You have a stable internet connection and a compatible device to access the platform.', 'All individuals accessing the platform via your account are aware of and comply with these Terms of Use.']
            }
        },
        {
            title: '6. Health Disclaimer', content: {
                text: 'TRAIN AERO provides general fitness programming and content. It does not replace professional medical advice, diagnosis, or treatment.',
                text2: 'Before beginning any exercise program, consult a qualified health professional—especially if you have any pre-existing injuries or conditions. By using TRAIN AERO, you confirm that you do so voluntarily and at your own risk.'
            }
        },
        {
            title: '7. Platform Content and Accuracy', content: {
                text: 'All programs, resources, videos, and materials are for educational and general fitness purposes. We make reasonable efforts to ensure content is accurate at the time of publication, but we make no warranties as to completeness, accuracy, or ongoing availability.',
                text2: 'We reserve the right to update or remove content at any time without notice.',
                text3: 'TRAIN AERO is not liable for direct or indirect loss or damage resulting from reliance on content provided within the app or on linked third-party services, unless such liability cannot be excluded by law (e.g. for death or personal injury caused by negligence).'
            }
        },
        {
            title: '8. Intellectual Property', content: {
                text: 'All content, trademarks, programs, and technology on the TRAIN AERO platform are the intellectual property of TRAIN AERO Pty Ltd or its licensors.',
                text2: ' you not:',
                list2: ['View and use the platform for personal, non-commercial purposes only'],
                text3: 'You may not:',
                list3: ['Reproduce, copy, modify, distribute, transmit, republish, or exploit any content without written permission from TRAIN AERO']

            }
        },
        {
            title: '9. Linking, Sharing & Third-Party Content', content: {
                text: 'You may link to our homepage in a way that is fair, legal, and does not damage our reputation or imply association.',
                text2: 'You must not:',
                list2: ['Frame the platform or link in a misleading way.', 'Link from any site not owned or managed by you.'],
                text3: 'We may link to third-party websites or services. TRAIN AERO is not responsible for their content, accuracy, or privacy practices. Any dealings with third-party sites are solely between you and them.'
            }
        },
        {
            title: '10. Security and Misuse',
            content: {
                text: 'You must not misuse the platform by knowingly introducing viruses, malware, or attempting unauthorised access to our systems.',
                text2: 'Unauthorised use may result in suspension of access, termination of your account, and possible criminal prosecution under applicable cyber laws.'
            }
        },
        {
            title: '11. Changes to These Terms',
            content: {
                text: 'We may update these Terms of Use from time to time. Updates will be posted on this page and take effect immediately. You are responsible for reviewing the terms periodically.',
                text2: 'Continued use of the platform after any update constitutes acceptance of the revised terms.'
            }
        },
        {
            title: '12. Contact',
            content: {
                text: 'For any questions about these Terms of Use, please contact:',
                text2: 'support@trainaero.com',
                text3: 'By using the TRAIN AERO platform, you confirm that you have read, understood, and agreed to these Terms of Use by ticking .'
            }
        }
    ]
    const theme = getTheme();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    return (
        <>
            <Navbar />
            <Box className='container'>
                <Typography variant="heading1" sx={{ textAlign: "center", color: theme.palette.secondary.main, mt: 7, mb: 2 }}>TRAIN AERO – Terms of Use</Typography>
                <Typography variant="h6" sx={{ textAlign: "center", color: theme.palette.secondary.main, fontSize: '22px', width: '100%', maxWidth: '1120px', mx: 'auto' }}>
                    These Terms of Use govern your access to and use of the TRAIN AERO mobile application, website, and related services (referred to collectively as “TRAIN AERO”). Please read these terms carefully. By accessing or using our platform, you agree to be bound by them. If you do not agree, you must not use the platform.
                </Typography>
                <TermsList data={data} />
            </Box>
            <Footer />
        </>
    );
}
