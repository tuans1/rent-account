package com.h2q.staffManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.h2q.staffManagement.repository.entity.Admin;

public interface UserRepository extends JpaRepository<Admin, Long>{
	Admin findByUserName(String userName);
	
	Admin findByEmail(String email);

	@Query(value="select * from user where reset_token=?1",nativeQuery = true)
	Admin findByResetToken(String resetToken);
}
