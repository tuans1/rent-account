package com.h2q.staffManagement.controller.staff.model;

import java.util.List;

import com.h2q.staffManagement.repository.entity.Employee;

import lombok.Data;

@Data
public class EmployeeListModel {
	
	private List<Employee> records;
	
	private Integer total;
	
	public EmployeeListModel(List<Employee> records ,Integer total) {
		this.records = records;
		
		this.total = total;
	}
}
