package com.example.demo.controllers;

import com.example.demo.controllers.dtos.CredentialsDto;
import com.example.demo.controllers.dtos.UserDto;
import com.example.demo.model.User;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/enrollment")
    public ResponseEntity<?> signup(@Valid @RequestBody CredentialsDto credentialsDto) {
        Optional<User> optionalUser = userService.create(
                credentialsDto.getUsername(),
                credentialsDto.getPassword());

        return optionalUser.<ResponseEntity<?>>map(
                (user) -> new ResponseEntity<>(
                        UserDto.from(user),
                        HttpStatus.CREATED)
        ).orElseGet(
                () -> new ResponseEntity<>(HttpStatus.BAD_REQUEST)
        );
    }
}
