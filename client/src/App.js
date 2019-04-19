import React, { Component } from "react"
import { Provider } from "react-redux"
import store from "./store"
import Memo from "./component/memolist/Memo"
import Navigation from "./component/header/Navigation"
import "./App.css"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Memo />
        </div>
      </Provider>
    )
  }
}

export default App
