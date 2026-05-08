import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { styles } from "./style";
import { router } from "expo-router";
import { useExpenses } from "../../../context/ExpenseContext";

export default function Home() {
  const { expenses, deleteExpense } = useExpenses();

  const total = expenses.reduce(
    (acc, item) => acc + item.value,
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lista de Gastos
      </Text>

      <Text style={styles.total}>
        Total: R$ {total.toFixed(2)}
      </Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => router.push("/add")}
      >
        <Text style={styles.addButtonText}>
          Novo Gasto
        </Text>
      </TouchableOpacity>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>
            Nenhum gasto cadastrado.
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.description}>
                {item.description}
              </Text>

              <Text style={styles.value}>
                R$ {item.value.toFixed(2)}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() =>
                deleteExpense(item.id)
              }
            >
              <Text style={styles.deleteText}>
                Excluir
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}