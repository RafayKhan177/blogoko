"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Paper,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const pages = ["home", "account", "categories", "feature"];
  const menu = ["account", "upload/blog", "logout"];

  return (
    <AppBar position="static" className="bg-gray-800">
      <Toolbar>
        <IconButton
          onClick={handleMenuOpen}
          size="large"
          color="inherit"
          aria-label="user profile"
          className="mr-2"
        >
          {/* User menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {menu.map((menu, ind) => (
              <MenuItem key={ind} onClick={handleMenuClose}>
                {menu}
              </MenuItem>
            ))}
          </Menu>
          <Avatar alt="User" src="/path-to-profile-picture.jpg" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          className="flex-grow text-white"
        >
          BlogSpace
        </Typography>
        <div className="hidden md:flex space-x-4">
          {" "}
          {/* Hide on small screens */}
          {pages.map((page,ind)=>(
          <Button key={ind} color="inherit" className="capitalize" href={page}>
            page
          </Button>

          ))}
          {/* Add more navigation links as needed */}
        </div>
        <div className="ml-auto flex">
          <div className="md:flex space-x-4 ml-4">
            {/* Search bar */}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "400px", // Adjust the width as needed
              }}
            >
              <InputBase
                sx={{ flex: 1 }}
                placeholder="Search blogs & authors"
                inputProps={{ "aria-label": "search blogs & authors" }}
              />
              <SearchIcon />
            </Paper>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
