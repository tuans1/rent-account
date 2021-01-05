package com.h2q.staffManagement.controller.admin;

import java.util.UUID;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.h2q.staffManagement.config.exception.BusinessException;
import com.h2q.staffManagement.config.exception.ErrorCodes;
import com.h2q.staffManagement.config.jwt.CustomUserDetails;
import com.h2q.staffManagement.config.jwt.JwtTokenProvider;
import com.h2q.staffManagement.config.jwt.LoginRequest;
import com.h2q.staffManagement.config.jwt.LoginResponse;
import com.h2q.staffManagement.repository.UserRepository;
import com.h2q.staffManagement.repository.entity.Admin;

@RestController
@RequestMapping("/api")
public class AdminController {

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenProvider tokenProvider;
	@Autowired
	PasswordEncoder passwordEncoder;
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private JavaMailSender mailSender;

	@Async
	public void sendEmail(SimpleMailMessage email) {
		mailSender.send(email);
	}
	
	@PostMapping("/login")
	public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		// Xác thực thông tin người dùng Request lên
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		// Nếu không xảy ra exception tức là thông tin hợp lệ
		// Set thông tin authentication vào Security Context
		SecurityContextHolder.getContext().setAuthentication(authentication);

		// Trả về jwt cho người dùng.
		String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
		return new LoginResponse(jwt);
	}

	@PutMapping("/update")
	public void updateAdmin(@RequestParam String oldpw, String newpw) throws BusinessException {
		Admin admin = userRepo.findByEmail("toilakhang1@gmail.com");
		if (passwordEncoder.matches(oldpw, admin.getPassWord())) {
			admin.setPassWord(passwordEncoder.encode(newpw));
			 userRepo.saveAndFlush(admin);
		} else {
			throw new BusinessException(ErrorCodes.ADMIN_CHANGE_PASSWORD_INCORRECT);
		}
	}
	@PostMapping("/forgot_password")
	public void forgotPassword(@RequestParam String email) throws BusinessException {
		Admin admin = userRepo.findByEmail(email);
		String url = "http://localhost:3000/login";
		if(admin==null) {
			throw new BusinessException(ErrorCodes.ADMIN_EMAIL_INCORRECT);
		}
		admin.setResetToken(UUID.randomUUID().toString());
		SimpleMailMessage passwordResetEmail = new SimpleMailMessage();
		passwordResetEmail.setTo(admin.getEmail());
		passwordResetEmail.setSubject("Password Reset Request");
		passwordResetEmail.setText("To reset your password, click the link below:\n" + url
				+ "/reset_password?token=" + admin.getResetToken());
		mailSender.send(passwordResetEmail);
		
	}
	@PutMapping("/change_password")
	public void changePassword(@RequestParam String password,String token) throws BusinessException{
		Admin admin = userRepo.findByResetToken(token);
		if(admin != null) {
			admin.setPassWord(passwordEncoder.encode(password));
			userRepo.save(admin);
		}else {
			throw new BusinessException(ErrorCodes.ADMIN_TOKEN_INCORRECT);
		}
	}

}
