import React, { useState } from "react";
import { View, Text, Button, FlatList, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones

export default function App() {
  const [telaAtual, setTelaAtual] = useState("listagem"); // Estado para controlar a tela
  const [receitas, setReceitas] = useState([]);
  const [nome, setNome] = useState("");
  const [tempoPreparo, setTempoPreparo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [classificacao, setClassificacao] = useState("");
  const [observacao, setObservacao] = useState("");

  // Função para cadastrar nova receita
  const handleAddRecipe = () => {
    if (!nome || !tempoPreparo || !ingredientes || !classificacao) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    const novaReceita = { nome, tempoPreparo, ingredientes, classificacao, observacao };
    setReceitas((prevReceitas) => [...prevReceitas, novaReceita]);
    setTelaAtual("listagem"); // Volta para a tela de listagem após adicionar
    setNome(""); // Reseta o campo
    setTempoPreparo(""); // Reseta o campo
    setIngredientes(""); // Reseta o campo
    setClassificacao(""); // Reseta o campo
    setObservacao(""); // Reseta o campo
  };

  // Tela de Listagem de Receitas
  const Listagem = () => (
    <View style={styles.container}>
      <Text style={styles.title}>{"\n"}Minhas Receitas</Text>
      <FlatList
        style={styles.container1}
        data={receitas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeText}>{item.nome}</Text>
            <Text style={styles.recipeText}>Tempo: {item.tempoPreparo}</Text>
            <Text style={styles.recipeText}>Ingredientes: {item.ingredientes}</Text>
            <Text style={styles.recipeText}>Classificação: {item.classificacao}</Text>
            <Text style={styles.recipeText}>Observações: {item.observacao}</Text>
          </View>
        )}
      />
      <Button color="#ff8b2b" title="Cadastrar Receita" onPress={() => setTelaAtual("cadastro")} />
    </View>
  );

  // Tela de Cadastro de Receita
  const AddRecipe = () => (
    <View style={styles.container}>
      <Text style={styles.title}>{"\n"}Cadastrar Receita</Text>

      {/* Nome da Receita */}
      <View style={styles.inputContainer}>
        <Ionicons name="fast-food-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Nome da Receita"
          value={nome}
          onChangeText={(text) => setNome(text)} // Garantir que o valor seja atualizado corretamente
        />
      </View>

      {/* Tempo de Preparo */}
      <View style={styles.inputContainer}>
        <Ionicons name="timer-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Tempo de Preparo"
          value={tempoPreparo}
          onChangeText={(text) => setTempoPreparo(text)} // Garantir que o valor seja atualizado corretamente
        />
      </View>

      {/* Ingredientes */}
      <View style={styles.inputContainer}>
        <Ionicons name="list-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Ingredientes"
          value={ingredientes}
          onChangeText={(text) => setIngredientes(text)} // Garantir que o valor seja atualizado corretamente
        />
      </View>

      {/* Classificação (Doce/Salgado/Bebida) */}
      <View style={styles.inputContainer}>
        <Ionicons name="wine-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Classificação: Doce/Salgado/Bebida"
          value={classificacao}
          onChangeText={(text) => setClassificacao(text)} // Garantir que o valor seja atualizado corretamente
        />
      </View>

      {/* Observação */}
      <View style={styles.inputContainer}>
        <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Observações(Sem observações/Nenhuma)"
          value={observacao}
          onChangeText={(text) => setObservacao(text)} // Garantir que o valor seja atualizado corretamente
        />
      </View>

      <Button color="#ff8b2b" title="Adicionar Receita" onPress={handleAddRecipe} />
      <Button color="#ff8b2b" title="Voltar" onPress={() => setTelaAtual("listagem")} />
    </View>
  );

  return telaAtual === "listagem" ? <Listagem /> : <AddRecipe />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    backgroundColor: "#FFF5E1",
  },
  container1: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    alignContent: "center",
    marginBottom: 20,
    backgroundColor: "#52340a",
    width: "100%",
    height: "11%",
    color: "white",
  },
  recipeItem: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
  },
  recipeText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});
