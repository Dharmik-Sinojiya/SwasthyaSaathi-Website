import { Box, Typography } from "@mui/material";
import { useRef, useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { getTheme } from "../utils/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../public/css/index.css";
export default function Testimonial({ testimonials }) {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideToLoop(1, 0);
      }
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const theme = getTheme();
  return (
    <>
      <Box sx={{ pb: 7 }} className="world-background image-wrapper">
        <br />
        <Typography
          variant="heading1"
          gutterBottom
          sx={{
            color: theme.palette.secondary.main,
            textAlign: "center",
            mb: 2,
            position: "relative",
            zIndex: 5,
          }}
        >
          <br />
          Real-Time Problems of ASHA and PHC Workers
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: theme.palette.secondary.main,
            textAlign: "center",
            fontWeight: 1200,
            fontSize:'20px',
            position: "relative",
            zIndex: 5,
          }}
        >
          SwasthyaSaathi is designed to empower ASHA and PHC workers by
          providing a reliable mobile-based EHR companion that enables efficient
          health record management, even in areas with low or no internet
          connectivity.
        </Typography>
        <Box
          style={{
            width: "100%",
            maxWidth: "100vw",
            margin: "0 auto",
            padding: "40px 0",
            position: "relative",
            zIndex: 5,
          }}
        >
          <Swiper
            ref={swiperRef}
            modules={[Pagination]}
            spaceBetween={20}
            loop={true}
            centeredSlides={!isMobile}
            pagination={{ clickable: true }}
            initialSlide={1}
            breakpoints={{
              0: { slidesPerView: 1 },
              600: { slidesPerView: 1.9 },
            }}
            style={{ padding: "0 20px" }}
          >
            {testimonials.map((data, index) => (
              <SwiperSlide key={index}>
                <Box
                  sx={{
                    backgroundColor: "rgb(0,0,0,0.50)",
                    padding: "40px",
                    borderRadius: "40px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 500,
                      textAlign: "center",
                    }}
                  >
                    {data.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.secondary.main,
                      textAlign: "center",
                      marginTop: 2,
                    }}
                  >
                    {data.content}
                  </Typography>

                  <Typography
                    variant="h5"
                    sx={{
                      color: theme.palette.secondary.main,
                      textAlign: "center",
                      position: "relative",
                      mt: 4,
                      paddingTop: "1px",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -15,
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: "1px",
                        width: "30%",
                        mb: 2,
                        background:
                          "linear-gradient(to right, #140F2A 0%, #FFFFFF 25%, #FFFFFF 75%, #140F2A 100%)",
                      },
                    }}
                  >
                    {data.userName}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}
