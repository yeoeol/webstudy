package com.study.webb.demo.service;

import com.study.webb.demo.model.BoardEntity;
import com.study.webb.demo.model.dto.BoardRequest;
import com.study.webb.demo.model.dto.UpdateRequest;
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

    @Transactional
    public BoardEntity searchOne(Long boardNum) {
        BoardEntity board = repository.findById(boardNum).orElse(null);
        if (board != null) {
            board.setLikeCount(board.getLikeCount() + 1);
        }
        return board;
    }

    public List<BoardEntity> searchBestBoard() {
        return repository.findTop3ByOrderByLikeCountDesc();
    }

    @Transactional
    public BoardEntity updateOne(Long boardNum, UpdateRequest updateRequest) {
        BoardEntity board = repository.findById(boardNum).orElseGet(null);
        if (board != null) {
            System.out.println("hi");
            board.setSector(updateRequest.getSector());
            board.setTitle(updateRequest.getTitle());
            board.setComment(updateRequest.getComment());
        }
        return board;
    }
}
