package com.h2q.staffManagement.service;

import com.h2q.staffManagement.config.exception.BusinessException;
import com.h2q.staffManagement.controller.staff.model.StaffListModel;
import com.h2q.staffManagement.controller.staff.model.StaffModel;
import com.h2q.staffManagement.repository.entity.Staff;

public interface StaffService {
	StaffListModel getStaffList(String containing, int page, int size);
	
	void createStaff(StaffModel model);
	
	void updateStaff(StaffModel model);
	
	Staff getUpdateStaff(String id) throws BusinessException ;
	
	void deleteStaff(String id);
}
