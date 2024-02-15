import { StyleSheet, Text, View } from 'react-native'
import colors from'../utils/globals/colors'
import fonts from '../utils/globals/fonts'


const Header = ({title="Pastillero con alarma"}) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        height:100,
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        padding:2,
        margin:2

    },
    text:{
        fontSize: 35,
        fontFamily: fonts.CookieRegular,
        
        
    }
})