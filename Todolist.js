import React, { Component, useState } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,ScrollView,Alert } from 'react-native'
import Task from './components/Task';
import styles from './App.components.styles';
import Form from './components/Form';
const Todolist =()=>  {
  const [taskList, setTaskList] = useState([])
  const handleAddTask=(task)=>{
    setTaskList([...taskList,task]);
  }
  const handleDeleteTask =(index)=>{
    Alert.alert('Thong Bao', 'Ban co chac muon xoa', [
      {
        text: 'OK',
        onPress: () => {
          let taskListTmp=[...taskList];
          taskListTmp.splice(index,1);
          setTaskList(taskListTmp);
        },
        style: 'cancel',
      },
      {text: 'Cancel', onPress: () => {} },
    ]);
  }
    return (
      <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.header}>Todo list</Text>
            <ScrollView style={styles.items}>
                {
                  taskList.map((item, index)=>{
                    return <Task key={index} title={item} number={index+1} onDeleteTask={() => handleDeleteTask(index)}/>
                  })
                }
            </ScrollView>
        </View>
        <Form onAddTask={handleAddTask}/>
      </View>
    );
}
export default Todolist;

