import React, { Component } from "react";
//import PatientList from "./components/PatientList";
//import logo from "./logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Table from "./components/Table";
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Pacs</h1>
          </header>
          <Table />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
