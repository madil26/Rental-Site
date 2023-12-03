package com.madil.resort.config;

import java.util.Objects;

public class LoginRequest {

    private String email;
    private String password;

    public LoginRequest() {
        // Default constructor for frameworks like Spring to instantiate the class
    }

    public LoginRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    // Getters and setters

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    // You might want to override toString(), hashCode(), and equals() as well
    // based on your specific requirements.

    @Override
    public String toString() {
        return "LoginRequest{" +
                "email='" + email + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, password);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        LoginRequest that = (LoginRequest) obj;
        return Objects.equals(email, that.email) && Objects.equals(password, that.password);
    }
}
