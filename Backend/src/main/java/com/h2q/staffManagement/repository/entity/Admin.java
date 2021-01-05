package com.h2q.staffManagement.repository.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper=false)
@Data
@Entity(name = "user")
public class User implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "username")
	private String userName;
	
	@Column(name = "password")
	private String passWord;
	
	@Column(name = "email")
	private String email;
	
	@Column(name="reset_token")
	private String resetToken;
}
