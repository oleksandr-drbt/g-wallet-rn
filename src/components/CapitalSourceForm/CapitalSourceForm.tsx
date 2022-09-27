import { useState } from "react";

import i18n from "@/localization/i18n";
import Input from "@/components/comon/Input";
import Button from "@/components/comon/Button";
import { View } from "../Themed";
import Colors from "@/constants/Colors";
import { CapitalSource } from "@/types/capital";
import styles from "./styles";

interface CapitalSourceFormProps {
  initialState?: CapitalSource;
  isLoading: boolean;
  submitText: string;
  onSubmit: (name: string, amount: number) => void;
}

export default function CapitalSourceForm(props: CapitalSourceFormProps) {
  const { initialState, isLoading, submitText, onSubmit } = props;
  const { name: initialName = '', amount: initialAmount = ''} = initialState || {};

  const [name, setName] = useState<string>(initialName);
  const [amount, setAmount] = useState<string>(initialAmount.toString());

  const isDisabled = isLoading || (!name || !amount);

  const handleSubmit = () => {
    onSubmit(name.trim(), +amount);
  };

  return (
    <View style={styles.container}>
      <Input
        label={i18n.t('capital.source.name.label')}
        value={name}
        onChangeText={setName}
        placeholder={i18n.t('capital.source.name.placeholder')}
        editable={!isLoading}
      />
      <Input
        label={i18n.t('capital.source.amount.label')}
        value={amount}
        onChangeText={setAmount}
        placeholder={i18n.t('capital.source.amount.placeholder')}
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
