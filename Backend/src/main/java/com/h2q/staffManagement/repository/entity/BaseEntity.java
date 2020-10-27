package com.h2q.staffManagement.repository.entity;

import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.MappedSuperclass;

import lombok.Data;

@Data
@Inheritance
@MappedSuperclass
public class BaseEntity {

	@Id
	private String id;
}
