import { StyleSheet, Text, View ,Modal } from 'react-native'
import ButtonPrimary from './ButtonPrimary'

const ModalDeleteTasks = ({taskSelected,
                          deleteTask,
                          onHandlerModalDelete,
                          modalVisible}) => {

    return (
        <Modal
        visible={modalVisible}
        animationType='fade'
        onRequestClose={()=> onHandlerModalDelete({})}
        >
            <View style ={styles.modalMessage}>
            <Text style= {styles.modalText}>¿Está seguro que quiere eliminar el medicamento:{taskSelected.title}?</Text>
            <ButtonPrimary  title='si' onPress={deleteTask}/>
            <ButtonPrimary  title='no' onPress={()=> onHandlerModalDelete({})}/>
            </View>
        </Modal>
  )
}

export default ModalDeleteTasks

const styles = StyleSheet.create({
    modalMessage: {
        backgroundColor: "#ff9500",
        padding: 20,
        margin: 20,
        borderRadius: 10,
        justifyContent: "center",
        flex:2,

      },
      modalText: {
        fontSize: 30,
        padding: 5,
        margin: 5,
      },
 
})