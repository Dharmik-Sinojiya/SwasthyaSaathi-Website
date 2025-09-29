import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import "../../public/css/index.css";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";

export default function ContactUs() {
  const mission = {
  heading: "ENABLING HEALTHCARE ACCESS FOR ALL",
  description:
    "At SwasthyaSaathi, our mission is to empower ASHA workers with a reliable, mobile-based EHR companion that works even in low internet connectivity areas. We aim to streamline health data collection and improve last-mile healthcare delivery, ensuring no one is left behind in the journey toward better health.",
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar />
      <Box className="container">
        <ContactForm />
        <Mission heading={mission.heading} description={mission.description} />
      </Box>
      <Footer />
    </>
  );
}
