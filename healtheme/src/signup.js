import React from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Dimensions,Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import healthemelogo from "../assets/healthme.png";
import { useState } from "react";
import axios from "axios";
const { width } = Dimensions.get('window');

const Signup = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object
   const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginPress = () => {
    // Navigate to the login screen when the "Login" link is pressed
    navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
  };
    const handleSignup = () => {
      const user = {
      name: name,
      email: email,
      password: password,
      
    };
    // send a POST  request to the backend API to register the user
    axios
      .post("http://localhost:8000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
        
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };

    

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={healthemelogo} />

     
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Signup</Text>
      </View>

    <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
        placeholder="Full Name"
      />
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
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Signup</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginLink} onPress={handleLoginPress}>
        <Text style={styles.loginLinkText}>Already have an account? Login</Text>
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
  signupButton: {
    width: width * 0.8,
    height: 50,
    backgroundColor: '#87CEEB',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 10,
  },
  loginLinkText: {
    color: '#007AFF', 
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default Signup;
