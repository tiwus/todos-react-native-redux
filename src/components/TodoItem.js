import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const TodoItem = ({ todo, toggleTodo }) => (
  <TouchableOpacity onPress={toggleTodo}>
    <Text
      style={{
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 5,
        textDecorationLine: todo.completed ? "line-through" : "none"
      }}
    >
      {todo.text}
    </Text>
  </TouchableOpacity>
);
export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
