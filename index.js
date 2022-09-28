const log = arg => console.log(arg)

/*
A very big sum

In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

    int ar[n]: an array of integers .

Return

    long: the sum of all array elements

Input Format

The first line of the input consists of an integer
.
The next line contains

space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.
*/

function aVeryBigSum(ar) {
  return ar.reduce((total, element) => total + element, 0)
}

//log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])) // 5000000015

/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix

is shown below:

1 2 3
4 5 6
9 8 9  

The left-to-right diagonal =
. The right to left diagonal = . Their absolute difference is

.

Function description

Complete the

function in the editor below.

diagonalDifference takes the following parameter:

    int arr[n][m]: an array of integers

Return

    int: the absolute diagonal difference

Input Format

The first line contains a single integer,
, the number of rows and columns in the square matrix .
Each of the next lines describes a row, , and consists of space-separated integers

.

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
*/

function diagonalDifference(arr) {
  let leftToRightSum = 0;
  let rightToLeftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRightSum += arr[i][i]
    rightToLeftSum += arr[i][arr.length - i - 1]
  }

  return Math.abs(leftToRightSum - rightToLeftSum)
}

/*log(diagonalDifference([[11, 2, 4], 
                        [4, 5, 6], 
                        [10, 8, -12]])) // 15 */

/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to

are acceptable.

Example
There are elements, two positive, two negative and one zero. Their ratios are , and

. Results are printed as:

0.400000
0.400000
0.200000

Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

    int arr[n]: an array of integers

Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with

digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer,
, the size of the array.
The second line contains space-separated integers that describe

.

Constraints


Output Format

Print the following
lines, each to

decimals:

    proportion of positive values
    proportion of negative values
    proportion of zeros

*/

function plusMinus(arr) {
  let positiveElements = 0
  let negativeElements = 0
  let ceroElements = 0
  for (let element of arr) {
    if (element > 0) {
      positiveElements++
    } else if (element < 0) {
      negativeElements++
    } else {
      ceroElements++
    }
  }

  console.log((positiveElements / arr.length).toFixed(6))
  console.log((negativeElements / arr.length).toFixed(6))
  console.log((ceroElements / arr.length).toFixed(6))
}

/*log(plusMinus([-4, 3, -9, 0, 4, 1]))  // 0.500000
                                      // 0.333333
                                      //  0.166667*/

/*
Staircase detail

This is a staircase of size

:

   #
  ##
 ###
####

Its base and height are both equal to

. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size

.

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

    int n: an integer

Print

Print a staircase as described above.

Input Format

A single integer,

, denoting the size of the staircase.

Constraints

.

Output Format

Print a staircase of size

using # symbols and spaces.

Note: The last line must have

spaces in it.

Sample Input

6 

Sample Output

     #
    ##
   ###
  ####
 #####
######

Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of
.
*/

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let row = Array(n).fill(' ')
    console.log(row.fill('#', row.length - i).join(''))
  }
}

//staircase(6)
/*
     #
    ##
   ###
  ####
 #####
######
*/

/*
Mini-Max Sum

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example
The minimum sum is and the maximum sum is

. The function prints

16 24

Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

    arr: an array of 

    integers

Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of
of

elements.

Input Format

A single line of five space-separated integers.

Constraints

Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5

Sample Output

10 14

Explanation

The numbers are
, , , , and

. Calculate the following sums using four of the five integers:

    Sum everything except 

, the sum is
.
Sum everything except
, the sum is
.
Sum everything except
, the sum is
.
Sum everything except
, the sum is
.
Sum everything except
, the sum is

    .

Hints: Beware of integer overflow! Use 64-bit Integer.
*/

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b)
  let min = 0
  let max = 0

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i]
    max += arr[i + 1]
  }

  console.log(min, max)
}

//miniMaxSum([1, 2, 3, 4, 5]) // 10 14

