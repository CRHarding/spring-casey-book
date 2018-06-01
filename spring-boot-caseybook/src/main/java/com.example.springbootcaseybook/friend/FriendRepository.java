package com.example.springbootcaseybook.friend;
import java.util.List;

import com.example.springbootcaseybook.friend.Friend;
import org.springframework.data.repository.CrudRepository;

public interface FriendRepository extends CrudRepository<Friend, Long> {
    public List<Friend> findByStatus(int status);
    public List<Friend> findBySentRequest(int sentRequest);
    public List<Friend> findByReceivedRequest(int receivedRequest);
    public List<Friend> findByStatusAndSentRequestOrStatusAndReceivedRequest(int status, int sentRequest, int statustwo, int receivedRequest);
}