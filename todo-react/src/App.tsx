import { useState, useRef } from "react";
import TodoTemplate from "./TodoTemplate";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const nextId = useRef(1);

  const handleAdd = (text: string) => {
    setTodos((prev) => [
      ...prev,
      { id: nextId.current++, text, done: false },
    ]);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TodoTemplate>
      <h1>Todo List</h1>
      <TodoInsert onAdd={handleAdd} />
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
    </TodoTemplate>
  );
}
