package com.example.springbootcaseybook.repositories;
import java.util.List;

import com.example.springbootcaseybook.models.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long> {
    public List<Comment> findByCommenterId(int commenterId);
    public List<Comment> findByPostId(int postId);

}