/*
Birthday Cake Candles

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example

The maximum height candles are units high. There are of them, so return

.

Function Description

Complete the function birthdayCakeCandles in the editor below.

birthdayCakeCandles has the following parameter(s):

    int candles[n]: the candle heights

Returns

    int: the number of candles that are tallest

Input Format

The first line contains a single integer,
, the size of .
The second line contains space-separated integers, where each integer describes the height of

.

Constraints
*/

function birthdayCakeCandles(candles) {
  let counter = 0;
  const maxCandle = Math.max(...candles);

  candles.forEach(element => {
    if (element === maxCandle) counter++
  })

  return counter
}

//log(birthdayCakeCandles([3, 2, 1, 3])) //2

/*
Given a time in

-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

Return '12:01:00'.

    Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

    string s: a time in 

    hour format

Returns

    string: the time in 

    hour format

Input Format

A single string
that represents a time in -hour clock format (i.e.: or

).

Constraints

    All input times are valid

*/

function timeConversion(s) {
  s = s.split(':')


  if (s[0] !== '12' && s[2].includes('PM')) {
    s[0] = (parseInt(s[0]) + 12).toString();
  } else if (s[0] === '12' && s[2].includes('AM')) {
    s[0] = '00'
  }

  s[2] = s[2].replace('PM', '') // Expresion regular para reemplazar ambas de una sola vez
  s[2] = s[2].replace('AM', '')

  return s.join(':')
}

//log(timeConversion('07:05:45PM')) // 19:05:45

/*
Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just character at index in the string, and the remaining characters will occur the same number of times. Given a string

, determine if it is valid. If so, return YES, otherwise return NO.

Example
This is a valid string because frequencies are

.

This is a valid string because we can remove one and have

of each character in the remaining string.

This string is not valid as we can only remove occurrence of . That leaves character frequencies of

.

Function Description

Complete the isValid function in the editor below.

isValid has the following parameter(s):

    string s: a string

Returns

    string: either YES or NO

Input Format

A single string

.

Constraints

Each character 
*/

function isValid(s) {
  let validationObject = {};
  let response = 'YES'

  for (let char of s) {
    validationObject[char] === undefined ? validationObject[char] = 1 : validationObject[char]++
  }

  const minChar = Math.min(...Object.values(validationObject))

  const onesAndCeros = Object.values(validationObject).map(element => element - minChar)

  if ((onesAndCeros.indexOf(0) === onesAndCeros.lastIndexOf(0))) {
    onesAndCeros.splice(onesAndCeros.indexOf(0), 1)
    for (let i = 0; i < onesAndCeros.length - 1; i++) {
      if (onesAndCeros[i] !== onesAndCeros[i + 1]) {
        response = 'NO'
        break
      }
    }
  } else if ((onesAndCeros.indexOf(1) === onesAndCeros.lastIndexOf(1))) {
    onesAndCeros.splice(onesAndCeros.indexOf(1), 1)
    for (let i = 0; i < onesAndCeros.length - 1; i++) {
      if (onesAndCeros[i] !== onesAndCeros[i + 1]) {
        response = 'NO'
        break
      }
    }
  } else {
    response = 'NO'
  }

  return response
}

//log(isValid('aabbccddeefghi')) // NO
//log(isValid('abcdefghhgfedecba')) // YES
//log(isValid('aabbc')) // YES
//log(isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd')) // YES
//log(isValid('xxxaabbccrry')) // NO

/*
Palindromes are strings that read the same from the left or right, for example madam or 0110.

You will be given a string representation of a number and a maximum number of changes you can make. Alter the string, one digit at a time, to create the string representation of the largest number possible given the limit to the number of changes. The length of the string may not be altered, so you must consider
's left of all higher digits in your tests. For example is valid,

is not.

Given a string representing the starting number, and a maximum number of changes allowed, create the largest palindromic string of digits possible or the string '-1' if it is not possible to create a palindrome under the contstraints.

Example

Make replacements to get

.


Make replacement to get

.

Function Description

Complete the highestValuePalindrome function in the editor below.

highestValuePalindrome has the following parameter(s):

    string s: a string representation of an integer
    int n: the length of the integer string
    int k: the maximum number of changes allowed

Returns

    string: a string representation of the highest value achievable or -1

Input Format

The first line contains two space-separated integers,
and , the number of digits in the number and the maximum number of changes allowed.
The second line contains an

-digit string of numbers.

Constraints

Each character in the number is an integer where .
*/

