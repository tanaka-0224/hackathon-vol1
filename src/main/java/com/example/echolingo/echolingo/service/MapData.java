package com.example.echolingo.echolingo.service;

import java.lang.reflect.WildcardType;

public class MapData {
    static final int WIDTH = 5;
    static int[][] map = new int[WIDTH][WIDTH];

    public void mapInitialize() {
        for (int i = 0; i < WIDTH; i++) {
            for (int j = 0; j < WIDTH; j++) {
                map[i][j] = 0;
            }
        }
    }
}
