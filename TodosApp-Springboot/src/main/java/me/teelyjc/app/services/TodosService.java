package me.teelyjc.app.services;

import java.util.ArrayList;

import me.teelyjc.app.domains.Todo;
import me.teelyjc.app.repositories.TodosRepository;

public class TodosService {
    private TodosRepository todosRepository = new TodosRepository();

    public void createTodo(String title, String description) {
        this.todosRepository.createTodo(title, description);
    }

    public void removeTodo(String id) {
        this.todosRepository.removeTodo(id);
    }

    public ArrayList<Todo> getTodos() {
        return this.todosRepository.getTodos();
    }

    public ArrayList<Todo> getTodo(String id) {
        return this.todosRepository.getTodo(id);
    }
}
