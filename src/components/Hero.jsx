import { Box, Typography, Button } from "@mui/material";
import { getTheme } from "../utils/theme";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import Playstore from "./Playstore";
import Appstore from "./Appstore";
import { handleOnClick } from "../../public";
export default function Hero() {
  const theme = getTheme();
  return (
    <>
      <Box sx={{ mt: 7, mb: 7, textAlign: "center" }}>
        <Box
          sx={{
            display: "flex",
            columnGap: "50px",
            alignItems: { md: "flex-start", xs: "center" },
            justifyContent: "space-between",
            flexDirection: {
              xs: "column-reverse",
              md: "row",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                md: "50%",
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{ color: theme.palette.secondary.main }}
            >
              Swasthya
              <Box component="span" sx={{ color: "#a5c931ff" }}>
                Saathi
              </Box>
            </Typography>
            <Typography
              variant="h2"
              fontWeight="bold"
              sx={{
                color: theme.palette.secondary.main,
                mt: 4,
                fontSize: {
                  xs: "30px",
                  sm: "40px",
                },
                textTransform: "uppercase",
              }}
            >
              Connect with a Community That Cares <br />— Just Like You
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: { md: "545px" },
                color: theme.palette.secondary.main,
                mt: 2,
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Join a growing network of ASHA workers using SwasthyaSaathi to
              improve patient care, streamline data entry, and bridge the gap in
              healthcare delivery even without the internet.
            </Typography>
            <Box
              variant="body1"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: {
                  xs: "center",
                  md: "left",
                },
                mt: 2,
              }}
            >
              <InfoOutlineIcon
                sx={{ color: theme.palette.secondary.main, mr: 1 }}
              />

              <Typography sx={{ color: theme.palette.secondary.main }}>
                App Available For
              </Typography>

              <Box sx={{ ml: "10px" }}>
                <Box
                  onClick={handleOnClick}
                  className="cursor-pointer"
                  sx={{
                    display: "flex",
                    columnGap: "16px",
                    padding: "8px 12px",
                    background: theme.palette.secondary.main,
                    borderRadius: "100px",
                    alignItems: "center",
                  }}
                >
                  <Playstore />
                  <Appstore />
                </Box>
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={handleOnClick}
              sx={{
                mt: 2,
                padding: "16px 24px",
                fontSize: "18px",
                backgroundColor: "#f93f3fff", // custom background
                "&:hover": {
                  backgroundColor: "#a5c931ff ", // slightly darker for hover effect
                },
              }}
            >
              Download App
            </Button>
          </Box>
          <Box
            sx={{
              marginBottom: {
                xs: "30px",
                md: "0px",
              },
            }}
          >
            <img width={"90%"} src="/image/mobile_view_1.png" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
