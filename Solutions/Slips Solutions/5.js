const bd = [
  {
    subject: "Big Data",
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to find the maximum and the minimum value of a given vector.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to sort a Vector in ascending and descending order.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to compare two data frames to find the elements in the first data frame that are not present in the second data frame.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to extract first 10 English letters in lower case and last 10 letters in upper case and extract letters between 22nd to 24th letters in upper case.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to find Sum, Mean, and Product of a Vector.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to create a simple bar plot of five subjects' marks.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to create a DataFrame which contains details of 5 employees and display the details in ascending order.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to create a data frame using two given vectors and display the duplicated elements and unique rows of the said data frame.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to change the first level of a factor with another level of a given factor.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: `Write a script in R to create a list of cities and perform the following:<br>1) Give names to the elements in the list.<br>2) Add an element at the end of the list.<br>3) Remove the last element.<br>4) Update the 3rd Element.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: `Write a script in R to create two vectors of different lengths and give these vectors as input to an array and print the addition and subtraction of those matrices.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: `Write an R Program to calculate a Multiplication Table.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: `Consider the inbuilt iris dataset:<br>i) Create a variable “y” and attach to it the output attribute of the “iris” dataset.<br>ii) Create a barplot to breakdown your output attribute.<br>iii) Create a density plot matrix for each attribute by class value.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to concatenate two given factors into a single factor and display it in descending order.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to extract five levels of a factor created from a random sample from the LETTERS.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: `Consider the inbuilt mtcars dataset:<br>i) Subset the vector, “mtcars[,1]“, for values greater than “15.0“.<br>ii) Subset “airquality” for “Ozone” greater than “28“, or “Temp” greater than “70“. Return the first five rows.<br>iii) Subset “airquality” for “Ozone” greater than “100“. Select the columns “Ozone“, “Temp“, “Month” and “Day” only.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: `Write an R Program to convert a Decimal number into Binary.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to create three vectors a, b, c with 3 integers each. Combine the three vectors into a 3×3 matrix where each column represents a vector. Print the content of the matrix.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to draw an empty plot and specify the axes limits of the graphic.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: `Consider the Weather dataset:<br>i) Select using the column number.<br>ii) Select using the column name.<br>iii) Make a scatter plot to compare Wind speed and temperature.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: `Consider the inbuilt plantGrowth dataset:<br>i) Create a variable “y” and attach to it the output attribute of the “plantGrowth” dataset.<br>ii) Create a barplot to break down your output attribute.<br>iii) Create a density plot matrix for each attribute by class value.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to print the numbers from 1 to 100 and print "SY" for multiples of 3, "BBA" for multiples of 5, and "SYBBA" for multiples of both.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: `Write a script in R to create two vectors of different lengths and give these vectors as input to an array. Print the second row of the second matrix of the array.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: `Write a script in R to create two vectors of different lengths and give these vectors as input to an array. Print the multiplication of those matrices.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to create a list of elements using vectors, matrices, and functions. Print the content of the list.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: `Write a script in R to create an array by passing in a vector of values and a vector of dimensions. Also, provide names for each dimension.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: `Write an R Program to convert a binary number into decimal.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to convert a given matrix to a list and print the list in ascending order.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: `Write a script in R to create a list of students and perform the following:<br>1) Give names to the students in the list.<br>2) Add a student at the end of the list.<br>3) Remove the first student.<br>4) Update the second last student.`,
            marks: 25,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: `Write an R program to sort a list of 10 strings in ascending and descending order.`,
            marks: 25,
          },
        ],
      },
    ],
    language: "r",
  },
];
