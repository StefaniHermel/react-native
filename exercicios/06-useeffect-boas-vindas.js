/**
 * Exercício 1 — Boas-vindas
 * useEffect · [] · 5 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './06-useeffect-boas-vindas';
 *
 * 1. Com useEffect e [], mostre um Alert "Bem-vindo"
 *    e um console.log('A tela abriu!').
 * 2. Crie um contador com um botão Clicar.
 * 3. Clique várias vezes: o alerta não volta. Por quê?
 * 4. Agora apague o [] e clique de novo. O que mudou?
 *    Volte o [] depois.
 *
 * Ao salvar o arquivo, o alerta aparece de novo.
 * É o Fast Refresh montando a tela outra vez.
 */

import { useEffect, useState } from "react";
import { Alert, Button, Platform, Text, View } from "react-native";

export default function App() {
  // 1. os estados ficam aqui
  // contador guarda quantas vezes o botão foi clicado.
  const [contador, setContador] = useState(0);

  // 1. Roda uma vez, quando a tela abre (por causa do []).
  useEffect(() => {
    console.log("A tela abriu!");

    // No navegador o Alert do React Native não aparece,
    // então usamos window.alert. No celular usa o Alert normal.
    if (Platform.OS === "web") {
      window.alert("Bem-vindo");
    } else {
      Alert.alert("Bem-vindo");
    }
  }, []);
  // 3. O alerta não volta porque o [] diz ao React: "rode só uma vez,
  // quando a tela monta". Clicar muda o contador e redesenha a tela,
  // mas o efeito não roda de novo.
  // 4. Sem o [], o efeito roda depois de TODA renderização. Cada clique
  // muda o contador, a tela redesenha e o alerta aparece a cada clique.

  return (
    <View style={{ flex: 1, padding: 24, paddingTop: 60, gap: 12 }}>
      <Text>Exercício 1 — Boas-vindas</Text>

      {/* 2. o que aparece na tela */}
      <Text>Cliques: {contador}</Text>

      {/* 3. os botões */}
      <Button title="Clicar" onPress={() => setContador(contador + 1)} />
    </View>
  );
}