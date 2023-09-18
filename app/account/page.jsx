"use client";

import React, { useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const MyAccount = () => {
  const [fullName, setFullName] = useState(""); // State for Full Name
  const [phone, setPhone] = useState(""); // State for Phone
  const [profilePicture, setProfilePicture] = useState(null); // State for Profile Picture
  const [isEditing, setIsEditing] = useState(false); // State for edit mode

  // Function to handle Full Name change
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setIsEditing(true);
  };

  // Function to handle Phone change
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setIsEditing(true);
  };

  // Function to handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
    setIsEditing(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="p-4 flex flex-col items-center" elevation={3}>
        <div className="relative">
          <Avatar className="w-20 h-20 mb-4" src={profilePicture}>
            {/* Display user's profile picture here */}
          </Avatar>
          <label
            htmlFor="profilePicture"
            className="absolute top-0 right-0 cursor-pointer p-1 bg-slate-100 rounded-full"
          >
            <PhotoCameraIcon className="w-5" />
          </label>
        </div>
        <input
          type="file"
          accept="image/*"
          id="profilePicture"
          style={{ display: "none" }}
          onChange={handleProfilePictureChange}
        />
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form className="w-full mt-4">
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="fullName"
            label="Full Name"
            name="fullName"
            autoComplete="name"
            value={fullName}
            onChange={handleFullNameChange}
            className="mb-4"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="tel"
            value={phone}
            onChange={handlePhoneChange}
            className="mb-4"
          />
          {isEditing ? (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="mb-4"
              // Add a function to save changes here
            >
              Save
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="mb-4 bg-green-700 hover:bg-green-900"
            >
              Edit
            </Button>
          )}
        </form>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className="bg-red-700 hover:bg-red-900"
        >
          Convert Account to Professional
        </Button>
      </Paper>
    </Container>
  );
};

export default MyAccount;
