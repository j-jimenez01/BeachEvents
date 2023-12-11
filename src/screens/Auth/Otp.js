import React, { useState, useRef, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {View,Keyboard,Text,SafeAreaView,StyleSheet,TextInput,TouchableOpacity,Pressable,Image,Button, Alert,
} from "react-native";
import routes from "../../config/routes";
import { useNavigation } from "@react-navigation/native"
import color from "../../config/color";



const Otp = ({navigation, route}) => {
  const {otp,id,fp,new_forget} = route.params
  const [keyboardOn, setKeyboardOn] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [isPinReady, setIsPinReady] = useState(false)
  const maxCodeLength = 6
  const boxArray = new Array(maxCodeLength).fill(0);
  const inputRef = useRef();
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);  
  
  console.log("Passed Email in OTP page:", id)
  console.log("New Forget in OTP page: ",new_forget)
  useEffect(()=> {
    setIsPinReady(otpCode.length === maxCodeLength)
    if(otpCode == otp){
      navigation.navigate(routes.PASSWORD, {id: id, fp:fp,new_forget:new_forget})
    }
    return () =>{  
      setIsPinReady(false)
    }
  }, [otpCode, otp]) 



  const boxDigit = (_, index) => {
    const emptyInput = ''
    const digit = otpCode[index] || emptyInput
    const isCurrentValue = index === otpCode.length
    const isLastValue = index === maxCodeLength - 1
    const  isCodeComplete = otpCode.length === maxCodeLength
    const isValueFocused = isCurrentValue || isLastValue && isCodeComplete

    return(
      <View style={ isInputBoxFocused && isValueFocused ?  styles.SplitBoxesFocused: styles.SplitBoxes} key={index}>
        <Text style={styles.SplitBoxText}>{digit}</Text>
      </View>
    )
  }

  const handleonPress = () => {
    setKeyboardOn(true)
    setIsInputBoxFocused(true);
    inputRef.current.focus();
  };
  const handleOnBlur = () =>{
    setKeyboardOn(false)
    setIsInputBoxFocused(false);  
  };

  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
      }} 
      style={[keyboardOn ? styles.containerWithKeyboard : styles.container]}
      >
        {/* <Text style ={styles.pageName}>{otp}</Text> */}
       
        {keyboardOn? null: <Image
          style={styles.logo}
          source={require("../../assests/icon.png")}
        />}
        <View style={styles.prompt}>
          <Text style={styles.pText}>
            Please check you CSULB email inbox to retrieve 6 digit OTP code.
          </Text>
        </View>

        <View style={styles.otpContainer}>
          <Pressable onPress={handleonPress} style={styles.SplitOTPBoxesContainer}>
            {boxArray.map(boxDigit)}
          </Pressable>
          <TextInput 
            keyboardType="numeric" 
            value={otpCode} 
            onChangeText={setOtpCode} 
            maxLength={maxCodeLength} 
            ref={inputRef} 
            onBlur={handleOnBlur} 
            style={styles.textInputHidden}
          >
          <Text/>
          </TextInput>



        </View>

        <Button style={styles.ButtonText} disabled={! isPinReady} onPress={() => {}} title="CONFIRM"></Button>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 30,
  },
  containerWithKeyboard:{
    paddingTop: '20%',
  
    flex: 1,
    backgroundColor: color.primary,
    alignItems: 'center',
    rowGap: 30,
  },
 
  textInputHidden: {
    position: "absolute", 
    opacity: 0,
  },
  otpContainer: {
    justifycontent: 'center',
    alignItems: "center",
  },
  logo: {
    height: "25%",
    width: "38%",
  },
  SplitOTPBoxesContainer:{
    width: "60%",
    gap: 35,
    minHeight: "8%",
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  prompt: {
    height: "20%",
    width: "75%",
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
  ButtonText:{
    color: "black",
    fontSize: 40,
  },

  SplitBoxesFocused:{
    borderColor: "White",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "lightgrey",
    paddingTop: 10,
    paddingBottom: 10,
    minWidth: "10%",
  },
  SplitBoxes:{
    minHeight: "10%",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 5,
    paddingTop: 12,
    paddingBottom: 10, 
    minWidth: "10%",
    backgroundColor: color.third,
  },
  SplitBoxText:{
    fontSize: 22,
    textAlign: 'center',
    color: "black"
  },
  pageName: {
    fontSize: 30,
    marginBottom: 25,
  },
});
export default Otp;






















// import React, { useState, useRef, useEffect } from "react";
// import { MaterialIcons } from "@expo/vector-icons";
// import {
//   View,
//   Keyboard,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   Pressable,
//   Image,
//   Button,
//   Alert,

// } from "react-native";
// import routes from "../../config/routes";
// import { useNavigation } from "@react-navigation/native"
// import color from "../../config/color";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";
// import parseErrorStack from "react-native/Libraries/Core/Devtools/parseErrorStack";

// const Otp = ({navigation, route}) => {
//   const {otp,id,fp,new_forget} = route.params
//   const [touched, setTouched] = useState(false)
//   const [otpCode, setOtpCode] = useState('')
//   const [isPinReady, setIsPinReady] = useState(false)
//   const maxCodeLength = 6
//   const boxArray = new Array(maxCodeLength).fill(0);
//   const inputRef = useRef();
//   const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);  
//   console.log("Passed Email in OTP page:", id)
//   console.log("New Forget in OTP page: ",new_forget)
//   useEffect(()=> {
//     setIsPinReady(otpCode.length === maxCodeLength)
//     if(otpCode == otp){
//       navigation.navigate(routes.PASSWORD, {id: id, fp:fp,new_forget:new_forget})
//     }
//     return () =>{  
//       setIsPinReady(false)
//     }
//   }, [otpCode, otp]) 



