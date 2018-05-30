package com.example.springbootcaseybook.repositories;
import java.util.List;

import com.example.springbootcaseybook.models.Friend;
import org.springframework.data.repository.CrudRepository;

public interface FriendRepository extends CrudRepository<Friend, Long> {
    public List<Friend> findByStatus(int status);
    public List<Friend> findBySentRequest(int sentRequest);
    public List<Friend> findByReceivedRequest(int receivedRequest);
    public List<Friend> findByStatusAndSentRequestOrStatusAndReceivedRequest(int status, int sentRequest, int statustwo, int receivedRequest);
}