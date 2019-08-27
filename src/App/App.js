import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header/Header';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        My app
      </div>
    );
  }
}
export default App;
