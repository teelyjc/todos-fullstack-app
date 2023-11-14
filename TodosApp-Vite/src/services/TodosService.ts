import { fetch } from "@/libs/Fetch";

class TodosService {
  public getTodos() {
    return fetch
      .get("/get-todos")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public getTodo(id: string) {
    fetch
      .get("/get-todo", { params: { id: id } })
      .then(() => {})
      .catch(() => {});
  }

  public createTodo(title: string, description: string, callback?: () => void) {
    fetch
      .post(
        "/add-todo",
        {},
        {
          params: {
            title: title,
            description: description,
          },
        }
      )
      .then(() => {
        callback && callback();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  public removeTodo(id: string, callback?: () => void) {
    fetch
      .delete("/delete-todo", {
        params: {
          id: id,
        },
      })
      .then(() => {
        callback && callback();
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default new TodosService();
