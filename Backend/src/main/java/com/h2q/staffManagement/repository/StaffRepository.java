package com.h2q.staffManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.h2q.staffManagement.repository.entity.Staff;

public interface StaffRepository extends JpaRepository<Staff, String>{

}
