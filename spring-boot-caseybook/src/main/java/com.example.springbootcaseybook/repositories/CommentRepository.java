package com.example.springbootcaseybook.repositories;

import com.example.springbootcaseybook.models.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long> {

}