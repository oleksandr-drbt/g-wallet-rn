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
  actions: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    marginVertical: 10,
    backgroundColor: Colors.shared.greyMiddle,
    borderRadius: 10,
  },
  rightActionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    top: 0,
    width: 75,
  },
  rightActionButtonLeft: {
    right: 75,
  },
  rightActionButtonRight: {
    right: 0,
  },
});
