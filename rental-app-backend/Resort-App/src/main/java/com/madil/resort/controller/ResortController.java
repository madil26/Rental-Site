package com.madil.resort.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.madil.resort.model.Role;
import com.madil.resort.model.User;
import com.madil.resort.repository.UserRepository;
import com.madil.resort.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.madil.resort.model.ResortModel;
import com.madil.resort.repository.ResortRepository;
import com.madil.resort.config.LoginRequest;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/resorts")
public class ResortController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ResortRepository resortRepo;

    @GetMapping(value = {"", "/"})
    public ResponseEntity<String> getWebsite() {
        return ResponseEntity.ok("Resorts Home Page");
    }


    @PostMapping(value = {"/register", "/register/"})
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            // Email already exists, handle accordingly
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Email already exists");
        }
        User registeredUser = authenticationService.registerUser(user.getFirstname(), user.getLastname(), user.getEmail(), user.getPassword(), Role.USER);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping(value = {"/login", "/login/"})
    public ResponseEntity<String> loginUser(@RequestBody LoginRequest loginRequest) {
        Optional<User> existingUser = userRepository.findByEmail(loginRequest.getEmail());
        if (existingUser.isEmpty() || !authenticationService.isValidPassword(existingUser.get(), loginRequest.getPassword())) {
            // User not found or password is incorrect
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Error: Invalid email or password");
        }

        // You can add additional checks or logic here if needed

        return ResponseEntity.ok("User logged in successfully");
    }




    @GetMapping("/results/{id}")
    public ResponseEntity<List<ResortModel.Resort>> getResortsById(@PathVariable String id) {
        List<ResortModel> resortDocumentsById = resortRepo.findAll();
        if (!resortDocumentsById.isEmpty()) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = {"/results", "/results/"})
    public ResponseEntity<List<ResortModel.Resort>> getAllResorts() {
        System.out.println("Received request for all documents");

        List<ResortModel> allResortDocuments = resortRepo.findAll();

        if (!allResortDocuments.isEmpty()) {
            List<ResortModel.Resort> allResorts = allResortDocuments.stream()
                    .flatMap(resortDocument -> resortDocument.getMyResort().stream())
                    .collect(Collectors.toList());

            return ResponseEntity.ok(allResorts);
        }

        System.out.println("No documents found");
        return ResponseEntity.notFound().build();
    }
}
