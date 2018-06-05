package com.example.springbootcaseybook.post;

import com.example.springbootcaseybook.post.Post;
import com.example.springbootcaseybook.post.PostRepository;
import com.example.springbootcaseybook.user.ApplicationUser;
import com.example.springbootcaseybook.user.ApplicationUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.xml.ws.Response;
import java.net.URI;
import java.util.Optional;

@RestController
public class PostsController {

    private final PostRepository postRepository;
    private final ApplicationUserRepository applicationUserRepository;

    @Autowired
    public PostsController(ApplicationUserRepository applicationUserRepository, PostRepository postRepository) {
        this.applicationUserRepository = applicationUserRepository;
        this.postRepository = postRepository;
    }

    @GetMapping("/api/posts")
    public Iterable<Post> findAllPosts () {
        return postRepository.findAll ();
    }

    @GetMapping("/api/posts/{postId}")
    public Optional<Post> findpostById(@PathVariable Long postId) {
        return postRepository.findById(postId);
    }

    @DeleteMapping("/api/posts/{postId}")
    public HttpStatus deletePostById(@PathVariable Long postId) {
        postRepository.deleteById(postId);
        return HttpStatus.OK;
    }

    @PostMapping("/api/{userId}/posts")
    ResponseEntity<?> createNewPost(@PathVariable long userId, @RequestBody Post post) {
        return this.applicationUserRepository.findById(userId)
                .map(applicationUser -> {
                    Post result = postRepository.save(new Post(applicationUser,
                            post.getUri(), post.getPosterUsername (), post.getTitle (),
                            post.getPostText (), post.getNumberOfLikes (), post.getNumberOfComments ()));
                    System.out.println(result);
                    URI location = ServletUriComponentsBuilder
                            .fromCurrentRequest ().path("/{id}")
                            .buildAndExpand(post.getId()).toUri();
                    return ResponseEntity.created(location).build();

                })
                .orElse(ResponseEntity.noContent().build());
    }

    @PutMapping("/api/posts/{postId}")
    public Post updatePostById(@PathVariable Long postId, @RequestBody Post postRequest) {
        Post postFromDb = postRepository.findById(postId).get();

        postFromDb.setTitle(postRequest.getTitle());
        postFromDb.setPostText(postRequest.getPostText());
        postFromDb.setNumberOfLikes(postRequest.getNumberOfLikes());
        postFromDb.setNumberOfComments(postRequest.getNumberOfComments());
        postFromDb.setAbleToView(postRequest.getAbleToView());

        return postRepository.save(postFromDb);
    }

    @GetMapping("/api/posts/user/{userId}")
    public Iterable<Post> getByPosterId(@PathVariable int userId) {
        return postRepository.getByPosterId (userId);
    }
}