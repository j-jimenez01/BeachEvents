import {React,useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

//New password where users can change their password

function NewPass({navigation}) {
    const [current,setCurrent] = useState('');
    const [newpass,setPass] = useState('');
    const [again,setAgain] = useState('');
    return (
    <View style={styles.container}>
        {/* inserting the logo */}
        <Image style={styles.image} source = {require('../../assests/icon.png')}/>
        {/* email design */}
        
            
            <View style = {styles.inputContain}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Current Password"
                        placeholderTextColor={"#000000"}
                        onChangeText={(current) => setCurrent(current)}
                        />
                </View>
                
            
            {/* password design */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="New Password"
                    placeholderTextColor={"#000000"}
                    secureTextEntry={true}
                    onChangeText={(newpass) => setPass(newpass)}
                    />
            </View>
            {/* password design */}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter New Password Again"
                    placeholderTextColor={"#000000"}
                    secureTextEntry={true}
                    onChangeText={(again) => setAgain(again)}
                    />
            </View>
      </View>
      {/* login button */}
      {/* on press is if the login button pressed to move to the next page and will have a way to go back
      <TouchableOpacity style={styles.loginbtn}
        onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity> */}
      {/* on press is if the login button pressed to move to the next page but will not have a way to go back */}
      <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.loginbtn}>
          <Text style={styles.loginText}>Confirm </Text>
        </TouchableOpacity>
    </View>
    // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',//changing background color
      alignItems: 'center',
      justifyContent: 'center',
    },
    //editing image size and spacing from the input
    image:{
      height:"20%",
      width:"30%",
      
    },
    //giving the email and password design
    inputView:{
      backgroundColor: '#c97b06',
      borderRadius:30,
      width:"80%",
      height:45,
      marginBottom:20,
      alignItems:"center",
      justifyContent:"center"
    },
    //editing the text size and spacing
    TextInput:{
      height: 50,
      flex:1,
      padding:10,
      marginLeft:20,
      alignContent:"center",
      justifyContent:"center"
    },
    loginbtn:{
      width:"80%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#c97b06"
    },
    loginText:{
      color:'#000000'
    },
    inputContain:
    {
        height:"40%",
        width:"90%",
        justifyContent:"center",
        alignContent:"center",
        left: "10%"
    }
  });
export default NewPass;