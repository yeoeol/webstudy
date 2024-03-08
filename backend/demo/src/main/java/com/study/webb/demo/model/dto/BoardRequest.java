package com.study.webb.demo.model.dto;

import com.study.webb.demo.model.BoardEntity;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BoardRequest {
    private String userName;
    private String pw;
    private String Sector;
    private String title;
    private String comment;

    public static BoardEntity toBoardEntity(BoardRequest request) {
        BoardEntity boardEntity = new BoardEntity();
        boardEntity.setUserName(request.getUserName());
        boardEntity.setPw(request.getPw());
        boardEntity.setSector(request.getSector());
        boardEntity.setTitle(request.getTitle());
        boardEntity.setComment(request.getComment());
        boardEntity.setLikeCount(0L);

        return boardEntity;
    }
}
