const mongodb = [
  {
    subject: 'MongoDB',
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
    language: 'json',
  },
];
