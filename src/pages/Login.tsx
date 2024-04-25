import React, { useState } from "react";
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
import { CameraAlt } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { userNameValidator } from "../utils/Validators";

const Login = () => {
  const [isLogin, setisLogin] = useState<boolean>(true);
  const toggleLogin = (): void => setisLogin((prev) => !prev);

  const userName = useInputValidation("", userNameValidator);
  const password = useStrongPassword();
  const name = useInputValidation("");
  const bio = useInputValidation("");
  const avatar = useFileHandler("single", 10);

  const handleLogin = (e: any) => {
    e.preventDefault();
  };
  const handleSignUp = (e: any) => {
    e.preventDefault();
  };

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
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              onSubmit={handleLogin}
              style={{ width: "100%", marginTop: "1rem" }}
            >
              <TextField
                required
                fullWidth
                label="UserName"
                margin="normal"
                variant="outlined"
                value={userName.value}
                onChange={userName.changeHandler}
              />
              {userName.error && (
                <Typography color="error" variant="caption">
                  {userName.error}
                </Typography>
              )}
              <TextField
                type="password"
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{ marginTop: "1rem" }}
                fullWidth
              >
                Login
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                variant="text"
                type="submit"
                // sx={{ marginTop: "1rem" }}
                fullWidth
                onClick={toggleLogin}
              >
                Sign Up Instead
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              onSubmit={handleSignUp}
              style={{ width: "100%", marginTop: "1rem" }}
            >
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                  src={avatar.preview || ""}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(0,0,0,0.7)",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              {avatar.error && (
                <Typography
                  width="fit-content"
                  display="block"
                  color="error"
                  variant="caption"
                  m={"1rem auto"}
                >
                  {avatar.error}
                </Typography>
              )}
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="UserName"
                margin="normal"
                variant="outlined"
                value={userName.value}
                onChange={userName.changeHandler}
              />
              {userName.error && (
                <Typography color="error" variant="caption">
                  {userName.error}
                </Typography>
              )}
              <TextField
                type="password"
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {password.error && (
                <Typography color="error" variant="caption">
                  {password.error}
                </Typography>
              )}
              <Button
                variant="contained"
                type="submit"
                color="primary"
                sx={{ marginTop: "1rem" }}
                fullWidth
              >
                Sign Up
              </Button>
              <Typography textAlign={"center"} m={"1rem"}>
                OR
              </Typography>
              <Button
                variant="text"
                type="submit"
                // sx={{ marginTop: "1rem" }}
                fullWidth
                onClick={toggleLogin}
              >
                Login Instead
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
