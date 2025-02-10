import { useTodoStore } from "@/store/todoStore";
import { Button } from "./ui/button";
import { IdPropType } from "@/lib/utils";

const DeleteButton = ({ id }: IdPropType) => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <Button
      className="bg-red-500 hover:bg-red-600"
      onClick={() => deleteTodo(id)}
    >
      DeleteButton
    </Button>
  );
};

export default DeleteButton;
