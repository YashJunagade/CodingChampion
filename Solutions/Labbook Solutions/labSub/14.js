export const AdvanceJava = {
  subject: 'Advance Java',
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
                'Write a Java program to count the number of records in a table.',
            },
            {
              questionNo: 2,
              questionText:
                'Write a Java program to display all the EName from the Emp table. Assume Emp (ENo, EName, Salary) table is already created.',
            },
            {
              questionNo: 3,
              questionText:
                'Write a Java program to create a Student table with attributes Rno, Sname, Per.',
            },
            {
              questionNo: 4,
              questionText:
                'Write a Java program to delete the salary column from the Emp table. Assume Emp table with attributes ENo, EName, and Salary is already created.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Java program to delete the details of a given Teacher. Assume Teacher table with attributes tno, tname, and subject is already created.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a Java program to accept the details of Hospital (HId, HName, Address, PH_No) and store it into the database. (Use Swing).',
            },
            {
              questionNo: 2,
              questionText:
                'Write a Java program to display the details of Doctor (DNO, DName, Specialization) on JTable. Assume Doctor table is already created.',
            },
            {
              questionNo: 3,
              questionText:
                'Write a Java program to make the changes in data in ResultSet if you make changes in data in the database.',
            },
            {
              questionNo: 4,
              questionText:
                'Write a Java program for the following:\n- Create a Table\n- Alter a Table\n- Drop a Table',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Java program to accept the details of College (CID, CName, Address) and display it on the next frame. (Use Swing and PreparedStatement).',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a Java program for the following:\n- Create a table.\n- Insert\n- Update\n- Search\n- Display',
            },
            {
              questionNo: 2,
              questionText:
                'Write a Java program to update the salary of a given employee and display updated details in JTable. (Use Swing). Assume Emp (ENo, EName, Sal) table is already created.',
            },
            {
              questionNo: 3,
              questionText:
                'Write a Java program for the implementation of Scrollable ResultSet. Consider Teacher (TID, TName, Subject) table is already created.',
            },
            {
              questionNo: 4,
              questionText:
                'Write a Java program for the following:\n- Accept the details of 5 Employees (ENo, EName, Salary).\n- Store it into the JTable by clicking on the Add Button.\n- If the user clicks on the Save button, then data from JTable must be saved into the database.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Java program to create at least 5 tables in a database.\n- Add a column (field) in a given table.\n- Drop a given table from the database.',
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
                'Write a multithreading program in Java to display all the integers between 1 to 100 randomly after 2 seconds.',
            },
            {
              questionNo: 2,
              questionText:
                'Write a multithreading program in Java to display all the characters between Z to A after 5 seconds.',
            },
            {
              questionNo: 3,
              questionText:
                "Write a Java program to print 'Hello Java' message 10 times.",
            },
            {
              questionNo: 4,
              questionText:
                'Write a program in which a thread sleeps for 6 seconds in a loop in reverse order from 100 to 1 and changes the name of the thread.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Java program to display all the vowels from a given String. Each vowel should display after 3 seconds.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                "Define a thread for printing text on the output screen for ‘n’ number of times. Create 3 threads and run them. Pass the text and ‘n’ parameters to the thread constructor. Example:\n- First thread prints 'Hello' 10 times.\n- Second thread prints 'Good Morning' 20 times.\n- Third thread prints 'Sir/Mam' 30 times.",
            },
            {
              questionNo: 2,
              questionText:
                'Write a Java program in multithreading to create 3 balls and bounce them vertically.',
            },
            {
              questionNo: 3,
              questionText:
                'Write a Java program in multithreading to draw five lines vertically.',
            },
            {
              questionNo: 4,
              questionText:
                'Write a Java program to create 2 cars and move them randomly from left to right.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Java program to display the characters from a given string into the TextField. Each character should be displayed after 1 second.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a program to solve the producer-consumer problem in which a producer produces a value and a consumer consumes the value before the producer generates the next value. (Hint: use thread synchronization)',
            },
            {
              questionNo: 2,
              questionText:
                'Write a program to calculate the sum and average of an array of 1000 integers (generated randomly) using 10 threads. Each thread calculates the sum of 100 integers. Use these values to calculate the average. [Use join method].',
            },
            {
              questionNo: 3,
              questionText:
                'Write a program that implements a multi-threaded application with three threads. The first thread generates a random integer every 1 second; if the value is even, the second thread computes the square of the number and prints it. If the value is odd, the third thread prints the cube of the number.',
            },
            {
              questionNo: 4,
              questionText: 'Write a Java program for drawing a simple house.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Java program for drawing a star on the applet container.',
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
                'Write a Java program to display the IP address of a machine.',
            },
            {
              questionNo: 2,
              questionText:
                'Write a Java program to accept a number in a client application, send it to the server, server will check whether it is an Armstrong number or not, and send the result accordingly to the client.',
            },
            {
              questionNo: 3,
              questionText:
                "Write a Java program to send a 'Hi' message to the server.",
            },
            {
              questionNo: 4,
              questionText:
                'Write a Java program to accept a user name in a client application and greet the user according to the time on the server machine.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Java program to accept a string in a client application and display the vowels from that string on the server terminal.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a Java program for a standalone chatting application.',
            },
            {
              questionNo: 2,
              questionText:
                "Write a Java program to accept a filename in the client application and check whether it is available on the server machine or not. If it is there, display its contents on the client’s terminal; otherwise, display the message 'File Not Found'. (Write Client and Server applications on different terminals.)",
            },
            {
              questionNo: 3,
              questionText:
                'Write a Java program to accept a number in the client application, send it to the server, server will calculate its factors and display them on the client terminal. (Each factor should display after 2 seconds). Write Client and Server applications on different terminals.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Write a Java program for a chatting application using Swing for GUI. (Write Client and Server applications on different terminals).',
            },
            {
              questionNo: 2,
              questionText:
                'Write a Java program to send and receive messages from multiple terminals.',
            },
            {
              questionNo: 3,
              questionText:
                'Write a Java program to share a file on the server machine between multiple clients.',
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
                'Design a servlet that provides information about an HTTP request from a client, such as IP address and browser type. The servlet also provides information about the server on which the servlet is running, such as the operating system type, and the names of currently loaded servlets.',
            },
            {
              questionNo: 2,
              questionText:
                'Write a Program to make use of the following JSP implicit objects:<br>i. out: To display current Date and Time.<br>ii. request: To get header information.<br>iii. response: To Add Cookie.<br>iv. config: get the parameters value defined in <init-param>.<br>v. application: get the parameter value defined in <context-param>.<br>vi. session: Display Current Session ID.<br>vii. pageContext: To set and get the attributes.<br>viii. page: get the name of Generated Servlet.',
            },
            {
              questionNo: 3,
              questionText:
                "Write a Servlet application to display 'Hello Java' message on the Browser.",
            },
            {
              questionNo: 4,
              questionText:
                'Write a JSP script to display all the prime numbers between 1 to n in Red Color.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a JSP application to accept the details of Emp (Eno, EName, Salary) and display it in Tabular format on the browser.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Design an HTML page which passes customer number to a search servlet. The servlet searches for the customer number in a database (customer table) and returns customer details if found; otherwise, display an error message.',
            },
            {
              questionNo: 2,
              questionText:
                'Design an HTML page containing option buttons (Maths, Physics, Chemistry, and Biology) and buttons submit and reset. When the user clicks submit, the server responds by adding a cookie containing the selected subject and sends a message back to the client. The program should not allow duplicate cookies to be written.',
            },
            {
              questionNo: 3,
              questionText:
                'Write a Servlet program to display the details of PATIENT (PatientNo, PatientName, PatientAddress, PatientAge, PatientDisease) in tabular form on the browser.',
            },
            {
              questionNo: 4,
              questionText:
                'Write a JSP application to accept a user name and greet the user according to the system Time.',
            },
            {
              questionNo: 5,
              questionText:
                'Write a Servlet program for the implementation of session tracking.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Create a JSP page for an online multiple-choice test. The questions are randomly selected from a database and displayed on the screen. The choices are displayed using radio buttons. When the user clicks on next, the next question is displayed. When the user clicks on submit, display the total score on the screen.',
            },
            {
              questionNo: 2,
              questionText:
                'Write a program to create an Online Book purchase. The user must log in and then purchase the book. Each page should have a page total. The last page should display a total book and bill, which consists of a page total of whatever the purchase has been done and print the total. (Use HttpSession)',
            },
            {
              questionNo: 3,
              questionText:
                'Write a JSP application to accept the details of Teacher (TID, TName, Salary) and display it in tabular format.',
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
                "Create a Spring core example to display the message 'DYPIAN'.",
            },
            {
              questionNo: 2,
              questionText:
                'Write a program to display the Current Date using Spring.',
            },
            {
              questionNo: 3,
              questionText:
                "Write a Hibernate application to display 'Hello' message.",
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Design a Spring application for accepting student information like Student_id, Student_Name, and Student_Age.',
            },
            {
              questionNo: 2,
              questionText:
                'Design an Employee login form application using Spring Form MVC validation.',
            },
          ],
        },
      ],
    },
  ],
  language: 'java',
};
