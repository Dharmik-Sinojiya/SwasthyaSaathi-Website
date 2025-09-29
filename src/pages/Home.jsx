import { Box, Button, FormControl, TextField } from "@mui/material";
import Navbar from "../components/Navbar";
import "../../public/css/index.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FitnessFeature from "../components/FitnessFeature";
import Testimonial from "../components/Testimonial";
import Timer from "../components/Timer";
import Mission from "../components/Mission";
import { useEffect } from "react";
import WifiOffIcon from '@mui/icons-material/WifiOff';
import PersonIcon from '@mui/icons-material/Person';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import SpeedIcon from '@mui/icons-material/Speed';


export default function Home() {
  // const theme = getTheme();
const fitnessPoint = [
  {
    key: "Offline Functionality",
    value: "Access and update patient health records even in low or no internet areas.",
    icon: "Offline",  // <-- This should match Offline.svg
  },
  {
    key: "ASHA-Friendly Interface",
    value: "Simple, intuitive design tailored for field use by ASHA workers.",
    icon: "User-Friendly",  // <-- matches User-Friendly.svg
  },
  {
    key: "Secure Health Records",
    value: "Ensures privacy and data protection for every patient.",
    icon: "Security",
  },
  {
    key: "Multi-Language Support",
    value: "Available in multiple regional languages to improve accessibility.",
    icon: "Language",
  },
  {
    key: "Smart Patient Profiles",
    value: "Easily manage patient details, visit history, and treatment records.",
    icon: "Profile",
  },
  {
    key: "Lightweight & Fast",
    value: "Optimized for low-end devices commonly used in rural areas.",
    icon: "Speed",
  },
];


 const testimonials = [
  {
    userName: "Sunita Devi",
    title: "Struggling with patient records offline",
    content:
      "Many times I have to travel to areas without internet, and managing patient details on paper is difficult and prone to errors. It’s hard to keep everything organized and updated.",
  },
  {
    userName: "Rajesh Kumar",
    title: "Complicated tools make work harder",
    content:
      "Existing digital solutions are often too complex or require constant connectivity, which is not practical in rural areas. We need a simple, reliable way to handle health records offline.",
  },
  {
    userName: "Meena Sharma",
    title: "Difficulty in ensuring privacy and accurate data",
    content:
      "Maintaining patient privacy while sharing health information is challenging. Manual records can be lost or damaged, leading to gaps in patient care.",
  },
];

const mission = {
  heading: "THE SWASTHYASAATHI MISSION",
  description:
    "Our mission is to empower ASHA and PHC workers with a reliable, mobile-based EHR companion that enhances healthcare delivery in underserved areas. We are committed to bridging the digital divide by providing accessible, offline-friendly, and easy-to-use solutions that improve patient management and health outcomes in low connectivity regions. Together, we aim to transform rural healthcare through innovation and community support.",
};


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar />
      <Box className="container">
        {/* <Timer /> */}
        <Hero />
        <FitnessFeature fitnessPoint={fitnessPoint} />
        {/* <Box
          sx={{
            mt: 7,
            pt: 1,
            mb: 7,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* here you can change the image!! ok ? ok  
            you want to remove quic link section ?
          <img
            src="/image/add-image.png"
            alt="Descriptive alt text"
            style={{ width: "100%", maxWidth: "800px" }}
          />
        </Box> */}
      </Box>
      <Testimonial testimonials={testimonials} />
      <Box className="container">
        <Mission heading={mission.heading} description={mission.description} />
      </Box>
      <Footer />
    </>
  );
}
