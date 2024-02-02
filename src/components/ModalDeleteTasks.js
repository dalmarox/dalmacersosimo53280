import { StyleSheet, Text, View ,Modal,Button } from 'react-native'

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
            <Button title='si' onPress={deleteTask}/>
            <Button title='no' onPress={()=> onHandlerModalDelete({})}/>
            </View>
        </Modal>
  )
}

export default ModalDeleteTasks

const styles = StyleSheet.create({
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


})