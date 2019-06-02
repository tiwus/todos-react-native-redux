import React from "react";
import { 
  Text,
  TouchableOpacity,
} from "react-native";

const FooterLink = ({text}) => (
  <TouchableOpacity 
    style={{
      justifyContent: 'center', 
      alignItems: 'center',
      width: '33.3%',
      height: 50,
      backgroundColor: '#0000cc'
    }}
  >
    <Text style={{color: 'white'}}>{text}</Text>
  </TouchableOpacity>
  )
export default FooterLink;
