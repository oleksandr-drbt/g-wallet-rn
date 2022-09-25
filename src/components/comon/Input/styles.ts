import { StyleSheet } from "react-native";

import Colors from "@/constants/Colors";

export default StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.shared.greyMiddle,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    color: Colors.shared.greyDark,
    fontWeight: '700',
    marginBottom: 5,
  },
});
