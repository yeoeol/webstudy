package com.study.webb.demo.repository;

import com.study.webb.demo.model.BoardEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface boardRepository extends JpaRepository<BoardEntity, Long> {
    List<BoardEntity> findTop3ByOrderByLikeCountDesc();
}
