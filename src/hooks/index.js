import { Stack } from "expo-router";
import { AppProvider} from "../hooks";

export function AppProvider({ children }) {
    return (
        <AppProvider>
            <Stack />
        </AppProvider>
    )
}