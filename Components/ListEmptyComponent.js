import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import colors from "../assets/colors";

const ListEmptyComponent = ({ text }) => (
  <View style={styles.ListEmptyComponent}>
    <Text style={styles.ListEmptyComponentText}>{text}</Text>
  </View>
);

ListEmptyComponent.propTypes = {
  text: PropTypes.string.isRequired
};

export default ListEmptyComponent;

const styles = StyleSheet.create({
  ListEmptyComponent: {
    marginTop: 50,
    alignItems: "center"
  },
  ListEmptyComponentText: {
    fontWeight: "bold",
    color: colors.txtWhite
  }
});
