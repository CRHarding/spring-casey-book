package com.example.springbootcaseybook.user;

import com.example.springbootcaseybook.user.ApplicationUser;
import org.springframework.data.repository.CrudRepository;

public interface ApplicationUserRepository extends CrudRepository<ApplicationUser, Long> {
    ApplicationUser save(ApplicationUser user);
    ApplicationUser findByUsername(String username);
}