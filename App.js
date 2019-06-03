import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AddTodo from "./src/container/AddTodo";
import VisibleTodo from "./src/container/VisibleTodo";
import Footer from "./src/container/Footer";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodo />
        <Footer />
      </Provider>
    );
  }
}
