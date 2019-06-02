import React from "react";
import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";

const AddTodo = (props) => (
  <View style={styles.container}>
    <View style={{
      backgroundColor: 'white', 
      height: 50, 
      width: '85%'}}
    >
      <TextInput placeholder="Add Todo" />
    </View>
    <TouchableOpacity style={{
      backgroundColor: 'blue', 
      height: 50, 
      width: '15%',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <Text style={{
        color:'white',
      }}
      > 
      Add 
      </Text>
    </TouchableOpacity>
  </View>
  )
export default AddTodo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexDirection: 'row'
  }
});