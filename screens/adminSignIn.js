import { useState } from "react";
import React from "react";
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet,SafeAreaView,Button,TextInput } from "react-native";
export default function App(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex:1}}>
          <View style={style.container}>
            <View style={style.containerUpper}>
              <Text style={{
                fontSize:40,
                fontWeight:"bold",
                color:"black"
              }}>Admin Login</Text>
            </View>
            <View style={style.containerBottom}>
              <TextInput style={style.inputLabel}
              placeholder="Email"
              placeholderTextColor={"black"}
              value={email}
              onChangeText={newText=> setEmail(newText)}></TextInput>
              <TextInput style={style.inputLabel}
              placeholder="Password"
              placeholderTextColor={"black"}
              value={password}
              onChangeText={newText=> setPassword(newText)}></TextInput>
            </View>
            <View>
              <Button title="Verify" onPress={() => navigation.navigate('Home')}/>
            </View>  
          </View>
        </SafeAreaView>
        );
}
    const style = StyleSheet.create({
      container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:30,
      },
      containerUpper:{
        paddingVertical:30
      },
      containerBottom:{
        width:"100%",
        marginBottom:20,
        
      },
      inputLabel:{
        paddingHorizontal:50,
        paddingVertical:10,
        backgroundColor:"lightgrey",
        borderRadius:15,
        margin:10
      },
    })