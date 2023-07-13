/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet,TouchableOpacity, Text} from 'react-native';

export default function MenuButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.menuContainer}>
        <Text style={styles.menuText}>Menü</Text>
      </View>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 50,
    backgroundColor: '#F7F6FB',
    margin: 10,
  },
  menuContainer: {
    width: 350,
    height: 670,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
