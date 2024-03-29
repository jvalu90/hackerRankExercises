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

//log(viralAdvertising(5)) // 24
//log(viralAdvertising(3)) // 9

// Ejemplo recursion para crear un arreglo
function rangeOfNumbers(startNum, endNum) {
  if(endNum - startNum < 0) {
    return [];
  } else {
    const array = rangeOfNumbers(startNum + 1, endNum)
    array.unshift(startNum)
    return array;
  }
};

//log(rangeOfNumbers(1, 5)) //[1, 2, 3, 4, 5]
//log(rangeOfNumbers(6, 9)) //[6, 7, 8, 9]
//log(rangeOfNumbers(4, 4)) //[4]

/*
Save the Prisoner!

Function Description

Complete the saveThePrisoner function in the editor below. It should return an integer representing the chair number of the prisoner to warn.

saveThePrisoner has the following parameter(s):

    int n: the number of prisoners
    int m: the number of sweets
    int s: the chair number to begin passing out sweets from
*/

function saveThePrisoner(n, m, s) {
  let candies = m;
  let prisonerSeat = s - 1;
  while(candies > 0) {
    prisonerSeat++;
    candies--;
  }
  
  if (m <= n ) return prisonerSeat

  return prisonerSeat - Math.floor(m / n) * n
}

//log(saveThePrisoner(5, 2, 1)) // 2
//log(saveThePrisoner(5, 2, 2)) // 3
//log(saveThePrisoner(7, 19, 2)) // 6
//log(saveThePrisoner(3, 7, 3)) // 3

/*
Circular Array Rotation

Complete the circularArrayRotation function in the editor below.

circularArrayRotation has the following parameter(s):

    int a[n]: the array to rotate
    int k: the rotation count
    int queries[1]: the indices to report
*/

function circularArrayRotation(a, k, queries) {
  for(let i = 0; i < k; i++) {
    let element = a.pop();
    a.unshift(element);
  }

  return a
}

//log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2])) // 2 3 1

/*
Sequence Equation

Complete the permutationEquation function in the editor below.

permutationEquation has the following parameter(s):

    int p[n]: an array of integers
*/

function permutationEquation(p) {
  let response = [];

  for (let i = 1; i <= p.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if(p[p[j-1] - 1] === i) response.push(j)
    }
  }

  return response
}

//log(permutationEquation([2, 3, 1])) // [2, 3, 1]
//log(permutationEquation([4, 3, 5, 1, 2])) // [1, 3, 5, 4, 2]

/*
Jumping on the Clouds: Revisited

Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):

    int c[n]: the cloud types along the path
    int k: the length of one jump

Returns

    int: the energy level remaining.

*/

function jumpingOnClouds(c, k) {
  let energyLevel = 100;
    for (let i = 0; i < c.length; i += k) {
        energyLevel -= c[i] == 0 ? 1 : 3;
        if (i + k > c.length) i -= c.length;
    }
    return energyLevel;
}

//log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)) //92
//log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0,], 3)) //80

/*
Find Digits

Returns

    int: the number of digits in 

that are divisors of

Input Format

The first line is an integer,
, the number of test cases.
The subsequent lines each contain an integer, . 
*/

function findDigits(n) {
  let stringN = n.toString().split('')
  let counter = 0;

  for(let i = 0; i < stringN.length; i++){
    if(n % stringN[i] === 0) counter++
  }
  
  return counter
}

//log(findDigits(12)) // 2
//log(findDigits(1012)) // 3

/*
Extra Long Factorials

Complete the extraLongFactorials function in the editor below. It should print the result and return.

extraLongFactorials has the following parameter(s):

    n: an integer
*/

function extraLongFactorials(n) {
  if(n <= 0){
    return 1
  } else {
    return n * extraLongFactorials(n-1)
  }
}

// Bigint Solution
function extraLongFactorialsNF(n) {
    let factorial = 1;
    if (n < 20) {
        for (let index = 1; index <= n; index++) {

            factorial = factorial * index;
        }
        console.log(factorial);
    }
    else {
        let bigFactorial = BigInt(1);
        for (let i = 1; i <= n; i++) {
            bigFactorial = bigFactorial * BigInt(i);
        }
        console.log(bigFactorial.toString());
    }
}

//log(extraLongFactorials(25)) // 1.5511210043330986e+25

/*
Append and Delete

Complete the appendAndDelete function in the editor below. It should return a string, either Yes or No.

appendAndDelete has the following parameter(s):

    string s: the initial string
    string t: the desired string
    int k: the exact number of operations that must be performed
*/

