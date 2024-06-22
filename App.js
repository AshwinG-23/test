import { createNativeStackNavigator } from "@react-navigation/native-stack";
import signInScreen from "./screens/signInScreen"
import adminSignIn from "./screens/adminSignIn"
import codeScreen from "./screens/codeScreen"
import homeScreen from "./screens/homeScreen"
import adminHome from "./screens/adminHome"
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name='SignIn' component={signInScreen}></Stack.Screen>
        <Stack.Screen name='AdminSignIn' component={adminSignIn}></Stack.Screen>
        <Stack.Screen name="Home" component={homeScreen}></Stack.Screen>
        <Stack.Screen name="AdminHome" component={adminHome}/>
      </Stack.Navigator>
    </NavigationContainer>
  );  
}