/**
 * Exercício 2 — Volume de 0 a 10
 * useState · limite · 8 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './02-usestate-volume';
 *
 * 1. Crie o estado volume começando em 5.
 * 2. Botões + e - que somam e tiram 1.
 * 3. O volume nunca passa de 10 e nunca fica abaixo de 0.
 *    Use: setVolume((atual) => (atual < 10 ? atual + 1 : atual)).
 * 4. Quando o volume for 0, mostre "🔇 Mudo".
 *    Quando for 10, mostre "Volume máximo!". Use &&.
 *
 * Desafio extra: uma barrinha de volume: '█'.repeat(volume).
 */

import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  // 1. Cria o estado volume começando em 5.
  // volume guarda o valor atual; setVolume altera esse valor.
  const [volume, setVolume] = useState(5);

  // 2. Aumenta o volume sem deixar passar de 10.
  function aumentarVolume() {
    setVolume((atual) => (atual < 10 ? atual + 1 : atual));
  }

  // 3. Diminui o volume sem deixar ficar abaixo de 0.
  function diminuirVolume() {
    setVolume((atual) => (atual > 0 ? atual - 1 : atual));
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Volume</Text>

      {/* Cartão central */}
      <View style={estilos.cartao}>
        {/* Mostra o número do volume atual. */}
        <Text style={estilos.numero}>{volume}</Text>

        {/* Desafio extra: mostra uma barrinha conforme o volume. */}
        <Text style={estilos.barra}>{"█".repeat(volume)}</Text>

        {/* 4. Mostra a mensagem somente quando o volume chega a 0. */}
        {volume === 0 && <Text style={estilos.aviso}>🔇 Mudo</Text>}

        {/* 4. Mostra a mensagem somente quando o volume chega a 10. */}
        {volume === 10 && <Text style={estilos.aviso}>Volume máximo!</Text>}
      </View>

      {/* 2. Botões - e + */}
      <View style={estilos.linhaBotoes}>
        {/* Botão para diminuir o volume. */}
        <Pressable
          style={({ pressed }) => [
            estilos.botao,
            pressed && estilos.botaoPressionado,
          ]}
          onPress={diminuirVolume}
        >
          <Text style={estilos.textoBotao}>−</Text>
        </Pressable>

        {/* Botão para aumentar o volume. */}
        <Pressable
          style={({ pressed }) => [
            estilos.botao,
            pressed && estilos.botaoPressionado,
          ]}
          onPress={aumentarVolume}
        >
          <Text style={estilos.textoBotao}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#1e1b4b",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c7d2fe",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  cartao: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#312e81",
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
    gap: 12,
    minHeight: 220,
    justifyContent: "center",
  },
  numero: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#ffffff",
  },
  barra: {
    fontSize: 20,
    color: "#a78bfa",
    letterSpacing: 2,
    minHeight: 28,
  },
  aviso: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fbbf24",
  },
  linhaBotoes: {
    flexDirection: "row",
    gap: 24,
  },
  botao: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#7c3aed",
    alignItems: "center",
    justifyContent: "center",
  },
  botaoPressionado: {
    backgroundColor: "#5b21b6",
    transform: [{ scale: 0.95 }],
  },
  textoBotao: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "bold",
  },
});