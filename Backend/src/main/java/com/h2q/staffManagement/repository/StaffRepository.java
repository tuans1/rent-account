package com.h2q.staffManagement.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.h2q.staffManagement.repository.entity.Staff;

public interface StaffRepository extends JpaRepository<Staff, String>{

	@Query(value = "select * from staff where staff_name like %?1% order by  position desc ,staff_name asc"  ,nativeQuery = true)
	List<Staff> findByStaffNameContaining(String containing,Pageable pageable);
	
	@Query(value = "select count(staff_name) from staff where staff_name like %?1%" ,nativeQuery = true)
	Integer countByNameContaining(String containing);
}
