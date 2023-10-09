import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';

export default function Register({ navigation }) {
  // State variables to store user input
  const [email, setEmail] = useState('');


  // API endpoint for registration and verification
  const apiEndpoint = 'http://0.0.0.0:3000/api'; // For school

  // Function to handle sending a verification email
  const handleSendVerificationEmail = async () => {
    try {
      const response = await fetch(apiEndpoint + '/send-verification-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.ok) {
        Alert.alert('Verification Email Sent', 'Please check your email for a verification code.');
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message);
      }
    } catch (error) {
      console.error('Sending verification email failed:', error);
      Alert.alert('Error', 'An error occurred while sending the verification email.');
    }
  };

  

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assests/Yticon.png")} />

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
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor={"#000000"}
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <Button
        title='Confirm'
        onPress={() => {
          handleSendVerificationEmail();
          navigation.navigate(routes.CONFIRM,{email});
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 50,
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



