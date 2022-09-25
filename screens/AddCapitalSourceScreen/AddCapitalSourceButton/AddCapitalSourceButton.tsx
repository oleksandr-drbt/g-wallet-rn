import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import useColorScheme from "../../../hooks/useColorScheme";
import Colors from "../../../constants/Colors";
import styles from "./styles";

export default function AddCapitalSourceButton() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  const openModal = () => {
    navigation.navigate('AddCapitalSourceModal');
  };

  return (
    <TouchableOpacity onPress={openModal}>
      <AntDesign name="pluscircleo" size={24} color={Colors[colorScheme].text} style={styles.icon} />
    </TouchableOpacity>
  );
}
