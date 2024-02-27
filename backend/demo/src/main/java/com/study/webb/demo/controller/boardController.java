package com.study.webb.demo.controller;

import com.study.webb.demo.model.BoardEntity;
import com.study.webb.demo.model.dto.BoardRequest;
import com.study.webb.demo.model.dto.BoardResponse;
import com.study.webb.demo.model.dto.LikeRequest;
import com.study.webb.demo.model.dto.UpdateRequest;
import com.study.webb.demo.service.boardService;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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
        List<BoardResponse> boardResponseList = boardEntities.stream()
                .map(o -> new BoardResponse(
                        o.getBoardNum(), o.getUserName(), o.getPw(),
                        o.getSector(), o.getTitle(), o.getComment(), o.getLikeCount()))
                .collect(Collectors.toList());

        return new ResponseEntity<>(new BoardResult(boardResponseList), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<BoardResult> create(@RequestBody BoardRequest request) {
        BoardEntity board = service.newWrite(request);
        BoardResponse boardResponse = new BoardResponse(
                board.getBoardNum(), board.getUserName(), board.getPw(),
                board.getSector(), board.getTitle(), board.getComment(), board.getLikeCount()
        );

        return new ResponseEntity<>(new BoardResult(boardResponse), HttpStatus.OK);
    }

    @GetMapping("/{boardNum}")
    public ResponseEntity<BoardResult> readOne(@PathVariable Long boardNum) {
        BoardEntity board = service.searchOne(boardNum);
        BoardResponse boardResponse = new BoardResponse(
                board.getBoardNum(), board.getUserName(), board.getPw(),
                board.getSector(), board.getTitle(), board.getComment(), board.getLikeCount()
        );

        return new ResponseEntity<>(new BoardResult(boardResponse), HttpStatus.OK);
    }

    @GetMapping("/best")
    public ResponseEntity<BoardResult> readBestBoard() {
        List<BoardEntity> boardEntities = service.searchBestBoard();

        List<BoardResponse> boardResponseList = boardEntities.stream()
                .map(o -> new BoardResponse(
                        o.getBoardNum(), o.getUserName(), o.getPw(),
                        o.getSector(), o.getTitle(), o.getComment(), o.getLikeCount()))
                .collect(Collectors.toList());

        return new ResponseEntity<>(new BoardResult(boardResponseList), HttpStatus.OK);
    }

    @GetMapping("/{boardNum}/check")
    public ResponseEntity<BoardResult> checkPassword(@PathVariable Long boardNum, @RequestBody BoardRequest request) {
        BoardEntity board = service.searchOne(boardNum);
        if (board.getPw().equals(request.getPw())) {
            return new ResponseEntity<>(new BoardResult(board), HttpStatus.OK);
        }
        return null;
    }

    @PatchMapping("/{boardNum}")
    public ResponseEntity<BoardResult> update(@PathVariable Long boardNum, @RequestBody UpdateRequest request) {
        BoardEntity board = service.updateOne(boardNum, request);

        BoardResponse boardResponse = new BoardResponse(
                board.getBoardNum(), board.getUserName(), board.getPw(),
                board.getSector(), board.getTitle(), board.getComment(), board.getLikeCount()
        );

        return new ResponseEntity<>(new BoardResult(boardResponse), HttpStatus.OK);
    }
}
