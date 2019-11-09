import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BooksReadScreen = props => (
  <View style={styles.container}>
    <Text>BooksReadScreen</Text>
  </View>
);

export default BooksReadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
