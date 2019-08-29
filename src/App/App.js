import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Notes from './Notes/Notes';
import Todolist from "./Todolist/Todolist";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="container">
            <Route path="/Notes" component={Notes} />
            <Route path="/Todolist" component={Todolist} />
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
