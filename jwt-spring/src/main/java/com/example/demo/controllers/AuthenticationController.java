package com.example.demo.controllers;

import com.example.demo.controllers.dtos.CredentialsDto;
import com.example.demo.controllers.dtos.JwtDto;
import com.example.demo.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/authentication")
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @Autowired
    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping
    public ResponseEntity<?> authenticate(@Valid @RequestBody CredentialsDto credentialsDto) {
        String jwt = authenticationService.authenticate(
                credentialsDto.getUsername(),
                credentialsDto.getPassword());

        return ResponseEntity.ok(new JwtDto(jwt));
    }
}
