import React,{useState} from 'react';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView, Button } from 'react-native';
import color from '../../config/color';
import { ceil } from 'react-native-reanimated';
import routes from '../../config/routes';


export default function Register({navigation}){
  //initialize the variables
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    return(

        <View style={styles.container}>

          <Image style={styles.logo}
                  source={ require("../../assests/Yticon.png")} //our logo
                />
        <View style={styles.prompt}>
          <Text style={styles.pText}>
            Please enter your CSULB email below: </Text>
            <Text style={{fontSize:10, textAlign:'center', fontStyle:"italic",fontFamily:"Helvetica"
}}>Note: Only CSULB emails can sign up.</Text>
         
        </View>

        <View style={styles.inputView}>
        <TextInput //input bubble for email
        style={styles.TextInput}
        placeholder="Email"
        placeholderTextColor={"#000000"}
        onChangeText={(email) => setEmail(email)}
        />
      </View>
     
      <Button
          title='Confirm'
          onPress={()=> navigation.navigate(routes.CONFIRM)}
      />
        </View>
    )
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.primary,//changing background color
        alignItems: 'center',
        justifyContent: 'center',
        rowGap:50,
      },
      inputView:{
        backgroundColor: color.yellow, //bubble design
        borderRadius:30,
        width:"80%",
        height:"7%",
        alignItems:"center",
        borderWidth:1,
        borderColor:"white",
      },
      TextInput:{ //font design
        height: 50,
        flex:1,
        padding:10,
        fontSize:15,
        fontFamily:"Helvetica"
      },
      prompt:{
        height: "20%",
        width:"80%",
        backgroundColor:"white",
        borderColor:color.yellow,
        borderWidth:5,
        borderRadius:10,
        alignContent: 'center',
        justifyContent: 'space-evenly',

      },
      pText:{
        fontSize:20,
        textAlign:'center',
        fontFamily:"Helvetica"

      },
      logo:{ //logo dimensions
        height: "25%",
        width:"38%",
    
      },

})