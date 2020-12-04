package com.h2q.staffManagement.repository.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper=false)
@Data
@Entity(name = "admin")
public class Admin extends BaseEntity {
	@Column(name = "username")
	private String userName;
	
	@Column(name = "password")
	private String passWord;
}
