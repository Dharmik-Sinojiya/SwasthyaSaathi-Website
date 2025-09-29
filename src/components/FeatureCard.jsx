import { Box, Typography, Card, CardContent } from "@mui/material";
export default function FeatureCard({ value }) {
  return (
    <>
      <Box
        sx={{
          width: {
            md: "32%",
            sm: "49%",
            xs: "100%",
          },
        }}
      >
        <Card
          sx={{ height: "100%", display: "flex", alignItems: "center" }}
          variant="fitnessCard"
        >
          <CardContent sx={{ padding: "24px" }}>
            <img width={"56px"} src={`/icons/${value.icon}.svg`} />
            <Typography variant="h6" sx={{ margin: "24px 0px 14px 0px" }}>
              {value.key}
            </Typography>
            <Typography variant="content">{value.value}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
