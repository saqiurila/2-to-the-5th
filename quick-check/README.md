# Quick Check

Inspired by this video - [Code Checking Automation](https://www.youtube.com/watch?v=AfaNEebCDos).

I'm finally going to learn about the fancy features in Java 8 so I'm using this project as practice for starters.

## Example
```java
IntQuickCheck.iqk().min(-10).max(1000).size(100)
        .filter(IntGenerator.getPredicateForMultiples(8, true))
        .filter(i -> isPalindrom(i))
        .check(MyClass::myFunction);
```
<br>
<br>
*Can't update code after submission, changed IntGenerator to return a list instead of an array in my local.*