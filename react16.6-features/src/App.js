import React, { Component, lazy, Suspense } from "react";
import Context from "./components/Context";
import "./App.css";
import Spinner from "./components/Spinner";
import Parent from "./components/Parent";

const Component1 = lazy(() => import("./components/Component1"));
const Component2 = lazy(() => import("./components/Component2"));
class App extends Component {
  state = { show: false, name: "I will get passed without Props" };
  render() {
    return (
      <Context.Provider value={this.state.name}>
        <div className="App">
          <button onClick={() => this.setState({ show: !this.state.show })}>
            Click me to show components
          </button>
          <Suspense fallback={<Spinner />}>
            {this.state.show ? (
              <React.Fragment>
                <Component1 />
                <Component2 />
              </React.Fragment>
            ) : null}
          </Suspense>
          <Parent />
        </div>
      </Context.Provider>
    );
  }
}
export default App;
