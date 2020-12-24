package com.h2q.staffManagement.repository.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Data;
import lombok.EqualsAndHashCode;


@EqualsAndHashCode(callSuper=false)
@Data
@Entity
public class Staff extends BaseEntity{
	
	@Column(name = "staff_name")
	private String staffName;
	
	@Column(name = "phone")
	private String phone;
	
	@Column(name = "bank_account")
	private String bankAccount;
	
	@Column(name = "address")
	private String address;
	
	@Column(name= "salary")
	private Integer salary;
	
	@Column(name = "position")
	private String position;
	
	@Column(name = "joining_date")
	private String joiningDate;

}
