import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { LogNav } from './src/screens';
import color from './src/config/color';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" barStyle="light"/>
      <LogNav/>
    </NavigationContainer>
  );
}