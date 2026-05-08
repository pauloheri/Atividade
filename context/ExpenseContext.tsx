import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

interface Expense {
  id: string;
  description: string;
  value: number;
}

interface ExpenseContextData {
  expenses: Expense[];
  addExpense: (description: string, value: number) => void;
  deleteExpense: (id: string) => void;
}

const ExpenseContext = createContext({} as ExpenseContextData);

export function ExpenseProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  function addExpense(description: string, value: number) {
    const newExpense = {
      id: String(Date.now()),
      description,
      value,
    };

    setExpenses((prev) => [...prev, newExpense]);
  }

  function deleteExpense(id: string) {
    const filtered = expenses.filter(
      (item) => item.id !== id
    );

    setExpenses(filtered);
  }

  return (
    <ExpenseContext.Provider
      value={{
        expenses,
        addExpense,
        deleteExpense,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export function useExpenses() {
  return useContext(ExpenseContext);
}