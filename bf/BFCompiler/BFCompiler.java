import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

public class BFCompiler {
    private Map<Integer, Integer> brackets = new HashMap<>();
    private List<Integer> memory = new ArrayList<>();
    private int curPointer = 0;

    public String runBFCompiler(String bfCode) {
        if (!matchBrackets(bfCode)) {
            return "Invalid bf";
        }
        matchBrackets(bfCode);
        memory.add(0);
        return compileBF(bfCode, 0, bfCode.length());
    }

    private String compileBF(String bf, int left, int right) {
        StringBuffer result = new StringBuffer();
        for (int i = left; i < right; i++) {
            switch (bf.charAt(i)) {
                case '+':
                    memory.set(curPointer, memory.get(curPointer) + 1);
                    break;
                case '-':
                    memory.set(curPointer, memory.get(curPointer) - 1);
                    break;
                case '>':
                    if (memory.size() < ++curPointer + 1) {
                        memory.add(0);
                    }
                    break;
                case '<':
                    curPointer--;
                    break;
                case '[':
                    int nextClosingBrackets = brackets.get(i);
                    while (memory.get(curPointer) > 0) {
                        result.append(compileBF(bf, i + 1, nextClosingBrackets));
                    }
                    i = nextClosingBrackets; // not nextClosingBrackets+1 because the for loop will do i++
                    break;
                case '.':
                    result.append((char) memory.get(curPointer).intValue());
                    break;
                default:
                    break;
            }
        }
        return result.toString();
    }

    private boolean matchBrackets(String bf) {
        Stack<Integer> leftBrackets = new Stack<>();
        for (int i = 0; i < bf.length(); i++) {
            switch (bf.charAt(i)) {
                case '[':
                    leftBrackets.push(i);
                    break;
                case ']':
                    brackets.put(leftBrackets.pop(), i);
                default:
                    break;
            }
        }
        return leftBrackets.isEmpty();
    }
}