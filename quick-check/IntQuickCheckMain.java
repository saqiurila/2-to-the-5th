import java.util.function.IntPredicate;

public class IntQuickCheckMain {
    /**
     * For testing.
     */
    public static void main(String[] args) {
        int min = -10000, max = 10000;
        int length = 2, size = 10;

        IntPredicate len = IntGenerator.getPredicateForLength(length, false);
        IntPredicate bei = IntGenerator.getPredicateForMultiples(8, true);

        IntQuickCheck.iqk().min(min).max(max).size(size).filter(len).filter(bei).check(i -> isMultipleOfEight(i));

        System.out.println("All tests passed");
    }

    /**
     * The method under test. It has a bug.
     */
    public static boolean isMultipleOfEight(int number) {
        return number % 7 == 0;
    }
}
