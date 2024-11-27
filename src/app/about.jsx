import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function About () {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: '#FFF5E1' , padding: 25, justifyContent: "space-around" }}>
            <Text style={{ textAlign: "justify", fontSize: 16,}} >Receitas no Bolso é um aplicativo offline projetado para ser seu guia pessoal de culinária, oferecendo uma maneira simples e eficiente de registrar, acessar e organizar suas receitas favoritas, sem necessidade de conexão com a internet. Com uma interface intuitiva e amigável, o app permite que você cadastre receitas com informações detalhadas, como ingredientes, modo de preparo, tempo de preparo e classificação. Além disso, você pode adicionar observações pessoais e fotos das receitas para torná-las ainda mais especiais. Ideal para quem adora cozinhar e deseja manter todas as suas receitas organizadas, disponíveis a qualquer hora, em qualquer lugar, sem depender da internet.</Text>
            <Button color="#ff8b2b" title="Voltar" onPress={() => {router.replace("signin")}} />
        </View>
    );
}