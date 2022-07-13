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
  for(let element of arr) {
    if(element > 0) {
      positiveElements++
    } else if (element < 0) {
      negativeElements++
    } else {
      ceroElements++
    }
  }

  console.log((positiveElements/arr.length).toFixed(6))
  console.log((negativeElements/arr.length).toFixed(6))
  console.log((ceroElements/arr.length).toFixed(6))
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
    console.log(row.fill('#', row.length -i).join(''))
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
  
  for(let i = 0; i < arr.length -1; i++) {
    min += arr[i]
    max += arr[i+1]
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
    if(element === maxCandle) counter++
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

log(timeConversion('07:05:45PM')) // 19:05:45