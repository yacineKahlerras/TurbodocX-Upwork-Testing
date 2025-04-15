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
          textAlign: "center",
        }}
      >
        <img src="/logo.svg" alt="Logo" />
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Welcome
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 4 }}>
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
            },
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
          }}
        >
          Continue
        </Button>

        <Typography variant="body2" color="textSecondary">
          Don’t have an account?{" "}
          <a href="#" style={{ color: "#2A5CAA", textDecoration: "underline" }}>
            Sign up
          </a>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", my: 4 }}>
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            py: 1.5,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Typography variant="body2">Continue with Google</Typography>
        </Button>
      </Box>
    </Box>
  );
}
