import { Alert, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";

import { View } from "../../components/Themed";
import BackButton from "../../components/comon/BackButton";
import CapitalSourceForm from "../../components/CapitalSourceForm";
import i18n from "../../localization/i18n";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { addSource, selectSources } from "../../store/capitalSlice";
import { RootStackScreenProps } from "../../types/navigation";
import Colors from "../../constants/Colors";
import styles from "./styles";

const CAPITAL_SOURCES_LIMIT = 20;

export default function AddCapitalSourceScreen(props: RootStackScreenProps<'AddCapitalSourceModal'>) {
  const { navigation } = props;

  const [isAdding, setIsAdding] = useState<boolean>(false);

  const sources = useAppSelector(selectSources);
  const dispatch = useAppDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: i18n.t('capital.add.title'),
      headerLeft: () => <BackButton title={i18n.t('capital.add.cancel')} />,
      headerStyle: styles.header,
      headerTitleStyle: styles.headerTitle,
      headerTintColor: Colors.shared.white,
    });
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
    }, 2000);
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
