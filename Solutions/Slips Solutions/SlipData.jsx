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
            text: ` Create a ‘films’ collection of documents with the following fields: 
<br>{
<br>    title : "Jurassic Park",
<br>    director : "Steven Spielberg",
<br>    release_year : 1993,
<br>    language:"English",
<br>    film_type : [ "Action", "Adventure "],
<br>    actors : ["Sam Neill", "Laura Dern", "Jeff Goldblum"]
<br>}
<br>1) Insert at least 10 documents in a collection.
<br>2) Display all documents of ‘films’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `) Solve the Following Queries: 
<br>1) Give all English films released before year 2000.
<br>2) Display title and release year of ‘Action’ films that starts with the letter ‘K’.
<br>3) Display the latest five ‘Hindi’ films released in easy-to-read format.
<br>4) Count the number of films in which ‘Akshay Kumar’ has not acted.
<br>5) Update release year of a film ‘Jungle Book’ to 2016.
`,
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
            text: `) Create a ‘films’ collection of documents with the following fields: 
<br>{
<br>    title : "Jurassic Park",
<br>    director : "Steven Spielberg",
<br>    release_year : 1993,
<br>    language:"English",
<br>    film_type : [ "Action", "Adventure "],
<br>    actors : ["Sam Neill", "Laura Dern", "Jeff Goldblum"]
<br>}
<br>1) Insert at least 10 documents in a collection.
<br>2) Display all documents of ‘films’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries: 
<br> 1) Give all English films released before year 2000.
<br> 2) Display title and release year of ‘Action’ films that starts with the letter ‘K’.
<br> 3) Display the latest five ‘Hindi’ films released in easy-to-read format.
<br> 4) Count the number of films in which ‘Akshay Kumar’ has not acted.
<br> 5) Update release year of a film ‘Jungle Book’ to 2016.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Competition’ collection of documents with the following fields:{Competition_Name: "….", Competition_Type: "….", Competition_Year:…, students:["….", "….","…." ]}
<br>  In this, Competition_type can be ‘Sport’ or ‘Academic’.
<br>  1) Insert at least 10 documents in a collection.
<br>  2) Display all documents of ‘Competition’ collection in proper format.
`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries: 
<br>  1) Display all ‘Sport’ competition details which were held between years 2018 to 2019.
<br>  2) Display number of students participated in ‘Running’ competition which was conducted in year 2019.
<br>  3) Update Competition_name of ‘Programming Competition’ to ‘Online Programming Competition’ for year 2020.
<br>  4) Add one more name of student ‘Prasad More’ in ‘Project Competition’ of year 2021.
<br>  5) Sort Competition collection in descending order of Competition_Year.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Hospital’ collection of documents with the following fields:
<br> { 
<br>   hospital_name:"Birla Hospital",
<br>   city: “Chinchwad”,
<br>   specialties:["Pediatric", "Orthopedic"],
<br>   doctors:[{doctor_name:"Dr. Kadam", visit_day:"Monday"}, {doctor_name:"Dr.
<br>   Mane", visit_day:"Tuesday"}],
<br>   services:["laboratory", "surgical", "diagnostic", "ambulance"],
<br>   rating:5
<br> }
<br> 1) Insert at least 10 documents in a collection.
<br> 2) Display all documents of ‘Hospital’ collection in proper format.
`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries: 
<br>   1) Display details of hospital where Dr. More is visiting.
<br>   2) Display all hospital names along with their specialties from ‘Pune’ city.
<br>   3) Count the number of hospitals which are providing ‘ambulance’ service.
<br>   4) Display details of hospital whose ‘rating’ is specified.
<br>   5) Delete those documents whose hospital name starts with letter ‘P’`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Book’ collection of documents with the following fields: 
<br>  {
<br>     Book_Title:"….", Publisher_name:"….", Authors:[".....","......"],
<br>     Language:"….",Publication_year:….,ISBN:…., price:…..
<br>  }
<br>  1) Insert at least 10 documents in a collection, use bulk insert.
<br>  2) Display all documents of ‘Book’ collection in proper format.
`,
            marks: 15,
          },
          {
            questionId: 2,
            text: ` Solve the Following Queries: 
<br> 1) Display two books of ‘BPB’ publication.
<br> 2) Display Book_title and Authors of books published between years 2019 to 2021.
<br> 3) Count number of books having three authors.
<br> 4) Update the ISBN number of book titled “Definitive Guide to MongoDB” to “1-4302-3051-7”.
<br> 5) Add one more author “Alex Buckley” to book titled “The Java Languages Specification”.
`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: `Create an ‘Institute’ collection of documents with the following fields: 
<br>  { 
<br>     Name:"….", City:"….",No_of_faculties:….,Est_Year:….,
<br>     Courses:[{Course_Name:"….", Dur_in_month:….,Fees:….},…]
<br>  }
<br> 1) Insert at least 10 documents in a collection.
<br> 2) Display all documents of ‘Institute’ collection in proper format`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries: 
<br> 1) Give all institute names whose establishment year is before2010.
<br> 2) Display Institute details having Course ‘Java’.
<br> 3) Update No_of_faculties of ‘Disha’ Institute to 10.
<br> 4) Display the latest three Institutes established in easy-to-read format.
<br> 5) Count the number of Institutes in ‘Pune’ city, established after 2019.
`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Doctor’ collection of documents with the following fields: 
      <br>  { 
      <br>    Doctor_name:"Dr. Patil", 
      <br>    Contact_No:9876543210, 
      <br>    City: “Pune”, 
      <br>    Qualification:"MBBS", 
      <br>    specialization:["ENT", "General Surgery"], 
      <br>    hospitals:[{hospital_name:"Niramay Hospital", visit_day:"Monday"},
      <br>    {hospital_name:"Birla Hospital", visit_day:"Tuesday"}] 
      <br>  }
      <br> 1) Insert at least 10 documents in a collection, use bulk insert.
      <br> 2) Display all documents of ‘Doctor’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries: 
      <br> 1) Count number of doctors having qualification ‘MBBS’.
      <br> 2) Display qualification and specialization of all doctors from ‘Mumbai’ city.
      <br> 3) Display details of two doctors having specialization in ‘ENT’.
      <br> 4) Change qualification of “Dr. Patil” to MD.
      <br> 5) Delete all Doctor Documents not having city ‘Pimpri’.`,
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
            text: `Write a java program to accept details of ‘n’ cricket players (pid, pname, totalRuns, InningsPlayed, NotOuttimes). Calculate the average of all the players. Display the details of the player having the maximum average. (Use Array of Object)`,
            marks: 25,
          },
          {
            questionId: 3,
            text: `Create a ‘Result’ collection of documents with the following fields: 
      <br>  { 
      <br>    student_id: 1, 
      <br>    student_name: "Mr. Anuj Joshi", 
      <br>    class: "TYBBA_CA", 
      <br>    test_marks: [{subject: "Java", marks: 78}, {subject: "Python", marks: 80}], 
      <br>    grade: 'A' 
      <br>  }
      <br>  1) Insert at least 10 documents in a collection.
      <br>  2) Display all documents of ‘Result’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 4,
            text: `Solve the Following Queries:
      <br> 1) Display details of students whose ‘grade’ is given.
      <br> 2) Display documents where the subject is ‘Java’ and marks are greater than or equal to 70.
      <br> 3) Display student details whose name ends with “ne”.
      <br> 4) Give the name and class of the student who has given 4 subject tests.
      <br> 5) Insert a field 'percentage' in the student document whose name is “Ms. Priya Rane”.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: `Create an ‘Album’ collection of documents with the following fields: 
      <br>  { 
      <br>    title: "….", 
      <br>    artist: ["….", "…."], 
      <br>    released_year: ….,
      <br>    tracks: [{track_id: …., track_title: "….", seconds: …. }, …..], 
      <br>    genre: "…." 
      <br>  }
      <br> 1) Insert at least 10 documents in a collection, use bulk insert.
      <br> 2) Display all documents of ‘Album’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Count the number of albums released between the years 2010 to 2020.
      <br> 2) Display two documents that have the genre ‘Rock’.
      <br> 3) Give the title and artist of an album which has 3 tracks.
      <br> 4) Display albums that do not have the genre either ‘Rock’ or ‘hip-hop’.
      <br> 5) Update the seconds of the track to 6.38 whose track id is 2 and album title is “What’s Going On”.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Contributor’ collection of documents with the following fields: 
<br>  { 
<br>    Contributor_name: "Rohit Sawant", 
<br>    Branch: "CSE", 
<br>    Join_year: 2019, 
<br>    Language: ["C++", "Java"], 
<br>    Articles: [{Language: "C++", tArticles: 20, pArticles: 30}, {Language: "Java", tArticles: 50, pArticles: 30}], 
<br>    Personal_Info: {age: 24, Sem_Marks: [70, 80, 77, 81]} 
<br>  }
<br> 1) Insert at least 10 documents in a collection.
<br> 2) Display all documents of ‘Contributor’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
<br> 1) Append two languages named “Python” and “C” to contributor “Rohit Sawant”.
<br> 2) Delete the first matched document having Branch “CSE” or Join_Year less than 2020.
<br> 3) Display the latest five Contributors joined in easy-to-read format.
<br> 4) Display documents having “CSE” branch. (Use cursor)
<br> 5) Give the name and branch of the contributor whose age is greater than or equal to 20.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Person’ collection of documents with the following fields: 
      <br>  { 
      <br>    pname: "….", 
      <br>    contact_no: …. , 
      <br>    city: "….", 
      <br>    profession: ["….","…."], 
      <br>    cars: [{model: "….", year: …., price: …. }, …. ] 
      <br>  }
      <br> 1) Insert at least 10 documents in a collection, use bulk insert.
      <br> 2) Display all documents of ‘Person’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display the name and contact number of the person having 3 cars.
      <br> 2) Display different cities from which persons belong.
      <br> 3) Create an index using the ‘pname’ field and name it as ‘Person Name Index’.
      <br> 4) Delete the first person document whose city is ‘Chinchwad’.
      <br> 5) Update the Person document whose name is “Mrs. Mahajan” while updating, add only those professions which do not already exist in her profession field.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Company’ collection of documents with the following fields: 
      <br>  { 
      <br>    company_id: 1, 
      <br>    company_name: "Apple", 
      <br>    contact_details: { address: "Cupertino, CA 95014", phone: "1-408-996-1010" }, 
      <br>    products: [{ code: "A-123", name: "IPhone 7", price: 29,900 }, { code: "A-456", name: "IPadPro", price: 37,900 }], 
      <br>    rating: 5 
      <br>  }
      <br> 1) Insert at least 10 documents in a collection.
      <br> 2) Display all documents of ‘Company’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Count number of mobile companies whose name ends with the letter ‘o’.
      <br> 2) Sort the company collection in descending order of their id.
      <br> 3) Give the address and phone number of the ‘Samsung’ company.
      <br> 4) Update the price of the ‘IPhone 7’ to 32,900.
      <br> 5) Display details of the company whose ‘rating’ is specified.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Customer’ collection of documents with the following fields:
      <br>  { 
      <br>    Cust_id: 1, 
      <br>    Cust_name: "Mr. Joshi", 
      <br>    address: { city: "Pune", street: "S. B. Road" }, 
      <br>    orders: [
      <br>      { 
      <br>        id: 101, 
      <br>        orderItems: [
      <br>          { productId: 8, price: 560, productName: "keyboard" }, …..]
      <br>      }, …..] 
      <br>  }
      <br> 1) Insert at least 10 documents in a collection.
      <br> 2) Display all documents of ‘Customer’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display customer details that have placed two orders.
      <br> 2) Replace the document having id 3 with a new document.
      <br> 3) Increment the price of ‘keyboard’ by Rs. 100.
      <br> 4) Add one more product in an order having order id 101, which is placed by “Mr. Joshi”.
      <br> 5) Display all the documents having customer id greater than or equal to 4. (Use cursor)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Student’ collection of documents with the following fields:
      <br> { 
      <br>   rno: …., class: "….", 
      <br>   fname: "….", lname: "….", 
      <br>   age: …., address: { street: "….", city: "….", state: "…." }, 
      <br>   hobbies: ["….", "…."]
      <br> } 
      <br> 1) Insert at least 10 documents in a collection, use bulk insert. 
      <br> 2) Display all documents of ‘Student’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display the total number of students in ‘TYBBA_CA’ class. 
      <br> 2) Give rno, fname, and lname of the student who is having the smallest age in class ‘SYBBA_CA’. 
      <br> 3) Add one more hobby ‘swimming’ at the second position in the hobbies field of the student having roll number 2 and class ‘TYBBA_CA’. 
      <br> 4) Rename the name of ‘fname’ field to ‘firstname’ and ‘lname’ to ‘lastname’ in all the student documents having age greater than or equal to 18. 
      <br> 5) Insert a new field ‘percentage’ in the student document having class ‘TYBBA_CA’ and roll number 1.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Musicians’ collection of documents with the following fields:
      <br> { 
      <br>   id: ….,
      <br>   name: "….",
      <br>   birth_year: ….,
      <br>   albums: ["….", "…."],
      <br>   instruments: ["….", "…."]
      <br> } 
      <br> 1) Insert at least 10 documents in a collection, use bulk insert. 
      <br> 2) Display all documents of ‘Musicians’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display the name of musicians in descending order of their birth year. 
      <br> 2) Add one more album to the musician having id 3. 
      <br> 3) Insert a new field ‘occupations’ in the musician document having name ‘A. R. Rahman’. 
      <br> 4) Give id and name of only those musicians who play 2 instruments. 
      <br> 5) Update the birth year of the musician “Pandit Ravi Shankar” to 1920.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: `Create a ‘Projects’ collection of documents with the following fields:
      <br> { 
      <br>   proj_id: ….,
      <br>   proj_name: "….",
      <br>   proj_manager: "….",
      <br>   start_date: ….,
      <br>   dur_in_month: ….,
      <br>   emps_work_in_proj: ["….", "…."]
      <br> } 
      <br> 1) Insert at least 10 documents in a collection. 
      <br> 2) Display all documents of ‘Projects’ collection in proper format.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display id and name of all those projects having duration greater than or equal to six months. 
      <br> 2) Count number of projects managed by “Mr. Sumit Jadhav”. 
      <br> 3) Increment the duration of all projects by one month. 
      <br> 4) Add one more employee “Mr. Mahesh Kulkarni” to the “College Automation” project. 
      <br> 5) Display details of projects in which 4 employees are working.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: `Create two documents named user1 and user2 as follows:
      <br> 1) user1 = {FName: "Test", LName: "User", Age:30, Gender: "M", Country: "India"} 
      <br> user2 = {Name: "Test User", Age:45, Gender: "F", Country: "India"} 
      <br> 1) Add both these documents (user1 and user2) to the users collection in the subsequent order.
      <br> 2) Verify your created collection and database by using proper Mongo DB command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display all documents in the users collection. 
      <br> 2) Update the country to UK for all female users and check whether the country has been updated for all the female employees or not. 
      <br> 3) Add new field company to all the documents. 
      <br> 4) Delete the documents where Gender = ‘M’. 
      <br> 5) Add 5 more similar documents in a collection and find all female users who belong to either India or US.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a document named scientist with the following fields:
      <br> {First_Name: , Last_Name: , Contribution: , Awarded: , Date_of_Birth: , Year: , Country: }
      <br> The document keeps information about the scientist who has contributed in various fields like Artificial Intelligence, Data Science, etc. The scientist may have contributed in more than one field and may have received more than one award for their contribution in various fields.
      <br> 2) Insert at least 10 documents in a collection.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) List names of all scientists whose last name starts with N.
      <br> 2) List all scientists who were born after 1/1/1960.
      <br> 3) List scientists that received an award in the year 2000.
      <br> 4) List all scientists who have received the “Turing Machine Award”.
      <br> 5) List all scientists who have contributed in 4 fields.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create documents in Inventory with the following fields:
      <br> {Item_Name: , Status: , Tags: , Qty: }
      <br> 2) Insert at least 10 documents in a collection with suitable values. Verify the created documents.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) List all items from the inventory where the status equals "D" and qty is greater than 30.
      <br> 2) List all items which have 3 tags.
      <br> 3) List all items having status equal to “A” or having quantity less than 30 and height of the product should be greater than 10.
      <br> 4) Delete the documents where status = ‘C’.
      <br> 5) Find all documents that keep item “Planner” and have an in-stock quantity less than 20.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create documents containing transaction information as:
      <br> {Transaction_id: , Customer_Name: , Payment_Mode: , Amount: , Date: }
      <br> in which the payment was done – Cash, Credit Card, or Debit Card in a collection. Verify your created collection and documents by using a proper command.
      <br> 2) Insert at least 10 documents in a collection.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Find all transactions made by the user “Vikas”.
      <br> 2) Find all the transactions made using a debit card.
      <br> 3) Find transaction ID and total amount of purchases made using a credit card.
      <br> 4) Find the total payment for each payment type.
      <br> 5) List all transactions made by customers on a particular date.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create documents for Online Mobile Shopping information in a collection as follows:
      <br> {CustomerName: , Model: , Brand: , Price: , RAM_Size: , Internal_Memory: , Ratings_by_Customer: }
      <br> Verify your created collection and documents by using a proper command.
      <br> 2) Insert at least 10 documents in a collection.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) List the mobiles having RAM and ROM as 3GB and 32GB.
      <br> 2) List the customers who bought Samsung J6.
      <br> 3) List the names of the distinct brands purchased by customers.
      <br> 4) Display the name of the brand with the highest rating.
      <br> 5) List all the customers in ascending order who bought the iPhone 7 Plus.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a collection called “marketing” which stores data about a marketing campaign of a retail business. A document in this collection includes the following pieces of information:
      <br> {_id: , Age: , Gender: , OwnHome: , Married: , Location: , Salary: , Children: , History: "High/Low", Catalogs: , AmountSpent: }
      <br> Verify your created collection and document by using the proper command.
      <br> 2) Insert at least 10 documents in a collection and verify the inserted documents.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display the first 3 documents in the collection.
      <br> 2) Find out the average spent amount by customers who received more than 10 catalogs.
      <br> 3) Find the average spent amount by customers who received more than 10 catalogs for different age groups separately.
      <br> 4) Calculate the average salary and the total spent amount for customers who have at least 1 child.
      <br> 5) Display the salary and spent amount fields of the first 5 documents.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create two documents named emp1 and emp2 as follows:
      <br> emp1 = {Empid: , EmpName: , Department: , Salary: }
      <br> emp2 = {Empid: , Age: , Address: }
      <br> Add both these documents (emp1 and emp2) to the Employee collection in the subsequent order.
      <br> 2) Verify your created collection and database by using the proper command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display all documents in the Employee collection.
      <br> 2) Update the department to Marketing for all employees having a salary greater than 20000 and less than 30000.
      <br> 3) Add a new field company to all the documents.
      <br> 4) Delete the documents where Age > 60.
      <br> 5) Add 5 more similar documents to a collection and find all employees who live in Pune and are younger than 25.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a document for a grocery store as follows:
      <br> {item_id: , Batch_no: , Item_name: , Price: , Weight: , Category: , items_in_stock: }
      <br> in the “departmental_store” collection.
      <br> 2) Insert at least 10 documents in a collection with suitable values. Verify the created documents.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display all documents in the “departmental_store” collection with batch no B1001.
      <br> 2) Update the price of items for items having batch B1002.
      <br> 3) Display all items that come in the grain category.
      <br> 4) Delete the items where stock is 0.
      <br> 5) Sort all items by their Batch_nos.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a database named ‘College’. Create a collection named ‘Commerce’ in it. This collection should contain a document. Inside this document, we have a field named ‘Teacher_id’, ‘Teacher_Name’, ‘Address’, ‘Salary’. Each document contains another document with three fields (Specialization, Qualification, Experience) with their one or more values.
      <br> Verify your created collection and database by using the proper command.
      <br> 2) Insert at least 10 documents in a collection with suitable values.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display all documents in the created collection.
      <br> 2) Display all teachers having more than 10 years of experience.
      <br> 3) Add a new field College_Name to all documents.
      <br> 4) List all teachers having specialization in the ‘Accounting’ subject.
      <br> 5) Increment the salary of all teachers having more than 10 years of experience by Rs.5000.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a database named ‘TV Network’ containing a collection of products with multiple documents having fields {“product_id” : , "product_name": , "company": , "type": , "price": , "warranty_years": , "available": "true"}
      <br> 2) Insert at least 10 documents in a collection with suitable values. Verify your created collection and database by using the proper command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Check if the cursor object has more documents to return or not.
      <br> 2) Return the next document in a cursor.
      <br> 3) Insert a new document with the following details: product_name = “Tata Sky", "type" : "tv", "monthly_price" : 250, "term_years" : 2, "cancel_penalty" : 25, "sales_tax" : "true", "additional_tariffs" : [{ "kind" : "federal tariff", "amount" : { "percent_of_service" : 0.06 } }, { "kind" : "misc. tariff", "amount" : 2.25 }]
      <br> 4) Sort all the documents present in the products collection in descending order.
      <br> 5) Find how many documents are present in the collection.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a collection named Programmer with documents containing fields
      <br> {Programmer_name: , Join_year: , Languages:[……, …….., ………], Programmer_details: {age: , "Address":[…., ……..]}}.
      <br> 2) Insert at least 10 documents in the collection with suitable values. Verify your created collection and database by using the proper command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Append a single value, i.e., “C” to an array field, i.e., Language field in the document whose Programmer_name is “Neha”.
      <br> 2) Remove the first element of the Language field in the document whose Programmer_name is “Rahul”.
      <br> 3) Remove the last element of the Language field in the document whose Programmer_name is “Rahul”.
      <br> 4) Add “PHP” to the Language field for the programmer Radha.
      <br> 5) Delete the first document containing programmer name ‘Radha’.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create documents with the following data in a collection:
      <br> { _id: , vidio_title: , description: , YouTuber Name: , url: , tags: ['mongodb', 'database', 'NoSQL'], likes: 100 }
      <br> 2) Insert at least 7 documents in the collection with suitable values. Verify your created collection and database by using the proper command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display a list stating how many videos are uploaded by each YouTuber.
      <br> 2) Get the maximum likes of the corresponding values from all documents in the collection for each YouTuber.
      <br> 3) Calculate the average likes of all given values from all documents in the collection for each YouTuber.
      <br> 4) Find the total likes received by each YouTuber.
      <br> 5) Calculate the total likes received by YouTubers except for the “Mongo DB” video.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a collection to embed the 3 branch documents inside the Bank document like:
      <br> {“Bank_name": , "Contact": , "Address": , "branch": , “city”: }
      <br> where the branch should contain fields like branch_id, branch_name, and branch_address.
      <br> 2) Insert at least 8 documents in the collection with suitable values. Verify your created collection and database by using the proper command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Display all branches in each city.
      <br> 2) Update the address of the branch in city Pune.
      <br> 3) Add a new branch in the city Baramati.
      <br> 4) Delete one branch in city Pune.
      <br> 5) Count the total branches in each city.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a collection named "Customer" which contains documents with the following structure:
      <br> {"_id" : , "firstname" : , "lastname" : , "email" : , "password" : , "last_login" : , "address" : {"country": , "street" : , "zip" : }}
      <br> 2) Insert at least 8 documents in the collection with suitable values. Verify your created collection and database by using the proper command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Replace a single existing document entirely with other data.
      <br> 2) Replace the document for the current firstname field that you have taken in your document.
      <br> 3) Insert some other similar documents in it.
      <br> 4) Find the first document where the firstname field is equal to "Rahul" and update (set) the lastname field to "Patil".
      <br> 5) Update multiple fields of a document.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: `Solve the following:
      <br> 1) Create a collection named "employee" in your database with the following type of documents:
      <br> {"_id": 1, "emp_name": { name: , surname: }, "age": , "city": , "salary": }
      <br> 2) Insert at least 8 documents in the collection with suitable values. Verify your created collection and database by using the proper command.`,
            marks: 15,
          },
          {
            questionId: 2,
            text: `Solve the Following Queries:
      <br> 1) Define a single field index on the age field and also drop the created index.
      <br> 2) Define a multiple field index on the age field for descending and the city field for ascending order.
      <br> 3) Write MongoDB queries that will use the index both for retrieving the documents and for sorting.
      <br> 4) Retrieve all the indexes in the collection.
      <br> 5) Find the total salary spent on employees.`,
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
