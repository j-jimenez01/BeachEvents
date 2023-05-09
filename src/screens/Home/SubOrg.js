import React from 'react';
import { Text, SafeAreaView, ScrollView,View,StyleSheet} from 'react-native';
import color from '../../config/color';
//Sub org shows a list of all events of the subcribed club
function SubOrg(props) {
    return (
        <ScrollView style={{backgroundColor: color.primary}}>
            <Text style={{color: color.third}} //placeholder for backend to display clubs user is subscribed to
            >Subscribed Organization</Text>
        </ScrollView>
    );
}

export default SubOrg;