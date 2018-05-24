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

    @GetMapping("/friends")
    public Iterable<Friend> findAllFriends () {
        return friendRepository.findAll ();
    }

    @GetMapping("/friends/{friendId}")
    public Optional<Friend> findFriendById(@PathVariable Long friendId) {
        return friendRepository.findById(friendId);
    }

    @DeleteMapping("friends/{friendId}")
    public HttpStatus deleteFriendById(@PathVariable Long friendId) {
        friendRepository.deleteById(friendId);
        return HttpStatus.OK;
    }

    @PostMapping("/friends")
    public Friend createNewFriend(@RequestBody Friend newFriend) {
        return friendRepository.save(newFriend);
    }

    @PatchMapping("/friends/{friendId}")
    public Friend updateFriendById(@PathVariable Long friendId, @RequestBody Friend friendRequest) {
        Friend friendFromDb = friendRepository.findById(friendId).get();

        friendFromDb.setStatus(friendRequest.getStatus());
        friendFromDb.setSentRequest(friendRequest.getSentRequest());
        friendFromDb.setReceivedRequest(friendRequest.getReceivedRequest());

        return friendRepository.save(friendFromDb);
    }
}