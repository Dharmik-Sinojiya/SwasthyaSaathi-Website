import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import "../../public/css/index.css";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Mission from "../components/Mission";
import { useEffect } from "react";

export default function Faq() {
  const mission = {
    heading: "EMPOWERING HEALTHCARE, ENABLING IMPACT.",
    description:
      "SwasthyaSaathi is built with a mission to support ASHA workers by providing accessible, data-driven tools for healthcare delivery in low-connectivity regions. Our goal is to break digital barriers and empower grassroots healthcare workers with the right technology to make real, measurable impact on community health.",
  };

  const faqs = [
    {
      question: "1. What is SwasthyaSaathi?",
      answer:
        "SwasthyaSaathi is a mobile-based Electronic Health Record (EHR) companion designed to assist ASHA workers in managing patient health data, especially in areas with low or no internet connectivity.",
    },
    {
      question: "2. Who can use SwasthyaSaathi?",
      answer:
        "The app is specifically developed for ASHA (Accredited Social Health Activist) workers to help them record and manage patient health information more efficiently during field visits.",
    },
    {
      question: "3. Why is SwasthyaSaathi important for ASHA workers?",
      answer:
        "ASHA workers often work in rural or remote areas where internet connectivity is limited. SwasthyaSaathi allows them to collect, store, and access patient data offline, ensuring continuous healthcare support without dependency on internet access.",
    },
    {
      question: "4. Does SwasthyaSaathi require internet to function?",
      answer:
        "No. The core features of SwasthyaSaathi are designed to work offline. Data can be synced automatically when internet connectivity becomes available.",
    },
    {
      question:
        "5. What kind of patient data can ASHA workers record in the app?",
      answer:
        "ASHA workers can record patient details such as demographic information, vital signs, immunization status, maternal and child health data, disease symptoms, and follow-up requirements.",
    },
    {
      question:
        "6. How does SwasthyaSaathi ensure the privacy of patient data?",
      answer:
        "The app will use encryption and secure storage mechanisms to protect all patient data, ensuring compliance with data protection and health information privacy guidelines.",
    },
    {
      question:
        "7. Can SwasthyaSaathi be used in different regional languages?",
      answer:
        "Yes. SwasthyaSaathi will support multiple Indian languages to cater to ASHA workers from different regions and improve usability and accessibility.",
    },
    {
      question:
        "8. What happens if the phone is lost or damaged—will the data be lost?",
      answer:
        "The app will periodically back up data (when internet is available) to a secure cloud server. In case of loss or damage, ASHA workers can recover data by logging in on a new device.",
    },
    {
      question:
        "9. Is any training provided to ASHA workers to use SwasthyaSaathi?",
      answer:
        "Yes. A user-friendly interface along with basic training modules will be provided to ensure that ASHA workers can use the app effectively with minimal technical skills.",
    },
    {
      question: "10. When will SwasthyaSaathi be available for use?",
      answer:
        "The development of the application is currently in progress. A pilot launch will be announced soon, followed by full deployment in targeted regions.",
    },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <Box className="container">
        <FAQ props={faqs} />
        <Mission heading={mission.heading} description={mission.description} />
      </Box>
      <Footer />
    </>
  );
}
