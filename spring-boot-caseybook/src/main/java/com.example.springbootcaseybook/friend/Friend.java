package com.example.springbootcaseybook.friend;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JoinColumn(name="SENT_REQUEST")
    @JsonIgnore
    private ApplicationUser sentRequest;

    @ManyToOne
    @JoinColumn(name="RECEIVED_REQUEST")
    @JsonIgnore
    private ApplicationUser receivedRequest;

    @Column(name = "STATUS")
    private int status;
}