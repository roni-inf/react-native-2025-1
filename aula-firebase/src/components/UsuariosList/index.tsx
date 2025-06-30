import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

interface Usuario {
  nome: string;
  email: string;
  cargo: string;
}

interface Props {
  dados: Usuario;
}

export default function UsuariosList({ dados }: Props) {
  console.log(dados);

  return (
    <View style={styles.container}>
      <Text>Nome:{dados.nome}</Text>
      <Text>Email:{dados.email}</Text>
      <Text>Cargo:{dados.cargo}</Text>

      <TouchableOpacity>
        <Text>Excluir </Text>
      </TouchableOpacity>
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
