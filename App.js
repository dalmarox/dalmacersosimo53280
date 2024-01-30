import { useState } from "react";
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
import uuid from "react-native-uuid";


const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [idSelected, setIdSelected] = useState("");

  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    hour: "",
    id: "",
  });
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({
      title: "",
      date: "",
      hour: "",
      id: "",
    });
  };
  const onHandlerTitle = (t) => {
    const id = uuid.v4();
    setNewTask({ ...newTask, title: t, id });
  };
  const onHandlerDate = (t) => {
    setNewTask({ ...newTask, date: t });
  };
  const onHandlerHour = (t) => {
    setNewTask({ ...newTask, hour: t });
  };

  const onHandlerModalDelete = (id) => {
    setIdSelected(id);
    setModalVisible(true);
  };

  const deleteTask = () => {
    setTasks(tasks.filter((task) => task.id != idSelected));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pastillero virtual </Text>
      <Text style={styles.texth1}>
        Ingresar datos sobre los medicamentos a guardar en el pastillero:
      </Text>
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
        <Button style={styles.btn} title="GUARDAR" onPress={addTask} />
      </View>
      <ScrollView style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tasksCard}>
              <Text style={styles.text}> {item.title} </Text>
              <Text style={styles.text}>{item.date} </Text>
              <Text style={styles.text}>{item.hour} </Text>
              <Button
                title="BORRAR"
                onPress={() => onHandlerModalDelete(item.id)}
              />
            </View>
          )}
        />
      </ScrollView>

      <Modal animation="slide" visible={modalVisible}>
        <View style={styles.modalMessage}>
          <Text style={styles.modalText}>
            ¿Estás seguro que quieres borrar el medicamento {idSelected}?
          </Text>

          <Button
            title="SI"
            onPress={() => {
              deleteTask();
              setModalVisible(false);
            }}
          />
          <Button title="NO" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd3da",
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
    
    color: "white",
    fontStyle: "normal",
  },
  texth1: {
    padding: 10,
    margin: 10,
    fontSize: 20,
    color: "#49708a",
    fontWeight: "bold",
    fontStyle: "italic",
  },
  input: {
    borderBottomWidth: 2,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 5,
  },
  inputContainer: {
    borderWidth: 2,
    margin:5,
    borderRadius: 5,
    padding:5,

    backgroundColor: "#fec8a",
  },
  
  tasksCard: {
    backgroundColor: "#FEC89A",
    borderWidth: 2,
    padding: 10,
    margin: 10,
    borderRadius: 2,
     flexDirection : "column", 
     alignItems : "flex-start",
       },
   tasksContainer :{
     padding : 10,
     marginTop: 10,
     flexDirection: "row",
     
   },

  modalMessage: {
    backgroundColor: "#ffc6ff",
    padding: 20,
    margin: 20,
    borderRadius: 2,
    justifyContent: "center",
  },
  modalText: {
    fontSize: 25,
    padding: 5,
    margin: 5,
  },
});
