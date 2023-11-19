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


export default function Register({ navigation, route }) {
  const {id,fp,new_forget} = route.params
  const [touched, setTouched] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const apiEndPoint = 'http://172.16.227.198:3000/api' //school
  // const apiEndPoint =  'http://192.168.254.21:3000/api'//home
  const apiEndPoint =  'http://0.0.0.0:3000/api'
  const  Register = async () =>{
    try{
      console.log(new_forget)
      console.log(`${apiEndPoint}/${new_forget}`)
      const response = await fetch(`${apiEndPoint}/${new_forget}`,
    {
      
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        password
        
      }),
      
    })
    // console.log("didnt work")
    // console.log(id)

    alert(id)
    if (response.ok){
        const data= await response.json()
        alert(data.message)
        navigation.navigate(routes.LOGIN)
    }
    }catch(err){
      
      console.log(err)
    }
    
  } 
  const checkCred = () => {
    if ((password != "") && (confirmPassword != "") && (password === confirmPassword)){ //
      console.log("working?")
      Register();
    }
    else if (password != confirmPassword){
      alert("The entered Passwords do not match")
    }
    else {
        alert("One or more fields are empty")
  };
}

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
        <Text style={styles.pageName}> {fp} Password</Text>
        <Image
          style={styles.image}
          source={require("../../assests/icon.png")}
        />
        <View style={styles.inputView}>
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
        </View>

       
        {/* <Button title="Confirm" onPress={() => navigation.goBack()} /> */}
        <Button title="Go to Login" onPress={() => checkCred()} />
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
