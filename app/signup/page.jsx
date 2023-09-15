import React from "react";
import Head from "next/head";
import { Container, Paper, Typography, TextField, Button } from "@mui/material";
import Link from "next/link";

export default function SignUp() {
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

          <form>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
            />
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="password"
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
