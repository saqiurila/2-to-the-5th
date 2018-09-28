import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.function.IntPredicate;

/**
 * Generates pseudorandom integers that meet custom criteria.
 * 
 * @author Jenny Saqiurila - cerner_2^5_2018
 */
public class IntGenerator {
    /**
     * Generates pseudorandom integers that match the given {@code predicates}.
     */
    public static int[] generateInts(List<IntPredicate> predicates, int min, int max, int size) {
        IntPredicate pred = predicates.stream().reduce(IntPredicate::and).orElse(x -> true);
        return new Random().ints(min, max).filter(pred).limit(size).toArray();
    }

    /**
     * Returns a predicate that does the following:
     * <ul>
     * <li>if {@code isGreaterThan} is {@code true}, checks if the number of digits of an
     * integer is greater than {@code length}</li>
     * <li>if {@code isGreaterThan} is {@code false}, checks if the number of digits of an
     * integer is smaller than or equal to {@code length}</li>
     * </ul>
     */
    public static IntPredicate getPredicateForLength(int length, boolean isGreaterThan) {
        return i -> String.valueOf(i).length() - (i < 0 ? 1 : 0) <= length ^ isGreaterThan;
    }

    /**
     * Returns a predicate that does the following:
     * <ul>
     * <li>if {@code isMultiple} is {@code true}, checks if an integer is a multiple of
     * {@code devider}</li>
     * <li>if {@code isMultiple} is {@code false}, checks if an integer is not a multiple
     * of {@code devider}</li>
     * </ul>
     */
    public static IntPredicate getPredicateForMultiples(int devider, boolean isMultiple) {
        return i -> i % devider == 0 ^ !isMultiple;
    }

    /**
     * (For testing purpose only.) Prints out 10 integers that have less than 3 degits and
     * are multiple of 8.
     */
    public static void main(String[] args) {
        // Avoid using a big range like this when trying to generate small numbers for time efficiency
        int min = Integer.MIN_VALUE, max = Integer.MAX_VALUE;
        int length = 2, size = 10;

        IntPredicate len = getPredicateForLength(length, false);
        IntPredicate bei = getPredicateForMultiples(8, true);

        Arrays.stream(generateInts(Arrays.asList(len, bei), min, max, size)).forEach(System.out::println);
    }
}