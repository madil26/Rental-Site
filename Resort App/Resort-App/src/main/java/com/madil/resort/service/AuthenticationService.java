package com.madil.resort.service;

import com.madil.resort.model.Role;
import com.madil.resort.model.User;
import com.madil.resort.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public User registerUser(String firstname, String lastname, String email, String password, Role role) {
        String encodedPassword = passwordEncoder.encode(password);

        return userRepository.save(new User(firstname, lastname, email, encodedPassword, role));
    }


    public boolean isValidPassword(User user, String rawPassword) {
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }

}
