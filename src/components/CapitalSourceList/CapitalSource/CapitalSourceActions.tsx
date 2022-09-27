import { Alert, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { CapitalSource } from "@/types/capital";
import styles from "./styles";

interface CapitalSourceActionsProps {
  item: CapitalSource;
  closeRow: () => void;
  handleEdit: () => void;
  handleDelete: () => void;
}

export default function CapitalSourceActions(props: CapitalSourceActionsProps) {
  const { closeRow, handleEdit, handleDelete } = props;

  const openDeleteConfirm = () => {
    Alert.alert(
      'Delete',
      'Are you sure?',
      [
        {
          text: "No",
          style: "cancel",
          onPress: closeRow,
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: handleDelete,
        },
      ],
    );
  };

  return (
    <View style={styles.actions}>
      <TouchableOpacity
        style={[styles.rightActionButton, styles.rightActionButtonLeft]}
        onPress={handleEdit}
      >
        <AntDesign name="edit" color={Colors.shared.greyDark} size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rightActionButton, styles.rightActionButtonRight]}
        onPress={openDeleteConfirm}
      >
        <AntDesign name="delete" color={Colors.shared.greyDark} size={20} />
      </TouchableOpacity>
    </View>
  );
}
