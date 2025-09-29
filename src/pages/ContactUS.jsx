import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import "../../public/css/index.css";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import ContactForm from "../components/ContactForm";
import { useEffect } from "react";

export default function ContactUs() {
  const mission = {
    heading: "EMPOWERING HEALTH FOR ALL",
    description:
      "At TrainAero, our mission is to make fitness and wellness accessible, inclusive, and achievable for everyone. No matter where you are or what your journey looks like, we're here to support you every step of the way. Together, we can build healthier lives and stronger communities.",
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
