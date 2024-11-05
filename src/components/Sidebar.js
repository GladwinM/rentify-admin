import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Drawer,
  Typography,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          background: "linear-gradient(180deg, #844e9e, #ed2757)", // Gradient background
          color: "#ffffff", // Sidebar text color
        },
      }}
    >
      <Typography
        variant="h5"
        align="center"
        style={{ padding: "20px 0", color: "#ffffff" }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Admin Dashboard
        </Link>
      </Typography>
      <Divider sx={{ borderColor: "#ffffff" }} />
      <List>
        <ListItem button component={Link} to="/featured-products">
          <ListItemText primary="Featured Products" sx={{ color: "#ffffff" }} />
        </ListItem>
        <ListItem button component={Link} to="/banner-images">
          <ListItemText primary="Banner Images" sx={{ color: "#ffffff" }} />
        </ListItem>
        <ListItem button component={Link} to="/categories">
          <ListItemText primary="Categories" sx={{ color: "#ffffff" }} />
        </ListItem>
        <ListItem button component={Link} to="/terms-and-conditions">
          <ListItemText
            primary="Terms and Conditions"
            sx={{ color: "#ffffff" }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
