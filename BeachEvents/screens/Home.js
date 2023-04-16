// import { StyleSheet, Text,Button,View,Image, TextInput, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
// import React,{useState} from 'react';
// import { Octicons } from '@expo/vector-icons';

// export default function Home({navigation}) {
  
//   return (
    
//     <View>
//         <View style={styles.iconLines}>
//         <TouchableOpacity onPress={()=> navigation.push("Home")} style={styles.loginbtn}>
//           {/* <Text style={styles.loginText}>LOGIN </Text> */}
//           <Octicons name="three-bars" size={24} color="#c97b06" />

//         </TouchableOpacity>
//         </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000000',//changing background color
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconLines: {
//     //position of where it will be located from left to right
//     alignItems:'flex-start',

//   },
 
// });
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Octicons } from '@expo/vector-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
    <View style={styles.navbar}>
    {/* drop down menu */}
      <View style={styles.navbarStart}>
        <DropDownPicker
          open={isOpen}
          value={null}
          items={[
            { label: 'Homepage', value: 'homepage' },
            { label: 'Portfolio', value: 'portfolio' },
            { label: 'About', value: 'about' },
          ]}
          style={styles.dropdown}
          dropDownStyle={styles.dropdownContent}
          arrowColor="#fff"
          onChangeValue={(value) => console.log(value)}
          renderLabel={(item) => (
            <TouchableOpacity
              style={styles.btn}
              onPress={handleDropdownOpen}
              activeOpacity={0.8}
            >
              <AntDesign name="menu-fold" size={24} color="#fff" />
            </TouchableOpacity>
          )}
        />
      </View>
      {/* the center */}
      <View style={styles.navbarCenter}>
        <Text style={styles.btn}>BeachEvents</Text>
      </View>
      {/* the search icon */}
      <View style={styles.navbarEnd}>
        <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
          <AntDesign name="search1" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000000'
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f59e0b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop:35
  },
  navbarStart: {
    width: '25%',
  },
  dropdown: {
    backgroundColor: 'transparent',
  },
  dropdownContent: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#1f2937',
    borderRadius: 5,
    borderWidth: 0,
    elevation: 3,
    zIndex: 9999,
  },
  navbarCenter: {
    width: '50%',
    alignItems: 'center',
  },
  navbarEnd: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: 'transparent',
  },
  indicator: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default Navbar;