package com.example.springbootcaseybook.post;
import java.util.List;

import com.example.springbootcaseybook.post.Post;
import org.springframework.data.repository.CrudRepository;

public interface PostRepository extends CrudRepository<Post, Long> {
    public List<Post> getByPosterId(int userId);
}