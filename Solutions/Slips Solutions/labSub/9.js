export const AdvancePhp = {
  subject: 'Advance Php',
  assignments: [
    {
      assignment: 1,
      sets: [
        {
          set: 1,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write class declarations and member function definitions for an employee (code, name, designation). Derive emp_account (account_no, joining_date) from employee and emp_sal (basic_pay, earnings, deduction) from emp_account. Write a menu-driven program to: a) Build a master table b) Sort all entries c) Search an entry d) Display salary.',
            },
            {
              questionNo: 2,
              questionText:
                'Define an interface which has methods area(), volume(). Define constant PI. Create a class cylinder which implements this interface and calculates area and volume. (Hint: Use define()).',
            },
            {
              questionNo: 3,
              questionText:
                "Write a Calculator class that can accept two values, then add them, subtract them, multiply them together, or divide them on request. For example: $calc = new Calculator(3, 4); echo $calc->add(); // Displays '7' echo $calc->multiply(); // Displays '12'.",
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Create a class named DISTANCE with feet and inches as data members. The class has the following member functions: convert_feet_to_inch(), convert_inch_to_feet(). Display options using radio buttons and display conversion on the next page.',
            },
            {
              questionNo: 2,
              questionText:
                'Write a PHP program to create a class Employee that contains data members as Emp_Name, Dept_name, Basic_sal, DA, HRA, TA, IT, PF, PT, GROSS, DEDUCTION, NET. It has member functions calculate_gross(), calculate_deductions(), calculate_net_salary(). Display the pay slip of the employee. Create and initialize members Emp_Name, Dept_name, Basic_sal of the Employee object using a parameterized constructor.',
            },
            {
              questionNo: 3,
              questionText:
                'Write a PHP program to create a class temperature which contains data members as Celsius and Fahrenheit. Create and initialize all values of the temperature object using a parameterized constructor. Convert Celsius to Fahrenheit and convert Fahrenheit to Celsius using member functions. Display conversion on the next page.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a PHP program to create a class article having articleid, name, articleqty, price. Write a menu-driven program to perform the following functions: i) Display details of all articles purchased. ii) Display details of articles whose price exceeds 500. iii) Display details of articles whose quantity exceeds 50. (Use an array of objects.)',
            },
            {
              questionNo: 2,
              questionText:
                'Write a PHP program to create a class Worker that has data members as Worker_Name, No_of_Days_worked, Pay_Rate. Create and initialize the object using default constructor and parameterized constructor. Also, write necessary member functions to calculate and display the salary of the worker.',
            },
          ],
        },
      ],
    },
    {
      assignment: 2,
      sets: [
        {
          set: 1,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write PHP program accept name, select your cities you would like to visit and display selected information on page. (Use multi-valued parameter).',
            },
            {
              questionNo: 2,
              questionText:
                'Write PHP program to create student registration form and display student information. (Use sticky form concept).',
            },
            {
              questionNo: 3,
              questionText:
                'Write a PHP script for the following: Design a form to accept a number from the user. Perform the operations and show the results.<br>• Check whether number is palindrome or not.<br>• Reverse the number using recursions.<br>(Use the concept of self-processing page.)',
            },
            {
              questionNo: 4,
              questionText:
                'Write PHP program to select list of subjects from list box and display selected subject on information. (Use sticky multi-valued parameter)',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a PHP Script to display Server information in table format (Use $_SERVER).',
            },
            {
              questionNo: 2,
              questionText:
                'Write a PHP program to accept two strings from user and check whether entered strings are matching or not. (Use sticky form concept).',
            },
            {
              questionNo: 3,
              questionText:
                'Write a PHP script to accept an Indian currency and then convert it in dollar or pounds (radio buttons) according to user’s preference. (Use concept of self-processing form).',
            },
            {
              questionNo: 4,
              questionText:
                'Write PHP program to accept client name, property details (Flat, Bunglow, Plot), Display selected information same page. (Use multi-value parameter).',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write PHP program to accept name of student, Gender (male, female) using radio buttons, Qualification (SSC, HSC, BCA, MCA) using check boxes. Display information of student. (Use sticky multi-valued parameter).',
            },
          ],
        },
      ],
    },
    {
      assignment: 3,
      sets: [
        {
          set: 1,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a PHP script to create XML file named “Course.xml”<br><Course><br><SYBBA CA><br><Student name> ......</Student name><br><Class name>..... </Class name><br><percentage>.... </percentage><br></SYBBA CA><br></Course><br>Store the details of 5 students who are in SYBBACA.',
            },
            {
              questionNo: 2,
              questionText:
                'Write PHP script to generate an XML code in the following format<br><?xml version="1.0" encoding="ISO-8859-1" ?><br><CATALOG><br><CD><br><TITLE>Empire Burlesque</TITLE><br><ARTIST>Bob Dylan</ARTIST><br><COUNTRY>USA</COUNTRY><br><COMPANY>Columbia</COMPANY><br><PRICE>10.90</PRICE><br><YEAR>1985</YEAR><br></CD><br></CATALOG><br>Save the file with name “CD.xml”.',
            },
            {
              questionNo: 3,
              questionText:
                'Write PHP script to generate an XML code in the following format<br><?xml version="1.0" encoding="ISO-8859-1" ?><br><CATALOG><br>20<br><PLANT><br><BOTANICAL>Sanguinaria canadensis</BOTANICAL><br><ZONE>4</ZONE><br><LIGHT>Mostly Shady</LIGHT><br><PRICE>$2.44</PRICE><br><AVAILABILITY>031599</AVAILABILITY></PLANT></CATAOG><br>Save the file with name “plant.xml”.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a script to create “cricket.xml” file with multiple elements as shown below:<br><CricketTeam><br> <Team country="India"><br><player> </player><br><runs> </runs><br><wicket> </wicket><br> </Team><br> </CricketTeam><br>Write a script to add multiple elements in “cricket.xml” file of category, country="Australia".',
            },
            {
              questionNo: 2,
              questionText:
                'Write a script to create “breakfast.xml” file with multiple elements as shown below:<br><breakfast_menu><br><food><br><name>French Fries</name><br><price>Rs45</price><br><description>Young youths are very much interested to eat it </description><br><calories>650</calories><br></food><br></breakfast_menu><br>Write a script to add multiple elements in “breakfast.xml” file of category, Juice.',
            },
            {
              questionNo: 3,
              questionText:
                'Create a XML file which gives details of movies available in “Mayanagari CD Store” from following categories<br> a) Classical<br>b) Action<br>c) Horror<br>Elements in each category are in the following format<br><Category><br><Movie Name>----</Movie Name><br><Release Year>----</Release Year><br></Category><br>Save the file with name “movies.xml”.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Create an application that reads “book.xml” file into',
            },
          ],
        },
      ],
    },
    {
      assignment: 4,
      sets: [
        {
          set: 1,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a PHP script using AJAX concept, to check user name and password are valid or Invalid (use database to store user name and password).',
            },
            {
              questionNo: 2,
              questionText:
                'Write Ajax program to carry out validation for a username entered in textbox. If the textbox is blank, print ‘Enter username’. If the number of characters is less than three, print ‘Username is too short’. If value entered is appropriate the print ‘Valid username’.',
            },
            {
              questionNo: 3,
              questionText:
                'Write Ajax program to get book details from XML file when user selects a book name. Create XML file for storing details of book(title, author, year, price).',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write Ajax program to fetch suggestions when user is typing in a textbox. (e.g., like Google suggestions. Hint: create an array of suggestions and matching string will be displayed).',
            },
            {
              questionNo: 2,
              questionText:
                'Write Ajax program to get player details from XML file when user selects a player name. Create XML file for storing details of player (Country, player name, wickets, runs).',
            },
            {
              questionNo: 3,
              questionText:
                'Write a AJAX program to display the following output to search your favourite tutorial from “tutorial.php” file.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a AJAX program to display the selected course information from the list given in XML file and show the following output.',
            },
          ],
        },
      ],
    },
    {
      assignment: 5,
      sets: [
        {
          set: 1,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write Ajax program to print Movie details by selecting an Actor’s name. Create table MOVIE and ACTOR as follows with 1 : M cardinality MOVIE (mno, mname, release_yr) and ACTOR(ano, aname).',
            },
            {
              questionNo: 2,
              questionText:
                'Create Trip table as follows Trip (tno, tname, Source, Destination, cost). Write Ajax program to select the trip name and print the selected trip details.',
            },
            {
              questionNo: 3,
              questionText:
                'Create student table as follows Student(sno, sname, per). Write Ajax program to select the student name and print the selected student’s details.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write Ajax program to get player details from player table by inserting a player name at run time display it’s details in tabular form. Consider player (Country, player_name, wickets, runs).',
            },
            {
              questionNo: 2,
              questionText:
                'Write Ajax program to calculate maximum runs scored for a particular country (Use Above Player table).',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write Ajax program to get details of voters whose age is greater than 40 years from Voter table. Create voter table as Voter (vid, vname, vage, vaddress).',
            },
          ],
        },
      ],
    },
    {
      assignment: 6,
      sets: [
        {
          set: 1,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Create a Basic Page in Drupal titled “About Me”. Add the details about yourself in the page. Also place this page link in the Main Menu. Display this menu link before all the menu items. Show text “This is <your name>” when move the mouse pointer at this menu link.',
            },
            {
              questionNo: 2,
              questionText:
                'Develop a module in Drupal to create a page showing your contact details (name, roll_no, address, phone). Also add Navigation on the Home Page called “Contact Details”.',
            },
            {
              questionNo: 3,
              questionText:
                'Using Drupal create a page showing the teacher details (name, contactno, subjecttaught). Add Navigation on the home page called “Teacher Details”.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Create a Block in Drupal titled “Event”. The block should be displayed in the left side of each page. The block should contain announcement about an upcoming events. Also change the theme of your website by following properties:<br>a) Change the background colour.<br>b) Change the logo image.',
            },
            {
              questionNo: 2,
              questionText:
                'Create a front-page article in Drupal titled “My Article”. Write an article about PHP programming Language and add to the article page. Display an Image appropriate to the Article at the bottom of the Article. Also place this page link in the Main Menu. Display this menu link before all the menu items. Show text “This is <your name>” when move the mouse pointer at this menu link. Also post a comment about.',
            },
            {
              questionNo: 3,
              questionText:
                'Create a module in Drupal To design a form with the following components:<br>Text Fields - Roll No, Name, and Address<br>One submit button.<br>After submitting the form insert a student record into a table named student. Also display a message when the record is inserted successfully, and fetch the name of student from the table and display “Hello: <student name>”. Also add Navigation on the Home Page called “Student Form”.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Develop a module in Drupal to design a registration form with the following fields:<br>Text Field – First Name, Last Name, email, city<br>List Boxes – Select Country, Date of Birth (Separate Select Boxes for month, day, and year)<br>Radio Buttons – Gender - Male/Female<br>Check Boxes – Technology Known – Java, PHP<br>One Browse button to upload picture.<br>Perform validation to check if the First Name and Last Name are not empty and the email is valid.<br>If that is not the case display error message and the form will not be submitted.<br>Display message “Form has been submitted successfully” after clicking on the Submit button.<br>Also add a Navigation on the Home Page called “Registration”.',
            },
          ],
        },
      ],
    },
  ],
  language: 'c',
};
