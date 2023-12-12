import {React, useEffect, useState} from 'react';
import { Button, SafeAreaView, View,StatusBar, StyleSheet, TouchableHighlight, Image,Text, TouchableOpacity, LogBox} from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';
import * as ImagePicker from "expo-image-picker";
import { Linking } from 'react-native';
import { Alert } from 'react-native';

//Account setting page where user can change password or change profile pic


function AccountSetting({navigation}) {

    const[image, setImage] = useState(null);

    const [perm, setPerm] = useState(null);
    const [permCam, setCamPerm] = useState(null);


    const [imgUrl, setImgUrl] = useState(false);


    
    useEffect(() =>{
            (async()=> {
                if(Platform.OS === "ios"){
                    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    console.log("status:",status);
                    if(status !== "granted"){
                        setPerm("denied");
                        alert("Permission not granted")
                        console.log("perm:",perm)
                    }
                    else{
                        setPerm("granted");
                        console.log("perm:",perm)
                    }
                }
            })();
            // const {status} = ImagePicker.requestMediaLibraryPermissionsAsync();

        }, []);

    useEffect(() =>{
            (async()=> {
                if(Platform.OS === "ios"){
                    const {status} = await ImagePicker.requestCameraPermissionsAsync();
                    console.log("status:",status);
                    if(status !== "granted"){
                        setCamPerm("denied");
                        alert("Permission not granted")
                        console.log("perm:",permCam)
                    }
                    else{
                        setCamPerm("granted");
                        console.log("perm:",permCam)
                    }
                }
            })();
            // const {status} = ImagePicker.requestMediaLibraryPermissionsAsync();

        }, []);
        

    const access = async()=> {useEffect(() =>{
        (async()=> {
            const {status} = await ImagePicker.getMediaLibraryPermissionsAsync();
            setPerm(status);
            console.log("new status:", status);
            console.log("new perm:", perm);
        })();
    })};

    const accessCam = async()=> {useEffect(() =>{
        (async()=> {
            const {status} = await ImagePicker.getCameraPermissionsAsync();
            setCamPerm(status);
            console.log("new status:", status);
            console.log("new perm:", permCam);
        })();
    })};



    const pickImage = async() =>{
        
        
        if(perm == "granted"){
            let picture = await ImagePicker.launchImageLibraryAsync({
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true
            })
            console.log("result", picture)


            if(!picture.canceled){
                setImgUrl(true)
                setImage(picture.uri)
            }
        }
        else{
            Linking.openSettings();
            access();
            
    }}
    const camImage = async() =>{
        
        
        if(permCam == "granted"){
            let picture = await ImagePicker.launchCameraAsync();
            console.log("result", picture)


            if(!picture.canceled){
                setImgUrl(true)
                setImage(picture.uri)
            }
        }
        else{
            Linking.openSettings();
            access();
            
    }}

    

    return (


        <SafeAreaView style ={styles.mainBorder}>
            <View style= {styles.pfp}>

                <View style ={styles.imageBorder}>
                    
                        <Image  style ={styles.logo}
                        source={imgUrl ? {uri: image}: require("../../assests/user.png")} //our logo
                />
                </View>
                <View style= {styles.camera}>
                    <TouchableOpacity style={styles.click} onPress={camImage}>
                        <Image style={styles.icon} source={require("../../assests/camera.png")}/>
                    </TouchableOpacity>
                </View>


                </View>
                   
                <View style ={styles.settingBorder}>
                    
                 <Button 
                    title="Change Password" //change password button
                    onPress={()=> navigation.navigate(routes.FORGOT_PASSWORD)} />
                
                <Button 
                    title = "Change Profile Picture" //change picture button
                    onPress={pickImage}
                />

                <Button 
                    title = "Sign Out" //change picture button
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />




                </View>                
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({

    
    mainBorder:{ //main border holds everything
        width:"100%",
        height:"100%",
        flex:1,
        backgroundColor:color.primary,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    pfp:{
        width:"63%",
        height:"35%",
        alignItems: "center"
    },
    imageBorder:{ //border where the profile pic willl be placed
        width:"90%",
        height:"90%",
        borderRadius:20,
        backgroundColor: "#ffd",
        justifyContent: 'center',
        borderWidth:2,
        borderColor: color.yellow,
        alignItems: 'center',
        paddingTop: "2.5%",
        paddingBottom: "2.5%",
        flexWrap:"nowrap"
    },
    settingBorder:{ //border for the options to change password or picture
        width: "100%",
        height:"30%",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    logo:{
        flex:1,
        width:'90%',
        height: '100%',
        borderWidth:2, 
        borderColor: color.primary,
        borderRadius: 18
    },
    camera:{
        width:"13%",
        height:"13%",
        backgroundColor:color.yellow,
        borderRadius: 20,
        position: "absolute",
        right: 12,
        bottom:12,
        alignItems:"center",
        justifyContent:"center",
        flex:1,
    },
    icon:{
        width:"80%",
        height:"80%",
        position:'absolute',
        left: 2,
        top:2,

    },
    click:{
        width:"80%",
        height:"60%",
        position:'absolute'

    }


})

export default AccountSetting;