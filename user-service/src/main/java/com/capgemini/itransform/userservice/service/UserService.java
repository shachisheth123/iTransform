package com.capgemini.itransform.userservice.service;

import com.capgemini.itransform.userservice.entity.User;

public interface UserService {

	public User addNewUser(User user);
	
	public User getUserByUserName(String userName,String password);
	
	public User updateUser(User user);
}
