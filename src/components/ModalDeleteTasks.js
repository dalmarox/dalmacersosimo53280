import { StyleSheet, Text, View ,Modal } from 'react-native'
import ButtonPrimary from './ButtonPrimary'
import colors from'../utils/globals/colors' 


const ModalDeleteTasks = ({taskSelected,
                          deleteTask,
                          onHandlerModalDelete,
                          modalVisible}) => {

    return (
        <Modal
        visible={modalVisible}
        transparent= {true}
        animationType='fade'
        onRequestClose={()=> onHandlerModalDelete({})}
        >
          <View style={styles.container}>
            <View style ={styles.modalMessage}>
            <Text style= {styles.modalText}>¿Está seguro que quiere eliminar el medicamento:{taskSelected.title}?</Text>
            <ButtonPrimary  title='si' onPress={deleteTask}/>
            <ButtonPrimary  title='no' onPress={()=> onHandlerModalDelete({})}/>
            </View>
          </View>

        </Modal>
  )
}

export default ModalDeleteTasks

const styles = StyleSheet.create({
   container:{
    backgroundColor:"black",
    flex: 1,
    opacity: 0.9,
    justifyContent: "center",
    alignTtems:"center"
   },
    modalMessage: {
        backgroundColor: colors.fourth,
        padding: 20,
        margin: 20,
        borderRadius: 10,
        justifyContent: "center",
        
        opacity: 0.9,
        alignItems:"center",
        gap: 30,
        borderRadius:10

      },
      modalText: {
        fontSize: 18,
        padding: 5,
        margin: 5,
        color:"white",
       
      
      },
 
})