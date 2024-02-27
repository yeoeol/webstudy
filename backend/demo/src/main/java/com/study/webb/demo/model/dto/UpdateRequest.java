package com.study.webb.demo.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class UpdateRequest {
    private String Sector;
    private String title;
    private String comment;
}
