import { TouchableOpacity } from 'react-native';

import { Text, View } from '@/components/Themed';
import i18n from "@/localization/i18n";
import { RootStackScreenProps } from "@/types/navigation";
import styles from "./styles";

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  const openMainScreen = () => {
    navigation.replace('Root');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('notFound.title')}</Text>
      <TouchableOpacity onPress={openMainScreen} style={styles.link}>
        <Text style={styles.linkText}>{i18n.t('notFound.button')}</Text>
      </TouchableOpacity>
    </View>
  );
}
