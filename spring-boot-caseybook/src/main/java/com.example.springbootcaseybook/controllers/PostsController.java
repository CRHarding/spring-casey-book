package com.example.springbootcaseybook.controllers;

import com.example.springbootcaseybook.models.Post;
import com.example.springbootcaseybook.repositories.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class PostsController {

    @Autowired
    private PostRepository postRepository;

    @GetMapping("/api/posts")
    public Iterable<Post> findAllPosts () {
        return postRepository.findAll ();
    }

    @GetMapping("/api/posts/{postId}")
    public Optional<Post> findpostById(@PathVariable Long postId) {
        return postRepository.findById(postId);
    }

    @DeleteMapping("api/posts/{postId}")
    public HttpStatus deletePostById(@PathVariable Long postId) {
        postRepository.deleteById(postId);
        return HttpStatus.OK;
    }

    @PostMapping("/api/posts")
    public Post createNewPost(@RequestBody Post newPost) {
        return postRepository.save(newPost);
    }

    @PatchMapping("/api/posts/{postId}")
    public Post updatePostById(@PathVariable Long postId, @RequestBody Post postRequest) {
        Post postFromDb = postRepository.findById(postId).get();

        postFromDb.setPostText(postRequest.getPostText());
        postFromDb.setNumberOfLikes(postRequest.getNumberOfLikes());
        postFromDb.setNumberOfComments(postRequest.getNumberOfComments());
        postFromDb.setAbleToView(postRequest.getAbleToView());

        return postRepository.save(postFromDb);
    }
}