import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState([
    "Luciano",
    "Weslen Luciano",
    "Luwes da Silva",
    "Luwe da Silva",
    "Luws da Silva",
    "Luwes Silva",
    "Luwes da Sva",
    "Luwes da Sila",
    "Luwes da Sil",
    "Luwes da Siva"
  ]);

  function handleAddParticipant() {
    if (participants.includes('Luciano')) {
      Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.")
      return
    }
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert("Remover Participante", `Deseja remover o participante ${name} da lista?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de dezembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={handleRemoveParticipant}
            key={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda?
            Adicione participante na sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}