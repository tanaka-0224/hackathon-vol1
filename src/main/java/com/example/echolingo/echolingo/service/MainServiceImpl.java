package com.example.echolingo.echolingo.service;

import com.example.echolingo.echolingo.po.Menu;
import com.example.echolingo.echolingo.po.Rules;
import com.example.echolingo.echolingo.po.Game;
import com.example.echolingo.echolingo.po.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MainServiceImpl implements MainService{
    //@Autowired
    //RulesRepository rulesRepository;
    @Override
    public Rules getRules(){
        Rules rules = new Rules();
        rules.setTitle("Welcome to EchoLingo's code game!");
        rules.setContent("Here is our rule.");
        return rules;
    }

    //if you want to get data from database, could use this method
    /*
    @Override
    public Rules getRules(){
        Rules rules = rulesRepository.findByTitle();
        return rules;
    }
     */
    @Override
    public Menu getMenu(){
        Menu menu = new Menu();
        menu.setTitle("EchoLingo");
        menu.setMessage("This Web app is designed to learn English slangs");
        return menu;
    }

    @Override
    public Game getGame() {
        Game game = new Game();
        game.setTitle("Game Session");
        game.setMessage("Start Game!");
        return game;
    }

    @Override
    public Result getResult() {
        Result result = new Result();
        result.setTitle("Result");
        result.setMessage("Game Result");
        return result;
    }
}
