import { StyleSheet } from "react-native";
import Styles from "../../constants/Styles";

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
});
