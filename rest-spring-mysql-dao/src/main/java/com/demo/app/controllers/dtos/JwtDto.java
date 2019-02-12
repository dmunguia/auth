package com.demo.app.controllers.dtos;

public class JwtDto {
    private static final String TOKEN_TYPE_BEARER = "Bearer";

    private String token;

    public JwtDto(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public String getTokenType() {
        return TOKEN_TYPE_BEARER;
    }
}
