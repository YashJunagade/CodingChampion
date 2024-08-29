const dotnet = [
  {
    subject: 'Dot Net Framework',
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.Net program to display the numbers continuously in a TextBox by clicking on a Button.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.Net program to accept the details of Employee (ENO, EName, Salary) and store them into the database and display them in a GridView control.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.Net program to move the text “Pune University” continuously from Left to Right and Vice Versa.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a C#.Net program to create a base class Department and derived classes Sales and Human Resource. Accept the details of both departments and display them in proper format.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C# .Net to create a function for the sum of two numbers.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to create a teacher table (Tid, TName, subject). Insert the records (Max: 5). Search for a teacher whose name is “Seeta” and display the result.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: 'Design a VB.NET form to pick a date from DateTimePicker Control and display day, month, and year in separate text boxes.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a web application to insert 3 records into a SQL database table with the following fields: (DeptId, DeptName, EmpName, Salary). Update the salary for any one employee, increasing it by 15% of the present salary. Perform a delete operation on one row of the database table.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.NET program to accept a character from the keyboard and check whether it is a vowel or consonant. Also, display the case of that character.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Design a web application form in ASP.Net with fields for loan amount, interest rate, and duration. Calculate the simple interest and perform necessary validations, ensuring data has been entered for each field and checking for non-numeric values. Use suitable web-form controls.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: 'Write an ASP.Net program that displays the names of some flowers in two columns. Bind a label to the RadioButtonList so that when the user selects an option from the list and clicks on a button, the label displays the flower selected by the user.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to create a movie table (Mv_Name, Release_year, Director). Insert the records (Max: 5). Delete the records of movies whose release year is 2022 and display an appropriate message in a message box.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: 'Write an ASP.Net program to accept a number from the user in a textbox control and throw an exception if the number is not a perfect number. Assume suitable controls on the web form.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to create a table student (Roll No, SName, Class, City). Insert the records (Max: 5). Update the city of students to ‘Pune’ whose city is ‘Mumbai’ and display updated records in a GridView.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: 'List of employees is available in a listbox. Write an ASP.Net application to add selected or all records from the listbox to a TextBox (assume multi-line property of TextBox is true).',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a C#.Net program for multiplication of matrices.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: 'Write a Menu-driven program in C#.Net to perform the following functionalities: Addition, Multiplication, Subtraction, Division.',
            marks: 15,
          },
          {
            questionId: 2,
            text: "Create an ASP.Net application that allows the user to enter a number in the textbox named 'getnum'. Check whether the number in the textbox 'getnum' is a palindrome or not. Print the message accordingly in the label control named 'lbldisplay' when the user clicks on the button 'check'.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: 'Write a program that demonstrates the use of primitive data types in C#. The program should also support the type conversion of Integer to String and String to Integer.',
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write an ASP.Net program to connect to the master database in SQL Server in the Page_Load event. When the connection is established, the message 'Connection has been established' should be displayed in a label in the form.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: 'Write an ASP.Net program that gets user input such as the user name, mode of payment, and appropriate credit card. After the user enters the appropriate values, the Validation button validates the values entered.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a C# program to make a class named Fruit with a data member to calculate the number of fruits in a basket. Create two other classes named Apples and Mangoes to calculate the number of apples and mangoes in the basket. Display the total number of fruits in the basket.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: 'Write an ASP.Net program that displays a button in green color and it should change to yellow when the mouse moves over it.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to create a player table (PID, PName, Game, no_of_matches). Insert records and update the number of matches of ‘Rohit Sharma’ and display the result in a DataGridView.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.NET program for blinking an image.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a C# program to accept and display ‘n’ student’s details such as Roll No, Name, and marks in three subjects, using a class. Display the percentage of each student.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C#.Net to find the sum of all elements in the array.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a C#.Net program to define a class Person having members – name and address. Create a subclass called Employee with members – staff_id and salary. Create ‘n’ objects of the Employee class and display all the details of the Employee.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: 'Write an ASP.Net application to create a user control that contains a list of colors. Add a button to the Web Form which, when clicked, changes the color of the form to the color selected from the list.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a C#.Net program to accept and display ‘n’ customer’s details such as customer_no, Name, address, item_no, quantity, and price. Display the total price of all items.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: "Write an ASP.Net program to create a user control that receives the user name and password from the user and validates them. If the user name is 'DYP' and the password is 'Pimpri', then the user is authorized, otherwise not.",
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Define a class Supplier with fields – sid, name, address, pincode. Write a C#.Net program to accept the details of ‘n’ suppliers and display them.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: 'Write a C#.Net application to display the vowels from a given string.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to accept the details of a product (PID, PName, expiry_date, price). Store it in the database and display it on a DataGridView.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.NET program to accept a number from the user through an input box and display its multiplication table in a list box.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write an ASP.Net program containing the following controls: ListBox, Button, Image, Label. The ListBox is used to list items available in a store. When the user clicks on an item in the ListBox, its image is displayed in the Image control. When the user clicks the Button, the cost of the selected item is displayed in the Label control.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.NET program to check whether the entered string is a palindrome or not.',
            marks: 15,
          },
          {
            questionId: 2,
            text: "Create a VB.NET application that allows users to rate the book 'ASP.NET with C#' by Wrox publication. Provide three choices: i) Good ii) Satisfactory iii) Bad. After the user votes, present the result in percentage using labels next to the choices.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.NET program to generate a Sample TreeView control.',
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a web application in ASP.Net that generates the 'IndexOutOfRange' exception when a button is clicked. Instead of displaying the exception, redirect the user to a custom error page. All of this should be done with tracing for the page being enabled.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.NET program to accept sentences in a text box and count the number of words. Display the count in a message box.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write an ASP.Net application for the following:\n1. Create a table EMP (eno, ename, edesignation, salary, joindate)\n2. Insert a record.\n3. Update a record.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C# to create a function to swap the values of two integers.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to design the following form; it contains three menus: Color (Red, Blue, Green), Window (Maximize, Minimize, Restore), and Exit. On selection of any menu or submenu, the result should affect the form control (for example, if the user selects Red color from the Color menu, the back color of the form should change to Red, and if the user selects Maximize from the Window menu, the form should be maximized).',
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C# to create a function to display the n terms of the Fibonacci sequence.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create an ASP.Net application that accepts name, password, age, email ID, and user ID. All the information entries are compulsory. The password should be reconfirmed. Age should be within 21 to 30. Email ID should be valid. User ID should have at least one capital letter, one digit, and its length should be between 7 and 20 characters.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C#.Net to create a function to check whether a number is prime or not.',
            marks: 15,
          },
          {
            questionId: 2,
            text: "Write a VB.NET program to create an Author table (aid, aname, book_name). Insert up to 5 records. Delete the record of the author who has written 'VB.NET book' and display the remaining records on the DataGridView. (Use MS Access to create the database.)",
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C#.Net to create a function to calculate the sum of the individual digits of a given number.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a Web Application in ASP.Net to display all the EmpName and DeptId of the employees from the database using SQL source control and bind it to a GridView. Database fields are (DeptId, DeptName, EmpName, Salary).',
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C#.Net to create a recursive function to find the factorial of a given number.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write an ASP.Net program to create a Login Module which adds Username and Password to the database. The Username in the database should be a primary key.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C#.Net to find the length of a string.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Create a web application in ASP.Net which may have a textbox. The user must type some data into it, with a limit of 255 characters. After exceeding the limit, the last word should not be typed, and the color of the textbox should change to red.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C#.Net to read n numbers in an array and display them in reverse order.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to create a table Patient (PID, PName, Contact No, Disease). Insert five records into the table and display an appropriate message in a message box.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: 'Write a program in C#.Net to separate the individual characters from a string.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to accept the details of a customer (CName, Contact No, Email_id). Store it in the database with proper validation and display an appropriate message using a message box.',
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: 'Write a VB.NET program to design the following screen: accept the details from the user. Clicking on the Submit button should calculate and display the Net Salary into a textbox. Display a message box informing the Name and Net Salary of the employee.',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'Write a VB.NET program to accept the details of a Supplier (SupId, SupName, Phone No, Address), store it in the database, and display it.',
            marks: 25,
          },
        ],
      },
    ],
    language: 'csharp',
  },
];
