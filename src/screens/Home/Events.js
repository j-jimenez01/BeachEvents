import React from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import colors from '../../config/colors';

function Events(props) {
    return (
        <SafeAreaView style ={{backgroundColor: colors.primary, flex:1}}>
            <ScrollView>
                <Text style={{color: colors.third}}>Events</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Events;
