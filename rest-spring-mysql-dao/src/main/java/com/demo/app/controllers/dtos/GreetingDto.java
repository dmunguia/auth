package com.demo.app.controllers.dtos;

public class GreetingDto {
    private String message;

    public GreetingDto(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
