package me.teelyjc.app.controllers;

import java.util.ArrayList;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import me.teelyjc.app.domains.Todo;
import me.teelyjc.app.services.TodosService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TodosController {
    private TodosService todosService = new TodosService();

    @PostMapping("/add-todo")
    public ResponseEntity addTodo(
            @RequestParam(required = true) String title,
            @RequestParam(required = true) String description) {
        this.todosService.createTodo(title, description);
        return new ResponseEntity<>(HttpStatusCode.valueOf(200));
    }

    @DeleteMapping(path = "/delete-todo")
    public ResponseEntity deleteTodo(
            @RequestParam(required = true) String id) {
        this.todosService.removeTodo(id);
        return new ResponseEntity<>(HttpStatusCode.valueOf(200));
    }

    @GetMapping(path = "/get-todos")
    @ResponseBody
    public ResponseEntity<ArrayList<Todo>> getTodos() {
        return new ResponseEntity<ArrayList<Todo>>(this.todosService.getTodos(), HttpStatusCode.valueOf(200));
    }

    @GetMapping(path = "/get-todo")
    @ResponseBody
    public ResponseEntity<ArrayList<Todo>> getTodo(
            @RequestParam(required = false) String id) {
        return new ResponseEntity<ArrayList<Todo>>(this.todosService.getTodo(id), HttpStatusCode.valueOf(200));
    }
}
