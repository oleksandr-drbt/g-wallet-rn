import { FlatList, RefreshControl } from "react-native";
import { useEffect, useMemo, useState } from "react";

import { View } from '../../components/Themed';
import BalanceCard from "../../components/BalanceCard";
import CapitalSourceCard from "../../components/CapitalSourceCard";
import i18n from "../../localization/i18n";
import useAppSelector from "../../hooks/useAppSelector";
import useAppDispatch from "../../hooks/useAppDispatch";
import { selectSources, setSources } from "../../store/capitalSlice";
import { loadCapitalSources } from "../../api/capitalAPI";
import Colors from "../../constants/Colors";
import styles from "./styles";

export default function CapitalScreen() {
 const [isLoading, setIsLoading] = useState<boolean>(false);

  const sources = useAppSelector(selectSources);
  const dispatch = useAppDispatch();

  const totalAmount = useMemo(() => sources.reduce((total, { amount }) => total + amount, 0), [sources]);

  const loadIncomes = () => {
    setIsLoading(true);
    (async () => {
      try {
        const { sources } = await loadCapitalSources();
        dispatch(setSources(sources));
      } finally {
        setIsLoading(false);
      }
    })();
  };

  useEffect(loadIncomes, []);

  return (
    <View style={styles.container}>
      <BalanceCard
        sum={totalAmount}
        description={i18n.t('capital.balance.description', { number: sources.length })}
        currency="UAH"
        color={Colors.light.tint}
      />
      <FlatList
        data={sources}
        keyExtractor={item => item.id.toString()}
        renderItem={CapitalSourceCard}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={loadIncomes} />}
        scrollEnabled={true}
        style={styles.list}
      />
    </View>
  );
}
