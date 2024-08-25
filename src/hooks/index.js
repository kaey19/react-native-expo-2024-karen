import { Stack } from "expo-router";
import { FontProvider } from "./Font";
import { AuthProvider } from "./Auth";

export function AppProvider({ children }) {
    return (
        <FontProvider>
            <AuthProvider>{children}</AuthProvider>
        </FontProvider>
    );
}
