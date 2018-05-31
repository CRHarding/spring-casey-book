package com.example.springbootcaseybook.repositories;

import com.example.springbootcaseybook.models.ApplicationUser;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<ApplicationUser, Long> {
    ApplicationUser findByUserName(String userName);
}