import React from 'react';
import { ScrollView, Text, StyleSheet, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
//shows list of clubs user is subsciibed to
function Subscribe({navigation}) {
    
    {/*
    let myLoop = []; //declares array

    for (let i = 1; i <= 6; i++){
        myLoop.push(
                <Text> Organization {i}</Text>
        )
    }*/}
    const Org =  //list of organizations, placeholder for backend to get the list of clubs
    [{
        id:1,
        name:"ASI",
    },
    {
        id:2, 
        name:"SRWC"
    },
    {
        id:3,
        name: "Food Truck"
    },
    {
        id:4,
        name: "SHPE"
    },
    {
        id:5,
        name: "CSULB Soccer"
    },
    {
        id:6,
        name: "VGDC"
    },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={{flex:1, alignItems:"center", justifyContent:"space-evenly"}} //list that contains the organizations
                data={Org}
                renderItem={({item}) => 
                
                <TouchableOpacity onPress={() => navigation.navigate(routes.SUBORG)} //redirects to the clubs event page
                >
                        <Text style ={styles.item}>{item.name}</Text>
                </TouchableOpacity>
                }/>

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{ //background
        flex:1,
        backgroundColor: color.primary,
        justifyContent:"center",
        alignItems:"center",
    },
    box:{ //list box
        width:'100%',
        height:'30%',
        backgroundColor: color.yellow,
        justifyContent:'center',
        alignItems:'center',
    },
    item: { //each club entry border
        padding: 10,
        fontSize: 18,
        height: 44,
        color: color.third
      },
})
export default Subscribe;
