package com.example.springbootcaseybook.controllers;

import com.example.springbootcaseybook.models.ApplicationUser;
import com.example.springbootcaseybook.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@RestController
public class UsersController {

    @Autowired
        private UserRepository userRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UsersController(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("/api/users")
        public Iterable<ApplicationUser> findAllUsers () {
            return userRepository.findAll ();
        }

    @GetMapping("/api/users/{userId}")
        public Optional<ApplicationUser> findUserById(@PathVariable Long userId) {
            return userRepository.findById(userId);
        }

    @DeleteMapping("api/users/{userId}")
        public HttpStatus deleteUserById(@PathVariable Long userId) {
            userRepository.deleteById(userId);
            return HttpStatus.OK;
        }

    @PostMapping("/api/users")
        public ApplicationUser createNewUser(@RequestBody ApplicationUser newUser) {
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            return userRepository.save(newUser);
        }

    @PatchMapping("/api/users/{userId}")
        public ApplicationUser updateUserById(@PathVariable Long userId, @RequestBody ApplicationUser userRequest) {
            ApplicationUser userFromDb = userRepository.findById(userId).get();

            userFromDb.setFirstName(userRequest.getFirstName());
            userFromDb.setLastName(userRequest.getLastName());

            return userRepository.save(userFromDb);
        }
}