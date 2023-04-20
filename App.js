import { NavigationContainer } from '@react-navigation/native';
import colors from './src/config/colors.js';
import { StatusBar } from 'expo-status-bar';
import MenuNav from './src/navigators/MenuNav.js';



export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" colors={colors.secondary} backgroundColor='black' barStyle="dark-content"/>
      <MenuNav/>
    </NavigationContainer>
  );
}
