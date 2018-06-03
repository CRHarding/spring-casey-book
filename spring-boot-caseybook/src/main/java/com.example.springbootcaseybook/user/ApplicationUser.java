package com.example.springbootcaseybook.user;

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

    @OneToMany(mappedBy = "posterId")
    private Set<Post> posts = new HashSet<> ();

    @OneToMany(mappedBy = "sentRequest")
    private Set<Friend> sentRequestFriends = new HashSet<> ();

    @OneToMany(mappedBy = "receivedRequest")
    private Set<Friend> receivedRequestFriends = new HashSet<> ();

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