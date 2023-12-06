import { React, useEffect, useState } from "react";
import { Text, SafeAreaView,FlatList, View, StyleSheet, Image, TouchableOpacity, Button, EventSubscriptionVendor } from "react-native";
import { Icon } from "@rneui/themed";
import color from "../../config/color";
import SearchField from "../Components/SearchBar.js";
import PinOverlay from "../Components/PinOverlay.js";


//will display all events

function Events(props) {
  const [Data, setData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [overlayVisbility, setOverlayVisbility] = useState(false);
  const [event, setEvent] = useState("");
  const [isRender, setIsRender] = useState(false);
  const [pinItem, setPinItem] = useState(false);
  const [currentItem, setCurrentItem] = useState("");


  const addEventtoList = async (location) => {
    console.log(global.Email)
   // Declare res outside the try block
    
  };
  

const handelPinItem = async () => {
  const newData = await Promise.all(
    Data.map(async (item) => {
      if (item.key == currentItem){
          try {
            fetch(
              `http://0.0.0.0:3000/api/pinevent`,
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
                setPinItem(true)
                setOverlayVisbility(false)
                return item
              }
              else{
                console.log('ERROR OCCURED :', data.message)
                return item
              }
            })
          }catch (error) {
            console.error('Error during fetch:', error);
            return item
          }
          return item;
      }
      return item;
    })
  );
  setData(newData);
  if(pinItem){
    setIsRender(!isRender);
    setPinItem(false)
  }
};

  
  const onPressPin = async () =>{
    await handelPinItem()

  }

  
  const renderItem =  ({item, index}) => {
    return(
      <TouchableOpacity style={styles.container} 
        onPress={() => {
          setEvent(item.name),
          setCurrentItem(item.key);
          setOverlayVisbility(true)
          }}>
        <View style={styles.header}>
          <Text style={styles.title}>{item.name}</Text>
          {console.log(item.pinned," ", index)}
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
        <Text style={styles.bold}>Location: <Text>{item.location}</Text></Text>
        <Text style={styles.bold}>Start: <Text>{item.start}</Text></Text> 
        <Text style={styles.bold}>End: <Text>{item.end}</Text></Text>
        <Text style={styles.bold}>key: <Text>{item.key}</Text></Text>    
        <View style={styles.borderLine} />
        <Text style={styles.textInput}>{item.description}</Text>
      </TouchableOpacity>

    )
  }
  const getEvents = async (strInp) => {
    const res = await fetch(
      `http://0.0.0.0:8000/data/getevents?query=${strInp}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setData(await res.json());
  };
  useEffect(() => {
    getEvents(searchPhrase);
  }, [searchPhrase]);


  return (
    <SafeAreaView style={{ backgroundColor: color.primary, flex: 1 }}>
      {console.log("Email ID: ", global.Email)}
      <SearchField
       clicked={clicked}
       setClicked={setClicked}
       searchPhrase ={searchPhrase}
       setSearchPhrase={setSearchPhrase}

      />
      <FlatList
        data={Data}
        renderItem={ renderItem } 
        extraData={isRender}
      />
      <PinOverlay
        visible ={overlayVisbility}
        setVisible = {setOverlayVisbility}
        eventName = {event}
        onPressPin = {onPressPin}
        buttonTitle = {"PIN"}
      />
    </SafeAreaView>
  );
}

export default Events;

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

  textInput: {
    fontSize: 16,
    color: "#000000",
    textAlignVertical: "top",
  },
  bold: {
    fontWeight: "bold",
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
  },
  rightText: {
    textAlign: "right",
  },
});
