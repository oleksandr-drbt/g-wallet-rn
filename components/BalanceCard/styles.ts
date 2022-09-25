import { StyleSheet } from "react-native";

import Styles from "../../constants/Styles";
import Colors from "../../constants/Colors";

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 192,
    padding: 25,
    borderRadius: 10,
    ...Styles.shadow,
  },
  currencyContainer: {
    alignSelf: 'flex-end',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.shared.greyLight,
  },
  currencyText: {
    fontSize: 12,
    color: Colors.shared.greyLight,
  },
  sum: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.shared.white,
  },
  description: {
    fontWeight: '500',
    color: Colors.shared.white,
  },
});
