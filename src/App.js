import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated on app load
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/api/auth/validate", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          if (response.data.valid) {
            setIsAuthenticated(true);
          }
        })
        .catch((error) => {
          console.error("Error validating token:", error);
          setIsAuthenticated(false);
        });
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Public routes */}
          <Route path="/login">
            <Login setIsAuthenticated={setIsAuthenticated} />
          </Route>
          <Route path="/signup">
            <Signup setIsAuthenticated={setIsAuthenticated} />
          </Route>

          {/* Protected route */}
          <Route path="/dashboard">
            {isAuthenticated ? (
              <Dashboard />
            ) : (
              <div>
                <h3>You must log in to view this page</h3>
                <a href="/login">Go to Login</a>
              </div>
            )}
          </Route>

          {/* Redirect to login if route is not matched */}
          <Route path="/" exact>
            {isAuthenticated ? <Dashboard /> : <Login setIsAuthenticated={setIsAuthenticated} />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
