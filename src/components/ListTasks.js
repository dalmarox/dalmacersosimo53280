import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React from 'react'
import CartTaskList from './CartTaskList'

const ListTasks = ({tasks,onHandlerModalDelete,screenWidth,updateTaskCompleted,handlerTaskUpdate}) => {
    
  return (

    <View style={styles.tasksContainer}>
      {tasks.length === 0 ?
      <View><Text>"Pastillero Vacio"</Text></View>
      :
        <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({item})=>(<CartTaskList 
                                    item={item} 
                                    onHandlerModalDelete={onHandlerModalDelete}
                                    screenWidth={screenWidth}
                                    updateTaskCompleted={updateTaskCompleted}
                                    handlerTaskUpdate={handlerTaskUpdate}
                                    />)}
        />
        }
    </View>
  )
}

export default ListTasks;

const styles = StyleSheet.create({
    tasksContainer:{
        padding: 5,
        margin: 5,
        
        
    
        
        
        


      }
})