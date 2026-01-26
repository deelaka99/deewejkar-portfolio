import React, { useState } from "react";
import { Link } from "gatsby";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Experiences", link: "/experience" },
    { name: "Special Moments", link: "/special-moments" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1D0zJELoCiRlpgKH8xrGlJab4KHqZRQ-q/view?usp=drive_link";

  const drawerContent = (
    <Box
      sx={{ width: 250, bgcolor: "background.paper", height: "100%" }}
      role="presentation"
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              onClick={handleDrawerToggle}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            component="a"
            href={googleDriveLink}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              justifyContent: "center",
              mt: 2,
              mx: 2,
              bgcolor: "primary.main",
              borderRadius: 1,
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            <ListItemText
              primary="Download CV"
              sx={{ color: "white", textAlign: "center" }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              color: "text.primary",
              fontWeight: "bold",
            }}
          >
            DeeWejkar
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.link}
                  color="inherit"
                  sx={{ textTransform: "none", fontSize: "1rem" }}
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                href={googleDriveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
