import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Button } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
import { ceil } from 'react-native-reanimated';


export default function Register({navigation}){
  //initialize the variables
    const [code,setCode] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
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
          placeholder="Confirmation Code"
          placeholderTextColor={"#000000"}
          secureTextEntry={true}
          onChangeText={(code) => setCode(code)}
          />
          </View>

        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor={"#000000"}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          />
        </View>
        {/* confirm pw */}
        <View style={styles.inputView}>
          <TextInput
          style={styles.TextInput}
          placeholder='Confirm Password'
          placeholderTextColor={'#000000'}
          secureTextEntry={true}
          onChange={(confirmPassword)=>setConfirmPassword(confirmPassword)}/>
        </View>

      </View>
      
      <Button
          title='Confirm'
          onPress={()=> navigation.navigate(routes.ACCOUNT_SETTINGS)}
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