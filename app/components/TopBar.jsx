"use client"

import React, { useState } from "react";
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
import { Search as SearchIcon } from "@mui/icons-material";
import Link from "next/link";

const pages = ["home", "account", "categories", "feature"];

const menuItems = [
  { name: "Account", url: "/account" },
  { name: "Upload Blog", url: "/upload/blog" },
  { name: "Logout", url: "/logout" },
];

export default function TopBar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
          {menuItems.map((menuItem, index) => (
            <MenuItem key={index} onClick={handleMenuClose}>
              <Link href={menuItem.url}>{menuItem.name}</Link>
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
          {pages.map((page, index) => (
            <Button
              key={index}
              color="inherit"
              className="capitalize hover:text-teal-900"
            >
              <Link href={`/${page}`}>{page}</Link>
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