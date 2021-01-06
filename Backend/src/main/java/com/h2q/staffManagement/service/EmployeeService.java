package com.h2q.staffManagement.service;

import com.h2q.staffManagement.config.exception.BusinessException;
import com.h2q.staffManagement.controller.staff.model.EmployeeListModel;
import com.h2q.staffManagement.controller.staff.model.EmployeeModel;
import com.h2q.staffManagement.repository.entity.Employee;

public interface EmployeeService {
	EmployeeListModel getEmployeeList(String containing, int page, int size) ;
	
	void createEmployee(EmployeeModel model) throws BusinessException;
	
	void updateEmployee(EmployeeModel model);
	
	Employee getUpdateEmployee(String id) throws BusinessException ;
	
	void deleteEmployee(String id) throws BusinessException;
}
