import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export default function Sobre() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  function handleSave(): void {
    if (!nome || !email) {
      Alert.alert("Preencha os campos corretamente!");
      return;
    }
    console.log(`Nome:${nome}`);
    console.log(`Email:${email}`);
    setNome("");
    setEmail("");
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Abrir Modal</Text>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Formulário de Contato</Text>

            <TextInput
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
