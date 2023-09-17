"use client";

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
import Link from "next/link";
import { useState } from "react";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const pages = ["home", "account", "categories", "feature"];
  const menu = [
    { name: "Account", url: "/account" },
    { name: "Upload Blog", url: "/upload/blog" },
    { name: "Logout", url: "logout" },
  ];

  return (
    <AppBar position="static" className="bg-teal-950">
      <Toolbar>
        <IconButton
          onClick={handleMenuOpen}
          size="large"
          color="inherit"
          aria-label="user profile"
          className="mr-2"
        >
          <Avatar alt="User" src="/path-to-profile-picture.jpg" />
        </IconButton>
        
        {/* User menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {menu.map((menu, ind) => (
            <MenuItem key={ind} onClick={handleMenuClose}>
              <Link href={menu.url}>{menu.name}</Link>
            </MenuItem>
          ))}
        </Menu>
        
        <Typography
          variant="h6"
          component="div"
          className="flex-grow text-white"
        >
          BlogSpace
        </Typography>
        <div className="hidden md:flex space-x-6">
          {/* Hide on small screens */}
          {pages.map((page, ind) => (
            <Button
              key={ind}
              color="inherit"
              className="capitalize  hover:text-teal-900"
            >
              <Link href={`${"/"}${page}`}>{page}</Link>
            </Button>
          ))}
          {/* Add more navigation links as needed */}
        </div>
        <div className="ml-auto flex">
          <div className="md:flex space-x-4 ml-4">
            {/* Search bar */}
            <Paper
              component="form"
              className="bg-white h-10 px-5 pr-5 rounded-full text-sm"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "250px", // Adjust the width as needed
              }}
            >
              <SearchIcon />
              <InputBase
                sx={{ flex: 1 }}
                type="search"
                placeholder="Search blogs & authors"
                inputProps={{ "aria-label": "search blogs & authors" }}
                className="text-sm"
              />
            </Paper>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}