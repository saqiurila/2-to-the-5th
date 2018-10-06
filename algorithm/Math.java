// cerner_2^5_2018

public class Math {
    /**
     * pow(2, 5) returns 32
     */
    public static double pow(double x, int n) {
        if (n == Integer.MIN_VALUE) {
            n++;
            x *= x;
        }

        if (n < 0) {
            x = 1 / x;
            n = -n;
        }

        return getPow(x, n);
    }

    private static double getPow(double x, int n) {
        if (n == 0) {
            return 1;
        }
        return (n % 2 == 0) ? getPow(x * x, n / 2) : x * getPow(x * x, n / 2);
    }
}