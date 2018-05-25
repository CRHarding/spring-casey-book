package com.example.springbootcaseybook.controllers;

import com.example.springbootcaseybook.models.Comment;
import com.example.springbootcaseybook.repositories.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CommentsController {

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("/api/comments")
    public Iterable<Comment> findAllComments () {
        return commentRepository.findAll ();
    }

    @GetMapping("/api/comments/{commentId}")
    public Optional<Comment> findCommentById(@PathVariable Long commentId) {
        return commentRepository.findById(commentId);
    }

    @DeleteMapping("api/comments/{commentId}")
    public HttpStatus deleteCommentById(@PathVariable Long commentId) {
        commentRepository.deleteById(commentId);
        return HttpStatus.OK;
    }

    @PostMapping("/api/comments")
    public Comment createNewComment(@RequestBody Comment newComment) {
        return commentRepository.save(newComment);
    }

    @PatchMapping("/api/comments/{commentId}")
    public Comment updateCommentById(@PathVariable Long commentId, @RequestBody Comment commentRequest) {
        Comment commentFromDb = commentRepository.findById(commentId).get();

        commentFromDb.setCommentText(commentRequest.getCommentText());
        commentFromDb.setNumberOfLikes(commentRequest.getNumberOfLikes());

        return commentRepository.save(commentFromDb);
    }
}