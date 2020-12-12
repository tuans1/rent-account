package com.h2q.staffManagement.controller.admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AdminController {

    // Api /api/random yêu cầu phải xác thực mới có thể request
    @GetMapping("/login")
    public String randomStuff(){
        return ("JWT Hợp lệ mới có thể thấy được message này");
    }
    
}
