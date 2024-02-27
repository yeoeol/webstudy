package com.study.webb.demo.service;

import com.study.webb.demo.model.BoardEntity;
import com.study.webb.demo.model.dto.BoardRequest;
import com.study.webb.demo.model.dto.LikeRequest;
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

    public BoardEntity searchOne(Long boardNum) {
        BoardEntity board = repository.findById(boardNum).orElse(null);
        return board;
    }

    public List<BoardEntity> searchAll() {
        return repository.findAll();
    }

    public List<BoardEntity> searchBestBoard() {
        return repository.findTop3ByOrderByLikeCountDesc();
    }

    @Transactional
    public BoardEntity newWrite(BoardRequest request) {
        BoardEntity boardEntity = BoardRequest.toBoardEntity(request);
        return repository.save(boardEntity);
    }

    @Transactional
    public BoardEntity updateOne(Long boardNum, UpdateRequest updateRequest) {
        BoardEntity board = repository.findById(boardNum).orElseGet(null);
        if (board != null) {
            board.setSector(updateRequest.getSector());
            board.setTitle(updateRequest.getTitle());
            board.setComment(updateRequest.getComment());
        }
        return board;
    }

    @Transactional
    public BoardEntity updateOneLike(Long boardNum, LikeRequest request) {
        BoardEntity board = repository.findById(boardNum).orElseGet(null);
        if (board != null) {
            if (request.getLike()) {
                board.setLikeCount(board.getLikeCount() + 1);
            } else {
                board.setLikeCount(board.getLikeCount() - 1);
            }
        }
        return board;
    }
}