function appendAndDelete(s, t, k) {
    // s string t target output k moves
    let startOnIndex = s.length;
    let moves = 0;
    for(let i=0;i<s.length;i++){
        if(s[i]!== t[i]){
            startOnIndex = i;
            break;
        }
    }

    let remaining = t.length - startOnIndex;
    moves = (s.length- startOnIndex + remaining);
    return moves <= k && remaining%2===0? "Yes": "No";
}

//log(appendAndDelete("aba", "aba", 7)) //Yes
//log(appendAndDelete("ashley", "ash", 2)) //No

/*
Sherlock and Squares

Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from to

.

squares has the following parameter(s):

    int a: the lower range boundary
    int b: the upper range boundary
*/

function squares(a, b) {
  let result = 0
  for(let i = a; i <= b; i++){
    if(Math.pow(i, 0.5) % 1 === 0) result ++
  }

  return result
}

//log(squares(3, 9)) // 2 
//log(squares(17, 24)) // 0

/*
Library Fine

Function Description

Complete the libraryFine function in the editor below.

libraryFine has the following parameter(s):

    d1, m1, y1: returned date day, month and year, each an integer
    d2, m2, y2: due date day, month and year, each an integer

Returns

    int: the amount of the fine or 0 if there is none
*/

function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1>y2)
    return 10000;    
  if (y1==y2 && m1==m2 && d1>d2)
    return (d1-d2)*15;  
  if (y1==y2 && m1>m2) 
    return (m1-m2)*500;    
  return 0;
}

//log(libraryFine(9, 6, 2015, 6, 6, 2015)) //45

/*
Function Description

Complete the cutTheSticks function in the editor below. It should return an array of integers representing the number of sticks before each cut operation is performed.

cutTheSticks has the following parameter(s):

    int arr[n]: the lengths of each stick

Returns

    int[]: the number of sticks after each iteration
*/

function cutTheSticks(arr) {
  let result = [];

  while (arr.length > 0) {
    result.push(arr.length);
    let min = Math.min(...arr);
    arr = arr.map((item) => item - min).filter((item) => item > 0);
  }

  return result;
}

//log(cutTheSticks([5, 4, 4, 2, 2, 8])) // [6, 4, 2, 1]
//log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1])) // [8, 6, 4, 1]

/*
Non-Divisible Subset

Function Description

Complete the nonDivisibleSubset function in the editor below.

nonDivisibleSubset has the following parameter(s):

    int S[n]: an array of integers
    int k: the divisor

Returns

    int: the length of the longest subset of S meeting the criteria 
*/

function nonDivisibleSubset(k, s) {
    let remainders = new Array(k).fill(0);
  
    s.forEach(num => remainders[num % k]++);
    let result = 0;
  
    if (remainders[0] !== 0) {
        result += 1;
    }
    if (k % 2 == 0 && remainders[k / 2] !== 0) {
        result += 1;
    }
    for (let i = 1; i < k / 2; i++) {
        result += Math.max(remainders[i], remainders[k - i]);
    }
    return result;
}

//log(nonDivisibleSubset(3, [1, 7, 2, 4])) // 3
//log(nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436])) // 11

/*
Repeated String

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

    s: a string to repeat
    n: the number of characters to consider
*/

function repeatedString(s, n) {
  let counterRemain = 0;
  let counter = 0;
  let repeated = Math.floor(n / s.length);
  let remainString = s.slice(0, n - repeated * s.length);

  for(let i = 0; i < remainString.length; i++) {
    if(remainString[i] === "a") counterRemain++
  }

  for(let i = 0; i < s.length; i++) {
    if(s[i] === "a") counter++
  }

  return counter * repeated + counterRemain
}

//log(repeatedString("aba", 10)) // 7
//log(repeatedString("a", 1000000000000)) // 1000000000000

/*
Complete the jumpingOnClouds function in the editor below.

jumpingOnClouds has the following parameter(s):

    int c[n]: an array of binary integers
*/

function jumpingOnClouds(c) {
  let index = 0;
  let lastJump = c.length - 1; // This is an adjust to avoid last iteration of while
  let jumps = 0;
  
  while(index < lastJump) {
    
    if(c[index + 2] === 0) {
      index += 2;
    } else {
      index += 1;
    }
    jumps += 1;
  }
  return jumps;
}

