import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: 'red' }} />
      <View style={{ height: 70, backgroundColor: 'red' }} />
      <View style={{ flex: 1, backgroundColor: 'blue' }} />
      <View style={{ height: 70, backgroundColor: 'black' }} />
      <SafeAreaView style={{ backgroundColor: 'black' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
