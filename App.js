import { useDeferredValue, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Modal,
  ScrollView,
} from "react-native";
import uuid from 'react-native-uuid';



const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [idSelected , setIdSelected] = useState("")


  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    hour: "",
    id:""
  });
  const [tasks, setTasks] = useState([])

  const addTask = () => {
     
    setTasks([...tasks, newTask]);
  setNewTask({
      title: "",
      date: "",
      hour: "",
      id:""
    })
  }
  const onHandlerTitle = (t) => {
    const id = uuid.v4()
    setNewTask({ ...newTask, title: t, id});
  }
  const onHandlerDate = (t) => {
    setNewTask({ ...newTask, date:t });
  }
  const onHandlerHour = (t) => {
    setNewTask({ ...newTask, hour:t }); 
  }

  const onHandlerModalDelete = (id) => {
    setIdSelected(id)
    setModalVisible(true)
  }

  
  const deleteTask = () => {
    setTasks(tasks.filter(task => task.id != idSelected ))
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pastillero virtual </Text>
      <Text style={styles.text}>Ingresar datos:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={newTask.title}
          onChangeText={onHandlerTitle}
          placeholder="Medicamento"
          
          style={styles.input}
        />
        <TextInput 
          value={newTask.date}
          onChangeText={onHandlerDate}
          placeholder="Día de la semana"
         
          style={styles.input}
        />
        <TextInput 
          value={newTask.hour} 
          onChangeText={onHandlerHour}
          placeholder="Horario"
         
          style={styles.input}
        />
        <Button title="Click" onPress={addTask} />
      </View>
      <View style={styles.tasksContainer}>
      <FlatList
         data={tasks}
         keyExtractor={item =>item.id}
         renderItem={({item}) =>(
                               <View style={styles.taskCard}>
                                <Text style={styles.text}> {item.title} </Text>
                                 <Button title="DEL" onPress={() => onHandlerModalDelete (item.id)} />
                                </View>
       )
        }
        />
        <Modal animation="slide"
          visible ={modalVisible}
         >
          <View style= {styles.modalMessage}>
            <Text>¿Estás seguro que quieres eliminar la medicación?</Text>
            <View style={styles.modalMessage}>
              <Text style={styles.modalMessage}> {idSelected.value}</Text>
            </View>
            <Button title="si" onPress={()=> {
              deleteTask()
              setModalVisible(false)
              }}/>
            <Button title='no' onPress={()=> setModalVisible(false)} />
          </View>
        </Modal>
      </View>


    </View>
  );
      }
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "edf6f9",
    justifyContent: "center",
    fontStyle: "italic",
    paddingTop: 10,
  },
  text: {
    fontSize: 20,
    justifyContent: "center",
    color: "black",
    fontStyle: "normal",
  },
  input: {
    borderBottomWidth: 2,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontSize: 25,
    borderRadius: 5,
    backgroundColor: "#caf0f8",
  },
  inputContainer: {
    margin: 5,
    alignItems: "center",
  },
  tasksContainer: {
   padding:10,
  
  task: {
    borderWidth: 2,
    margin: 10,
    padding: 20,
    backgroundColor: "#edf6f9",
  },
  taskCard: {
    backgroundColor: "#ffddd2",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  modalMessage:{
    backgroundColor:"#caf0f8",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  }
 
}
})

