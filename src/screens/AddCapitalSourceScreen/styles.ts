import { StyleSheet } from "react-native";

import Styles from "@/constants/Styles";
import Colors from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    ...Styles.container,
  },
  header: {
    backgroundColor: Colors.light.tint,
  },
  headerTitle: {
    fontWeight: 'bold',
  },
});
