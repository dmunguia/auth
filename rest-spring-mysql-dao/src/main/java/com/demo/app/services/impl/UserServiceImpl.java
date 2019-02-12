package com.demo.app.services.impl;

import com.demo.app.daos.UserDao;
import com.demo.app.model.User;
import com.demo.app.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserDao userDao;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserDao userDao, PasswordEncoder passwordEncoder) {
        this.userDao = userDao;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public Optional<User> create(String username, String password) {
        Boolean userAlreadyExists = userDao.existsByUsername(username);
        if (userAlreadyExists) {
            return Optional.empty();
        } else {
            User user = new User(username, passwordEncoder.encode(password));
            return Optional.of(userDao.create(user));
        }
    }
}
