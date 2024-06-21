import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';

export default function App() {
  const [confirm, setConfirm] = useState(null);
  const [userName, setUserName] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const navigation = useNavigation();

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(otpCode);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.containerUpper}>
          <Text style={styles.titleText}>Login Using Phone number</Text>
        </View>
        <View style={styles.containerBottom}>
          <TextInput
            style={styles.inputLabel}
            placeholder="Phone Number"
            placeholderTextColor={"black"}
            value={userName}
            onChangeText={newText => setUserName(newText)}
          />
        </View>

        {confirm ? (
          <View>
            <View style={styles.containerBottom}>
              <TextInput
                style={styles.inputLabel}
                placeholder="Code"
                placeholderTextColor={"black"}
                value={otpCode}
                onChangeText={newText => setOtpCode(newText)}
              />
            </View>
            <View>
              <Button title="Verify" onPress={confirmCode} />
            </View>
          </View>
        ) : (
          <View>
            <Button title="Send code" onPress={() => signInWithPhoneNumber(userName)} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  containerUpper: {
    paddingVertical: 30
  },
  containerBottom: {
    backgroundColor: "lightgrey",
    width: "100%",
    marginBottom: 20,
    borderRadius: 5,
  },
  inputLabel: {
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black"
  }
});
