import {
  Box,
  Typography,
  Button,
  TextField,
  useMediaQuery,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { getTheme } from "../utils/theme";
import { useState } from "react";
import { handleOnClick } from "../../public";
export default function ContactForm() {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedTeam2, setSelectedTeam2] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const theme = getTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const fieldStyle = {
    flex: "1 1 calc(50% - 8px)",
    minWidth: isMobile ? "100%" : "calc(50% - 8px)",
    mb: 2,
  };

  const CustomArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
    >
      <path
        d="M12.9998 1C12.9998 1 8.58093 6.99999 6.99983 7C5.41873 7.00001 0.999878 1 0.999878 1"
        stroke="#413956"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "column-reverse",
            md: "row",
          },
          textAlign: "center",
          mt: { md: 7, xs: 7 },
          mb: 1,
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
            },
            textAlign: "center",
            // background: 'linear-gradient(150deg, transparent 0%, transparent 71%, transparent 100%)',
          }}
        >
          <Typography
            variant="heading1"
            fontWeight="lighter"
            sx={{ color: theme.palette.secondary.main, mb: 2 }}
          >
            Talk To The
            <Box component="span" sx={{ color: "#a5c931ff" }}>
              {" "}
              SwasthyaSaathi{" "}
            </Box>
            Team!
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: theme.palette.secondary.main, fontSize: "22px" }}
          >
            SwasthyaSaathi is a mobile-based Electronic Health Record (EHR)
            companion designed to support ASHA & PHC workers in low internet
            connectivity areas, helping them deliver better healthcare in remote
            communities.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 7,
          height: "fit-content",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "stretch", // Ensure equal height on children
          gap: 3, // Optional spacing between columns
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "50%",
            },
            textAlign: "left",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{ position: "relative", flex: 1, height: "100%" }}
            className="contact-form-bg"
          >
            {/* <Box sx={{ position: "absolute", bottom: 0, padding: "22px" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ color: theme.palette.primary.main }}
              >
                Chat With Us
              </Typography>
              <Typography variant="body1" color="white" sx={{ mb: 2 }}>
                Need help using SwasthyaSaathi ? Whether it's about recording
                patient data, syncing offline entries, or navigating the app 
                we're here to support you. Select the team you'd like to contact
                and share your details. You can also access support from the
                Help section in the app.
              </Typography>
            </Box> */}
          </Box>
        </Box>

        {/* Right Form Section */}
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "45%",
            },
            display: "flex",
            flexDirection: "column",
            height: "auto",
          }}
        >
          <Box
            sx={{
              display:"flex",
              flexDirection:"column",
              justifyContent:'center',
              background: "rgba(26, 26, 26, 0.5)",
              borderRadius: 2,
              p: "32px",
              color: "white",
              marginTop: {
                md: "0px",
                xs: "10px",
              },
              flex: 1,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: "left" }}
            >
              How Can We Help?
            </Typography>
            <Typography
              sx={{
                fontSize: "0.875rem",
                pt: 1,
                mb: 5,
                color: "#aaa",
                textAlign: "left",
              }}
            >
              Please fill out all required fields.
            </Typography>

            <Box
              component="form"
              sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
            >
              <TextField
                label="First Name"
                placeholder="Type First Name"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...fieldStyle,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                    color: "black",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-26px",
                    left: "-12px",
                    color: theme.palette.text.primary,
                    "&.Mui-focused": {
                      color: "#ffffff",
                    },
                  },
                  "& .MuiFilledInput-input": {
                    padding: "16px 15px 13px 15px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.text.primary,
                    "&::placeholder": {
                      color: "#413956",
                      opacity: 1,
                    },
                  },
                }}
              />
              <TextField
                label="Last Name"
                placeholder="Type Last Name"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...fieldStyle,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                    color: "black",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-26px",
                    left: "-12px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiFilledInput-input": {
                    padding: "14px 15px 13px 15px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.text.primary,
                    "&::placeholder": {
                      color: "#413956",
                      opacity: 1,
                    },
                  },
                }}
              />
              <TextField
                label="Phone Number"
                placeholder="Type Phone Number"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...fieldStyle,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                    color: "black",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-26px",
                    left: "-12px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiFilledInput-input": {
                    padding: "14px 15px 13px 15px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.text.primary,
                    "&::placeholder": {
                      color: "#413956",
                      opacity: 1,
                    },
                  },
                }}
              />
              <TextField
                label="Email Address"
                placeholder="Type Email Address"
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...fieldStyle,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                    color: "black",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-26px",
                    left: "-12px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiFilledInput-input": {
                    padding: "14px 15px 13px 15px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.text.primary,
                    "&::placeholder": {
                      color: "#413956",
                      opacity: 1,
                    },
                  },
                }}
              />
              {/* <TextField
                                label="Experience Level"
                                placeholder="Type Experience Lever"
                                fullWidth
                                variant="filled"
                                InputProps={{ disableUnderline: true }}
                                InputLabelProps={{ shrink: true }}
                                sx={{
                                    ...fieldStyle,
                                    '& .MuiFilledInput-root': {
                                        backgroundColor: 'transparent',
                                        color: 'black'
                                    },
                                    '& .MuiInputLabel-root': {
                                        top: "-26px",
                                        left: "-12px",
                                        color: theme.palette.text.primary,
                                    },
                                    '& .MuiFilledInput-input': {
                                        padding: '14px 15px 13px 15px',
                                        border: '1px solid black',
                                        borderRadius: '10px',
                                        backgroundColor: theme.palette.text.primary,
                                    },
                                }}
                            /> */}

              {/* <TextField
                className="custom-dropdown"
                label="Experience Level"
                fullWidth
                placeholder="Experience Level"
                variant="filled"
                select
                value={selectedTeam}
                onChange={(e) => setSelectedTeam(e.target.value)}
                SelectProps={{
                  onOpen: () => setIsDropdownOpen(true),
                  onClose: () => setIsDropdownOpen(false),
                }}
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...fieldStyle,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                    color: "black",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-26px",
                    left: "-12px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiFilledInput-input": {
                    padding: "14px 15px 13px 15px",
                    border: "1px solid black",
                    borderRadius: "10px !important",
                    backgroundColor: theme.palette.text.primary,
                  },
                  "& .MuiSelect-icon": {
                    width: "14px",
                    height: "8px",
                    right: "16px",
                    top: "50%",
                    transform: `translateY(-50%) rotate(${
                      isDropdownOpen ? "180deg" : "0deg"
                    })`,
                    transition: "transform 0.3s ease",
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'><path d='M12.9998 1C12.9998 1 8.58093 6.99999 6.99983 7C5.41873 7.00001 0.999878 1 0.999878 1' stroke='%23413956' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    color: "transparent",
                  },
                }}
              >
                <MenuItem value="Beginner">Beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Advanced">Advanced</MenuItem>
              </TextField> */}

              {/* <TextField
                className="custom-dropdown2"
                label="Team to Reach"
                fullWidth
                placeholder="Type Team to Reach"
                variant="filled"
                select
                value={selectedTeam2}
                onChange={(e) => setSelectedTeam2(e.target.value)}
                SelectProps={{
                  onOpen: () => setIsDropdownOpen2(true),
                  onClose: () => setIsDropdownOpen2(false),
                }}
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  ...fieldStyle,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "transparent",
                    color: "black",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-26px",
                    left: "-12px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiFilledInput-input": {
                    padding: "14px 15px 13px 15px",
                    border: "1px solid black",
                    borderRadius: "10px !important",
                    backgroundColor: theme.palette.text.primary,
                  },
                  "& .MuiSelect-icon": {
                    width: "14px",
                    height: "8px",
                    right: "16px",
                    top: "50%",
                    transform: `translateY(-50%) rotate(${
                      isDropdownOpen2 ? "180deg" : "0deg"
                    })`,
                    transition: "transform 0.3s ease",
                    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='8' viewBox='0 0 14 8' fill='none'><path d='M12.9998 1C12.9998 1 8.58093 6.99999 6.99983 7C5.41873 7.00001 0.999878 1 0.999878 1' stroke='%23413956' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    color: "transparent",
                  },
                }}
              >
                <MenuItem value="Accounts">Accounts</MenuItem>
                <MenuItem value="Programming">Programming</MenuItem>
                <MenuItem value="Support">Support</MenuItem>
              </TextField> */}

              <TextField
                label="How can we help?"
                placeholder="Kindly share your questions, suggestions, or any input related to community health, ASHA workflows, or the SwasthyaSaathi app."
                multiline
                rows={4}
                fullWidth
                variant="filled"
                InputProps={{ disableUnderline: true }}
                InputLabelProps={{ shrink: true }}
                sx={{
                  width: "100%",
                  ...fieldStyle,
                  "& .MuiFilledInput-root": {
                    padding: "0px",
                    backgroundColor: "transparent",
                    color: "black",
                  },
                  "& .MuiInputLabel-root": {
                    top: "-26px",
                    left: "-12px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiFilledInput-input": {
                    padding: "14px 15px 13px 15px",
                    border: "1px solid black",
                    borderRadius: "10px",
                    backgroundColor: theme.palette.text.primary,
                  },
                }}
              />
            </Box>

            <Button
              variant="contained"
              fullWidth
              onClick={handleOnClick}
              sx={{
                mt: 3,
                backgroundColor: "#f93f3fff",
                color: "white",
                fontWeight: "bold",
                borderRadius: "8px",
                py: 1.5,
                "&:hover": {
                  backgroundColor: "#a5c931ff",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
