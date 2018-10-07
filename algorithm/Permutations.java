import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

// cerner_2^5_2018
public class Permutations {
    /**
     * Input: 2^5
     * Output: ^25, 52^, 2^5, 5^2, ^52, 25^
     */
    public static List<String> permute(String string) {
        Set<String> result = new HashSet<>();
        permute(string.toCharArray(), 0, result);
        return new ArrayList<>(result);
    }

    private static void permute(char[] chars, int begin, Set<String> result) {
        if (begin >= chars.length) {
            result.add(String.valueOf(chars));
            return;
        }

        for (int i = begin; i < chars.length; i++) {
            swap(chars, begin, i);
            permute(chars, begin + 1, result);
            swap(chars, begin, i); //reset
        }
    }

    private static void swap(char[] array, int i, int j) {
        char temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}