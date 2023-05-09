import React from 'react';
import { Text, SafeAreaView, ScrollView,View,StyleSheet } from 'react-native';
import color from '../../config/color';

//will display all events

function Events(props) {
    return (
        <SafeAreaView style ={{backgroundColor: color.primary, flex:1}} //background border
        >
            <ScrollView //makes it scrollable
            >
            {/* <View style = {styles.container}> 
            <Text style={styles.text}  //placeholder for backend, will display events function
                >Events</Text>
            </View> */}
            <View style={styles.container}>
                <Text style={styles.title}>ASI                                                     Date: <Text style={styles.textInput}>May 2</Text></Text>
                
                <View style={styles.borderLine} />

                <Text style={styles.textInput}>
                <Text style={styles.bold}>Location:</Text> SRWC Entry Plaza{'\n'}
                <Text style={styles.bold}>Time:</Text> 5 to 7 p.m.
                </Text>
                <Text style={styles.textInput} multiline = {true}><Text style={styles.bold}>Description:</Text>{'\n'}Join us May 2 from 5 to 7 p.m. for the Owen’s Condition for Tuition Celebration event at the Student Recreation & Wellness Center (SRWC)! Whether you earned one point, or finished all 50 points, we are inviting you to all the fun things to celebrate your commitment to wellness. Free giveaways, food and fun await!{'\n'}
Come by for free food, ice cream, shakes and more snacks to feed your appetite. There will be music, activities and inflatables for your entertainment. We will also have a balloon artist, henna and airbrush tattoos, caricature drawings and a photo booth to keep the fun going.{'\n'}
Prizes ranging from a Bluetooth speaker to beach cruiser bike will be awarded. The pinnacle of this event is an opportunity drawing for a semester of paid tuition for those that have completed the program with all 50 points.
What better way to conclude this semester? See you there and Pura Vida!</Text>
            
            </View>
               

            </ScrollView>
        </SafeAreaView>
    );
}

export default Events;

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
      bold:{
        fontWeight:'bold',
      },
      left: {
        flex: 1,
      },
      right: {
        flex: 1,
        alignItems: 'flex-end',
      },
      rightText: {
        textAlign: 'right',
      }
});