import React, {Component} from 'react';
import AddTodo from './src/container/AddTodo';
import VisibleTodo from './src/container/VisibleTodo';
import Footer from './src/container/Footer';

export default class App extends Component{
  render() {
    return (
      <>
      <AddTodo />
      <VisibleTodo />
      <Footer />
      </>
    );
  }
}

