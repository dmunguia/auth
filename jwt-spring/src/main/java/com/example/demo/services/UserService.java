package com.example.demo.services;

import com.example.demo.model.User;

import java.util.Optional;

public interface UserService {
    Optional<User> create(String username, String password);
}
