import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, Alert, Keyboard } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';



export default function Register({ navigation }) {
  // State variables to store user input
  const [email, setEmail] = useState("");
  const [keyboardOn, setKeyboardOn] = useState(false);


  // API endpoint for registration and verification
  const apiEndPoint = 'http://0.0.0.0:3000/api'; // For school

// Function to handle sending a verification email
const sendOTP = async () => {
  const fp = "New"
  const new_forget = "register"
  try {
    const id = email.toLowerCase();
    const response = await fetch(`${apiEndPoint}/send-verification-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        fp,
        new_forget
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("This is OTP: ", data.message);
      console.log("This is Email: ", email);
      // navigation.navigate(routes.OTP, { otp: data.message, id: id });
      navigation.navigate( routes.OTP, {otp: data.message, id: id,fp:fp , new_forget : new_forget})
    } else {
      const errorData = await response.json();
      console.error('Error sending verification email:', errorData.message);
      alert('Error sending verification email. Please try again.');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    alert('Error sending verification email. Please check your network connection.');
  }
};

const checkCred = () => {
  if (email.endsWith("@student.csulb.edu")) {
    sendOTP();
  } else {
    alert("Please use CSULB email address");
  }
};

  
  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
      }} 
      style={[keyboardOn ? styles.containerWithKeyboard : styles.container]}
      >
      { keyboardOn ? null : <Image style={styles.logo} source={require("../../assests/Yticon.png")} />}

      <View style={styles.prompt}>
        <Text style={styles.pText}>
          Please enter your CSULB email below:
        </Text>
        <Text style={{ fontSize: 10, textAlign: 'center', fontStyle: "italic", fontFamily: "Helvetica" }}>
          Note: Only CSULB emails can sign up.
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          onFocus={ () => setKeyboardOn(true)}
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={"#000000"}
          onChangeText={(email) => setEmail(email)}
          onBlur={() => {
            setKeyboardOn(false);
          }}
        />
      </View>
      <Button
        title="CONFIRM"
        onPress={() => checkCred()} // navigation.navigate 
      />
      
        
   
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 30,
  },
  containerWithKeyboard:{
    paddingTop: '20%',
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    rowGap: 30,
    
  },
  inputView: {
    backgroundColor: color.yellow,
    borderRadius: 30,
    width: "80%",
    height: "7%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  TextInput: {
    height: 50,
    width: "80%",
    textAlign: 'center',
    flex: 1,
    padding: 10,
    fontSize: 15,
    fontFamily: "Helvetica"
  },
  prompt: {
    height: "20%",
    width: "80%",
    backgroundColor: "white",
    borderColor: color.yellow,
    borderWidth: 5,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  pText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: "Helvetica"
  },
  logo: {
    height: "25%",
    width: "38%",
  },
});



