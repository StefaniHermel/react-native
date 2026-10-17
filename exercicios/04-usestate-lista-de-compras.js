/**
 * Exercício 4 — Lista de compras
 * useState · array · 12 min
 *
 * Para rodar este arquivo, em exercicios/ativo.js:
 * export { default } from './04-usestate-lista-de-compras';
 *
 * 1. Crie dois estados: item (texto, '') e itens (lista, []).
 * 2. Um TextInput controlado com placeholder "Ex.: pão".
 * 3. Botão Adicionar: coloca { id: Date.now(), nome: item }
 *    na lista com spread e limpa o campo.
 * 4. Campo vazio? Mostre um Alert e não adicione (use trim()).
 * 5. Mostre "🛒 Lista de compras (N)" e cada item com .map() e key.
 * 6. Lista vazia? Mostre "Sua lista está vazia."
 *
 * Desafio extra: um botão Remover em cada item, com filter.
 */

import { useState } from "react";
import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  // 1. os estados ficam aqui
  // item guarda o texto digitado; itens guarda a lista de compras.
  const [item, setItem] = useState("");
  const [itens, setItens] = useState([]);

  // 3. Adiciona o item na lista e limpa o campo.
  function adicionar() {
    // 4. Campo vazio? Mostra um alerta e não adiciona.
    // trim() tira os espaços das pontas, então "   " também conta como vazio.
    if (item.trim() === "") {
      // No navegador usamos window.alert; no celular, o Alert normal.
      if (Platform.OS === "web") {
        window.alert("Digite o nome de um item.");
      } else {
        Alert.alert("Digite o nome de um item.");
      }
      return;
    }

    // Spread (...itens) copia os itens antigos e o novo vai no final.
    setItens([...itens, { id: Date.now(), nome: item.trim() }]);
    setItem("");
  }

  // Desafio extra: remove o item com o id recebido, usando filter.
  function remover(id) {
    setItens(itens.filter((i) => i.id !== id));
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Lista de compras</Text>

      {/* 2. TextInput controlado: o valor vem do estado item. */}
      <View style={estilos.linhaEntrada}>
        <TextInput
          placeholder="Ex.: pão"
          placeholderTextColor="#a5b4fc"
          value={item}
          onChangeText={setItem}
          onSubmitEditing={adicionar}
          style={estilos.campo}
        />

        {/* 3. Botão Adicionar. */}
        <Pressable
          style={({ pressed }) => [
            estilos.botaoAdicionar,
            pressed && estilos.botaoPressionado,
          ]}
          onPress={adicionar}
        >
          <Text style={estilos.textoAdicionar}>+</Text>
        </Pressable>
      </View>

      {/* Cartão da lista */}
      <View style={estilos.cartao}>
        {/* 5. Título com a quantidade de itens. */}
        <Text style={estilos.tituloLista}>
          🛒 Lista de compras ({itens.length})
        </Text>

        {/* 6. Lista vazia? Mostra a mensagem. */}
        {itens.length === 0 && (
          <Text style={estilos.vazio}>Sua lista está vazia.</Text>
        )}

        {/* 5. Cada item com .map() e key. */}
        <ScrollView contentContainerStyle={{ gap: 8 }}>
          {itens.map((i) => (
            <View key={i.id} style={estilos.linhaItem}>
              <Text style={estilos.nomeItem}>• {i.nome}</Text>

              {/* Desafio extra: botão Remover em cada item. */}
              <Pressable
                style={({ pressed }) => [
                  estilos.botaoRemover,
                  pressed && estilos.botaoPressionado,
                ]}
                onPress={() => remover(i.id)}
              >
                <Text style={estilos.textoRemover}>Remover</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: "#1e1b4b",
    padding: 24,
    paddingTop: 60,
    gap: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c7d2fe",
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center",
  },
  linhaEntrada: {
    flexDirection: "row",
    gap: 12,
  },
  campo: {
    flex: 1,
    backgroundColor: "#312e81",
    color: "#ffffff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },
  botaoAdicionar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#7c3aed",
    alignItems: "center",
    justifyContent: "center",
  },
  textoAdicionar: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "bold",
  },
  botaoPressionado: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  cartao: {
    flex: 1,
    backgroundColor: "#312e81",
    borderRadius: 24,
    padding: 20,
    gap: 12,
  },
  tituloLista: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  vazio: {
    color: "#a5b4fc",
    fontStyle: "italic",
  },
  linhaItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#4338ca",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  nomeItem: {
    color: "#ffffff",
    fontSize: 16,
    flex: 1,
  },
  botaoRemover: {
    backgroundColor: "#dc2626",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  textoRemover: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
