const SlipData = [
  {
    subject: "C Programming",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
            sol: `#include <stdio.h>
#define MAX 10

int Stack[MAX], top = -1;

void create(int data)
{
    top++;
    Stack[top] = data;
}

void show()
{
    int i;
    for (i = top; i >= 0; i--)
        printf("%d	", Stack[i]);
}

int main()
{
    int data, choice;
    do
    {
        printf("Enter the data :");
        scanf("%d", &data);
        create(data);
        printf("Do you want to add more element in stack (yes-1 & no-0) :");
        scanf("%d", &choice);
    } while (choice == 1);
    printf("The stack is: ");
    show();
}`,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "c",
  },
  {
    subject: "DBMS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "sql",
  },
  {
    subject: "Web Techonology",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "html",
  },
  {
    subject: "RDBMS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "plsql",
  },
  {
    subject: "Data Structure",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a menu driven program using ‘C’ for Binary Search Tree. The menu includes:\n- Create a Binary Search Tree\n- Insert element in a Binary Search Tree\n- Display",
            marks: 20,
          },
          {
            questionId: 2,
            text: "Write a ‘C’ program to evaluate a given polynomial using function. (Use array).",
            marks: 10,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write a 'C' program to accept a string from a user and reverse it using Static
            implementation of Stack.`,
            marks: 20,
          },
          {
            questionId: 2,
            text: `Write a 'C' program to create a Circularly Doubly Linked list and display it.`,
            marks: 10,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write a program to create two singly linked lists of elements of type integer and
            find the union of the linked lists. (Accept elements in the sorted order)`,
            marks: 20,
          },
          {
            questionId: 2,
            text: `Write a 'C' program to read the adjacency matrix of a directed graph and convert
            it into an adjacency list.`,
            marks: 10,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: "Write a menu driven program using ‘C’ for Binary Search Tree. The menu includes:\n- Create a Binary Search Tree\n- Traverse it by using Inorder and Postorder traversing technique",
            marks: 20,
          },
          {
            questionId: 2,
            text: "Write a ‘C’ program to accept two polynomials and find the addition of accepted polynomials. (use array)",
            marks: 10,
          },
        ],
      },
    ],
    language: "c",
  },
  {
    subject: "Big Data",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "r",
  },
  {
    subject: "Php",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "php",
  },
  {
    subject: "Angular JS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "javascript",
  },
  {
    subject: "CPP",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "cpp",
  },
  {
    subject: "Advance Php",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "php",
  },
  {
    subject: "Node JS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "javascript",
  },

  {
    subject: "Core Java",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: `Write a ‘java’ program to display characters from ‘A’ to ‘Z’`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a ‘java’ program to copy only non-numeric data from one file to another file.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display all the vowels from a given string.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Design a screen in Java to handle the Mouse Events such as MOUSE_MOVED and MOUSE_CLICK and 
            display the position of the Mouse_Click in a TextField`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write a ‘java’ program to check whether given number is Armstrong or not. (Use static keyword)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Define an abstract class Shape with abstract methods area () and volume (). 
            Derive abstract class Shape into two classes Cone and Cylinder. 
            Write a java to calculate area and volume of Cone and Cylinder.(Use Super Keyword.)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display alternate character from a given string`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program using Applet to implement a simple arithmetic calculator`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: "Write a java program to display following pattern: <br> 5 <br> 4 5<br> 3 4 5<br> 2 3 4 5<br> 1 2 3 4 5",
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept list of file names through command line. Delete the files having extension .txt. 
            Display name, location and size of remaining files`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept a number from user, if it zero then throw user defined Exception 
            “Number Is Zero”, otherwise calculate the sum of first and last digit of that number. (Use static keyword).`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to display transpose of a given matrix.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display Label with text “Dr. D Y Patil College”, background 
            color Red and font size 20 on the frame.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept details of ‘n’ cricket player (pid, pname, totalRuns,InningsPlayed, NotOuttimes). Calculate the average of all the players. Display the details of player having maximum average. (Use Array of Object)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: `Define an Interface Shape with abstract method area(). Write a java program to calculate an area of Circle and Sphere.(use final keyword)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to display the files having extension .txt from a given directory. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: `Write a java Program to display following pattern: <br/>1 <br/>0 1 <br/>0 1 0 <br/>1 0 1 0`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to validate PAN number and Mobile Number. If it is invalid then throw user defined Exception “Invalid Data”, otherwise display it.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to count the frequency of each character in a given string.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program for the following:`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: `Write a menu driven java program using command line arguments for the following:  <br/>1. Addition <br/>2. Subtraction <br/>3. Multiplication <br/>4. Division.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write an applet application to display Table lamp. The color of lamp should get change randomly.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display each String in reverse order from a String array`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to display multiplication table of a given number into the List box by clicking on button.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept ‘n’ integers from the user & store them in an ArrayList collection. Display the elements of ArrayList collection in reverse order.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program that asks the user name, and then greets the user by name. Before outputting the user's name, convert it to upper case letters. For example, if the user's name is Raj, then the program should respond "Hello, RAJ, nice to meet you!".`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to calculate power of a number using recursion.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept the details of employee (Eno, EName, Sal) and display it on next frame using appropriate event .`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to search given name into the array, if it is found then display its index otherwise display appropriate message. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write an applet application to display smiley face.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to calculate sum of digits of a given number using recursion`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept n employee names from user. Sort them in ascending order and Display them.(Use array of object and Static keyword)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: `Write a java Program to accept ‘n’ no’s through command line and store only armstrong no’s into the array and display that array.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Define a class Product (pid, pname, price, qty). Write a function to accept the product details, display it and calculate total amount. (use array of Objects)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to calculate area of Circle, Triangle & Rectangle.(Use Method Overloading) `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to copy the data from one file into another file, while copying change the case of characters in target file and replaces all digits by ‘*’ symbol`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to display Fibonacci series using function `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Create an Applet that displays the x and y position of the cursor movement using Mouse and Keyboard. (Use appropriate listener) `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: `Write a java program using AWT to create a Frame with title “TYBBACA”, background color RED. If user clicks on close button then frame should close`,
            marks: 15,
          },
          {
            questionId: 2,
            text: "Construct a Linked List containing name: CPP, Java, Python and PHP. Then extend your java program to do the following: <br/>i. Display the contents of the List using an Iterator <br/>ii. Display the contents of the List in reverse order using a ListIterator",
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display each word from a file in reverse order`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Create a hashtable containing city name & STD code. Display the details of the hashtable. Also search for a specific city and display STD code of that city.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: `Write a Java program to calculate factorial of a number using recursion`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program for the following:<br/>1. To create a file.<br/>2. To rename a file.<br/>3. To delete a file.<br/>4. To display path of a file`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to check whether given file is hidden or not. If not then display its path, otherwise display appropriate message.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to design following Frame using Swing. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to count number of digits, spaces and characters from a file.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Create a package TYBBACA with two classes as class Student (Rno, SName, Per) with a method disp() to display details of N Students and class Teacher (TID, TName, Subject) with a method disp() to display the details of teacher who is teaching Java subject. (Make use of finalize() method and array of Object)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to check whether given string is palindrome or not.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: "Create a package named Series having three different classes to print series: <br/>i. Fibonacci series <br/>ii. Cube of numbers <br/>iii. Square of numbers <br/>Write a java program to generate ‘n’ terms of the above series",
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to display ASCII values of the characters from a file`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program using applet to draw Temple.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept a number from user, If it is greater than 1000 then throw user defined exception “Number is out of Range” otherwise display the factors of that number. (Use static keyword)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to accept directory name in TextField and display list of files and subdirectories in List Control from that directory by clicking on Button.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to count the number of integers from a given list. (Use Command line arguments). `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java Program to accept the details of 5 employees (Eno, Ename, Salary) and display it onto the JTable.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to check whether given candidate is eligible for voting or not. Handle user defined as well as system defined Exception. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program using Applet for bouncing ball. Ball should change its color for each bounce.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: `Write a java program to accept a number from a user, if it is zero then throw user defined Exception “Number is Zero”. If it is non-numeric then generate an error “Number is Invalid” otherwise check whether it is palindrome or not.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a java program to design a following GUI (Use Swing).`,
            marks: 25,
          },
        ],
      },
    ],
    language: "java",
  },

  {
    subject: "Python",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: `Write a Python program to accept n numbers in list and remove duplicates from a list. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program to take accept your birthdate and output your age when a button is pressed.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters. <br> Sample String: 'The quick Brown Fox' <br/> Expected Output: <br> No. of Upper case characters: 3 <br/> No. of Lower case characters: 13 `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program to create a digital clock with Tkinter to display the time.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write a Python program to check if a given key already exists in a dictionary. If key exists replace with another key/value pair.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a python script to define a class student having members roll no, name, age, gender. Create a subclass called Test with member marks of 3 subjects. Create three objects of the Test class and display all the details of the student with total marks.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: `Write Python GUI program to create background with changing colors `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Define a class Employee having members id, name, department, salary. Create a subclass called manager with member bonus. Define methods accept and display in
both the classes. Create n objects of the manager class and display the details of the manager having the maximum total salary (salary+bonus).`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: "Write a Python script using class, which has two methods get_String and print_String. get_String accept a string from the user and print_String print the string in upper case",
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a python script to generate Fibonacci terms using generator function.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: `Write python script using package to calculate area and volume of cube and sphere`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python GUI program to create a label and change the label font style (font name, bold, size). Specify separate check button for each style.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: `Write Python class to perform addition of two complex numbers using binary + operator overloading.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write python GUI program to generate a random password with upper and lower case letters. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: `Write a python script to find the repeated items of a tuple`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python class which has two methods get_String and print_String. get_String accept a string from the user and print_String print the string in upper case. Further modify the program to reverse a string word by word and print it in lower case.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: `Write a Python script using class to reverse a string word by word `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program to accept a number n and check whether it is Prime, Perfect or Armstrong number or not. Specify three radio buttons.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: `Write Python GUI program to display an alert message when a button is pressed.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python class to find validity of a string of parentheses, '(', ')', '{', '}', '[' ']’. These brackets must be close in the correct order. for example "()" and "()[]{}" are valid but "[)", "({[)]" and "{{{" are invalid. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: `Write a Python program to compute element-wise sum of given tuples. Original lists: (1, 2, 3, 4) (3, 5, 2, 1) (2, 2, 3, 1) Element-wise sum of the said tuples: (6, 9, 8, 6)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program to add menu bar with name of colors as options to change the background color as per selection from menu option. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: `Write a Python GUI program to create a label and change the label font style (font name, bold, size) using tkinter module`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a python program to count repeated characters in a string.<br> Sample string: 'thequickbrownfoxjumpsoverthelazydog' <br> Expected output: o-4, e-3, u-2, h-2, r-2, t-2 `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: `Write a Python program to input a positive integer. Display correct message for correct and incorrect input. (Use Exception Handling)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a program to implement the concept of queue using list.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: `Write a Python GUI program to accept dimensions of a cylinder and display the surface area and volume of cylinder.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python program to display plain text and cipher text using a Caesar encryption`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: `Write a Python class named Student with two attributes student_name, marks. Modify the attribute values of the said class and print the original and modified values of the said attributes.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a python program to accept string and remove the characters which have odd index values of given string using user defined function.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: `Write a python script to create a class Rectangle with data member’s length, width and methods area, perimeter which can compute the area and perimeter of rectangle. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program to add items in listbox widget and to print and delete the selected items from listbox on button click. Provide three separate buttons to add, print and delete.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: `Write Python GUI program that takes input string and change letter to upper case when a button is pressed.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Define a class Date (Day, Month, Year) with functions to accept and display it. Accept date from user. Throw user defined exception “invalid Date Exception” if the date is invalid. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: `Create a list a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] and write a python program that prints out all the elements of the list that are less than 5`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a python script to define the class person having members name, address. Create a subclass called Employee with members staffed salary. Create 'n' objects of the Employee class and display all the details of the employee.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: `Write a Python GUI program to accept a number form user and display its multiplication table on button click. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Define a class named Shape and its subclass(Square/ Circle). The subclass has an init function which takes an argument (Lenght/redious). Both classes should have methods to calculate area and volume of a given shape. `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: `Write a python program to create a class Circle and Compute the Area and the circumferences of the circle.(use parameterized constructor)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python script to generate and print a dictionary which contains a number (between 1 and n) in the form(x,x*x). <br> Sample Dictionary (n=5) Expected Output: {1:1, 2:4, 3:9, 4:16, 5:25}`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: `Define a class named Rectangle which can be constructed by a length and width. The Rectangle class has a method which can compute the area and Perimeter.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python program to convert a tuple of string values to a tuple of integer values. <br>  Original tuple values: (('333', '33'), ('1416', '55'))<br>  New tuple values: ((333, 33), (1416, 55))`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: `Write a python class to accept a string and number n from user and display n repetition of strings by overloading * operator.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a python script to implement bubble sort using list `,
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: `Write a Python GUI program to create a label and change the label font style (font name, bold, size) using tkinter module`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Create a class circles having members radius. Use operator overloading to add the radius of two circle objects. Also display the area of circle.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: `Write a Python Program to Check if given number is prime or not. Also find factorial of the given no using user defined function.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program which accepts a number n to displays each digit of number in words.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: `Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters.<br>  Sample String : 'The quick Brow Fox'<br>  Expected Output :<br>  No. of Upper case characters : 3<br>  No. of Lower case Characters : 12 .`,
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a Python script to Create a Class which Performs Basic Calculator Operations.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: `Write an anonymous function to find area of square and rectangle.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program which accepts a sentence from the user and alters it when a button is pressed. Every space should be replaced by *, case of all alphabets should be reversed, digits are replaced by?.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: `Write a Python program to unzip a list of tuples into individual lists. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write Python GUI program to accept a decimal number and convert and display it to binary, octal and hexadecimal number`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: `Write a Python GUI program to create a list of Computer Science Courses using Tkinter module (use Listbox)`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python program to accept two lists and merge the two lists into list of tuple.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: `Write a Python GUI program to calculate volume of Sphere by accepting radius as input.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Write a Python script to sort (ascending and descending) a dictionary by key and value`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: `Write a Python GUI program to accept a string and a character from user and count the occurrences of a character in a string. `,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Python Program to Create a Class in which One Method Accepts a String from the User and Another method Prints it. Define a class named Country which has a method called print Nationality. Define subclass named state from Country which has a mehtod called printState. Write a method to print state, country and nationality. `,
            marks: 25,
          },
        ],
      },
    ],
    language: "python",
  },
  {
    subject: "MongoDB",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "json",
  },
  {
    subject: "Advance Java",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "java",
  },
  {
    subject: "Android Programming",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "java",
  },
  {
    subject: "Dot Net Framework",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to check whether a given number is Armstrong or not. (Use static keyword)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Define an abstract class Shape...",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Write a C program to display the transpose of a given matrix",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a C program to accept a number from the user...",
            marks: 25,
          },
        ],
      },
    ],
    language: "csharp",
  },
];

/* 0-c, 1-dbms, 2-web tech, 3-rdbms 4-data structure, 5-bigdata, 6-php, 7-angular js, 8-cpp, 9-advance php, 10-nodejs, 11-corejava, 12-python, 13-mongodb, 14-advance java, 15-android programming, 16-dotnot framework   */
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../src/config/firebase";
import { languages } from "monaco-sql-languages/esm/fillers/monaco-editor-core";

export async function uploadData() {
  const subjectsCollection = collection(db, "slipSubjects");

  for (const subject of SlipData) {
    const subjectDoc = doc(subjectsCollection, subject.subject);
    await setDoc(subjectDoc, {
      subject: subject.subject,
      slips: subject.slips,
      language: subject.language,
    });
  }

  console.log("Data uploaded successfully");
}
