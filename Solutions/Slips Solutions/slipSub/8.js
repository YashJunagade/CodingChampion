export const Cpp = {
  subject: 'CPP',
  slips: [
    {
      slipId: 1,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program to check the maximum and minimum of two integer numbers. (Use Inline function and Conditional operator)`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Create a C++ class MyFile with data members file pointer and filename. Write necessary member functions to accept and display File. Overload the following operators:<br>
          - Operator Example: F3=F1+F2<br>
          Purpose: Concatenate the contents of file F1 and F2 in F3.<br>
          - Operator Example: IF3<br>
          Purpose: Changes the case of alternate characters of file F3.`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 2,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program to find the volume of a cylinder, cone, and sphere. (Use function overloading).`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Write a C++ program to create a class Movie with data members M_Name, Release_Year, Director_Name, and Budget. (Use File Handling) Write necessary member functions to:<br>
            1. Accept details for ‘n’ Movies from user and store them in a file “Movie.txt”.<br>
            ii. Display Movie details from a file.<br>
            iii. Count the number of objects stored in a file.`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 3,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program to interchange values of two integer numbers. (Use call by reference).`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Write a C++ program to accept ‘n’ numbers from user through Command Line Argument.<br>Store all Even and Odd numbers in file “Even.txt” and “Odd.txt” respectively.`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 4,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program to accept Worker information Worker_Name, No_of Hours_worked, Pay_Rate and Salary. Write necessary functions to calculate and display the salary of Worker. (Use default value for Pay_Rate).`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Write a C++ program to create a base class Employee (Emp-code, name, salary). Derive two classes as Fulltime (daily_wages, number_of_days) and Parttime (number_of_working_hours, hourly_wages).<br>Write a menu-driven program to perform the following functions:<br>1. Accept the details of ‘n’ employees and calculate the salary.<br>2. Display the details of ‘n’ employees.<br>3. Display the details of the employee having the maximum salary for both types of employees.`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 5,
      questions: [
        {
          questionId: 1,
          text: `a) Consider the following C++ class:<br>class Point<br>{<br>int x, y;<br>public:<br>void setpoint(int, int); // To set the values of x and y coordinate.<br>void showpoint(); // To display coordinate of a point P in format (x, y).<br>};`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Create a C++ base class Shape. Derive three different classes Circle, Sphere, and Cylinder from the Shape class.<br>Write a C++ program to calculate the area of Circle, Sphere, and Cylinder. (Use pure virtual function).`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 6,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program to create two Classes Square and Rectangle. Compare the area of both the shapes using a friend function. Accept appropriate data members for both the classes.`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Create a C++ class:<br>class Matrix<br>{<br>int rows, cols;<br>public:<br>// member functions<br>};<br>Write necessary member functions to:<br>i. Accept Matrix elements.<br>ii. Display Matrix elements.<br>iii. Calculate transpose of a Matrix.<br>(Use constructor and destructor).`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 7,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program using a class with data member char str[50] and function replace (char ch1, char ch2). Every occurrence of ch1 in str should be replaced with ch2 and return the number of replacements it makes (use ch2 as Default Argument).`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Create a C++ class Vector with data members size & pointer to integer. The size of the vector varies, so the memory should be allocated dynamically.<br>Perform the following operations:<br>i. Accept a vector.<br>ii. Display a vector in the format (10, 20, 30,....)<br>iii. Calculate the union of two vectors.<br>(Use parameterized constructor & copy constructor).`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 8,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program to create a class Number, which contains a static data member ‘cnt’ and a member function ‘Display()’. Display() should print the number of times the display operation is performed irrespective of the object responsible for calling Display().`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Create a C++ class Person with data members Person_name, Mobile_number, Age, City. Write necessary member functions for the following:<br>i. Search the mobile number of a given person.<br>ii. Search the person name of a given mobile number.<br>iii. Search all person details of a given city.<br>(Use function overloading).`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 9,
      questions: [
        {
          questionId: 1,
          text: `a) Consider the following C++ class:<br>class Person<br>{<br>char Name[20];<br>char Addr[30];<br>float Salary;<br>float tax_amount;<br>public:<br>// member functions<br>};<br>Calculate tax amount by checking salary of a person:<br>For salary <= 20000 tax rate = 0<br>For salary > 20000 (<= 40000) tax rate = 5% of salary.<br>For salary > 40000 tax rate = 10% of salary.`,
          marks: 15,
        },
      ],
    },
    {
      slipId: 10,
      questions: [
        {
          questionId: 1,
          text: `a) Write a C++ program to create a class Account with data members Acc_number, Acc_type, and Balance.<br>Write member functions to accept and display ‘n’ account details. (Use dynamic memory allocation).`,
          marks: 15,
        },
        {
          questionId: 2,
          text: `b) Create a C++ class City with data members City_code, City_name, and population. Write necessary member functions for the following:<br>i. Accept details of n cities.<br>ii. Display details of n cities in ascending order of population.<br>iii. Display details of a particular city.<br>(Use Array of objects and to display city information use manipulators).`,
          marks: 25,
        },
      ],
    },
    {
      slipId: 11,
      questions: [
        {
          questionId: 1,
          text: 'a) Create a C++ class MyArray, which contains a single dimensional integer array of a given size. Write a member function to display the sum of given array elements. (Use Dynamic Constructor and Destructor).',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a base class Student with data members Roll No, Name. Derives two classes from it, class Theory with data members M1, M2, M3, M4 and class Practical with data members P1, P2. Class Result (Total Marks, Percentage, Grade) inherits both Theory and Practical classes. (Use concept of Virtual Base Class and protected access specifiers)<br>Write a C++ menu driven program to perform the following functions:<br>i. Accept Student Information<br>ii. Display Student Information<br>iii. Calculate Total marks, Percentage and Grade.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 12,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to create a class Date with data members day, month, and year. Use default and parameterized constructor to initialize date and display date in dd-Mon-yyyy format. (Example: Input: 04-01-2021 Output: 04-Jan-2021).',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class Weight with data members kilogram, gram. Write a C++ program using operator overloading to perform the following functions:<br>i. To accept weight.<br>ii. To display weight in kilogram and gram format.<br>iii. Overload += operator to add two weights.<br>iv. Overload == operator to check equality of two weights.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 13,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to create a class Product with data members Product_id, Product_Name, Qty, Price. Write member functions to accept and display Product information also display the number of objects created for Product class. (Use Static data member and Static member function).',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class Cuboid with data members length, breadth, and height. Write necessary member functions for the following:<br>i. void setvalues(float, float, float) to set values of data members.<br>ii. void getvalues() to display values of data members.<br>iii. float volume() to calculate and return the volume of cuboid.<br>iv. float surface_area() to calculate and return the surface area of cuboid.<br>(Use Inline function).',
          marks: 25,
        },
      ],
    },
    {
      slipId: 14,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to accept the radius of a Circle. Calculate and display the diameter, circumference as well as area of a Circle. (Use Inline function).',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class MyString with data members a character pointer and str_length. (Use new and delete operator). Write a C++ program using operator overloading to perform the following operations:<br>i. To reverse the case of each alphabet from a given string.<br>ii. To compare the length of two strings.<br>iii. To add constant ‘n’ to each alphabet of a string.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 15,
      questions: [
        {
          questionId: 1,
          text: 'a) Create a C++ class Fraction with data members Numerator and Denominator. Write a C++ program to calculate and display the sum of two fractions. (Use Constructor).',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Write a C++ class Seller (S_Name, Product_name, Sales_Quantity, Target_Quantity, Month, Commission). Each salesman deals with a separate product and is assigned a target for a month. At the end of the month, his monthly sales is compared with target and commission is calculated as follows:<br> If Sales_Quantity > Target_Quantity then commission is 25% of extra sales made + 10% of target.<br> If Sales_Quantity = Target_Quantity then commission is 10% of target.<br> Otherwise commission is zero.<br>Display salesman information along with commission obtained. (Use array of objects).',
          marks: 25,
        },
      ],
    },
    {
      slipId: 16,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to create a class Machine with data members Machine_Id, Machine_Name, Price. Create and initialize all values of Machine object by using parameterized constructor and copy constructor. Display details of Machine using setw() and setprecision().',
          marks: 15,
        },
        {
          questionId: 2,
          text: "b) Create a C++ class MyMatrix and Write necessary member functions for the following:<br>i. To accept a Matrix.<br>ii. To display a Matrix.<br>iii. Overload unary ‘-’ operator to calculate transpose of a Matrix.<br>iv. Overload unary '++’ operator to increment matrix elements by 1.",
          marks: 25,
        },
      ],
    },
    {
      slipId: 17,
      questions: [
        {
          questionId: 1,
          text: 'a) Create a C++ class MyMatrix. Write a C++ program to accept and display a Matrix. Overload binary ‘-’ operator to calculate the subtraction of two matrices.',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Design two base classes Student (S_id, Name, Class) and Competition (C_id, C_Name). Derive a class Stud_Comp (Rank) from it. Write a menu driven program to perform the following functions:<br>i. Accept information.<br>ii. Display information.<br>iii. Display Student Details in the ascending order of Rank of a specified competition.<br>(Use array of objects).',
          marks: 25,
        },
      ],
    },
    {
      slipId: 18,
      questions: [
        {
          questionId: 1,
          text: "a) Create a C++ class Student with data members Roll_no, S_Name, Class, Percentage. Accept two students' information and display the information of the student having the maximum percentage. (Use this pointer).",
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class MyArray with data members:<br>- int *arr<br>- int size<br>Write necessary member functions to accept and display Array elements. Overload the following operators:<br>Operator Example Purpose<br>- (Unary) -Al Reverse array elements.<br>+(Binary) A2=Al+n Add constant n to all array elements.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 19,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to create a class Distance with data members meter and centimeter to represent distance. Write a function Larger() to return the larger of two distances. (Use this pointer).',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ base class Media. Derive two different classes from it, class NewsPaper with data members N_Name, N_Editor, N_Price, No_of_Pages and class Magazine with data members M_Name, M_Editor, M_Price. Write a C++ program to perform the following functions:<br>i. Accept and Display information of all Media.<br>ii. Display the total cost of all Media items.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 20,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to create a class Currency with data members Dollar, Cent. Write a member function to add two currency amounts and display the result in Dollar and Cent format.',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a base class Rectangle with data members Length and Width. Derive two classes from it, Square (Side) and Circle (Radius). Write a program to compute and display area and perimeter/circumference of Rectangle, Square and Circle.<br>Use pure virtual functions to achieve this. (Use virtual functions and Abstract Class).',
          marks: 25,
        },
      ],
    },
    {
      slipId: 21,
      questions: [
        {
          questionId: 1,
          text: 'a) Create a C++ class Employee with data members Emp_id, Emp_Name, Company_Name and Salary.<br>Write member functions to accept and display Employee information. Design User defined Manipulator to print Salary.<br>(For Salary set right justification, maximum width to 7 and fill remaining spaces with ‘*’).',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class for a two dimensional points. Write necessary member functions to accept & display the point object. Overload the following operators:<br>Operator Example Purpose<br>+ (Binary) P3=P1+P2 Adds coordinates of point P1 and P2.<br>- (Unary) -P1 Negates coordinates of point P1.<br>*(Binary) P2=P1*n Multiply coordinates of point P1 by constant ‘n’.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 22,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to define two function templates for calculating the square and cube of given numbers with different data types.',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Write a C++ program to overload ‘display_str’ function as follows:<br>i. void display_str(char *) - Display a string in double quotes.<br>ii. void display_str(int n, char *) - Display first n characters from a given string.<br>iii. void display_str(int m, int n, char *) - Display substring of a given string from position m to n.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 23,
      questions: [
        {
          questionId: 1,
          text: 'a) Create a C++ class MyString with data member character pointer. Write a C++ program to accept and display a string. Overload “+” operator to concatenate two strings.',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class ComplexNumber with data members real and imaginary. Write necessary functions:<br>i. To accept Complex Number using constructor.<br>ii. To display Complex Number in format [x + iy].<br>iii. To add two Complex Numbers by using friend function.',
          marks: 25,
        },
      ],
    },
    {
      slipId: 24,
      questions: [
        {
          questionId: 1,
          text: 'a) Create a C++ class FixDeposit with data members FD_No, Cust Name, FD_Amt, Interest rate, Maturity amt, Number_of months. Create and Initialize all values of FixDeposit object by using parameterized constructor with default value for interest rate. Calculate maturity amt using interest rate and display all the details.',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class InvoiceBill with data members Order_id, O_Date, Customer Name, No_of Products, Prod_Name[], Quantity[], Prod_Price[]. A Customer can buy ‘n’ products. Accept quantity for each product. Generate and Display the bill using appropriate Manipulators. (Use new operator)',
          marks: 25,
        },
      ],
    },

    {
      slipId: 25,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to calculate mean, mode and median of three integer numbers. (Use Inline function)',
          marks: 15,
        },
        {
          questionId: 2,
          text: "b) Write a C++ program to read the contents of a 'SampleData.txt' file. Create 'Upper.txt' file to store uppercase characters, 'Lower.txt' file to store lowercase characters, 'Digit.txt' file to store digits and 'Other.txt' file to store remaining characters of a given file.",
          marks: 25,
        },
      ],
    },

    {
      slipId: 26,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to find average of 3 integer numbers and average of 3 float numbers. (Use function overloading)',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class Time with data members hours, minutes, seconds. Write a C++ program using operator overloading to perform the following:<br>i. = To check whether two Times are equal or not.<br>ii. >> To accept the time.<br>iii. << To display the time.',
          marks: 25,
        },
      ],
    },

    {
      slipId: 27,
      questions: [
        {
          questionId: 1,
          text: 'a) Create a C++ class College, with data members College_Id, College Name, Establishment_year, University_Name. Overload operators >> and << to accept and display College information.',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a base class Travels with data members T_no, Company_Name. Derive a class Route with data members Route_id, Source, and Destination from Travels class. Also derive a class Reservation with data members Number_of_Seats, Travels_Class, Fare, and Travel_Date from Route.<br>Write a C++ program to perform following necessary member functions:<br>i. Accept details of ‘n’ reservations.<br>ii. Display details of all reservations.<br>iii. Display reservation details of a specified Date.',
          marks: 25,
        },
      ],
    },

    {
      slipId: 28,
      questions: [
        {
          questionId: 1,
          text: 'a) Write a C++ program to read array of ‘n’ integers from user and display it in reverse order. (Use Dynamic memory allocation)',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class Employee with data members Emp_Id, Emp_Name, Mobile_No, Salary. Write necessary member functions for the following:<br>i. Accept details of n employees<br>ii. Display employee details in descending order of their salary.<br>iii. Display details of a particular employee.<br>(Use Array of object and Use appropriate manipulators)',
          marks: 25,
        },
      ],
    },

    {
      slipId: 29,
      questions: [
        {
          questionId: 1,
          text: 'a) Write C++ program to create a class E_Bill with data members Cust_Name, Meter_ID, No_of Units and Total_Charges. Write member functions to accept and display customer information by calculating charges. (Rules to calculate electricity board charges):<br>- For first 100 units: Rs. 1 per unit<br>- For next 200 units: Rs. 2 per unit<br>- Beyond 300 units: Rs. 5 per unit<br>All users are charged a minimum of Rs.150. If the total charge is more than Rs.250.00 then an additional charge of 15% is added.',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class VisitingStaff with data members Name, No_of Subjects, Name_of Subjects[], Working_hours, Total_Salary. (Number of subjects varies for a Staff). Write a parameterized constructor to initialize the data members and create an array for Name of Subjects dynamically. Display Visiting Staff details by calculating salary. (Assume remuneration Rs. 300 per working hour)',
          marks: 25,
        },
      ],
    },

    {
      slipId: 30,
      questions: [
        {
          questionId: 1,
          text: 'a) Write C++ program to create two classes Integer Array and Float Array with an array as a data member. Write necessary member functions to accept and display array elements of both the classes. Find and display average of both the arrays. (Use Friend function)',
          marks: 15,
        },
        {
          questionId: 2,
          text: 'b) Create a C++ class Marksheet with data members Seat_No, Student_Name, Class, Subject_Name[], Int_Marks[], Ext_Marks[], Total[], Grand_Total, Percentage, Grade. Write member function to accept Student information for 5 subjects. Calculate Total, Grand_Total, Percentage, Grade and use setw(), setprecision() and setfill() to display Marksheet.',
          marks: 25,
        },
      ],
    },
  ],
  language: 'cpp',
}