function highestValuePalindrome(s, n, k) {
  s = s.split('');
  let isPalindrome

  for (let i = 0; i < Math.trunc(n / 2); i++) {
    if ((s[i] !== s[s.length - 1 - i]) && k > 0) {
      s[s.length - 1 - i] = s[i];
      k--
    }
  }

  if (s.join('') === s.reverse().join('')) {
    isPalindrome = s.join('')
  } else {
    isPalindrome = -1
  }

  return isPalindrome
}

//log(highestValuePalindrome('3943', 4, 1)) // 3993
//log(highestValuePalindrome('092282', 6, 3)) // 992299
//log(highestValuePalindrome('0011', 4, 1)) // -1

/*
HackerLand University has the following grading policy:

    Every student receives a 

in the inclusive range from to
.
Any
less than

    is a failing grade.

Sam is a professor at the university and likes to round each student's

according to these rules:

    If the difference between the 

and the next multiple of is less than , round up to the next multiple of
.
If the value of
is less than

    , no rounding occurs as the result will still be a failing grade.

Examples

round to
(85 - 84 is less than 3)
do not round (result is less than 40)

    do not round (60 - 57 is 3 or higher)

Given the initial value of
for each of Sam's

students, write code to automate the rounding process.

Function Description

Complete the function gradingStudents in the editor below.

gradingStudents has the following parameter(s):

    int grades[n]: the grades before rounding

Returns

    int[n]: the grades after rounding as appropriate

Input Format

The first line contains a single integer,
, the number of students.
Each line of the subsequent lines contains a single integer, .
*/

function gradingStudents(grades) {
  return grades.map(element => {
    if (element < 38) {
      return element
    } else {
      if (3 <= (element % 10) && (element % 10) <= 5) {
        return element + (5 - element % 10)
      } else if (8 <= (element % 10) && (element % 10) <= 10) {
        return element + (10 - element % 10)
      } else {
        return element
      }
    }
  })
}

//log(gradingStudents([73, 67, 38, 33])) // [75, 67, 40, 33]

/*
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

In the diagram below:

    The red region denotes the house, where 

is the start point, and
is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
Assume the trees are located on a single point, where the apple tree is at point
, and the orange tree is at point
.
When a fruit falls from its tree, it lands
units of distance from its tree of origin along the -axis. *A negative value of means the fruit fell units to the tree's left, and a positive value of means it falls units to the tree's right. *

Given the value of for apples and oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range

)?

For example, Sam's house is between
and . The apple tree is located at and the orange at . There are apples and oranges. Apples are thrown units distance from , and units distance. Adding each apple distance to the position of the tree, they land at . Oranges land at . One apple and two oranges land in the inclusive range so we print 

unction Description

Complete the countApplesAndOranges function in the editor below. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):

    s: integer, starting point of Sam's house location.
    t: integer, ending location of Sam's house location.
    a: integer, location of the Apple tree.
    b: integer, location of the Orange tree.
    apples: integer array, distances at which each apple falls from the tree.
    oranges: integer array, distances at which each orange falls from the tree.

Input Format

The first line contains two space-separated integers denoting the respective values of
and .
The second line contains two space-separated integers denoting the respective values of and .
The third line contains two space-separated integers denoting the respective values of and .
The fourth line contains space-separated integers denoting the respective distances that each apple falls from point .
The fifth line contains space-separated integers denoting the respective distances that each orange falls from point .
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const length = Math.max(apples.length, oranges.length);
  let countApples = 0;
  let countOranges = 0;

  for (let index = 0; index < length; index++) {
    if ((apples[index] + a) >= s && (apples[index] + a) <= t) {
      countApples++;
    }

    if ((oranges[index] + b) >= s && (oranges[index] + b) <= t) {
      countOranges++;
    }
  }

  console.log(countApples)
  console.log(countOranges)
}

//countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]) // 1 1

/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

    The first kangaroo starts at location 

and moves at a rate of
meters per jump.
The second kangaroo starts at location
and moves at a rate of

    meters per jump.

You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

Example



After one jump, they are both at , (,

), so the answer is YES.

Function Description

Complete the function kangaroo in the editor below.

kangaroo has the following parameter(s):

    int x1, int v1: starting position and jump distance for kangaroo 1
    int x2, int v2: starting position and jump distance for kangaroo 2

Returns

    string: either YES or NO

Input Format

A single line of four space-separated integers denoting the respective values of
, , , and .
*/

