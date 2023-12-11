import React from 'react';
import { Text, SafeAreaView, ScrollView,View,StyleSheet} from 'react-native';
import color from '../../config/color';
//Sub org shows a list of all events of the subcribed club
function SubOrg(props) {
    return (
        <ScrollView style={{backgroundColor: color.primary}}>
            {/* <Text style={{color: color.third}} //placeholder for backend to display clubs user is subscribed to
            >Subscribed Organization</Text> */}
            <View style={styles.container}>
                <Text style={styles.title}>ASI                                                     Date: <Text style={styles.textInput}>May 2</Text></Text>
                
                <View style={styles.borderLine} />

                <Text style={styles.textInput}>
                <Text style={styles.bold}>Location:</Text> SRWC Entry Plaza{'\n'}
                <Text style={styles.bold}>Time:</Text> 5 to 7 p.m.
                </Text>
                <Text style={styles.textInput} multiline = {true}><Text style={styles.bold}>Description:</Text>{'\n'}Join us May 2 from 5 to 7 p.m. for the Owen’s Condition for Tuition Celebration event at the Student Recreation & Wellness Center (SRWC)! Whether you earned one point, or finished all 50 points, we are inviting you to all the fun things to celebrate your commitment to wellness. Free giveaways, food and fun await!{'\n'}{'\n'}
Come by for free food, ice cream, shakes and more snacks to feed your appetite. There will be music, activities and inflatables for your entertainment. We will also have a balloon artist, henna and airbrush tattoos, caricature drawings and a photo booth to keep the fun going.{'\n'}{'\n'}
Prizes ranging from a Bluetooth speaker to beach cruiser bike will be awarded. The pinnacle of this event is an opportunity drawing for a semester of paid tuition for those that have completed the program with all 50 points.
What better way to conclude this semester? See you there and Pura Vida!</Text>
            
            </View>
            {/* new event */}
            <View style={styles.container}>
                <Text style={styles.title}>ASI                                                     Date: <Text style={styles.textInput}>May 4</Text></Text>
                
                <View style={styles.borderLine} />

                <Text style={styles.textInput}>
                <Text style={styles.bold}>Location:</Text> SRWC Farber Fitness{'\n'}
                <Text style={styles.bold}>Time:</Text> 5 to 5:45 p.m.
                </Text>
                <Text style={styles.textInput} multiline = {true}><Text style={styles.bold}>Description:</Text>{'\n'}The Student Recreation and Wellness Center (SRWC) is proud to present Mental Health Meditation Thursdays! Learn yoga and various meditation practices that will improve your mental health, emotional well-being and overall academic success. Each session includes instructional-led yoga, breathing training and guided meditation and is FREE for all Long Beach State University (LBSU) students every Thursday from 5 to 5:45 p.m.
                {'\n'}{'\n'}Join to learn how meditation and breathing stimulate the parasympathetic nervous system, ultimately promoting relaxation and focus. Additionally, explore how carefully crafted yoga assists with poor posture correction and overall well-being. Lastly, discover how you can give your health a boost with mindfulness philosophies, such as affirmations and visualization techniques.
                </Text>
            
            </View> 
             {/*new event  */}
             <View style={styles.container}>
                <Text style={styles.title}>ASI                                                     Date: <Text style={styles.textInput}>May 5</Text></Text>
                
                <View style={styles.borderLine} />

                <Text style={styles.textInput}>
                <Text style={styles.bold}>Location:</Text> Walter Pyramid{'\n'}
                <Text style={styles.bold}>Time:</Text> Doors open at 6 p.m.
                </Text>
                <Text style={styles.textInput} multiline = {true}><Text style={styles.bold}>Description:</Text>{'\n'}
                This year, ASI is proud to present <Text style={styles.bold}>ASI Big Event featuring T-Pain!</Text> Tickets are on sale NOW!{'\n\n'}
                T-Pain is one of America's most highly prolific and entertaining artists! Since emerging, T-Pain not only changed the course of pop, hip-hop and R&B, he has reshaped the fabric of the culture itself. With his numerous accomplishments, including over 10 top-10 singles on the Billboard Hot 100 chart, 12 GRAMMY Award nominations and two GRAMMY Awards for his collaborative singles with Kanye West (“Good Life”) and Jamie Foxx (“Blame It”), T-Pain has amassed a huge following. T-Pain's voice can be heard loud and clear from gathering billions of streams to selling out on multiple continents and even shocking audiences everywhere as the first-ever winner of FOX’s The Masked Singer. Fans watch T-Pain from every angle as his presence continues to grow, shining as a Twitch phenomenon, podcast influencer, car enthusiast and prominent drifting participant, author, actor and loving father, husband, brother and son.{'\n\n'}
                T-Pain's career has taken off and he has become one of the most successful and celebrated artists of our time. And to this day, his hit singles from third album, "Three Ringz", continue to be crowd favorites, transcending generations with hits such as "Buy U a Drank (Shawty Snappin')", "Bartender (Akon)" and "I'm Sprung".{'\n\n'}
                <Text style={styles.bold}>                 Check out more from T-Pain!</Text>
                <Text style={styles.bold}>Instagram | Spotify | YouTube | Twitch | FaceBook</Text>
                </Text>
            
            </View> 

        </ScrollView>
    );
}

export default SubOrg;

const styles = StyleSheet.create({
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