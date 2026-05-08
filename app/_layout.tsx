import { Stack } from "expo-router";
import { ExpenseProvider } from "../context/ExpenseContext";

export default function Layout() {
  return (
    <ExpenseProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Gastos",
          }}
        />

        <Stack.Screen
          name="add"
          options={{
            title: "Adicionar Gasto",
          }}
        />
      </Stack>
    </ExpenseProvider>
  );
}