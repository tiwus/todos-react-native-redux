import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import { addTodo, changedText } from "../redux/actions/todos";

class AddTodo extends React.Component {
  render() {
    const { text, addTodo, onChangeText } = this.props;
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
            onChangeText={onChangeText}
            value={text}
            placeholder="Add Todo"
          />
        </View>
        <TouchableOpacity
          onPress={() => addTodo(text)}
          style={{
            backgroundColor: "#47b65c",
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

const mapStateToProps = state => ({
  text: state.text_reducer
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  onChangeText: text => dispatch(changedText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    flexDirection: "row",
    marginBottom: 10
  }
});
