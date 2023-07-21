import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import healthemelogo from "../assets/healthme.png"
const Home = () => {
    return (
        < View >
            <Image style={styles.healthbg} source={healthemelogo}></Image>
            <Text>Welcome To Healtheme Start Your medications Journey. </Text>
        </View>
    )
}
export default Home
const styles = StyleSheet.create({healthbg: {
    width: 200,
    height: 200,
  },})