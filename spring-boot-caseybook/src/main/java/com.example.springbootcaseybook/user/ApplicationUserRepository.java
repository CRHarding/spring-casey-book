package com.example.springbootcaseybook.user;

import org.springframework.data.repository.CrudRepository;

public interface ApplicationUserRepository extends CrudRepository<ApplicationUser, Long> {
    ApplicationUser save(ApplicationUser user);
}