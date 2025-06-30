import { deleteDoc, doc } from "firebase/firestore";
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { db } from "../../firebaseConnection";

interface Usuario {
  id: string;
  nome: string;
  email: string;
  cargo: string;
}

interface Props {
  dados: Usuario;
  handleEdit: (dados: Usuario) => void;
}

export default function UsuariosList({ dados, handleEdit }: Props) {
  async function handleDelete() {
    const docRef = doc(db, "usuarios", dados.id);
    await deleteDoc(docRef);
  }

  function handleEditUser() {
    handleEdit(dados);
  }

  return (
    <View style={styles.container}>
      <Text>Nome:{dados.nome}</Text>
      <Text>Email:{dados.email}</Text>
      <Text>Cargo:{dados.cargo}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonExcluir} onPress={handleDelete}>
          <Text style={styles.buttonText}>Excluir </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonEdit} onPress={handleEditUser}>
          <Text style={styles.buttonText}>Editar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  item: {
    color: "#000",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  buttonExcluir: {
    backgroundColor: "#B3261E",
    padding: 4,
    borderRadius: 6,
    marginTop: 16,
    marginRight: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    paddingLeft: 8,
    paddingRight: 8,
  },
  buttonEdit: {
    backgroundColor: "#000",
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 4,
    marginTop: 16,
  },
});
