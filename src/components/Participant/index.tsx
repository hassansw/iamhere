import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export type ParticipantProps = {
  id: number;
  name: string;
  onRemove: (id: number) => void;
  onUpdate: (id: number) => void;
};

export function Participant({
  id,
  name,
  onRemove,
  onUpdate,
}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
        style={{ ...styles.button, ...styles.buttonUpdate }}
        onPress={() => onUpdate(id)}
      >
        <MaterialIcons name="border-color" size={16} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, ...styles.buttonRemove }}
        onPress={() => onRemove(id)}
      >
        <MaterialIcons name="remove" size={16} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}
