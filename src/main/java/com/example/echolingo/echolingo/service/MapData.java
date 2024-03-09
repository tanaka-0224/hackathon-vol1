package com.example.echolingo.echolingo.service;

import java.lang.reflect.WildcardType;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class MapData {
    static final int WIDTH = 5;
    public static int numberOfCorrectCards = 9;
    public static int numberOfAssasinCards = 1;
    public static int numberOfTotalFunctionalCards = numberOfCorrectCards + numberOfAssasinCards;
    public static int[][] correctsAndAssasin = new int[numberOfTotalFunctionalCards][1];
    public static int[][] map = new int[WIDTH][WIDTH];

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

    // Determine 9 Correct cards and 1 Asasin card
    public static void correctAndAsasinSelection(String[] args) {
        int totalElements = WIDTH * WIDTH; // 総要素数
        Random rand = new Random();

        // 二次元配列の生成 (ここでは1から25までの数を順に配置)
        int[][] matrix = new int[WIDTH][WIDTH];
        for (int i = 0; i < WIDTH; i++) {
            for (int j = 0; j < WIDTH; j++) {
                matrix[i][j] = i * WIDTH + j + 1;
            }
        }

        // ランダムに選ぶ要素のインデックスを格納するためのSet
        Set<Integer> selectedIndexes = new HashSet<>();
        while (selectedIndexes.size() < numberOfTotalFunctionalCards) {
            int nextIndex = rand.nextInt(totalElements);
            selectedIndexes.add(nextIndex);
        }

        // 選んだインデックスに基づいて要素を表示
        // System.out.println("選んだ数値:");
        int indexCounter = 0;
        for (int index : selectedIndexes) {
            int i = index / WIDTH; // 行インデックス
            int j = index % WIDTH; // 列インデックス
            // System.out.println(matrix[i][j]);
            correctsAndAsasin[indexCounter][];
            indexCounter++;
        }
    }
}
