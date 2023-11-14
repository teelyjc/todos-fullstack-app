package me.teelyjc.app.repositories;

import java.util.ArrayList;

import me.teelyjc.app.domains.Todo;

public class TodosRepository {
    private ArrayList<Todo> todosList = new ArrayList<Todo>();

    public void createTodo(String title, String description) {
        this.todosList.add(new Todo(title, description));
        return;
    }

    public void removeTodo(String id) {
        ArrayList<Todo> todos = new ArrayList<Todo>();

        for (int i = 0; i < this.todosList.size(); i += 1) {
            if (!this.todosList.get(i).getId().contains(id)) {
                todos.add(this.todosList.get(i));
            }
        }

        this.todosList = todos;
        return;
    }

    public ArrayList<Todo> getTodos() {
        ArrayList<Todo> todos = new ArrayList<Todo>();

        if (this.todosList.size() == 0 || this.todosList.isEmpty()) {
            return todos;
        }

        for (int i = 0; i < this.todosList.size(); i += 1) {
            todos.add(this.todosList.get(i));
        }

        return todos;
    }

    public ArrayList<Todo> getTodo(String id) {
        ArrayList<Todo> todos = new ArrayList<Todo>();

        if (this.todosList.size() == 0 || this.todosList.isEmpty()) {
            return todos;
        }

        for (int i = 0; i < this.todosList.size(); i += 1) {
            if (this.todosList.get(i).getId().toString().contains(id)) {
                todos.add(this.todosList.get(i));
            }
        }

        return todos;
    }
}
