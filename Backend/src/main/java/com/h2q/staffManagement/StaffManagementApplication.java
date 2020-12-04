package com.h2q.staffManagement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.h2q.staffManagement.repository.AdminRepository;
import com.h2q.staffManagement.repository.entity.Admin;

@SpringBootApplication
public class StaffManagementApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(StaffManagementApplication.class, args);
	}

	@Autowired
	AdminRepository userRepository;
	@Autowired
	PasswordEncoder passwordEncoder;

	@Override
	public void run(String... args) throws Exception {
		// Khi chương trình chạy
		// Insert vào csdl một user.
		Admin user = new Admin();
		user.setUserName("loda");
		user.setPassWord(passwordEncoder.encode("loda"));
		userRepository.save(user);
		System.out.println(user);
	}
}
