const nodejs = [
  {
    subject: 'Node JS',
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "a) Create a Node.js file that will convert the output 'Hello World!' into upper-case letters.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Node.js file that demonstrates creating a database named 'studentDB' and a table named 'student' with columns (Rno, Sname, Percentage) in MySQL.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that uses a user-defined module to return the factorial of a given number.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Create a Node.js application that contains the Employee Registration details and write JavaScript to validate DOB, Joining Date, and Salary.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that uses a user-defined module circle.js which exports the functions area() and circumference() and display the details on the console.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Create a Node.js application for validating a student registration form.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that accepts the first name, last name, and date of birth of a person and define a module that concatenates firstName and lastName and also calculates the age of the person.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a SYBBA(CA) Teachers Profile System.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that performs the following operations on Buffer data:<br> a. Concat<br> b. Compare<br> c. Copy<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Node.js file that selects all records from the 'customers' table and deletes the specified record.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 error.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Node.js file that inserts multiple records into the 'student' table, and displays the result object on the console.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: 'a) Using Node.js, create a web page to read two file names from the user and append the contents of the first file into the second file.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Node.js file that selects all records from the 'customers' table, and displays the result object on the console.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: 'a) Using Node.js, create a web page to read two file names from the user and combine them in a third file with all content in uppercase.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Node.js application that contains student registration details and validates that the student's first and last names do not contain any special symbols or digits and that age should be between 6 and 25.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js file that writes an HTML form with an upload field.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a recipe book.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application to download a JPG image from the server.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Create a Node.js application that displays a department-employee relationship with a 1:M cardinality and shows the minimum, maximum, and average salary of employees for each department name.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a simple web server using Node.js that shows the college information.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a Computer Science department portal.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that binds two listeners to a single event.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a user login system.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application using a user-defined Rectangle module to find the area of a rectangle and display the details on the console.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Node.js application that updates the marks of a given student Rno in the 'student' table and displays the result.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application to search for a particular word in a file and display the result on the console.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create an electricity bill calculation system.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application to count the occurrence of a given word in a file and display the count on the console.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create an eLearning system.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js file named main.js for an event-driven application. There should be a main loop that listens for events, and then triggers a callback function when one of those events is detected.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Create a Node.js file that selects all records from the 'Employee' table and updates the salary of the given Eno.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: 'a) Write a Node.js application that transfers a file as an attachment on the web and enables the browser to prompt the user to download the file using Express.js.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, display the employee details ordered by salary in a table format.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: "a) Create a Node.js application to bind a custom event 'receive_data' with 'data_receive_handler' function.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create an application that contains voter details and checks proper validation for (name, age, and nationality), such as Name should be in uppercase letters only, Age should not be less than 18 years, and Nationality should be Indian, and store the data in a database.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: 'a) Write a Node.js application that shows some information when your Node.js application gets started, a warning when it tries to open an existing file, and an error message if the specified file is not found.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Using Node.js, clone the 'Hacker News' website.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: 'a) Write a Node.js application containing an event handler to open and read the contents of a file.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create an application that shows the SY BBA(CA) course structure.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: "a) Write a Node.js application to create an EventEmitter which will emit an event that contains information about the application's uptime every second.<br>",
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create an application that shows the mini statement of a particular account (customer table).<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application to count the number of lines in a file and display the count on the console.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create an application to perform the following operations on a customer account (minimum balance should be maintained at 1000 and use the customer table):<br>1. Withdraw the amount<br>2. Balance enquiry<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application to search for a particular word in a file and replace all occurrences of that word with another word and bold all.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: "b) Using Node.js, create an application that generates the 'eTicket' for railways.<br>",
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that raises and binds an event by returning an EventEmitter object from a function.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a historical place portal.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that waits until the promise returns the result using the wait function.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create an application that shows the events of the day.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that raises and binds an event by extending the EventEmitter class.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a department store portal.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application to create a directory and list the contents of the directory.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Create a Node.js application that contains student registration details and write a JavaScript function to validate the DOB, mobile number, and email address.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application to check whether a given name is a file or directory. If it is a file, truncate the content after 10 bytes.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a user login system with a forgot password option that allows setting a new password.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application using a user-defined Rectangle module to find the area of a rectangle and display the details on the console.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Using Node.js, create a matrimonial portal.<br>',
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: 'a) Create a Node.js application that uses a user-defined module circle.js which exports the functions area() and circumference() and displays the details on the console.<br>',
            marks: 15,
          },
          {
            questionId: 2,
            text: 'b) Create a Node.js file that demonstrates creating a database and a Hospital table (hReg, hName, address, contact) in MySQL.<br>',
            marks: 25,
          },
        ],
      },
    ],
    language: 'javascript',
  },
];
