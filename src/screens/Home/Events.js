import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import color from '../../config/color';


function Events(props) {
    return (
        <SafeAreaView style ={{backgroundColor: color.primary, flex:1}}>
            <ScrollView>
                <Text style={{color: color.third}}>Events</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Events;