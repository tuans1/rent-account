package com.h2q.staffManagement.config.jwt;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.h2q.staffManagement.repository.AdminRepository;
import com.h2q.staffManagement.repository.entity.Admin;

@Service
public class AdminService implements UserDetailsService {
	@Autowired
	private AdminRepository adminRepository;

	@Override
	public UserDetails loadUserByUsername(String userName) {
		// Kiểm tra xem user có tồn tại trong database không?
		Admin admin = adminRepository.findByUserName(userName);
		if (admin == null) {
			throw new UsernameNotFoundException(userName);
		}
		return new CustomAdminDetail(admin);
	}
	@Transactional
    public UserDetails loadUserById(Long id) {
        Admin user = adminRepository.findById(id);
        if(user == null) {
        	throw new UsernameNotFoundException("User not found with id : " + id);
        }

        return new CustomAdminDetail(user);
    }
}
