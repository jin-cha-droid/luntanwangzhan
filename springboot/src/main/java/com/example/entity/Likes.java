package com.example.entity;

import lombok.Data;

@Data
public class Likes {
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    private Integer id;
    private Integer userId;
    private Integer fid;
    private String module;
}
