package com.h2q.staffManagement.controller.staff.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

import com.h2q.staffManagement.repository.entity.Staff;

import lombok.Data;

@Data
public class StaffModel {

	private String id;
	
	private String staffName;
	
	private String phone;
	
	private String position;
	
	private String address;
	
	private Integer salary;
	
	private String bankAccount;
	
	private Date joiningDate;
	
	public Staff setStaff(StaffModel model) {
		Staff staff = new Staff();
		if(model.getId() == null) {
			staff.setId(UUID.randomUUID().toString());
		}else {
			staff.setId(model.getId());
		}
		staff.setStaffName(model.getStaffName());
		staff.setPhone(model.getPhone());
		staff.setPosition(model.getPosition());
		staff.setAddress(model.getAddress());
		staff.setSalary(model.getSalary());
		staff.setBankAccount(model.getBankAccount());
		staff.setJoiningDate(new SimpleDateFormat("dd-MM-yyyy").format(model.getJoiningDate()));
		return staff;
	}
}
