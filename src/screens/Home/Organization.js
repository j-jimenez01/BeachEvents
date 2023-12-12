import React from "react";
import { Text, SafeAreaView, View, StyleSheet, FlatList, Image,TouchableOpacity } from "react-native";
import {useState, useEffect} from "react";
import { Icon } from "@rneui/themed";
import PinOverlay from '../Components/PinOverlay'
import color from "../../config/color";
import SearchField from "../Components/SearchBar";


//Shows the events hosted by a certain club
function Organization(props) {
const [Data, setData] = useState([]);
const [clicked, setClicked] = useState(false);
const [searchPhrase, setSearchPhrase] = useState("");
const [overlayVisbility, setOverlayVisbility]  = useState(false);
const [org, setOrg] = useState("")
const [overlayButtonText, SetOVerlayButtonText] = useState("SUBSCRIBE")
const [currentItem, setCurrentItem] = useState('')

const apiEndpoint = 'http://0.0.0.0';

const onPressOrg = (item) => {
  setOrg(item.name)
  setCurrentItem(item.key)
  if(item.subscribed){
    SetOVerlayButtonText("UNSUBSCRIBE")
  }
  else{
    SetOVerlayButtonText("SUBSCRIBE")
  }
  setOverlayVisbility(true);
}

const addOrgToSubscribe = async (item) =>{
  try{
    fetch( apiEndpoint + ':3000/api/subscribe',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: global.Email.toLowerCase(),
        org: {
          name: item.name,
          id: item.key,
          ProfilePicture: item.ProfilePicture
        }
      })
    }

    ).then( async (res) => {
      const data = await res.json()
      if(res && res.status == 200){
        alert(data.message)
        item.subscribed = true
        setOverlayVisbility(false)
      }
      else{
        console.log('ERROR OCCURED :', data.message)
      }
      setOverlayVisbility(false)
      return item

    })
  }catch(error){
    console.error('Error during fetch:', error);
    return item
  }
}

const removeOrgFrmSubscribe = async (item) =>{
  try{
    fetch(
      apiEndpoint + ':3000/api/unsubscribe',
      {
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: global.Email.toLowerCase(),
          org: {
            name: item.name,
            id: item.key,
            ProfilePicture: item.ProfilePicture
          }
        })
      }
    ).then( 
      async (res) =>{
        const data = await res.json()
        if(res && res.status == 200){
          alert(data.message)
          item.subscribed = false
        }
        else{
          console.log('ERROR OCCURED :', data.message)
        }
    }
    )
  }catch(error){
    console.log('Error during fetch:', error)
    return item
  }
}

const onPressButton = async() =>{
  console.log(currentItem, "_____________________________________")
  console.log("Inside onPressButton")
  const newData = await Promise.all(
    Data.map( async (item) =>{
    console.log("Inside BLA BLA")
    if (item.key == currentItem){
      if(overlayButtonText == "SUBSCRIBE"){
        console.log("Here")
        await addOrgToSubscribe(item)
        return item
      }
      else{
        await removeOrgFrmSubscribe(item)
        return item
      }
    }
    return item
  })
  );
  setData(newData)
} 


  const getOrgs = async (strInp) => {
    const res = await fetch(
      `${apiEndpoint}:8000/data/getorgs?query=${strInp}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setData(await res.json())
  }
  useEffect(() => {getOrgs(searchPhrase);}, [searchPhrase]);
  // const url = "https://www.asicsulb.org/corporate/resources/about-us/press-kit";


  const renderItem = ({ item, index }) => (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => {
        onPressOrg(item)
      }}>
        <View style ={styles.headerWrapper}>
          <View style = {styles.header}>
            <Image style={styles.tinyLogo}
              source={{ uri: item.ProfilePicture}}
            />
            {/* <Text style={styles.title}>{item.key}</Text> */}
            <Text style={styles.title}>{item.name}</Text>
          </View>
            {
              item.subscribed?
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
        <View style={styles.borderLine}/>
        <Text style={styles.textInput}>{item.Summary}</Text>
      </TouchableOpacity>
    </View>
  )
  
  return ( 
    <SafeAreaView style ={{backgroundColor: color.primary, flex:1}}>
    <SearchField
       clicked={clicked}
       setClicked={setClicked}
       searchPhrase ={searchPhrase}
       setSearchPhrase={setSearchPhrase}
      />
    <FlatList
      data = {Data}
      renderItem={renderItem}  
    />
    <PinOverlay
        visible ={overlayVisbility}
        setVisible = {setOverlayVisbility}
        eventName = {org}
        onPressButton = {onPressButton}
        buttonTitle = {overlayButtonText}
    />

    </SafeAreaView>
    
  );
}

export default Organization;


const styles = StyleSheet.create({

  header:{
      // width: "100%",
      flexDirection: 'row',
      justifyContent: "space-between",
      // flexWrap: 'wrap',
      paddingRight: 20,
      alignItems: "center"
  },
  headerWrapper:{
    width: "94%",
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  container: {
    backgroundColor: "#c97b06",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cccccc",
  },
  tinyLogo: {
    width: "15%",
    height: 50,
    marginRight: 0,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'grey',

  },

  title: {
    width: "80%",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
    height: 'auto',
  },

  borderLine: {
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    marginBottom: 10,
    marginTop: 2,
  },
  textInput: {
    fontSize: 16,
    color: "#000000",
    textAlignVertical: "top",
  },
});
