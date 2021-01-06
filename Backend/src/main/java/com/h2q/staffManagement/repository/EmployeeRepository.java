package com.h2q.staffManagement.repository;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.h2q.staffManagement.repository.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, String>{

	@Query(value = "select * from employee where employee_name like %?1% or id like %?1% order by  position desc ,employee_name asc"  ,nativeQuery = true)
	List<Employee> findByEmployeeNameContaining(String containing,Pageable pageable);
	
	@Query(value = "select count(employee_name) from employee where employee_name like %?1%" ,nativeQuery = true)
	Integer countByNameContaining(String containing);
}
