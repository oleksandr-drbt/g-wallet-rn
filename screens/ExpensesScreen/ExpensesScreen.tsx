import { Text, View } from '../../components/Themed';
import i18n from "../../localization/i18n";
import styles from "./styles";

export default function ExpensesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('expenses.title')}</Text>
    </View>
  );
}
