package com.example.echolingo.echolingo.service;

import com.example.echolingo.echolingo.po.Menu;
import com.example.echolingo.echolingo.po.Rules;
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
}
