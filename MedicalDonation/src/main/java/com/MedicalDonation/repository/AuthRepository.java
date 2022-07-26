package com.MedicalDonation.repository;

import com.MedicalDonation.model.Blog;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
public interface AuthRepository extends JpaRepository<Blog,Long> {
    Optional<Blog> findByUsername(String username);
}
