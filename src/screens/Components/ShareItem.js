// import { StatusBar } from "expo-status-bar";
import {React, useState} from "react";
import { StyleSheet, Text, View, Button, Share } from "react-native";
import { Icon } from "@rneui/themed";



export default function ShareItem(props) {
    // const options = {
    //   title: props.item.name,
    //   url : props.item.imagePath,
    //   message : "Check This Out",
    //   };
  const handelOnPress = async () =>{
    try {
      // setTitle("bla")
      // setUrl("url") //props.item.imagePath
      // setMessage("Check this event out")
      await share()
    }catch(err){
      console.log("ERROR:", err)
    }
  }
  //customOptions = options
  const share =  async () => {
    console.log("Loda")
    try {
      await Share.share({
        message: `Check this out!\n${props.item.name}\nLocation: ${props.item.location}\nStart: ${props.item.start}\nEnd:${props.item.end}`,
        url: props.item.imagePath,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* <StatusBar style="auto" /> */}
      <Icon
        size= {25}
        name='share'
        type='font-awesome'
        onPress={() => handelOnPress()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c97b06",
    alignItems: "flex-end",
    paddingRight: 10,
    justifyContent: "center",
  },
});
