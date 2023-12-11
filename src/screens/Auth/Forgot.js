import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity,Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';

export default function Forgot({ navigation }) {
  const [email, setEmail] = useState("");

  // const apiEndPoint = 'http://0.0.0.0:3000/api';
  const apiEndPoint = 'http://0.0.0.0:3000/api';

  const sendOTP = async () => {
    console.log("THIS IS THE EMAIL: ", email);
    try {
      const id = email.toLowerCase();
      const fp = "change";
      const new_forget = "changePassword";
      const response = await fetch(`${apiEndPoint}/send-verification-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          fp,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        navigation.navigate(routes.OTP, { otp: data.message, redirect: routes.PASSWORD, id: id.toLowerCase(), fp: fp, new_forget: new_forget });
      }
    } catch (err) {
      console.log("abe");
      console.log(err);
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
    <View style={styles.container}>
      {/* inserting the logo */}
      <Image style={styles.image} source={require('../../assests/Yticon.png')} />
      {/* email design */}

      <View style={styles.prompt}>
        <Text style={styles.ptext}>
          Please enter your CSULB email below:
        </Text>
      </View>

      <View style={styles.inputContain}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor={"#000000"}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <TouchableOpacity onPress={() => checkCred()} style={styles.loginbtn}>
          <Text style={styles.loginText}>Confirm </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 45,
  },
  image: {
    height: "25%",
    width: "38%",
  },
  inputView: {
    backgroundColor: color.yellow,
    borderRadius: 30,
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  loginbtn: {
    width: "30%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color.yellow,
    borderWidth: 1,
    borderColor: "white",
  },
  loginText: {
    color: "black",
  },
  inputContain: {
    height: "30%",
    width: "90%",
    rowGap: 20,
    alignItems: "center",
  },
  prompt: {
    height: "10%",
    width: "80%",
    backgroundColor: "white",
    borderColor: color.yellow,
    borderWidth: 5,
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  ptext: {
    textAlign: 'center',
    fontSize: 15,
  }
});
