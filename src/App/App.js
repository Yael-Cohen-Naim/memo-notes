import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header/Header";
import Memo from "./Memo/Memo";
import Todolist from "./Todolist/Todolist";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main className="container">
            <Route path="/Memo" component={Memo} />
            <Route path="/Todolist" component={Todolist} />
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
