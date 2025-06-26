import { useRef, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TextInput as TextInputType,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./src/styles/style";
import api from "./src/services/api";

interface CnpjData {
  cnpj: string;
  fantasia: string;
  logradouro: string;
  municipio: string;
}

export default function App() {
  const [cnpj, setCnpj] = useState("");
  const inputRef = useRef<TextInputType>(null);
  const [cnpjUser, setCnpjUser] = useState<CnpjData | null>(null);

  function limpar(): void {
    setCnpj("");
    setCnpjUser(null);
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }

  const buscar = async () => {
    if (cnpj.length !== 14) {
      Alert.alert("O cnpj deve ter 14 digítos");
      return;
    }
    try {
      const response = await api.get(`/${cnpj}`);
      if (response.data.erro) {
        setCnpjUser(null);
        Alert.alert("Cnpj não encontrado");
      }
      setCnpjUser(response.data);
    } catch (error) {
      console.error("Error:" + error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"gray"} />

      <View style={{ alignItems: "center" }}>
        <Text style={styles.text}>Digite o seu CNPJ:</Text>
        <TextInputType
          style={styles.input}
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
          keyboardType="numeric"
          ref={inputRef} onFocus={limpar}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={buscar}
          style={[styles.botao, { backgroundColor: "#1d75cd" }]}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#cd3e1d" }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cnpjUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cnpj:{cnpjUser?.cnpj}</Text>
          <Text style={styles.itemText}>
            Nome Fantasia:{cnpjUser?.fantasia}
          </Text>
          <Text style={styles.itemText}>Logradouro:{cnpjUser?.logradouro}</Text>
          <Text style={styles.itemText}>Município:{cnpjUser?.municipio}</Text>
        </View>
      )}
    </View>
  );
}
