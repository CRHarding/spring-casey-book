package com.example.springbootcaseybook.post;

import lombok.*;
import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "POSTS")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "POSTER_ID")
    private int posterId;

    @Column(name = "POSTER_USERNAME")
    private String posterUsername;

    @Column(name = "POST_TEXT")
    private String postText;

    @Column(name = "NUMBER_OF_LIKES")
    private int numberOfLikes;

    @Column(name = "NUMBER_OF_COMMENTS")
    private int numberOfComments;

    @Column(name = "ABLE_TO_VIEW")
    private int ableToView;
}