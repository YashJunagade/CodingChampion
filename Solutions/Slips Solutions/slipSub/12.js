export const Python = {
  subject: 'Python',
  slips: [
    {
      slipId: 1,
      questions: [
        {
          questionId: 1,
          text: `Write a Python program to accept n numbers in list and remove duplicates from a list. `,
          marks: 15,
          sol: `# Read input numbers
numbers = list(map(int, input("Enter numbers separated by spaces: ").split()))

# Remove duplicates
unique_numbers = list(set(numbers))

# Print result
print("List after removing duplicates:", unique_numbers)
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program to take accept your birthdate and output your age when a button is pressed.`,
          marks: 25,
          sol: `import tkinter as tk
from tkinter import messagebox
from datetime import datetime

def calculate_age():
 try:
  birthdate = datetime.strptime(entry.get(), "%Y-%m-%d")
  today = datetime.today()
  age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
  messagebox.showinfo("Age", f"Your age is {age} years old.")
 except ValueError:
  messagebox.showerror("Invalid Input", "Enter date in YYYY-MM-DD format.")

# Create the main window
root = tk.Tk()
root.title("Age Calculator")

# Create and place widgets
tk.Label(root, text="Enter your birthdate (YYYY-MM-DD):").pack(pady=10)
entry = tk.Entry(root)
entry.pack(pady=5)
tk.Button(root, text="Calculate Age", command=calculate_age).pack(pady=20)

# Start the GUI event loop
root.mainloop()

`,
        },
      ],
    },
    {
      slipId: 2,
      questions: [
        {
          questionId: 1,
          text: `Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters. <br> Sample String: 'The quick Brown Fox' <br/> Expected Output: <br> No. of Upper case characters: 3 <br/> No. of Lower case characters: 13 `,
          marks: 15,
          sol: `def count_case(s):
 upper_count = sum(1 for char in s if char.isupper())
 lower_count = sum(1 for char in s if char.islower())
 print(f"No. of Upper case characters: {upper_count}")
 print(f"No. of Lower case characters: {lower_count}")

# Example usage
sample_string = 'The quick Brown Fox'
count_case(sample_string)
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program to create a digital clock with Tkinter to display the time.`,
          marks: 25,
          sol: `import tkinter as tk
from time import strftime

def update_time():
 time_string = strftime('%H:%M:%S %p')
 label.config(text=time_string)
 label.after(1000, update_time)  # Update the time every 1000ms (1 second)

# Create the main window
root = tk.Tk()
root.title("Digital Clock")

# Create and place the label widget
label = tk.Label(root, font=('calibri', 40, 'bold'), background='black', foreground='white')
label.pack(anchor='center')

# Start the time update loop
update_time()

# Start the GUI event loop
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 3,
      questions: [
        {
          questionId: 1,
          text: `Write a Python program to check if a given key already exists in a dictionary. If key exists replace with another key/value pair.`,
          marks: 15,
          sol: `def update_dict(d, old_key, new_key, new_value):
 if old_key in d:
  del d[old_key]  # Remove the old key
 d[new_key] = new_value  # Add the new key/value pair

# Example usage
my_dict = {'a': 1, 'b': 2, 'c': 3}
print("Original dictionary:", my_dict)

update_dict(my_dict, 'b', 'd', 4)
print("Updated dictionary:", my_dict)
`,
        },
        {
          questionId: 2,
          text: `Write a python script to define a class student having members roll no, name, age, gender. Create a subclass called Test with member marks of 3 subjects. Create three objects of the Test class and display all the details of the student with total marks.`,
          marks: 25,
          sol: `class Student:
 def __init__(self, roll_no, name, age, gender):
  self.roll_no = roll_no
  self.name = name
  self.age = age
  self.gender = gender

class Test(Student):
 def __init__(self, roll_no, name, age, gender, marks1, marks2, marks3):
  super().__init__(roll_no, name, age, gender)
  self.marks1 = marks1
  self.marks2 = marks2
  self.marks3 = marks3

 def total_marks(self):
  return self.marks1 + self.marks2 + self.marks3

 def display(self):
  print(f"Roll No: {self.roll_no}")
  print(f"Name: {self.name}")
  print(f"Age: {self.age}")
  print(f"Gender: {self.gender}")
  print(f"Marks: {self.marks1}, {self.marks2}, {self.marks3}")
  print(f"Total Marks: {self.total_marks()}")

# Creating objects of the Test class
student1 = Test('001', 'Yash', 20, 'F', 85, 90, 88)
student2 = Test('002', 'Dipak', 21, 'M', 78, 82, 79)
student3 = Test('003', 'Tony', 22, 'M', 92, 94, 89)

# Displaying details of all students
print("Student 1 Details:")
student1.display()
print("\nStudent 2 Details:")
student2.display()
print("\nStudent 3 Details:")
student3.display()
`,
        },
      ],
    },
    {
      slipId: 4,
      questions: [
        {
          questionId: 1,
          text: `Write Python GUI program to create background with changing colors `,
          marks: 15,
          sol: `import tkinter as tk
import random

def change_color():
 colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink']
 new_color = random.choice(colors)
 root.config(bg=new_color)
 root.after(1000, change_color)  # Change color every 1000ms (1 second)

# Create the main window
root = tk.Tk()
root.title("Color Changing Background")

# Set initial color and start color change loop
change_color()

# Start the GUI event loop
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Define a class Employee having members id, name, department, salary. Create a subclass called manager with member bonus. Define methods accept and display in
 both the classes. Create n objects of the manager class and display the details of the manager having the maximum total salary (salary+bonus).`,
          marks: 25,
          sol: `class Employee:
 def __init__(self, id, name, department, salary):
  self.id = id
  self.name = name
  self.department = department
  self.salary = salary

 def accept(self):
  self.id = input("Enter ID: ")
  self.name = input("Enter Name: ")
  self.department = input("Enter Department: ")
  self.salary = float(input("Enter Salary: "))

 def display(self):
  print(f"ID: {self.id}")
  print(f"Name: {self.name}")
  print(f"Department: {self.department}")
  print(f"Salary: {self.salary}")

class Manager(Employee):
 def __init__(self, id, name, department, salary, bonus):
  super().__init__(id, name, department, salary)
  self.bonus = bonus

 def accept(self):
  super().accept()
  self.bonus = float(input("Enter Bonus: "))

 def display(self):
  super().display()
  print(f"Bonus: {self.bonus}")
  print(f"Total Salary (Salary + Bonus): {self.total_salary()}")

 def total_salary(self):
  return self.salary + self.bonus

# Function to find and display the manager with the maximum total salary
def find_max_salary_manager(managers):
 max_manager = max(managers, key=lambda m: m.total_salary())
 print("\nManager with the Maximum Total Salary:")
 max_manager.display()

# Creating and accepting manager objects
n = int(input("Enter number of managers: "))
managers = []

for _ in range(n):
  print("\nEnter details for manager:")
  manager = Manager('', '', '', 0, 0)
  manager.accept()
  managers.append(manager)

# Finding and displaying the manager with the maximum total salary
find_max_salary_manager(managers)
`,
        },
      ],
    },
    {
      slipId: 5,
      questions: [
        {
          questionId: 1,
          text: 'Write a Python script using class, which has two methods get_String and print_String. get_String accept a string from the user and print_String print the string in upper case',
          marks: 15,
          sol: `class StringManipulator:
 def __init__(self):
  self.text = ""

 def get_String(self):
  self.text = input("Enter a string: ")

 def print_String(self):
  print(self.text.upper())

# Create an instance of StringManipulator
string_manipulator = StringManipulator()

# Accept a string from the user
string_manipulator.get_String()

# Print the string in uppercase
string_manipulator.print_String()
`,
        },
        {
          questionId: 2,
          text: `Write a python script to generate Fibonacci terms using generator function.`,
          marks: 25,
          sol: `def fibonacci_generator():
 a, b = 0, 1
 while True:
  yield a
  a, b = b, a + b

# Create a generator object
fib_gen = fibonacci_generator()

# Number of Fibonacci terms to generate
n = int(input("Enter the number of Fibonacci terms to generate: "))

# Generate and print Fibonacci terms
for _ in range(n):
  print(next(fib_gen))
`,
        },
      ],
    },
    {
      slipId: 6,
      questions: [
        {
          questionId: 1,
          text: `Write python script using package to calculate area and volume of cube and sphere`,
          marks: 15,
          sol: `#create package
import math

def cube_area(side_length):
 return 6 * (side_length ** 2)

def cube_volume(side_length):
 return side_length ** 3

def sphere_area(radius):
 return 4 * math.pi * (radius ** 2)

def sphere_volume(radius):
 return (4/3) * math.pi * (radius ** 3)

#main.py

from geometry.shapes import cube_area, cube_volume, sphere_area, sphere_volume

def main():
 # Cube
 side_length = float(input("Enter the side length of the cube: "))
 print(f"Cube Area: {cube_area(side_length)}")
 print(f"Cube Volume: {cube_volume(side_length)}")

 # Sphere
 radius = float(input("Enter the radius of the sphere: "))
 print(f"Sphere Surface Area: {sphere_area(radius)}")
 print(f"Sphere Volume: {sphere_volume(radius)}")

if __name__ == "__main__":
 main()
`,
        },
        {
          questionId: 2,
          text: `Write a Python GUI program to create a label and change the label font style (font name, bold, size). Specify separate check button for each style.`,
          marks: 25,
          sol: `import tkinter as tk
from tkinter import font

def update_font():
 font_name = font_name_var.get()
 font_size = font_size_var.get()
 is_bold = bold_var.get()
 
 # Construct the font style string
 font_style = (font_name, font_size, 'bold' if is_bold else 'normal')
 
 # Update the label font
 label.config(font=font_style)

# Create the main window
root = tk.Tk()
root.title("Font Style Changer")

# Variables for font settings
font_name_var = tk.StringVar(value='Arial')
font_size_var = tk.IntVar(value=12)
bold_var = tk.BooleanVar(value=False)

# Create and place widgets
label = tk.Label(root, text="Sample Text", font=('Arial', 12))
label.pack(pady=20)

# Font name options
font_names = ['Arial', 'Courier', 'Times New Roman']
tk.Label(root, text="Select Font:").pack()
for name in font_names:
  tk.Radiobutton(root, text=name, variable=font_name_var, value=name, command=update_font).pack()

# Font size options
tk.Label(root, text="Select Font Size:").pack()
font_size_options = [10, 12, 14, 16, 18, 20]
for size in font_size_options:
  tk.Radiobutton(root, text=str(size), variable=font_size_var, value=size, command=update_font).pack()

# Bold check button
tk.Checkbutton(root, text="Bold", variable=bold_var, command=update_font).pack()

# Start the GUI event loop
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 7,
      questions: [
        {
          questionId: 1,
          text: `Write Python class to perform addition of two complex numbers using binary + operator overloading.`,
          marks: 15,
          sol: `class ComplexNumber:
 def __init__(self, real, imag):
  self.real = real
  self.imag = imag

 def __add__(self, other):
  return ComplexNumber(self.real + other.real, self.imag + other.imag)

 def __repr__(self):
  return f"{self.real} + {self.imag}i"

# Example usage
c1 = ComplexNumber(3, 2)
c2 = ComplexNumber(1, 7)
result = c1 + c2
print(result)
`,
        },
        {
          questionId: 2,
          text: `Write python GUI program to generate a random password with upper and lower case letters. `,
          marks: 25,
          sol: `import tkinter as tk
import random
import string

def generate_password():
 length = int(length_entry.get())
 characters = string.ascii_letters
 password = ''.join(random.choice(characters) for _ in range(length))
 password_var.set(password)

# Create the main window
root = tk.Tk()
root.title("Password Generator")

# Create and place widgets
tk.Label(root, text="Password Length:").pack(pady=10)
length_entry = tk.Entry(root)
length_entry.pack(pady=5)

tk.Button(root, text="Generate Password", command=generate_password).pack(pady=10)

password_var = tk.StringVar()
tk.Entry(root, textvariable=password_var, state='readonly', width=40).pack(pady=10)

# Start the GUI event loop
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 8,
      questions: [
        {
          questionId: 1,
          text: `Write a python script to find the repeated items of a tuple`,
          marks: 15,
          sol: `def find_repeated_items(t):
 from collections import Counter
 counts = Counter(t)
 repeated = [item for item, count in counts.items() if count > 1]
 return repeated

# Example usage
t = (1, 2, 3, 2, 4, 5, 1, 6, 7, 1)
repeated_items = find_repeated_items(t)
print("Repeated items:", repeated_items)
`,
        },
        {
          questionId: 2,
          text: `Write a Python class which has two methods get_String and print_String. get_String accept a string from the user and print_String print the string in upper case. Further modify the program to reverse a string word by word and print it in lower case.`,
          marks: 25,
          sol: `class StringManipulator:
 def __init__(self):
  self.text = ""

 def get_String(self):
  self.text = input("Enter a string: ")

 def print_String(self):
  print(self.text.upper())

 def reverse_words(self):
  words = self.text.split()
  reversed_words = ' '.join(reversed(words))
  print(reversed_words.lower())

# Example usage
manipulator = StringManipulator()

# Get a string from the user
manipulator.get_String()

# Print the string in uppercase
manipulator.print_String()

# Print the reversed words in lowercase
manipulator.reverse_words()
`,
        },
      ],
    },
    {
      slipId: 9,
      questions: [
        {
          questionId: 1,
          text: `Write a Python script using class to reverse a string word by word `,
          marks: 15,
          sol: `class StringReverser:
 def __init__(self, text=""):
  self.text = text

 def set_text(self, text):
  self.text = text

 def reverse_words(self):
  words = self.text.split()
  reversed_words = ' '.join(reversed(words))
  return reversed_words

# Example usage
reverser = StringReverser()

# Input a string
input_text = input("Enter a string: ")
reverser.set_text(input_text)

# Reverse the string word by word and print it
reversed_text = reverser.reverse_words()
print("Reversed string:", reversed_text)
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program to accept a number n and check whether it is Prime, Perfect or Armstrong number or not. Specify three radio buttons.`,
          marks: 25,
          sol: `import tkinter as tk
from tkinter import messagebox

def is_prime(n):
 if n <= 1:
  return False
 for i in range(2, int(n**0.5) + 1):
  if n % i == 0:
   return False
 return True

def is_perfect(n):
 return n == sum(i for i in range(1, n) if n % i == 0)

def is_armstrong(n):
 digits = [int(d) for d in str(n)]
 power = len(digits)
 return n == sum(d ** power for d in digits)

def check_number():
 try:
  n = int(entry.get())
 except ValueError:
  messagebox.showerror("Input Error", "Please enter a valid integer.")
  return

 if var.get() == 'Prime':
  result = is_prime(n)
  message = f"{n} is {'a Prime number' if result else 'not a Prime number'}."
 elif var.get() == 'Perfect':
  result = is_perfect(n)
  message = f"{n} is {'a Perfect number' if result else 'not a Perfect number'}."
 elif var.get() == 'Armstrong':
  result = is_armstrong(n)
  message = f"{n} is {'an Armstrong number' if result else 'not an Armstrong number'}."
 else:
  message = "Please select a number type to check."
 
 messagebox.showinfo("Result", message)

# Create the main window
root = tk.Tk()
root.title("Number Checker")

# Create and place widgets
tk.Label(root, text="Enter a number:").pack(pady=10)
entry = tk.Entry(root)
entry.pack(pady=5)

var = tk.StringVar(value='Prime')
tk.Radiobutton(root, text="Prime", variable=var, value='Prime').pack()
tk.Radiobutton(root, text="Perfect", variable=var, value='Perfect').pack()
tk.Radiobutton(root, text="Armstrong", variable=var, value='Armstrong').pack()

tk.Button(root, text="Check", command=check_number).pack(pady=20)

# Start the GUI event loop
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 10,
      questions: [
        {
          questionId: 1,
          text: `Write Python GUI program to display an alert message when a button is pressed.`,
          marks: 15,
          sol: `import tkinter as tk
from tkinter import messagebox

def show_alert():
 messagebox.showinfo("Alert", "Button was pressed!")

# Create the main window
root = tk.Tk()
root.title("Alert Example")

# Create and place a button
button = tk.Button(root, text="Press Me", command=show_alert)
button.pack(pady=20)

# Start the GUI event loop
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Write a Python class to find validity of a string of parentheses, '(', ')', '{', '}', '[' ']’. These brackets must be close in the correct order. for example "()" and "()[]{}" are valid but "[)", "({[)]" and "{{{" are invalid. `,
          marks: 25,
          sol: `class ParenthesesValidator:
 def __init__(self, string):
  self.string = string

 def is_valid(self):
  stack = []
  mapping = {')': '(', '}': '{', ']': '['}

  for char in self.string:
   if char in mapping.values():
    stack.append(char)
   elif char in mapping.keys():
    if stack == [] or mapping[char] != stack.pop():
     return False
  return stack == []

# Example usage
validator = ParenthesesValidator("({[]})")
print("Valid" if validator.is_valid() else "Invalid")

validator = ParenthesesValidator("({[)]}")
print("Valid" if validator.is_valid() else "Invalid")
`,
        },
      ],
    },
    {
      slipId: 11,
      questions: [
        {
          questionId: 1,
          text: `Write a Python program to compute element-wise sum of given tuples. Original lists: (1, 2, 3, 4) (3, 5, 2, 1) (2, 2, 3, 1) Element-wise sum of the said tuples: (6, 9, 8, 6)`,
          marks: 15,
          sol: `# Given tuples
t1 = (1, 2, 3, 4)
t2 = (3, 5, 2, 1)
t3 = (2, 2, 3, 1)

# Compute element-wise sum
result = tuple(a + b + c for a, b, c in zip(t1, t2, t3))

# Output result
print("Element-wise sum:", result)
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program to add menu bar with name of colors as options to change the background color as per selection from menu option. `,
          marks: 25,
          sol: `import tkinter as tk

def change_bg(color):
 root.config(bg=color)

# Create the main window
root = tk.Tk()
root.title("Background Color Changer")
root.geometry("300x200")

# Create a menu bar
menu_bar = tk.Menu(root)

# Create a Color menu
color_menu = tk.Menu(menu_bar, tearoff=0)
color_menu.add_command(label="Red", command=lambda: change_bg("red"))
color_menu.add_command(label="Green", command=lambda: change_bg("green"))
color_menu.add_command(label="Blue", command=lambda: change_bg("blue"))
color_menu.add_command(label="Yellow", command=lambda: change_bg("yellow"))

# Add the Color menu to the menu bar
menu_bar.add_cascade(label="Colors", menu=color_menu)

# Configure the menu bar in the main window
root.config(menu=menu_bar)

# Start the GUI event loop
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 12,
      questions: [
        {
          questionId: 1,
          text: `Write a Python GUI program to create a label and change the label font style (font name, bold, size) using tkinter module`,
          marks: 15,
          sol: `import tkinter as tk
from tkinter import font

def update_font():
 selected_font = font_name_var.get()
 size = int(font_size_entry.get())
 weight = 'bold' if bold_var.get() else 'normal'
 label.config(font=(selected_font, size, weight))

# Create main window
root = tk.Tk()
root.title("Font Style Changer")
root.geometry("300x200")

# Variables for font settings
font_name_var = tk.StringVar(value="Arial")
bold_var = tk.BooleanVar()
font_size_var = tk.IntVar(value=12)

# Label to display
label = tk.Label(root, text="Sample Text", font=("Arial", 12))
label.pack(pady=10)

# Font name dropdown
font_name_label = tk.Label(root, text="Select Font:")
font_name_label.pack()
font_name_menu = tk.OptionMenu(root, font_name_var, "Arial", "Courier", "Times New Roman", "Helvetica")
font_name_menu.pack()

# Font size entry
font_size_label = tk.Label(root, text="Enter Font Size:")
font_size_label.pack()
font_size_entry = tk.Entry(root)
font_size_entry.pack()
font_size_entry.insert(0, "12")

# Bold check button
bold_check = tk.Checkbutton(root, text="Bold", variable=bold_var, command=update_font)
bold_check.pack()

# Update button to apply changes
update_button = tk.Button(root, text="Update Font", command=update_font)
update_button.pack(pady=10)

# Start the GUI event loop
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Write a python program to count repeated characters in a string.<br> Sample string: 'thequickbrownfoxjumpsoverthelazydog' <br> Expected output: o-4, e-3, u-2, h-2, r-2, t-2 `,
          marks: 25,
          sol: `from collections import Counter

def count_repeated_chars(s):
 counter = Counter(s)
 repeated_chars = {char: count for char, count in counter.items() if count > 1}
 return repeated_chars

# Sample string
s = 'thequickbrownfoxjumpsoverthelazydog'

# Get repeated characters
result = count_repeated_chars(s)

# Display the output
for char, count in result.items():
 print(f"{char}-{count}")
`,
        },
      ],
    },
    {
      slipId: 13,
      questions: [
        {
          questionId: 1,
          text: `Write a Python program to input a positive integer. Display correct message for correct and incorrect input. (Use Exception Handling)`,
          marks: 15,
          sol: `while True:
 try:
  num = int(input("Enter a positive integer: "))
  if num <= 0:
   raise ValueError
  print(f"Correct input! You entered: {num}")
  break
 except ValueError:
  print("Incorrect input. Please enter a positive integer.")
`,
        },
        {
          questionId: 2,
          text: `Write a program to implement the concept of queue using list.`,
          marks: 25,
          sol: `class Queue:
 def __init__(self):
  self.items = []

 def is_empty(self):
  return len(self.items) == 0

 def enqueue(self, item):
  self.items.append(item)

 def dequeue(self):
  if not self.is_empty():
   return self.items.pop(0)
  else:
   return "Queue is empty"

 def front(self):
  if not self.is_empty():
   return self.items[0]
  else:
   return "Queue is empty"

 def size(self):
  return len(self.items)

# Example usage
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print("Queue:", queue.items)
print("Front item:", queue.front())
print("Dequeue:", queue.dequeue())
print("Queue after dequeue:", queue.items)
print("Queue size:", queue.size())
`,
        },
      ],
    },
    {
      slipId: 14,
      questions: [
        {
          questionId: 1,
          text: `Write a Python GUI program to accept dimensions of a cylinder and display the surface area and volume of cylinder.`,
          marks: 15,
          sol: `import tkinter as tk
from tkinter import ttk
import math

def calculate():
 try:
  radius = float(radius_entry.get())
  height = float(height_entry.get())
  surface_area = 2 * math.pi * radius * (radius + height)
  volume = math.pi * radius**2 * height
  surface_area_label.config(text=f"Surface Area: {surface_area:.2f}")
  volume_label.config(text=f"Volume: {volume:.2f}")
 except ValueError:
  surface_area_label.config(text="Invalid input")
  volume_label.config(text="Invalid input")

# Set up the main window
root = tk.Tk()
root.title("Cylinder Calculator")

# Create and place the widgets
ttk.Label(root, text="Radius:").grid(row=0, column=0, padx=10, pady=10)
radius_entry = ttk.Entry(root)
radius_entry.grid(row=0, column=1, padx=10, pady=10)

ttk.Label(root, text="Height:").grid(row=1, column=0, padx=10, pady=10)
height_entry = ttk.Entry(root)
height_entry.grid(row=1, column=1, padx=10, pady=10)

calculate_button = ttk.Button(root, text="Calculate", command=calculate)
calculate_button.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

surface_area_label = ttk.Label(root, text="Surface Area:")
surface_area_label.grid(row=3, column=0, columnspan=2, padx=10, pady=10)

volume_label = ttk.Label(root, text="Volume:")
volume_label.grid(row=4, column=0, columnspan=2, padx=10, pady=10)

# Run the application
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Write a Python program to display plain text and cipher text using a Caesar encryption`,
          marks: 25,
          sol: `def caesar_encrypt(text, shift):
 encrypted_text = ""
 for char in text:
  if char.isalpha():
   shift_amount = shift % 26
   if char.islower():
    start = ord('a')
    encrypted_char = chr(start + (ord(char) - start + shift_amount) % 26)
   elif char.isupper():
    start = ord('A')
    encrypted_char = chr(start + (ord(char) - start + shift_amount) % 26)
   encrypted_text += encrypted_char
  else:
   encrypted_text += char
 return encrypted_text

def main():
 plain_text = input("Enter the plain text: ")
 shift = int(input("Enter the shift value: "))
 
 cipher_text = caesar_encrypt(plain_text, shift)
 
 print(f"Plain text: {plain_text}")
 print(f"Cipher text: {cipher_text}")

if __name__ == "__main__":
 main()
`,
        },
      ],
    },
    {
      slipId: 15,
      questions: [
        {
          questionId: 1,
          text: `Write a Python class named Student with two attributes student_name, marks. Modify the attribute values of the said class and print the original and modified values of the said attributes.`,
          marks: 15,
          sol: `class Student:
 def __init__(self, student_name, marks):
  self.student_name = student_name
  self.marks = marks

 def modify_attributes(self, new_name, new_marks):
  self.student_name = new_name
  self.marks = new_marks

 def print_attributes(self):
  print(f"Student Name: {self.student_name}")
  print(f"Marks: {self.marks}")

# Create a Student object
student = Student("John Doe", 85)

# Print original values
print("Original values:")
student.print_attributes()

# Modify attributes
student.modify_attributes("Jane Smith", 92)

# Print modified values
print("\nModified values:")
student.print_attributes()
`,
        },
        {
          questionId: 2,
          text: `Write a python program to accept string and remove the characters which have odd index values of given string using user defined function.`,
          marks: 25,
          sol: `def remove_odd_index_chars(s):
 # Remove characters at odd indices
 return ''.join(char for index, char in enumerate(s) if index % 2 == 0)

def main():
 user_input = input("Enter a string: ")
 result = remove_odd_index_chars(user_input)
 print(f"Modified string: {result}")

if __name__ == "__main__":
 main()
`,
        },
      ],
    },
    {
      slipId: 16,
      questions: [
        {
          questionId: 1,
          text: `Write a python script to create a class Rectangle with data member’s length, width and methods area, perimeter which can compute the area and perimeter of rectangle. `,
          marks: 15,
          sol: `class Rectangle:
 def __init__(self, length, width):
  self.length = length
  self.width = width

 def area(self):
  return self.length * self.width

 def perimeter(self):
  return 2 * (self.length + self.width)

# Example usage
rect = Rectangle(5, 3)
print(f"Area: {rect.area()}")
print(f"Perimeter: {rect.perimeter()}")
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program to add items in listbox widget and to print and delete the selected items from listbox on button click. Provide three separate buttons to add, print and delete.`,
          marks: 25,
          sol: `import tkinter as tk
from tkinter import messagebox

def add_item():
 item = entry.get()
 if item:
  listbox.insert(tk.END, item)
  entry.delete(0, tk.END)
 else:
  messagebox.showwarning("Warning", "Please enter an item.")

def print_selected():
 selected = listbox.curselection()
 if selected:
  item = listbox.get(selected[0])
  messagebox.showinfo("Selected Item", f"Selected item: {item}")
 else:
  messagebox.showwarning("Warning", "No item selected.")

def delete_selected():
 selected = listbox.curselection()
 if selected:
  listbox.delete(selected[0])
 else:
  messagebox.showwarning("Warning", "No item selected.")

# Set up the main window
root = tk.Tk()
root.title("Listbox Manager")

# Create and place the widgets
entry = tk.Entry(root)
entry.pack(pady=10)

tk.Button(root, text="Add Item", command=add_item).pack(pady=5)
tk.Button(root, text="Print Selected", command=print_selected).pack(pady=5)
tk.Button(root, text="Delete Selected", command=delete_selected).pack(pady=5)

listbox = tk.Listbox(root)
listbox.pack(pady=10)

# Run the application
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 17,
      questions: [
        {
          questionId: 1,
          text: `Write Python GUI program that takes input string and change letter to upper case when a button is pressed.`,
          marks: 15,
          sol: `import tkinter as tk

def convert_to_uppercase():
 input_text = entry.get()
 result_label.config(text=f"Uppercase Text: {input_text.upper()}")

# Set up the main window
root = tk.Tk()
root.title("Uppercase Converter")

# Create and place the widgets
tk.Label(root, text="Enter text:").pack(pady=10)

entry = tk.Entry(root, width=40)
entry.pack(pady=10)

convert_button = tk.Button(root, text="Convert to Uppercase", command=convert_to_uppercase)
convert_button.pack(pady=10)

result_label = tk.Label(root, text="Uppercase Text: ")
result_label.pack(pady=10)

# Run the application
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Define a class Date (Day, Month, Year) with functions to accept and display it. Accept date from user. Throw user defined exception “invalid Date Exception” if the date is invalid. `,
          marks: 25,
          sol: `class InvalidDateException(Exception):
 pass

class Date:
 def __init__(self):
  self.day = 0
  self.month = 0
  self.year = 0

 def accept(self):
  self.day = int(input("Enter day: "))
  self.month = int(input("Enter month: "))
  self.year = int(input("Enter year: "))
  if not self.is_valid():
   raise InvalidDateException("Invalid Date")

 def display(self):
  print(f"Date: {self.day:02d}/{self.month:02d}/{self.year}")

 def is_valid(self):
  if self.year < 1 or self.month < 1 or self.month > 12 or self.day < 1 or self.day > 31:
   return False
  if self.month in [4, 6, 9, 11] and self.day > 30:
   return False
  if self.month == 2:
   if (self.year % 4 == 0 and self.year % 100 != 0) or (self.year % 400 == 0):
    return self.day <= 29
   return self.day <= 28
  return True

# Example usage
try:
 date = Date()
 date.accept()
 date.display()
except InvalidDateException as e:
 print(f"Error: {e}")
except ValueError:
 print("Error: Please enter valid integers for day, month, and year.")
`,
        },
      ],
    },
    {
      slipId: 18,
      questions: [
        {
          questionId: 1,
          text: `Create a list a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] and write a python program that prints out all the elements of the list that are less than 5`,
          marks: 15,
          sol: `a = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

# Print elements less than 5
print([x for x in a if x < 5])
`,
        },
        {
          questionId: 2,
          text: `Write a python script to define the class person having members name, address. Create a subclass called Employee with members staffed salary. Create 'n' objects of the Employee class and display all the details of the employee.`,
          marks: 25,
          sol: `class Person:
 def __init__(self, name, address):
  self.name = name
  self.address = address

class Employee(Person):
 def __init__(self, name, address, staff_id, salary):
  super().__init__(name, address)
  self.staff_id = staff_id
  self.salary = salary

 def display(self):
  print(f"Name: {self.name}")
  print(f"Address: {self.address}")
  print(f"Staff ID: {self.staff_id}")
  print(f"Salary: {self.salary}")
  print()

# Number of employees
n = int(input("Enter the number of employees: "))

employees = []
for _ in range(n):
  name = input("Enter name: ")
  address = input("Enter address: ")
  staff_id = input("Enter staff ID: ")
  salary = float(input("Enter salary: "))
  emp = Employee(name, address, staff_id, salary)
  employees.append(emp)

# Display all employee details
for emp in employees:
 emp.display()
`,
        },
      ],
    },
    {
      slipId: 19,
      questions: [
        {
          questionId: 1,
          text: `Write a Python GUI program to accept a number form user and display its multiplication table on button click. `,
          marks: 15,
          sol: `import tkinter as tk

def display_table():
 num = int(entry.get())
 result_text = "\n".join(f"{num} x {i} = {num * i}" for i in range(1, 11))
 result_label.config(text=result_text)

# Set up the main window
root = tk.Tk()
root.title("Multiplication Table")

# Create and place the widgets
tk.Label(root, text="Enter a number:").pack(pady=10)

entry = tk.Entry(root)
entry.pack(pady=10)

tk.Button(root, text="Show Table", command=display_table).pack(pady=10)

result_label = tk.Label(root, text="")
result_label.pack(pady=10)

# Run the application
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Define a class named Shape and its subclass(Square/ Circle). The subclass has an init function which takes an argument (Lenght/redious). Both classes should have methods to calculate area and volume of a given shape. `,
          marks: 25,
          sol: `import math

class Shape:
 def area(self):
  raise NotImplementedError("Subclass must implement this method")

 def volume(self):
  raise NotImplementedError("Subclass must implement this method")

class Square(Shape):
 def __init__(self, length):
  self.length = length

 def area(self):
  return self.length ** 2

 def volume(self):
  return "Volume not applicable for 2D shape"

class Circle(Shape):
 def __init__(self, radius):
  self.radius = radius

 def area(self):
  return math.pi * self.radius ** 2

 def volume(self):
  return "Volume not applicable for 2D shape"

# Example usage
square = Square(4)
circle = Circle(3)

print(f"Square Area: {square.area()}")
print(f"Square Volume: {square.volume()}")

print(f"Circle Area: {circle.area()}")
print(f"Circle Volume: {circle.volume()}")
`,
        },
      ],
    },
    {
      slipId: 20,
      questions: [
        {
          questionId: 1,
          text: `Write a python program to create a class Circle and Compute the Area and the circumferences of the circle.(use parameterized constructor)`,
          marks: 15,
          sol: `import math

class Circle:
 def __init__(self, radius):
  self.radius = radius

 def area(self):
  return math.pi * (self.radius ** 2)

 def circumference(self):
  return 2 * math.pi * self.radius

# Example usage
radius = float(input("Enter the radius of the circle: "))
circle = Circle(radius)

print(f"Area of the circle: {circle.area()}")
print(f"Circumference of the circle: {circle.circumference()}")
`,
        },
        {
          questionId: 2,
          text: `Write a Python script to generate and print a dictionary which contains a number (between 1 and n) in the form(x,x*x). <br> Sample Dictionary (n=5) Expected Output: {1:1, 2:4, 3:9, 4:16, 5:25}`,
          marks: 25,
          sol: `def generate_square_dict(n):
 return {x: x * x for x in range(1, n + 1)}

# Example usage
n = 5
square_dict = generate_square_dict(n)
print(square_dict)
`,
        },
      ],
    },
    {
      slipId: 21,
      questions: [
        {
          questionId: 1,
          text: `Define a class named Rectangle which can be constructed by a length and width. The Rectangle class has a method which can compute the area and Perimeter.`,
          marks: 15,
          sol: `class Rectangle:
 def __init__(self, length, width):
  self.length = length
  self.width = width

 def area(self):
  return self.length * self.width

 def perimeter(self):
  return 2 * (self.length + self.width)

# Example usage
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

rectangle = Rectangle(length, width)

print(f"Area of the rectangle: {rectangle.area()}")
print(f"Perimeter of the rectangle: {rectangle.perimeter()}")
`,
        },
        {
          questionId: 2,
          text: `Write a Python program to convert a tuple of string values to a tuple of integer values. <br>  Original tuple values: (('333', '33'), ('1416', '55'))<br>  New tuple values: ((333, 33), (1416, 55))`,
          marks: 25,
          sol: `# Original tuple of string values
original_tuple = (('333', '33'), ('1416', '55'))

# Convert tuple of string values to tuple of integer values
converted_tuple = tuple(tuple(int(x) for x in sub_tuple) for sub_tuple in original_tuple)

print("Original tuple values:", original_tuple)
print("New tuple values:", converted_tuple)
`,
        },
      ],
    },
    {
      slipId: 22,
      questions: [
        {
          questionId: 1,
          text: `Write a python class to accept a string and number n from user and display n repetition of strings by overloading * operator.`,
          marks: 15,
          sol: `class Repeater:
 def __init__(self, text):
  self.text = text

 def __mul__(self, n):
  if isinstance(n, int) and n > 0:
   return self.text * n
  else:
   raise ValueError("Multiplier must be a positive integer")

# Example usage
text = input("Enter a string: ")
n = int(input("Enter a number: "))

repeater = Repeater(text)

try:
 result = repeater * n
 print("Repeated string:", result)
except ValueError as e:
 print(e)
`,
        },
        {
          questionId: 2,
          text: `Write a python script to implement bubble sort using list `,
          marks: 25,
          sol: `def bubble_sort(arr):
 n = len(arr)
 for i in range(n):
  # Track if any swaps were made in this pass
  swapped = False
  # Perform the bubble sort pass
  for j in range(0, n - i - 1):
   if arr[j] > arr[j + 1]:
    # Swap if elements are in the wrong order
    arr[j], arr[j + 1] = arr[j + 1], arr[j]
    swapped = True
  # If no elements were swapped, the list is sorted
  if not swapped:
   break

# Example usage
arr = [64, 34, 25, 12, 22, 11, 90]
print("Original list:", arr)
bubble_sort(arr)
print("Sorted list:", arr)
`,
        },
      ],
    },
    {
      slipId: 23,
      questions: [
        {
          questionId: 1,
          text: `Write a Python GUI program to create a label and change the label font style (font name, bold, size) using tkinter module`,
          marks: 15,
          sol: `import tkinter as tk
from tkinter import font

def change_font():
 # Define the new font style
 new_font = font.Font(family="Helvetica", size=16, weight="bold")
 label.config(font=new_font)

# Set up the main window
root = tk.Tk()
root.title("Change Font Style")

# Create and place the label
label = tk.Label(root, text="Sample Text", font=("Arial", 12))
label.pack(pady=20)

# Create and place the button
button = tk.Button(root, text="Change Font", command=change_font)
button.pack(pady=20)

# Run the application
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Create a class circles having members radius. Use operator overloading to add the radius of two circle objects. Also display the area of circle.`,
          marks: 25,
          sol: `import math

class Circle:
 def __init__(self, radius):
  self.radius = radius

 def __add__(self, other):
  if isinstance(other, Circle):
   return Circle(self.radius + other.radius)
  return NotImplemented

 def area(self):
  return math.pi * (self.radius ** 2)

 def __str__(self):
  return f"Circle with radius {self.radius:.2f} and area {self.area():.2f}"

# Example usage
circle1 = Circle(5)
circle2 = Circle(3)

# Add the radii of the two circles
circle3 = circle1 + circle2

print(circle1)
print(circle2)
print(circle3)
`,
        },
      ],
    },
    {
      slipId: 24,
      questions: [
        {
          questionId: 1,
          text: `Write a Python Program to Check if given number is prime or not. Also find factorial of the given no using user defined function.`,
          marks: 15,
          sol: `def is_prime(n):
 if n <= 1:
  return False
 for i in range(2, int(n**0.5) + 1):
  if n % i == 0:
   return False
 return True

def factorial(n):
 if n == 0:
  return 1
 result = 1
 for i in range(1, n + 1):
  result *= i
 return result

# Example usage
number = int(input("Enter a number: "))

if is_prime(number):
 print(f"{number} is a prime number.")
else:
 print(f"{number} is not a prime number.")

print(f"The factorial of {number} is {factorial(number)}.")
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program which accepts a number n to displays each digit of number in words.`,
          marks: 25,
          sol: `import tkinter as tk

# Function to convert digits to words
def digit_to_word(digit):
 words = {
  '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', 
  '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', 
  '8': 'Eight', '9': 'Nine'
 }
 return words.get(digit, '')

def display_digits_in_words():
 number = entry.get()
 words_list = [digit_to_word(digit) for digit in number if digit.isdigit()]
 result_label.config(text=' '.join(words_list))

# Set up the main window
root = tk.Tk()
root.title("Digit to Words Converter")

# Create and place the widgets
tk.Label(root, text="Enter a number:").pack(pady=10)

entry = tk.Entry(root)
entry.pack(pady=10)

tk.Button(root, text="Convert to Words", command=display_digits_in_words).pack(pady=10)

result_label = tk.Label(root, text="")
result_label.pack(pady=10)

# Run the application
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 25,
      questions: [
        {
          questionId: 1,
          text: `Write a Python function that accepts a string and calculate the number of upper case letters and lower case letters.<br>  Sample String : 'The quick Brow Fox'<br>  Expected Output :<br>  No. of Upper case characters : 3<br>  No. of Lower case Characters : 12 .`,
          marks: 15,
          sol: `def count_case_letters(s):
 upper_count = sum(1 for char in s if char.isupper())
 lower_count = sum(1 for char in s if char.islower())
 return upper_count, lower_count

# Example usage
sample_string = 'The quick Brow Fox'
upper_count, lower_count = count_case_letters(sample_string)

print(f"No. of Upper case characters: {upper_count}")
print(f"No. of Lower case characters: {lower_count}")
`,
        },
        {
          questionId: 2,
          text: 'Write a Python script to Create a Class which Performs Basic Calculator Operations.',
          marks: 25,
          sol: `class Calculator:
 def add(self, a, b):
  return a + b

 def subtract(self, a, b):
  return a - b

 def multiply(self, a, b):
  return a * b

 def divide(self, a, b):
  if b != 0:
   return a / b
  else:
   raise ValueError("Cannot divide by zero")

# Example usage
calc = Calculator()

# Input numbers
a = float(input("Enter the first number: "))
b = float(input("Enter the second number: "))

# Perform operations
print(f"Addition: {calc.add(a, b)}")
print(f"Subtraction: {calc.subtract(a, b)}")
print(f"Multiplication: {calc.multiply(a, b)}")
try:
 print(f"Division: {calc.divide(a, b)}")
except ValueError as e:
 print(e)
`,
        },
      ],
    },
    {
      slipId: 26,
      questions: [
        {
          questionId: 1,
          text: `Write an anonymous function to find area of square and rectangle.`,
          marks: 15,
          sol: `# Lambda function to find the area of a square
area_of_square = lambda side: side * side

# Lambda function to find the area of a rectangle
area_of_rectangle = lambda length, width: length * width

# Example usage
side = float(input("Enter the side length of the square: "))
length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

print(f"Area of the square: {area_of_square(side)}")
print(f"Area of the rectangle: {area_of_rectangle(length, width)}")
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program which accepts a sentence from the user and alters it when a button is pressed. Every space should be replaced by *, case of all alphabets should be reversed, digits are replaced by?.`,
          marks: 25,
          sol: `import tkinter as tk

def alter_sentence():
 # Get the input sentence
 sentence = entry.get()
 # Create a new altered sentence
 altered = []
 for char in sentence:
  if char.isdigit():
   altered.append('?')
  elif char.isalpha():
   altered.append(char.upper() if char.islower() else char.lower())
  elif char.isspace():
   altered.append('*')
  else:
   altered.append(char)
 # Update the result label with the altered sentence
 result_label.config(text=''.join(altered))

# Set up the main window
root = tk.Tk()
root.title("Alter Sentence")

# Create and place the widgets
tk.Label(root, text="Enter a sentence:").pack(pady=10)

entry = tk.Entry(root, width=50)
entry.pack(pady=10)

tk.Button(root, text="Alter Sentence", command=alter_sentence).pack(pady=10)

result_label = tk.Label(root, text="", wraplength=400)
result_label.pack(pady=10)

# Run the application
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 27,
      questions: [
        {
          questionId: 1,
          text: `Write a Python program to unzip a list of tuples into individual lists. `,
          marks: 15,
          sol: `def unzip_tuples(list_of_tuples):
 # Use zip with unpacking to unzip the list of tuples
 return list(zip(*list_of_tuples))

# Example usage
list_of_tuples = [(1, 'a', 3.5), (2, 'b', 4.6), (3, 'c', 5.7)]
unzipped = unzip_tuples(list_of_tuples)

# Convert the result to individual lists
list1, list2, list3 = unzipped

print("List 1:", list(list1))
print("List 2:", list(list2))
print("List 3:", list(list3))
`,
        },
        {
          questionId: 2,
          text: `Write Python GUI program to accept a decimal number and convert and display it to binary, octal and hexadecimal number`,
          marks: 25,
          sol: `import tkinter as tk

def convert_number():
 try:
  decimal_number = int(entry.get())
  binary_rep = bin(decimal_number)[2:]  # Convert to binary and remove '0b'
  octal_rep = oct(decimal_number)[2:]   # Convert to octal and remove '0o'
  hexadecimal_rep = hex(decimal_number)[2:].upper()  # Convert to hexadecimal and remove '0x'
  
  binary_label.config(text=f"Binary: {binary_rep}")
  octal_label.config(text=f"Octal: {octal_rep}")
  hexadecimal_label.config(text=f"Hexadecimal: {hexadecimal_rep}")
 except ValueError:
  binary_label.config(text="Invalid input. Please enter a valid decimal number.")
  octal_label.config(text="")
  hexadecimal_label.config(text="")

# Set up the main window
root = tk.Tk()
root.title("Number Converter")

# Create and place the widgets
tk.Label(root, text="Enter a decimal number:").pack(pady=10)

entry = tk.Entry(root)
entry.pack(pady=10)

tk.Button(root, text="Convert", command=convert_number).pack(pady=10)

binary_label = tk.Label(root, text="")
binary_label.pack(pady=5)

octal_label = tk.Label(root, text="")
octal_label.pack(pady=5)

hexadecimal_label = tk.Label(root, text="")
hexadecimal_label.pack(pady=5)

# Run the application
root.mainloop()
`,
        },
      ],
    },
    {
      slipId: 28,
      questions: [
        {
          questionId: 1,
          text: `Write a Python GUI program to create a list of Computer Science Courses using Tkinter module (use Listbox)`,
          marks: 15,
          sol: `import tkinter as tk

def create_course_list():
 # List of Computer Science courses
 courses = [
  "Introduction to Programming",
  "Data Structures and Algorithms",
  "Computer Networks",
  "Operating Systems",
  "Database Systems",
  "Software Engineering",
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Graphics",
  "Cybersecurity"
 ]
 
 # Populate the Listbox with courses
 for course in courses:
  listbox.insert(tk.END, course)

# Set up the main window
root = tk.Tk()
root.title("Computer Science Courses")

# Create and place the Listbox widget
listbox = tk.Listbox(root, width=50, height=10)
listbox.pack(pady=20)

# Create and populate the course list
create_course_list()

# Run the application
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Write a Python program to accept two lists and merge the two lists into list of tuple.`,
          marks: 25,
          sol: `def merge_lists_to_tuples(list1, list2):
 # Merge the two lists into a list of tuples
 return list(zip(list1, list2))

# Example usage
list1 = input("Enter the first list of elements separated by spaces: ").split()
list2 = input("Enter the second list of elements separated by spaces: ").split()

# Convert the input lists to tuples
merged_list = merge_lists_to_tuples(list1, list2)

print("Merged list of tuples:", merged_list)
`,
        },
      ],
    },
    {
      slipId: 29,
      questions: [
        {
          questionId: 1,
          text: `Write a Python GUI program to calculate volume of Sphere by accepting radius as input.`,
          marks: 15,
          sol: `import tkinter as tk
from tkinter import messagebox
import math

def calculate_volume():
 try:
  # Get the radius from the input
  radius = float(entry.get())
  # Calculate the volume of the sphere
  volume = (4/3) * math.pi * (radius ** 3)
  # Display the result
  result_label.config(text=f"Volume of the sphere: {volume:.2f}")
 except ValueError:
  # Handle invalid input
  messagebox.showerror("Invalid input", "Please enter a valid number.")

# Set up the main window
root = tk.Tk()
root.title("Sphere Volume Calculator")

# Create and place the widgets
tk.Label(root, text="Enter the radius of the sphere:").pack(pady=10)

entry = tk.Entry(root)
entry.pack(pady=10)

tk.Button(root, text="Calculate Volume", command=calculate_volume).pack(pady=10)

result_label = tk.Label(root, text="")
result_label.pack(pady=10)

# Run the application
root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Write a Python script to sort (ascending and descending) a dictionary by key and value`,
          marks: 25,
          sol: `def sort_by_key(d, reverse=False):
 return dict(sorted(d.items(), key=lambda item: item[0], reverse=reverse))

def sort_by_value(d, reverse=False):
 return dict(sorted(d.items(), key=lambda item: item[1], reverse=reverse))

# Example dictionary
my_dict = {'apple': 3, 'banana': 1, 'cherry': 2, 'date': 4}

# Sort by key (ascending and descending)
sorted_by_key_asc = sort_by_key(my_dict)
sorted_by_key_desc = sort_by_key(my_dict, reverse=True)

# Sort by value (ascending and descending)
sorted_by_value_asc = sort_by_value(my_dict)
sorted_by_value_desc = sort_by_value(my_dict, reverse=True)

print("Original dictionary:", my_dict)
print("Sorted by key (ascending):", sorted_by_key_asc)
print("Sorted by key (descending):", sorted_by_key_desc)
print("Sorted by value (ascending):", sorted_by_value_asc)
print("Sorted by value (descending):", sorted_by_value_desc)
`,
        },
      ],
    },
    {
      slipId: 30,
      questions: [
        {
          questionId: 1,
          text: `Write a Python GUI program to accept a string and a character from user and count the occurrences of a character in a string. `,
          marks: 15,
          sol: `import tkinter as tk
from tkinter import messagebox

def count_char():
 s = entry_string.get()
 c = entry_char.get()
 if len(c) != 1:
  messagebox.showerror("Error", "Enter exactly one character.")
  return
 count = s.count(c)
 result_label.config(text=f"Occurrences: {count}")

root = tk.Tk()
root.title("Character Counter")

tk.Label(root, text="String:").pack()
entry_string = tk.Entry(root)
entry_string.pack()

tk.Label(root, text="Character:").pack()
entry_char = tk.Entry(root, width=5)
entry_char.pack()

tk.Button(root, text="Count", command=count_char).pack()
result_label = tk.Label(root, text="")
result_label.pack()

root.mainloop()
`,
        },
        {
          questionId: 2,
          text: `Python Program to Create a Class in which One Method Accepts a String from the User and Another method Prints it. Define a class named Country which has a method called print Nationality. Define subclass named state from Country which has a mehtod called printState. Write a method to print state, country and nationality. `,
          marks: 25,
          sol: `import tkinter as tk
from tkinter import messagebox

def count_char():
 s = entry_string.get()
 c = entry_char.get()
 if len(c) != 1:
  messagebox.showerror("Error", "Enter exactly one character.")
  return
 count = s.count(c)
 result_label.config(text=f"Occurrences: {count}")

root = tk.Tk()
root.title("Character Counter")

tk.Label(root, text="String:").pack()
entry_string = tk.Entry(root)
entry_string.pack()

tk.Label(root, text="Character:").pack()
entry_char = tk.Entry(root, width=5)
entry_char.pack()

tk.Button(root, text="Count", command=count_char).pack()
result_label = tk.Label(root, text="")
result_label.pack()

root.mainloop()
`,
        },
      ],
    },
  ],
  language: 'python',
}
