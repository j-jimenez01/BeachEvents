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
    //         <SafeAreaView style ={{backgroundColor: color.primary, flex:1}}>
    //             <ScrollView>
    //                 {/* <Text style={{color: color.third}}//placeholder for displaying clubs, backend function
    //                 >Organized</Text>  */}
    //                 <View style={styles.container}>
    //                 <Text style={styles.title}>ASI</Text>
    //                 <View style={styles.borderLine} />
    //                 <Text style ={styles.textInput} multiline={true}>Associated Students, Inc. Students automatically become members of ASI when they pay their mandatory student fees at the time of registration. Services provided by ASI to the CSULB community include the University Student Union, the Isabel Patterson Child Development Center, and the Student Recreation & Wellness Center. ASI also funds various scholarships, major and minor campus events and programs, and supports a robust student-run media division which includes a weekly newspaper, TV station and state-of-the-art radio station.
    // ASI has a rich history of strong student leaders and executive officers who have been at the forefront of many university milestones. From the building of the University Student Union and Student Recreation & Wellness Center, to advocating for the 24-hour opening of the University Library during finals and the development of the first Disabled Student Services center on campus, ASI has been proud to be an important part of CSULB’s history.
    // For a corporate overview, visit our press and corporate information webpage at asicsulb.org/press</Text>
    //             </View>
    //             </ScrollView>
    //         </SafeAreaView>
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
