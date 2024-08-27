import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,ScrollView } from 'react-native'
import Task from './components/Task';
import styles from './App.components.styles';
const Todolist =()=>  {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.header}>Todo list</Text>
            <ScrollView style={styles.items}>
                <Task/>
            </ScrollView>
        </View>
        <View style={styles.input}>

        </View>
      </View>
    );
}
export default Todolist;

