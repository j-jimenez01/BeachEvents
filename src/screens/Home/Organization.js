import React from 'react';
import { Text,ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../config/colors';

function Organization(props) {
    return (
        <SafeAreaView style ={{backgroundColor: colors.primary, flex:1}}>
            <ScrollView>
                <Text style={{color: colors.third}}>Organized</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Organization;
