import React from "react";
import { 
  FlatList,
  StyleSheet
} from "react-native";
import TodoItem from '../components/TodoItem';

const VisibleTodo = (props) => {
  _renderItem = ({item, index}) => <TodoItem todo={item} />
  return (
    <FlatList 
      style={styles.container}
      data={[{key: 'a'}, {key: 'b'}]}
      keyExtractor={(item, index) => index.toString()}
      renderItem={this._renderItem}
    />
  )
}

export default VisibleTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});