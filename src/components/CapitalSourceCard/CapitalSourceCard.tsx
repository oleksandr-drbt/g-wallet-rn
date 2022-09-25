import { TouchableOpacity } from "react-native";

import { CapitalSource } from "@/types/capital";
import { Text, View } from "../Themed";
import styles from "./styles";

interface IncomeCardProps {
  item: CapitalSource,
}

export default function CapitalSourceCard(props: IncomeCardProps) {
  const { item } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.sum}>{item.amount}₴</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
