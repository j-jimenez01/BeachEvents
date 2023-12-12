import { React, useRef, useState,useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, TouchableOpacity, Button, View, TouchableHighlight, Platform } from "react-native";
import color from '../../config/color';
import MapView from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import routes from '../../config/routes';
import { MaterialIcons } from "@expo/vector-icons";
import { Image, Linking } from "react-native";

const apiEndpoint = 'http://0.0.0.0';

openMaps = (lat, lng) => {
    var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:';
    var url = scheme + `${lat},${lng}`;
    var url2 = `https://www.google.com/maps/@${33.778217980971895},${-118.1144875976943},15z?entry=ttu`
    var url3 = `https://www.google.com/maps/dir/California+State+University+Long+Beach,+Long+Beach,+CA/University+Student+Union,+N+Bellflower+Blvd,+Long+Beach,+CA/@33.7824661,-118.1137145,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x80dd31d82982f643:0x1fdc7f26cec72dab!2m2!1d-118.1140904!2d33.7838235!1m5!1m1!1s0x80dd31db1fa57aad:0xc8ff9bfd14922f0a!2m2!1d-118.113774!2d33.7811088!3e3?entry=ttu`
    console.log(url)
    Linking.openURL(url2);
}

function Home({ navigation }) {

    const [pinnedEvents, setPinnedEvents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPinnedEvents = async () => {
            try {

                const email = global.Email.toLowerCase(); // replace with the user's email
                console.log(email)
                const response = await fetch(
                    `${apiEndpoint}:8000/data/getPinList?query=${email}`,
                );

                const data = await response.json();

                if (data === 'USER NOT FOUND') {
                    setError('User not found');
                } else {
                    setPinnedEvents(data);
                    showLocationsOfInterest()
                }
            } catch (error) {
                setError('Error fetching data');
            }
        };

        fetchPinnedEvents();
        }, [pinnedEvents]);
        // }, []);

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
        console.log(pinnedEvents)
        return pinnedEvents.map((item, index) => {
            
            // console.log(item.location.latitude)
            // console.log(item.location.longitude)
            return (
                <Marker //places markers
                    key={index}
                    coordinate={item.location}
                    title={item.description}
                    description={item.description}
                >
                    

                    {/* <TouchableOpacity onPress={() => Linking.openURL('maps://app?saddr=100+101&daddr=100+102')}>open in Google maps</TouchableOpacity>
                    {/* <Callout onPress={() => navigation.navigate(routes.EVENTS)}> */}
                    {/* <Callout onPress={() => 
                               openMaps(item.location.latitude,item.location.longitude) 
                    }>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>

                        <Button title="Click for Events" />
                    </Callout> */}
                    {/* {console.log(`${apiEndpoint}:8000/data/getevents?query=${item.id}`)} */}
                    {console.log(item.place)}
                    {console.log(`${apiEndpoint}:8000/data/getevents?query=${item.place}`)}
                    <Callout onPress={() => navigation.push(routes.PINNED_EVENTS,{api: `${apiEndpoint}:8000/data/getevents?query=${item.place}`, item: item})}>
                        {/* <Text>{item.title}</Text> */}
                        <Text>{item.description}</Text>
                        <Button title="Click for Events" />
                    </Callout>
                </Marker>
            )
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <MapView style={styles.map}
                showsUserLocation={true}
                //onRegionChange={onRegionChange}
                ref={mapRef}
                initialRegion={initialRegion} //sets csulb on the map
                onRegionChange={(e) => setInitialRegion(e)}
            >
                {showLocationsOfInterest()}
                <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', top: '90%' }} //places building icon in bottom left
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
                        <Image source={require("../../assests/pin.png")} style={styles.button} />
                    </TouchableOpacity>
                </View>
            </MapView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: { //background
        flex: 1,
        backgroundColor: color.primary,

    },
    map: { //map conatiner
        width: "100%",
        flex: 1,
    },
    button: {
        width: "120%",
        height: "120%",
    },
})

export default Home;