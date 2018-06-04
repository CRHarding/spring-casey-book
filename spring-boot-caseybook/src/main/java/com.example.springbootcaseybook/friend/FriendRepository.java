package com.example.springbootcaseybook.friend;
import java.util.List;

import com.example.springbootcaseybook.friend.Friend;
import org.springframework.data.repository.CrudRepository;

public interface FriendRepository extends CrudRepository<Friend, Long> {
    List<Friend> findByStatus(int status);
    List<Friend> findByFriendSentRequest(int sentRequestFriend);
    List<Friend> findByFriendReceivedRequest(int receivedRequestFriend);
    List<Friend> findBySentRequestUsername(String sentRequestUsername);
    List<Friend> findByReceivedRequestUsername(String receivedRequestUsername);
}