import { Text, View } from "@/components/Themed";
import { CapitalSource } from "@/types/capital";
import styles from "./styles";

interface CapitalSourceProps {
  item: CapitalSource,
}

export default function CapitalSourceCard(props: CapitalSourceProps) {
  const { item } = props;

  const { name, amount } = item;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.sum}>{amount}₴</Text>
      </View>
    </View>
  );
}
