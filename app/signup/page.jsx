"use client"

import { useState } from "react"; // Import useState
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { signUpWithEmail } from "../firebase/functions/authentications";

export default function SignUp() {
  // Create state variables for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    name: fullName,
    phone: phone,
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpWithEmail(email, password, userData);
  };

  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>

      <Container maxWidth="sm" className="py-8">
        <Paper elevation={3} className="p-6">
          <Typography variant="h5" component="div" className="mb-4">
            Sign Up
          </Typography>

          <form onSubmit={handleSubmit}>
            {" "}
            {/* Add onSubmit handler */}
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={fullName} // Bind value to state
              onChange={(e) => setFullName(e.target.value)} // Update state on change
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
              value={email} // Bind value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
              value={phone} // Bind value to state
              onChange={(e) => setPhone(e.target.value)} // Update state on change
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="password"
              value={password} // Bind value to state
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              className="mt-4"
            >
              Sign Up
            </Button>
          </form>

          <Typography variant="body2" className="mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500">
              Log In
            </Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
}
