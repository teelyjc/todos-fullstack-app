import {
  ChangeEvent,
  FormEvent,
  Fragment,
  FunctionComponent,
  useEffect,
  useState,
} from "react";

import TodosService from "@/services/TodosService";

import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { TodosItem } from "@/components/TodosItem";

export const App: FunctionComponent = () => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const getTodos = async () => {
      const todos = await TodosService.getTodos();
      setTodos(todos);
    };

    getTodos();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setTodo({ ...todo, [name]: value });
  };

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (!todo.title || !todo.description) {
      return;
    }

    TodosService.createTodo(todo.title, todo.description, async () => {
      setTodo({ title: "", description: "" });
      const todos = await TodosService.getTodos();
      setTodos(todos);
    });
  };

  const handleDelete = (id: string) => {
    TodosService.removeTodo(id, async () => {
      const todos = await TodosService.getTodos();
      setTodos(todos);
    });
  };

  return (
    <Fragment>
      <div className="flex flex-col mt-5">
        <div className="mx-auto w-full max-w-xl space-y-4">
          <h1 className="text-2xl text-center font-semibold">Todo's App</h1>
          <div className="flex flex-col space-y-2">
            <Input
              type="text"
              name="title"
              value={todo.title}
              onChange={handleChange}
              placeholder="หัวข้อ"
            />
            <Input
              type="text"
              name="description"
              value={todo.description}
              onChange={handleChange}
              placeholder="รายละเอียด"
            />
          </div>
          <Button onSubmit={handleAddTodo}>เพิ่มรายข้อมูล</Button>
        </div>

        <div className="mx-auto w-full max-w-xl mt-5 space-y-5">
          {todos.map((todo: any) => {
            return (
              <TodosItem
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
