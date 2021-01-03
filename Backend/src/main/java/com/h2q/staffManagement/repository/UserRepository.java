package com.h2q.staffManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.h2q.staffManagement.repository.entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByUserName(String userName);
	
	User findByEmail(String email);

	@Query(value="select * from user where reset_token=?1",nativeQuery = true)
	User findByResetToken(String resetToken);
}
