package com.study.webb.demo.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@AllArgsConstructor
public class BoardResponse {

    private Long boardNum;
    private String userName;
    private String pw;
    private String Sector;
    private String title;
    private String comment;
    private Long likeCount;
}
