import {React,useState} from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import color from '../../config/color';

function Forgot({navigation}) {
    const [current,setCurrent] = useState('');
    const [newpass,setPass] = useState('');
    const [again,setAgain] = useState('');
    return (
    <View style={styles.container}>
        {/* inserting the logo */}
        <Image style={styles.image} source = {require('../../assests/Yticon.png')}/>
        {/* email design */}

        <View style={styles.prompt}>
          <Text style={styles.ptext}>
            Please enter your CSULB email below: </Text>
         
         
        </View>
        
            
            <View style = {styles.inputContain}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor={"#000000"}
                        onChangeText={(current) => setCurrent(current)}
                        />
                </View>
                
             <TouchableOpacity onPress={()=> navigation.goBack()} style={styles.loginbtn}>
          <Text style={styles.loginText}>Confirm </Text>
        </TouchableOpacity>
            {/* password design */}
            {/* <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="New Password"
                    placeholderTextColor={"#000000"}
                    secureTextEntry={true}
                    onChangeText={(newpass) => setPass(newpass)}
                    />
            </View> */}
            {/* password design */}
            {/* <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter New Password Again"
                    placeholderTextColor={"#000000"}
                    secureTextEntry={true}
                    onChangeText={(again) => setAgain(again)}
                    />
            </View> */}
      </View>
      {/* login button */}
      {/* on press is if the login button pressed to move to the next page and will have a way to go back
      <TouchableOpacity style={styles.loginbtn}
        onPress={()=>navigation.navigate("Home")}>
        <Text style={styles.loginText}>LOGIN </Text>
      </TouchableOpacity> */}
      {/* on press is if the login button pressed to move to the next page but will not have a way to go back */}
     
    </View>
    // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.primary,//changing background color
      alignItems: 'center',
      justifyContent: 'center',
      rowGap:45,
    },
    //editing image size and spacing from the input
    image:{
      height:"25%",
      width:"38%",
      
    },
    //giving the email and password design
    inputView:{
      backgroundColor:color.yellow,
      borderRadius:30,
      width:"90%",
      height:50,
      alignItems:"center",
      justifyContent:"center",
      borderWidth: 1,
      borderColor: "white",
    
    },
    //editing the text size and spacing
    TextInput:{
      height: 50,
      flex:1,
      padding:0,
      alignContent:"center",
      justifyContent:"center"
    },
    loginbtn:{
      width:"30%",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:color.yellow,
        borderWidth: 1,
      borderColor: "white",
    },
    loginText:{
      color:"black",
    },
    inputContain:
    {
        height:"30%",
        width:"90%",
        rowGap:20,
        alignItems:"center"
    },
    prompt:{
      height: "10%",
      width:"80%",
      backgroundColor:"white",
      borderColor:color.yellow,
      borderWidth:5,
      borderRadius:10,
      alignContent:'center',
      justifyContent: 'center',

    },

    ptext:{
      textAlign: 'center',
      fontSize:15,
      
    }
  });
export default Forgot;