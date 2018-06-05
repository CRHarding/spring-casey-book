package com.example.springbootcaseybook.post;

import com.example.springbootcaseybook.user.ApplicationUser;
import com.example.springbootcaseybook.user.ApplicationUserRepository;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import java.util.List;
import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "POSTS")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="POSTER_ID")
    @JsonIgnoreProperties("posts")
    private ApplicationUser posterId;

    private String uri;

    public Post(final ApplicationUser applicationUser, final String uri, final String posterUsername,
                final String title, final String postText, final int numberOfLikes, final int numberOfComments) {
        this.posterId = applicationUser;
        this.uri = uri;
        this.posterUsername = posterUsername;
        this.title = title;
        this.postText = postText;
        this.numberOfLikes = numberOfLikes;
        this.numberOfComments = numberOfComments;
    }

    public static Post from(ApplicationUser applicationUser, Post post) {
        return new Post(applicationUser, post.uri, post.getPosterUsername (), post.getTitle (), post.getPostText (),
                post.getNumberOfLikes (), post.getNumberOfComments ());
    }

    @Column(name = "POSTER_USERNAME")
    private String posterUsername;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "POST_TEXT")
    private String postText;

    @Column(name = "NUMBER_OF_LIKES")
    private int numberOfLikes;

    @Column(name = "NUMBER_OF_COMMENTS")
    private int numberOfComments;

    @Column(name = "ABLE_TO_VIEW")
    private int ableToView;
}