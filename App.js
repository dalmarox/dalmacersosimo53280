import { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
Keyboard
} from "react-native";
import uuid from "react-native-uuid";
import ModalDeleteTask from "./src/components/ModalDeleteTasks";
import AddTask from './src/components/AddTask';
import ListTasks from './src/components/ListTasks';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [taskSelected , setTaskSelected] = useState({})
  const [taskTitle,setTaskTitle] = useState("")
  const [taskDate,setTaskDate] = useState("")
  const [taskHour,setTaskHour] = useState("")
  const [taskAmount,setTaskAmount] = useState("")
  const [tasks,setTasks] = useState([])
  const screenWidth = Dimensions.get('window').width

  const addTask = () =>{

    const newTask = {
      id: uuid.v4(),
      title:taskTitle,
      date:taskDate,
      hour:taskHour,
      amount:taskAmount

    }

    setTasks([...tasks,newTask])
    setTaskTitle("")
    setTaskDate("")
    setTaskHour("")
    setTaskAmount("")
    Keyboard.dismiss()
  }

  const onHandlerTitle = (t) =>{
    setTaskTitle(t)
  }

  const onHandlerDate = (t) => {
    setTaskDate(t)
  }
  const onHandlerHour = (t) =>{
    setTaskHour(t)
  }

  const onHandlerAmount = (t) => {
    setTaskAmount(t)
  }
  const onHandlerModalDelete = (task) => {
    setTaskSelected(task)
    setModalVisible(!modalVisible)
  }

  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != taskSelected.id ))
    setModalVisible(!modalVisible)
  }

  const updateTaskCompleted = (id) => {
    setTasks(tasks.map(task =>{
      if(task.id === id) return {...task,...{completed:!task.completed}}
      return task
    }))
  }

  return( 
    <View style={styles.container} >
      <Text style ={styles.text}>Pastillero Virtual</Text>
      <Text style ={styles.texth1}> Ingresar datos sobre los medicamentos a guardar en el pastillero:</Text>
      <AddTask taskTitle= {taskTitle}
               onHandlerTitle= {onHandlerTitle}
               taskDate = {taskDate}
               onHandlerDate = {onHandlerDate}
               taskHour= {taskHour}
               onHandlerHour= {onHandlerHour}
               taskAmount= {taskAmount}
               onHandlerAmount ={onHandlerAmount}

               addTask = {addTask}
      />
      <ListTasks 
        tasks={tasks} 
        onHandlerModalDelete={onHandlerModalDelete}
        screenWidth={screenWidth}
        updateTaskCompleted={updateTaskCompleted}
      />
      <ModalDeleteTask  
         modalVisible={modalVisible}
         taskSelected={taskSelected}
         deleteTask={deleteTask}
         onHandlerModalDelete={onHandlerModalDelete}
      />
  </View>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    fontStyle: "italic",
    paddingTop: 10,
  },
  text: {
    padding: 5,
    margin: 5,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    
    color: "#033F63",
    fontStyle: "normal",
  },
  texth1: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    color: "#49708a",
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily:""
  },
  input: {
    borderBottomWidth: 2,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 5,
    color: "#2CFF29",
  },
  inputContainer: {
    borderWidth: 2,
    margin:5,
    borderRadius: 5,
    padding:5,

    backgroundColor: "#fec8a",
  },
  
  

  
});
