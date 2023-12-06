import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { LogNav } from './src/screens';

//The main file that runs the entire app

export default function App() {
  return (
    <NavigationContainer //creates a navigator contailer that allows navigators to be used and keeps track of the navigation history
    >
      <StatusBar style="auto" barStyle="light" // changes the status bar of the phone to look white
      />
      <LogNav  //Login navigator, contains all navigators and screens
      />
    </NavigationContainer>
  );
}