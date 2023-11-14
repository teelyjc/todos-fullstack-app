package me.teelyjc.app.domains;

import java.util.UUID;

import lombok.Getter;
import lombok.Setter;

public class Todo {
    @Getter
    @Setter
    private String id;

    @Getter
    @Setter
    private String title;

    @Getter
    @Setter
    private String description;

    @Getter
    @Setter
    private boolean done;

    public Todo() {
    }

    public Todo(String title, String description) {
        this.id = UUID.randomUUID().toString();

        this.title = title;
        this.description = description;
    }
}
