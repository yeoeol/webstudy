package com.study.webb.demo.service;

import com.study.webb.demo.model.BoardEntity;
import com.study.webb.demo.model.dto.BoardRequest;
import com.study.webb.demo.repository.boardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class boardService {

    private final boardRepository repository;

    @Transactional
    public BoardEntity newWrite(BoardRequest request) {
        BoardEntity boardEntity = BoardRequest.toBoardEntity(request);
        return repository.save(boardEntity);
    }

    public List<BoardEntity> searchAll() {
        return repository.findAll();
    }
}
