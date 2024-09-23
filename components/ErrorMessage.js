import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ErrorMessage = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffcccc',
    borderRadius: 5,
  },
  text: {
    color: 'red',
  },
});

export default ErrorMessage;