import { Box, Typography } from "@mui/material";
import { getTheme } from "../utils/theme.js";
import { useEffect, useState } from "react";

export default function Timer() {
  const theme = getTheme();
  // const targetDate = new Date();
  // targetDate.setMonth(targetDate.getMonth() + 2);
  const targetDate = new Date(2025, 8, 1, 0, 0, 0, 0); // Months are 0-indexed: 8 = September

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      if (updatedTime) {
        setTimeLeft(updatedTime);
      } else {
        clearInterval(timer);
        setTimeLeft(null);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <p>Countdown complete!</p>;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: { md: "3.125rem", xs: "1.80rem" },
          margin: "55px auto 55px auto",
        }}
      >
        <Box sx={{ color: theme.palette.text.offWhite, mb: 2 }}>
          <Box sx={{ color: theme.palette.text.primary, display: "inline" }}>
            Going Live
          </Box>{" "}
          In
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((unit, idx) => (
            <Box
              key={idx}
              sx={{
                textAlign: "center",
                ml: { md: "45px", sm: "25px", xs: "10px" },
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {unit.value
                  .toString()
                  .padStart(2, "0")
                  .split("")
                  .map((digit, i) => (
                    <Box
                      key={i}
                      sx={{
                        width: 30,
                        height: 40,
                        backgroundColor: "transparent",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                        mr: {
                          md: "16px",
                          sm: "12px",
                          xs: "5px",
                        },
                        fontSize: { md: "30px", xs: "20px" },
                        fontWeight: "bold",
                        padding: {
                          md: "21px 16px",
                          sm: "10px 8px",
                          xs: "2px 1px",
                        },
                        background:
                          "radial-gradient(transparent, rgba(255,255,255,0.2))",
                      }}
                    >
                      {digit}
                    </Box>
                  ))}
              </Box>
              <Typography
                sx={{
                  mt: 1,
                  color: theme.palette.text.primary,
                  fontSize: { md: "20px", xs: "15px" },
                }}
              >
                {unit.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
