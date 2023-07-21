import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import healthemelogo from "../assets/healthme.png"
const Splash = () => {
    return (
        < View >
           <Image style = {styles.healthbg} source={healthemelogo}></Image>
        </View>
    )
}
export default Splash
const styles = StyleSheet.create({healthbg: {
    width: 300,
    height: 300,
  },})