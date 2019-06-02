import React from "react";
import { 
  View,
  StyleSheet
} from "react-native";
import FooterLink from '../components/FooterLink';

const Footer = (props) => (
  <View style={styles.container}>
    <FooterLink text="ALL" />
    <FooterLink text="Active" />
    <FooterLink text="Completed" />
  </View>
  )
export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});