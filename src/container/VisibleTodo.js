import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import TodoItem from "../components/TodoItem";
import { toggleTodo, confirmDelete } from "../redux/actions/todos";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../redux/actions/types";

const VisibleTodo = props => {
  _renderItem = ({ item, index }) => (
    <TodoItem
      todo={item}
      toggleTodo={() => props.toggleTodo(item.id)}
      onDelete={() => props.onDelete(item.id)}
    />
  );
  return (
    <FlatList
      style={styles.container}
      data={props.todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={this._renderItem}
    />
  );
};

const getVisibleTodo = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodo(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  onDelete: id => dispatch(confirmDelete(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
