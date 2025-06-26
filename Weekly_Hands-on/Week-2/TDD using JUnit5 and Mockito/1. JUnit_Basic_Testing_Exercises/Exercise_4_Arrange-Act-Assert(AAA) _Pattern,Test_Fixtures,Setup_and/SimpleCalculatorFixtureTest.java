package com.example.junitsetup;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SimpleCalculatorFixtureTest {

    private SimpleCalculator calculator;

    // 🔧 Setup method – runs before each test
    @BeforeEach
    public void setUp() {
        System.out.println("Setting up before test...");
        calculator = new SimpleCalculator();  // Arrange
    }

    // 🧹 Teardown method – runs after each test
    @AfterEach
    public void tearDown() {
        System.out.println("Cleaning up after test...");
        calculator = null;
    }

    @Test
    public void testAddition() {
        // Act
        int result = calculator.add(4, 6);

        // Assert
        assertEquals(10, result);
    }

    @Test
    public void testAdditionWithNegative() {
        int result = calculator.add(-2, 5);
        assertEquals(3, result);
    }
}
