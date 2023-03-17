import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
import React,{useState} from 'react';

export default function App() {
  // defining the email and pass word to login
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
    {/* inserting the logo */}
      <Image style={styles.image} source = {require("./assets/testingLogo2.png")}/>
      <StatusBar style="auto" barStyle="dark-content"/>

      {/* email design */}
      <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="Email."
        placeholderTextColor={"#000000"}
        onChangeText={(email) => setEmail(email)}
        />
      </View>
      {/* password design */}
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password."
        placeholderTextColor={"#000000"}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* login button */}
      <TouchableOpacity style={styles.loginbtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

    </View>
    </SafeAreaView>
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
    marginBottom:40,
    height:450,
    width:450,
  },
  //giving the email and password design
  inputView:{
    backgroundColor: '#c97b06',
    borderRadius:30,
    width:"70%",
    height:45,
    marginBottom:20,
    alignItems:"center",
  },
  //editing the text size and spacing
  TextInput:{
    height: 50,
    flex:1,
    padding:10,
    marginLeft:20,
  },
  loginbtn:{
    width:"80%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    backgroundColor:"#c97b06"
  }
});
