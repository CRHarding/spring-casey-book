package com.example.springbootcaseybook.friend;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import javax.persistence.*;

import com.example.springbootcaseybook.user.ApplicationUser;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "FRIENDS")
public class Friend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="FRIEND_SENT_REQUEST")
    @JsonIgnoreProperties("sentRequest")
    private ApplicationUser friendSentRequest;

    @ManyToOne
    @JoinColumn(name="FRIEND_RECEIVED_REQUEST")
    @JsonIgnoreProperties("receivedRequest")
    private ApplicationUser friendReceivedRequest;

    @Column(name = "SENT_REQUEST_USERNAME")
    private String sentRequestUsername;

    @Column(name = "RECEIVED_REQUEST_USERNAME")
    private String receivedRequestUsername;


    @Column(name = "STATUS")
    private int status;
}