//log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])) // 4
//log(jumpingOnClouds([0, 0, 0, 0, 1, 0])) // 3

/*
Equalize the Array

Complete the equalizeArray function in the editor below.

equalizeArray has the following parameter(s):

    int arr[n]: an array of integers
*/

function equalizeArray(arr) {
  let mapCounter = {};

  for(let element of arr){
    mapCounter[element] === undefined ? mapCounter[element] = 1 : mapCounter[element]++;
  }

  let repeatedCount = Object.values(mapCounter);

  return repeatedCount.reduce((acc, current) => acc + current, 0) - Math.max(...repeatedCount)
}

//log(equalizeArray([3, 3, 2, 1, 3])) //2
//log(equalizeArray([1, 2, 2, 3])) //2

/*
Queen's Attack II

Complete the queensAttack function in the editor below.

queensAttack has the following parameters:
- int n: the number of rows and columns in the board
- nt k: the number of obstacles on the board
- int r_q: the row number of the queen's position
- int c_q: the column number of the queen's position
- int obstacles[k][2]: each element is an array of 2 integers, the row and column of an obstacle 
*/

function queensAttack(n, k, r_q, c_q, obstacles) {
  // without obstacles
  if (k === 0) {
    return 2 * (n - 1) //horizontal and vertical 
      + 2 * Math.min(r_q - 1, c_q - 1, n - r_q, n - c_q) + n - 1; // diagonals
  }
  
  const minDist = [ //distance from Queen to edges
    n - c_q,    // right  / east
    r_q - 1,    // bottom / south
    c_q - 1,    // left   / west
    n - r_q,    // top    / north
    Math.min(n - c_q, r_q - 1), //right bottom / south east
    Math.min(c_q - 1, r_q - 1), //left  bottom / south west
    Math.min(c_q - 1, n - r_q), //left  top    / north west
    Math.min(n - c_q, n - r_q), //right top    / north east
  ];

  obstacles.forEach(o => {
    if (o[0] === r_q && o[1] > c_q) //E
      minDist[0] = Math.min(minDist[0], o[1] - c_q - 1)
    if (o[1] === c_q && o[0] < r_q) //S
      minDist[1] = Math.min(minDist[1], r_q - o[0] - 1)
    if (o[0] === r_q && o[1] < c_q) //W
      minDist[2] = Math.min(minDist[2], c_q - o[1] - 1)
    if (o[1] === c_q && o[0] > r_q) //N 
      minDist[3] = Math.min(minDist[3], o[0] - r_q - 1)
    if (o[0] - r_q == c_q - o[1] && o[0] < r_q) //SE 
      minDist[4] = Math.min(minDist[4], r_q - o[0] - 1)
    if (o[0] - r_q == o[1] - c_q && o[0] < r_q) //SW
      minDist[5] = Math.min(minDist[5], r_q - o[0] - 1) 
    if (o[0] - r_q == c_q - o[1] && o[0] > r_q) //NW
      minDist[6] = Math.min(minDist[6], o[0] - r_q - 1) 
    if (o[0] - r_q == o[1] - c_q && o[0] > r_q) //NE
      minDist[7] = Math.min(minDist[7], o[0] - r_q - 1) 
  });
  
  return minDist.reduce((a, b) => a + b);
}

//log(queensAttack(4, 0, 4, 4, [])) // 9
//log(queensAttack(5, 3, 4, 3, [[5, 5], [4, 2], [2, 3]])) // 10
//log(queensAttack(1, 0, 1, 1, [])) // 0

/*
ACM ICPC Team

Function Description

Complete the acmTeam function in the editor below.
acmTeam has the following parameter(s):

    string topic: a string of binary digits

Returns

    int[2]: the maximum topics and the number of teams that know that many topics
*/

function acmTeam(topic) {
  
  let object = {}
  for (let i = 0; i < topic.length - 1; i++) {
    let ones = 0
    for (let j = i + 1; j < topic.length; j++) {
      ones = (parseInt(topic[i], 2) | parseInt(topic[j], 2)).toString(2).split('').filter(x => x == 1).length
      object[ones] === undefined ? object[ones] = 1 : object[ones] += 1
    }
  }

  let max = Math.max(...Object.keys(object))

  return [max, object[max]]
}

//log(acmTeam(["10101", "11110", "00010"])) // [5, 1]
//log(acmTeam(["10101", "11100", "11010", "00101"])) // [5, 2]

