import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function About () {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: '#FFF5E1' }}>
            <Text>Sobre</Text>
            <Button title="Voltar" onPress={() => {router.replace("signin")}} />
        </View>
    );
}