import React from "react";
import { Button, TextField, Typography, Box, Divider } from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#2B579A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 3,
          width: "100%",
          maxWidth: "400px",
          p: 4,
          px: "1.5rem",
          textAlign: "center",
        }}
      >
        <img src="/logo.svg" alt="Logo" style={{ marginBottom: "1rem" }} />
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ mb: 2, fontSize: "1.5rem", fontWeight: 500 }}
        >
          Welcome
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 1.5 }}>
          Log in to t8-staging to continue to turbodocx-staging.
        </Typography>

        <TextField
          label="Email address"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              fontWeight: 700,
              "& input": {
                paddingLeft: "20px",
              },
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -9px) scale(0.75)",
            },
            pb: 2,
          }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#2A5CAA",
            "&:hover": {
              backgroundColor: "#1e4a9c",
            },
            mb: 2,
            py: 2,
            textTransform: "capitalize",
            textSize: "2.5rem",
          }}
        >
          Continue
        </Button>

        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: "left" }}
        >
          Don’t have an account?{" "}
          <a href="/register" style={{ color: "#2A5CAA", fontWeight: "700" }}>
            Sign up
          </a>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
          <Divider sx={{ flexGrow: 1 }} />
          <Typography variant="body2" color="textSecondary" sx={{ mx: 2 }}>
            OR
          </Typography>
          <Divider sx={{ flexGrow: 1 }} />
        </Box>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderColor: "gray",
            gap: 2,
            py: 1.5,
            px: 2,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
            textTransform: "initial",
            color: "gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            textSize: "2rem",
          }}
        >
          <img
            src="/google.svg"
            style={{ width: "1.5rem" }}
            alt="google logo"
          />
          Continue with Google
        </Button>
      </Box>
    </Box>
  );
}
