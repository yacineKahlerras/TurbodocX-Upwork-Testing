import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Loading from "./components/Loading";
import Footer from "./components/Footer";
import Home from "./views/Home";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
import LoginPage from "./components/LoginPage";
import { Container } from "@mui/material";
initFontAwesome();

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: "100%",
          minHeight: "100vh",
          m: 0,
          p: 0,
        }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
