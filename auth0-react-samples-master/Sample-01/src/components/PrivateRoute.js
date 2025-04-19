import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";
import validateUser from "../utils/validateUser";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const { data: userValidationResponse, isLoading: isLoadingUserValidation } =
    useQuery({
      queryKey: ["validate-user"],
      queryFn: () => validateUser(getAccessTokenSilently),
      enabled: !!isAuthenticated,
    });

  if (isLoading || isLoadingUserValidation)
    return (
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

  const isAllowed = isAuthenticated && userValidationResponse?.isValid;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAllowed ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
