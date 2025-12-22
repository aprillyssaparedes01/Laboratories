package com.dugan.lab7.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.dugan.lab7.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
