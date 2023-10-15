"use client";

import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import {
  getLoggedInUserDocData,
  saveUserDataToUserDoc,
} from "../api/functions/authentications";

const avatar =
  "https://img.freepik.com/free-photo/cartoon-character-with-handbag-sunglasses_71767-99.jpg?w=740&t=st=1695451332~exp=1695451932~hmac=f2030fac70a6d7d01eba5d3ded4e56ab567016b6b77c010aae2b775f46a0e93f";

const MyAccount = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchLoggedInUserDocData = async () => {
      const userData = await getLoggedInUserDocData();
      setUserData(userData);
    };

    fetchLoggedInUserDocData();
  }, []);

  const newUserData = {
    fullName: fullName,
    phone: phone,
  };

  const handleSave = async () => {
    await saveUserDataToUserDoc("abdulrafaykhan857@gmail.com", newUserData);
    setIsEditing(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className="p-4 flex flex-col items-center" elevation={3}>
        <div className="relative">
          <Avatar
            className="w-20 h-20 mb-4"
            src={
              isEditing
                ? profilePicture
                : userData
                ? (profilePicture && profilePicture.profilePicture) || avatar
                : avatar
            }
          >
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
          onChange={(e) => setProfilePicture(e.target.files[0])}
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
            value={
              isEditing
                ? fullName
                : userData
                ? userData.fullName || "Not Found"
                : "Not Found"
            }
            onChange={(e) => setFullName(e.target.value)}
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
            value={
              isEditing
                ? phone
                : userData
                ? userData.phone || "Not Found"
                : "Not Found"
            }
            onChange={(e) => setPhone(e.target.value)}
            className="mb-4"
          />
          {isEditing ? (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="mb-4"
              onClick={handleSave}
            >
              Save
            </Button>
          ) : (
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="mb-4 bg-green-700 hover:bg-green-900"
              onClick={() => setIsEditing(true)}
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
