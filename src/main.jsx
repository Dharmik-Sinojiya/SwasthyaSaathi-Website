import { createRoot } from 'react-dom/client'
import '../public/css/index.css'
// import App from './App.jsx'
import Home from './pages/Home.jsx'
import { getTheme } from './utils/theme.js';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactUs from './pages/ContactUS.jsx';
import Faq from './pages/Faq.jsx';
import TermsOfService from './pages/TermsOfService.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import AccountDeletion from './pages/AccountDeletion.jsx';

const theme = getTheme();
createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
