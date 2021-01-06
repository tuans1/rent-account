package com.h2q.staffManagement.service.Impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.h2q.staffManagement.config.exception.BusinessException;
import com.h2q.staffManagement.config.exception.ErrorCodes;
import com.h2q.staffManagement.controller.staff.model.EmployeeListModel;
import com.h2q.staffManagement.controller.staff.model.EmployeeModel;
import com.h2q.staffManagement.repository.EmployeeRepository;
import com.h2q.staffManagement.repository.entity.Employee;
import com.h2q.staffManagement.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository staffRepo;

	@Override
	public EmployeeListModel getEmployeeList(String containing, int page, int size) {
		List<Employee> records = staffRepo.findByEmployeeNameContaining(containing, PageRequest.of(page, size));
		Integer total = staffRepo.countByNameContaining(containing);
		return new EmployeeListModel(records, total);
	}

	@Override
	public void createEmployee(EmployeeModel model) throws BusinessException{
		model.setId(UUID.randomUUID().toString().replace("-","").substring(0,4));
		Optional<Employee> employee = staffRepo.findById(model.getId());
		if(employee.isPresent()) {
			throw new BusinessException(ErrorCodes.STAFF_ID_IS_EXIST);
		}else {
			staffRepo.saveAndFlush(model.setStaff(model));
		}
	}

	@Override
	public void updateEmployee(EmployeeModel model) {
		staffRepo.saveAndFlush(model.setStaff(model));
	}

	@Override
	public Employee getUpdateEmployee(String id) throws BusinessException {
		Optional<Employee> employee = staffRepo.findById(id);
		return employee.isPresent() ? employee.get()
				: employee.orElseThrow(() -> new BusinessException(ErrorCodes.STAFF_ID_NOT_EXIST));
	}

	@Override
	public void deleteEmployee(String id) throws BusinessException {
		getUpdateEmployee(id);
		staffRepo.deleteById(id);
	}

}
