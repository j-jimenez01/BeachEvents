import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Button } from 'react-native';
import color from '../../config/color';


export default function Register({navigation}){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    return(
        <View style={styles.container}>
            <StatusBar style="auto" barStyle="light-content"/>
        <View style={styles.inputView}>
        <TextInput
        style={styles.TextInput}
        placeholder="CSULB Email"
        placeholderTextColor={"#000000"}
        onChangeText={(email) => setEmail(email)}
        />
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
        backgroundColor: '#000000',//changing background color
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputView:{
        backgroundColor: '#c97b06',
        borderRadius:30,
        width:"70%",
        height:45,
        marginBottom:20,
        alignItems:"center",
      },
      TextInput:{
        height: 50,
        flex:1,
        padding:10,
        marginLeft:20,
      },
})