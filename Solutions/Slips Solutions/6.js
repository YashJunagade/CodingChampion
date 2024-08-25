const php = [
  {
    subject: "Php",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept a string. Write a function to count the total number of vowels (a,e,i,o,u) from the string. Show the occurrences of each vowel from the string. Check whether the given string is a palindrome or not, without using built-in functions. (Use radio buttons and the concept of function. Use ‘include’ construct or require statement.)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept two strings from the user. Find the first occurrence and the last occurrence of the small string in the large string. Also count the total number of occurrences of the small string in the large string. Provide a text box to accept a string, which will replace the small string in the large string. (Use built-in functions)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept two numbers from the user. Give options to choose the arithmetic operation (use radio buttons). Display the result on the next form. (Use the concept of function and default parameters. Use ‘include’ construct or require stmt)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept two strings from the user. Find whether the small string appears at the start of the large string. Provide a text box to accept the string that will replace all occurrences of small string present in the large string. Also split the large string into separate words. (Use regular expressions)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept the details of 5 different items, such as item code, item name, units sold, rate. Display the bill in the tabular format. Use only 4 text boxes. (Hint : Use of explode function.)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following:<br>
             Design a form to accept two strings. Compare the two strings using both methods (= = operator & strcmp function).<br>
             Append the second string to the first string.<br>
             Accept the position from the user; from where the characters from the first string are reversed. (Use radio buttons)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: `Write a menu driven PHP program to perform the following operations on an associative array:<br>
             i. Display the elements of an array along with the keys.<br>
             ii. Display the size of an array.<br>
             iii. Delete an element from an array from the given index.<br>
             iv. Reverse the order of each element’s key-value pair. [Hint: use array_flip()]<br>
             v. Traverse the elements in an array in random order. [Hint: use shuffle()]`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: `Write a menu driven PHP program to perform the following operations on associative arrays:<br>
             a) Sort the array by values (changing the keys) in ascending, descending order.<br>
             b) Also sort the array by values without changing the keys.<br>
             c) Filter the odd elements from an array.<br>
             d) Sort the different arrays at a glance using single function.<br>
             e) Merge the given arrays.<br>
             f) Find the Union, intersection & set difference of two arrays.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: `Write PHP script to define an interface which has methods area(), volume(). Define constant PI.<br>
             Create a class cylinder which implements this interface and calculate area and volume.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: `Write class declarations and member function definitions for an employee (code, name, designation). Design derived classes as emp_account (account_no, joining_date) from employee and emp_sal (basic_pay, earnings, deduction) from emp_account.<br>
             Write a menu driven PHP program:<br>
             a) to build a master table<br>
             b) to sort all entries<br>
             c) to search an entry<br>
             d) Display salary.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: `Derive a class square from class Rectangle. Create one more class circle.<br>
             Create an interface with only one method called area(). Implement this interface in all the classes.<br>
             Include appropriate data members and constructors in all classes.<br>
             Write a PHP program to accept details of a square, circle and rectangle and display the area.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: `Write PHP Script to create a class account (accno, cust_name).<br>
             Derive two classes from account as saving_acc (balance, min_amount) and current_acc (balance, min_amount).<br>
             Display a menu:<br>
             a) Saving Account<br>
             b) Current Account<br>
             For each of this, display a menu with the following options:<br>
             1. Create account<br>
             2. Deposit<br>
             3. Withdrawal`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: `Implement calculator to convert distances between (both ways) miles and kilometres.<br>
             One mile is about 1.609 kilometres.<br>
             User interface (distance.html) has one text-input, two radio-buttons, submit and reset buttons.<br>
             Values are posted to PHP-script (distance.php) which calculates the conversions according to user input.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: `Using regular expressions check for the validity of entered email-id.<br>
             The @ symbol should not appear more than once.<br>
             The dot (.) can appear at the most once before @ and at the most twice or at least once after @ symbol.<br>
             The substring before @ should not begin with a digit or underscore or dot or @ or any other special character.<br>
             (Use explode and ereg function.)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: `Write PHP program to create input form for Grocery that displays List of grocery items with checkboxes.<br>
             Create a bill according to list of items selected after clicking submit button.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP program that accepts customer name, consumer number, and number of electricity units consumed from an input form and prints the electricity bill from the following data:<br>
             ● For the first 50 units – Rs. 3.50/unit<br>
             ● For the next 100 units – Rs. 4.00/unit<br>
             ● For the next 100 units – Rs. 5.20/unit<br>
             ● For units above 250 – Rs. 6.50/unit<br>
             ● Fixed meter and service charge – Rs. 150/-`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP program for course registration of a learner in an institute that accepts Name, Course to be admitted, Mobile number using input form validation such as Name should be only a string of characters, mobile number should contain digits with valid length, and so on. Provide feedback to the learner with registration details including registration number.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to create a login form with a username and password. Once the user logs in, the second form should be displayed to accept user details (name, city, phone number). If the user doesn’t enter information within a specified time limit, expire their session and give a warning.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to keep track of the number of times the web page has been accessed.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to change the preferences of your web page like font style, font size, font color, background color using cookies. Display selected settings on the next web page and actual implementation (with new settings) on the third web page.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to create a form to accept student information (name, class, address). Once the student information is accepted, accept marks in the next form (Phy, Bio, Chem, Maths, Marathi, English). Display the mark sheet for the student in the next form containing name, class, marks of the subjects, total, and percentage.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP program to create a shopping mall UI. User must be allowed to make purchases from two pages. Each page should have a page total. The third page should display a bill, which consists of a page total of whatever the purchase has been done and print the total. (Use HTTP session tracking).`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to create a form to accept customer information (name, address, phone number). Once the customer information is accepted, accept product information in the next form (Product name, qty, rate). Display the bill for the customer in the next form. The bill should contain the customer information and the information of the products entered.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to accept a username and password. If the username and password are correct within the first three attempts, then display the second form; otherwise, display an error message.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Emp (emp_no, emp_name, address, phone, salary)<br>
             Salary (emp_no, Basic, HR, TA, DA)<br>
             Dept (dept_no, dept_name, location)<br>
             Emp-Dept are related with a one-many relationship.<br>
             Create a RDB for the above and solve the following using the above database:<br>
             Write a PHP script which will print a salary statement for a specified emp_no with their details.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Doctor (doc_no, doc_name, address, city, area)<br>
             Hospital (hosp_no, hosp_name, hosp_city)<br>
             Doctor and Hospital are related with a many-many relationship.<br>
             Create an RDB in 3NF for the above and solve the following using the above database:<br>
             Write a PHP script which accepts hospital name and prints information about doctors visiting or working in that hospital in tabular format.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Project (pno integer, p_name char(30), ptype char(20), duration integer)<br>
             Employee (eno integer, e_name char(20), qualification char(15), joindate date)<br>
             The relationship between project and employee is many-many, with descriptive attributes as start_date (date), no_of_hours_worked (integer).<br>
             Using the above database, write a PHP script to accept a project name from the user and display information about employees working on the project.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Student (sno integer, s_name char(30), s_class char(10), s_addr char(50))<br>
             Teacher (tno integer, t_name char(20), qualification char(15), experience integer)<br>
             The relationship between student and teacher is many-many with a descriptive attribute subject.<br>
             Using the above database, write a PHP script to accept a teacher name from the user and display the names of students along with the subjects to whom the teacher is teaching.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Movie (movie_no, movie_name, release_year)<br>
             Actor (actor_no, name)<br>
             The relationship between movie and actor is many-many with an attribute rate in Rs.<br>
             Create an RDB in 3NF for the above and solve the following using the above database:<br>
             (Hint: Create an HTML form having three radio buttons)<br>
             a) Accept actor name and display the names of the movies in which he has acted.<br>
             b) Insert new movie information.<br>
             c) Update the release year of a movie. (Accept the movie name from the user)`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Student (Stud_id, name, class)<br>
             Competition (c_no, c_name, type)<br>
             The relationship between student and competition is many-many with attributes rank and year.<br>
             Create an RDB in 3NF for the above and solve the following:<br>
             Using the above database, write a PHP script to accept a competition name from the user and display information about students who have secured 1st rank in that competition.`,
            marks: 25,
          },
        ],
      },
    ],
    language: "php",
  },
];
