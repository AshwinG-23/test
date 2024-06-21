import { useState } from "react";
import React from "react";
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet,SafeAreaView,Button,TextInput } from "react-native";
export default function App(){
    const [otpCode,setotpCode] = useState("");
    
    const navigation = useNavigation();
    return(
        <SafeAreaView style={{flex:1}}>
          <View style={style.container}>
            <View style={style.containerUpper}>
              <Text style={{
                fontSize:40,
                fontWeight:"bold",
                color:"black"
              }}>Enter the otp sent on </Text>
            </View>
            <View style={style.containerBottom}>
              <TextInput style={style.inputLabel}
              placeholder="OTP"
              placeholderTextColor={"black"}
              value={otpCode}
              onChangeText={newText=> setotpCode(newText)}></TextInput>
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
        padding:30
      },
      containerUpper:{
        paddingVertical:30
      },
      containerBottom:{
        backgroundColor:"lightgrey",
        width:"100%",
        marginBottom:20,
        borderRadius:5,
      },
      inputLabel:{
        paddingHorizontal:50,
        paddingVertical:10,
      },
    })