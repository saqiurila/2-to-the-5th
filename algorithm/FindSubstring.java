public class FindSubstring {
    /**
     * Input: "2^5", "cerner_2^5_2018"
     * Output: 7
     */
    public static int indexOf(String substring, String string) {
        if (string == null || substring == null) {
            return -1;
        }
        for (int i = 0;; i++) {
            for (int j = 0;; j++) {
                if (j == substring.length()) {
                    return i;
                }
                if (i + j == string.length()) {
                    return -1;
                }
                if (substring.charAt(j) != string.charAt(i + j)) {
                    break;
                }
            }
        }
    }
}