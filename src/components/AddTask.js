import { StyleSheet, TextInput, View } from "react-native";
import ButtonPrimary from './ButtonPrimary'

const AddTask = (
  {taskTitle,
  onHandlerTitle,
  taskDate,
  onHandlerDate,
  taskHour,
  onHandlerHour,
  taskAmount,
  onHandlerAmount,
  addTask}
) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={taskTitle}
        onChangeText={onHandlerTitle}
        placeholder="Medicamento:"
        
        
        style={styles.input}
      />
      <TextInput
        value={taskDate}
        onChangeText={onHandlerDate}
        placeholder="Día:"
        
        style={styles.input}
      />
      <TextInput
        value={taskHour}
        onChangeText={onHandlerHour}
        placeholder="Horario:"
    

    
        style={styles.input}
      />
      <TextInput
        value={taskAmount}
        onChangeText={onHandlerAmount}
        placeholder="Ingresar cantidad a tomar:"
    
        style={styles.input}
      />
      <ButtonPrimary title="GUARDAR" onPress={addTask} />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
   
    input:{
        width:"90%",
        borderWidth:2,
        borderColor:"#30332E",
        marginHorizontal:10,
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:5,
        color:"black",
        fontSize:16,
        textAlignVertical:"top"
        
      },

  inputContainer: {
    width: "96%",
    alignItems:"center",
    justifyContent:"space-around",
    borderWidth: 2,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    borderColor: "#EC058E",

    backgroundColor: "#fec8a",
  },
});
