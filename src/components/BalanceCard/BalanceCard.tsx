import Colors from "@/constants/Colors";
import { Text, View } from "../Themed";
import styles from "./styles";

interface BalanceCardProps {
  sum: number;
  description: string;
  currency: string;
  color: string;
}

export default function BalanceCard(props: Partial<BalanceCardProps>) {
  const { sum = 0, description, currency, color = Colors.light.tint } = props;

  return (
    <View style={{ ...styles.container, backgroundColor: color }}>
      {currency ? (
        <View style={{ ...styles.currencyContainer, backgroundColor: color }}>
          <Text style={styles.currencyText}>{currency.toUpperCase()}</Text>
        </View>
      ) : <View />}
      <Text style={styles.sum}>{sum}₴</Text>
      {description ? <Text style={styles.description}>{description}</Text> : <View />}
    </View>
  );
}
