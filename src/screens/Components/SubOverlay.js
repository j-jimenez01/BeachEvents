import { StyleSheet, Text, View, Button } from 'react-native'
import { Overlay } from '@rneui/themed'
import React from 'react'

const SubOverlay = ({visible, setVisible, eventName, eventId}) => {
  return (
    <View>
      <Overlay isVisible={visible} style={styles.subView}>
        <Text style = {styles.title}> {eventName} and {eventId}</Text>
            <Button title = "CLOSE"
                onPress={()=> setVisible(false)}>
            </Button>
      </Overlay>
    </View>
  )
}

export default SubOverlay

const styles = StyleSheet.create({
    subView:{
        height: 310, 
        width: 500,
        zIndex: 1,
        backgroundColor: "cyan",
        justifyContent: 'center',
        alignItems: 'center',
      },

})