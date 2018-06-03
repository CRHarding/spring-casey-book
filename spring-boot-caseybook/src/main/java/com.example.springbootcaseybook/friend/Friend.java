package com.example.springbootcaseybook.friend;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "FRIENDS")
public class Friend {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "STATUS")
    private int status;

    @Column(name = "SENT_REQUEST")
    private int sentRequest;

    @Column(name = "RECEIVED_REQUEST")
    private int receivedRequest;

    @Column(name = "SENT_REQUEST_USERNAME")
    private String sentRequestUsername;

    @Column(name = "RECEIVED_REQUEST_USERNAME")
    private String receivedRequestUsername;
}