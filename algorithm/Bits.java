// cerner_2^5_2018

class Bits {
    /**
     * Returns the number of 1's in the binary representation of each number in range [0, {@code bound}].
     *
     * Input: 8
     * Output: [0,1,1,2,1,2,2,3,1]
     */
    public static int[] countBits(int bound) {
        int[] res = new int[bound + 1];

        // Stream is unnececssary here, just wanted to try and see how slow it is
        IntStream.range(0, res.length).forEachOrdered(i -> res[i] = res[i >> 1] + (i & 1));

        return res;
    }
}