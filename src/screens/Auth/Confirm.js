import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Button } from 'react-native';
import color from '../../config/color';


export default function Register({navigation}){
  //initialize the variables
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    return(

        <View style={styles.container}>

        <View style={styles.prompt}>
          <Text style={styles.pText}>
            Please enter your CSULB email below. </Text>
            <Text style={styles.pText}>ONLY CSULB emails can sign up.</Text>
         
        </View>

       
      {/* password design */}
      <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Password"
        placeholderTextColor={"#000000"}
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        />
      </View>
      {/* confirm email */}
      <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder='Confirm Password'
        placeholderTextColor={'#000000'}
        secureTextEntry={true}
        onChange={(confirmPassword)=>setConfirmPassword(confirmPassword)}/>
      </View>
      <Button
          title='Confirm'
          onPress={()=> navigation.goBack()}
      />
        </View>
    )
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,//changing background color
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      inputView:{
        backgroundColor: '#c97b06', //bubble design
        borderRadius:30,
        width:"70%",
        height:45,
        marginBottom:20,
        alignItems:"center",
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
        backgroundColor:"lightgrey",
        borderRadius:25,
        alignContent: 'center',
        justifyContent: 'center',
      },
      pText:{
        fontSize:20,
        textAlign:'center'
      },

})