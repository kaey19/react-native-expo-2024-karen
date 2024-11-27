import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF5E1' }}>
      <Banner />

      {/* Ícone do aplicativo */}
      <View style={styles.iconContainer}>
        <Image 
          source={require('../../assets/icone.png')} // Substitua pelo caminho do seu ícone
          style={styles.icon}
          resizeMode="contain" 
        />
      </View>

      {/* Texto explicativo sobre o app */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Receitas no Bolso!</Text>
        <Text style={styles.description}>
          Ideal para quem adora cozinhar e deseja manter todas as suas receitas organizadas, disponíveis a qualquer hora, em qualquer lugar, sem depender da internet.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center", // Centraliza o ícone horizontalmente
    marginTop: -300, // Espaçamento acima
    marginBottom: 30, // Espaçamento abaixo
  },
  icon: {
    width: 200, // Largura do ícone
    height: 150, // Altura do ícone
  },
  textContainer: {
    padding: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1F1C1D",
  },
  description: {
    fontSize: 20,
    color: "#333",
    marginTop: 20,
    marginBottom: 70,
    lineHeight: 22,
  },
});
