import { Alert, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import { View } from "@/components/Themed";
import CapitalSourceForm from "@/components/CapitalSourceForm";
import i18n from "@/localization/i18n";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";
import { addSource, selectSources } from "@/store/capitalSlice";
import { RootStackScreenProps } from "@/types/navigation";
import styles from "./styles";

const CAPITAL_SOURCES_LIMIT = 20;

export default function AddCapitalSourceScreen(props: RootStackScreenProps<'AddCapitalSourceModal'>) {
  const { navigation } = props;

  const [isAdding, setIsAdding] = useState<boolean>(false);

  const sources = useAppSelector(selectSources);
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.setOptions({ headerTitle: i18n.t('capital.add.title') });
  }, []);

  const addCapitalSource = (name: string, amount: number) => {
    if (sources.length >= CAPITAL_SOURCES_LIMIT) {
      Alert.alert(
        i18n.t('capital.add.notAddedAlert.title'),
        i18n.t('capital.add.notAddedAlert.message', { limit: CAPITAL_SOURCES_LIMIT }),
      );
      navigation.goBack();
      return;
    }

    setIsAdding(true);
    setTimeout(() => {
      dispatch(addSource({ name, amount }));
      setIsAdding(false);
      navigation.goBack();
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <CapitalSourceForm
        isLoading={isAdding}
        submitText={i18n.t('capital.add.add')}
        onSubmit={addCapitalSource}
      />
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
