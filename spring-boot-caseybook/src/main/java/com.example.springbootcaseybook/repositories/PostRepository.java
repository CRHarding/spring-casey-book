package com.example.springbootcaseybook.repositories;
import java.util.List;

import com.example.springbootcaseybook.models.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {
    public List<Post> getByPosterId(int userId);
}