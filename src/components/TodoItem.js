import React from "react";
import { 
  Text,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const TodoItem = ({todo}) => (
    <TouchableOpacity>
      <Text>{todo.key}</Text>
    </TouchableOpacity>
  )
export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});