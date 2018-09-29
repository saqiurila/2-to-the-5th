import java.util.*; // asterisks are just for saving lines..
import java.util.function.*;

/**
 * Tests methods with auto generated test data.
 * 
 * @author Jenny Saqiurila - cerner_2^5_2018
 */
public class IntQuickCheck {
    private static final int DEFAULT_TEST_DATA_SIZE = 100, DEFAULT_MIN = -100, DEFAULT_MAX = 100;
    private int numberOfInt = DEFAULT_TEST_DATA_SIZE;
    private int min = DEFAULT_MIN;
    private int max = DEFAULT_MAX;
    private List<IntPredicate> predicates = new ArrayList<>();

    private IntQuickCheck() {}

    public static IntQuickCheck iqk() {
        return new IntQuickCheck();
    }

    public IntQuickCheck filter(IntPredicate predicate) {
        predicates.add(predicate);
        return this;
    }

    public IntQuickCheck size(int size) {
        numberOfInt = size;
        return this;
    }

    public IntQuickCheck min(int min) {
        this.min = min;
        return this;
    }

    public IntQuickCheck max(int max) {
        this.max = max;
        return this;
    }

    /**
     * Checks if all the test data will return true against the {@code assertion}.
     * If not, throws {@link AssertionError}. (this is bad, it's just for convenient).
     */
    public void check(Function<Integer, Boolean> assertion) {
        assert IntGenerator.generateInts(predicates, min, max, numberOfInt).stream().filter(i -> assertion.apply(i)).count() == numberOfInt;
    }
}