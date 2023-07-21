import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import healthemelogo from "../assets/healthme.png";
import { useState ,useEffect} from "react";
import Signup from './signup';
const { width } = Dimensions.get('window');
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

  const handleRegisterPress = () => {
    // Navigate to the registration screen when the "Register" link is pressed
    navigation.navigate('Signup'); // Replace 'Registration' with the name of your registration screen
  };
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          navigation.replace("Home");
        } else {
          // token not found , show the login screen itself
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);

        navigation.replace("Home");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid email or password");
        console.log("Login Error", error);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={healthemelogo} />

      {/* Login Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Login</Text>
      </View>

      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerLink} onPress={handleRegisterPress}>
        <Text style={styles.registerLinkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  headingContainer: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#87CEEB',
    fontFamily: 'Arial',
  },
  input: {
    width: width * 0.8,
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  loginButton: {
    width: width * 0.8,
    height: 50,
    backgroundColor: '#87CEEB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerLink: {
    marginTop: 10,
  },
  registerLinkText: {
    color: '#007AFF', // Blue color for the link text
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Login;




