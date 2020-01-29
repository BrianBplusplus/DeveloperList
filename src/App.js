import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import Homepage from "./components/Homepage";
import Toolbar from "./components/Toolbar";
import PostPage from "./components/PostPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toolbar />
        <Switch>
          <Route path="/developers" component={DevelopersList} />
          <Route path="/read/:id" component={PostPage} />
          <Route path="/" component={Homepage} />
        </Switch>
        <Footer />
      </header>
    </div>
  );
}

export default App;
