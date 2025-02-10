"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useTodoStore } from "@/store/todoStore";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  todo: z.string().min(2, {
    message: "todo must be at least 2 characters.",
  }),
});

const AddToDo = () => {
  const router = useRouter();
  const addTodo = useTodoStore((state) => state.addTodo);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      todo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addTodo({
      todo: values.todo,
      id: Date.now(),
      completed: false,
    });

    form.reset();
    router.push("/");
  }

  return (
    <main className="flex items-center justify-center h-screen px-4 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-md w-full">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
          ✏️ Add a New To-Do
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="todo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700 dark:text-gray-300">
                    Todo
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900"
                      placeholder="Write your todo..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="text-red-500 text-sm" />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              type="submit"
            >
              Add Todo
            </Button>
          </form>
        </Form>
      </div>
    </main>
  );
};

export default AddToDo;
