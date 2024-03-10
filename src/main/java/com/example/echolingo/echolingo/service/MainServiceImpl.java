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
        rules.setContent("   There are 25 cards, each with slang written on them.\n" +
                "        When a card is clicked, the Slang Master provides an example sentence using that slang. \n" +
                "        Afterward, when the \"Select\" button is clicked, the card turns either blue, red, or black \n" +
                "        (blue: 12 cards, red: 12 cards, black: 1 card). \n" +
                "        The Slang Master knows the color of the cards and mentions a word \n" +
                "        related to the slangs written on some of the blue cards, along with the number of cards (e.g., Energy 4). \n" +
                "        Please select cards you think are blue. \n" +
                "        If you choose a red card, the Slang Master will mention the next word and its number. \n" +
                "        If you choose a black card, it's game over. If you manage to guess all the blue cards with in the time, you win.\n");
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
