package com.h2q.staffManagement.controller.staff.model;

import java.util.List;

import com.h2q.staffManagement.repository.entity.Staff;

import lombok.Data;

@Data
public class StaffListModel {
	
	private List<Staff> records;
	
	private Integer total;
	
	public StaffListModel(List<Staff> records ,Integer total) {
		this.records = records;
		
		this.total = total;
	}
}
