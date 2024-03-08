package com.example.echolingo.echolingo.service;

import java.lang.reflect.WildcardType;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class MapData {
    static final int WIDTH = 5;
    static int[][] map = new int[WIDTH][WIDTH];

    public void MapData() {
        mapInitialize();
    }    

    public void mapInitialize() {
        for (int i = 0; i < WIDTH; i++) {
            for (int j = 0; j < WIDTH; j++) {
                map[i][j] = 0;
            }
        }

        Set<Integer> selectedNumbers = new HashSet<>();
        Random random = new Random();

        int count = 0;
        while (selectedNumbers.size() < WIDTH * WIDTH) {
            int number = 1 + random.nextInt(65);
            if (selectedNumbers.add(number)) {
                map[count / WIDTH][count % WIDTH] = number;
                count++;
            }
        }

        // Display this matrix map
        // for (int i = 0; i < WIDTH; i++) {
        //     for (int j = 0; j < WIDTH; j++) {
        //         System.out.print(map[i][j] + " ");
        //     }
        //     System.out.println();
        // }
    }
}
