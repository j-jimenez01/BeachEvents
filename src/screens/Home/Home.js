import { React, useRef, useState } from "react";
import {Text,  StyleSheet, SafeAreaView, TouchableOpacity, Button, View, TouchableHighlight} from "react-native";
import color from '../../config/color';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import routes from '../../config/routes';
import { MaterialIcons } from "@expo/vector-icons";
//location and details of marker
let locationsOfInterest = [
    {
        title: "LA1",
        description: "Liberal Arts 1",
        location:{
        latitude: 33.77765192172539,
        latitudeDelta: 0.0015601735620123236,
        longitude: -118.11473586308168,
        longitudeDelta: 0.0013303535742750228
        },

    
    },

    {
        description: "Liberal Arts 2",
        title: "LA2",
        location:{
        latitude: 33.77795965765024,
        latitudeDelta: 0.00135923712341679,
        longitude: -118.11457938594178,
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
    {
        description: "Liberal Arts 5",
        title: "LA5",
        location:{
        latitude: 33.77894542410917,
        latitudeDelta: 0.0014901037364225544,
        longitude: -118.1142452963567,
        longitudeDelta: 0.0012706245097291458
        }

    
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
                <Callout onPress={() => navigation.navigate(routes.EVENTS)} //will redirect to events if clicked on
                >
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>

                        <Button title="Click for Events" //shows events button

                        onPress={() => console.log("pressed")
                        }
                    />
                    
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
                        <MaterialIcons name="location-city" size={40} color="black"/>
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
    }
})

export default Home;