import React,{useState} from 'react';
import { Button, View } from 'react-native';
import { SafeAreaView,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../../config/colors';



export default function ChangePassword(props) {
    const [oldPass,setOldPass] = useState('');
    const [newPass,setNewPass] = useState('');
    const [repeatPass,setRepeatPass] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.5, width: "100%",alignItems:"center", justifyContent:"space-evenly"}}>
                <View style={styles.inputView}>

                    <TextInput
                        style={styles.TextInput}
                        placeholder="Current Password"
                        placeholderTextColor={"#000000"}
                        onChangeText={(oldPass) => setOldPass(oldPass)}
                    />
                </View>
                <View style={styles.inputView}>

                    <TextInput
                        style={styles.TextInput}
                        placeholder="New Password"
                        placeholderTextColor={"#000000"}
                        onChangeText={(newPass) => setNewPass(newPass)}
                    />
                </View>
                <View style={styles.inputView}>

                    <TextInput
                        style={styles.TextInput}
                        placeholder="New Password Again"
                        placeholderTextColor={"#000000"}
                        onChangeText={(repeatPass) => setRepeatPass(repeatPass)}
                    />
                </View>
            <View style={styles.confirmButton}>
                <Button
                title="Confirm"
                onPress ={() => console.log("Confirm")}
                />
            </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.primary,
        alignItems:"center",
        justifyContent:"center",
    },
    TextInput:{
        flex:1,
        padding:10,
        marginLeft:20,
    },
    confirmButton:{
        width:"90%",
        height:"18%",
        borderRadius:25,
        backgroundColor: colors.third,
        alignItems:"center",
        justifyContent:"center"
    },
    inputView:{
        backgroundColor: colors.third,
        height:"15%",
        borderRadius:30,
        width:"80%",
        alignItems:"center",
        justifyContent:"center"
      },
});
