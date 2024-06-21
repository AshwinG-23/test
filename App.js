import { createNativeStackNavigator } from "@react-navigation/native-stack";
import signInScreen from "./screens/signInScreen"
import codeScreen from "./screens/codeScreen"
import homeScreen from "./screens/homeScreen"
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name='SignIn' component={signInScreen}></Stack.Screen>
        <Stack.Screen name='Code' component={codeScreen}></Stack.Screen>
        <Stack.Screen name="Home" component={homeScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );  
}