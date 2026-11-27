import { useState } from "react";

function App() {
  // Our list of expenses
  const [expenses, setExpenses] = useState([]);

  // What the user types into the form
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  // Category filter
  const [filter, setFilter] = useState("All");

  // Add a new expense
  function addExpense() {
    if (description === "" || amount === "") {
      alert("Please fill in all fields!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description,
      amount: Number(amount),
      category: category
    };

    setExpenses([...expenses, newExpense]);

    // Clear the form
    setDescription("");
    setAmount("");
  }

  // Delete an expense
  function deleteExpense(id) {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
  }

  // Filter expenses
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((expense) => expense.category === filter);

  // Calculate total
  const totalExpenses = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div>
      <h1> Personal Expense Tracker</h1>

      {/* ADD EXPENSE */}
      <h2>Add Expense</h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
      </select>

      <button onClick={addExpense}>
        Add Expense
      </button>

      {/* FILTER */}
      <h2>Filter</h2>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option>All</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Entertainment</option>
      </select>

      {/* TOTAL */}
      <h2>
        Total: RM {totalExpenses.toFixed(2)}
      </h2>

      {/* EXPENSE LIST */}
      <h2>Expenses</h2>

      {filteredExpenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {filteredExpenses.map((expense) => (
            <li key={expense.id}>
              <strong>{expense.description}</strong>
              {" — "}
              RM {expense.amount.toFixed(2)}
              {" — "}
              {expense.category}

              <button
                onClick={() => deleteExpense(expense.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;