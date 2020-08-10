import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import AdminList from "./components/pages/AdminList";
import ScorerList from "./components/pages/ScorerList";
import PageNotFound from "./components/pages/PageNotFound";
import Home from "./components/pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/scorer" component={ScorerList} />
            <Route path="/admin" component={AdminList} />
            <Route component={PageNotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
