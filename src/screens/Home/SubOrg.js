import { React, useEffect, useState, useCallback } from "react";
import {RefreshControl, Text, SafeAreaView,FlatList, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import color from "../../config/color";
import ShareItem from "../Components/ShareItem.js"; 
import PinOverlay from "../Components/PinOverlay.js";


//will display all events

function SubOrg({route}) {
  const {api} = route.params
  const [Data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [overlayVisbility, setOverlayVisbility] = useState(false);
  const [event, setEvent] = useState("");
  const [overlayButtonText, SetOVerlayButtonText] = useState("PIN");
  const [currentItem, setCurrentItem] = useState("");

  const apiEndpoint = 'http://0.0.0.0';

  const addEventAsPinned = async (item) => {
    try {
      await fetch(
        apiEndpoint + ':3000/api/pinevent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: global.Email.toLowerCase(),
            event: {
              id: currentItem,
              location: item.location,
            },
          }),
        }
      ).then( async (res) =>{
        const data = await res.json()
        if (res && res.status === 200) {
          alert(data.message)
          item.pinned = true
        }
        else{
          console.log('ERROR OCCURED :', data.message)
        }
        setOverlayVisbility(false)
        return item
        
      })
    }catch (error) {
      console.error('Error during fetch:', error);
      return item
    }

  }
  const removeEventAsPinned = async (item) =>{
    try{
      await fetch(
        apiEndpoint + ':3000/api/unpin',
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          }, 
          body: JSON.stringify({
            id: global.Email.toLowerCase(),
            event: {
              id: currentItem,
              location: item.location,
            },
          }),
        }
      ).then(
        async (res) =>{
          const data = await res.json()
          if (res && res.status === 200) {
            alert(data.message)
            item.pinned = false
            setOverlayVisbility(false)
            return item
          }
          else{
            console.log('ERROR OCCURED :', data.message)
            return item
          }
        }
      )
    }catch(error){
      console.log('Error during fetch:', error)
      return item
    }
  }

  const handelPinItem = async () => {
    const newData = await Promise.all(
      Data.map(async (item) => {
        if (item.key == currentItem){
          if(overlayButtonText == "PIN"){
            await addEventAsPinned(item)
            return item;
          }
          else{
            await removeEventAsPinned(item)
            return item
          }
        }
        return item;
      })
    );
    setData(newData);
  };

  
  const onPressPin = async () =>{
    await handelPinItem()

  }

  
  const renderItem =  ({item, index}) => {
    return(
      <TouchableOpacity style={styles.container} 
        onPress={() => {
          setEvent(item.name),
          setCurrentItem(item.key)
          if(item.pinned){
            SetOVerlayButtonText("REMOVE")
          }
          else{
            SetOVerlayButtonText("PIN")
          }
          setOverlayVisbility(true)
          

          }}>
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
    const res = await fetch(
       api,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setData(await res.json());
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getEvents()
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  useEffect(() => {getEvents();}, []);
  return (
    <SafeAreaView style={{ backgroundColor: color.primary, flex: 1 }}>
      {console.log("Email ID: ", global.Email)}

      <FlatList
        data={Data}
        renderItem={ renderItem } 
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        // extraData={isRender}
      />
      <PinOverlay
        visible ={overlayVisbility}
        setVisible = {setOverlayVisbility}
        eventName = {event}
        onPressButton = {onPressPin}
        buttonTitle = {overlayButtonText}
      />
    </SafeAreaView>
  );
}

export default SubOrg;

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
