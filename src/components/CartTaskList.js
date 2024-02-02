import { StyleSheet, Text, View,Switch} from 'react-native'
import React from 'react'
import ButtonPrimary from './ButtonPrimary'

const CartTaskList = ({item,onHandlerModalDelete,screenWidth,updateTaskCompleted}) => {
  return (
            <View style={[styles.tasksCard,{width:screenWidth -60,}]}>
                
                <Text style={styles.text}>Titulo: {item.title}</Text>
                <Text style={styles.text}>Día: {item.date}</Text>
                <Text style={styles.text}>Horario: {item.hour}</Text>
                <Text style={styles.text}>Cantidad: {item.amount}</Text>
                <View style={styles.completedContainer}>
                    <Switch
                        value={item.completed}
                        onValueChange={() => updateTaskCompleted(item.id)}
                    />
                    <Text style={styles.textCompleted}>{item.completed ? "Completada" : "Pendiente" }</Text>
                </View>
                <ButtonPrimary title='ELIMINAR' onPress={() => onHandlerModalDelete(item)} />
            </View>
  )
}

export default CartTaskList
const styles = StyleSheet.create ({
    
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
           completedContainer:{

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
    })