export const BigData = {
  subject: 'Big Data',
  slips: [
    {
      slipId: 1,
      questions: [
        {
          questionId: 1,
          text: `Write an R program to find the maximum and the minimum value of a given vector.`,
          marks: 25,
          sol: `# Define a vector\nmy_vector <- c(10, 5, 20, 15, 30, 25)\n\n# Find the maximum value\nmax_value <- max(my_vector)\n\n# Find the minimum value\nmin_value <- min(my_vector)\n\n# Print the results\ncat(\"Maximum value:\", max_value, \"\\n\")\ncat(\"Minimum value:\", min_value, \"\\n\")\n`,
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
          sol: `# Define a vector\nmy_vector <- c(10, 5, 20, 15, 30, 25)\n\n# Sort the vector in ascending order\nsorted_ascending <- sort(my_vector)\n\n# Sort the vector in descending order\nsorted_descending <- sort(my_vector, decreasing = TRUE)\n\n# Print the sorted vectors\ncat(\"Sorted in ascending order:\", sorted_ascending, \"\\n\")\ncat(\"Sorted in descending order:\", sorted_descending, \"\\n\")\n`,
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
          sol: `# Create two sample data frames\ndf1 <- data.frame(ID = c(1, 2, 3, 4, 5),\n                  Name = c(\"Yash\", \"Deva\", \"Mayra\", \"Shreya\", \"Tony\"))\n\ndf2 <- data.frame(ID = c(3, 4, 6, 7),\n                  Name = c(\"Mayra\", \"Shreya\", \"Aditi\", \"Gorkha\"))\n\n# Find elements in df1 that are not in df2\nelements <- df1[!(df1$ID %in% df2$ID), ]\n\n# Print the result\nprint(elements)\n`,
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
          sol: `# Define the input string\ninput_string <- \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\"\n\n# Extract the first 10 English letters in lower case\nans1 <- substr(input_string, 1, 10)\n\n# Extract the last 10 letters in upper case\nans2 <- substr(input_string, nchar(input_string) - 9, nchar(input_string))\n\n# Extract letters between 22nd to 24th letters in upper case\nans3 <- substr(input_string, 22, 24)\n\n# Print the results\ncat(\"First 10 English letters in lower case:\", ans1, \"\\n\")\ncat(\"Last 10 letters in upper case:\", ans2, \"\\n\")\ncat(\"Letters between 22nd to 24th in upper case:\", ans3, \"\\n\")\n`,
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
          sol: `# Define a vector\nmy_vector <- c(2, 4, 6, 8, 10)\n\n# Calculate the sum\nsum_result <- sum(my_vector)\n\n# Calculate the mean\nmean_result <- mean(my_vector)\n\n# Calculate the product\nproduct_result <- prod(my_vector)\n\n# Print the results\ncat(\"Sum:\", sum_result, \"\\n\")\ncat(\"Mean:\", mean_result, \"\\n\")\ncat(\"Product:\", product_result, \"\\n\")\n
`,
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
          sol: `# Create a vector of marks for five subjects\nmarks <- c(85, 92, 78, 89, 95)\n\n# Create a bar plot with reduced margins\npar(mar = c(1, 1, 1, 1))  # Adjust the margins as needed (bottom, left, top, right)\n\nbarplot(marks, names.arg = c(\"Subject 1\", \"Subject 2\", \"Subject 3\", \"Subject 4\", \"Subject 5\"),\n        main = \"Subject Marks\",\n        xlab = \"Subjects\",\n        ylab = \"Marks\",\n        col = \"red\",\n        border = \"black\",\n        ylim = c(0, 100))\n
`,
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
          sol: `# Create a data frame with employee details\nemployees <- data.frame(\n  EmployeeID = c(1, 2, 3, 4, 5),\n  Name = c(\"Gorkha\", \"Adi\", \"Maratha\", \"Loka\", \"Sharper\"),\n  Department = c(\"HR\", \"IT\", \"Finance\", \"Sales\", \"Marketing\"),\n  Salary = c(55000, 60000, 65000, 60000, 62000)\n)\n\n# Display the data frame in ascending order by employee names\nsorted_employees <- employees[order(employees$Name), ]\nprint(sorted_employees)\n
`,
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
          sol: `# Create two vectors\nvector1 <- c(\"Deva\", \"Loka\", \"Mayra\", \"shreya\", \"Aditi\")\nvector2 <- c(18, 30, 28, 32, 25)\n\n# Create a data frame using the vectors\nmy_data_frame <- data.frame(Name = vector1, Age = vector2)\n\n# Display duplicated elements\nduplicated_elements <- my_data_frame[duplicated(my_data_frame), ]\n\n# Display unique rows\nunique_rows <- my_data_frame[!duplicated(my_data_frame), ]\n\n# Print the results\ncat(\"Duplicated Elements:\\n\")\nprint(duplicated_elements)\n\ncat(\"\\nUnique Rows:\\n\")\nprint(unique_rows)\n
`,
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
          sol: `# Create a factor with some levels\nmy_factor <- factor(c(\"A\", \"B\", \"C\", \"A\", \"B\", \"C\"))\n\n# Display the original factor\ncat(\"Original Factor:\\n\")\nprint(my_factor)\n\n# Change the first level to \"X\"\nlevels(my_factor)[1] <- \"X\"\n\n# Display the modified factor\ncat(\"\\nModified Factor:\\n\")\nprint(my_factor)\n
`,
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
          sol: `# Create a list of cities\ncities <- list(\"Nashik\", \"Mumbai\", \"Pune\", \"Hydrabad\")\n\n# 1) Give names to the elements in the list\nnames(cities) <- c(\"City1\", \"City2\", \"City3\", \"City4\")\n\n# Display the list with names\ncat(\"List with Names:\\n\")\nprint(cities)\n\n# 2) Add an element at the end of the list\ncities[[\"City5\"]] <- \"Delhi\"\n\n# Display the updated list\ncat(\"\\nList with Added Element:\\n\")\nprint(cities)\n\n# 3) Remove the last element\ncities <- cities[-length(cities)]\n\n# Display the list after removing the last element\ncat(\"\\nList with Last Element Removed:\\n\")\nprint(cities)\n\n# 4) Update the 3rd Element\ncities[[\"City3\"]] <- \"New York\"\n\n# Display the list after updating the 3rd element\ncat(\"\\nList with 3rd Element Updated:\\n\")\nprint(cities)\n
`,
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
          sol: `# Create two vectors of different lengths\nvector1 <- c(1, 2, 3)\nvector2 <- c(4, 5, 6, 7)\n\n# Determine the common length (minimum length)\ncommon_length <- min(length(vector1), length(vector2))\n\n# Extract the common length from both vectors\nvector1 <- vector1[1:common_length]\nvector2 <- vector2[1:common_length]\n\n# Convert vectors to arrays\narray1 <- array(vector1, dim = c(common_length, 1))\narray2 <- array(vector2, dim = c(common_length, 1))\n\n# Perform addition and subtraction of arrays\naddition_result <- array1 + array2\nsubtraction_result <- array1 - array2\n\n# Print the results\ncat(\"Vector 1:\\n\")\nprint(array1)\n\ncat(\"\\nVector 2:\\n\")\nprint(array2)\n\ncat(\"\\nAddition Result:\\n\")\nprint(addition_result)\n\ncat(\"\\nSubtraction Result:\\n\")\nprint(subtraction_result)\n
`,
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
          sol: `# Function to calculate and print a multiplication table\ncalculateMultiplicationTable <- function(number) {\n  for (i in 1:10) {\n    result <- number * i\n    cat(number, \"x\", i, \"=\", result, \"\\n\")\n  }\n}\n\n# Specify the number and range\nnumber <- 5  # Change this to the desired number\n\n# Call the function to calculate and print the multiplication table\ncalculateMultiplicationTable(number)\n

`,
        },
      ],
    },
    {
      slipId: 13,
      questions: [
        {
          questionId: 1,
          text: `# Load the iris dataset\ndata(iris)\n\n# i) Create a variable "y" and attach the output attribute\ny <- iris$Species\n\n# ii) Create a barplot to breakdown the output attribute\nbarplot(table(y), main = \"Species Distribution\", xlab = \"Species\", ylab = \"Count\", col = \"lightblue\")\n\n# iii) Create a density plot matrix for each attribute by class value\npar(mfrow = c(1, 1))  # Reset the layout\npairs(iris[, 1:4], pch = 19, col = as.integer(y), main = \"Density Plot Matrix by Species\")\n
`,
        },
      ],
    },
    {
      slipId: 14,
      questions: [
        {
          questionId: 1,
          text: `# Create two factors\nfactor1 <- factor(c(\"A\", \"B\", \"C\"))\nfactor2 <- factor(c(\"D\", \"E\", \"F\"))\n\n# Concatenate the factors\nfactors <- factor(c(factor1, factor2))\n\n# Display the concatenated factor in descending order\nsorted_factor <- factor(factors, levels = rev(levels(factors)))\nprint(sorted_factor)\n
`,
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
          sol: `# Create a factor from a random sample of LETTERS\nset.seed(123)  # For reproducibility\nrandom_factor <- factor(sample(LETTERS, 20, replace = TRUE))\n\n# Extract five levels from the factor\nsampled_levels <- levels(random_factor)[sample(length(levels(random_factor)), 5)]\n\n# Print the sampled levels\ncat(\"Sampled Levels:\\n\")\nprint(sampled_levels)\n
`,
        },
      ],
    },
    {
      slipId: 16,
      questions: [
        {
          questionId: 1,
          text: `# Function to calculate binary representation\ndecimalToBinary <- function(decimal) {\n  binary <- intToBits(decimal)\n  binary <- as.character(binary)\n  binary <- substr(binary, nchar(binary) - 31, nchar(binary))\n  return(binary)\n}\n\n# Input: Decimal number\ndecimal <- 42  # Change this to the desired decimal number\n\n# Calculate binary representation\nbinary <- decimalToBinary(decimal)\n\n# Print the binary representation\ncat(\"Decimal:\", decimal, \"\\n\")\ncat(\"Binary:\", binary, \"\\n\")\n
`,
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
          sol: `# Function to calculate binary representation\ndecimalToBinary <- function(decimal) {\n  binary <- intToBits(decimal)\n  binary <- as.character(binary)\n  binary <- substr(binary, nchar(binary) - 31, nchar(binary))\n  return(binary)\n}\n\n# Input: Decimal number\ndecimal <- 42  # Change this to the desired decimal number\n\n# Calculate binary representation\nbinary <- decimalToBinary(decimal)\n\n# Print the binary representation\ncat(\"Decimal:\", decimal, \"\\n\")\ncat(\"Binary:\", binary, \"\\n\")\n
`,
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
          sol: `# Create three vectors a, b, and c\na <- c(1, 2, 3)\nb <- c(4, 5, 6)\nc <- c(7, 8, 9)\n\n# Combine the vectors into a 3x3 matrix\nmatrix_result <- cbind(a, b, c)\n\n# Print the content of the matrix\ncat(\"Matrix:\\n\")\nprint(matrix_result)\n
`,
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
          sol: `# Create an empty plot with specified axes limits\nplot(NA, NA, xlim = c(0, 10), ylim = c(0, 20), xlab = "X-Axis", ylab = "Y-Axis")\ntitle("Empty Plot with Axes Limits")\n
`,
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
          sol: `# Load necessary library\nlibrary(ggplot2)\n\n# Load the dataset\ndf <- read.csv('wheater.csv')\n\n# i) Selecting using the column number\nfirst_column <- df[, 1]\n\n# ii) Selecting using the column name\ntemperature <- df$Temperature\n\n# iii) Make a scatter plot to compare Wind speed and temperature\nggplot(df, aes(x = WindSpeed, y = Temperature)) +\n  geom_point() +\n  labs(title = "Wind Speed vs Temperature", x = "Wind Speed", y = "Temperature")\n
`,
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
          sol: `# Load the built-in PlantGrowth dataset\ndata(PlantGrowth)\n\n# i) Create a variable y and attach to it the output attribute of the PlantGrowth dataset\ny <- PlantGrowth$group\n\n# ii) Create a barplot to break down your output attribute\nbarplot(table(y), \n        main = "Barplot of Plant Groups", \n        col = "lightblue", \n        ylab = "Count", \n        xlab = "Group")\n\n# iii) Create a density plot matrix for each attribute by class value\n# Load required package for lattice plotting\nlibrary(lattice)\n\n# Create density plot matrix for each attribute by class value\ndensityplot(~weight | group, \n            data = PlantGrowth, \n            main = "Density Plot Matrix", \n            layout = c(3, 1), \n            col = "lightgreen")
`,
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
          sol: `# Loop from 1 to 100\nfor (i in 1:100) {\n  output <- ""\n  \n  # Check if the number is a multiple of 3\n  if (i %% 3 == 0) {\n    output <- "SY"\n  }\n  \n  # Check if the number is a multiple of 5\n  if (i %% 5 == 0) {\n    output <- paste(output, "BBA", sep = "")\n  }\n  \n  # Print the number or the combined output\n  if (output == "") {\n    cat(i, "\\n")\n  } else {\n    cat(output, "\\n")\n  }\n}
`,
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
          sol: `# Create two vectors of different lengths\nvector1 <- c(1, 2, 3)\nvector2 <- c(4, 5, 6, 7)\n\n# Determine the common length (minimum length)\ncommon_length <- min(length(vector1), length(vector2))\n\n# Extract the common length from both vectors\nvector1 <- vector1[1:common_length]\nvector2 <- vector2[1:common_length]\n\n# Convert vectors to arrays\narray1 <- array(vector1, dim = c(common_length, 1))\narray2 <- array(vector2, dim = c(common_length, 1))\n\n# Combine the arrays into an array\ncombined_array <- array(c(array1, array2), dim = c(common_length, 2))\n\n# Print the second row of the second matrix\ncat("Second Row of the Second Matrix:\\n")\nprint(combined_array[2, 2])
`,
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
          sol: `# Create two vectors of different lengths\nvector1 <- c(1, 2, 3)\nvector2 <- c(4, 5, 6, 7)\n\n# Determine the common length (minimum length)\ncommon_length <- min(length(vector1), length(vector2))\n\n# Extract the common length from both vectors\nvector1 <- vector1[1:common_length]\nvector2 <- vector2[1:common_length]\n\n# Convert vectors to arrays\narray1 <- array(vector1, dim = c(common_length, 1))\narray2 <- array(vector2, dim = c(common_length, 1))\n\n# Calculate the multiplication of matrices\nmultiplication_result <- array1 %*% t(array2)\n\n# Print the multiplication result\ncat(\"Multiplication Result:\\n\")\nprint(multiplication_result)
`,
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
          sol: `# Create a list with vectors, matrices, and a function\nmy_list <- list(vector = c(1, 2, 3), matrix = matrix(1:6, nrow = 2), Myfunction = function(x) x * 2)\n\n# Print the content of the list\ncat(\"List Contents:\\n\")\nprint(my_list)
`,
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
          sol: `# Create a vector of values\nvalues <- c(1, 2, 3, 4, 5, 6)\n\n# Create a vector of dimensions\ndim_vector <- c(2, 3)\n\n# Create an array with dimensions\nmy_array <- array(values, dim = dim_vector)\n\n# Add names for dimensions\ndimnames(my_array) <- list(Rows = NULL, Columns = NULL)\n\n# Print the array\ncat(\"Array with Names for Dimensions:\\n\")\nprint(my_array)
`,
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
          sol: `# Input binary number as a character string\nbinary <- "1101"  # Replace this with the binary number you want to convert\n\n# Convert binary to decimal\ndecimal <- as.integer(binary, base = 2)\n\n# Print the decimal number\ncat(\"Binary:\", binary, \"\\n\")\ncat(\"Decimal:\", decimal, \"\\n\")
`,
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
          sol: `# Create a sample matrix\nmatrix_data <- matrix(1:9, nrow = 3)\n\n# Convert the matrix to a list\nlist_data <- as.list(matrix_data)\n\n# Print the list in ascending order\nsorted_list_data <- sort(unlist(list_data))\nprint(sorted_list_data)
`,
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
          sol: `# Create an empty list for students\nstudents <- list()\n\n# 1) Give names to the students in the list\nstudent_names <- c(\"Deva\", \"Yash\", \"Tony\", \"loka\")\nstudents <- append(students, student_names)\n\n# 2) Add a student at the end of the list\nnew_student <- \"Adi\"\nstudents <- append(students, new_student)\n\n# 3) Remove the first student\nstudents <- students[-1]\n\n# 4) Update the second last student\nif (length(students) >= 2) {\n  students[length(students) - 1] <- \"UpdatedStudent\"\n}\n\n# Print the updated list of students\nprint(students)
`,
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
          sol: `# Create a list of 10 strings\nstring_list <- c(\"apple\", \"banana\", \"cherry\", \"date\", \"fig\", \"grape\", \"kiwi\", \"lemon\", \"orange\", \"pear\")\n\n# Sort in ascending order\nsorted_asc <- sort(string_list)\ncat(\"Ascending order:\\n\")\ncat(sorted_asc, \"\\n\")\n\n# Sort in descending order\nsorted_desc <- sort(string_list, decreasing = TRUE)\ncat(\"\\nDescending order:\\n\")\ncat(sorted_desc, \"\\n\")
`,
        },
      ],
    },
  ],
  language: 'r',
}
