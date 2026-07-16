package com.cognizant.employee_management_system.service;


import com.cognizant.employee_management_system.entity.Department;
import com.cognizant.employee_management_system.repository.DepartmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {

    private final DepartmentRepository repository;

    public DepartmentService(DepartmentRepository repository) {
        this.repository = repository;
    }

    public Department save(Department department) {
        return repository.save(department);
    }

    public List<Department> getAllDepartments() {
        return repository.findAll();
    }

    public Department getDepartmentById(Integer id) {
        return repository.findById(id).orElse(null);
    }

    public void deleteDepartment(Integer id) {
        repository.deleteById(id);
    }
}