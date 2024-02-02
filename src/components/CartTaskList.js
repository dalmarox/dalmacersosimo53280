import { StyleSheet, Text, View,Switch} from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const CartTaskList = ({item,onHandlerModalDelete,screenWidth,updateTaskCompleted}) => {
  return (
             
                <View style={[styles.tasksCard,{width:screenWidth -60,}]}>
                
                <Text style={styles.text}>Titulo: {item.title}</Text>
                <Text style={styles.text}>Día: {item.date}</Text>
                <Text style={styles.text}>Horario: {item.hour}</Text>
                <Text style={styles.text}>Cantidad: {item.amount}</Text>
                <View style={styles.completedContainer}>
                   
                  
                </View>
                <ButtonPrimary title='ELIMINAR' onPress={() => onHandlerModalDelete(item)} />
            </View>
  )
}

export default CartTaskList
const styles = StyleSheet.create ({
    
        tasksCard: {
            backgroundColor: "#2CFF29",
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
            
            color: "white",
            fontStyle: "normal",
          },
          textContainer: {
            color:"white",
            fontSize:16,
            fontWeight:"bold"
          }
    })