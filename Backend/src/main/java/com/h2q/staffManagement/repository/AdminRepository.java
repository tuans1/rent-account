package com.h2q.staffManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.h2q.staffManagement.repository.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, String>{
	Admin findByUserName(String userName);
	
	Admin findById(long id);
}
