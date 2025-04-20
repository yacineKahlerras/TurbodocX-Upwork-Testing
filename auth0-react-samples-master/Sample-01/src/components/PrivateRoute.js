import React from "react";
import { Route, Redirect } from "react-router-dom";
// import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";
import validateUser from "../utils/validateUser";
import { useQuery } from "@tanstack/react-query";
import { Grid } from "@mui/material";
import PageLoading from "./PageLoading";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const { data: userValidationResponse, isLoading: isLoadingUserValidation } =
    useQuery({
      queryKey: ["validate-user"],
      queryFn: () => validateUser(getAccessTokenSilently),
      enabled: !!isAuthenticated,
    });

  if (isLoading || isLoadingUserValidation) return <PageLoading />;

  const isAllowed = isAuthenticated && userValidationResponse?.isValid;

  console.log("isAllowed : ", isAuthenticated, userValidationResponse);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAllowed ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}
