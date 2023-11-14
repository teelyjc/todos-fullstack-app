import { Fragment, FunctionComponent } from "react";
import { Button } from "./common/Button";

interface TodoItemProps {
  todo: any;
  handleDelete: (id: string) => void;
}

export const TodosItem: FunctionComponent<TodoItemProps> = ({
  todo,
  handleDelete,
}) => {
  return (
    <Fragment>
      <div className="flex flex-col space-y-1.5 border shadow-md py-2 px-4 rounded-md">
        <h1 className="text-2xl text-blue-800 font-semibold">{todo.title}</h1>
        <p className="text-md text-gray-800">{todo.description}</p>
        <Button onSubmit={() => handleDelete(todo.id)}>ลบข้อมูล</Button>
      </div>
    </Fragment>
  );
};
