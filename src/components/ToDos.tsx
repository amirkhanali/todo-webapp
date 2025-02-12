"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { motion } from "framer-motion";

import { useTodoStore } from "@/store/todoStore";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { parseAsBoolean, useQueryState } from "nuqs";
import DeleteButton from "@/components/DeleteButton";
import UpdateLink from "@/components/UpdateLink";
import ToggleButton from "@/components/ToggleButton";
import GridTodos from "@/components/GridTodos";

const ToDos = () => {
  const todos = useTodoStore((state) => state.todos);

  const [isDone, setIsDone] = useQueryState("isDone", parseAsBoolean);

  const handelFilter = () => {
    setIsDone((prev) => !prev);
  };

  const filteredTodos = isDone ? todos.filter((todo) => todo.completed) : todos;

  return (
    <motion.main
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto p-6 space-y-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full h-full flex flex-col items-center justify-between md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0"
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          📋 Your To-Do List
        </h2>

        <Button
          className="bg-blue-600 min-w-[140px] text-white hover:bg-blue-700 transition-all"
          onClick={handelFilter}
        >
          {isDone ? "Show All" : "Show Completed"}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden sm-t:block"
      >
        <Table className="w-full shadow-md rounded-xl border dark:border-gray-700">
          <TableCaption className="py-4">
            <Link href="/todos">
              <Button className="bg-green-600 hover:bg-green-700 text-white transition-all">
                Add To Do
              </Button>
            </Link>
          </TableCaption>
          <TableHeader className="bg-gray-100 dark:bg-gray-800">
            <TableRow className="">
              <TableHead className="w-2/5 text-center">Todo</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Update Todo</TableHead>
              <TableHead className="">Delete Todo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTodos.map(({ completed, id, todo }) => (
              <TableRow key={id}>
                <TableCell>{todo}</TableCell>
                <TableCell className="">
                  <ToggleButton id={id} completed={completed} />
                </TableCell>
                <TableCell>
                  <UpdateLink id={id} />
                </TableCell>
                <TableCell>
                  <DeleteButton id={id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </motion.div>
      <GridTodos />
    </motion.main>
  );
};

export default ToDos;
