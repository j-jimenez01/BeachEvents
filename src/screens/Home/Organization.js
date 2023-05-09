import React from 'react';
import { Text,ScrollView,View,StyleSheet,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import color from '../../config/color';

//Shows the events hosted by a certain club
function Organization(props) {
    const url = 'https://www.asicsulb.org/corporate/resources/about-us/press-kit';
    return (
        <SafeAreaView style ={{backgroundColor: color.primary, flex:1}}>
            <ScrollView>
                {/* <Text style={{color: color.third}}//placeholder for displaying clubs, backend function
                >Organized</Text>  */}
                <View style={styles.container}>
                <Text style={styles.title}>ASI</Text>
                <View style={styles.borderLine} />
                <Text style ={styles.textInput} multiline={true}>Associated Students, Inc. Students automatically become members of ASI when they pay their mandatory student fees at the time of registration. Services provided by ASI to the CSULB community include the University Student Union, the Isabel Patterson Child Development Center, and the Student Recreation & Wellness Center. ASI also funds various scholarships, major and minor campus events and programs, and supports a robust student-run media division which includes a weekly newspaper, TV station and state-of-the-art radio station.
ASI has a rich history of strong student leaders and executive officers who have been at the forefront of many university milestones. From the building of the University Student Union and Student Recreation & Wellness Center, to advocating for the 24-hour opening of the University Library during finals and the development of the first Disabled Student Services center on campus, ASI has been proud to be an important part of CSULB’s history.
For a corporate overview, visit our press and corporate information webpage at asicsulb.org/press</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Organization;
const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: '#c97b06',
    //     padding: 10,
    //     borderRadius: 10,
    // },
    // text:{
    //     color: '#ffffff',
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // }
    container: {
        backgroundColor: '#c97b06',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      borderLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 10,
      },
      textInput: {
        fontSize: 16,
        color: '#000000',
        textAlignVertical: 'top',
      },
});