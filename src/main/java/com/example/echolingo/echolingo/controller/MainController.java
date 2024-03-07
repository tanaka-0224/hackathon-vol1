package com.example.echolingo.echolingo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@Controller
public class MainController {

    @RequestMapping(value="/", method=RequestMethod.GET)
    // public String requestMethodName(@RequestParam String param) {
    public String requestMethodName(Model model) {
        model.addAttribute("title", "EchoLingo");
        model.addAttribute("message", "This Web app is designed to learn English slangs");
        return "mainmenu";
    }

    @PostMapping("/Rules")
    public String navigateToRules(Model model) {
        model.addAttribute("gameRules", "Game rules\n1. rule 1\n2. rule 2\n.\n.\n.");
        // return new ModelAndView("redirect:/rules");
        return "rules";
    }

    @PostMapping("/Gamesession")
    public String navigateToGameSession(Model model) {
        model.addAttribute("message", "Game Session");
        return "gamesession";
    }
    
    
}
