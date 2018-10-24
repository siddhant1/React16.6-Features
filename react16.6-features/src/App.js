import React, { Component, lazy, Suspense } from "react";
import "./App.css";
import Spinner from "./components/Spinner";

const Component1 = lazy(() => import("./components/Component1"));
const Component2 = lazy(() => import("./components/Component2"));
class App extends Component {
  state = { show: false };
  render() {
    return (
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
      </div>
    );
  }
}

export default App;
