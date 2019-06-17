import { Alert } from "react-native";
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CHANGED_TEXT,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "./types";
import { visibilityFilter } from "./visibilityFilter";

let nextTodoId = 0;
export const addTodo = text => (dispatch, getState) => {
  const { todos } = getState();
  const todoExist = todos.find(
    todo => todo.text.toLowerCase() === text.toLowerCase()
  );

  if (todoExist) {
    alert(`Sory a new todo "${text}" is already exist`);
    dispatch(
      visibilityFilter(todoExist.completed ? SHOW_COMPLETED : SHOW_ACTIVE)
    );
    return;
  }

  dispatch(changedText(""));

  dispatch({
    type: ADD_TODO,
    id: nextTodoId++,
    text
  });
};

export const changedText = text => ({
  type: CHANGED_TEXT,
  text
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});

export const confirmDelete = id => (dispatch, getState) => {
  const { todos } = getState();
  const todo = todos.find(td => td.id === id);
  const willDeleteTodo = () => dispatch(deleteTodo(id));

  Alert.alert(
    "Confirmation",
    `Are you sure want to delete todo "${todo.text}" ?`,
    [
      {
        text: "Cancel",
        onPress: () => null
      },
      {
        text: "Confirm",
        onPress: () => {
          setTimeout(willDeleteTodo, 1000);
        }
      }
    ]
  );
};
