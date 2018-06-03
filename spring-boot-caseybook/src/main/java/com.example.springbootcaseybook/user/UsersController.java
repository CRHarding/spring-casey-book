package com.example.springbootcaseybook.user;

import com.example.springbootcaseybook.user.ApplicationUser;
import com.example.springbootcaseybook.user.ApplicationUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UsersController {

    @Autowired
    private ApplicationUserRepository applicationUserRepository;

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UsersController(ApplicationUserRepository applicationUserRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.applicationUserRepository = applicationUserRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @GetMapping("/users")
        public Iterable<ApplicationUser> findAllUsers () {
            return applicationUserRepository.findAll ();
        }

    @GetMapping("/users/{userId}")
        public Optional<ApplicationUser> findUserById(@PathVariable Long userId) {
            return applicationUserRepository.findById(userId);
        }

    @DeleteMapping("/users/{userId}")
        public HttpStatus deleteUserById(@PathVariable Long userId) {
            applicationUserRepository.deleteById(userId);
            return HttpStatus.OK;
        }

    @PostMapping("/users")
        public void createNewUser(@RequestBody ApplicationUser newUser) {
            System.out.println(newUser);
            newUser.setPassword(bCryptPasswordEncoder.encode(newUser.getPassword()));
            applicationUserRepository.save(newUser);
        }

    @PatchMapping("/users/{userId}")
        public ApplicationUser updateUserById(@PathVariable Long userId, @RequestBody ApplicationUser userRequest) {
            ApplicationUser userFromDb = applicationUserRepository.findById(userId).get();

            userFromDb.setFirstName(userRequest.getFirstName());
            userFromDb.setLastName(userRequest.getLastName());

            return applicationUserRepository.save(userFromDb);
        }
}