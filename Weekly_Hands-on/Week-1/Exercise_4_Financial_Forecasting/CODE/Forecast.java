package FinancialForecasting;

public class Forecast {

    // Recursive method to calculate future value
    public static double predictValue(int year, double initialValue, double growthRate) {
        if (year == 0) {
            return initialValue;
        }
        // Calculate current year's value based on previous year's
        return predictValue(year - 1, initialValue, growthRate) * (1 + growthRate);
    }
}
