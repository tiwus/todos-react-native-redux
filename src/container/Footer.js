import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FooterLink from "../components/FooterLink";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../redux/actions/types";

const Footer = () => (
  <View style={styles.container}>
    <FooterLink filter={SHOW_ALL}>
      <Text style={styles.title}>ALL</Text>
    </FooterLink>
    <FooterLink filter={SHOW_ACTIVE}>
      <Text style={styles.title}>Active</Text>
    </FooterLink>
    <FooterLink filter={SHOW_COMPLETED}>
      <Text style={styles.title}>Completed</Text>
    </FooterLink>
  </View>
);

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: "white"
  }
});
