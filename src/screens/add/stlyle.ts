import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2ff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  formContainer: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 28,
    padding: 25,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 8,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1e293b",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748b",
    textAlign: "center",
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    color: "#334155",
    marginBottom: 8,
    fontWeight: "600",
  },

  input: {
    backgroundColor: "#f8fafc",
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    marginBottom: 20,
    color: "#0f172a",
  },

  errorContainer: {
    backgroundColor: "#fee2e2",
    padding: 12,
    borderRadius: 12,
    marginBottom: 18,
  },

  error: {
    color: "#dc2626",
    textAlign: "center",
    fontWeight: "600",
  },

  button: {
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
});