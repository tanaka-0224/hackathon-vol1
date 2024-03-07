package com.example.echolingo.echolingo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class MainController {

    @RequestMapping(value="/", method=RequestMethod.GET)
    // public String requestMethodName(@RequestParam String param) {
    public String requestMethodName(Model model) {
        model.addAttribute("title", "EchoLingo");
        model.addAttribute("message", "This Web app is designed to learn English slangs");
        return "mainmenu";
    }

}
