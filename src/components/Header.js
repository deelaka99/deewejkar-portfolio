import React, { useState } from "react";
import { Link } from "gatsby";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Avatar,
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
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Experiences", link: "/experience" },
    { name: "Special Moments", link: "/special-moments" },
  ];

  const googleDriveLink =
    "https://drive.google.com/file/d/1Xm2PWXpEhKXpNLOfURGnzl_9DFGX1dzl/view?usp=sharing";

  const drawerContent = (
    <Box
      sx={{
        width: 270,
        bgcolor: "rgba(30,30,30,0.95)",
        height: "100%",
        boxShadow: 6,
        borderTopLeftRadius: 24,
        borderBottomLeftRadius: 24,
        p: 0,
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
    >
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              to={item.link}
              onClick={handleDrawerToggle}
              sx={{
                textAlign: "right",
                color: "white",
                borderRadius: 2,
                mx: 2,
                my: 0.5,
                fontWeight: 500,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.08)",
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2 }}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          href={googleDriveLink}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontWeight: 600,
            borderRadius: 2,
            py: 1.2,
            fontSize: "1rem",
            boxShadow: 3,
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          bgcolor: "rgba(30, 30, 30, 0.55)",
          backdropFilter: "blur(16px)",
          borderBottom: "1.5px solid rgba(255, 255, 255, 0.08)",
          transition: "all 0.3s ease",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
        }}
      >
        <Toolbar sx={{ minHeight: 72, px: { xs: 2, sm: 6 } }}>
          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexGrow: 1,
              gap: 1.5,
            }}
          >
            <Avatar
              alt="DeeWejkar Logo"
              sx={{
                width: 40,
                height: 40,
                bgcolor: "primary.main",
                color: "#fff",
                fontWeight: 500,
                fontSize: 18,
                boxShadow: 2,
                letterSpacing: 1,
              }}
            >
              DK
            </Avatar>
          </Box>

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 1 }}
            >
              <MenuIcon sx={{ color: "white", fontSize: 32 }} />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.link}
                  color="inherit"
                  sx={{
                    textTransform: "none",
                    fontSize: "1.08rem",
                    fontWeight: 500,
                    px: 2,
                    py: 1.2,
                    borderRadius: 2,
                    color: "white",
                    letterSpacing: 0.5,
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.08)",
                      color: "primary.main",
                    },
                  }}
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
                sx={{
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 3,
                  py: 1.2,
                  fontSize: "1.08rem",
                  boxShadow: 3,
                  ml: 1,
                }}
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
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 270,
            bgcolor: "rgba(30,30,30,0.95)",
            borderTopLeftRadius: 24,
            borderBottomLeftRadius: 24,
            p: 0,
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Header;
