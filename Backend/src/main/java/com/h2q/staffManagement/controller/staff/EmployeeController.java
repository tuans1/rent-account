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
import com.h2q.staffManagement.controller.staff.model.EmployeeListModel;
import com.h2q.staffManagement.controller.staff.model.EmployeeModel;
import com.h2q.staffManagement.repository.entity.Employee;
import com.h2q.staffManagement.service.Impl.EmployeeServiceImpl;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	@Autowired
	private EmployeeServiceImpl employeeService;
	
	@GetMapping
	private EmployeeListModel findAll(@RequestParam int page, int size, String containing) {
		return employeeService.getEmployeeList(containing, page, size);
	}

	@GetMapping("/{id}")
	private Employee getUpdateEmployee(@PathVariable String id) throws BusinessException {
		return employeeService.getUpdateEmployee(id);
	}

	@PostMapping
	private void createEmployee(@RequestBody EmployeeModel model) throws BusinessException {
		employeeService.createEmployee(model);
	}

	@PutMapping
	private void updateEmployee(@RequestBody EmployeeModel model) {
		employeeService.updateEmployee(model);
	}

	@DeleteMapping("/{id}")
	private void deleteEmployee(@PathVariable String id) throws BusinessException {
		employeeService.deleteEmployee(id);
	}
}
