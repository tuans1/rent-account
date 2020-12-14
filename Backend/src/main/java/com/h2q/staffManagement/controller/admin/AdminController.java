package com.h2q.staffManagement.controller.admin;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.h2q.staffManagement.config.jwt.CustomUserDetails;
import com.h2q.staffManagement.config.jwt.JwtTokenProvider;
import com.h2q.staffManagement.config.jwt.LoginRequest;
import com.h2q.staffManagement.config.jwt.LoginResponse;
import com.h2q.staffManagement.config.jwt.RandomStuff;
import com.h2q.staffManagement.repository.UserRepository;
import com.h2q.staffManagement.repository.entity.User;

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
    @PostMapping("/login")
    public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        // Xác thực thông tin người dùng Request lên
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );

        // Nếu không xảy ra exception tức là thông tin hợp lệ
        // Set thông tin authentication vào Security Context
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Trả về jwt cho người dùng.
        String jwt = tokenProvider.generateToken((CustomUserDetails) authentication.getPrincipal());
        return new LoginResponse(jwt);
    }

    // Api /api/random yêu cầu phải xác thực mới có thể request
    
    @PutMapping("/admin")
    public User updateAdmin(@RequestBody User nick) {
    	User user = new User();
    	user.setId(nick.getId());
    	user.setUserName(nick.getUserName());
    	user.setPassWord(passwordEncoder.encode(nick.getPassWord()));
    	System.out.println(nick);
    	return userRepo.saveAndFlush(user);
    
    }
    
}
