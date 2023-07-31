/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import React from 'react';
import { Button, StyleSheet, TextInput, View, ScrollView, FlatList } from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export interface Task {
  id: number;
  task: string
}

function App() {
  const [inputText, setInputText] = useState<string>('');
  const [addTask, setAddTask] = useState<Task[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const taskInputHandler = (text: string) => {
    setInputText(text);
  }

  const addTaskHandler = () => {
    setAddTask([...addTask, { id: Math.random(), task: inputText, }]);
    setInputText('');
  }

  const deleteTaskHandler = (id: number) => {
    setAddTask(preTasks => {
      return preTasks.filter(t => t.id !== id);
    })
  }

  const isModalVisibleOpen = () => {
    setModalIsVisible(true);
  }
  const isModalVisibleClose = () => {
    setModalIsVisible(false)
  }

  return (
    <View style={styles.container}>
      <Button title='Add New Task' color='#5e0acc' onPress={isModalVisibleOpen} />

      <TaskInput taskInputHandler={(t) => taskInputHandler(t)}
        addTaskHandler={addTaskHandler} value={inputText} isVisibleOpen={modalIsVisible}
        isModalVisibleClose={isModalVisibleClose} />
      <View style={{ padding: 10, }}>
      </View>
      <View style={styles.listTaskContainer}>
        <FlatList data={addTask} renderItem={itemData => {
          return <TaskItem itemData={itemData} deleteTaskHandler={() => deleteTaskHandler(itemData.item.id)} />;
        }} />
      </View>

    </View>
  );
}
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#3800d381',

  },
  textStyle: {
    margin: 16,
    padding: 5,
    fontSize: 18,
  },

  listTaskContainer: {
    padding: 20,
  },
  buttonStyle: {
    borderRadius: 15,
  },

}); 