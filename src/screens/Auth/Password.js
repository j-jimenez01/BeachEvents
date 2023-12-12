import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, Alert, Keyboard } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
import bcrypt from 'react-native-bcrypt'



export default function Password({ navigation, route }) {

  const {id,fp,new_forget} = route.params //fp,newfor
  const [keyboardOn, setKeyboardOn] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // API endpoint for registration and verification
  const apiEndPoint = 'http://0.0.0.0:3000/api'; // For school

  // Function to handle sending a verification email
  const  Register = async (hash) =>{
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
        password: hash
      }),
    })
    const data= await response.json()
    if (response.ok){
        alert(data.message)
        navigation.navigate(routes.LOGIN)
    }
    else{
      alert(data.message)
    }
    }catch(err){
      console.log(err)
    }
    
  };


  const checkPass = () => {
    if ((password != "") && (confirmPassword != "") && (password === confirmPassword)){ //
            bcrypt.genSalt(6, (err, salt) => {
                if (err) {
                  console.error('Error generating salt:', err);
                } else {
                  bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        console.error('Error hashing password:', err);
                    }else{
                        console.log('Hashed Password:', hash);  
                        Register(hash)
                    }
                  });
                }
              });
              
            // Register()
       
    }
    else if (password != confirmPassword){
      alert("The entered Passwords do not match")
    }
    else {
        alert("One or more fields are empty")
  };
}

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
          Enter your password and confirm it:
        </Text>
        <Text style={{ fontSize: 10, textAlign: 'center', fontStyle: "italic", fontFamily: "Helvetica" }}>
          Note: The password should be composed of minimum 8 Alpha-Numeric.
        </Text>
      </View>

      <View style={styles.inputView}>
        <TextInput
          onFocus={ () => setKeyboardOn(true)}
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={"#000000"}
          onChangeText={(pass) => setPassword(pass)}
          secureTextEntry={true}
          onBlur={() => {
            setKeyboardOn(false);
          }}
        />
        
      </View>

      <View style={styles.inputView}>
      <TextInput
          onFocus={ () => setKeyboardOn(true)}
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor={"#000000"}
          onChangeText={(confPass) => setConfirmPassword(confPass)}
          secureTextEntry={true}
          onBlur={() => {
            setKeyboardOn(false);
          }}
        />
        
      </View>
      <Button
        title="Submit"
        onPress={() => checkPass()} // navigation.navigate 
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
    rowGap: 20,
  },
  containerWithKeyboard:{
    paddingTop: '10%',
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    rowGap: 20,
    
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