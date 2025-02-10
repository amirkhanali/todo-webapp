import { IdPropType } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTodoStore } from "@/store/todoStore";

type ToggleButtonType = IdPropType & {
  completed: boolean;
};

const ToggleButton = ({ id, completed }: ToggleButtonType) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <Button
      className={`${
        completed
          ? "bg-green-400 hover:bg-green-600"
          : "bg-orange-400 hover:bg-orange-500"
      }`}
      onClick={() => toggleTodo(id)}
    >
      {completed ? "completed" : "Pending"}
    </Button>
  );
};

export default ToggleButton;
