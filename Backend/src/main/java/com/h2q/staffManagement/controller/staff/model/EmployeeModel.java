package com.h2q.staffManagement.controller.staff.model;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.h2q.staffManagement.repository.entity.Employee;

import lombok.Data;

@Data
public class EmployeeModel {

	private String id;

	private String employeeName;

	private String phone;

	private String position;

	private String address;

	private String salary;

	private String grade;

	private Date joiningDate;
	
	private String loan;
	
	private String allowance;

	public Employee setStaff(EmployeeModel model) {
		Employee employee = new Employee();
		employee.setId(model.getId());
		employee.setEmployeeName(model.getEmployeeName());
		employee.setPhone(model.getPhone());
		employee.setPosition(model.getPosition());
		employee.setAddress(model.getAddress());
		employee.setSalary(model.getSalary());
		employee.setGrade(model.getGrade());
		employee.setLoan(model.getLoan());
		employee.setAllowance(model.getAllowance());
		employee.setJoiningDate(new SimpleDateFormat("dd-MM-yyyy").format(model.getJoiningDate()));
		return employee;
	}
}
