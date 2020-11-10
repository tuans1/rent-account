package com.h2q.staffManagement.controller.staff;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.h2q.staffManagement.config.exception.BusinessException;
import com.h2q.staffManagement.controller.staff.model.StaffListModel;
import com.h2q.staffManagement.controller.staff.model.StaffModel;
import com.h2q.staffManagement.repository.entity.Staff;
import com.h2q.staffManagement.service.Impl.StaffServiceImpl;

@RestController
@RequestMapping("/api/staff")
public class StaffController {
	
	@Autowired
	private StaffServiceImpl staffService;
	
	@GetMapping
	private StaffListModel findAll(@RequestParam int page, int size ,String containing) {
		return staffService.getStaffList(containing, page, size);
	}
	
	@GetMapping("/{id}")
	private Staff getUpdateStaff(@PathVariable String id) throws BusinessException {
		return staffService.getUpdateStaff(id);
	}
	
	@PostMapping
	private void createStaff(@RequestBody StaffModel model) {
		staffService.createStaff(model);
	}
	
	@PutMapping
	private void updateStaff(@RequestBody StaffModel model) {
		staffService.updateStaff(model);
	}
	
	@DeleteMapping("/{id}")
	private void deleteStaff(@PathVariable String id) {
		System.out.println(id);
//		staffRepo.deleteById(id);
	}
}
