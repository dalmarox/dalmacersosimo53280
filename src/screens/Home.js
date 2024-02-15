import {StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import ModalDeleteTasks from'../components/ModalDeleteTasks'
import AddTask from'../components/AddTask'
import ListTasks from'../components/ListTasks' 



const Home = ({
  tasks,
  taskTitle,
  onHandlerTitle,
  taskDate,
  onHandlerDate,
  taskHour,
  onHandlerHour,
  taskAmount,
  onHandlerAmount,
  addTask,
  onHandlerModalDelete,
  screenWidth,
  updateTaskCompleted,
  handlerTaskUpdate,
  modalVisible,
  taskSelected,
  deleteTask,
  
}) => {
  return (
    <>
      <View>
          
          <Text style={styles.texth1}>
            "Ingresar datos sobre los medicamentos a guardar en el pastillero:"
          </Text>
        </View>
      <AddTask
               taskTitle= {taskTitle}
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
        handlerTaskUpdate={handlerTaskUpdate}
      />
      <ModalDeleteTasks  
         modalVisible={modalVisible}
         taskSelected={taskSelected}
         deleteTask={deleteTask}
         onHandlerModalDelete={onHandlerModalDelete}
      />
      
    </>
  )
}

export default Home

const styles = StyleSheet.create({})