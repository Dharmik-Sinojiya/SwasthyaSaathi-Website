import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Navbar from "../components/Navbar";
import "../../public/css/index.css";
import Footer from "../components/Footer";
import { getTheme } from "../utils/theme";
import { useEffect } from "react";

export default function AccountDeletion() {
  const theme = getTheme();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const steps = [
    "Open the TrainAero App",
    "Click the Account Tab",
    "Tap Settings",
    "Deactivate Account",
  ];
  return (
    <>
      <Navbar />
      <Box className="container">
        <Typography
          variant="heading1"
          sx={{
            textAlign: "center",
            color: theme.palette.secondary.main,
            mt: 7,
            mb: 2,
          }}
        >
          Your Data & Privacy
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: theme.palette.secondary.main,
            fontSize: "22px",
            width: "100%",
            maxWidth: "1120px",
            mx: "auto",
          }}
        >
          At Aero, we’re committed to transparency and giving you control over
          your personal information.
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            mt: 7,
            mb: 9,
            rowGap: 5,
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "48%",
              },
            }}
          >
            <Card sx={{ height: "100%" }} variant="fitnessCard">
              <CardContent sx={{ padding: "24px" }}>
                <img width={"56px"} src={`/icons/shield.svg`} />
                <Typography
                  variant="h6"
                  sx={{
                    margin: "24px 0px 14px 0px",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  How We Store Your Data
                </Typography>
                <Typography variant="content" sx={{ fontSize: "20px" }}>
                  Your data is securely stored using industry-standard
                  encryption. Your workout history, progress, and preferences
                  are only accessible to you and are never shared with third
                  parties.
                </Typography>
                <Typography
                  sx={{ fontSize: "20px", pt: 5, lineHeight: "normal" }}
                >
                  We may use anonymized, non-personal data to enhance
                  TrainAero's features, performance, and to inform improvements
                  and upgrades to our fitness programs.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "48%",
              },
            }}
          >
            <Card
              sx={{
                height: "100%",
                background:
                  "conic-gradient( #2e2e2e,  #3a3a3a,  #2a2a2a, #1a1a1a,  #2a2a2a, #3a3a3a, #2e2e2e)",
              }}
              variant="fitnessCard"
            >
              <CardContent sx={{ padding: "24px" }}>
                <img width={"56px"} src={"/icons/dustbin.svg"} />
                <Typography
                  variant="h6"
                  sx={{
                    margin: "24px 0px 14px 0px",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  Delete Your Account
                </Typography>
                <Typography variant="content" sx={{ fontSize: "20px" }}>
                  You can delete your account and all associated data at any
                  time directly from within the TrainAero app.
                </Typography>
                <List
                  sx={{
                    backgroundColor: "#000000",
                    borderRadius: "18px",
                    padding: "14px",
                    marginTop: "18px",
                  }}
                >
                  <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                    To delete your account:
                  </Typography>
                  {steps.map((step, index) => (
                    <ListItem key={index} sx={{ padding: 0 }}>
                      <ListItemText primary={`${index + 1}. ${step}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
