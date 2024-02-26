package com.study.webb.demo.controller;

import com.study.webb.demo.model.BoardEntity;
import com.study.webb.demo.model.dto.BoardRequest;
import com.study.webb.demo.model.dto.BoardResponse;
import com.study.webb.demo.service.boardService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RequestMapping("/board")
@Controller
public class boardController {

    private final boardService service;

    @Data
    @AllArgsConstructor
    static class BoardResult<T> {
        private T data;
    }

    @GetMapping
    public ResponseEntity<BoardResult> readAll() {
        List<BoardEntity> boardEntities = service.searchAll();
        List<BoardResponse> collect = boardEntities.stream()
                .map(o -> new BoardResponse(
                        o.getBoardNum(), o.getUserName(), o.getSector(),
                        o.getTitle(), o.getComment(), o.getLikeCount(), o.getWriteDate()))
                .collect(Collectors.toList());

        return new ResponseEntity<>(new BoardResult(collect), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BoardResult> create(@RequestBody BoardRequest request) {
        BoardEntity board = service.newWrite(request);
        BoardResponse boardResponse = new BoardResponse(
                board.getBoardNum(), board.getUserName(), board.getSector(),
                board.getTitle(), board.getComment(), board.getLikeCount(), board.getWriteDate());

        return new ResponseEntity<>(new BoardResult(boardResponse), HttpStatus.OK);
    }
}
