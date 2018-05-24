package com.example.springbootcaseybook.repositories;

import com.example.springbootcaseybook.models.Friend;
import org.springframework.data.repository.CrudRepository;

public interface FriendRepository extends CrudRepository<Friend, Long> {

}