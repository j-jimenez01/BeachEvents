import { React, useRef, useState } from "react";
import {Text,  StyleSheet, SafeAreaView, TouchableOpacity, Button, View, TouchableHighlight} from "react-native";
import color from '../../config/color';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import routes from '../../config/routes';
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
//location and details of marker
let locationsOfInterest = [
    {
        title: "SHS",
        description: "Student Health Services",
        location:{
        latitude: 33.78229033858013,
        longitude: -118.11792922513402
        },
    },
    // 34.52785897561143, -118.16162685934198
    // 33.781260370009484, -118.1137525461882
    {
        title: "USU",
        description: "University Student Union",
        location:{
        latitude: 33.781260370009484,
        latitudeDelta: 0.0015601735620123236,
        longitude: -118.1137525461882,
        longitudeDelta: 0.0013303535742750228
        },
    },
    {
        title: "PH1",
        description: "Peterson Hall 1",
        location:{
        latitude: 33.778740890978085, 
        longitude: -118.11209781037276,
        },
    },
    {
        title: "SRWC",
        description: "Student Recreation and Wellness Center",
        location:{
        latitude: 33.785284553612705, 
        longitude: -118.10917416804547,
        },
    },
    {
        description: "Speaker's Platform",
        title: "Speaker's Platform",
        location:{
        latitude: 33.78017591301152, 
        latitudeDelta: 0.00135923712341679,
        longitude: -118.11464369386114,
        longitudeDelta: 0.0011590200639375325
        },
    },

    {
        description: "Liberal Arts 3",
        title: "LA3",
        location:{
        latitude: 33.778217980971895,
        latitudeDelta: 0.0013592330243099582,
        longitude: -118.1144875976943,
        longitudeDelta: 0.0011590200639375325
        },
    },
    
    {
        description: "Liberal Arts 4",
        title: "LA4",
        location:{
        latitude: 33.778540144857764,
        latitudeDelta: 0.0013592279121255046,
        longitude: -118.11438072973003,
        longitudeDelta: 0.0011590200639517434
        },

    
    },
]

function Home({navigation}) {
    const onRegionChange = (region) => {
        console.log(region);
    };
    const mapRef = useRef();
    const [initialRegion, setInitialRegion] = useState({ //initial location CSULB 
      latitude: 33.78051187469627,
      longitude: -118.11546007304146,
      latitudeDelta: 0.02678482487370104,
      longitudeDelta: 0.015532763320436516,
    });

    const showLocationsOfInterest = () => { //function that goes through list to place markers all locations
        return locationsOfInterest.map((item, index) => {
          return (
            <Marker //places markers
              key={index}
              coordinate={item.location}
              title={item.title}
              description={item.description}
            >
                <Callout onPress={() => navigation.navigate(routes.EVENTS)}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>

                        <Button title="Click for Events"/>

                </Callout>
                   
                
            </Marker>
          )
        });
      };

    return (
        <SafeAreaView style={styles.container}>
                <MapView style={styles.map}
                    //onRegionChange={onRegionChange}
                    ref={mapRef}
                    initialRegion ={initialRegion} //sets csulb on the map
                    onRegionChange={(e) => setInitialRegion(e)}
                >
                    {showLocationsOfInterest()}
                    <View style={{justifyContent:'flex-end', alignItems:'flex-end', top:'90%'}} //places building icon in bottom left
                     >

                    <TouchableOpacity
                        style={{
                        width: 60,
                        height: 60,
                        
                        }}
                        onPress={() => //goes to CSULB if button is pressed
                        mapRef.current.animateToRegion({
                            latitude: 33.78051187469627,
                            longitude: -118.11546007304146,
                            latitudeDelta: 0.02678482487370104,
                            longitudeDelta: 0.015532763320436516,
                        })
                        }
                    >
                        <Image source={require("../../assests/pin.png")} style={styles.button}  />
                    </TouchableOpacity>
                    </View>
                
                </MapView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{ //background
        flex:1,
        backgroundColor: color.primary,

    },
    map:{ //map conatiner
        width:"100%",
        flex:1,
    },
    button:{
        width: "120%",
        height:"120%",
    },
})

export default Home;