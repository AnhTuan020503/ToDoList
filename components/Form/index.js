import { View, Text,Keyboard,TextInput,TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import React,{useState} from 'react'
import styles from './style';
const Form = (props) => {
  const [task, setTask] = useState('');
  const handleAddTask =()=>{
    if(task.length===0){
      alert("Not Null")
      return false;
    }
      props.onAddTask(task);
      setTask('');
      Keyboard.dismiss();
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10}
      style={styles.addTask}
    >
      <TextInput
        value={task}
        onChangeText={(text) => setTask(text)} 
        placeholder="Enter Your Task" 
        style={styles.input}

      />
      <TouchableOpacity
        onPress={handleAddTask}
      >
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
      
    
  )
}

export default Form;