import { StyleSheet, Text, View,Switch} from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import colors from '../utils/globals/colors'

const CartTaskList = ({item,onHandlerModalDelete,screenWidth,updateTaskCompleted,handlerTaskUpdate}) => {
  return (
             
                <View style={[styles.tasksCard,{width:screenWidth -60,}]}>
                
                <Text style={styles.text}>Titulo: {item.title}</Text>
                <Text style={styles.text}>Día: {item.date}</Text>
                <Text style={styles.text}>Horario: {item.hour}</Text>
                <Text style={styles.text}>Cantidad: {item.amount}</Text>
                <View style={styles.completedContainer}>
                  
                </View>
                <ButtonPrimary title='ELIMINAR' onPress={() => onHandlerModalDelete(item)} />
                <ButtonPrimary title='ACTUALIZAR' onPress={() => handlerTaskUpdate(item)} />
            </View>
  )
}

export default CartTaskList
const styles = StyleSheet.create ({
    
        tasksCard: {
            backgroundColor: colors.third,
            borderWidth: 2,
            padding: 5,
            margin: 5,

            borderRadius: 2,
             flexDirection : "column", 
             alignItems : "flex-start",
             
               },
         tasksContainer :{
             padding : 20,
             marginTop: 5,
             flexDirection: "row",
             width:"80%",
             height:"40%",
             
             
           },
           completedContainer:{
            width:"100%",
            
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start",
            gap:15,
            
            
          
           },
           text: {
            padding: 5,
            margin: 5,
            fontSize: 18,
            fontWeight: "bold",
            alignItems: "center",
            
            
            color: colors.primary,
            fontStyle: "normal",
          },
          textContainer: {
            color:colors.primary,
            fontSize:16,
            fontWeight:"bold"
          }
    })