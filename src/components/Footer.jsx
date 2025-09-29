import { Box, Typography, Button, FormControl, TextField } from "@mui/material";
import LOGO from "./LOGO.jsx";
import { getTheme } from "../utils/theme.js";
import { Link } from "react-router-dom";
import "../../public/css/index.css";
import Instagram from "./Instagram.jsx";
import Linkedin from "./Linkedin.jsx";
import Facebook from "./Facebook.jsx";
import { handleOnClick } from "../../public/index.js";

export default function Footer() {
  const theme = getTheme();
  return (
    <>
      <Box sx={{ backgroundColor: "#000000" }}>
        <Box className="container" sx={{ px: 3, pt: 10 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: "30px",
            }}
          >
            <Box
              sx={{
                width: {
                  md: "25%",
                  sm: "50%",
                },
              }}
            >
              <LOGO />
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgb(255,255,255,0.6)",
                  maxWidth: "400px",
                  mt: 1,
                }}
              >
                Empowering Rural Healthcare, One Step at a Time transforming
                health data collection in low-internet areas.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: {
                  md: "39%",
                  sm: "50%",
                  xs: "100%",
                },
                justifyContent: { sm: "space-around", xs: "start" },
                columnGap: "20px",
              }}
            >
              <Box>
                <Typography
                  variant="content"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 600,
                    fontSize: "14px",
                  }}
                >
                  Quick Links
                </Typography>
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "12px",
                  }}
                  className="footer-nav-container"
                >
                  <Link to={"/contact-us"}>Contact us</Link>
                  <Link to={"/faq"}>FAQ</Link>
                  {/* <Link to={"/terms-of-service"}>Terms of Services</Link>
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                  <Link to={"/account-deletion"}>
                    Account and Data Deletion
                  </Link> */}
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: {
                  md: "32%",
                },
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h4"
                className="gradient-text"
                sx={{
                  backgroundColor: "transparent",
                  color: theme.palette.secondary.main,
                  textShadow: "0 0 10px #070322, 0 0 5px #FFFFFF;",
                }}
              >
                Join the SwasthyaSaathi Community
              </Typography>
              <FormControl
                className="remove-border"
                sx={{
                  mt: "40px",
                  display: "flex",
                  flexDirection: "row",
                  border: "1px solid #ffffff",
                  borderRadius: "54px",
                  justifyContent: "space-between",
                }}
              >
                <FormControl
                  sx={{ width: "55%", border: "none", boxShadow: "none" }}
                >
                  <TextField
                    name="Email"
                    placeholder="Enter Your Gmail"
                    type="email"
                    required
                    sx={{
                      border: "none",
                      boxShadow: "none",
                      "& input::placeholder": {
                        color: "#FFFFFF",
                        opacity: 1,
                      },
                    }}
                  />
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="button-background"
                  onClick={handleOnClick}
                  sx={{
                    backgroundColor:"#FFFFFF !important",
                    border: "unset !important",
                    boxShadow: "unset !important",
                  }}
                >
                  Join Us
                </Button>
              </FormControl>
              {/* <Box
                sx={{ display: "flex", columnGap: "12px", marginTop: "40px" }}
              >
                <Box className="Social-media-link">
                  <Instagram />
                </Box>
                <Box className="Social-media-link">
                  <Linkedin />
                </Box>
                <Box className="Social-media-link">
                  <Facebook />
                </Box>
              </Box> */}
            </Box>
          </Box>
          <br />
          <br />
          <Box sx={{textAlign:'center',color:'#FFFFFF'}}>Copyright ©️ 2025, SwasthyaSaathi. All rights reserved.
          <br /><br />
          Designed & Developed by Team Tech-Hydra. All assets including images belong to their respective owners.</Box>
        </Box>
      </Box>
      {/* Footer */}
      <img src="/image/bottom-image.png" className="round-bottom" />
    </>
  );
}
