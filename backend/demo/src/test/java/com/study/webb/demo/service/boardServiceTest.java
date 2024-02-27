package com.study.webb.demo.service;

import com.study.webb.demo.model.BoardEntity;
import com.study.webb.demo.repository.boardRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class boardServiceTest {

    @Autowired
    private boardRepository repository;
    @Test
    void searchBestBoard() {
        List<BoardEntity> list = repository.findTop3ByOrderByLikeCountDesc();
        for (BoardEntity board : list) {
            System.out.println(board.getBoardNum());
        }
    }
}