import { Text, TextInput, TextInputProps } from "../../Themed";
import styles from "./styles";

interface InputProps extends TextInputProps {
  label?: string;
}

export default function Input(props: InputProps) {
  const { label, ...otherProps } = props;

  return (
    <>
      {label && (
        <Text style={styles.label}>
          {label}
        </Text>
      )}
      <TextInput style={styles.input} {...otherProps} />
    </>
  );
}
