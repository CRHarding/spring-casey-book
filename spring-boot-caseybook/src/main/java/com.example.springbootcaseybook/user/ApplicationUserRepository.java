package com.example.springbootcaseybook.user;

import com.example.springbootcaseybook.post.Post;
import com.example.springbootcaseybook.user.ApplicationUser;
import org.springframework.data.repository.CrudRepository;

import java.util.Set;

public interface ApplicationUserRepository extends CrudRepository<ApplicationUser, Long> {
    ApplicationUser save(ApplicationUser user);
}