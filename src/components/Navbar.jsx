import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LOGO from "./LOGO.jsx";
import { getTheme } from "../utils/theme";
import { useState } from "react";
import { Link } from "react-router-dom";
import { handleOnClick } from "../../public/index.js";

const pages = [
  { pageName: "Home", path: "/" },
  { pageName: "FAQ", path: "/faq" },
  { pageName: "Contact us", path: "/contact-us" },
];

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = getTheme();
  // const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // useEffect(() => {
  //     const path = location.pathname;

  //     const matchedPage = pages.find((page) => page.path === path);

  //     if (matchedPage) {
  //         setActivePage(matchedPage.pageName);
  //     } else if (path === '' || path === '/') {
  //         setActivePage('Home');
  //     }
  // }, [location.pathname]);

  return (
    <AppBar
      position="sticky"
      className="nav-bar"
      sx={{
        backgroundColor: " rgba(70, 66, 69, 0.4)",
        top: "0px",
        boxShadow: "unset",
      }}
    >
      <Toolbar
        disableGutters
        className="container"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          margin: 0,
          px: 0,
        }}
      >
        {/* Left side: Logo and Mobile menu */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Mobile menu icon */}
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  
                  key={page.pageName}
                  onClick={() => handleCloseNavMenu(page.pageName)}
                >
                  <Link to={page.path}>
                    <Typography
                      textAlign="center"
                      sx={{ color: theme.palette.secondary.main,
                       }}
                    >
                      {page.pageName}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          {/* Logo */}
          <Link to={'/'}>
            <LOGO sx={{ ml: { xs: 1, md: 2 } }} />
          </Link>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, columnGap: 2 }}>
          {pages.map((page) => (
            <Link to={page.path} key={page.pageName}>
              <Button
                onClick={() => handleCloseNavMenu(page.pageName)}
                sx={{ my: 1, color: "white", fontWeight: 400, fontSize:'25px' }}
              >
                {page.pageName}
              </Button>
            </Link>
          ))}
        </Box>

        {/* Download App Button */}
        <Box>
          <Button
            variant="contained"
              onClick={handleOnClick}
            sx={{
              py: "8px",
              background:
                "linear-gradient(to right, #000000 0%, #000000 10%, #0ddce0ff 250%)",
              borderRadius: theme.components.Button.radius,
              lineHeight: "normal",
              fontWeight: 400,
              border: "2px solid rgb(255,255,255,0.4)",
              paddingTop: "9px",
            }}
          >
            Download App
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
