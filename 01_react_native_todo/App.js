/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from 'react-native';

const { height, width } = Dimensions.get('window');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      input: '',
      todoList: []
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.addTodoText}>Add todo:</Text>
        <TextInput
          style={styles.todoInput}
          value={this.state.input}
          onChangeText={text => this.setState({ input: text })}
        />
        <TouchableOpacity onPress={this.addTodo} style={styles.submitButton}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.todoListContainer}>
          {this.state.todoList.map((todoItem, index) => (
            <View key={index} style={styles.todoItem}>
              <Text style={styles.itemText}>{todoItem}</Text>
              <TouchableOpacity onPress={() => this.deleteTodo(index)}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }

  deleteTodo = index => {
    let newList = this.state.todoList;
    newList.splice(index, 1);
    this.setState({ todoList: newList });
  };

  addTodo = () => {
    this.setState(
      {
        input: '',
        todoList: [...this.state.todoList, this.state.input]
      },
      () => {
        console.log('new state', this.state);
      }
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  todoInput: {
    height: 40,
    width: width * 0.7,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5
  },
  submitButton: {
    backgroundColor: 'green',
    padding: 10
  },
  submitText: {
    fontSize: 15,
    color: 'white'
  },
  todoItem: {
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
