package com.demo.app.services;

import com.demo.app.model.User;

import java.util.Optional;

public interface UserService {
    Optional<User> create(String username, String password);
}
