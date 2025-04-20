import React from "react";
import { Grid } from "@mui/material";

const PageLoading = () => (
  <Grid
    sx={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <img src="/infinity-spinner.svg" alt="loading" />
  </Grid>
);

export default PageLoading;
