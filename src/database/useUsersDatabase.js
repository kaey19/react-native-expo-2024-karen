import { useSQLiteContext } from "expo-sqlite";

export function useUsersDatabase() {
    const database = useSQLiteContext();

    async function authUser({ email, password }) {
        //console.log("authUser email: ", email, " - password: ", password);
        try {
            const result = await database.getFirstAsync(`
                SELECT id, nome, email, role FROM users WHERE email ='${email}' AND senha = '${password}'
                `);
            return result;
        } catch (error) {
            console.error("useUserDatabase authUser error: ", error);
            throw error;
        }
    }

    return {
        authUser
    };
}