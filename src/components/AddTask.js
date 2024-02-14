import { StyleSheet, TextInput, View} from "react-native";
import ButtonPrimary from './ButtonPrimary'
import colors from "../utils/globals/colors";
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
        placeholderTextColor="black"
        maxLength={25}
        
        
        style={styles.input}
      />
      <TextInput
        value={taskDate}
        onChangeText={onHandlerDate}
        placeholder="Día:"
        placeholderTextColor="black"
        maxLength={25}
        style={styles.input}
      />
      <TextInput
        value={taskHour}
        onChangeText={onHandlerHour}
        placeholder="Horario:"
        placeholderTextColor="black"
        maxLength={25}

    
        style={styles.input}
      />
      <TextInput
        value={taskAmount}
        onChangeText={onHandlerAmount}
        placeholder="Ingresar cantidad a tomar:"
        placeholderTextColor="black"
        maxLength={25}
       
        style={styles.input}
      />
      <ButtonPrimary title="GUARDAR" onPress={addTask} />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
   
    input:{
        width:"100%",
        borderWidth:2,
        borderColor:colors.bordercolor,
        marginHorizontal:5,
        marginVertical:5,
        paddingVertical:5,
        paddingHorizontal:5,
        
        color:"black",
        fontSize:20,
        textAlignVertical:"top"
        
      },

  inputContainer: {
    
    width: "100%",
    alignItems:"center",
    justifyContent:"space-around",
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    borderColor: "white",
  },
});
