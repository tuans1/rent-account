package com.h2q.staffManagement.controller.staff;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.h2q.staffManagement.repository.StaffRepository;
import com.h2q.staffManagement.repository.entity.Staff;

@RestController
@RequestMapping("/api/staff")
public class StaffController {

	@Autowired
	private StaffRepository staffRepo;
	
	@GetMapping
	public List<Staff> findAll() {
		System.out.println("RUN");
		return staffRepo.findAll();
	}
	
	@DeleteMapping
	public void deleteStaff(@PathVariable String id) {
		staffRepo.deleteById(id);
	}
}
