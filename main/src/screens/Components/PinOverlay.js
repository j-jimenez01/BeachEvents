import { StyleSheet, Text, Button, Modal } from 'react-native'
import { Overlay } from '@rneui/themed'
import React from 'react'
import color from "../../config/color";


const  PinOverlay = (props) => {
  return (
    <Overlay
    isVisible={props.visible} overlayStyle = {styles.prompt}>
      <Text style = {styles.pText}> 
        {props.eventName}
      </Text>
      <Button title = {props.buttonTitle}
          onPress={()=> {props.onPressPin()}}>
      </Button>
    </Overlay>
 
  ) 
}
    
  
 


export default PinOverlay

const styles = StyleSheet.create({
      prompt: {
        height: "20%",
        width: "80%",
        backgroundColor: "white",
        borderColor: color.yellow,
        borderWidth: 5,
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'space-evenly',
      },
      pText: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: "Helvetica"
      },

})