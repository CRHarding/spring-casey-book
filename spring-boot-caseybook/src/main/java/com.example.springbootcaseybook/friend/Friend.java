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


//package com.example.springbootcaseybook.friend;
//
//        import com.fasterxml.jackson.annotation.JsonBackReference;
//        import com.fasterxml.jackson.annotation.JsonIgnore;
//        import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
//        import lombok.*;
//        import javax.persistence.*;
//
//        import com.example.springbootcaseybook.user.ApplicationUser;
//
//@AllArgsConstructor
//@NoArgsConstructor
//@Getter
//@Setter
//@Entity
//@Table(name = "FRIENDS")
//public class Friend {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @ManyToOne
//    @JoinColumn(name="FRIEND_SENT_REQUEST")
//    @JsonIgnoreProperties("sentRequest")
//    private ApplicationUser friendSentRequest;
//
//    @ManyToOne
//    @JoinColumn(name="FRIEND_RECEIVED_REQUEST")
//    @JsonIgnoreProperties("receivedRequest")
//    private ApplicationUser friendReceivedRequest;
//
//    private String uri;
//
//    public Friend(final ApplicationUser friendSentRequest, final ApplicationUser friendReceivedRequest,
//                  final String uri, final int status, final String sentRequestUsername,
//                  final String receivedRequestUsername) {
//        this.friendReceivedRequest = friendReceivedRequest;
//        this.friendSentRequest = friendSentRequest;
//        this.uri = uri;
//        this.status = status;
//        this.sentRequestUsername = sentRequestUsername;
//        this.receivedRequestUsername = receivedRequestUsername;
//    }
//
//    public static Friend from(ApplicationUser friendReceivedRequest, ApplicationUser friendSentRequest, Friend friend) {
//        return new Friend(friendReceivedRequest, friendSentRequest, friend.uri,
//                friend.getStatus (), friend.getSentRequestUsername (), friend.getReceivedRequestUsername ());
//    }
//
//    @Column(name = "SENT_REQUEST_USERNAME")
//    private String sentRequestUsername;
//
//    @Column(name = "RECEIVED_REQUEST_USERNAME")
//    private String receivedRequestUsername;
//
//
//    @Column(name = "STATUS")
//    private int status;
//}