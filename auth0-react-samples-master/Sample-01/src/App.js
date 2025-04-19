import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import "./App.css";
import initFontAwesome from "./utils/initFontAwesome";
import { CssBaseline, GlobalStyles, Grid } from "@mui/material";
import Dashboard from "./components/Dashboard";
import DeliverableForm from "./components/Deliverables";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./components/LoginPage";
initFontAwesome();

const App = () => {
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
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute path="/" exact component={Dashboard} />
          <PrivateRoute
            path="/deliverables/:id"
            exact
            component={DeliverableForm}
          />
        </Switch>
      </Grid>
    </Router>
  );
};

export default App;
