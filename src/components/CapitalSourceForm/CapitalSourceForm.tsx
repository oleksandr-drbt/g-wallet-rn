import { useState } from "react";

import i18n from "@/localization/i18n";
import Colors from "@/constants/Colors";
import { View } from "../Themed";
import Input from "../comon/Input";
import Button from "../comon/Button";
import styles from "./styles";

interface CapitalSourceFormProps {
  isLoading: boolean;
  submitText: string;
  onSubmit: (name: string, amount: number) => void;
}

export default function CapitalSourceForm(props: CapitalSourceFormProps) {
  const { isLoading, submitText, onSubmit } = props;

  const [name, setName] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const isDisabled = isLoading || (!name || !amount);

  const handleSubmit = () => {
    onSubmit(name.trim(), +amount);
  };

  return (
    <View style={styles.container}>
      <Input
        label={i18n.t('capital.add.name.label')}
        value={name}
        onChangeText={setName}
        placeholder={i18n.t('capital.add.name.placeholder')}
        editable={!isLoading}
      />
      <Input
        label={i18n.t('capital.add.amount.label')}
        value={amount}
        onChangeText={setAmount}
        placeholder={i18n.t('capital.add.amount.placeholder')}
        editable={!isLoading}
        keyboardType="numeric"
      />
      <Button
        color={Colors.light.tint}
        title={submitText}
        disabled={isDisabled}
        showLoader={isLoading}
        onPress={handleSubmit}
      />
    </View>
  );
}
