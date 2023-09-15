"use client"

import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const Login = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // You can add your login logic here.
    // For a basic example, we'll just log the form data.
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            className="mt-4"
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
