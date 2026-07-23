package FinancialForecasting;

public class FinancialForecasting {

    // ── Recursive approach ──────────────────────────────────────────
    // Formula: futureValue = presentValue × (1 + growthRate)^years
    // Recursive: each year's value = previous year × (1 + growthRate)

    public static double predictFutureValueRecursive(
            double presentValue, double growthRate, int years) {

        // Base case: no more years to calculate
        if (years == 0) {
            return presentValue;
        }

        // Recursive case: grow by one year, then recurse for remaining years
        double valueAfterOneYear = presentValue * (1 + growthRate);
        return predictFutureValueRecursive(valueAfterOneYear, growthRate, years - 1);
    }

    // ── Iterative approach (for comparison) ─────────────────────────
    public static double predictFutureValueIterative(
            double presentValue, double growthRate, int years) {

        double value = presentValue;
        for (int i = 0; i < years; i++) {
            value = value * (1 + growthRate);
        }
        return value;
    }

    // ── Show year-by-year breakdown ──────────────────────────────────
    public static void showYearlyBreakdown(
            double presentValue, double growthRate, int years) {

        System.out.println("\nYear-by-Year Financial Forecast:");
        System.out.println("─────────────────────────────────────");
        System.out.printf("%-6s %-20s%n", "Year", "Projected Value (₹)");
        System.out.println("─────────────────────────────────────");

        double value = presentValue;
        System.out.printf("%-6d %-20.2f%n", 0, value);

        for (int year = 1; year <= years; year++) {
            value = value * (1 + growthRate);
            System.out.printf("%-6d %-20.2f%n", year, value);
        }
        System.out.println("─────────────────────────────────────");
    }
}