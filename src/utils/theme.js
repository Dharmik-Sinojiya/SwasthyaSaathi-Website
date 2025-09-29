import { createTheme } from "@mui/material/styles";

export const getTheme = () => {
    return createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#8C3EFF", // vibrant purple from buttons
            },
            secondary: {
                main: "#ffffff", // white for contrast
            },
            background: {
                default: "#111", // very dark background
                paper: "#1f1f1f", // dark card/bg elements
            },
            text: {
                primary: "#ffffff",
                secondary: "#cccccc",
                offWhite: "rgba(250, 250, 250, 0.4)"
            },
        },
        typography: {
            fontFamily: "'Oxanium', sans-serif",
            h2: {
                fontWeight: 700,
                fontSize: "3rem",
            },
            h3: {
                fontWeight: 700,
                fontSize: "2.5rem",
            },
            h4: {
                fontWeight: 600,
                fontSize: "2rem",
            },
            body1: {
                fontSize: "1rem",
                lineHeight: 1.6,
            },
            heading1: {
                fontSize: "36px",
                display: "block"
            },
            content: {
                fontSize: '14px'
            }
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: "none",
                        fontWeight: 600,
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        backgroundColor: "#2c2c2c",
                        color: "#fff",
                    },
                },
                variants: [
                    {
                        props: { variant: 'fitnessCard' },
                        style: {
                            border: '3px solid #ffffff',
                            borderRadius: '40px',
                            backgroundColor: 'rgba(255, 255, 255, 0.35)'
                        },
                    },
                ],
            },
            MuiAccordion: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#1f1f1f",
                        color: "#fff",
                    },
                },
            },
            Navbar: {
                border: "3px solid #ffffff",
            },
            Button: {
                primary: "#8C3EFF",
                radius: "50px"
            },
        },
    });
};