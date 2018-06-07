package com.example.springbootcaseybook.friend;

import com.example.springbootcaseybook.post.PostRepository;
import com.example.springbootcaseybook.user.ApplicationUser;
import com.example.springbootcaseybook.user.ApplicationUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FriendsController {

//    private final PostRepository postRepository;
//    private final ApplicationUserRepository applicationUserRepository;

//    @Autowired
//    public PostsController(ApplicationUserRepository applicationUserRepository, PostRepository postRepository) {
//        this.applicationUserRepository = applicationUserRepository;
//        this.postRepository = postRepository;
//    }


    @Autowired
    private FriendRepository friendRepository;

    @GetMapping("/api/friends")
    public Iterable<Friend> findAllFriends () {
        return friendRepository.findAll ();
    }

    @GetMapping("/api/friends/{friendId}")
    public Optional<Friend> findFriendById(@PathVariable Long friendId) {
        return friendRepository.findById(friendId);
    }

    @DeleteMapping("/api/friends/{friendId}")
    public HttpStatus deleteFriendById(@PathVariable Long friendId) {
        friendRepository.deleteById(friendId);
        return HttpStatus.OK;
    }

    @PostMapping("/api/friends")
    public Friend createNewFriend(@RequestBody Friend newFriend) {
        return friendRepository.save(newFriend);
    }

//    @PostMapping("/api/sent/{sentUsername}/friends")
//    ResponseEntity<?> createNewSentFriend(@PathVariable String sentUsername, @RequestBody Friend sentFriend) {
//        return this.friendRepository
//                .findBySentRequestUsername (sentUsername)
//                .map(applicationUser -> {
//                    Friend result = friendRepository.save(new Friend(applicationUser,
//                            sentFriend.getUri(), 1));
//                    System.out.println(result);
//                    URI location = ServletUriComponentsBuilder
//                            .fromCurrentRequst ().path("/{id}")
//                            .buildAndExpand(sentFriend.getId()).toUri();
//                    return ResponseEntity.created(location).build();
//                })
//                .orElse(ResponseEntity.noContent().build());
//    }
//
//    @PutMapping("/api/friends/{friendId}")
//    public Friend updateFriendById(@PathVariable Long friendId, @RequestBody Friend friendRequest) {
//        Friend friendFromDb = friendRepository.findById(friendId).get();
//
//        friendFromDb.setStatus(friendRequest.getStatus());
//
//        return friendRepository.save(friendFromDb);
//    }
//
//    @PutMapping("/api/friends/received/{sentFriendId}/{receivedFriendUsername}")
//    ResponseEntity<?> updateFriendToAddReceivedRequestUser(@PathVariable Long sentFriendId,@PathVariable String receivedFriendUsername,
//                                                           @RequestBody Friend receivedFriend) {
//        return friendRepository.setReceivedFriend(
//                friendRepository.findByReceivedRequestUsername(receivedFriendUsername)
//                .map(applicationUser -> {
//                    Friend result = friendRepository.save(new Friend(applicationUser,
//                            receivedFriend.getUri(), 1));
//                    System.out.println(result);
//                    URI location = ServletUriComponentsBuilder
//                            .fromCurrentRequest ().path("/{id}")
//                            .buildAndExpand(receivedFriend.getId()).toUri();
//                    return ResponseEntity.created(location).build();
//                })
//                .orElse(ResponseEntity.noContent().build())
//        );
//
//    }

    @PutMapping("/api/friends/{friendId}")
    public Friend updateFriendById(@PathVariable Long friendId, @RequestBody Friend friendRequest) {
        Friend friendFromDb = friendRepository.findById(friendId).get();

        friendFromDb.setStatus(friendRequest.getStatus());

        return friendRepository.save(friendFromDb);
    }

    @GetMapping("/api/friends/status/{status}")
    public Iterable<Friend> findByStatus(@PathVariable int status) { return friendRepository.findByStatus(status); }

    /*
    //  These two methods query the database for either
    //  sent friend requests or received friend requests
    //  to assist in displaying the results on the front
    //  end. Aka having both 'sentFriendRequests' and
    //  'receivedFriendRequests' in state to properly update
    //  the view.
     */
    @GetMapping("/api/friends/sent/{friendSentRequest}")
    public Iterable<Friend> findByFriendSentRequest(@PathVariable int friendSentRequest) { return friendRepository.findByFriendSentRequest(friendSentRequest); }

    @GetMapping("/api/friends/received/{friendReceivedRequest}")
    public Iterable<Friend> findByFriendReceivedRequest(@PathVariable int friendReceivedRequest) { return friendRepository.findByFriendReceivedRequest(friendReceivedRequest); }

    @GetMapping("/api/friends/sent/{sentRequestUsername}")
    public Iterable<Friend> findBySentRequestUsername(@PathVariable String sentRequestUsername) { return friendRepository.findBySentRequestUsername(sentRequestUsername); }

    @GetMapping("/api/friends/received/{receivedRequestUsername}")
    public Iterable<Friend> findByReceivedRequestUsername(@PathVariable String receivedRequestUsername) { return friendRepository.findByReceivedRequestUsername(receivedRequestUsername); }
}