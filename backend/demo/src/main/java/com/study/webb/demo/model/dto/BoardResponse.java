package com.study.webb.demo.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter @Setter
@AllArgsConstructor
public class BoardResponse {

    private Long boardNum;

    private String userName;

    private String Sector;
    private String title;
    private String comment;
    private Long likeCount;
    private LocalDateTime writeDate;
}
