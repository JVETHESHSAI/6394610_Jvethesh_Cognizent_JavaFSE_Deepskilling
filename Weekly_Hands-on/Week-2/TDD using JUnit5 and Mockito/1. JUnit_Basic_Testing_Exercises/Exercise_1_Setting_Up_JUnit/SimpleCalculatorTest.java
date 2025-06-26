package com.example.junitsetup;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SimpleCalculatorTest {

    @Test
    public void testAdd() {
        SimpleCalculator calc = new SimpleCalculator();
        int result = calc.add(2, 3);
        assertEquals(5, result);  // passes
    }
}
