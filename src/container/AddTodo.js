import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/todos";

class AddTodo extends React.Component {
  state = {
    text: ""
  };

  render() {
    const { text } = this.state;
    const { addTodo } = this.props;
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "white",
            height: 50,
            width: "85%"
          }}
        >
          <TextInput
            style={{ paddingHorizontal: 10 }}
            onChangeText={text => this.setState({ text })}
            value={text}
            placeholder="Add Todo"
          />
        </View>
        <TouchableOpacity
          onPress={() => addTodo(text)}
          style={{
            backgroundColor: "blue",
            height: 50,
            width: "15%",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              color: "white"
            }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    flexDirection: "row",
    marginBottom: 10
  }
});
