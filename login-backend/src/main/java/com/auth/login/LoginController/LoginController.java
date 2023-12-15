package com.auth.login.LoginController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class LoginController {
    
    @PostMapping(value="demo")
    public String demoapp(){
        return "Welcome";
    }    
}
