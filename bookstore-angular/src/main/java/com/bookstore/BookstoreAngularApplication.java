package com.bookstore;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.bookstore.config.SecurityUtility;
import com.bookstore.domain.User;
import com.bookstore.domain.security.Role;
import com.bookstore.domain.security.UserRole;
import com.bookstore.service.UserService;

@SpringBootApplication
public class BookstoreAngularApplication implements CommandLineRunner {
	
	@Autowired
	private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(BookstoreAngularApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception{
		User user1 = new User();
		user1.setFirstName("Joanne");
		user1.setLastName("Yang");
		user1.setUsername("joanne");
		user1.setPassword(SecurityUtility.passwordEncoder().encode("p"));
		user1.setEmail("joanneyang930@gmail.com");
		Set<UserRole> userRoles = new HashSet<>();
		Role role1 = new Role();
		role1.setRoleId(1);
		role1.setName("Role_User");
		userRoles.add(new UserRole(user1, role1));
		
		userService.createUser(user1, userRoles);
		
		userRoles.clear();
		
		User user2 = new User();
		user2.setFirstName("Admin");
		user2.setLastName("Admin");
		user2.setUsername("admin");
		user2.setPassword(SecurityUtility.passwordEncoder().encode("p"));
		user2.setEmail("code9yitati@gmail.com");
		userRoles = new HashSet<>();
		Role role2 = new Role();
		role2.setRoleId(0);
		role2.setName("Role_Admin");
		userRoles.add(new UserRole(user2, role2));
		
		userService.createUser(user2, userRoles);
	}
}
