import { StyleSheet } from "react-native";

import Colors from "@/constants/Colors";

export default StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: Colors.shared.greyDark,
  },
  title: {
    color: Colors.shared.greyLight,
    fontSize: 14,
    fontWeight: '500',
  },
  sum: {
    color: Colors.shared.white,
    fontSize: 20,
    fontWeight: '800',
  },
});
