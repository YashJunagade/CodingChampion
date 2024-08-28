const rdbms = [
  {
    subject: "RDBMS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Client (client_no, client_name, address, birthdate)<br>Policy_info (policy_no, desc, maturity_amt, prem_amt, date)<br>Relation between Client and Policy_info is Many to Many<br>Constraint: Primary key, prem_amt and maturity_amt should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will return total maturity amount of policies of a particular client.<br>2) Write a cursor which will display policy date wise client details.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Consider the following Item_Supplier database:<br>Item (itemno, itemname)<br>Supplier (supplier_No, supplier_name, address, city)<br>Relationship between Item and Supplier is many-to-many with descriptive attribute rate and quantity.<br>Constraints: itemno, supplier_No primary key.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function to print the total number of suppliers of a particular item.<br>2) Write a trigger which will fire before insert or update on rate and quantity less than or equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationship:<br>Newspaper (name, language, publisher, cost)<br>Cities (pincode, city, state)<br>Relationship between Newspaper and Cities is many-to-many with descriptive attribute daily required.<br>Constraints: name and pincode primary key.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a trigger which will fire before insert on the cities table which check that the pincode must be of 6 digits. (Raise user defined exception and give appropriate message).<br>2) Write a procedure to calculate city wise total cost of each newspaper.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Client (client_no, client_name, address, birthdate)<br>Policy_info (policy_no, desc, maturity_amt, prem_amt, date)<br>Relation between Client and Policy_info is Many to Many.<br>Constraint: Primary key, prem_amt and maturity_amt should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure which will display all policy details having premium amount less than 5000.<br>2) Write a trigger which will fire before insert or update on policy_info having maturity amount less than premium amount. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Library (Lno, Lname, Location, Librarian, no_of_books)<br>Book (Bid, Bname, Author_Name, Price, publication)<br>Relation between Library and Book is one to many.<br>Constraint: Primary key, Price should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will accept publication name from user and display total price of books of that publication.<br>2) Write a cursor which will display library wise book details. (Use Parameterized Cursor)",
            marks: 40,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Employee (emp_id, emp_name, address)<br>Investment (inv_no, inv_name, inv_date, inv_amount)<br>Relation between Employee and Investment is One to Many.<br>Constraint: Primary key, inv_amount should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure which will display details of employees invested amount in 'Mutual Fund'.<br>2) Write a cursor which will display date wise investment details.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Bill (billno, day, tableno, total)<br>Menu (dish_no, dish_desc, price)<br>The relationship between Bill and Menu is Many to Many with quantity as descriptive attribute.<br>Constraint: Primary key, price should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display menu details having price between 200 to 500 which were ordered on 'Saturday'.<br>2) Write a trigger which will fire before insert or update on Menu having price less than or equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Plan (plan_no, plan_name, nooffreecalls, freecalltime, fix_amt)<br>Customer (cust_no, cust_name, mobile_no)<br>Relation between Plan and Customer is One to Many.<br>Constraint: Primary key, fix_amt should be greater than 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will accept plan number from user and display all the details of the selected plan.<br>2) Write a cursor which will display customer wise plan details. (Use Parameterized Cursor).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Project (pno, pname, start_date, budget, status)<br>Department (dno, dname, HOD, loc)<br>The relationship between Project and Department is Many to One.<br>Constraint: Primary key.<br>Project Status Constraints: C – Completed, P - Progressive, I – Incomplete.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which accepts department name and displays total number of projects whose status is 'P' (progressive).<br>2) Write a cursor which will display status wise project details of each department.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Gym (Name, city, charges, scheme)<br>Member (ID, Name, phoneNo, address)<br>Relation between Gym and Member is One to Many.<br>Constraint: Primary Key, charges must be greater than 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will accept member id and scheme from user and display charges paid by that member.<br>2) Write a trigger which will fire before insert or update on Gym having charges less than 1000. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Student (rollno, sname, class, timetable)<br>Lab (LabNo, LabName, capacity, equipment)<br>Relation between Student and Lab is Many to One.<br>Constraint: Primary Key, capacity should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will accept Lab number from user and display total number of student allocated in that lab.<br>2) Write a cursor which will display lab wise student details.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Wholesaler (w_no, w_name, address, city)<br>Product (product_no, product_name, rate)<br>Relation between Wholesaler and Product is Many to Many with quantity as descriptive attribute.<br>Constraint: Primary key, rate should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will accept wholesaler name from user and will display total number of items supplied by him.<br>2) Write a trigger which will fire before insert or update on product having rate less than or equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Country (CId, CName, no_of_states, area, location, population)<br>Citizen (Id, Name, mother_toung, state_name)<br>Relation between Country and Citizen is one to many.<br>Constraint: Primary key, area should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will display name of the country having minimum population.<br>2) Write a cursor which will display country wise citizen details.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>College (code, college_name, address)<br>Teacher (teacher_id, teacher_name, Qualification, specialization, salary, Desg)<br>Relation between Teacher and College is Many to One.<br>Constraint: Primary Key, qualification should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure which will accept teacher name from user and display his/her college details.<br>2) Write a trigger which will fire before insert or update on Teacher having salary less than or equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Driver (driver_id, driver_name, address)<br>Car (license_no, model, year)<br>Relation between Driver and Car is Many to Many with date and time as descriptive attribute.<br>Constraint: Primary key, driver_name should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will display the total number of person who are using 'Swift' car.<br>2) Write a trigger which will fire before insert or update on year. If year value is more than current year. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Game (game_name, no_of_players, coach_name)<br>Player (pid, pname, address, club_name)<br>Relation between Game and Player is Many to Many.<br>Constraint: Primary key, no_of_players should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure which will display games details having number of players more than 5.<br>2) Write a trigger which will fire before insert or update on Game having no_of_players less than or equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: "Consider the following Item_Supplier database:<br>Company (name, address, city, phone, share_value)<br>Person (pname, pcity)<br>Relationship between Company and Person is M to M relationship with descriptive attribute No_of_shares.<br>Constraints: name, pname primary key.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a trigger before insert or update on No_of_shares field should not be zero. (Raise user defined exception and give appropriate message).<br>2) Write a function to display total no_of_shares of a specific person.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationship:<br>Student (s_reg_no, s_name, s_class)<br>Competition (comp_no, comp_name, comp_type)<br>Relationship between Student and Competition is many-to-many with descriptive attribute rank and year.<br>Constraints: primary key, foreign key, primary key for third table(s_reg_no, comp_no, year), s_name and comp_name should not be null, comp_type can be sports or academic.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will accept s_reg_no of student and returns total number of competitions in which student has participated in a given year.<br>2) Write a cursor which will display year wise details of competitions. (Use parameterized cursor).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Game (game_name, no_of_players, coach_name)<br>Player (pid, pname, address, club_name)<br>Relation between Game and Player is Many to Many.<br>Constraint: Primary key, no_of_players should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will return total number of football players of ‘Sports Club’.<br>2) Write a cursor which will display club wise details of players.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Driver (driver_id, driver_name, address)<br>Car (license_no, model, year)<br>Relation between Driver and Car is Many to Many with date and time as descriptive attribute.<br>Constraint: Primary key, driver_name should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display car details used on specific day.<br>2) Write a cursor which will display driver wise car details in the year 2018.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>College (code, college_name, address)<br>Teacher (teacher_id, teacher_name, Qualification, specialization, salary, Desg)<br>Relation between Teacher and College is Many to One.<br>Constraint: Primary Key, qualification should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will accept college name from user and display total number of “Ph.D” qualified teachers.<br>2) Write a cursor which will display college wise teacher details.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Country (CId, CName, no_of_states, area, location, population)<br>Citizen (Id, Name, mother_toung, state_name)<br>Relation between Country and Citizen is one to many.<br>Constraint: Primary key, area should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display name of citizens having mother toung “Marathi” and from “India”.<br>2) Write a trigger which will fire before insert or update on country having no_of_state less than equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Wholesaler (w_no, w_name, address, city)<br>Product (product_no, product_name, rate)<br>Relation between Wholesaler and Product is Many to Many with quantity as descriptive attribute.<br>Constraint: Primary key, rate should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure which will display details of products supplied by “Mr. Patil”.<br>2) Write a cursor which will display wholesaler wise product details. (Use Parameterized cursor).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Student (rollno, sname, class, timetable)<br>Lab (LabNo, LabName, capacity, equipment)<br>Relation between Student and Lab is Many to One.<br>Constraint: Primary Key, capacity should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display details of students which perform practical sessions in a given Lab.<br>2) Write a trigger which will fire before delete on Lab (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Gym (Name, city, charges, scheme)<br>Member (ID, Name, phoneNo, address)<br>Relation between Gym and member is one to many.<br>Constraint: Primary Key, charges must be greater than 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display member details of gym located at “Pimpri”.<br>2) Write a cursor which will display gym wise member details. (Use Parameterized Cursor).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Project (pno, pname, start_date, budget, status)<br>Department (dno, dname, HOD, loc)<br>The relationship between Project and Department is Many to One.<br>Constraint: Primary key.<br>Project Status Constraints: C – Completed, P - Progressive, I – Incomplete<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display the name of HOD who has completed maximum project.<br>2) Write a trigger which will fire before insert or update on project having budget less than or equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Plan (plan_no, plan_name, nooffreecalls, freecalltime, fix_amt)<br>Customer (cust_no, cust_name, mobile_no)<br>Relation between Plan and Customer is One to Many.<br>Constraint: Primary key, fix_amt should be greater than 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display the plan having minimum response.<br>2) Write a trigger which will fire before insert or update on mobile number having length less than or greater than 10. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Bill (billno, day, tableno, total)<br>Menu (dish_no, dish_desc, price)<br>The relationship between Bill and Menu is Many to Many with quantity as descriptive attribute.<br>Constraint: Primary key, price should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which accept a table number and display total amount of bill for a specific table.<br>2) Write a cursor which will display table wise menu details.",
            marks: 40,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Employee (emp_id, emp_name, address)<br>Investment (inv_no, inv_name, inv_date, inv_amount)<br>Relation between Employee and Investment is One to Many.<br>Constraint: Primary key, inv_amount should be > 0.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a function which will return total investment amount of a particular client.<br>2) Write a trigger which will fire before insert or update on Investment having investment amount less than 50000. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships:<br>Library (Lno, Lname, Location, Librarian, no_of_books)<br>Book (Bid, Bname, Author_Name, Price, publication)<br>Relation between Library and Book is one to many.<br>Constraint: Primary key, Price should not be null.<br>Create a RDB in 3NF and write PL/SQL blocks in Oracle for the following:<br>1) Write a procedure to display names of books written by 'Mr. Patil' and are from 'DPU Library'.<br>2) Write a trigger which will fire before insert or update on book having price less than or equal to zero. (Raise user defined exception and give appropriate message).",
            marks: 40,
          },
        ],
      },
    ],
    language: "plsql",
  },
];
