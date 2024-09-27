import { Stack } from "expo-router";
import { FontProvider } from "./Font";
import { AuthProvider } from "./Auth";
import { DataProvider } from "./Data";

export function AppProvider({ children }) {
    return (
        <FontProvider>
            <DataProvider>
                <AuthProvider>{children}</AuthProvider>
            </DataProvider>
        </FontProvider>
    );
}
