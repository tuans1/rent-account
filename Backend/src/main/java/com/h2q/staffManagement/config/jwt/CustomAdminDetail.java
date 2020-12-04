package com.h2q.staffManagement.config.jwt;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.h2q.staffManagement.repository.entity.Admin;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CustomAdminDetail implements UserDetails {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Admin admin;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// Mặc định mình sẽ để tất cả là ROLE_USER. Để demo cho đơn giản.
		return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
	}

	@Override
	public String getPassword() {
		return admin.getPassWord();
	}

	@Override
	public String getUsername() {
		return admin.getUserName();
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