function kangaroo(x1, v1, x2, v2) {
  let jumps = (x2 - x1) / (v1 - v2)

  if (Number.isInteger(jumps) && jumps >= 0) {
    return 'YES'
  } else {
    return 'NO'
  }
}

//log(kangaroo(0, 3, 4, 2)) // YES
//log(kangaroo([0, 2, 5, 3])) // NO

/*
Between Two Sets

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

    The elements of the first array are all factors of the integer being considered
    The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

Example

There are two numbers between the arrays: and .
, , and for the first value.
, and , for the second value. Return

.

Function Description

Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

getTotalX has the following parameter(s):

    int a[n]: an array of integers
    int b[m]: an array of integers

Returns

    int: the number of integers that are between the sets

Input Format

The first line contains two space-separated integers,
and , the number of elements in arrays and .
The second line contains distinct space-separated integers where .
The third line contains distinct space-separated integers where .
*/

function getTotalX(a, b) {
  let isFactor = (a, b) => a % b === 0;

  let results = []

  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    if (a.every(x => isFactor(i, x)) && b.every(x => isFactor(x, i))) results.push(i)
  }

  return results.length
}

//log(getTotalX([2, 4], [16, 32, 96]))

/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breakingRecords function in the editor below.

breakingRecords has the following parameter(s):

    int scores[n]: points scored per game

Returns

    int[2]: An array with the numbers of times she broke her records. Index 

is for breaking most points records, and index

    is for breaking least points records.

Input Format

The first line contains an integer
, the number of games.
The second line contains space-separated integers describing the respective values of

.

Constraints
*/

function breakingRecords(scores) {
  let records = [scores[0], scores[0]], breakBestRecord = 0, breakWrostRecord = 0;

  for (let score of scores) {
    if (score > records[0]) {
      records[0] = score
      breakBestRecord++
    } else if (score < records[1]) {
      records[1] = score
      breakWrostRecord++
    }
  }

  return [breakBestRecord, breakWrostRecord]
}

//log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])) // 2, 4
//log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])) // 4, 0

/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

Lily decides to share a contiguous segment of the bar selected such that:

    The length of the segment matches Ron's birth month, and,
    The sum of the integers on the squares is equal to his birth day.

Determine how many ways she can divide the chocolate.

Example


Lily wants to find segments summing to Ron's birth day, with a length equalling his birth month, . In this case, there are two segments meeting her criteria: and

.

Function Description

Complete the birthday function in the editor below.

birthday has the following parameter(s):

    int s[n]: the numbers on each of the squares of chocolate
    int d: Ron's birth day
    int m: Ron's birth month

Returns

    int: the number of ways the bar can be divided

Input Format

The first line contains an integer
, the number of squares in the chocolate bar.
The second line contains space-separated integers , the numbers on the chocolate squares where .
The third line contains two space-separated integers, and , Ron's birth day and his birth month.
*/

function birthday(s, d, m) {

  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.slice(i, (i + m)).reduce((total, value) => total + value, 0) === d) counter++
  }

  return counter
}

