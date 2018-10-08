// cerner_2^5_2018
public class ReverseBits {
    /**
     * Reverse bits of a 32 bits unsigned integer.
     *
     * Input: 2018 (00000000000000000000011111100010)
     * Output: 1205862400 (01000111111000000000000000000000)
     */
    public static int reverseBits(int num) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            int tail = num & 1;
            result = (result << 1) + tail;
            num >>>= 1;
        }
        return result;
    }
}
