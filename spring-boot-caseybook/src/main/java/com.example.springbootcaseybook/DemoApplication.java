package com.example.springbootcaseybook;

import com.example.springbootcaseybook.friend.FriendRepository;
import com.example.springbootcaseybook.post.PostRepository;
import com.example.springbootcaseybook.user.ApplicationUser;
import com.example.springbootcaseybook.user.ApplicationUserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

//	@Bean
//	CommandLineRunner init(ApplicationUserRepository applicationUserRepository, PostRepository postRepository, FriendRepository friendRepository) {
//		return (evt) -> Arrays.asList("jhoeller,dsyer,pwebb,ogierke,rwinch,mfisher,mpollack,jlong".split(",")))
//		.forEach(
//				a -> {
//					ApplicationUser applicationUser = applicationUserRepository.save(new ApplicationUser (a, ))
//				}
//		)
//	}
}
