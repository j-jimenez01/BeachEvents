import React from 'react';
import { Button, SafeAreaView, View,StatusBar, StyleSheet, TouchableHighlight, Image,Text, TouchableOpacity} from 'react-native';
import color from '../../config/color';
import routes from '../../config/routes';




function AccountSetting({navigation}) {
    return (

        <SafeAreaView style ={styles.back}>

            <View style ={styles.mainBorder}>

                <View style ={styles.imageBorder}>
                </View>
                    <Button 
                    title="Change Password" 
                    onPress={()=> navigation.navigate(routes.NEW_PASSWORD)} />
                <View style ={styles.settingBorder}>
                    
                
                
                <Button 
                    title = "Change Profile Picture"
                    onPress={() => navigation.navigate(routes.HOME)
                    }
                />
                </View>
                
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    back:{
        backgroundColor: color.third,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    textBorder:{
        width:"75%",
        height:"100%",
        backgroundColor: color.secondary,
        alignItems:"flex-start",
        justifyContent:"center",
    },
    mainBorder:{
        width:"100%",
        height:"100%",
        backgroundColor:color.primary,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    imageBorder:{
        width:"50%",
        height:"30%",
        borderRadius:25,
        backgroundColor: color.third,
    },
    settingBorder:{
        width: "100%",
        height:"30%",
        alignItems:"center",
        justifyContent:"flex-start",
    },
    line:{
        height:"80%",
        width:"80%",
        left:"10%",
        
    },
    titleText:{
        fontSize : 30,
        fontWeight: "300",
        color:"white"
    },
})

export default AccountSetting;