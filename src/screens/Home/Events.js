import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import color from '../../config/color';

//will display all events

function Events(props) {
    return (
        <SafeAreaView style ={{backgroundColor: color.primary, flex:1}} //background border
        >
            <ScrollView //makes it scrollable
            >
                <Text style={{color: color.third}}  //placeholder for backend, will display events function
                >Events</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Events;