package com.h2q.staffManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.h2q.staffManagement.repository.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByUserName(String userName);
	
}
