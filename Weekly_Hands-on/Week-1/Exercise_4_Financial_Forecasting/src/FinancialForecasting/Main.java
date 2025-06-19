package FinancialForecasting;

import java.text.DecimalFormat;

public class Main {
    public static void main(String[] args) {
        double initialValue = 10000.0; // e.g., ₹10,000 initial investment
        double growthRate = 0.08; // 8% annual growth
        int years = 5;

        DecimalFormat df = new DecimalFormat("#.##");
        for (int i = 0; i <= years; i++) {
            double predictedValue = Forecast.predictValue(i, initialValue, growthRate);
            System.out.println("Year " + i + ": ₹" + df.format(predictedValue));
        }
    }
}
