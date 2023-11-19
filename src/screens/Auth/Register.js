import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  SafeAreaView,
  Button,
  BackHandler,
} from "react-native";
import routes from "../../config/routes";
import color from "../../config/color";
import { useNavigation } from "@react-navigation/native";




export default function Register({ navigation }) {
  //initialize the variables
  const [touched, setTouched] = useState(false);
  const [email, setEmail] = useState("");   
 

  const apiEndPoint = 'http://0.0.0.0:3000/api' //school
  // const apiEndPoint =  'http://192.168.254.11:3000/api' //home
  const  sendOTP = async () =>{
    const fp = "New"
    const new_forget = "register"
    try{
      const id = email.toLowerCase()
      console.log(id)
      const response = await fetch(`${apiEndPoint}/send-verification-email`,
      
    {
      
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        fp,
        new_forget
      }),
    })
    const data= await response.json()
    if (response.ok){
      console.log("This is OTP: ", data.message)
      console.log("This is Email: ", email)
      navigation.navigate( routes.OTP, {otp: data.message, id: id,fp:fp , new_forget : new_forget})
    }
    else{
      alert(data.message)
    }
    }catch(err){
      console.log(err)
    }
    
  } 
  const checkCred = () => {
    if ((email.endsWith("@student.csulb.edu"))){ // (password != "") && (confirmPassword != "") && (password === confirmPassword)
      sendOTP();
    }
    else {
      alert("Please use CSULB email address")
    }
  };
  return (

    <View style={styles.container}>
      
      <TouchableOpacity
        style={{ alignItems: "center", background: "#010101", opacity: 0.5 }}
      >
        <MaterialIcons name="drag-handle" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={[touched ? styles.cardwithkeyboard : styles.card]}
        hitSlop={{ top: "100%", left: "100%", right: "100%", bottom: "100%" }}
        >
    
        <Text style={styles.pageName}>Sign up</Text>
        <Image
          style={styles.image}
          source={require("../../assests/icon.png")}
        />

        <View style={styles.inputView}>
          <TextInput //input bubble for email
            onFocus={() => {
              setTouched(true);
            }}
            fontSize = {15}
            style={styles.TextInput}
            placeholder="CSULB Email"
            placeholderTextColor={"#000000"}
            onChangeText={(e) => setEmail(e)}
            onBlur={() => {
              setTouched(false);
            }}
          />
        </View>
        {/* <View style={styles.inputView}>
          <TextInput 
            secureTextEntry={true}
            onFocus={() => {
              setTouched(true);
            }}
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor={"#000000"}
            onChangeText={(pass) => setPassword(pass)}
            onBlur={() => {
              setTouched(false);
            }}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput 
            secureTextEntry={true}
            onFocus={() => {
              setTouched(true);
            }}
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor={"#000000"}
            onChangeText={(confPass) => setConfirmPassword(confPass)}
            onBlur={() => {
              setTouched(false);
            }}
          />
        </View> */}

       
        {/* <Button title="Confirm" onPress={() => navigation.goBack()} /> */}
        <Button title="OTP PAGE" onPress={() => checkCred()} />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  bar: {
    backgroundColor: "pink",
    height: "2%",
  },
  card: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginRight: 50,
    marginTop: "25%",
    marginBottom: "45%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
  },
  cardwithkeyboard: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginRight: 50,
    marginBottom: "85%",
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#000000", //changing background color
  },
  inputView: {
    // backgroundColor: "#c97b06", //bubble design
    borderRadius: 5,
    width: "98%",
    height: "10%",
    display: "flex",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    flex: 1,
    backgroundColor: color.third,
    borderWidth: 1,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 5,
    textAlign: "center",
  },
  pageName: {
    fontSize: 30,
    marginBottom: 25,
  },
  image: {
    height: 150,
    width: 120,
    marginBottom: "10%",
    borderRadius: 10,
  },
});
