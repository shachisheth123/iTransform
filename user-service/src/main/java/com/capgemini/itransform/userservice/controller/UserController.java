package com.capgemini.itransform.userservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.capgemini.itransform.userservice.entity.User;
import com.capgemini.itransform.userservice.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

	@Autowired
	UserService service;
	
	@Autowired
	RestTemplate restTemplate;
	
	@PostMapping("/user")
	public ResponseEntity<User> addNewUser(@RequestBody User user) {
		User user1 = service.addNewUser(user);
		
		return new ResponseEntity<User>(user1, HttpStatus.CREATED);
	}
	
	
	@GetMapping("/user/{userName}/{password}")
	public ResponseEntity<User> getUserByUserName(@PathVariable String userName,@PathVariable String password){
		return new ResponseEntity<User>(service.getUserByUserName(userName,password), HttpStatus.OK);
	}
	
	@PutMapping("/user")
	public ResponseEntity<User> updateUser(@RequestBody User user){
		return new ResponseEntity<User>(service.updateUser(user),HttpStatus.OK);
	}
}
