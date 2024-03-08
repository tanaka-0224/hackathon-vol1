package com.example.echolingo.echolingo.controller;

import com.example.echolingo.echolingo.po.Menu;
import com.example.echolingo.echolingo.po.Rules;
import com.example.echolingo.echolingo.po.Game;
import com.example.echolingo.echolingo.po.Result;
import com.example.echolingo.echolingo.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/")
public class MainController {

    @Autowired
    private MainService mainService;
    
    @GetMapping("/")
    // public String requestMethodName(@RequestParam String param) {
    public ResponseEntity<Menu> navigateToMainmenu(Model model) {
        Menu menu = mainService.getMenu();
        return ResponseEntity.ok(menu);
    }

    @GetMapping("/rules")
    public ResponseEntity<Rules> navigateToRules() {
        Rules rules = mainService.getRules();
        return ResponseEntity.ok(rules);
    }

    // @PostMapping("/gamesession")
    // public String navigateToGameSession(Model model) {
    //     model.addAttribute("message", "Game Session");
    //     return "gamesession";
    // }
    @GetMapping("/game")
    public ResponseEntity<Game> navigateToGame(Model model) {
        Game game = mainService.getGame();
        return ResponseEntity.ok(game);
    }

    @GetMapping("/result")
    public ResponseEntity<Result> navigateToResult() {
        Result result = mainService.getResult();
        return ResponseEntity.ok(result);
    }
}
