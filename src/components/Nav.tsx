/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { Link } from "react-scroll";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { navLinks } from "../data/datas";
import { css } from "@emotion/react";
import { CgMenuRound } from "react-icons/cg";

const NavLinksStyle = css`
  align-items: flex-end;
`;

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const draw = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item.hash} smooth={true} duration={500}>
                <Typography>{item.name}</Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="primary">
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <CgMenuRound />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "flex" } }} css={NavLinksStyle}>
            {navLinks.map((item) => (
              <Link
                key={item.id}
                to={item.hash}
                smooth={true}
                duration={500}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                <Button sx={{ color: "#fff" }}>{item.name}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
            },
          }}
        >
          {draw}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Nav;
