import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Todo = {
  id: number;
  todo: string;
  completed: boolean;
};

type TodoStoreType = {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  toggleTodo: (id: number) => void;
  updateToDo: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStoreType>()(
  persist(
    (set) => ({
      todos: [],

      addTodo: (newTodo: Todo) =>
        set((state) => ({
          todos: [...state.todos, newTodo],
        })),
      updateToDo: (id, newText) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, todo: newText } : todo
          ),
        })),
      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      toggleTodo: (id: number) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),
    }),
    {
      name: "todo-complete",
    }
  )
);
