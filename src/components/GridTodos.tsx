import { useTodoStore } from "@/store/todoStore";
import ToggleButton from "./ToggleButton";
import UpdateLink from "./UpdateLink";
import DeleteButton from "./DeleteButton";

const GridTodos = () => {
  const todos = useTodoStore((state) => state.todos);
  return (
    <div className="flex items-center justify-center sm-t:hidden px-4 py-6">
      <div className="grid grid-cols-1 gap-6 w-full">
        {todos.map(({ todo, completed, id }) => (
          <div
            className=" bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all rounded-lg p-4 flex flex-col items-center justify-center space-y-4 w-full"
            key={id}
          >
            <p className="text-lg font-medium text-black dark:text-gray-100 text-center">
              {todo}
            </p>
            <ToggleButton id={id} completed={completed} />
            <UpdateLink id={id} />
            <DeleteButton id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridTodos;
