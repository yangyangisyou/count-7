# count 7

## O(n) version
If we iterative the number from 1 to n, we could easily count how many 7 within the range.

## O(logn) version
If we focus on every 7's sum of digit, we could find the regular.  
In 1 to 10 case, 7 apears 1 time in unit digit.  
In 1 to 100 case, 7 apears 10 time in tens digit.  
In 1 to 1000 case, 7 apears 100 time in hundreds digit.  
...

So, if we want to count-7 of Nth digit, we could says:
S(Nth) = (capitalDigit) * N + S((N-1)th) + ...


## How to test Sample test
```
npm run test
```

## Sample Input
1  
7  
20  
70  
100  
1000  

## Sample Output
g(1) = 0  
g(7) = 1  
g(20) = 2  
g(70) = 8  
g(100) = 19  
g(1000) = 271  
