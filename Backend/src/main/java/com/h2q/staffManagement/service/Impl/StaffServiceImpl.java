package com.h2q.staffManagement.service.Impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.h2q.staffManagement.config.exception.BusinessException;
import com.h2q.staffManagement.config.exception.ErrorCodes;
import com.h2q.staffManagement.controller.staff.model.StaffListModel;
import com.h2q.staffManagement.controller.staff.model.StaffModel;
import com.h2q.staffManagement.repository.StaffRepository;
import com.h2q.staffManagement.repository.entity.Staff;
import com.h2q.staffManagement.service.StaffService;

@Service
public class StaffServiceImpl implements StaffService {

	@Autowired
	private StaffRepository staffRepo;

	@Override
	public StaffListModel getStaffList(String containing, int page, int size) {
		List<Staff> records = staffRepo.findByStaffNameContaining(containing, PageRequest.of(page, size));
		Integer total = staffRepo.countByNameContaining(containing);
		return new StaffListModel(records, total);
	}

	@Override
	public void createStaff(StaffModel model) throws BusinessException{
		model.setId(UUID.randomUUID().toString().replace("-","").substring(0,4));
		Optional<Staff> staff = staffRepo.findById(model.getId());
		if(staff.isPresent()) {
			throw new BusinessException(ErrorCodes.STAFF_ID_IS_EXIST);
		}else {
			staffRepo.saveAndFlush(model.setStaff(model));
		}
	}

	@Override
	public void updateStaff(StaffModel model) {
		staffRepo.saveAndFlush(model.setStaff(model));
	}

	@Override
	public Staff getUpdateStaff(String id) throws BusinessException {
		Optional<Staff> staff = staffRepo.findById(id);
		return staff.isPresent() ? staff.get()
				: staff.orElseThrow(() -> new BusinessException(ErrorCodes.STAFF_ID_NOT_EXIST));
	}

	@Override
	public void deleteStaff(String id) throws BusinessException {
		getUpdateStaff(id);
		staffRepo.deleteById(id);
	}

}
