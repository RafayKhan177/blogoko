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
import Link from "next/link";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const pages = ["home", "account", "categories", "feature"];
  const menu = [
    { name: "account", url: "/account" },
    { name: "upload blog", url: "/upload/blog" },
    { name: "logout", url: "logout" },
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
          <Avatar alt="User" src="/path-to-profile-picture.jpg" />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          className="flex-grow text-white"
        >
          BlogSpace
        </Typography>
        <div className="hidden md:flex space-x-6">
          {" "}
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
              <InputBase
                sx={{ flex: 1 }}
                type="search"
                placeholder="Search blogs & authors"
                inputProps={{ "aria-label": "search blogs & authors" }}
                className="text-sm"
              />
              <SearchIcon />
            </Paper>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}
