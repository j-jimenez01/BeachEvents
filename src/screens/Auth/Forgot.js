import { React, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { StyleSheet,Button } from "react-native";
import routes from "../../config/routes";

function Forgot({ navigation }) {
  const [current, setCurrent] = useState("");
  const [newpass, setPass] = useState("");
  const [again, setAgain] = useState("");
  const [email, setEmail] = useState("");
  
  const apiEndPoint =  'http://0.0.0.0:3000/api'
  const  sendOTP = async () =>{
    console.log("hello")
    try{
      const id = email.toLowerCase()
      const fp = "change"
      const new_forget = "changePassword"
      const response = await fetch(`${apiEndPoint}/send-verification-email`,
    {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        fp
      }),
    })
    if (response.ok){
      const data= await response.json()
      console.log(id)
      // console.log(data.message)
      navigation.navigate( routes.OTP, {otp: data.message, redirect : routes.PASSWORD,id: id.toLowerCase(),fp: fp,new_forget:new_forget})
    }
    }catch(err){
      console.log("abe")
      console.log(err)
    }
    
  } 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ alignItems: "center", background: "#010101", opacity: 0.5 }}
      >
        <MaterialIcons name="drag-handle" size={35} color="white" />
      </TouchableOpacity>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={require("../../assests/icon.png")}
        />
        {/* email design */}

        <View style={styles.inputContain}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor={"#000000"}
              onChangeText={(e) => setEmail(e)}
              
            />
          </View>
        </View>
        {/* inserting the logo */}

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
        <Button title="Send OTP" onPress={() => sendOTP()} />
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
  card: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 50,
    marginRight: 50,
    marginTop: 100,
    marginBottom: 200,
    padding: 15,
    borderRadius: 30,
  },

  container: {
    flex: 1,
    backgroundColor: "#000000", //changing background color
  },
  //editing image size and spacing from the input
  image: {
    height: "30%",
    width: "40%",
  },
  //giving the email and password design
  inputView: {
    backgroundColor: "#c97b06",
    borderRadius: 30,
    width: "80%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  //editing the text size and spacing
  TextInput: {
    height: 50,
    flex: 1,
    padding: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  loginbtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#c97b06",
  },
  loginText: {
    color: "#000000",
  },
  inputContain: {
    height: "30%",
    width: "90%",
    justifyContent: "center",
    alignContent: "center",
    left: "10%",
  },
});
export default Forgot;
