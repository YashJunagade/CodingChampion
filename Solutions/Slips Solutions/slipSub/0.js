const c = [
  {
    subject: 'C Programming',
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept dimensions of a cylinder and display the surface area and volume of the cylinder.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a structure employee (id, name, salary). Accept details of n employees and write a menu-driven program to perform the following operations:<br>a) Search employee by id<br>b) Display all employees',
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept the radius of a circle and display the area and circumference of the circle.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to calculate the sum of the following series up to n terms:<br>Sum = X + X^2 / 2! + X^3 / 3! + ……<br>(Note: Write separate user-defined functions to calculate power and factorial)',
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept temperatures in Fahrenheit (F) and display it in Celsius (C) and Kelvin (K). (Hint: C=5.0/9(F-32), K = C + 273.15)',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a menu-driven program to perform the following operations on strings using standard library functions:<br>1. Length of String<br>2. Copy String<br>3. Concatenate Two Strings<br>4. Compare Two Strings',
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept two numbers and print the arithmetic and harmonic mean of the two numbers. (Hint: AM = (a + b) / 2, HM = ab / (a + b))',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a structure Student (id, name, marks). Accept details of n students and write a menu-driven program to perform the following operations:<br>a) Search student by id<br>b) Display all students',
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept dimensions length (l), breadth (b), and height (h) of a cuboid and display surface area and volume. (Hint: Surface Area = 2(lb + lh + bh), Volume = lbh)',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program which accepts a sentence from the user and alters it as follows: Every space is replaced by *, the case of all alphabets is reversed, and digits are replaced by ?.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: "Write a C Program to accept a character from the keyboard and display its previous and next character in order. Example: If the character entered is ‘d’, display 'The previous character is c' and 'The next character is e'.",
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to accept a string and then count the occurrences of a specific character in the string.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept the x and y coordinates of two points and compute the distance between the two points.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to calculate the multiplication of two matrices of order m*n.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: 'A cashier has currency notes of denomination 1, 5, and 10. Write a C program to accept the withdrawal amount from the user and display the total number of currency notes of each denomination the cashier will have to give.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a menu-driven program to perform the following operations on an m*n matrix:<br>1. Calculate the sum of upper triangular matrix elements<br>2. Calculate the sum of diagonal elements',
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept a character from the user and check whether the character is a vowel or consonant.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to accept two numbers as a range and display the multiplication table of all numbers within that range.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept the x and y coordinates of a point and find the quadrant in which the point lies.',
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a program, which accepts a number n and displays each digit in words. Example: 6702 should output 'Six-Seven-Zero-Two'.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept the cost price and selling price from the user. Find out if the seller has made a profit or loss and display how much profit or loss has been made.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Accept radius from the user and write a program having a menu with the following options and corresponding actions:<br>1. Area of Circle - Compute area of the circle and print<br>2. Circumference of Circle - Compute the circumference of the circle and print<br>3. Volume of Sphere - Compute the volume of the sphere and print',
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to calculate the sum of digits of a given input number.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Accept two numbers from the user and write a menu-driven program to perform the following operations:<br>1. Swap the values of the two variables<br>2. Calculate arithmetic mean and harmonic mean of the two numbers',
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept the value of n and display the sum of all odd numbers up to n.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to accept a decimal number and convert it to binary, octal, and hexadecimal numbers.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to check whether an input number is an Armstrong number or not.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to accept a number and count the number of even, odd, and zero digits within that number.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: 'Write a program having a menu with the following options and corresponding actions:<br>1. Area of square - Accept length, compute area of square, and print<br>2. Area of Rectangle - Accept length and breadth, compute area of rectangle, and print<br>3. Area of triangle - Accept base and height, compute area of triangle, and print',
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to calculate xy without using standard library functions.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to display the union and intersection of two 1D arrays.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to display the multiplication table of a given input number.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a menu-driven program to perform the following operations on an m*n matrix:<br>1. Display the transpose of the matrix<br>2. Calculate the sum of all odd elements of the matrix',
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to generate the following triangle up to n lines:<br>1<br>1 2<br>1 2 3',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to calculate the sum of the following series up to n terms:<br>Sum = X - X^2/2! + X^3/3! - ...<br>(Note: Write separate user-defined functions to calculate power and factorial)',
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to generate the following triangle up to n lines:<br>* * * *<br>* * *<br>* *<br>*',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a menu-driven program to perform the following operations on an m*n matrix:<br>1. Find the sum of diagonal elements of the matrix<br>2. Find the sum of all even numbers in the matrix',
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to generate the following triangle up to n lines:<br>1<br>2 3<br>4 5 6',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to calculate the addition of two matrices.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to generate the following triangle up to n lines:<br>A<br>A B<br>A B C',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a structure employee (eno, ename, salary). Accept details of n employees and write a menu-driven program to perform the following operations:\n1. Display all employees having salary > 5000\n2. Display all employees',
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to generate the following triangle up to n lines:<br>A B C<br>A B<br>A',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a menu-driven program to perform the following operation on m*n Matrix:\n1. Find sum of non-diagonal elements of matrix\n2. Find sum of all odd numbers of matrix',
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to accept n elements of 1D array and then display the sum of all elements of the array.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Accept n integers in an array. Copy only the non-zero elements to another array (allocated using dynamic memory allocation). Calculate the sum and average of non-zero elements.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to find the maximum elements of a 1D array.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a structure Book (Bno, Bname, Price). Accept details of n Books and write a menu-driven program to perform the following operations:\n1. Display all Books having price > 500\n2. Display Book having maximum price',
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to calculate the sum of all even elements of a matrix.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a menu-driven program for the following options:\n1. Check if an input number is an Armstrong number or not\n2. Check if an input number is a Perfect number or not',
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to calculate the length of a string without using standard functions.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to display the elements of an array containing n integers in the reverse order using a pointer to the array.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: 'Write a program to count the occurrences of vowels in an input string.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a structure Item (Ino, Iname, Price). Accept details of n Items and write a menu-driven program to perform the following operations:\n1. Display all Items having price > 800\n2. Display Item record with Ino=2',
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: 'Write a program to accept a string and then count the occurrences of a specific character in the string.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to accept two numbers as a range and display the multiplication table of all numbers within that range.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: 'Write a C program to calculate the factorial of a number using a user-defined function.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program that accepts a number n and displays each digit separated by tabs. Example: 6702 Output = 6\t7\t0\t2',
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: 'Write a program to find the sum of digits of a given input number using a user-defined function.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a program to accept a number and count the number of even, odd, and zero digits within that number.',
            marks: 25,
          },
        ],
      },
    ],
    language: 'c',
  },
];
