import {React, useState} from 'react';
import { SafeAreaView,View, Text, StyleSheet,Button,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';

function Login(props) {
  const {navigation} = props;
  const [email, setEmail] =useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <Image resizeMethod = "contain" style={styles.logo}
        source={ require("../../assests/icon.png")}
      />
      <View style={styles.input}>
        <View style={styles.bubble}>
        <TextInput
          placeholder='Email'
          placeholderTextColor={color.primary}
          onChangeText={ (email) => setEmail(email)}
        />

        </View>
        <View style={styles.bubble} >
        <TextInput
          placeholder='Password'
          placeholderTextColor={color.primary}
          onChangeText={(password) => setPassword(password)}
        />

        </View>
        <View resizeMethod="contain" style ={styles.extra}>
          <Button
            title='Sign Up'
            onPress={()=> navigation.navigate(routes.REGISTER)} />
          
          <Button
            title='Forgot Password'
            onPress={()=> navigation.navigate(routes.FORGOT_PASSWORD)} />
          
        </View>
      </View>

        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate(routes.MENU_NAVIGATOR)}>
          <Text>Login</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor: color.primary,
    alignItems:"center",
    justifyContent:"space-evenly",

  },
  logo:{
    height: "20%",
    width:"30%",
  },
  input:{
    width:"90%",
    height:"40%",
    backgroundColor: "lightgrey",
    alignItems:"center",
    borderRadius:25,
    justifyContent:"space-evenly",

  },
  extra:{
    width:"80%",
    height:"15%",
    alignItems:"center",
    justifyContent:"space-evenly",
    flexDirection:"row"
  },
  bubble:{
    width:"100%",
    height:"20%",
    backgroundColor: color.third,
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center"
  },
  login:{
    width:"100%",
    height:"8%",
    borderRadius:25,
    backgroundColor: color.third,
    alignItems:"center",
    justifyContent:"center",
  }
})

export default Login;