/*
Taum and B'day

Complete the function taumBday in the editor below. It should return the minimal cost of obtaining the desired gifts.

taumBday has the following parameter(s):

    int b: the number of black gifts
    int w: the number of white gifts
    int bc: the cost of a black gift
    int wc: the cost of a white gift
    int z: the cost to convert one color gift to the other color
*/

function taumBday(b, w, bc, wc, z) {
  return b * Math.min(bc, wc + z) + w * Math.min(wc, bc + z)
}

//log(taumBday(10, 10, 1, 1, 1)) // 20
//log(taumBday(5, 9, 2, 3, 4)) // 37
//log(taumBday(3, 6, 9, 1, 1)) // 12
//log(taumBday(7, 7, 4, 2, 1)) // 35
//log(taumBday(3, 3, 1, 9, 2)) // 12

/*
Organizing Containers of Balls

Function Description
Complete the organizingContainers function in the editor below.
organizingContainers has the following parameter(s):
int containter[n][m]: a two dimensional array of integers that represent the number of balls of each color in each container
Returns
string: either Possible or Impossible
*/

function organizingContainers(container) {
  let balls = {}
  let containersSize = {}

  for (let i = 0; i < container.length; i++){
    for (let j = 0; j < container[i].length; j++){
      balls[j] === undefined ? balls[j] = container[i][j] : balls[j] += container[i][j];
      containersSize[i] === undefined ? containersSize[i] = container[i][j] : containersSize[i] += container[i][j];
    }
  }

  return Object.values(containersSize).sort((a, b) => a -b).reduce((pv, cv, i) => {
        return Object.values(balls).sort((a, b) => a -b)[i] <= cv && pv
    }, true) ? 'Possible' : 'Impossible'

}

//log(organizingContainers([[1,1], [1,1]])) //Possible
//log(organizingContainers([[0,2], [1,1]])) //Impossible
//log(organizingContainers([[1,3,1], [2,1,2], [3,3,3]])) //Impossible
//log(organizingContainers([[0,2,1], [1,1,1], [2,0,0]])) //Possible

/*
Encryption

Function Description

Complete the encryption function in the editor below.

encryption has the following parameter(s):

    string s: a string to encrypt

Returns

    string: the encrypted string
*/

function encryption(s) {
  s = s.replaceAll(" ", "").split("");
  let rows = Math.floor(Math.sqrt(s.length));
  let columns = Math.ceil(Math.sqrt(s.length));

  if (rows * columns < s.length) rows = columns;

  let sMatrix = []
  let response = ""
  
  for (let i = 0; i < rows; i++){
    sMatrix.push(s.splice(0, columns))
  }

  for (let j = 0; j < columns; j++) {
    for (let i = 0; i < rows; i++) {
      if(sMatrix[i][j] === undefined) continue
      response += sMatrix[i][j]
    }

      response += " "
  }

  return response.trim();
}

//log(encryption("haveaniceday")) //hae and via ecy
//log(encryption("feedthedog    ")) //fto ehg ee dd
//log(encryption("chillout")) //clu hlt io

/*
Bigger is Greater

Function Description

Complete the biggerIsGreater function in the editor below.

biggerIsGreater has the following parameter(s):

    string w: a word
*/

function lastIndexOf(str, c, stop) {
    for (let i = str.length - 1; i >= stop; i--) {
        if (str.charAt(i) === c) {
            return i
        }
    }
    
    return -1
}

function biggerIsGreater(w) {
    
    if (w.length === 1) {
        return 'no answer'
    }
    
    const end = 'z'.charCodeAt(0)
    
    for (let i = w.length - 2; i >= 0; i--) {
        for (let x = w.charCodeAt(i) + 1; x <= end; x++) {
            
            const c = String.fromCharCode(x)            
            const index = lastIndexOf(w, c, i + 1)
            
            if (index !== -1) {
                const s = w.split('')
                const t = s[i]
                s[i] = s[index]
                s[index] = t
                
                const part1 = s.slice(0, i + 1)
                const part2 = s.slice(i + 1)
                
                part2.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
                
                return [part1, part2].map(it => it.join('')).join('')
            }
        }
    }
    
    return 'no answer'
}

log(biggerIsGreater("ab")) //ba
log(biggerIsGreater("bb")) //no answer
log(biggerIsGreater("hefg")) //hegf
log(biggerIsGreater("dhck")) //dhkc
log(biggerIsGreater("dkhc")) //hcdk
log(biggerIsGreater("abdc")) //acbd

