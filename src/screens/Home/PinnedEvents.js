import { React, useEffect, useState } from "react";
import { Text, SafeAreaView,FlatList, View, StyleSheet, Image, TouchableOpacity, Button, EventSubscriptionVendor } from "react-native";
import { Icon } from "@rneui/themed";
import color from "../../config/color";

import ShareItem from "../Components/ShareItem.js";


//will display all events

function PinnedEvents({route}) {
    const {api, arr} = route.params
    const [Data, setData] = useState([]);
    console.log(arr)
  const renderItem =  ({item, index}) => {
    return(
      <TouchableOpacity style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.name}</Text>
          {/* {console.log(item.pinned," ", index)} */}
          {
            item.pinned ? 
            <Icon
              name="bookmark"
              type ='font-awesome'
              size={30}
            />
            :
            <Icon
              name="bookmark-o"
              type ='font-awesome'
              size={30}
            />

          }
        </View>
        <Image
          style={styles.image}
          source={{ uri: item.imagePath}}
        />
        <View style={styles.header}>
        <View>
        <Text style={styles.bold}>Location: <Text>{item.location}</Text></Text>
        <Text style={styles.bold}>Start: <Text>{item.start}</Text></Text> 
        <Text style={styles.bold}>End: <Text>{item.end}</Text></Text>
        </View>
        <ShareItem
            item = {item}
        /> 
        </View>
        <View style={styles.borderLine} />
        <Text style={styles.textInput}>{item.description}</Text>
      </TouchableOpacity>

    )
  }
  const getEvents = async () => {
    try{ await fetch(
       api,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            arr
          })
      }
    ).then(async (res) =>{
        setData(await res.json())
    })}catch(err){
        console.log(err)
    }
  };
  useEffect(() => {
    getEvents();
  }, []);


  return (
    <SafeAreaView style={{ backgroundColor: color.primary, flex: 1 }}>
      {console.log("Email ID: ", global.Email)}
      <FlatList
        data={Data}
        renderItem={ renderItem } 
      />
    </SafeAreaView>
  );
}
export default PinnedEvents;

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#c97b06",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  header: {
    flexDirection:"row",
    justifyContent: "space-between",
  },
  title: {
    marginLeft: 5,
    marginTop: 5,  
    fontSize: 18,
    // color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    width: "85%"
  },
  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    marginTop: 10,
    // marginRight: 20,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'grey',

  },
  textInput: {
    fontSize: 16,
    color: "#000000",
    textAlignVertical: "top",
  },
  bold: {
    fontWeight: "bold",
  },
  // left: {
  //   flex: 1,
  // },
  // right: {
  //   flex: 1,
  //   alignItems: "flex-end",
  // },
  // rightText: {
  //   textAlign: "right",
  // },
});
