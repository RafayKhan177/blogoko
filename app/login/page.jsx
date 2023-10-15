"use client";

import { Container, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import { signInWithEmail } from "../api/functions/authentications";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmit = async () => {
    signInWithEmail(email, pass);
  };

  return (
    <Container maxWidth="sm">
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <Grid>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            className="mt-4"
            onClick={() => onSubmit()}
          >
            Login
          </Button>
        </Grid>
      </div>
    </Container>
  );
};

export default Login;
