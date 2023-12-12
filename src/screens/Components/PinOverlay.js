import { StyleSheet, Text, Button, View } from 'react-native'
import { Overlay } from '@rneui/themed'
import React from 'react'
import color from "../../config/color";
import { Icon } from "@rneui/themed";


const  PinOverlay = (props) => {
  return (
  
    <Overlay
    isVisible={props.visible} overlayStyle = {styles.container}>
      <View style={styles.cross}>
      <Icon
          size={35}
          name='times-circle'
          type='font-awesome'
          color='#f50'
          onPress={() => props.setVisible(false)} />
      </View>
      <View style={styles.prompt}>
        <Text style = {styles.pText}> 
          {props.eventName}
        </Text>
        <Button title = {props.buttonTitle}
            onPress={()=> {props.onPressButton()}}>
        </Button>
      </View>
    </Overlay>

 
  ) 
}
    
  
 


export default PinOverlay

const styles = StyleSheet.create({
      cross:{
        ...StyleSheet.absoluteFillObject,
        marginRight: -290,
        // alignSelf: 'flex-end',
        marginTop: -10,
        position:'absolute'
      },
      container:{
        height: "20%",
        width: "80%",
        backgroundColor: "white",
        borderColor: color.yellow,
        borderWidth: 5,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'space-evenly',
      },
      prompt: {
        alignContent: 'center',
        justifyContent: 'space-evenly',
      },
      pText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "Helvetica"
      },

})