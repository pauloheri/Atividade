import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { styles } from "./stlyle";
import { useState } from "react";
import { router } from "expo-router";
import { useExpenses } from "../../../context/ExpenseContext";

export default function Add() {
  const [description, setDescription] =
    useState("");

  const [value, setValue] = useState("");

  const [error, setError] = useState("");

  const { addExpense } = useExpenses();

  function handleSave() {
    const formattedValue = Number(
      value.replace(",", ".")
    );

    if (
      description.trim() === "" ||
      formattedValue <= 0
    ) {
      setError(
        "Preencha todos os campos corretamente."
      );

      return;
    }

    addExpense(description, formattedValue);

    setDescription("");
    setValue("");
    setError("");

    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>
          Novo Gasto
        </Text>

        <Text style={styles.subtitle}>
          Adicione uma nova despesa
        </Text>

        <Text style={styles.label}>
          Descrição
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Mercado"
          value={description}
          onChangeText={(text) => {
            const formatted =
              text.replace(/[^A-Za-zÀ-ÿ\s]/g, "");

            setDescription(formatted);
          }}
        />

        <Text style={styles.label}>
          Valor
        </Text>

        <TextInput
          style={styles.input}
          placeholder="R$ 0,00"
          keyboardType="numeric"
          value={value}
          onChangeText={(text) => {
            const formatted =
              text.replace(/[^0-9,]/g, "");

            setValue(formatted);
          }}
        />

        {error !== "" && (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>
              {error}
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSave}
        >
          <Text style={styles.buttonText}>
            Salvar Gasto
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}