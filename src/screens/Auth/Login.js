import {React, useState} from 'react';
import { SafeAreaView,View, Text, StyleSheet,Button,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
//Login page where you will enter email and password or be able to sign up or make a new password

function Login(props) {
  {/*initializes the keywords that will be used to store info*/}
  const {navigation} = props;
  const [email, setEmail] =useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMethod = "contain" style={styles.logo}
        source={ require("../../assests/icon.png")} //our logo
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

        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate(routes.MENU_NAVIGATOR)} // Login button, will redirect to the home page when clicked
        >
          <Text>Login 

          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{ //background
    flex:1,
    backgroundColor: color.primary,
    alignItems:"center",
    justifyContent:"space-evenly",

  },
  logo:{ //logo dimensions
    height: "20%",
    width:"30%",
  },
  input:{  //border for input bubbles
    width:"90%",
    height:"40%",
    backgroundColor: "lightgrey",
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
    width:"100%",
    height:"20%",
    backgroundColor: color.third,
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center"
  },
  login:{ // login button
    width:"100%",
    height:"8%",
    borderRadius:25,
    backgroundColor: color.third,
    alignItems:"center",
    justifyContent:"center",
  }
})

export default Login;