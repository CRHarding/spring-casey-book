package com.example.springbootcaseybook.repositories;

import com.example.springbootcaseybook.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}