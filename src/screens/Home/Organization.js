import React from "react";
import { Text, SafeAreaView, View, StyleSheet, FlatList, Image,TouchableOpacity } from "react-native";
import {useState, useEffect} from "react";

import color from "../../config/color";
import SearchField from "../Components/SearchBar";


//Shows the events hosted by a certain club
function Organization(props) {
const [Data, setData] = useState([]);
const [clicked, setClicked] = useState(false);
const [searchPhrase, setSearchPhrase] = useState("");

  const getOrgs = async (strInp) => {
    const res = await fetch(
      `http://0.0.0.0:8000/data/getorgs?query=${strInp}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setData(await res.json())
  };
  useEffect(() => {getOrgs(searchPhrase);}, [searchPhrase]);
  // const url = "https://www.asicsulb.org/corporate/resources/about-us/press-kit";
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
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View style ={styles.header}>
              <Image style={styles.tinyLogo}
                source={{ uri: item.ProfilePicture}}
              />
              <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.borderLine}/>
            <Text style={styles.TextInput}>{item.Summary}</Text>
          </TouchableOpacity>
        </View>
      )}  
    />
    </SafeAreaView>
    
  );
}

export default Organization;
const styles = StyleSheet.create({

  header:{
      width: "100%",
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: "center"
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
