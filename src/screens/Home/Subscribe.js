// import {React} from "react";
import {RefreshControl, Text, SafeAreaView, View, StyleSheet, FlatList, Image,TouchableOpacity, ScrollView} from "react-native";
import {useState, useEffect, useCallback} from "react";
import { Icon } from "@rneui/themed";
import routes from '../../config/routes';
import PinOverlay from '../Components/PinOverlay'
import color from "../../config/color";

//Shows the events hosted by a certain club
function Subscribe({navigation}) {
const [refreshing, setRefreshing] = useState(false);
const [Data, setData] = useState([]);
const [overlayVisbility, setOverlayVisbility]  = useState(false);
const [org, setOrg] = useState("")
const [currentItem, setCurrentItem] = useState('')

const apiEndpoint = 'http://0.0.0.0';

const onPressOrg = (item) => {
  setOrg(item.name)
  setCurrentItem(item.id)
  setOverlayVisbility(true);
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
              id: item.id,
              ProfilePicture: item.ProfilePicture
            }
          })
      }
    ).then( 
      async (res) =>{
        const data = await res.json()
        if(res && res.status == 200){
        //   alert(data.message)
          setOverlayVisbility(false)
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
  await Promise.all(
    Data.map( async (item) =>{
    console.log("Inside BLA BLA")
    if (item.id == currentItem){
        await removeOrgFrmSubscribe(item)
        return item
    }
    return item
  })
  )
}

  const getSubList = async () => {
    console.log("_______________done_________________")
    const res = await fetch(
      `${apiEndpoint}:8000/data/getSubList?query=${global.Email.toLowerCase()}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setData(await res.json())
  };
  useEffect(() => {getSubList();}, []);
  // const url = "https://www.asicsulb.org/corporate/resources/about-us/press-kit";


  const renderItem = ({ item, index }) => (
    <View>
        {/* {setOverlayVisbility(false)} */}
      <TouchableOpacity style={styles.container}  
        onPress={() => {
            try{
                console.log(routes.SUBORG)
                navigation.navigate(routes.SUBORG, {api: `${apiEndpoint}:8000/data/getOrgEvents?query=${item.id}`})
            }catch(err){
                console.log(err)
            }
        }}>
        <View style ={styles.headerWrapper}>  
          <View style = {styles.header}>
            <Image style={styles.tinyLogo}
              source={{ uri: item.ProfilePicture}}
            />
            {/* <Text style={styles.title}>{item.key}</Text> */}
            <Text style={styles.title}>{item.name}</Text>
          </View>
        <TouchableOpacity  onPress={() => {
            onPressOrg(item)
        }}>
          <Icon
              name="bookmark"
              type ='font-awesome'
              size={30}
            /> 
        </TouchableOpacity>
                  
        </View>
      </TouchableOpacity>
    </View>
  )
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getSubList()
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);
  
  return ( 
    <SafeAreaView style ={{backgroundColor: color.primary, flex:1, paddingTop: "16%"}}>
    {/* <SearchField
       clicked={clicked}
       setClicked={setClicked}
       searchPhrase ={searchPhrase}
       setSearchPhrase={setSearchPhrase}
      /> */}
    <FlatList
            data = {Data}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
        />
    <PinOverlay
        visible ={overlayVisbility}
        setVisible = {setOverlayVisbility}
        eventName = {org}
        onPressButton = {onPressButton}
        buttonTitle = {"UNSUBSCRIBE"}
    />

    </SafeAreaView>
    
  );
}

export default Subscribe;


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
