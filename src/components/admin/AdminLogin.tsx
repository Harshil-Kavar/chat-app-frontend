import React from "react";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin = true

const AdminLogin = () => {
  const secretKey = useInputValidation("");

  const submitHandler = (e: any) => {
    e.preventDefault();
  };
  if (isAdmin) return <Navigate to={"/admin/dashboard"}/> 
  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          padding: 4,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Admin Login</Typography>
        <form
          onSubmit={submitHandler}
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <TextField
            type="password"
            required
            fullWidth
            label="Secret Key"
            margin="normal"
            variant="outlined"
            value={secretKey.value}
            onChange={secretKey.changeHandler}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            sx={{ marginTop: "1rem" }}
            fullWidth
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