//   const boxDigit = (_, index) => {
//     const emptyInput = ''
//     const digit = otpCode[index] || emptyInput
//     const isCurrentValue = index === otpCode.length
//     const isLastValue = index === maxCodeLength - 1
//     const  isCodeComplete = otpCode.length === maxCodeLength
//     const isValueFocused = isCurrentValue || isLastValue && isCodeComplete

//     return(
//       <View style={ isInputBoxFocused && isValueFocused ?  styles.SplitBoxesFocused: styles.SplitBoxes} key={index}>
//         <Text style={styles.SplitBoxText}>{digit}</Text>
//       </View>
//     )
//   }
//   // const apiEndPoint = 'https://10.39.41.226:3000/api'
// //   const apiEndpoint = 'https://192.168.254.11:3000/api';
// //   const sendMail = async () =>{
    
// //       const response = await fetch(apiEndpoint + '/send-verification-email', {
// //         method: 'GET',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           email : "Keshav.Mehta@student.csulb.edu"
// //         }),
// //       });

// //       if (response.ok) {
// //         Alert.alert('Verification Email Sent', 'Please check your email for a verification code.');
// //       } else {
// //         const errorData = await response.json();
// //         Alert.alert('Error', errorData.message);
// //       }
   
// // };

//   const handleonPress = () => {
//     setTouched(true)
//     setIsInputBoxFocused(true);
//     inputRef.current.focus();
//   };
//   const handleOnBlur = () =>{
//     setTouched(false)
//     setIsInputBoxFocused(false);  
//   };

//   return (
//     <SafeAreaView style={{ backgroundColor: "#000000", flex: 1 }}>
//       <TouchableOpacity style={{ alignItems: "center", background: "#010101", opacity: 0.5 }}>
//         <MaterialIcons name="drag-handle" size={35} color="white" />
//       </TouchableOpacity>
      
//       <TouchableOpacity onPress={() => { Keyboard.dismiss();}}
//         style={[touched ? styles.cardwithkeyboard: styles.card]}>

//         <Text style ={styles.pageName}>{otp}</Text>
//         <Text style={styles.pageName}>OTP</Text>
//         <Image
//           style={styles.image}
//           source={require("../../assests/icon.png")}
//         />

//         <View style={styles.otpContainer}>
//           <Pressable onPress={handleonPress} style={styles.SplitOTPBoxesContainer}>
//             {boxArray.map(boxDigit)}
//           </Pressable>
//           <TextInput 
//             keyboardType="numeric" 
//             value={otpCode} 
//             onChangeText={setOtpCode} 
//             maxLength={maxCodeLength} 
//             ref={inputRef} 
//             onBlur={handleOnBlur} 
//             style={styles.textInputHidden}
//           >
//               <Text/>
//             </TextInput>



//         </View>

//         <Button disabled={! isPinReady} onPress={() => {}} title="CONFIRM"></Button>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   textInput: {
//     width: "19%",
//     height: "75%",
//     borderWidth: 1,
//     borderColor: "black",
//     justifyContent: "center",
//     borderRadius: 5,
//     backgroundColor: color.third,
//     textAlign: "center",
//   },
//   textInputHidden: {
//     position: "absolute", 
//     opacity: 0,
//   },
//   otpContainer: {
//     justifycontent: 'center',
//     alignItems: "center",
//     paddingBottom: 20,
//     // width: "100%",
//     // height: "20%",
//     // flexDirection: "row",
//     // justifyContent: "space-evenly",
//   },
//   image: {
//     height: 150,
//     width: 120,
//     marginBottom: "10%",
//     borderRadius: 10
//   },
//   SplitOTPBoxesContainer:{
//     width: "100%",
//     flexDirection: 'row',
//     justifyContent: 'space-evenly'
//   },
//   card: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "white",
//     backgroundColor: "lightgrey",
//     alignItems: "center",
//     marginLeft: 50,
//     marginRight: 50,
//     marginTop: "25%",
//     marginBottom: "45%",
//     borderRadius: 30,
//     padding: "10%",
   
//   },
//   ButtonContainer:{
//     backgroundColor: "#d8e9a8",
//     padding: 20,
//     justifyContent: "center",
//     alignItems: "center",
//     width: 200,
//     marginTop: 30,
//   },
//   ButtonText:{
//     color: "black",
//     fontSize: 20,
//   },
//   cardwithkeyboard:{
//     flex: 1,
//     borderWidth: 1,
//     borderColor: "white",
//     backgroundColor: "lightgrey",
//     alignItems: "center",
//     marginLeft: 50,
//     marginRight: 50,
//     marginBottom: "70%",
//     borderRadius: 30,
//     paddingTop: "15%",
//     paddingBottom: "15%",
//     paddingRight: '10%',
//     paddingLeft: '10%',

//   },
//   SplitBoxesFocused:{
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 5,
//     backgroundColor: "lightgrey",
//     paddingTop: 10,
//     paddingBottom: 10,
//     minWidth: "18%"
//   },
//   SplitBoxes:{
//     borderColor: "black",
//     borderWidth: 2,
//     borderRadius: 5,
//     paddingTop: 12,
//     paddingBottom: 10, 
//     minWidth: "16%",
    
//     backgroundColor: color.third,
//   },
//   SplitBoxText:{
//     fontSize: 18,
//     textAlign: 'center',
//     color: "black"
//   },
//   pageName: {
//     fontSize: 30,
//     marginBottom: 25,
//   },
// });
// export default Otp;