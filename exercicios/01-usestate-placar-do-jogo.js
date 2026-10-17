
/**
 * Exercício 1 — Placar do jogo
 * useState · dois estados · 7 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './01-usestate-placar-do-jogo';
 *
 * 1. Crie dois estados: timeA e timeB, os dois começando em 0.
 * 2. Mostre o placar: "Time A 2 x 1 Time B".
 * 3. Um botão Gol do Time A e um Gol do Time B.
 *    Use a forma de função: (atual) => atual + 1.
 * 4. Um botão Zerar placar que volta os dois para 0.
 *    Dica: uma função zerar() com dois sets.
 *
 * Desafio extra: embaixo do placar, mostre "Empate",
 * "Time A vencendo" ou "Time B vencendo".
 */

import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {
  // 1. Crie dois estados: timeA e timeB, começando em 0.
  const [timeA, setTimeA] = useState(0);
  const [timeB, setTimeB] = useState(0);

  // 4. Função para zerar os dois estados.
  // A função setTimeA volta o Time A para 0.
  // A função setTimeB volta o Time B para 0.
  function zerar() {
    setTimeA(0);
    setTimeB(0);
  }

  // Desafio extra: verificar quem está vencendo.
  let resultado;

  if (timeA === timeB) {
    resultado = 'Empate';
  } else if (timeA > timeB) {
    resultado = 'Time A vencendo';
  } else {
    resultado = 'Time B vencendo';
  }

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
        paddingTop: 60,
        gap: 12,
      }}
    >
      <Text>Exercício 1 — Placar do jogo</Text>

      {/* 2. Mostre o placar atualizado na tela. */}
      <Text>
        Time A {timeA} x {timeB} Time B
      </Text>

      {/* Desafio extra: mostrar o resultado da comparação. */}
      <Text>{resultado}</Text>

      {/* 3. Botão para marcar um gol para o Time A. */}
      <Button
        title="Gol do Time A"
        onPress={() => setTimeA((atual) => atual + 1)}
      />

      {/* 3. Botão para marcar um gol para o Time B. */}
      <Button
        title="Gol do Time B"
        onPress={() => setTimeB((atual) => atual + 1)}
      />

      {/* 4. Botão para zerar o placar dos dois times. */}
      <Button
        title="Zerar placar"
        onPress={zerar}
      />
    </View>
  );
}
