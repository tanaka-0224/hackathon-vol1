package com.example.echolingo.echolingo.service;

import com.example.echolingo.echolingo.po.Menu;
import com.example.echolingo.echolingo.po.Rules;
import com.example.echolingo.echolingo.po.Game;

public interface MainService {
    Menu getMenu();
    Rules getRules();
    Game getGame();
}
