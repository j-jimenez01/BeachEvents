import React from 'react';
import { Button, SafeAreaView, View,StatusBar, StyleSheet, TouchableHighlight, Image,Text, TouchableOpacity} from 'react-native';
import colors from '../../config/colors';



function AccountSetting({navigation}) {
    return (
        //Fix image touchable, can be touched outside the box in the sides

        <SafeAreaView style ={styles.back}>

            <View style ={styles.mainBorder}>
                <View style ={styles.imageBorder}>
                    
                </View>

                <View style ={styles.settingBorder}>
                    
                    <Button 
                    title = "Change Password"
                    backgroundColor={colors.third}
                    onPress={() => navigation.navigate('ChangePassword')
                    }
                    />
                    <Button 
                    title = "Change Profile Picture"
                    backgroundColor={colors.third}
                    onPress={() => console.log("Change Profile Pic")
                    }
                />
                </View>
                
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    back:{
        backgroundColor: colors.third,
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    textBorder:{
        width:"75%",
        height:"100%",
        backgroundColor: colors.secondary,
        alignItems:"flex-start",
        justifyContent:"center",
    },
    mainBorder:{
        width:"100%",
        height:"100%",
        backgroundColor:colors.primary,
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    imageBorder:{
        width:"50%",
        height:"30%",
        borderRadius:25,
        backgroundColor: colors.third,
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