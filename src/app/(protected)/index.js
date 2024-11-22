import { Button, Text, View } from "react-native";
import { useAuth } from "../../hooks/Auth";

export default function Home() {
const { signOut } = useAuth(); 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#FFF5E1' }}>
      <Text>Home</Text> 
      </View>
  );
}
