import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const TodoItem = ({ todo, toggleTodo, onDelete }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
      paddingVertical: 5
    }}
  >
    <TouchableOpacity onPress={toggleTodo}>
      <Text
        numberOfLines={1}
        style={{
          width: 300,
          fontSize: 18,
          textDecorationLine: todo.completed ? "line-through" : "none"
        }}
      >
        {todo.text}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: 20,
        height: 20,
        borderwidth: 1,
        borderRadius: 50,
        backgroundColor: "red",
        alignItems: "center",
        marginTop: 5
      }}
      onPress={onDelete}
    >
      <Text
        style={{
          fontSize: 12,
          color: "white"
        }}
      >
        X
      </Text>
    </TouchableOpacity>
  </View>
);

export default TodoItem;
