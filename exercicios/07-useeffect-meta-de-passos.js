/**
 * Exercício 2 — Meta de passos
 * useEffect · [estado] · 7 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './07-useeffect-meta-de-passos';
 *
 * 1. Crie dois estados: passos e agua, com um botão +1 para cada.
 * 2. Crie um efeito com [passos] que faz
 *    console.log('passos mudou para', passos).
 * 3. Dentro do efeito: quando passos chegar a 5,
 *    mostre um Alert "Meta! 🎉".
 * 4. Toque em +1 copo: o console fica quieto?
 *    Toque em +1 passo: o console fala?
 *
 * Desafio extra: troque para [agua] e veja o que muda.
 * Depois, coloque os dois: [passos, agua].
 */

import { useEffect, useState } from "react";
import { Alert, Button, Platform, Text, View } from "react-native";

export default function App() {
  // 1. os estados ficam aqui
  // passos e agua começam em 0. Cada um tem seu botão +1.
  const [passos, setPassos] = useState(0);
  const [agua, setAgua] = useState(0);

  // 2. Efeito com [passos]: só roda quando passos muda.
  useEffect(() => {
    console.log("passos mudou para", passos);

    // 3. Quando passos chega a 5, mostra o alerta.
    // No navegador usamos window.alert; no celular, o Alert normal.
    if (passos === 5) {
      if (Platform.OS === "web") {
        window.alert("Meta! 🎉");
      } else {
        Alert.alert("Meta! 🎉");
      }
    }
  }, [passos]);
  // 4. +1 copo muda só o estado agua, que não está na lista [passos],
  // então o console fica quieto. +1 passo muda passos, então o efeito
  // roda e o console fala.
  // Obs.: o efeito também roda uma vez quando a tela abre,
  // por isso aparece "passos mudou para 0" logo no começo.

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 2 — Meta de passos</Text>

      {/* 2. o que aparece na tela */}
      <Text>Passos: {passos}</Text>
      <Text>Copos de água: {agua}</Text>

      {/* 3. os botões */}
      <Button title="+1 passo" onPress={() => setPassos(passos + 1)} />
      <Button title="+1 copo" onPress={() => setAgua(agua + 1)} />
    </View>
  );
}
