import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { formatDateExtendVersion } from "../../utils/formatDate";
import { styles } from "./styles";

export type ParticipantType = { id: number; name: string };

function emptyList() {
  return (
    <Text style={styles.listEmptyText}>
      Ninguém chegou no evento ainda? Adicione participante na sua lista de
      presença.
    </Text>
  );
}

export default function Home() {
  const [name, setName] = useState("");
  const [updateId, setUpdateId] = useState<number>();

  const [participants, setParticipants] = useState<ParticipantType[]>([]);

  function handleValidName() {
    const participantExists =
      participants.filter((e) => e.name.toLowerCase() === name.toLowerCase())
        .length > 0;

    if (participantExists) {
      Alert.alert(
        "Participante existe",
        "Já existe um participante na lista com esse nome."
      );
      return false;
    }

    return true;
  }

  function handleAddParticipant() {
    const nameValid = handleValidName();

    if (!nameValid) return;

    setParticipants((current) => {
      let newIndex = 1;

      if (current && current.length > 0) {
        newIndex = current[current.length - 1].id + 1;
      }

      const newItem = { name, id: newIndex };
      return [...current, newItem];
    });

    setName("");
  }

  function handleRemoveParticipant(id: number) {
    Alert.alert(
      "Remover Participante",
      `Deseja remover o participante ${name} da lista?`,
      [
        {
          text: "Sim",
          onPress: () =>
            setParticipants((current) => current.filter((e) => e.id !== id)),
        },
        { text: "Não" },
      ]
    );
  }

  function handleUpdateParticipant() {
    const nameValid = handleValidName();

    if (!nameValid) return;

    setParticipants((current) =>
      current.map((e) => {
        if (updateId === e.id) {
          return {
            id: updateId,
            name,
          };
        }
        return e;
      })
    );

    setName("");
    setUpdateId(undefined);
  }

  function handleBeforeUpdateParticipant(id: number) {
    const participant = participants.filter((e) => e.id === id)[0];

    setName(participant.name);
    setUpdateId(participant.id);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>I Am Here</Text>
      <Text style={styles.eventDate}>
        {formatDateExtendVersion(new Date())}
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setName}
          value={name}
        />

        {updateId ? (
          <TouchableOpacity
            style={{ ...styles.button, ...styles.buttonUpdate }}
            onPress={handleUpdateParticipant}
            disabled={!name}
          >
            <MaterialIcons name="save" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ ...styles.button, ...styles.buttonAdd }}
            onPress={handleAddParticipant}
            disabled={!name}
          >
            <MaterialIcons name="add" size={16} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <Text style={styles.listTitle}>Participantes</Text>
        <FlatList
          data={participants}
          keyExtractor={(item) => `[participant-${item.id}`}
          renderItem={({ item }) => (
            <Participant
              id={item.id}
              name={item.name}
              onRemove={handleRemoveParticipant}
              onUpdate={handleBeforeUpdateParticipant}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={emptyList}
        />
      </View>
    </View>
  );
}
