package com.example.springbootcaseybook.user;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;

import com.example.springbootcaseybook.post.Post;
import com.example.springbootcaseybook.friend.Friend;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "USERS")
public class ApplicationUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "posterId", cascade=CascadeType.ALL)
    @JsonIgnoreProperties("posterId")
    private Set<Post> posts = new HashSet<> ();

    @OneToMany(mappedBy = "friendSentRequest", cascade=CascadeType.ALL)
    @JsonIgnoreProperties("friendSentRequest")
    private Set<Friend> sentRequest = new HashSet<> ();

    @OneToMany(mappedBy = "friendReceivedRequest", cascade=CascadeType.ALL)
    @JsonIgnoreProperties("friendReceivedRequest")
    private Set<Friend> receivedRequest = new HashSet<> ();

    public Set<Post> getPosts() {
        return posts;
    }

    public Set<Friend> getFriendSentRequest() {
        return sentRequest;
    }

    public Set<Friend> getFriendReceivedRequest() {
        return receivedRequest;
    }

    @Column(name = "USERNAME")
    private String username;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "ABOUT_ME")
    private String aboutMe;

    @Column(name = "PASSWORD")
    private String password;
}