import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { z } from "zod";
import { useAuth } from "../../hooks/Auth/index"


  const paymentSchema = z.object({ 
    valor_pago: z.number().gt(0),
    user_id: z.number().int().positive(),
    user_cadastro: z.number().int().positive(),   
    data_pagamento: z.date(),
    observacao: z.string(),
  });

export default function Payment() {
  const [valor, setValor] = useState("0,00");
  const [sugestoes, setSugestoes] = useState([
    {
      id: 1,
      nome: "Graehme Harriagn",
    },
    {
      id: 2,
      nome: "Susann Winchcum",
    },
    {
      id: 3,
      nome: "Trisha Mayo",
    },
    {
      id: 4,
      nome: "Duff Raatz",
    },
    {
      id: 5,
      nome: "Giorgio Farre",
    },
    {
      id: 6,
      nome: "Fredi Tupper",
    },
    {
      id: 7,
      nome: "Giulietta Woolbrook",
    },
    {
      id: 8,
      nome: "Dawna Absolon",
    },
    {
      id: 9,
      nome: "Wain Linfield",
    },
    {
      id: 10,
      nome: "Lizabeth Dudding",
    },
    {
      id: 11,
      nome: "Trula Tunniclisse",
    },
    {
      id: 12,
      nome: "Glen Machel",
    },
    {
      id: 13,
      nome: "Alasteir Morgue",
    },
    {
      id: 14,
      nome: "Sherman Mallalieu",
    },
    {
      id: 15,
      nome: "Jesse Bohea",
    },
    {
      id: 16,
      nome: "Susana Dunbleton",
    },
    {
      id: 17,
      nome: "Virginie Coopland",
    },
    {
      id: 18,
      nome: "Chris Meffan",
    },
    {
      id: 19,
      nome: "Brittne Rickcord",
    },
    {
      id: 20,
      nome: "Aviva MacDermand",
    },
    {
      id: 21,
      nome: "Margeaux Rowly",
    },
    {
      id: 22,
      nome: "Zachariah Smithin",
    },
    {
      id: 23,
      nome: "Mame Cleghorn",
    },
    {
      id: 24,
      nome: "Desiri Kinkead",
    },
    {
      id: 25,
      nome: "Colly Pailin",
    },
    {
      id: 26,
      nome: "Raynor O' Borne",
    },
    {
      id: 27,
      nome: "Cathee Sheed",
    },
    {
      id: 28,
      nome: "Mora Clowney",
    },
    {
      id: 29,
      nome: "Nealy Caldicot",
    },
    {
      id: 30,
      nome: "Olenka Dalby",
    },
    {
      id: 31,
      nome: "Bing Scholard",
    },
    {
      id: 32,
      nome: "Rivi Awin",
    },
    {
      id: 33,
      nome: "Lorianne Zimek",
    },
    {
      id: 34,
      nome: "Lynn Szantho",
    },
    {
      id: 35,
      nome: "Leoline Delmage",
    },
  ]);
  const [id, setId] = useState(1);
  const [data, setData] = useState(new Date());
  const [viewCalendar, setViewCalendar] = useState(false);
  const [observacao, setObservacao] = useState("");
  const valueRef = useRef();
  const {user} = useAuth();

  const handleCalendar = (event, selectDate) => {
    setViewCalendar(false);
    setData(selectDate);
  };

  useEffect(() => {
    valueRef.current.focus();
  }, []);

  const handleChangeValor = (value)=>{
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        setValor("0,00");
        return;
      }
      let valorPtBR = Intl.NumberFormat("pt-BR", {
        style: "decimal",
        minimumFractionDigits: 2,
      }).format(valorConvertido);
      setValor(valorPtBR);
    } catch (error) {
      setValor("0,00")
    }
  };

  const convertValue = (value)=>{
    try {
      let valorLimpo = value.replace(",", "").replace(".", "");
      let valorConvertido = Number(valorLimpo) / 100;
      if (valorConvertido === 0 || isNaN(valorConvertido)) {
        return 0
      }
      return valorConvertido
    } catch (error) {
      return valorConvertido
    }
  };

   const handleSubmit = async () => {
    const payment = {
      user_id: id,
      user_cadastro: Number(user.user.id),
      valor_pago: convertValue(valor),
      data_pagamento: data,
      observacao,
    };

    try {
      const result = await paymentSchema.parseAsync(payment);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
   };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height" }
    >
      <View style={styles.content}>
        <Text>Inserir Pagamentos</Text>
        <View style={styles.inputView}>
          <Ionicons name="wallet-outline" size={24} color="black" />
          <TextInput
            placeholder="Valor"
            keyboardType="decimal-pad"
            style={styles.inputValor}
            value={valor}
            onChangeText={(newValue)=> handleChangeValor(newValue)}
            ref={valueRef}
          />
        </View>
        <View style={styles.inputView}>
          <Picker
            selectedValue={id}
            onValueChange={(itemValue, index) => {
              setId(itemValue);
            }}
            style={{ width: "100%" }}
          >
            {sugestoes.map((item) => {
              return (
                <Picker.Item key={item.id} label={item.nome} value={item.id} />
              );
            })}
          </Picker>
        </View>
        <View style={styles.inputView}>
          <Text onPress={() => setViewCalendar(true)} style={styles.inputData}>
            {data.toLocaleDateString().split("T")[0]}
          </Text>
          {viewCalendar && (
            <DateTimePicker
              value={data}
              onChange={handleCalendar}
              mode="date"
              testID="dateTimePicker"
            />
          )}
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Observações"
            style={styles.inputObservacao}
            value={observacao}
            onChangeText={setObservacao}
            multiline={true}
          />
        </View>
        <View style={styles.contentButtons}>
          <Button title="Salvar" onPress={handleSubmit}/>
          <Button title="Continuar" />
          <Button title="Cancelar" onPress={() => router.back()} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF5E1",
  },
  inputView: {
    borderColor: "black",
    borderWidth: 1,
    width: "100%",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  contentButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  inputValor: {
    flex: 1,
    textAlign: "right",
    padding: 10,
  },
  inputData: {
    width: "100%",
    textAlign: "center",
    alignContent: "center",
    fontFamily: "regular",
    fontSize: 20,
    padding: 10,
  },
  inputObservacao: {
    fontFamily: "regular",
    fontSize: 16,
    flex: 1,
    lineHeight: 20,
  },
});
