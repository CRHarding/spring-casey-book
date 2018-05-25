package com.example.springbootcaseybook.controllers;

import com.example.springbootcaseybook.models.User;
import com.example.springbootcaseybook.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class UsersController {

    @Autowired
        private UserRepository userRepository;

    @GetMapping("/api/users")
        public Iterable<User> findAllUsers () {
            return userRepository.findAll ();
        }

    @GetMapping("/api/users/{userId}")
        public Optional<User> findUserById(@PathVariable Long userId) {
            return userRepository.findById(userId);
        }

    @DeleteMapping("api/users/{userId}")
        public HttpStatus deleteUserById(@PathVariable Long userId) {
            userRepository.deleteById(userId);
            return HttpStatus.OK;
        }

    @PostMapping("/api/users")
        public User createNewUser(@RequestBody User newUser) {
            return userRepository.save(newUser);
        }

    @PatchMapping("/api/users/{userId}")
        public User updateUserById(@PathVariable Long userId, @RequestBody User userRequest) {
            User userFromDb = userRepository.findById(userId).get();

            userFromDb.setFirstName(userRequest.getFirstName());
            userFromDb.setLastName(userRequest.getLastName());

            return userRepository.save(userFromDb);
        }
}