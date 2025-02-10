"use client";

import { useState, useEffect } from "react";
import { useTodoStore } from "@/store/todoStore";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EditTodo = () => {
  const { id } = useParams();
  const router = useRouter();
  const updateTodo = useTodoStore((state) => state.updateToDo);
  const todos = useTodoStore((state) => state.todos);

  const todo = todos.find((t) => t.id === Number(id));

  const [newText, setNewText] = useState(todo?.todo || "");

  useEffect(() => {
    if (!todo) {
      router.back();
    }
  }, [todo, router]);

  const handleUpdate = () => {
    if (newText.trim() !== "") {
      updateTodo(todo!.id, newText);
    }
    router.back();
  };

  return (
    <main className="flex flex-col items-center p-4 justify-center w-full h-screen bg-black/50 backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center bg-white/90 dark:bg-gray-900 p-6 bg-white max-w-[350px] w-full space-y-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 text-center">
          Edit Todo
        </h2>
        <Input
          className="text-gray-800 dark:text-gray-200 rounded-xl"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Update Your Todo"
        />
        <div className="w-full h-full space-x-2 flex flex-col justify-center items-center">
          <Button
            className="rounded-xl w-full h-full"
            variant="outline"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button className="rounded-xl w-full h-full" onClick={handleUpdate}>
            Save
          </Button>
        </div>
      </div>
    </main>
  );
};

export default EditTodo;
