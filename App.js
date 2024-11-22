import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

const CustomComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.centerText}>KIW KIW</Text>
      <View style={styles.boxContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3', 
  },
  centerText: {
    fontSize: 24, 
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '80%', // 
  },
  box1: {
    backgroundColor: 'lightcoral', 
    width: 100,
    height: 100,
  },
  box2: {
    backgroundColor: 'lightseagreen', 
    width: 100,
    height: 100,
  },
});

export default CustomComponent;
