import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import ButtonPrimary from '../components/ButtonPrimary'

const Update = ({taskUpdate,updateTask,goBack}) => {
    const {title,setTitle}= useState(taskUpdate.title)
    const handlerTitle= (t)=> {
        setTitle(t)
    }
  return (
    <View>
      <TextInput placeholder='Nuevo medicamento'
       value={title}
       onChangeText={handlerTitle,setTitle}
      />
      <ButtonPrimary title="ACTUALIZAR" onPress={()=> updateTask({...taskUpdate,...{title}})}/>
      <ButtonPrimary title="VOLVER" onPress={goBack}/>
    </View>
  )
}

export default Update

const styles = StyleSheet.create({})