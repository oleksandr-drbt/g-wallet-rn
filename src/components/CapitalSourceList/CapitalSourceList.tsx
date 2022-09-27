import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import { RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CapitalSourceCard, CapitalSourceActions } from "./CapitalSource";
import useAppDispatch from "@/hooks/useAppDispatch";
import { removeSource } from "@/store/capitalSlice";
import { CapitalSource } from "@/types/capital";
import styles from "./styles";

interface CapitalSourceListProps {
  items: CapitalSource[];
  isLoading: boolean;
  onRefresh: () => void;
}

export default function CapitalSourceList(props: CapitalSourceListProps) {
  const { items, isLoading, onRefresh } = props;

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const closeRow = (rowMap: RowMap<CapitalSource>, rowKey: number) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const handleEdit = (rowMap: RowMap<CapitalSource>, rowItem: CapitalSource) => {
    closeRow(rowMap, rowItem.id);
    navigation.navigate('EditCapitalSourceModal', {
      id: rowItem.id,
      name: rowItem.name,
      amount: rowItem.amount,
    });
  };

  const handleDelete = (rowMap: RowMap<CapitalSource>, rowKey: number) => {
    closeRow(rowMap, rowKey);
    dispatch(removeSource(rowKey));
  };

  return (
    <SwipeListView
      data={items}
      keyExtractor={item => item.id.toString()}
      useFlatList={true}
      disableRightSwipe={true}
      rightOpenValue={-150}
      renderItem={CapitalSourceCard}
      renderHiddenItem={(rowData, rowMap) => (
        <CapitalSourceActions
          {...rowData}
          closeRow={() => closeRow(rowMap, rowData.item.id)}
          handleEdit={() => handleEdit(rowMap, rowData.item)}
          handleDelete={() => handleDelete(rowMap, rowData.item.id)}
        />
      )}
      refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
      scrollEnabled={true}
      style={styles.list}
    />
  );
}
