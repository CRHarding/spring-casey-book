package com.example.springbootcaseybook.controllers;

import com.example.springbootcaseybook.models.Friend;
import com.example.springbootcaseybook.repositories.FriendRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class FriendsController {

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

    @PatchMapping("/api/friends/{friendId}")
    public Friend updateFriendById(@PathVariable Long friendId, @RequestBody Friend friendRequest) {
        Friend friendFromDb = friendRepository.findById(friendId).get();

        friendFromDb.setStatus(friendRequest.getStatus());
        friendFromDb.setSentRequest(friendRequest.getSentRequest());
        friendFromDb.setReceivedRequest(friendRequest.getReceivedRequest());

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
    @GetMapping("/api/friends/sent/{sentRequest}")
    public Iterable<Friend> findBySentRequest(@PathVariable int sentRequest) { return friendRepository.findBySentRequest(sentRequest); }

    @GetMapping("/api/friends/received/{receivedRequest}")
    public Iterable<Friend> findByReceivedRequest(@PathVariable int receivedRequest) { return friendRepository.findByReceivedRequest(receivedRequest); }

    /*
    //  Finds current friends for the user. The user either
    //  requested the friendship or received the request, hence
    //  querying for sentrequest or received request. Current
    //  friends are defined as having a status of 1, so I set
    //  that here to grab only current friends, and not pending
    //  friends. You shouldn't be able to see the posts of
    //  pending friends, eh?
     */
    @GetMapping("/api/friends/current/{userId}/{status}")
    public Iterable<Friend> findByStatusAndSentRequestOrStatusTwoAndReceivedRequest(@PathVariable(value="userId") int userId, @PathVariable(value="status") int status) {
        int sentRequest = userId;
        int receivedRequest = userId;
        return friendRepository.findByStatusAndSentRequestOrStatusAndReceivedRequest (status, sentRequest, status, receivedRequest);
    }
}