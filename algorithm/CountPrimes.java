// cerner_2^5_2018

public class CountPrimes {
    /**
     * Returns the number of prime numbers less than n.
     * Input: 10
     * Output: 4 (2, 3, 5, 7)
     */
    public static int countPrimes(int n) {
        int count = 0;
        boolean[] isNotPrime = new boolean[n];

        for (int i = 2; i < n; i++) {
            if (!isNotPrime[i]) {
                count++;
                for (int j = 2; i * j < n; j++) {
                    isNotPrime[i * j] = true;
                }
            }
        }

        return count;
    }
}
