import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import Home from "./views/Home";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import LoginPage from "./components/LoginPage";
import { CssBaseline, GlobalStyles, Grid } from "@mui/material";
import Dashboard from "./components/Dashboard";
import DeliverableForm from "./components/Deliverables";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <Grid
        sx={{
          width: "100%",
          minHeight: "100vh",
          m: 0,
          p: 0,
        }}
      >
        <CssBaseline />
        <GlobalStyles
          styles={{
            html: {
              boxSizing: "border-box",
              fontFamily: "Inter, sans-serif",
              backgroundColor: "#f9f9f9",
            },
            "*": {
              boxSizing: "inherit",
              margin: 0,
              padding: 0,
            },
            body: {
              lineHeight: 1.5,
              color: "#333",
            },
            a: {
              textDecoration: "none",
              color: "inherit",
            },
            ".MuiButton-root": {
              textTransform: "capitalize",
              color: "black",
              textDecoration: "none",
            },
          }}
        />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/deliverables" exact component={DeliverableForm} />
        </Switch>
      </Grid>
    </Router>
  );
};

export default App;
