import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Button,Alert } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
import { ceil } from 'react-native-reanimated';


export default function Register({navigation,route}){
  //initialize the variables
    const [verificationCode, setVerificationCode] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const {email} = route.params;

    // API endpoint for registration and verification
    const apiEndpoint = 'http://0.0.0.0:3000/api'; // For school

    const handleRegister = async () => {
      try {
        // Check if the password and confirm password match
        if (password !== confirmPassword) {
          Alert.alert('Password Mismatch', 'Password and Confirm Password do not match.');
          return;
        }
  
        const response = await fetch(apiEndpoint + '/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            verificationCode,
          }),
        });
  
        if (response.ok) {
          // Registration successful, navigate to the next screen
          Alert.alert('Registration Succesful', 'Sign in.');
          navigation.goBack();
        } else {
          const errorData = await response.json();
          Alert.alert('Registration Error', errorData.message);
        }
      } catch (error) {
        console.error('Registration failed:', error);
        Alert.alert('Registration Error', 'An error occurred during registration.');
      }
    };
    return(

        <View style={styles.container}>

          <Image style={styles.logo}
                            source={ require("../../assests/Yticon.png")} //our logo
                          />

        <View style={styles.prompt}>
          <Text style={styles.pText}>
            A 5 digit code has been sent to the email entered.
            Please enter the code and the password.
             </Text>
            <Text style={{fontSize: 10, textAlign:'center',fontStyle:"italic",fontFamily:"Helvetica", marginHorizontal:10,
 }}> NOTE: Check spam folder if you can not find the email with the code</Text>
        </View>

       <View style={styles.enter}>
        {/* confirmation design */}
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Verification Code"
          placeholderTextColor={"#000000"}
          secureTextEntry={true}
          onChangeText={(text) => setVerificationCode(text)}
          />
          </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={"#000000"}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          />
        </View>
        {/* confirm pw */}
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder='Confirm Password'
          placeholderTextColor='#000000'
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
/>
        </View>

      </View>
      
      <Button
          title='Confirm'
          onPress={() => {
            handleRegister();
          navigation.navigate(routes.LOGIN);
        }}
      />
        </View>
    )
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,//changing background color
        alignItems: 'center',
        rowGap:40,
        paddingTop: 15
      },
      inputView:{
        backgroundColor: color.yellow, //bubble design
        borderRadius:30,
        width:"70%",
        height:45,
        alignItems:"center",
        borderWidth:1,
        borderColor:"white",
      },
      TextInput:{ //font design
        height: 50,
        flex:1,
        padding:10,
        marginLeft:20,
      },
      prompt:{
        height: "20%",
        width:"80%",
        backgroundColor:"white",
        borderRadius:10,
        alignContent: 'center',
        justifyContent: 'space-evenly',
        borderWidth:2,
        borderColor: color.yellow,
      },
      pText:{
        fontSize:20,
        textAlign:'center',
        fontFamily:"Helvetica",
        marginHorizontal:10,

      },
      logo:{ //logo dimensions
        height: "25%",
        width:"38%",
    
      },
      enter:{
        height: "20%",
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 10
      }

})