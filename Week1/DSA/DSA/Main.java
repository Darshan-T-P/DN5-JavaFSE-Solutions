package FinancialForecasting;

public class Main {
    public static void main(String[] args) {

        // Investment details
        double presentValue = 100000.0; // ₹1,00,000 initial investment
        double growthRate   = 0.12;     // 12% annual growth rate
        int    years        = 5;        // predict for 5 years

        System.out.println("======= FINANCIAL FORECASTING TOOL =======");
        System.out.println("Present Value  : ₹" + presentValue);
        System.out.println("Annual Growth  : " + (growthRate * 100) + "%");
        System.out.println("Forecast Period: " + years + " years");

        // Recursive prediction
        double recursiveResult = FinancialForecasting
                .predictFutureValueRecursive(presentValue, growthRate, years);
        System.out.printf("%nRecursive Result  : ₹%.2f%n", recursiveResult);

        // Iterative prediction
        double iterativeResult = FinancialForecasting
                .predictFutureValueIterative(presentValue, growthRate, years);
        System.out.printf("Iterative Result  : ₹%.2f%n", iterativeResult);

        // Both should match
        System.out.println("Both match: " + (Math.abs(recursiveResult - iterativeResult) < 0.01));

        // Year by year breakdown
        FinancialForecasting.showYearlyBreakdown(presentValue, growthRate, years);

        System.out.println("\n======= COMPLEXITY ANALYSIS =======");
        System.out.println("Recursive → Time: O(n)  Space: O(n) due to call stack");
        System.out.println("Iterative → Time: O(n)  Space: O(1) — more efficient");
        System.out.println("For large n, iterative is preferred to avoid stack overflow.");
    }
}