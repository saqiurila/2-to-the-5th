// cerner_2^5_2018
// Just have to wirte this one once in a while
class BinarySearch {
    public static int search(int[] nums, int target) {
        for (int left = 0, right = nums.length - 1; left <= right;) {
            int mid = left + (right - left) / 2;
            if (target < nums[mid]) {
                right = mid - 1;
            } else if (target > nums[mid]) {
                left = mid + 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}