import React from 'react';
import { Text,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import color from '../../config/color';

//Shows the events hosted by a certain club
function Organization(props) {
    return (
        <SafeAreaView style ={{backgroundColor: color.primary, flex:1}}>
            <ScrollView>
                <Text style={{color: color.third}}//placeholder for displaying clubs, backend function
                >Organized</Text> 
            </ScrollView>
        </SafeAreaView>
    );
}

export default Organization;