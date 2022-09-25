import { ActivityIndicator, Button as DefaultButton } from "react-native";

import { View } from "../../Themed";
import styles from "./styles";

type ButtonProps = DefaultButton['props'] & {
  showLoader?: boolean;
}

export default function Button(props: ButtonProps) {
  const { showLoader, ...otherProps } = props;

  return (
    <View style={styles.container}>
      <DefaultButton {...otherProps} />
      {showLoader && <ActivityIndicator />}
    </View>
  );
}
