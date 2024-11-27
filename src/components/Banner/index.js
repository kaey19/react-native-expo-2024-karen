import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export function Banner() {
  const [page, setPage] = useState(0);

  const onPageSelected = (e) => {
    setPage(e.nativeEvent.position);
  };

  return (
    <View style={styles.container}>
      <PagerView
        initialPage={0}
        style={styles.content}
        onPageSelected={onPageSelected}
      >
        <View key="1" style={styles.page}>
          <Text style={styles.text}>Bem-Vindo ao seu app de receitas offline</Text>
        </View>
        <View key="2" style={styles.page}>
          <Text style={styles.text}>Já cadastrou uma receita?</Text>
        </View>
        <View key="3" style={styles.page}>
          <Text style={styles.text}>Vá para minhas receitas para cadastrar</Text>
        </View>
      </PagerView>
      <View style={styles.bulletContent}>
        <View style={[styles.bullet, page === 0 && styles.activebullet]}></View>
        <View style={[styles.bullet, page === 1 && styles.activebullet]}></View>
        <View style={[styles.bullet, page === 2 && styles.activebullet]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 10,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "30%",
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#52340a",
    padding: 10,
    height: "100%",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "bold",
    fontSize: 30,
  },
  bulletContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bullet: {
    margin: 10,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#e6ab67",
  },
  activebullet: {
    backgroundColor: "#52340a",
  },
});
