import {React, useEffect, useState} from 'react';
import { Button, SafeAreaView, View,StatusBar, StyleSheet, TouchableHighlight, Image,Text, TouchableOpacity} from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
import * as ImagePicker from "expo-image-picker";
import { Linking } from 'react-native';

//Account setting page where user can change password or change profile pic


function AccountSetting({navigation}) {

    const[image, setImage] = useState(null);

    const [perm, setPerm] = useState(null);
    
    useEffect(() =>{
            (async()=> {
                if(Platform.OS === "ios"){
                    const {status} = ImagePicker.requestMediaLibraryPermissionsAsync();
                    if(status !== "granted"){
                        alert("Permission not granted")
                        setPerm(false)
                    }
                    else{
                        setPerm(true)
                    }
                }
            })();
        }, [])
    
        console.log("perm", perm);
    const pickImage = async() =>{
        
        
        if(perm){
            let picture = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true
            })
            console.log("result", picture)


            if(!picture.canceled){
                setImage(picture.uri)
            }
        }
        else{
            Linking.openSettings();
        }
    }

    return (

        <SafeAreaView style ={styles.back}>

            <View style ={styles.mainBorder}>

                <View style ={styles.imageBorder}>
                    <Image  style ={styles.logo}
                    source={image} //our logo
                />
                </View>
                    <Button 
                    title="Change Password" //change password button
                    onPress={()=> navigation.navigate(routes.NEW_PASSWORD)} />
                <View style ={styles.settingBorder}>
                    
                
                
                <Button 
                    title = "Change Profile Picture" //change picture button
                    onPress={pickImage}
                />
                </View>
                
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    back:{ //background
        backgroundColor: color.third,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
    ,
    mainBorder:{ //main border holds everything
        width:"100%",
        height:"100%",
        backgroundColor:color.primary,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    imageBorder:{ //border where the profile pic willl be placed
        width:"50%",
        height:"30%",
        borderRadius:25,
        backgroundColor: color.third,
    },
    settingBorder:{ //border for the options to change password or picture
        width: "100%",
        height:"30%",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    logo:{
        flex:1,
        width:'100%'
    }

})

export default AccountSetting;