import { useState } from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Keyboard,
  SafeAreaView,
  StatusBar,
} from "react-native";

import uuid from "react-native-uuid";


import colors from "./src/utils/globals/colors";
import { useFonts } from "expo-font";
import { fontsCollection } from "./src/utils/globals/fonts";
import Home from "./src/screens/Home";
import Update from './src/screens/Update'
import Header from "./src/components/Header"

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskSelected, setTaskSelected] = useState({});
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskHour, setTaskHour] = useState("");
  const [taskAmount, setTaskAmount] = useState("");
  const [tasks, setTasks] = useState([]);
  const [taskUpdate, setTaskUpdate] = useState({});
  const screenWidth = Dimensions.get("window").width;
  const [fontsLoaded] = useFonts(fontsCollection);

  

  if (!fontsLoaded) {
    return null;
  }
  const addTask = () => {
    const newTask = {
      id: uuid.v4(),
      title: taskTitle,
      date: taskDate,
      hour: taskHour,
      amount: taskAmount,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskDate("");
    setTaskHour("");
    setTaskAmount("");
    Keyboard.dismiss();
    
  };
  const updateTask = (taskSelected) => {
    setTasks(
      tasks.map(task => {
        if (task.id === taskSelected.id) {
          return taskSelected
        }
        return task
      }))
      setTaskUpdate({})
  }
  
  const onHandlerTitle = (t) => {
    setTaskTitle(t);
  }

  const onHandlerDate = (t) => {
    setTaskDate(t);
  };
  const onHandlerHour = (t) => {
    setTaskHour(t);
  };

  const onHandlerAmount = (t) => {
    setTaskAmount(t);
  };
  const onHandlerModalDelete = (task) => {
    setTaskSelected(task);
    setModalVisible(!modalVisible);
  };
  const handlerTaskUpdate = (task) => {
    setTaskUpdate(task);
  };
 
  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id != taskSelected.id));
    setModalVisible(!modalVisible);
  };
  const goBack = () => {
    setTaskUpdate({})
}
  const updateTaskCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id)
          return { ...task, ...{completed:!task.completed} };
        return task;
      })
    )
  }
  
  
  return (
    <>
      <StatusBar backgroundColor={colors.secondary} style="ligth" />
      <Header/>
      <SafeAreaView style={styles.container}>
        
       {taskUpdate.title? 
          <Update 
          taskUpdate={taskUpdate} 
          updateTask={updateTask}
          goBack = {goBack}
          />
        : 
          <Home
            tasks={tasks}
            taskTitle={taskTitle}
            onHandlerTitle={onHandlerTitle}
            taskDate={taskDate}
            onHandlerDate={onHandlerDate}
            taskHour={taskHour}
            onHandlerHour={onHandlerHour}
            taskAmount={taskAmount}
            onHandlerAmount={onHandlerAmount}
            addTask={addTask}
            onHandlerModalDelete={onHandlerModalDelete}
            screenWidth={screenWidth}
            updateTaskCompleted={updateTaskCompleted}
            handlerTaskUpdate={handlerTaskUpdate}
            modalVisible={modalVisible}
            taskSelected={taskSelected}
            deleteTask={deleteTask}
            
          />
}
      </SafeAreaView>
    </>
  )
        }
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: "center",
    fontStyle: "italic",
    paddingTop: 10,
  },
  text: {
    padding: 5,
    margin: 5,
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",

    color: colors.text,
    fontStyle: "normal",
  },
  texth1: {
    padding: 2,
    margin: 1,
    fontSize: 18,
    color: colors.texth1,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  input: {
    borderBottomWidth: 2,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    borderRadius: 5,
    color: colors.input,
  },
  inputContainer: {
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    padding: 5,

    backgroundColor: colors.inputcontainer,
  },
});
