import { Box, Typography, Button } from "@mui/material";
import "../../public/css/index.css";
import { handleOnClick } from "../../public";

export default function Mission({ heading, description }) {
  return (
    <>
      <Box sx={{ mt: 7, mb: 10, position: "relative", zIndex: 5 }}>
        <Box className="designed-background">
          <Typography
            variant="heading1"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {heading}
          </Typography>
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: "21px" }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              textAlign: "center",
              mt: 3,
              columnGap: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
              }}
              onClick={handleOnClick}
            >
              <Box sx={{ marginRight: "15px", mt: "5px" }}>
                <img width={"100%"} src="/icons/apple.svg" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: "rgb(255,255,255,0.8)",
                    fontSize: "12px",
                    mt: "3px",
                  }}
                >
                  Download on the
                </Typography>
                <Typography sx={{ textAlign: "left", fontWeight: 600 }}>
                  App Store
                </Typography>
              </Box>
            </Button>
            <Button onClick={handleOnClick} variant="contained" color="primary" sx={{ mt: 2 }}>
              <Box sx={{ marginRight: "15px", mt: "5px" }}>
                <img width={"100%"} src="/icons/playstore.svg" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    textAlign: "left",
                    color: "rgb(255,255,255,0.8)",
                    fontSize: "12px",
                    mt: "3px",
                  }}
                >
                  GET IT ON
                </Typography>
                <Typography sx={{ textAlign: "left", fontWeight: 600 }}>
                  Google Play
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
