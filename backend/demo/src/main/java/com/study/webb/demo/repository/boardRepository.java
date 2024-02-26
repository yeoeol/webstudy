package com.study.webb.demo.repository;

import com.study.webb.demo.model.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface boardRepository extends JpaRepository<BoardEntity, Long> {
}
