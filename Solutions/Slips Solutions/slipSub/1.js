const dbms = [
  {
    subject: "DBMS",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with<br> appropriate data types and Constraints. [15 Marks]<br> Emp(eno, ename, designation, salary, Date_Of_Joining)<br> Dept(dno, dname, loc)<br> The relationship between Dept & Emp is one-to-many.<br> Constraints: - Primary Key, ename should not be NULL, salary must be greater than 0.<br> Consider the above tables and Execute the following queries:<br> 1. Add column phone_No into Emp table with data type int.<br> 2. Delete the details of Employee whose designation is ‘Manager’.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above database and execute the following queries: [25 Marks]<br> 1. Display the count of employees department wise.<br> 2. Display the name of employee who is ‘Manager’ of “Account Department”.<br> 3. Display the name of department whose location is “Pune” and “Mr. Advait” is working in it.<br> 4. Display the names of employees whose salary is greater than 50000 and department is “Quality”.<br> 5. Update Dateofjoining of employee to ‘15/06/2019’ whose department is ‘computer science’ and name is “Mr. Roy’.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with<br> appropriate data types and Constraints. [15 Marks]<br> Sales_order (ordNo, ordDate)<br> Client (clientNo, ClientName, addr)<br> The relationship between Client & Sales_order is one-to-many.<br> Constraints: - Primary Key, ordDate should not be NULL.<br> Consider the above tables and execute the following queries:<br> 1. Add column amount into Sales_order table with data type int.<br> 2. Delete the details of the clients whose names start with ‘A’ character.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries: [25 Marks]<br> 1. Delete sales order details of client whose name is “Patil” and order date is “09/08/2019”.<br> 2. Change order date of client_No ‘CN001’ to ‘18/03/2019’.<br> 3. Delete all sales_record having order date is before ‘10/02/2018’.<br> 4. Display date wise sales_order given by clients.<br> 5. Update the address of client to “Pimpri” whose name is ‘Mr. Roy’.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with<br> appropriate data types and Constraints. [15 Marks]<br> Hospital (hno, hname, city, Est_year, addr)<br> Doctor (dno, dname, addr, Speciality)<br> The relationship between Hospital and Doctor is one - to – Many<br> Constraints: - Primary Key, Est_year should be greater than 1990.<br> Consider the above tables and execute the following queries:<br> 1. Delete addr column from Hospital table.<br> 2. Display doctor name, Hospital name and specialty of doctors from “Pune City”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries: [25 Marks]<br> 1. Display the names of the hospitals which are located at “Pimpri” city.<br> 2. Display the names of doctors who are working in “Birla” Hospital and city name is “Chinchwad”.<br> 3. Display the specialty of the doctors who are working in “Ruby” hospital.<br> 4. Give the count of doctor’s hospital wise which are located at “Pimple Gurav”.<br> 5. Update an address of Doctor to “Pimpri” whose hospital is “Ruby clinic”.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with<br> appropriate data types and Constraints. [15 Marks]<br> Patient (PCode, Name, Addr, Disease)<br> Bed (Bed_No, RoomNo, loc)<br> Relationship: - There is one-one relationship between patient and bed.<br> Constraints: - Primary key, RoomNo must be greater than Bed_No, Addr should not be null.<br> Consider the above tables and execute the following queries:<br> 1. Display the details of patients who are from “Pimple Gurav”.<br> 2. Delete the details of patient whose Bed_No is 1 and RoomNo is 105.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries: [25 Marks]<br> 1. Display the count of patient room wise.<br> 2. Display the names of patients who are admitted in room no 101.<br> 3. Display the disease of patient whose bed_No is 1.<br> 4. Display the room_no and bed_no of patient whose name is “Mr Roy”.<br> 5. Give the details of Patient who is admitted on 2nd flr in roomno 102.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with<br> appropriate data types and Constraints. [15 Marks]<br> Customer (cust_no, cust_name, address, city)<br> Loan (loan_no, loan_amt)<br> The relationship between Customer and Loan is Many to Many<br> Constraint: Primary key, loan_amt should be > 0.<br> Consider the above tables and execute the following queries:<br> 1. Add Phone_No column in customer table with data type int.<br> 2. Delete the details of customer whose loan_amt<1000.",
            marks: 15,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Project (pno, pname, start_date, budget, status)<br>Department (dno, dname, HOD, loc)<br>The relationship between Project and Department is Many to One.<br>Constraint: Primary key.<br>Project Status Constraints: C – Completed, P - Progressive, I - Incomplete<br>Consider the above tables and execute the following queries:<br>1. Drop loc column from department table.<br>2. Display the details of project whose start_date is before one month and status is “Progressive”",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display the names of project and department who are worked on projects whose status is ‘Completed’.<br>2. Display total budget of each department.<br>3. Display incomplete project of each department.<br>4. Display all project working under 'Mr.Desai'.<br>5. Display department wise HOD.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Room (roomno, desc, rate)<br>Guest (gno, gname, no_of_days)<br>The relationship between Room and Guest is One to One.<br>Constraint: Primary key, no of days should be > 0.<br>Consider the above tables and execute the following queries:<br>1. Update the rate of room to 5000 whose type is “AC”.<br>2. Display the name of guest who is staying 2 days in roomno 101.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display room details according to its rates in ascending order.<br>2. Display the roomno in which “Mr. Advait” is staying for 7 days.<br>3. Find no. of AC rooms.<br>4. Find names of guest with maximum room charges.<br>5. Display guest wise halt days.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Book (Book_no, title, author, price, year_published)<br>Customer (cid, cname, addr)<br>Relation between Book and Customer is Many to Many with quantity as descriptive attribute.<br>Constraint: Primary key, price should be >0.<br>Consider the above tables and execute the following queries:<br>1. Display the name of book whose author is “Mr. Gadhave”.<br>2. Add column EMailId into customer table.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display customer details from 'Mumbai'.<br>2. Display author wise details of book.<br>3. Display customer name that has purchased more than 3 books.<br>4. Display book names having price between 100 and 200 and published year is 2019.<br>5. Update the title of book to “DBMS” whose author is “Mr. Talore”.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Property (pno, desc, area, rate)<br>Owner (owner_name, addr, phno)<br>The relationship between owner and Property is One to Many.<br>Constraint: Primary key, rate should be > 0<br>Consider the above tables and execute the following queries:<br>1. Display area of property whose rate is less than 100000.<br>2. Give the details of owner whose property is at “Pune”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display area wise property details.<br>2. Display property owned by 'Mr.Patil' having minimum rate.<br>3. Delete all properties from “pune” owned by “Mr. Joshi”.<br>4. Update the phone Number of “Mr. Joshi” to 9922112233 who is having property at “Uruli Kanchan”.<br>5. Delete column address from Owner table.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Employee (emp_no, name, skill, payrate)<br>Position (posting_no, skill)<br>The relationship between Employee and Position is Many to Many with day and shift as descriptive attribute.<br>Constraint: Primary key, payrate should be > 0.<br>Consider the above tables and execute the following queries:<br>1. Display skill of employees name wise.<br>2. Update the posting of employee to 220 whose skill is “Manager”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Find the names and rate of pay of all employees who has allocated a duty.<br>2. Give employee number who is working at posting_no. 201, but don’t have the skill of waiter.<br>3. Display a list of names of employees who have skill of chef and who has assigned a duty.<br>4. Display shift wise employee details.<br>5. Update payrate of employees to 20000 whose skill is waiter.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Bill (billno, day, tableno, total)<br>Menu (dish_no, dish_desc, price)<br>The relationship between Bill and Menu is Many to Many with quantity as descriptive attribute.<br>Constraint: Primary key, price should be > 0.<br>Consider the above tables and execute the following queries:<br>1. Display the tableno whose dish_desc is “Veg”.<br>2. Display the special menu of Monday.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display receipt which includes bill_no with Dish description, price, quantity and total amount of each menu.<br>2. Find total amount collected by hotel on date 09/07/2019.<br>3. Count number of menus of billno 301.<br>4. Display menu details having price between 100 and 500.<br>5. Display the tableno and day whose bill amount is zero.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Movies (M_name, release_year, budget)<br>Actor (A_name, role, charges, A_address)<br>Producer (producer_id, name, P_address)<br>Relationship:- Each actor has acted in one or more movie. Each producer has produced many movies but each movie can be produced by more than one producers. Each movie has one or more actors acting in it, in different roles.<br>Constraint: Primary key, release_year > 2000, A_address and P_address should not be same.<br>Consider the above tables and execute the following queries:<br>1. List the names of movies with the highest budget.<br>2. Display the details of producer who have produced more than one movie in a year.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. List the names of movies with the second highest budget.<br>2. List the names of actors who have acted in the maximum number of movies.<br>3. List the names of movies, produced by more than one producer.<br>4. List the names of actors who are given with the maximum charges for their movie.<br>5. List the names of actors who have acted in at least one movie, in which ‘Akshay’ has acted.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Driver (driver_id, driver_name, address)<br>Car (license_no, model, year)<br>Relation between Driver and Car is Many to Many with date and time as descriptive attribute.<br>Constraint: Primary key, driver_name should not be null.<br>Consider the above tables and execute the following queries:<br>1. Display the name of driver whose license no is “DPU123”.<br>2. Delete the details of car whose model is “swift”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display details of all persons who are driving ‘Alto’ car.<br>2. Update model of car to “SUV300” whose manufactured year is 2019.<br>3. Display car details manufactured before year 2000.<br>4. In which day ‘Mr. Ram’ drives maximum number of cars.<br>5. Display total number of drivers who drives car in each year.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Student (stud_reg_no, stud_name, class)<br>Competition (cno, cname, ctype)<br>Relation between Student and Competition is Many to Many with rank and year as descriptive attribute.<br>Constraint: Primary key, class must be (“FY”, “SY”, “TY”).<br>Consider the above tables and execute the following queries:<br>1. Count total no students class wise.<br>2. Delete the details of student who has participated in “Mehandi” competition.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display students from class 'FY’ and participated in 'E-Rangoli' Competition.<br>2. Find the number of students for programming competition.<br>3. Display the names of first three winners of each competition.<br>4. Display average number of students participating in each competition.<br>5. Display total number of competitions held in the year 2014.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Plan (plan_no, plan_name, nooffreecalls, freecalltime, fix_amt)<br>Customer (cust_no, cust_name, mobile_no)<br>Relation between Plan and Customer is One to Many.<br>Constraint: Primary key, fix_amt should be greater than 0.<br>Consider the above tables and execute the following queries:<br>1. Display the details of plan who has taken by “Mr. Patil”.<br>2. Update the mobile No of customer to 7020079536 whose name is “Mr Roy” and plan is “Go Max”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display the plan having minimum response.<br>2. Display customer details starting their mobile number with 98.<br>3. Display the customer details that are getting less number of free calls than that of the plan ‘Let’s Rock’.<br>4. Delete the details of ‘John’ who has stopped ‘Go Max’ plan.<br>5. Find the plan whose fixed amount is greater than 5000.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Employee (emp_id, emp_name, address)<br>Investment (inv_no, inv_name, inv_date, inv_amount)<br>Relation between Employee and Investment is One to Many.<br>Constraint: Primary key, inv_amount should be > 0.<br>Consider the above tables and execute the following queries:<br>1. Display the details of employee who has invested amount in “Mutual Fund”.<br>2. Add column Phone_No in Employee table.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display employee details who have invested more than 100000.<br>2. Display employee wise total investment amount.<br>3. Display the employee names who invest on date 2nd Jan 2013.<br>4. Display employee whose investment are more than 3.<br>5. Find average investment of employees of Pune.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Politicians (pno, pname, telephone_no)<br>Party (party_code, party_name)<br>Relation between Politicians and Party is Many to One.<br>Constraint: Primary key, party_name should not be null.<br>Consider the above tables and execute the following queries:<br>1. Display the name of party whose politician is “Mr. Patil”.<br>2. Update party name of politician whose name is “Mr. Pawar”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display party names in ascending order.<br>2. Find the party who is having less number of members than ‘Congress’ party.<br>3. Display party wise politician name with details.<br>4. Display the party name with the details of politicians whose name include “Rao”.<br>5. Which party has maximum politicians.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Game (game_name, no_of_players, coach_name)<br>Player (pid, pname, address, club_name)<br>Relation between Game and Player is Many to Many.<br>Constraint: Primary key, no_of_players should be > 0.<br>Consider the above tables and execute the following queries:<br>1. Display the name of club whose coach is “Mr. Sehwag”.<br>2. Update the game name of player to cricket whose name is “Mr Rahane”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display players from ‘Delhi’.<br>2. List all games which require more than 4 players.<br>3. Find the total number of cricket players of 'sports club’.<br>4. Display games having more number of players than that of football.<br>5. Display coach wise player details.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Item (item_no, item_name, quantity)<br>Suppliers (sup_no, sup_name, address, city, phone_no)<br>Relation between Item and Supplier is Many to Many with rate and discount as descriptive attribute.<br>Constraint: Primary key, phone_no must be 10 digits.<br>Consider the above tables and execute the following queries:<br>1. Display item wise quantity.<br>2. Display Suppliers whose names are starting with ‘s’ character.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Delete items having quantity less than 2.<br>2. Display total number of suppliers who are supplying ‘Refrigerator’.<br>3. Display all suppliers supplying ‘Washing Machine’ with minimum cost.<br>4. Give supplier details who give maximum discount on each item.<br>5. List suppliers supplying maximum number of item.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Wholesaler (w_no, w_name, address, city)<br>Product (product_no, product_name, rate)<br>Relation between Wholesaler and Product is Many to Many with quantity as descriptive attribute.<br>Constraint: Primary key, rate should be > 0.<br>Consider the above tables and execute the following queries:<br>1. Update product_name to “Monitor” whose supplier is “Mr. Patil”.<br>2. Display product wise rate.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display wholesaler from 'Pune' city and supplying 'Monitor'.<br>2. Display total number of wholesaler of each product.<br>3. Display all wholesalers who are supplying ‘Keyboard’ with maximum price.<br>4. Display total quantity of each product sold by ‘Mr. Khabia’.<br>5. Decrement rate of all products by 5% supplied by wholesaler from 'Pune' city.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Client (client_no, client_name, address, birthdate)<br>Policy_info (policy_no, desc, maturity_amt, prem_amt, date)<br>Relation between Client and Policy_info is Many to Many<br>Constraint: Primary key, prem_amt and maturity_amt should be > 0.<br>Consider the above tables and execute the following queries:<br>1. Display premium amount paid by “Mr. Mahandule” since 1 Jan 2018.<br>2. Display the details of client who have taken policy “Jeevan Raksha”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display Policy details having maturity amount >500000.<br>2. Find total number of policies purchased on 12th January 2019.<br>3. Find clients who have more than 3 policies.<br>4. Find all policies whose number of clients is same as that of policy ‘Jeevan Raksha’.<br>5. Display policy wise client details.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Train (train_no, train_name, depart_time, arrival_time, source_stn, dest_stn)<br>Passenger (p_id, p_name, address, age, gender)<br>Relation between Train and Passenger is Many to Many with seat_no, amount and date as descriptive attribute.<br>Constraint: Primary key, seat_no should not be null.<br>Consider the above tables and execute the following queries:<br>1. Display passenger names and their seat no’s of train “Sahyadri Express”.<br>2. Display details of train in which “Mr. Roy” is travelling from “Pune” to “Uruli Kanchan”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display passenger details having age>50.<br>2. Display total amount collected for “Kokan Express” on 5th January 2019.<br>3. Find total number of passengers of “Pune to Mumbai” route.<br>4. Cancel all the trains of 21st January 2019.<br>5. Calculate total number of male passengers in “Shatabdi Express”.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Student (rno, sname, address, class)<br>Subject (subno, subname)<br>Relationship: - Student and Subject are related with many-to-many relationship with attribute marks and status.<br>Constraints: - Primary Key, class must be fy, sy, ty.<br>Consider the above tables and execute the following queries:<br>1. List the names of students class wise.<br>2. Display the marks of students subject wise.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. List the distinct names of students who have either Electronics, or Statistics or both subjects.<br>2. List the names of students who are either passed or failed.<br>3. List the students who have “Database” subject and they are not in “TY” class.<br>4. List the names of students who are not failed in any subject.<br>5. List the names of students not staying at “Uruli Kanchan”.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Bus (bus_no, capacity, depo_name)<br>Route (route_no, source, destination, no_of_stations)<br>Relation between Bus and Route is Many to One.<br>Constraint: Bus capacity should be greater than 0, depo_name should not be null.<br>Consider the above tables and execute the following queries:<br>1. List all buses at depo “Kothrud”.<br>2. Delete bus details whose number is “MH12HL7812”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. List all buses on route no 41.<br>2. List the route details having number of stations > 10.<br>3. Delete all buses having capacity < 20.<br>4. Find the maximum number of stations.<br>5. List all routes starting from “station”.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>College (code, college_name, address)<br>Teacher (teacher_id, teacher_name, Qualification, specialization, salary, Desg)<br>Relation between Teacher and College is Many to One.<br>Constraint: Primary Key, qualification should not be null.<br>Consider the above tables and execute the following queries:<br>1. List the name of staff having qualification is “SET-NET”.<br>2. Update the salary of teacher to 50000 whose qualification is “PhD”.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. List the college wise staff.<br>2. Display the details of Teachers who are working in Dr. D Y Patil College and their specialization is “Computer”.<br>3. Display the designation of teacher whose name is “Mr Patil” and he is working in DPU college.<br>4. Display teacher wise salary.<br>5. Update an address of college to “Sant Tukaram Nagar” whose name is “MD College”.",
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Gym (Name, city, charges, scheme)<br>Member (ID, Name, phoneNo, address)<br>Relation between Gym and member is one to many.<br>Constraint: Primary Key, charges must be greater than 0.<br>Consider the above tables and execute the following queries:<br>1. Display the scheme details of “Gold Gym”.<br>2. List out all the gym of “Pimpri” city.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Give the details of scheme to which “Mr. Patil” is admitted.<br>2. List out gym wise members.<br>3. List out scheme wise charges.<br>4. Display all the members from Pune city who have paid Gym charges more than 10000.<br>5. Drop column address from Member table.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Student (rollno, sname, class, timetable)<br>Lab (LabNo, LabName, capacity, equipment)<br>Relation between Student and Lab is Many to One.<br>Constraint: Primary Key, capacity should not be null.<br>Consider the above tables and execute the following queries:<br>1. Add column Phone_No with data type int in Student table.<br>2. Display lab wise capacity.",
            marks: 25,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display practical time table of class ‘FYBBA(CA)’.<br>2. Display the LabName in which ‘Mr Advait’ is doing practical.<br>3. List out class wise students.<br>4. Delete the column equipment from Lab table.<br>5. Update capacity of Lab to 100 whose Number is 1.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Blood (blood_id, blood_group, cholesterol_level, storage)<br>Donar (donar_id, name, address, gender, phone_no)<br>Relation between Blood and Donar is Many to one.<br>Constraint: Primary Key , Blood_group should not be null.<br>Consider the above tables and execute the following queries:<br>1. List out Donar wise Blood_group.<br>2. Display cholesterol_level of blood which is given by ‘Mr. Mahandule’.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display the stock of blood whose group is “O+ve”.<br>2. Delete gender column from Donar table.<br>3. Update storage of blood to 100 bottles whose blood_group is “B+ve”.<br>4. Display blood group having maximum storage.<br>5. Display the details of donar in ascending order of donar_name.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Country (CId, CName , no_of_states, area, location, population)<br>Citizen (Id, Name, mother_toung, state_name)<br>Relation between Country and Citizen is one to many.<br>Constraint: Primary key, area should not be null.<br>Consider the above tables and execute the following queries:<br>1. List out country wise number of states.<br>2. Display the name of country having minimum population.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display citizens whose mother_tounge is ‘marathi’.<br>2. Update the population of India to 10000000.<br>3. Display citizen details in descending order by state_name.<br>4. Display country details having population more than 1000000.<br>5. Display Country details where ‘Ms Reshma’ is staying.",
            marks: 25,
          },
        ],
      },

      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: "Consider the following entities and their relationships. Create a RDB in 3 NF with appropriate data types and Constraints.<br>Library (Lno, Lname, Location, Librarian, no_of_books)<br>Book (Bid, Bname, Author_Name, Price, publication)<br>Relation between Library and Book is one to many.<br>Constraint: Primary key, Price should not be null.<br>Consider the above tables and execute the following queries:<br>1. Display library details having number of books greater than 10000.<br>2. Display the list of books of ‘BPB’ publication.",
            marks: 15,
          },
          {
            questionId: 2,
            text: "Consider the above tables and execute the following queries:<br>1. Display publication wise number of books.<br>2. Display total price of books of ‘Nirali’ publication.<br>3. Delete the book details of Vision publication from ‘DPU’ Library.<br>4. Display all books of author whose initial character of name is ‘A’.<br>5. Update number of books of success publication to 1000 from DYP library.",
            marks: 25,
          },
        ],
      },
    ],
    language: "sql",
  },
];