//log(birthday([1, 2, 1, 3, 2], 3, 2)) // 2
//log(birthday([1, 1, 1, 1, 1, 1], 3, 2)) // 0
//log(birthday([4], 4, 1)) // 1

/*
Divisible Sum Pairs

Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and arr[i] + arr[j] is divisible by
k
*/

function divisibleSumPairs(n, k, ar) {
  let counter = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) counter++
    }
  }

  return counter
}

//log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])) // 3
//log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])) // 5

/*
Migratory Birds

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
*/

function migratoryBirds(arr) {

  let arrayObject = {}

  for (let element of arr) {
    arrayObject[element] === undefined ? arrayObject[element] = 1 : arrayObject[element] += 1
  }

  let maxSighted = Math.max(...Object.values(arrayObject))

  return Object.keys(arrayObject).filter(element => arrayObject[element] >= maxSighted)[0]
}

//log(migratoryBirds([1, 1, 2, 2, 3])) // 1
//log(migratoryBirds([1, 4, 4, 4, 5, 3])) // 4
//log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) // 3

/*
Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:

    Divisible by 400.
    Divisible by 4 and not divisible by 100.

Given a year, y, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is y

.

For example, the given year = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is 12.09.1984
*/

function dayOfProgrammer(year) {
  let day = 0

  if (year === 1918) {
    day = 256 - 230
  } else if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) {
      day = 256 - 244
    } else {
      day = 256 - 243
    }
  } else {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
      day = 256 - 244
    } else {
      day = 256 - 243
    }
  }

  return `${day}.09.${year}`
}

//log(dayOfProgrammer(1984)) // 12.09.1984
//log(dayOfProgrammer(2017)) // 13.09.2017
//log(dayOfProgrammer(2016)) // 12.09.2016
//log(dayOfProgrammer(1800)) // 12.09.1800
//log(dayOfProgrammer(1700)) // 12.09.1800

/*
Bill Division

Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.

bonAppetit has the following parameter(s):

    bill: an array of integers representing the cost of each item ordered
    k: an integer representing the zero-based index of the item Anna doesn't eat
    b: the amount of money that Anna contributed to the bill
*/

function bonAppetit(bill, k, b) {
  let annasBill = 0;
  let response = ''

  //bill.splice(k, 1)
  for (let i = 0; i < bill.length; i++) {
    annasBill += bill[i]
  }

  annasBill = (annasBill - bill[k]) / 2

  //annasBill = bill.reduce((total, element) => total + element, 0) / 2;

  if (annasBill === b) {
    response = 'Bon Appetit'
  } else {
    response = 5
  }

  return response
}

//log(bonAppetit([3, 10, 2, 9], 1, 12)) // 5
//log(bonAppetit([3, 10, 2, 9], 1, 7)) // Bon Appetit

/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

    int n: the number of socks in the pile
    int ar[n]: the colors of each sock

Returns

    int: the number of pairs
*/

function sockMerchant(n, ar) {
  let sockObject = {};

  for (let element of ar) {
    sockObject[element] === undefined ? sockObject[element] = 1 : sockObject[element]++;
  }

  return Object.values(sockObject).reduce((total, element) => total + Math.floor(element / 2), 0)
}

//log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2])) // 2
//log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // 3

/*
Drawing Book

Complete the pageCount function in the editor below.

pageCount has the following parameter(s):

    int n: the number of pages in the book
    int p: the page number to turn to

*/

function pageCount(n, p) {
  if (n % 2 === 0 && p % 2 !== 0) {
    return Math.min(Math.trunc(p/2), Math.trunc((n-p)/2)+1)
  } else {
    return Math.min(Math.trunc(p/2), Math.trunc((n-p)/2))
  }
}

//log(pageCount(6, 2)) // 1
//log(pageCount(5, 4)) // 0
//log(pageCount(10, 9)) // 1

/*
Counting Valleys

Complete the countingValleys function in the editor below.

countingValleys has the following parameter(s):

    int steps: the number of steps on the hike
    string path: a string describing the path
*/

