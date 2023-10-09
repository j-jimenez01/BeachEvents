import {React, useState} from 'react';
import { SafeAreaView,View, Text, StyleSheet,Button,Image,Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
//Login page where you will enter email and password or be able to sign up or make a new password

function Login(props) {
  {/*initializes the keywords that will be used to store info*/}
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // API endpoint for authenticate
  const apiEndpoint = 'http://0.0.0.0:3000/api';

  const handleLogin = async () => {
    try {
      // send post request to authenticate the user
      const response = await fetch(apiEndpoint+'/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Authentication successful, navigate to the home page
        navigation.navigate(routes.MENU_NAVIGATOR);
      } else {
        const errorData = await response.json();
        // Display an error message to the user (enters invalid email or password)
        Alert.alert('Login Failed',"Invalid Email or Password.");
        console.error('Authentication failed:', errorData.message);
      }
    } catch (error) {
      // Handle any unexpected errors that occur during authentication
      console.error('Authentication failed:', error);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo}
        source={ require("../../assests/Yticon.png")} //our logo
      />
      <View style={styles.input}>
        <View style={styles.bubble}>
        <TextInput
          placeholder='Email' //bubble to enter email
          placeholderTextColor={color.primary}
          onChangeText={ (email) => setEmail(email)}//stores the users input to email
        />

        </View>
        <View style={styles.bubble} >
        <TextInput
          placeholder='Password' //bubble for password
          placeholderTextColor={color.primary}
          onChangeText={(password) => setPassword(password)} //stores user's input to password
          secureTextEntry={true} // Mask the password input
        />

        </View>
        <View resizeMethod="contain" style ={styles.extra}>
          <Button
            title='Sign Up' //Button to sign up, will redirect to sign up page when clicked on
            onPress={()=> navigation.navigate(routes.REGISTER)} />
          
          <Button
            title='Forgot Password' //Button if you forgot your password, will redirect to Forgot page when clicked on
            onPress={()=> navigation.navigate(routes.FORGOT_PASSWORD)} />
          
        </View>
      </View>

        <View style={styles.login}// Login button, will redirect to the home page when clicked
        >
          {/* <Button color={"black"}  title='Login' onPress={() => navigation.navigate(routes.MENU_NAVIGATOR)}>  */}
          <TouchableOpacity  onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>

          {/* </Button> */}
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{ //background
    flex:1,
    backgroundColor: "#171717",
    alignItems:"center",
    justifyContent:"space-evenly",

  },
  logo:{ //logo dimensions
    height: "25%",
    width:"40%",

  },
  input:{  //border for input bubbles
    width:"80%",
    height:"36%",
    backgroundColor: "lightgrey",
    borderWidth:2,
    borderColor: "#FDB813",
    alignItems:"center",
    borderRadius:25,
    justifyContent:"space-evenly",
  },
  extra:{ // border for sign up and forgot paswword
    width:"80%",
    height:"15%",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"row"
  },
  bubble:{ // user input bubble
    width:"99%",
    height:"20%",
    backgroundColor: "#FFAD01",
    borderRadius:25,
    borderWidth:1,
    borderColor: color.primary,
    alignItems:"center",
    justifyContent:"center",
    
  },

  login:{ // login button
    width:"30%",
    height:"6%",
    borderRadius:25,
    backgroundColor: "#FFAD01",
    alignItems:"center",
    justifyContent:"center",
  },
  Logtext:{
    fontSize: 15,
    color:"black"
  },
})

export default Login;