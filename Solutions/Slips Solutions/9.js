const advphp = [
  {
    subject: "Advance Php",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script to create a simple calculator that can accept two numbers and perform operations like add, subtract, multiplication. (Use the concept of Class)",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP script to create student.xml file which contains student roll no, name, address, college and course. Print students detail of specific course in tabular format after accepting course as input.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script to demonstrate the introspection for examining classes and objects. (use function get_declared_classes(), get_class_methods() and get_class_vars()).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a script to solve following questions (Use “Student.xml” file)<br>i) Create a DOM Document object and load this XML file.<br>ii) Get the output of this Document to the browser.<br>iii) Save this [.XML] document in another format i.e. in [.doc].<br>Write a XML Script to print the names of the student present in “Student.xml” file.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: "a) Write a Calculator class that can accept two values, then add, subtract, multiply them or divide them on request.<br>For example:<br>$calc = new Calculator(3, 4);<br>echo $calc->add(); // Displays “7”<br>echo $calc->multiply(); // Displays “12”",
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Write a script to create “cricket.xml” file with multiple elements as shown below:<br><CricketTeam><br><Team country="Australia"> <br><player>____</player><br><runs>_</runs><br><wicket>_</wicket><br></Team><br></CricketTeam><br>Write a script to add multiple elements in “cricket.xml” file of category, country="India".',
            marks: 25,
          },
        ],
      },

      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: "a) Define a class Employee having private members — id, name, department, salary. Define parameterized constructors. Create a subclass called “Manager” with private member bonus. Create 3 objects of the Manager class and display the details of the manager having the maximum total salary (salary + bonus).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create an XML file which should comprise the following:<br><cricket><br><player>Sachin Tendulkar</player><br><runs>2000</runs><br><wickets>100</wickets><br><noofnotout>20</noofnotout><br></cricket><br>For at least 5 players.<br>Write a PHP script to display the details of players who have scored more than 1200 runs and at least 50 wickets.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: "a) Create an abstract class Shape with methods area() and volume(). Derive three classes rectangle (length, breadth), Circle (radius) and Cylinder (radius, height). Calculate area and volume of all. (Use Method overriding).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create student table as follows:<br>Student(sno, sname, standard, Marks, per).<br>Write a PHP script to select the student name and print the student’s details of a particular standard.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script, which will return the following components of the URL (Using response header)<br>http://www.college.com/Science/CS.php<br>List of Components: scheme, host, path<br>Expected output:<br>Scheme: http<br>Host: www.college.com<br>Path: /Science/CS.php",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create an employee table as follows EMP (eno, ename, designation, salary). Write an Ajax program to select the employee's name and print the selected employee’s details.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: "a) Define an Interface which has methods gmtokg() & kgtogm(). Create a Class Convert which implements this interface & converts the value kg to gm and gm to kg.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Consider the following relational database:<br>Project (P_Group_No, Project_Title)<br>Student (Seat_no, Name, Class, P_Group_No)<br>Write an Ajax script to accept project title and display a list of students who are working on a particular project.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script to create class Shape and its subclasses Triangle, Square, Circle and display the area of the selected shape (use concept of inheritance).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write an Ajax script to get player details from an XML file when the user selects a player name. Create an XML file to store details of the player (name, country, wickets, and runs).",
            marks: 25,
          },
        ],
      },

      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP program to create a Class Calculator which will accept two values from the user and pass them as arguments through a parameterized constructor and do the following tasks:<br>a) Add<br>b) Subtract<br>c) Multiply them together or divide them on request.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Consider the following entities and their relationships:<br>Movie(movie_no, movie_name, release_year)<br>Actor(actor_no, name)<br>Relationship between movie and actor is many-to-many with attribute rate in Rs.<br>Create a RDB in 3NF. Using three radio buttons (accept, insert, update)<br>Write an Ajax script to accept an actor name and display names of movies in which he has acted.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script to demonstrate the concept of Introspection for examining objects. (Using any 3 predefined functions).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP script to perform the following stack-related operations: insert, delete, and display (Use concept of self-processing form).",
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP program to create a class Circle having a radius data member and two member functions find_circumference() and find_area(). Display area and circumference depending on user’s preference.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write an Ajax code to print the content of 'Myfile.dat' on clicking the fetch button. The data fetches from the server using Ajax technique.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP program to convert temperature Fahrenheit to Celsius using a sticky form.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write an AJAX script to read 'contact.dat' file and print the content of a file in tabular form when the user clicks on the print button. 'Contact.dat' file contains srno, name, residence number, mobile number (Enter at least 3 records in contact.dat file).",
            marks: 25,
          },
        ],
      },

      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: "a) Create a form to accept Employee details and display it on the next page. (Use sticky form concept).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a web application that contains Voter details and checks proper validation for (name, age, and nationality), as Name should be in uppercase letters only, Age should not be less than 18 years, and Nationality should be Indian. (Use HTML-AJAX-PHP).",
            marks: 25,
          },
        ],
      },

      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script to accept a string from the user and then display the accepted string in reverse order. (Use concept of self-processing form).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP script using AJAX concept to check if the username and password are valid or invalid (Use database to store username and password).",
            marks: 25,
          },
        ],
      },

      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP program to select a list of subjects from a list box and display the selected subject information on the next page. (Use sticky multivalued parameter).",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP script using AJAX concept to give hints to the user when they type a city name in the text field.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP program to accept two strings from the user and check whether the entered strings are matching or not. (Use sticky form concept).<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write an Ajax program to carry out validation for a username entered in a textbox. If the textbox is blank, print ‘Enter username’. If the number of characters is less than three, print ‘Username is too short’. If the value entered is appropriate, print ‘Valid username’.<br>",
            marks: 25,
          },
        ],
      },

      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script to display server information in table format (Use $_SERVER).<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a script to create an XML file 'University.xml'. The contents of 'University.xml' are as follows: <Univ><br>1) Store the details of at least 3 universities.<br>2) Link the 'University.xml' file to CSS and get a well-formatted output as given below:<br>i) Uname: Color: black; Font-family: Copperplate Gothic Light; Font-size: 16 pt; Font: Bold;<br>ii) City and Rank: Color: Yellow; Font-family: Arial; Font-size: 12 pt; Font: Bold;<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP program to create a simple distance calculator that can accept distance in meters from the user. Convert it into centimeters or kilometers according to user preference. (Use radio buttons and Self Processing form).<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Write a PHP script to generate an XML in the following format:<br><?xml version="1.0"?> <BookStore><Books><PHP><title>Programming PHP</title><publication>ORELLY</publication><price>800</price></PHP><PHP><title>Beginners PHP</title><publication>WROX</publication><price>900</price></PHP></Books></BookStore><br>Add more than 5 books details. Display details of a book by selecting the publication of the book from the user.<br>',
            marks: 25,
          },
        ],
      },

      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: "a) Create an XML document and parse the XML data into an array.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write an Ajax program to get book details from an XML file when the user selects a book name. Create an XML file to store details of books (name, author, year, and price).<br>",
            marks: 25,
          },
        ],
      },

      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: "a) Create an XML file which gives details of movies available in “Venus CD Store” from the following categories: a) Classical b) Action c) Horror. Elements in each category are in the following format:<br><Category><Movie Name>----</Movie Name><Release Year>----</Release Year><Actor Name>----</Actor Name></Category> Save the file with the name “movies.xml”.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP script for the following: Design a form to accept a number from the user. Perform the operations and show the results:<br>1) Fibonacci Series.<br>2) To find the sum of the digits of that number.<br>(Use the concept of self-processing page.)<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: "a) Write a script to create an XML file named “Course.xml”<br><Course><Computer Science><Student name>...</Student name></Class name><percentage>...</percentage></Computer Science></Course><br>Store the details of 5 students who are in SYBBA(CA).<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a class Student with data members Roll No, Name, PRN number. Derive class Marks from Student with data members M_PHP, M_OS, M_CPP, M_Networking and derive a class Result from class Marks with members (Total Marks, Percentage, Grade). (Use Interface Concept)<br>Write a Menu driven program in PHP to perform the following operations:<br>i. Accept Student Information<br>ii. Display Student Information with its result<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: "a) Create an XML file which gives details of books available in “Pragati Bookstore” from the following categories:<br>1) Yoga<br>2) Story<br>3) Technical<br>and elements in each category are in the following format:<br><Book><Book_Title>...</Book_Title><Book_Author>...</Book_Author><Book_Price>...</Book_Price></Book><br>Save the file as “Bookcategory.xml”<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Basic Page in Drupal titled “About Me”. Add the details about yourself in the page. Also place this page link in the Main Menu. Display this menu link before all the menu items. Show text “This is <your name>” when you move the mouse pointer at this menu link.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: "a) Create an application that reads “Sports.xml” file into a simple XML object. Display attributes and elements. (Hint: Use simplexml_load_file() function)<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write an Ajax program to print Movie details by selecting an Actor’s name.<br>Create table MOVIE and ACTOR as follows with 1:M cardinality:<br>MOVIE (mno, mname, release_yr) and ACTOR (ano, aname)<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: "a) Write a script to create an XML file named “College.xml”<br>The element details of “College.xml” are:<br><College><Cname>...</Cname><City>...</City><Rank>...</Rank></College><br>Display at least 3 colleges' information.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Basic Page in Drupal titled “DepartmentPortal”. Add the details about Departments and Teacher details in the page. Also place this page link in the Main Menu.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: "a) Write a script to create “vehicle.xml” file with multiple elements as given below:<br><Vehicle><Type=Two Wheeler><Vehicle_Name>...</Vehicle_Name><Company>...</Company><Color>...</Color><Average>...</Average></Type></Vehicle><br>Also add Type=“Four Wheeler” and its elements.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP program to implement Create, Read, Update, and Display operations on Teacher table with attributes (tid, tname, address, subject). (Use Radio Buttons)<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: "a) Write a simple PHP program which implements Ajax for the addition of two numbers.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a front-page article in Drupal titled “My Article”. Write an article about PHP programming Language and add it to the article page. Display an Image appropriate to the Article at the bottom of the Article. Also, place this page link in the Main Menu. Display this menu link before all the menu items. Show text “This is <your name>” when you move the mouse pointer at this menu link. Also post a comment about your article.<br>",
            marks: 25,
          },
        ],
      },

      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: "a) Write a simple PHP program which implements Ajax for the Factorial of a number.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP script to read book.xml and print book details in tabular format using simple XML. (Content of book.xml are book_code, book_name, author, year, price).<br>",
            marks: 25,
          },
        ],
      },

      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: "a) Write an Ajax program to display a list of games stored in an array on clicking the OK button.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Block in Drupal titled “CollegeSite™”. The block should be displayed on the left side of each page. The block should contain an announcement about an upcoming event in your college. Also, change the theme of your website by following properties:<br>a) Change the background color.<br>b) Change the logo image.<br>",
            marks: 25,
          },
        ],
      },

      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: "a) Write a PHP script using Ajax concept to develop a user-friendly and interactive search engine (like a Google search engine).<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Write a PHP Script to create a super class Vehicle having members Company and price. Derive 2 different classes:<br>LightMotorVehicle (members — mileage)<br>HeavyMotorVehicle (members — capacity-in-tons).<br>Define 5 Objects of each subclass and display details in a table format.<br>",
            marks: 25,
          },
        ],
      },

      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: "a) Derive a class Rectangle from class Square. Create one more class Triangle. Create an interface with only one method called cal_area (). Implement this interface in all the classes. Include appropriate data members and constructors in all classes. Write a program to accept details of a Rectangle, Square, and Triangle and display the area.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Develop a module in Drupal to create a page showing your contact details (name, roll_no, address, and phone). Also, add Navigation on the Home Page called “Contact Details”.<br>",
            marks: 25,
          },
        ],
      },
    ],
    language: "php",
  },
];
