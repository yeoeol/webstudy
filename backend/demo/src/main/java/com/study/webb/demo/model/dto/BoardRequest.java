package com.study.webb.demo.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class BoardRequest {
    private String userName;
    private String pw;
    private String title;
    private String comment;
}
