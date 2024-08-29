export const MongoDB = {
  subject: 'MongoDB',
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
                "Create a database in MongoDB called 'usermanaged', drop it, and create it again. Check which database you are currently in.",
            },
            {
              questionNo: 2,
              questionText:
                'Create a collection called \'customers\' in the \'usermanaged\' database created and insert the following document. Check if the document is inserted correctly:\n\n{ "firstName":"John",\n"lastName":"West",\n"email":"john.west@mail.com",\n"phone":"032345432134",\n"BusinessType": ["Sell", "Sugar", "Drinks"],\n"Reference":100,\n"Company":"Coca-Cola" }\n\nWrite a MongoDB query to display all the documents in the collection.',
            },
            {
              questionNo: 3,
              questionText:
                'Create a database named ‘tybbaca’. Create a collection named ‘Courses’ in it. This collection should contain a document. Inside this document, there should be a field named ‘name’ which contains another document with three fields (i.e., first, middle, last) and their respective values.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                "Create a database in MongoDB called 'myDatabase'. Create a collection 'student' in it. Use Bulk.insert() to insert at least 5 documents. Check if all the documents are inserted correctly.",
            },
            {
              questionNo: 2,
              questionText:
                'Create a collection to embed 2 address documents inside the user document like this: { "contact": <contact_info>, "dob": <date_of_birth>, "name": <name>, "address": [ <address1>, <address2> ] } that maintains all the related data in a single document.',
            },
            {
              questionNo: 3,
              questionText:
                "Write and run a MongoDB query to model the following tree using Parent References and store the reference to the parent category in the field 'parent'. Run a query to retrieve the descendants of a node 'Pune'.",
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                "Write and run a MongoDB query to create the following tree. For the above tree, query the 'parent' field to list the type of 'Electronics Gadgets'.\n\ni) Write and run MongoDB queries to create the tree structure with child references and ancestors.\n\nii) Write and run a MongoDB query to retrieve the children of 'Televisions' gadgets.\n\niii) Write and run a MongoDB query to find the parent node and siblings of 'Laptop'.",
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
                'Write and run MongoDB Query to create the \'products\' collection with the following documents:<br><br>[<br>{ "_id" : 1, "name" : "xPhone", "price" : 799, "releaseDate" : ISODate("2011-05-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 6.5, "cpu" : 2.66 }, "color" : [ "white", "black" ], "storage" : [ 64, 128, 256 ] },<br>{ "_id" : 2, "name" : "xTablet", "price" : 899, "releaseDate" : ISODate("2011-09-01T00:00:00Z"), "spec" : { "ram" : 16, "screen" : 9.5, "cpu" : 3.66 }, "color" : [ "white", "black", "purple" ], "storage" : [ 128, 256, 512 ] },<br>{ "_id" : 3, "name" : "SmartTablet", "price" : 899, "releaseDate" : ISODate("2015-01-14T00:00:00Z"), "spec" : { "ram" : 12, "screen" : 9.7, "cpu" : 3.66 }, "color" : [ "blue" ], "storage" : [ 16, 64, 128 ] },<br>{ "_id" : 4, "name" : "SmartPad", "price" : 699, "releaseDate" : ISODate("2020-05-14T00:00:00Z"), "spec" : { "ram" : 8, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256, 1024 ] },<br>{ "_id" : 5, "name" : "SmartPhone", "price" : 599, "releaseDate" : ISODate("2022-09-14T00:00:00Z"), "spec" : { "ram" : 4, "screen" : 9.7, "cpu" : 1.66 }, "color" : [ "white", "orange", "gold", "gray" ], "storage" : [ 128, 256 ] }<br>]<br>Select all documents where the price is less than 699 or greater than 799.',
            },
            {
              questionNo: 2,
              questionText:
                'For the above collection, find documents where:<br>i) the price field is not greater than 699.<br>ii) do not contain the price field.',
            },
            {
              questionNo: 3,
              questionText:
                'Create a collection named \'mycol\' in the database and insert 3 documents like:<br><br>{<br>title: "MongoDB Overview",<br>description: "MongoDB is no SQL database",<br>by: "M.Sc.(CA)",<br>url: " http://www.dypacs.com ",<br>tags: ["mongodb", "database", "NoSQL"],<br>likes: 100<br>},<br>{<br>title: "NoSQL Database",<br>description: "NoSQL database doesn\'t have tables",<br>by: "T.Y.B.C.A (Science)",<br>url: "http://www.dypacs.com",<br>tags: ["mongodb", "database", "NoSQL"],<br>likes: 20,<br>comments: [<br>{<br>user: "user1",<br>message: "My first comment",<br>dateCreated: new Date(2021-11-10),<br>like: 10<br>}<br>]<br>}',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                "Write a MongoDB query for the above collection to find all the tutorials written by ‘M. Sc. (CA)’ and whose title is 'MongoDB Overview'.",
            },
            {
              questionNo: 2,
              questionText:
                "Write a MongoDB query for the above collection to show the documents that have likes greater than 10 and whose title is either 'MongoDB Overview' or by is ‘T.Y.B.C.A (Science)’. ",
            },
            {
              questionNo: 3,
              questionText:
                "Write a MongoDB query to create a MongoDB 'posts' collection. Each post document has a title, author, and a comments array field. Each element of the comments array represents a user with some basic information like country, name, isGuest, and country. Insert at least 5 documents in it with your own data. Retrieve all posts where at least one comment is made by a user with the name John.",
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                "Write a MongoDB query to create the 'Employee' collection which has the field names of 'Employeeid' and 'EmployeeName'. Assume the following documents are in our collection:<br><br>Employee id | Employee Name<br>22 | NewMartin<br>2 | Mohan<br>3 | Sameer<br>4 | MohanR<br>100 | Saurabh<br>6 | Gurang<br><br>i) Find all Employee Names which have the characters ‘Sa’ in it.<br>ii) Display all documents in reversed sorted order.",
            },
            {
              questionNo: 2,
              questionText:
                'Create a collection \'projects\' with required fields and validation as below:<br><br>{<br>name: { bsonType: "string", description: "Project name is required field" },<br>status: { enum: ["inProgress", "Completed"], description: "Status can only be from one of the enum values" },<br>client: { bsonType: "object", required: ["name"], properties: {<br>name: { bsonType: "string", description: "Client name is required" },<br>phone: { bsonType: "string", maximum: 10, minimum: 8, description: "Phone number maximum should be 10 digits long" }<br>}<br>}<br>}<br>i) Try to insert values which violate the validation.<br>ii) Try to execute the above query with valid values.',
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
                'Consider a collection \'User\' which contains documents with the same structure like this one:<br><br>{<br>"_id" : ObjectId("57cc58333d496dc219c09c2c"),<br>"firstname" : "Ninad",<br>"lastname" : "Nikam",<br>"email" : "m.mustermann@example.com",<br>"password" : "d9729feb74992cc3482b350163a1a010",<br>"last_login" : "2015-01-07",<br>"note" : "Always pays in time, very good customer!",<br>"address" :<br>{<br>"country" : "India",<br>"street" : "Nagar Road",<br>"zip" : "62717"<br>}<br>}<br>1. Replace a single existing document entirely with other data.<br>2. Replace the document for the current firstname field that you have taken in your document.<br>3. Insert some other similar documents in it.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                "In the above collection:<br>1. Find the first document whose firstname field is equal to 'Ninad' and update the lastname field to 'Patil'.<br>2. Update multiple fields of a document.<br>3. Increase the zip code of a user by one.",
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'Consider the following document in the students collection whose grades element value is an array of embedded documents:<br><br>{<br>_id: 4,<br>grades: [<br>{ grade: 80, mean: 75, std: 8 },<br>{ grade: 85, mean: 90, std: 5 },<br>{ grade: 85, mean: 85, std: 8 }<br>]<br>}<br>1. Update the std field of the first array element that matches the grade equal to 85.<br>2. Delete the array element with grade 80.',
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
                "For the created database 'warehouse' containing a collection of products with multiple documents having fields {“product_id” : , “name”: , “brand”:, “type”: , “price”:, “warranty_years”:, “available”: “true”},<br>i) Check if the cursor object has more documents to return or not.<br>ii) Return the next document in a cursor.<br>iii) Insert a new document having, name = “Cable TV Basic Service Package”,<br>“type” : “tv”, “monthly_price” : 50, “term_years” : 2, “cancel_penalty” : 25,<br>“sales_tax” : “true”, “additional_tariffs” : [ { “kind” : “federal tariff”, “amount” : { “percent_of_service” : 0.06 } }, { “kind” : “misc. tariff”, “amount” : 2.25 } ]",
            },
            {
              questionNo: 2,
              questionText:
                'For the above created database:<br>i) Sort all the documents present in the products collection in ascending & descending order.<br>ii) Find how many documents are present in a collection.<br>iii) Display topmost or only 3 documents.',
            },
            {
              questionNo: 3,
              questionText:
                'For the above created database:<br>i) Display the result fetched by a cursor in a well-formatted way.<br>ii) Report on the query execution plan for a cursor.<br>iii) Display all documents by skipping the first.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                "For the created database 'warehouse' containing a collection of products display the product_id which are not available in the warehouse.",
            },
            {
              questionNo: 2,
              questionText:
                "Modify the availability of the product having name 'phone'.",
            },
            {
              questionNo: 3,
              questionText:
                'Replace the document with product_id 5 with a new document: {"name" : "Phone Extended Warranty", "type" : "warranty", "price" : 38, "warranty_years" : 2, "for" : [ "ac3", "ac7", "ac9", "qp7", "qp8", "qp9" ]}',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                "For the created database 'warehouse' containing a collection of products, remove the warranty of a particular product.",
            },
            {
              questionNo: 2,
              questionText:
                'Delete all documents from the collection where warranty_years is less than 2 years.',
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
                'For a collection \'people\' created in your database containing the following type of documents:<br>{<br>"_id": 1,<br>"person": { name: "John", surname: "Brown" },<br>"age": 34,<br>"city": "New York"<br>}<br>Define a single field index on the \'age\' field and also drop the created index.',
            },
            {
              questionNo: 2,
              questionText:
                "Define a multiple field index on the 'age' field for descending and 'city' field for ascending order.",
            },
            {
              questionNo: 3,
              questionText:
                'Write MongoDB queries that will use the index both for retrieving the documents and for sorting. Also, retrieve all the indexes in the collection.',
            },
          ],
        },
        {
          set: 2,
          questions: [
            {
              questionNo: 1,
              questionText:
                "In the collection created in your database you have the following data:<br>{<br>_id:<br>book_title: ,<br>description: ,<br>author:,<br>url:,<br>tags: ['mongodb', 'database', 'NoSQL'],<br>likes: 100<br>}<br>with multiple documents.<br>Display a list stating how many books are written by each author.",
            },
            {
              questionNo: 2,
              questionText:
                'Get the maximum likes of the corresponding values from all documents in the collection for each author.',
            },
            {
              questionNo: 3,
              questionText:
                'Calculate the average likes of all given values from all documents in the collection for each author.',
            },
          ],
        },
        {
          set: 3,
          questions: [
            {
              questionNo: 1,
              questionText:
                'For the above collection created in the database, use the map-reduce function to:<br>i) Find the total likes received by each author.<br>ii) Calculate the total likes received by authors except for the “Mongo DB” book.',
            },
          ],
        },
      ],
    },
  ],
  language: 'c',
};
