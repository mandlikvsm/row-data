import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import Home from './Screens/Home';
//import Home1 from './Screens/Home1';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Screen1 from './Screens/Screen1';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Home from './components/Home';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name='Home' component={Home}/>
  <Stack.Screen name='Screen1' component={Screen1}/>
  <Stack.Screen name='Screen2' component={Screen2}/>



</Stack.Navigator>

    </NavigationContainer>
   
  );
}


