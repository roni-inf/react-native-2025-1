import { useEffect, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";


export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(150)).current;

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: larAnimada,
          height: altAnimada,
          backgroundColor: "#416901",
          justifyContent: "center",
          borderRadius: 50,
        }}
      >
        <Text style={{ textAlign: "center", fontSize: 22 }}>
          Carregando......
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
