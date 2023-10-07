import { Component } from "react";
import Header from "./Componentes/Header";
import Navigation from "./Componentes/Navigation";
import Main from "./Componentes/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-row">
          <Navigation />
          <Main>
            <div className="subcont">
              <div className="subcontent"></div>
              <div className="subcontent"></div>
              <div className="subcontent"></div>
            </div>
            <div className="advertisement"></div>
          </Main>
        </div>
      </div>
    );
  }
}

export default App;
