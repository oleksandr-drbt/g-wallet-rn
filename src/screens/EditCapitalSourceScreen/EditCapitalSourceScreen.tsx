import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import { View } from "@/components/Themed";
import CapitalSourceForm from "@/components/CapitalSourceForm";
import i18n from "@/localization/i18n";
import useAppDispatch from "@/hooks/useAppDispatch";
import { editSource } from "@/store/capitalSlice";
import { RootStackScreenProps } from "@/types/navigation";
import styles from "./styles";

export default function EditCapitalSourceScreen(props: RootStackScreenProps<'EditCapitalSourceModal'>) {
  const { navigation, route: { params } } = props;
  const { id, name: initialName, amount: initialAmount } = params;

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.setOptions({ headerTitle: i18n.t('capital.edit.title') });
  }, []);

  const editCapitalSource = (name: string, amount: number) => {
    setIsEditing(true);
    setTimeout(() => {
      dispatch(editSource({ id, name, amount }));
      setIsEditing(false);
      navigation.goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <CapitalSourceForm
        initialState={{
          id,
          name: initialName,
          amount: initialAmount,
        }}
        isLoading={isEditing}
        submitText={i18n.t('capital.edit.save')}
        onSubmit={editCapitalSource}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