function countingValleys(steps, path) {
  let altitude = 0
  let valleyCounter = 0
  
  for(let step of path) {
    step === 'U'? altitude++ : altitude--
    if (altitude === 0 && step === 'U') valleyCounter++
  }

  return valleyCounter
}

//log(countingValleys(8, 'UDDDUDUU')) // 1

/*
Electronics Shop

Function Description

Complete the getMoneySpent function in the editor below.

getMoneySpent has the following parameter(s):

    int keyboards[n]: the keyboard prices
    int drives[m]: the drive prices
    int b: the budget

Returns

    int: the maximum that can be spent, or -1 if it is not possible to buy both items
*/

function getMoneySpent(keyboards, drives, b) {
  let result = [];

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) result.push(keyboards[i] + drives[j])
    }
  }

  if (result.length === 0) {
    return -1
  } else {
    return Math.max(...result)
  }
}

//log(getMoneySpent([3, 1], [5, 2, 8], 10)) // 9
//log(getMoneySpent([5], [4], 5)) // -1

/*
Cats and a Mouse

Complete the catAndMouse function in the editor below.

catAndMouse has the following parameter(s):

    int x: Cat A's position
    int y: Cat B's position
    int z: Mouse c's position 
*/

function catAndMouse(x, y, z) {
  let distanceXZ = Math.abs(z -x), distanceYZ = Math.abs(z - y);

  if (distanceXZ < distanceYZ) {
    return "Cat A"
  } else if (distanceXZ > distanceYZ) {
    return "Cat B"
  } else {
    return "Mouse C"
  }
}

//log(catAndMouse(2, 5, 4)) // Cat B
//log(catAndMouse(1, 2, 3)) // Cat B
//log(catAndMouse(1, 3, 2)) // Mouse C

/*
Forming a Magic Square

Complete the formingMagicSquare function in the editor below.

formingMagicSquare has the following parameter(s):

    int s[3][3]: a 3x3

array of integers 
*/

function formingMagicSquare(s) {
  
  const possibleMagicSquares = [[2, 9, 4, 7, 5, 3, 6, 1, 8],
    [2, 7, 6, 9, 5, 1, 4, 3, 8],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [6, 1, 8, 7, 5, 3, 2, 9, 4]] 

  const s_flat = s.flat();

  log(s_flat)
  
    let totalDifferent = [];
    for(let i = 0; i < possibleMagicSquares.length; i ++) {
        let total = 0;
      
        s_flat.reduce((previous, current, index) => {
            total = previous + Math.abs(current - possibleMagicSquares[i][index]);
            return total
        }, 0)
      
        totalDifferent.push(total);
    }
  
    return Math.min(...totalDifferent);
}

//log(formingMagicSquare([[4, 9, 2], [3, 5, 7], [8, 1, 5]])) // 1
//log(formingMagicSquare([[4, 8, 2], [4, 5, 7], [6, 1, 6]])) // 4

/*
Picking Numbers

Function Description

Complete the pickingNumbers function in the editor below.

pickingNumbers has the following parameter(s):

    int a[n]: an array of integers

Returns

    int: the length of the longest subarray that meets the criterion
*/

function pickingNumbers(a) {
  let maxCount = -Infinity;
  
  for (let i = 0; i < a.length; i++) {
    let counter = 1;
    for (let j = 0; j < a.length; j++) {
      if (i !== j) {
        if (a[i] === a[j] || a[i] === a[j] - 1) {
          counter++;
        }
      }
    }
    
    maxCount = Math.max(counter, maxCount)
  }

  return maxCount;
}

//log(pickingNumbers([4, 6, 5, 3, 3, 1])) // 3
//log(pickingNumbers([1, 2, 2, 3, 1, 2,])) // 5

/*
Climbing the Leaderboard

Complete the climbingLeaderboard function in the editor below.

climbingLeaderboard has the following parameter(s):

    int ranked[n]: the leaderboard scores
    int player[m]: the player's scores
*/

