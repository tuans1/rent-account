package com.h2q.staffManagement.repository.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper=false)
@Data
@Entity(name = "user")
public class User {
	@Id
	@GeneratedValue
	private Long id;
	@Column(name = "username")
	private String userName;
	
	@Column(name = "password")
	private String passWord;
}
