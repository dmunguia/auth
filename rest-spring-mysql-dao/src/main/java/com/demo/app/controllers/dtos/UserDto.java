package com.demo.app.controllers.dtos;

import com.demo.app.model.User;

public class UserDto {

    private Long id;
    private String username;

    public static UserDto from(User user) {
        return new UserDto(user.getId(), user.getUsername());
    }

    private UserDto(Long id, String username) {
        this.id = id;
        this.username = username;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }
}
