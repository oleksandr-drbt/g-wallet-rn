import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { Text, View } from "../../Themed";
import Colors from "../../../constants/Colors";
import styles from "./styles";

interface BackButtonProps {
  title: string;
  color: string;
  showIcon: boolean;
}

export default function BackButton(props: Partial<BackButtonProps>) {
  const { title = 'Back', color = Colors.shared.white, showIcon } = props;

  const navigation = useNavigation();

  const goBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity onPress={goBack}>
      <View style={styles.button}>
        {showIcon && <AntDesign style={styles.icon} name="arrowleft" color={color} size={16} />}
        <Text style={{ ...styles.text, color: color }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
