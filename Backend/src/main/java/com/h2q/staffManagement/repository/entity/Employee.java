package com.h2q.staffManagement.repository.entity;

import javax.persistence.Column;
import javax.persistence.Entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = false)
@Data
@Entity(name = "employee")
public class Employee extends BaseEntity {
	@Column(name = "employee_name")
	private String employeeName;

	@Column(name = "phone")
	private String phone;

	@Column(name = "grade")
	private String grade;

	@Column(name = "address")
	private String address;

	@Column(name = "salary")
	private String salary;

	@Column(name = "position")
	private String position;

	@Column(name = "joining_date")
	private String joiningDate;

	@Column(name = "allowance")
	private String allowance;

	@Column(name = "loan")
	private String loan;
}
