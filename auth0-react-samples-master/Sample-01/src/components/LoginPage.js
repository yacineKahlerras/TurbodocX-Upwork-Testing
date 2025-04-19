import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0();

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
          you need to login to access the dashboard
        </Typography>
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
          onClick={() => loginWithRedirect()}
        >
          Continue to Login
        </Button>
      </Box>
    </Box>
  );
}
