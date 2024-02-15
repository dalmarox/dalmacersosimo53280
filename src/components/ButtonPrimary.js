import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import colors from'../utils/globals/colors'

 const ButtonPrimary = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.buton,
        width:"100%",
        paddingHorizontal:10,
        paddingVertical:5,
        alignItems:"center",
        borderRadius: 5,
        
        

        
    },
    text:{
        fontSize:13,
        color:colors.primary,
    }
})