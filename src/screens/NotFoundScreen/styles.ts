import { StyleSheet } from "react-native";

import Styles from "@/constants/Styles";
import Colors from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    ...Styles.container,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: Colors.light.tint,
  },
});