function climbingLeaderboard(ranked, player) {
  let positions = [1];
  
  for (let i = 1; i < ranked.length; i++) {
    if (ranked[i] === ranked[i-1]) {
      positions.push(positions[i-1])
    } else {
      positions.push(positions[i-1] + 1)
    }    
  }

  let results = [positions[positions.length-1] + 1];
  
  for ( let j = 0 ; j < player.length ; j++ ){    
    for ( let k = 0; k < ranked.length; k++){        
        if (player[j] > ranked[k]){            
          results[j] = positions[k]
          k = ranked.length + 1    
        } else if (player[j] == ranked[k]) {     
            results[j] = positions[k] 
            k = ranked.length + 1
        }   
    }
  }
  return results
}

//log(climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])) // [6, 4, 2, 1]
//log(climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])) // [6, 5, 4, 2, 1]

/*
The Hurdle Race

Complete the hurdleRace function in the editor below.

hurdleRace has the following parameter(s):

    int k: the height the character can jump naturally
    int height[n]: the heights of each hurdle
*/

function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);

  if(maxHeight - k < 0) return 0;
  else return maxHeight - k;
}

//log(hurdleRace(4, [1, 6, 3, 5, 2])) // 2
//log(hurdleRace(7, [2, 5, 4, 5, 2])) // 0

/*
Designer PDF Viewer

Complete the designerPdfViewer function in the editor below.

designerPdfViewer has the following parameter(s):

    int h[26]: the heights of each letter
    string word: a string
*/

function designerPdfViewer(h, word) {
  let wordHeightArray =[];

  for (let i = 0; i < word.length; i++) {
    wordHeightArray.push(h[word.charCodeAt(i) - 97])
  }

  return Math.max(...wordHeightArray) * word.length;
}

//log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], "abc")) // 9
//log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba")) // 28

/*
Utopian Tree

Complete the utopianTree function in the editor below.

utopianTree has the following parameter(s):

    int n: the number of growth cycles to simulate
*/

function utopianTree(n) {
  let height = 0

  for (let i = 0; i <= n; i++) {
    if(i % 2 === 0) height += 1
    else height *= 2
  }

  return height
}

//log(utopianTree(0)) // 1
//log(utopianTree(1)) // 2
//log(utopianTree(4)) // 7

/*
Angry Professor

Complete the angryProfessor function in the editor below. It must return YES if class is cancelled, or NO otherwise.

angryProfessor has the following parameter(s):

    int k: the threshold number of students
    int a[n]: the arrival times of the n students
*/

function angryProfessor(k, a) {
  let onTime = 0

  for(let element of a) {
    if(element <= 0) onTime++
  }

  if(onTime >= k) return "NO"

  return "YES"
}

//log(angryProfessor(3, [-1, -3, 4, 2])) //YES
//log(angryProfessor(2, [0, -1, 2, 1])) //NO

/*
Beautiful Days at the Movies

Complete the beautifulDays function in the editor below.

beautifulDays has the following parameter(s):

    int i: the starting day number
    int j: the ending day number
    int k: the divisor
*/

function beautifulDays(i, j, k) {
  let beautifuldays = 0;
  
  for(let number = i; number <= j; number++) {
    if(Math.abs(number.toString() - number.toString().split('').reverse().join('')) % k === 0) beautifuldays++
  }

  return beautifuldays;
}

//log(beautifulDays(20, 23, 6)) //2

/*
Viral Advertising

Function Description

Complete the viralAdvertising function in the editor below.

viralAdvertising has the following parameter(s):

    int n: the day number to report

Returns

    int: the cumulative likes at that day

*/

function viralAdvertising(n) {
  return totalLikes(n, 5, 0);    

  function totalLikes(day, people, likes) {
    if (day === 0) {
      return likes;   
    } else {
      let newLikes = Math.floor(people / 2);
      return totalLikes(day - 1, newLikes * 3, likes + newLikes);  
    }
  }
}

log(viralAdvertising(5)) // 24
log(viralAdvertising(3)) // 9