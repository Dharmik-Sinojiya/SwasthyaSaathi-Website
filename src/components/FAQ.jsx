import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { getTheme } from "../utils/theme";
import "../../public/css/index.css";
import CloseIcon from "@mui/icons-material/Close";

export default function FAQ({ props }) {
  const theme = getTheme();
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => () => {
    setExpanded(expanded === panel ? null : panel);
  };
  return (
    <>
      <Box sx={{ my: 7 }}>
        <Typography
          variant="heading1"
          sx={{
            textAlign: "center",
            color: theme.palette.secondary.main,
            mb: 2,
          }}
        >
          You asked, we answered.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: theme.palette.secondary.main,
            fontSize: "22px",
            mb: 7,
          }}
        >
          Learn everything about the SwasthyaSaathi app and how it's empowering
          ASHA workers to deliver healthcare in even the most remote and
          low-connectivity areas.
        </Typography>

        {props.map((item, index) => {
          const isExpanded = expanded === index;
          return (
            <Accordion
              key={index}
              expanded={isExpanded}
              onChange={handleChange(index)}
              disableGutters
              elevation={0}
              square
              sx={{
                background: isExpanded
                  ? "linear-gradient(158deg, #000000 0%, #1A1A1B 71%, #2e2e2e 82%)"
                  : "#000",
                borderRadius: "24px",
                mb: 2,
                border: "1px solid #444",
                boxShadow: isExpanded
                  ? "0 0 10px rgba(255, 255, 255, 0.1)"
                  : "none",
                transition:
                  "background 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:before": { display: "none" },
                padding: { md: "15px", xs: "2px" },
              }}
            >
              <AccordionSummary
                expandIcon={
                  isExpanded ? (
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <CloseIcon sx={{ color: "white" }} />
                    </Box>
                  ) : (
                    <Box
                      component="span"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="/icons/plus.svg"
                        alt="plus icon"
                        style={{ width: 24, height: 24 }}
                      />
                    </Box>
                  )
                }
                sx={{
                  borderRadius: 2,
                  "& .MuiAccordionSummary-content": {
                    margin: 0,
                  },
                  px: 3,
                  py: 2,
                  minHeight: 48,
                  "& .MuiTypography-root": {
                    fontWeight: "500",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "22px",
                      md: "24px",
                    },
                    textTransform: "capitalize",
                  }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  px: 3,
                  py: 2,
                  borderRadius: 2,
                  fontSize: "20px",
                  color: "#ccc",
                  userSelect: "text",
                }}
              >
                {item.answer}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </>
  );
}
