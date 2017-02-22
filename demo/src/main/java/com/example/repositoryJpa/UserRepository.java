package com.example.repositoryJpa;

import com.example.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository   extends JpaRepository<User, Long>
{

    Optional<User> findOneByUsername(String login);
}
