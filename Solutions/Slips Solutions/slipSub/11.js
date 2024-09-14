export const CoreJava = {
  subject: 'Core Java',
  slips: [
    {
      slipId: 1,
      questions: [
        {
          questionId: 1,
          text: `Write a ‘java’ program to display characters from ‘A’ to ‘Z’`,
          marks: 15,
          sol: `class Slip1A {
	public static void main(String args[]) {
		for (char c = 'A'; c <= 'Z'; c++) {
			System.out.print(c + " ");
		}
		System.out.println();
	}
}`,
        },
        {
          questionId: 2,
          text: `Write a ‘java’ program to copy only non-numeric data from one file to another file.`,
          marks: 25,
          sol: `import java.io.*;
import java.util.*;

public class Slip1b {
	public static void main(String[] args) {
		File inputFile = new File("input.txt");
		File outputFile = new File("output.txt");

		try {
			Scanner sc = new Scanner(inputFile);
			BufferedWriter writer = new BufferedWriter(new FileWriter(outputFile, true));

			while (sc.hasNextLine()) {
				String line = sc.nextLine();
				if (line.matches(".*\\d.*")) {
					continue;
				} else {
					writer.write(line);
					writer.newLine();
					System.out.println("Content Written: " + line);
				}
			}

			writer.close();
			sc.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
`,
        },
      ],
    },
    {
      slipId: 2,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to display all the vowels from a given string.`,
          marks: 15,
          sol: `import java.util.Scanner;
public class Slip2a {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a string: ");
		String inputString = scanner.nextLine();

		System.out.println("Vowels in the input string:");

		inputString = inputString.toLowerCase();

		for (int i = 0; i < inputString.length(); i++) {
			char ch = inputString.charAt(i);
			if (isVowel(ch)) {
				System.out.print(ch + " ");
			}
		}

		scanner.close();
	}

	public static boolean isVowel(char c) {
		return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
	}
}
`,
        },
        {
          questionId: 2,
          text: `Design a screen in Java to handle the Mouse Events such as MOUSE_MOVED and MOUSE_CLICK and 
             display the position of the Mouse_Click in a TextField`,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Slip2b {
	public static void main(String[] args) {
		EventQueue.invokeLater(() -> {
			JFrame frame = new JFrame("Mouse Events Demo");
			frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

			JTextField textField = new JTextField("Mouse Event Information");
			textField.setEditable(false);
			frame.add(textField, BorderLayout.SOUTH);

			JPanel panel = new JPanel();
			frame.add(panel, BorderLayout.CENTER);

			panel.addMouseListener(new MouseAdapter() {
				@Override
				public void mouseClicked(MouseEvent e) {
					int x = e.getX();
					int y = e.getY();
					textField.setText("Mouse Clicked at: (" + x + ", " + y + ")");
				}
			});

			frame.setSize(400, 400);
			frame.setVisible(true);
		});
	}
}
`,
        },
      ],
    },
    {
      slipId: 3,
      questions: [
        {
          questionId: 1,
          text: `Write a ‘java’ program to check whether given number is Armstrong or not. (Use static keyword)`,
          marks: 15,
          sol: `public class Slip3a {
	public static void main(String[] args) {
		int number = 153; // Change this to the number you want to check

		if (isArmstrong(number)) {
			System.out.println(number + " is an Armstrong number.");
		} else {
			System.out.println(number + " is not an Armstrong number.");
		}
	}

	// Function to check if a number is an Armstrong number
	public static boolean isArmstrong(int num) {
		int originalNumber = num;
		int numDigits = String.valueOf(num).length();
		int sum = 0;

		while (num > 0) {
			int digit = num % 10;
			sum += Math.pow(digit, numDigits);
			num /= 10;
		}

		return originalNumber == sum;
	}
}
`,
        },
        {
          questionId: 2,
          text: `Define an abstract class Shape with abstract methods area () and volume (). 
             Derive abstract class Shape into two classes Cone and Cylinder. 
             Write a java to calculate area and volume of Cone and Cylinder.(Use Super Keyword.)`,
          marks: 25,
          sol: `import java.util.Scanner;

abstract class Shape {
	double pi = Math.PI;
	abstract double area(double r, double h);
	abstract double volume(double r, double h);
}

class Cone extends Shape {
	@Override
	double area(double r, double h) {
		return pi * r * (r + Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2)));
	}

	@Override
	double volume(double r, double h) {
		return (1.0 / 3.0) * pi * Math.pow(r, 2) * h;
	}
}

class Cylinder extends Shape {
	@Override
	double area(double r, double h) {
		return 2 * pi * r * (r + h);
	}

	@Override
	double volume(double r, double h) {
		return pi * Math.pow(r, 2) * h;
	}
}

public class Slip3b {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Cone c = new Cone();
		Cylinder ci = new Cylinder();

		System.out.println("Enter Radius");
		double r = sc.nextDouble();
		System.out.println("Enter Height");
		double h = sc.nextDouble();

		System.out.println("Area of Cone is: " + c.area(r, h));
		System.out.println("Volume of Cone is: " + c.volume(r, h));
		System.out.println("Area of Cylinder is: " + ci.area(r, h));
		System.out.println("Volume of Cylinder is: " + ci.volume(r, h));

		sc.close();
	}
}
`,
        },
      ],
    },
    {
      slipId: 4,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to display alternate character from a given string`,
          marks: 15,
          sol: `import java.util.Scanner;
public class Slip4a {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a string: ");
		String inputString = scanner.nextLine();

		System.out.println("Alternate characters in the input string:");

		for (int i = 0; i < inputString.length(); i += 2) {
			char ch = inputString.charAt(i);
			System.out.print(ch);
		}

		scanner.close();
	}
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program using Applet to implement a simple arithmetic calculator`,
          marks: 25,
          sol: `import java.awt.*;
import java.awt.event.*;

class Calculator extends WindowAdapter implements ActionListener {
	Frame f;
	Label l1;
	Button b1, b2, b3, b4, b5, b6, b7, b8, b9, b0;
	Button badd, bsub, bmult, bdiv, bcalc, bclr;
	double num1, num2, ans, check;

	Calculator() {
		f = new Frame("CALCULATOR");
		// INSTANTIATING COMPONENTS
		l1 = new Label();
		l1.setBackground(Color.LIGHT_GRAY);
		l1.setBounds(50, 50, 260, 60);

		b1 = new Button("1");
		b1.setBounds(50, 270, 50, 50);
		b2 = new Button("2");
		b2.setBounds(120, 270, 50, 50);
		b3 = new Button("3");
		b3.setBounds(190, 270, 50, 50);
		b4 = new Button("4");
		b4.setBounds(50, 200, 50, 50);
		b5 = new Button("5");
		b5.setBounds(120, 200, 50, 50);
		b6 = new Button("6");
		b6.setBounds(190, 200, 50, 50);
		b7 = new Button("7");
		b7.setBounds(50, 130, 50, 50);
		b8 = new Button("8");
		b8.setBounds(120, 130, 50, 50);
		b9 = new Button("9");
		b9.setBounds(190, 130, 50, 50);
		b0 = new Button("0");
		b0.setBounds(120, 340, 50, 50);

		badd = new Button("+");
		badd.setBounds(260, 340, 50, 50);
		bsub = new Button("-");
		bsub.setBounds(260, 270, 50, 50);
		bmult = new Button("*");
		bmult.setBounds(260, 200, 50, 50);
		bdiv = new Button("/");
		bdiv.setBounds(260, 130, 50, 50);
		bcalc = new Button("=");
		bcalc.setBounds(245, 410, 65, 50);
		bclr = new Button("Clear");
		bclr.setBounds(120, 410, 80, 50);

		f.add(l1);
		f.add(b1);
		f.add(b2);
		f.add(b3);
		f.add(b4);
		f.add(b5);
		f.add(b6);
		f.add(b7);
		f.add(b8);
		f.add(b9);
		f.add(b0);
		f.add(badd);
		f.add(bsub);
		f.add(bmult);
		f.add(bdiv);
		f.add(bcalc);
		f.add(bclr);

		f.setSize(360, 500);
		f.setLayout(null);
		f.setVisible(true);

		b1.addActionListener(this);
		b2.addActionListener(this);
		b3.addActionListener(this);
		b4.addActionListener(this);
		b5.addActionListener(this);
		b6.addActionListener(this);
		b7.addActionListener(this);
		b8.addActionListener(this);
		b9.addActionListener(this);
		b0.addActionListener(this);

		badd.addActionListener(this);
		bsub.addActionListener(this);
		bmult.addActionListener(this);
		bdiv.addActionListener(this);
		bcalc.addActionListener(this);
		bclr.addActionListener(this);

		f.addWindowListener(this);
	}

	public void windowClosing(WindowEvent e) {
		f.dispose();
		System.exit(0);
	}

	public void actionPerformed(ActionEvent e) {
		String updateCh, labelCh;
		if (e.getSource() == b1) {
			labelCh = l1.getText();
			updateCh = labelCh + "1";
			l1.setText(updateCh);
		}
		if (e.getSource() == b2) {
			labelCh = l1.getText();
			updateCh = labelCh + "2";
			l1.setText(updateCh);
		}
		if (e.getSource() == b3) {
			labelCh = l1.getText();
			updateCh = labelCh + "3";
			l1.setText(updateCh);
		}
		if (e.getSource() == b4) {
			labelCh = l1.getText();
			updateCh = labelCh + "4";
			l1.setText(updateCh);
		}
		if (e.getSource() == b5) {
			labelCh = l1.getText();
			updateCh = labelCh + "5";
			l1.setText(updateCh);
		}
		if (e.getSource() == b6) {
			labelCh = l1.getText();
			updateCh = labelCh + "6";
			l1.setText(updateCh);
		}
		if (e.getSource() == b7) {
			labelCh = l1.getText();
			updateCh = labelCh + "7";
			l1.setText(updateCh);
		}
		if (e.getSource() == b8) {
			labelCh = l1.getText();
			updateCh = labelCh + "8";
			l1.setText(updateCh);
		}
		if (e.getSource() == b9) {
			labelCh = l1.getText();
			updateCh = labelCh + "9";
			l1.setText(updateCh);
		}
		if (e.getSource() == b0) {
			labelCh = l1.getText();
			updateCh = labelCh + "0";
			l1.setText(updateCh);
		}

		if (e.getSource() == badd || e.getSource() == bsub || e.getSource() == bmult || e.getSource() == bdiv) {
			num1 = Double.parseDouble(l1.getText());
			l1.setText("");   
			if (e.getSource() == badd) {
				check = 1;
			} else if (e.getSource() == bsub) {
				check = 2;
			} else if (e.getSource() == bmult) {
				check = 3;
			} else if (e.getSource() == bdiv) {
				check = 4;
			}
		}
		if (e.getSource() == bcalc) {
			try {
				num2 = Double.parseDouble(l1.getText());
			} catch (Exception f) {
				l1.setText("Enter the second number ");
				return;
			}
			if (check == 1)
				ans = num1 + num2;
			if (check == 2)
				ans = num1 - num2;
			if (check == 3)
				ans = num1 * num2;
			if (check == 4)
				ans = num1 / num2;
			l1.setText(String.valueOf(ans));
		}

		if (e.getSource() == bclr) {
			num1=0;
			num2=0;
			ans=0;
			check=0;
			l1.setText("");
		}
	}
}

public class Slip4b {
	public static void main(String[] args) {
		new Calculator();
	}
}
`,
        },
      ],
    },
    {
      slipId: 5,
      questions: [
        {
          questionId: 1,
          text: 'Write a java program to display following pattern: <br> 5 <br> 4 5<br> 3 4 5<br> 2 3 4 5<br> 1 2 3 4 5',
          marks: 15,
          sol: `public class Slip5a
{
	public static void main(String[] args)
	{
		int n = 5; // Number of rows

		// Loop through each row
		for (int i = 1; i <= n; i++)
		{
			// Loop to print numbers in each row
			for (int j = n - i + 1; j <= n; j++)
			{
				System.out.print(j + " ");
			}
			System.out.println(); // Move to the next line after each row
		}
	}
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to accept list of file names through command line. Delete the files having extension .txt. 
             Display name, location and size of remaining files`,
          marks: 25,
          sol: `import java.io.*;

public class Slip5b {
	public static void main(String[] args) {

		try {
			for (int i = 0; i < args.length; i++) {
				File file = new File(args[i]);
				if (args[i].endsWith(".txt")) {
					if (file.delete()) {
						System.out.println("File Type IS txt Deleted!: " + args[i]);
					}
				} else {
					System.out.println("File Name is: " + file.getName());
					System.out.println("File Loaction: " + file.getAbsolutePath());
					System.out.println("File Size in bytes: " + file.length());
				}
				System.err.println("");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
`,
        },
      ],
    },
    {
      slipId: 6,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to accept a number from user, if it zero then throw user defined Exception 
             “Number Is Zero”, otherwise calculate the sum of first and last digit of that number. (Use static keyword).`,
          marks: 15,
          sol: `import java.util.Scanner;

class NumberIsZeroException extends Exception
{
	public NumberIsZeroException(String message)
	{
		super(message);
	}
}

public class Slip6a
{
	public static void main(String[] args)
	{
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter a number: ");
		int number = scanner.nextInt();

		try
		{
			if (number == 0)
			{
				throw new NumberIsZeroException("Number Is Zero");
			}
			else
			{
				int sum = sumOfFirstAndLastDigit(number);
				System.out.println("Sum of the first and last digit: " + sum);
			}
		}
		catch (NumberIsZeroException e)
		{
			System.out.println("Exception: " + e.getMessage());
		}
		finally
		{
			scanner.close();
		}
	}

	// Function to calculate the sum of the first and last digit of a number
	public static int sumOfFirstAndLastDigit(int num)
	{
		int lastDigit = num % 10;
		int firstDigit = Character.getNumericValue(Integer.toString(num).charAt(0));
		return firstDigit + lastDigit;
	}
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to display transpose of a given matrix.`,
          marks: 25,
          sol: `import java.util.Scanner;

public class Slip6b
{
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);

		System.out.println("Enter The number of Rows And Colums Of Array");
		int rows = sc.nextInt();
		int cols = sc.nextInt();
		int[][] arr = new int[rows][cols];

		System.out.println("Enter Array");
		for (int i = 0; i < arr.length; i++)
		{
			for (int j = 0; j < arr[i].length; j++)
			{
				System.out.println("Enter Array Element: " + i + " " + j);
				int num = sc.nextInt();
				arr[i][j] = num;
			}
			System.out.println("");
		}
		display(arr);

		System.out.println("Transpose of Matrix is: ");
		transpose(arr);

		sc.close();
	}

	static void display(int[][] arr)
	{
		System.out.println("Array Is:");
		for (int i = 0; i < arr.length; i++)
		{
			for (int j = 0; j < arr[i].length; j++)
			{
				System.out.print(arr[i][j] + " ");
			}
			System.out.println("");
		}
	}

	static void transpose(int[][] arr)
	{
		int rows = arr.length;
		int cols = arr[0].length;

		int[][] transposeMatrix = new int[cols][rows];
		for (int i = 0; i < rows; i++)
		{
			for (int j = 0; j < cols; j++)
			{
				transposeMatrix[j][i] = arr[i][j];
			}
		}
		display(transposeMatrix);
	}
}
`,
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
          sol: `import javax.swing.*;
import java.awt.*;

public class Slip7a
{
	public static void main(String[] args)
	{
		// Create a JFrame (window)
		JFrame frame = new JFrame("Label Example");

		// Create a JLabel with the specified text
		JLabel label = new JLabel("Dr. D Y Patil College");

		// Set the font size to 20
		label.setFont(new Font("Arial", Font.PLAIN, 20));

		// Set the background color to red
		label.setBackground(Color.RED);
		label.setOpaque(true); // Make the label opaque to show the background color

		// Set the layout of the frame
		frame.setLayout(new FlowLayout());

		// Add the label to the frame
		frame.add(label);

		// Set frame properties
		frame.setSize(400, 100); // Set the size of the frame
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE); // Close the program when the frame is closed
		frame.setVisible(true); // Make the frame visible

		// Make sure the label is visible (by default, labels are not visible)
		label.setVisible(true);
	}
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to accept details of ‘n’ cricket player (pid, pname, totalRuns,InningsPlayed, NotOuttimes). Calculate the average of all the players. Display the details of player having maximum average. (Use Array of Object)`,
          marks: 25,
          sol: `import java.util.*;

class Player
{
	int pid;
	String pName;
	int totalRuns;
	int inningsPlayed;
	int noTimeOut;
	double avg;

	Player(int pid, String pName, int totalRuns, int inningsPlayed, int noTimeOut)
	{
		this.pid = pid;
		this.pName = pName;
		this.totalRuns = totalRuns;
		this.inningsPlayed = inningsPlayed;
		this.noTimeOut = noTimeOut;
		this.avg = totalRuns / (double) noTimeOut; 
	}
}

public class Slip7b
{
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter how many players you want to insert");
		int n = sc.nextInt();
		Player[] players = new Player[n];

		for (int i = 0; i < n; i++)
		{
			System.err.println("Enter Data for " + (i + 1) + " player");
			System.out.println("Enter player ID: ");
			int pid = sc.nextInt();
			sc.nextLine();
			System.out.println("Enter Player Name: ");
			String name = sc.nextLine();
			System.out.println("Enter Total Runs");
			int totalRuns = sc.nextInt();
			System.out.println("Enter Number of innings played: ");
			int noOfInnings = sc.nextInt();
			System.out.println("Enter number of times out: ");
			int noTimeOut = sc.nextInt();
			players[i] = new Player(pid, name, totalRuns, noOfInnings, noTimeOut);    
		}

		double maxAvg = 0;
		String pName = "";

		for (int i = 0; i < players.length; i++)
		{
			if (players[i].avg > maxAvg)
			{
				System.out.println("Calculating Average: " + players[i].pName);
				maxAvg = players[i].avg;
				pName = players[i].pName;
			}
		}

		System.out.println("Max Average of player: " + pName + " has average: " + maxAvg);

		sc.close();
	}
}
`,
        },
      ],
    },
    {
      slipId: 8,
      questions: [
        {
          questionId: 1,
          text: `Define an Interface Shape with abstract method area(). Write a java program to calculate an area of Circle and Sphere.(use final keyword)`,
          marks: 15,
          sol: `interface Shape
{
	double area();
}

final class Circle implements Shape
{
	private double radius;

	public Circle(double radius)
	{
		this.radius = radius;
	}

	@Override
	public double area()
	{
		return Math.PI * radius * radius;
	}
}

final class Sphere implements Shape
{
	private double radius;

	public Sphere(double radius)
	{
		this.radius = radius;
	}

	@Override
	public double area()
	{
		return 4 * Math.PI * radius * radius;
	}
}

public class Slip8a
{
	public static void main(String[] args)
	{
		Circle circle = new Circle(5.0);
		Sphere sphere = new Sphere(3.0);

		// Calculate and display the area of the circle
		System.out.println("Area of Circle: " + circle.area());

		// Calculate and display the surface area of the sphere
		System.out.println("Surface Area of Sphere: " + sphere.area());
	}
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to display the files having extension .txt from a given directory. `,
          marks: 25,
          sol: `import java.io.File;

public class Slip8b
{
	public void printFileNames(File[] a, int i)
	{
		if (i == a.length)
		{
			return;
		}
		if (a[i].isFile())
		{
			System.out.println("i: " + i);
			if (a[i].getName().endsWith(".txt"))
			{
				System.out.println(a[i].getName());  
			}
		}

		printFileNames(a, i + 1);
	}

	public static void main(String[] args)
	{
		String path = "E:\\BBA CA\\SEM-5 Peactical slips\\Java";

		File fObj = new File(path);

		Slip8b obj = new Slip8b();
		if (fObj.exists() && fObj.isDirectory())
		{
			File a[] = fObj.listFiles();
			System.out.println("Displaying Files from the directory: " + fObj);  
			obj.printFileNames(a, 0);
		}
	}
}
`,
        },
      ],
    },
    {
      slipId: 9,
      questions: [
        {
          questionId: 1,
          text: `Write a java Program to display following pattern: <br/>1 <br/>0 1 <br/>0 1 0 <br/>1 0 1 0`,
          marks: 15,
          sol: `public class Slip9a
{
	public static void main(String[] args)
	{
		int n = 4; // Number of rows

		for (int i = 1; i <= n; i++)
		{
			int numToPrint = (i % 2 == 1) ? 1 : 0; // Initialize the first number

			for (int j = 1; j <= i; j++)
			{
				System.out.print(numToPrint + " ");
				numToPrint = 1 - numToPrint; // Toggle between 0 and 1
			}

			System.out.println(); // Move to the next line after each row
		}
	}
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to validate PAN number and Mobile Number. If it is invalid then throw user defined Exception “Invalid Data”, otherwise display it.`,
          marks: 25,
          sol: `import java.util.Scanner;

class InvaildData extends Exception
{
	public InvaildData(String s)
	{
		super(s);
	}
}

public class Slip9b
{
	public static void main(String[] args)
	{
		Scanner sc = new Scanner(System.in);
		try
		{
			System.out.println("Enter the PAN Number");
			String pan = sc.next();
			vailidatePan(pan);
			System.out.println("Enter Mobile Number");
			String mobileNo = sc.next();
			vailidateMobileNo(mobileNo);
			System.out.println("Data is valid");
			System.out.println("PAN no: " + pan);
			System.out.println("Mobile no: " + mobileNo);
		}
		catch (InvaildData e)
		{
			System.err.println(e.getMessage());
		}
		sc.close();
	}

	public static void vailidatePan(String s) throws InvaildData
	{
		if (!s.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}"))
		{
			throw new InvaildData("Invalid PAN Number");
		}
	}

	public static void vailidateMobileNo(String s) throws InvaildData
	{
		if (!s.matches("[0-9]{10}"))
		{
			throw new InvaildData("Invalid Mobile Number");
		}
	}
}
`,
        },
      ],
    },
    {
      slipId: 10,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to count the frequency of each character in a given string.`,
          marks: 15,
          sol: `public class Slip10a
{
	public static void main(String[] args)
	{
		String inputString = "Breed";
		int[] letterFrequency = new int[26]; // assuming only lowercase letters are to be counted

		// Removing non-alphabetic characters and converting to lowercase
		String formattedString = inputString.replaceAll("[^a-zA-Z]", "").toLowerCase();

		// Counting the frequency of each letter
		for (int i = 0; i < formattedString.length(); i++)
		{
			char c = formattedString.charAt(i);
			if (c >= 'a' && c <= 'z')
			{
				letterFrequency[c - 'a']++;
			}
		}

		// Printing the frequencies
		System.out.println("Letter frequencies in the string: " + inputString);
		for (int i = 0; i < 26; i++)
		{
			if (letterFrequency[i] > 0)
			{
				char c = (char) (i + 'a');
				System.out.println("Letter: " + c + ", Frequency: " + letterFrequency[i]);
			}
		}
	}
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program for the following:`,
          marks: 25,
          sol: `import java.awt.*;
import java.awt.event.*;

class CompundIntrest extends WindowAdapter implements ActionListener
{
	Frame f;
	Label heading, pAmt, rate, year, total, intrestAmt;
	TextField tPamt, tIrate, tyear, tTotal, tIntresrAmt;
	Button cal, clear, close;
	double a, r, y, t, ia;

	CompundIntrest()
	{
		f = new Frame("Compund Intrest");
		tPamt = new TextField();
		tIrate = new TextField();
		tyear = new TextField();
		tTotal = new TextField();
		tTotal.setEnabled(false);
		tIntresrAmt = new TextField();
		tIntresrAmt.setEnabled(false);
		heading = new Label("Compund Intrest Calculator");
		pAmt = new Label("Principal Amount: ");
		rate = new Label("Intrest Rate(%): ");
		year = new Label("Time(Yrs): ");
		total = new Label("Total Amount: ");
		intrestAmt = new Label("Total Intrest: ");
		cal = new Button("Calculate");
		clear = new Button("Clear");
		close = new Button("Close");

		cal.addActionListener(this);
		clear.addActionListener(this);
		close.addActionListener(this);

		heading.setFont(new Font("Arial", Font.BOLD, 14));
		heading.setAlignment(Label.CENTER);

		heading.setBounds(50, 50, 300, 30);
		pAmt.setBounds(30, 100, 100, 20);
		rate.setBounds(30, 130, 100, 20);
		year.setBounds(210, 130, 80, 20);
		total.setBounds(30, 160, 100, 20);
		intrestAmt.setBounds(30, 190, 100, 20);

		tPamt.setBounds(150, 100, 100, 20);
		tIrate.setBounds(150, 130, 50, 20);
		tyear.setBounds(300, 130, 50, 20);
		tTotal.setBounds(150, 160, 100, 20);
		tIntresrAmt.setBounds(150, 190, 100, 20);

		cal.setBounds(50, 250, 80, 30);
		clear.setBounds(150, 250, 80, 30);
		close.setBounds(250, 250, 80, 30);

		f.add(heading);
		f.add(pAmt);
		f.add(rate);
		f.add(year);
		f.add(total);
		f.add(intrestAmt);

		f.add(tPamt);
		f.add(tIrate);
		f.add(tyear);
		f.add(tTotal);
		f.add(tIntresrAmt);

		f.add(cal);
		f.add(clear);
		f.add(close);

		f.addWindowListener(this);
		f.setSize(400, 300);
		f.setLayout(null);
		f.setVisible(true);
	}

	public void windowClosing(WindowEvent e)
	{
		f.dispose();
		System.exit(0);
	}

	public void actionPerformed(ActionEvent e)
	{
		if (e.getSource() == cal)
		{
			a = Double.parseDouble(tPamt.getText());
			r = Double.parseDouble(tIrate.getText());
			y = Double.parseDouble(tyear.getText());

			ia = a * Math.pow(1 + r / 100, y) - a;
			t = a + ia;
			tTotal.setText(String.valueOf(t));
			tIntresrAmt.setText(String.valueOf(ia));
		}
		if (e.getSource() == clear)
		{
			tPamt.setText("");
			tIrate.setText("");
			tyear.setText("");
			tTotal.setText("");
			tIntresrAmt.setText("");
		}
		if (e.getSource() == close)
		{
			f.dispose();
			System.exit(0);
		}
	}
}

public class Slip10b
{
	public static void main(String[] args)
	{
		new CompundIntrest();
	}
}
`,
        },
      ],
    },
    {
      slipId: 11,
      questions: [
        {
          questionId: 1,
          text: `Write a menu driven java program using command line arguments for the following:  <br/>1. Addition <br/>2. Subtraction <br/>3. Multiplication <br/>4. Division.`,
          marks: 15,
          sol: `public class Slip11a
{
 public static void main(String[] args)
 {
  if (args.length < 3)
  {
   System.out.println("Usage: Calculator <operation> <operand1> <operand2>");
   return;
  }
  String operation = args[0];
  double operand1 = Double.parseDouble(args[1]);
  double operand2 = Double.parseDouble(args[2]);
  double result = 0;
  switch (operation)
  {
   case "1":
   case "add":
   case "addition":
    result = operand1 + operand2;
    break;
   case "2":
   case "sub":
   case "subtraction":
    result = operand1 - operand2;
    break;
   case "3":
   case "mul":
   case "multiplication":
    result = operand1 * operand2;
    break;
   case "4":
   case "div":
   case "division":
    if (operand2 == 0)
    {
     System.out.println("Error: Division by zero is not allowed.");
     return;
    }
    result = operand1 / operand2;
    break;
   default:
    System.out.println("Invalid operation. Please choose 1, 2, 3, or 4.");
    return;
  }
  System.out.println("Result: " + result);
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write an applet application to display Table lamp. The color of lamp should get change randomly.`,
          marks: 25,
          sol: `import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.*;

class Lamp extends JPanel
{
 @Override
 protected void paintComponent(Graphics g)
 {
  super.paintComponent(g);
  Random rand = new Random();
  int r = rand.nextInt(256);
  int gr = rand.nextInt(256);
  int b = rand.nextInt(256);
  Color c1 = new Color(r, gr, b);
  g.drawRect(0, 250, 290, 29);
  g.drawLine(125, 250, 125, 160);
  g.drawLine(175, 250, 175, 160);
  g.drawArc(85, 157, 130, 50, -65, 312);
  g.drawArc(85, 87, 130, 50, 62, 58);
  g.drawLine(85, 177, 119, 89);
  g.drawLine(215, 177, 181, 89);
  g.setColor(c1);
  g.fillArc(78, 120, 40, 40, 63, -174);
  g.fillOval(120, 96, 40, 40);
  g.fillArc(173, 100, 40, 40, 110, 100);
 }
}

public class Slip11b
{
 public static void main(String[] args)
 {
  Lamp panel = new Lamp();
  JFrame app = new JFrame();
  app.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  app.add(panel);
  app.setSize(300, 300);
  app.setTitle("Table Lamp");
  app.setVisible(true);
 }
}
`,
        },
      ],
    },
    {
      slipId: 12,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to display each String in reverse order from a String array`,
          marks: 15,
          sol: `public class Slip12a
{
 public static void main(String[] args)
 {
  // Sample string array
  String[] stringArray = {"Hello", "World", "Java", "Programming"};
  // Iterate through the array and display each string in reverse order
  for (String str : stringArray)
  {
   String reversedString = reverseString(str);
   System.out.println(reversedString);
  }
 }

 // Method to reverse a string
 public static String reverseString(String input)
 {
  StringBuilder reversed = new StringBuilder();
  for (int i = input.length() - 1; i >= 0; i--)
  {
   reversed.append(input.charAt(i));
  }
  return reversed.toString();
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to display multiplication table of a given number into the List box by clicking on button.`,
          marks: 25,
          sol: `import java.awt.*;
import java.awt.event.*;

class MultiplicationTable extends Frame implements ActionListener
{
 private Label label;
 private TextField textField;
 private Button button;
 private List list;

 public MultiplicationTable()
 {
  setLayout(new FlowLayout());
  label = new Label("Enter a number: ");
  add(label);
  textField = new TextField(10);
  add(textField);
  button = new Button("Show Table");
  add(button);
  list = new List();
  add(list);
  button.addActionListener(this);
  setTitle("Multiplication Table");
  setSize(300, 300);
  setVisible(true);
 }

 public void actionPerformed(ActionEvent e)
 {
  int num = Integer.parseInt(textField.getText());
  String[] table = new String[10];
  for (int i = 0; i < 10; i++)
  {
   table[i] = num + " x " + (i + 1) + " = " + num * (i + 1);
  }
  list.removeAll();
  for (String s : table)
  {
   list.add(s);
  }
 }
}

public class Slip12b
{
 public static void main(String[] args)
 {
  new MultiplicationTable();
 }
}
`,
        },
      ],
    },
    {
      slipId: 13,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to accept ‘n’ integers from the user & store them in an ArrayList collection. Display the elements of ArrayList collection in reverse order.`,
          marks: 15,
          sol: `import java.util.ArrayList;
import java.util.Scanner;

public class Slip13a
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);
  ArrayList<Integer> numbers = new ArrayList<>();
  System.out.print("Enter the number of integers (n): ");
  int n = scanner.nextInt();
  System.out.println("Enter " + n + " integers:");
  for (int i = 0; i < n; i++)
  {
   int num = scanner.nextInt();
   numbers.add(num);
  }
  System.out.println("Elements of ArrayList in reverse order:");
  for (int i = numbers.size() - 1; i >= 0; i--)
  {
   System.out.println(numbers.get(i));
  }
  scanner.close();
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program that asks the user name, and then greets the user by name. Before outputting the user's name, convert it to upper case letters. For example, if the user's name is Raj, then the program should respond "Hello, RAJ, nice to meet you!".`,
          marks: 25,
          sol: `import java.util.Scanner;

public class Slip13b
{
 public static void main(String[] args)
 {
  Scanner sc = new Scanner(System.in);
  System.out.print("Enter User Name: ");
  String name = sc.next();
  System.out.println("Hello, " + name.toUpperCase() + ", nice to meet you!");
  sc.close();
 }
}
`,
        },
      ],
    },
    {
      slipId: 14,
      questions: [
        {
          questionId: 1,
          text: `Write a Java program to calculate power of a number using recursion.`,
          marks: 15,
          sol: `import java.util.Scanner;

public class Slip14a
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);
  System.out.print("Enter the base number: ");
  double base = scanner.nextDouble();
  System.out.print("Enter the exponent: ");
  int exponent = scanner.nextInt();
  double result = calculatePower(base, exponent);
  System.out.println(base + " raised to the power of " + exponent + " is " + result);
  scanner.close();
 }

 public static double calculatePower(double base, int exponent)
 {
  if (exponent == 0)
  {
   return 1; // Any number raised to the power of 0 is 1
  }
  else if (exponent < 0)
  {
   return 1 / (base * calculatePower(base, -exponent - 1));
  }
  else
  {
   return base * calculatePower(base, exponent - 1);
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to accept the details of employee (Eno, EName, Sal) and display it on next frame using appropriate event .`,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

class EmployeeDetailsFrame extends JFrame
{
 JLabel labelEno, labelEName, labelSal;
 JTextField textFieldEno, textFieldEName, textFieldSal;
 JButton submitButton;

 public EmployeeDetailsFrame()
 {
  labelEno = new JLabel("Employee Number:");
  labelEName = new JLabel("Employee Name:");
  labelSal = new JLabel("Salary:");
  textFieldEno = new JTextField();
  textFieldEName = new JTextField();
  textFieldSal = new JTextField();
  submitButton = new JButton("Submit");
  submitButton.addActionListener(new ActionListener()
  {
   @Override
   public void actionPerformed(ActionEvent e)
   {
    String eno = textFieldEno.getText();
    String eName = textFieldEName.getText();
    String sal = textFieldSal.getText();
    dispose();
    new DisplayFrame(eno, eName, sal);
   }
  });
  setLayout(new GridLayout(4, 2));
  add(labelEno);
  add(textFieldEno);
  add(labelEName);
  add(textFieldEName);
  add(labelSal);
  add(textFieldSal);
  add(new JLabel());
  add(submitButton);
  setTitle("Employee Details Entry");
  setSize(400, 200);
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setLocationRelativeTo(null);
  setVisible(true);
 }
}

class DisplayFrame extends JFrame
{
 public DisplayFrame(String eno, String eName, String sal)
 {
  JLabel labelEno = new JLabel("Employee Number: " + eno);
  JLabel labelEName = new JLabel("Employee Name: " + eName);
  JLabel labelSal = new JLabel("Salary: " + sal);
  setLayout(new GridLayout(3, 1));
  add(labelEno);
  add(labelEName);
  add(labelSal);
  setTitle("Employee Details Display");
  setSize(300, 150);
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setLocationRelativeTo(null);
  setVisible(true);
 }
}

public class Slip14b
{
 public static void main(String[] args)
 {
  new EmployeeDetailsFrame();
 }
}
`,
        },
      ],
    },
    {
      slipId: 15,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to search given name into the array, if it is found then display its index otherwise display appropriate message. `,
          marks: 15,
          sol: `import java.util.Scanner;

public class Slip15a
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);

  // Sample array of names
  String[] names = {"Alice", "Bob", "Charlie", "David", "Eve"};

  System.out.print("Enter the name to search: ");
  String searchName = scanner.nextLine();

  int index = searchName(names, searchName);

  if (index != -1)
  {
   System.out.println("Name found at index " + index);
  }
  else
  {
   System.out.println("Name not found in the array.");
  }
  scanner.close();
 }

 public static int searchName(String[] array, String name)
 {
  for (int i = 0; i < array.length; i++)
  {
   if (array[i].equals(name))
   {
    return i;
   }
  }
  return -1;
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write an applet application to display smiley face.`,
          marks: 25,
          sol: `import java.awt.Color;
import java.awt.Graphics;
import javax.swing.JFrame;
import javax.swing.JPanel;

class SmileyFace extends JPanel
{
 @Override
 protected void paintComponent(Graphics g)
 {
  super.paintComponent(g);
  g.setColor(Color.YELLOW);
  g.fillOval(10, 10, 200, 200);

  g.setColor(Color.BLACK);
  g.fillOval(55, 65, 30, 30);
  g.fillOval(135, 65, 30, 30);

  g.fillOval(50, 110, 120, 60);

  g.setColor(Color.YELLOW);
  g.fillRect(50, 110, 120, 30);
  g.fillOval(50, 120, 120, 40);
 }
}

public class Slip15b
{
 public static void main(String[] args)
 {
  SmileyFace panel = new SmileyFace();
  JFrame app = new JFrame();
  app.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  app.add(panel);
  app.setSize(230, 250);
  app.setTitle("Smiley");
  app.setVisible(true);
 }
}
`,
        },
      ],
    },
    {
      slipId: 16,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to calculate sum of digits of a given number using recursion`,
          marks: 15,
          sol: `import java.util.Scanner;

public class Slip16a
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);

  System.out.print("Enter a number: ");
  long number = scanner.nextLong();

  if (number < 0)
  {
   System.out.println("Please enter a non-negative number.");
  }
  else
  {
   int sum = calculateSumOfDigits(number);
   System.out.println("Sum of digits: " + sum);
  }
  scanner.close();
 }

 public static int calculateSumOfDigits(long number)
 {
  if (number == 0)
  {
   return 0; // Base case: when there are no more digits
  }
  else
  {
   return (int)(number % 10) + calculateSumOfDigits(number / 10);
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to accept n employee names from user. Sort them in ascending order and Display them.(Use array of object and Static keyword)`,
          marks: 25,
          sol: `import java.util.Arrays;
import java.util.Scanner;

class Employee
{
 String name;

 public Employee(String name)
 {
  this.name = name;
 }
}

public class Slip16b
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);

  System.out.print("Enter the number of employees: ");
  int n = scanner.nextInt();
  scanner.nextLine();

  Employee[] employees = new Employee[n];

  for (int i = 0; i < n; i++)
  {
   System.out.print("Enter name for Employee " + (i + 1) + ": ");
   String name = scanner.nextLine();
   employees[i] = new Employee(name);
  }

  Arrays.sort(employees, (v1, v2) -> v1.name.compareToIgnoreCase(v2.name));

  // Display the sorted employee names
  System.out.println("\\nSorted Employee Names:");

  for (int i = 0; i < n; i++)
  {
   System.out.println("Employee " + (i + 1) + ": " + employees[i].name);
  }

  scanner.close();
 }
}
`,
        },
      ],
    },
    {
      slipId: 17,
      questions: [
        {
          questionId: 1,
          text: `Write a java Program to accept ‘n’ no’s through command line and store only armstrong no’s into the array and display that array.`,
          marks: 15,
          sol: `public class Slip17a
{
 public static void main(String[] args)
 {
  if (args.length == 0)
  {
   System.out.println("Usage: java Slip17a <number1> <number2> <number3> ...");
   return;
  }

  int n = args.length;
  int[] numbers = new int[n];
  int armstrongCount = 0;

  for (int i = 0; i < n; i++)
  {
   numbers[i] = Integer.parseInt(args[i]);
   if (isArmstrongNumber(numbers[i]))
   {
    armstrongCount++;
   }
  }

  int[] armstrongNumbers = new int[armstrongCount];
  int index = 0;

  for (int i = 0; i < n; i++)
  {
   if (isArmstrongNumber(numbers[i]))
   {
    armstrongNumbers[index] = numbers[i];
    index++;
   }
  }

  System.out.println("Armstrong numbers in the array:");

  for (int armstrongNumber : armstrongNumbers)
  {
   System.out.print(armstrongNumber + " ");
  }
 }

 public static boolean isArmstrongNumber(int number)
 {
  int originalNumber = number;
  int sum = 0;
  int digitCount = String.valueOf(number).length();

  while (number > 0)
  {
   int digit = number % 10;
   sum += Math.pow(digit, digitCount);
   number /= 10;
  }

  return sum == originalNumber;
 }
}
`,
        },
        {
          questionId: 2,
          text: `Define a class Product (pid, pname, price, qty). Write a function to accept the product details, display it and calculate total amount. (use array of Objects)`,
          marks: 25,
          sol: `import java.util.Scanner;

class Product
{
 int pid;
 String pname;
 double price;
 int qty;

 public Product(int pid, String pname, double price, int qty)
 {
  this.pid = pid;
  this.pname = pname;
  this.price = price;
  this.qty = qty;
 }

 public double calculateTotalAmount()
 {
  return price * qty;
 }

 public void displayProductDetails()
 {
  System.out.println("Product ID: " + pid);
  System.out.println("Product Name: " + pname);
  System.out.println("Price: " + price);
  System.out.println("Quantity: " + qty);
  System.out.println("Total Amount: " + calculateTotalAmount());
 }
}

public class Slip17b
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);

  System.out.print("Enter the number of products: ");
  int n = scanner.nextInt();
  scanner.nextLine();

  Product[] products = new Product[n];

  for (int i = 0; i < n; i++)
  {
   System.out.println("\\nEnter details for Product " + (i + 1) + ":");
   System.out.print("Enter Product ID: ");
   int pid = scanner.nextInt();
   scanner.nextLine();

   System.out.print("Enter Product Name: ");
   String pname = scanner.nextLine();

   System.out.print("Enter Price: ");
   double price = scanner.nextDouble();

   System.out.print("Enter Quantity: ");
   int qty = scanner.nextInt();

   products[i] = new Product(pid, pname, price, qty);
  }

  for (int i = 0; i < n; i++)
  {
   System.out.println("\\nDetails for Product " + (i + 1) + ":");
   products[i].displayProductDetails();
  }

  scanner.close();
 }
}
`,
        },
      ],
    },
    {
      slipId: 18,
      questions: [
        {
          questionId: 1,
          text: `Write a Java program to calculate area of Circle, Triangle & Rectangle.(Use Method Overloading) `,
          marks: 15,
          sol: `import java.util.Scanner;

public class Slip18a
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);
  int choice;

  do
  {
   System.out.println("Choose a shape to calculate the area:");
   System.out.println("1. Circle");
   System.out.println("2. Triangle");
   System.out.println("3. Rectangle");
   System.out.println("4. Exit");
   System.out.print("Enter your choice: ");
   choice = scanner.nextInt();

   switch (choice)
   {
    case 1:
     System.out.print("Enter the radius of the circle: ");
     double radius = scanner.nextDouble();
     System.out.println("Area of the circle: " + calculateCircleArea(radius));
     break;
    case 2:
     System.out.print("Enter the base of the triangle: ");
     double base = scanner.nextDouble();
     System.out.print("Enter the height of the triangle: ");
     double height = scanner.nextDouble();
     System.out.println("Area of the triangle: " + calculateTriangleArea(base, height));
     break;
    case 3:
     System.out.print("Enter the length of the rectangle: ");
     double length = scanner.nextDouble();
     System.out.print("Enter the width of the rectangle: ");
     double width = scanner.nextDouble();
     System.out.println("Area of the rectangle: " + calculateRectangleArea(length, width));
     break;
    case 4:
     System.out.println("Exiting the program.");
     break;
    default:
     System.out.println("Invalid choice. Please choose a valid option.");
   }
  } while (choice != 4);
  scanner.close();
 }

 public static double calculateCircleArea(double radius)
 {
  return Math.PI * Math.pow(radius, 2);
 }

 public static double calculateTriangleArea(double base, double height)
 {
  return 0.5 * base * height;
 }

 public static double calculateRectangleArea(double length, double width)
 {
  return length * width;
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to copy the data from one file into another file, while copying change the case of characters in target file and replaces all digits by ‘*’ symbol`,
          marks: 25,
          sol: `import java.io.*;

public class Slip18b
{
 public static void main(String[] args)
 {
  String sourceFileName = "input.txt";
  String targetFileName = "output.txt";

  try
  {
   FileReader fileReader = new FileReader(sourceFileName);
   BufferedReader bufferedReader = new BufferedReader(fileReader);

   FileWriter fileWriter = new FileWriter(targetFileName);
   BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);

   int charRead;
   while ((charRead = bufferedReader.read()) != -1)
   {
    char ch = (char) charRead;
    char modifiedChar;

    if (Character.isUpperCase(ch))
    {
     modifiedChar = Character.toLowerCase(ch);
    }
    else if (Character.isLowerCase(ch))
    {
     modifiedChar = Character.toUpperCase(ch);
    }
    else
    {
     modifiedChar = ch;
    }

    if (Character.isDigit(ch))
    {
     modifiedChar = '*';
    }
    bufferedWriter.write(modifiedChar);
   }

   bufferedReader.close();
   bufferedWriter.close();

   System.out.println("successfully!!");

  }
  catch (IOException e)
  {
   e.printStackTrace();
  }
 }
}
`,
        },
      ],
    },
    {
      slipId: 19,
      questions: [
        {
          questionId: 1,
          text: `Write a Java program to display Fibonacci series using function `,
          marks: 15,
          sol: `public class Slip19a
{
 public static void main(String[] args)
 {
  int n = 10;

  System.out.println("Fibonacci Series:");
  for (int i = 0; i < n; i++)
  {
   int fibonacciNumber = fibonacci(i);
   System.out.print(fibonacciNumber + " ");
  }
 }

 public static int fibonacci(int n)
 {
  if (n <= 1)
  {
   return n;
  }
  else
  {
   return fibonacci(n - 1) + fibonacci(n - 2);
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Create an Applet that displays the x and y position of the cursor movement using Mouse and Keyboard. (Use appropriate listener) `,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseMotionListener;

public class Slip19b extends JFrame
{
 private JLabel positionLabel, keyLabel;

 public Slip19b()
 {
  positionLabel = new JLabel("Cursor Position: (0, 0)");
  keyLabel = new JLabel("Key Event: ");

  setLayout(new GridLayout(2, 1));
  add(positionLabel);
  add(keyLabel);

  addMouseMotionListener(new MouseMotionListener()
  {
   public void mouseMoved(MouseEvent e)
   {
    updatePositionLabel(e.getX(), e.getY());
   }

   public void mouseDragged(MouseEvent e)
   {
    updatePositionLabel(e.getX(), e.getY());
   }
  });

  addKeyListener(new KeyListener()
  {
   public void keyTyped(KeyEvent e)
   {
   }

   public void keyPressed(KeyEvent e)
   {
    if (e.getKeyCode() == KeyEvent.VK_ESCAPE)
    {
     System.exit(0);
    }
    else
    {
     updateKeyLabel(e.getKeyChar());
    }
   }

   public void keyReleased(KeyEvent e)
   {
   }
  });

  setFocusable(true);
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setSize(400, 300);
  setLocationRelativeTo(null);
  setTitle("Cursor Position Tracker");
  setVisible(true);
 }

 private void updatePositionLabel(int x, int y)
 {
  positionLabel.setText("Cursor Position: (" + x + ", " + y + ")");
 }
 private void updateKeyLabel(char keyChar)
 {
  keyLabel.setText("Key Event: " + keyChar);
 }

 public static void main(String[] args)
 {
  new Slip19b();
 }
}
`,
        },
      ],
    },
    {
      slipId: 20,
      questions: [
        {
          questionId: 1,
          text: `Write a java program using AWT to create a Frame with title “TYBBACA”, background color RED. If user clicks on close button then frame should close`,
          marks: 15,
          sol: `import java.awt.*;
import java.awt.event.*;

public class Slip20a
{
 public static void main(String[] args)
 {
  Frame frame = new Frame("TYBBACA");

  frame.setBackground(Color.RED);

  frame.addWindowListener(new WindowAdapter()
  {
   public void windowClosing(WindowEvent e)
   {
    System.exit(0);
   }
  });

  frame.setSize(400, 300);
  frame.setVisible(true);
 }
}
`,
        },
        {
          questionId: 2,
          text: 'Construct a Linked List containing name: CPP, Java, Python and PHP. Then extend your java program to do the following: <br/>i. Display the contents of the List using an Iterator <br/>ii. Display the contents of the List in reverse order using a ListIterator',
          marks: 25,
          sol: `import java.util.LinkedList;
import java.util.Iterator;
import java.util.ListIterator;

public class Slip20b
{
 public static void main(String[] args)
 {
  LinkedList<String> pLanguages = new LinkedList<>();
  pLanguages.add("CPP");
  pLanguages.add("Java");
  pLanguages.add("Python");
  pLanguages.add("PHP");

  System.out.println("Contents of the List using Iterator:");
  displayListUsingIterator(pLanguages);

  System.out.println("\\nContents of the List in Reverse Order using ListIterator:");
  displayListInReverseOrder(pLanguages);
 }

 private static void displayListUsingIterator(LinkedList<String> list)
 {
  Iterator<String> iterator = list.iterator();
  while (iterator.hasNext())
  {
   System.out.println(iterator.next());
  }
 }

 private static void displayListInReverseOrder(LinkedList<String> list)
 {
  ListIterator<String> listIterator = list.listIterator(list.size());
  while (listIterator.hasPrevious())
  {
   System.out.println(listIterator.previous());
  }
 }
}
`,
        },
      ],
    },
    {
      slipId: 21,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to display each word from a file in reverse order`,
          marks: 15,
          sol: `import java.io.*;

public class Slip21a
{
 public static void main(String[] args)
 {
  String fileName = "input.txt"; // Hardcoded file name

  try (FileReader fileReader = new FileReader(fileName);
       BufferedReader bufferedReader = new BufferedReader(fileReader))
  {
   String line;
   while ((line = bufferedReader.readLine()) != null)
   {
    String[] words = line.split(" ");
    for (String word : words)
    {
     String reversedWord = reverseWord(word);
     System.out.print(reversedWord + " ");
    }
   }
  }
  catch (FileNotFoundException e)
  {
   System.out.println("File not found: " + fileName);
  }
  catch (IOException e)
  {
   System.out.println("Error reading the file: " + e.getMessage());
  }
 }

 public static String reverseWord(String word)
 {
  char[] wordChars = word.toCharArray();
  int left = 0;
  int right = wordChars.length - 1;

  while (left < right)
  {
   char temp = wordChars[left];
   wordChars[left] = wordChars[right];
   wordChars[right] = temp;

   left++;
   right--;
  }

  return new String(wordChars);
 }
}
`,
        },
        {
          questionId: 2,
          text: `Create a hashtable containing city name & STD code. Display the details of the hashtable. Also search for a specific city and display STD code of that city.`,
          marks: 25,
          sol: `import java.util.Hashtable;
import java.util.Scanner;

public class Slip21b
{
 public static void main(String[] args)
 {
  Hashtable<String, String> cityStdCodes = new Hashtable<>();

  cityStdCodes.put("City1", "STD1");
  cityStdCodes.put("City2", "STD2");
  cityStdCodes.put("City3", "STD3");

  System.out.println("Hashtable Details:");
  System.out.println("------------------");
  for (String city : cityStdCodes.keySet())
  {
   System.out.println("City: " + city + ", STD Code: " + cityStdCodes.get(city));
  }

  Scanner scanner = new Scanner(System.in);
  System.out.print("\\nEnter the city to search for: ");
  String searchCity = scanner.nextLine();

  if (cityStdCodes.containsKey(searchCity))
  {
   System.out.println("STD Code for " + searchCity + ": " + cityStdCodes.get(searchCity));
  }
  else
  {
   System.out.println("City not found in the hashtable.");
  }
  scanner.close();
 }
}
`,
        },
      ],
    },
    {
      slipId: 22,
      questions: [
        {
          questionId: 1,
          text: `Write a Java program to calculate factorial of a number using recursion`,
          marks: 15,
          sol: `import java.util.Scanner;

public class Slip22a
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);

  System.out.print("Enter a non-negative integer: ");
  int number = scanner.nextInt();

  if (number < 0)
  {
   System.out.println("Please enter a non-negative integer.");
  }
  else
  {
   long factorial = calculateFactorial(number);
   System.out.println("Factorial of " + number + " is " + factorial);
  }
  scanner.close();
 }

 public static long calculateFactorial(int n)
 {
  if (n == 0 || n == 1)
  {
   return 1;
  }
  else
  {
   return n * calculateFactorial(n - 1);
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program for the following:<br/>1. To create a file.<br/>2. To rename a file.<br/>3. To delete a file.<br/>4. To display path of a file`,
          marks: 25,
          sol: `import java.io.File;
import java.io.IOException;

public class Slip22b
{
 public static void main(String[] args)
 {
  String fileName = "input.txt";

  createFile(fileName);
  displayFilePath(fileName);
  String newFileName = "NewFile.txt";
  renameFile(fileName, newFileName);
  displayFilePath(newFileName);
  deleteFile(newFileName);
 }

 private static void createFile(String fileName)
 {
  try
  {
   File file = new File(fileName);

   if (file.createNewFile())
   {
    System.out.println("File created: " + file.getName());
   }
   else
   {
    System.out.println("File already exists.");
   }
  }
  catch (IOException e)
  {
   System.out.println("An error occurred while creating the file.");
   e.printStackTrace();
  }
 }

 private static void displayFilePath(String fileName)
 {
  File file = new File(fileName);
  System.out.println("Path of the file '" + fileName + "': " + file.getAbsolutePath());
 }

 private static void renameFile(String oldFileName, String newFileName)
 {
  File oldFile = new File(oldFileName);
  File newFile = new File(newFileName);

  if (oldFile.renameTo(newFile))
  {
   System.out.println("File renamed successfully.");
  }
  else
  {
   System.out.println("Failed to rename the file.");
  }
 }

 private static void deleteFile(String fileName)
 {
  File file = new File(fileName);

  if (file.delete())
  {
   System.out.println("File deleted: " + fileName);
  }
  else
  {
   System.out.println("Failed to delete the file.");
  }
 }
}
`,
        },
      ],
    },
    {
      slipId: 23,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to check whether given file is hidden or not. If not then display its path, otherwise display appropriate message.`,
          marks: 15,
          sol: `import java.io.File;

public class Slip23a
{
 public static void main(String[] args)
 {
  String filePath = "input.txt";  // Replace with the path of the file you want to check

  File file = new File(filePath);

  if (file.exists())
  {
   if (file.isHidden())
   {
    System.out.println("The file is hidden.");
   }
   else
   {
    System.out.println("File path: " + file.getAbsolutePath());
   }
  }
  else
  {
   System.out.println("The file does not exist.");
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to design following Frame using Swing. `,
          marks: 25,
          sol: `import java.awt.Color;
import javax.swing.*;

public class Slip23b extends JFrame
{
 public Slip23b()
 {
  setTitle("Menu");
  setSize(400, 300);
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

  JMenuBar menuBar = new JMenuBar();
  menuBar.setBackground(Color.GRAY);

  JMenu fileMenu = new JMenu("File");
  JMenu editMenu = new JMenu("Edit");
  JMenu searchMenu = new JMenu("Search");

  ImageIcon undoIcon = new ImageIcon("undo.png");
  ImageIcon redoIcon = new ImageIcon("redo.png");
  ImageIcon cutIcon = new ImageIcon("cut.png");
  ImageIcon copyIcon = new ImageIcon("copy.png");
  ImageIcon pasteIcon = new ImageIcon("paste.png");

  JMenuItem undoMenuItem = new JMenuItem("Undo", undoIcon);
  JMenuItem redoMenuItem = new JMenuItem("Redo", redoIcon);
  JMenuItem cutMenuItem = new JMenuItem("Cut", cutIcon);
  JMenuItem copyMenuItem = new JMenuItem("Copy", copyIcon);
  JMenuItem pasteMenuItem = new JMenuItem("Paste", pasteIcon);

  editMenu.add(undoMenuItem);
  editMenu.add(redoMenuItem);
  editMenu.addSeparator();
  editMenu.add(cutMenuItem);
  editMenu.add(copyMenuItem);
  editMenu.add(pasteMenuItem);

  menuBar.add(fileMenu);
  menuBar.add(editMenu);
  menuBar.add(searchMenu);

  setJMenuBar(menuBar);
  setVisible(true);
 }

 public static void main(String[] args)
 {
  new Slip23b();
 }
}
`,
        },
      ],
    },
    {
      slipId: 24,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to count number of digits, spaces and characters from a file.`,
          marks: 15,
          sol: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Slip24a
{
 public static void main(String[] args)
 {
  String fileName = "input.txt";

  int charCount = 0;
  int digitCount = 0;
  int spaceCount = 0;

  try (BufferedReader bufferedReader = new BufferedReader(new FileReader(fileName)))
  {
   int c;
   while ((c = bufferedReader.read()) != -1)
   {
    charCount++;
    if (Character.isDigit(c))
    {
     digitCount++;
    }
    else if (Character.isWhitespace(c))
    {
     spaceCount++;
    }
   }
  }
  catch (IOException e)
  {
   System.err.println("Error reading the file: " + e.getMessage());
   System.exit(1);
  }

  System.out.println("Character count: " + charCount);
  System.out.println("Digit count: " + digitCount);
  System.out.println("Space count: " + spaceCount);
 }
}
`,
        },
        {
          questionId: 2,
          text: `Create a package TYBBACA with two classes as class Student (Rno, SName, Per) with a method disp() to display details of N Students and class Teacher (TID, TName, Subject) with a method disp() to display the details of teacher who is teaching Java subject. (Make use of finalize() method and array of Object)`,
          marks: 25,
          sol: `/*
 // TYBBACA/Student.java
package TYBBACA;

public class Student {
 int Rno;
 String SName;
 double Per;

 public Student(int rno, String sName, double per) {
  Rno = rno;
  SName = sName;
  Per = per;
 }

 public void disp() {
  System.out.println("Roll Number: " + Rno);
  System.out.println("Student Name: " + SName);
  System.out.println("Percentage: " + Per);
  System.out.println("---------------------");
 }
}
// TYBBACA/Teacher.java
package TYBBACA;

public class Teacher {
 int TID;
 String TName;
 String Subject;

 public Teacher(int tid, String tName, String subject) {
  TID = tid;
  TName = tName;
  Subject = subject;
 }

 public void disp() {
  System.out.println("Teacher ID: " + TID);
  System.out.println("Teacher Name: " + TName);
  System.out.println("Subject: " + Subject);
  System.out.println("---------------------");
 }
}

 */


import TYBBACA.Student;
import TYBBACA.Teacher;

public class Slip24b {

 public static void main(String[] args) {
  Student[] students = new Student[3];
  students[0] = new Student(101, "S1", 85.5);
  students[1] = new Student(102, "S2", 78.9);
  students[2] = new Student(103, "S3", 92.3);

  System.out.println("Details of Students:");
  for (Student student : students) {
   student.disp();
  }

  Teacher[] teachers = new Teacher[2];
  teachers[0] = new Teacher(501, "T1", "Java");
  teachers[1] = new Teacher(502, "T2", "Cyber Security");

  System.out.println("Details of Teachers (Teaching Java):");
  for (Teacher teacher : teachers) {
   if (teacher.Subject.equals("Java")) {
    teacher.disp();
   }
  }
 }
}
`,
        },
      ],
    },
    {
      slipId: 25,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to check whether given string is palindrome or not.`,
          marks: 15,
          sol: `import java.util.Scanner;

public class Slip25a
{
 public static void main(String[] args)
 {
  Scanner scanner = new Scanner(System.in);
  System.out.print("Enter a string: ");
  String input = scanner.nextLine();
  if (isPalindrome(input))
  {
   System.out.println("The string is a palindrome.");
  }
  else
  {
   System.out.println("The string is not a palindrome.");
  }
  scanner.close();
 }

 public static boolean isPalindrome(String str)
 {
  str = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
  int left = 0;
  int right = str.length() - 1;
  while (left < right)
  {
   if (str.charAt(left) != str.charAt(right))
   {
    return false;
   }
   left++;
   right--;
  }
  return true;
 }
}
`,
        },
        {
          questionId: 2,
          text: 'Create a package named Series having three different classes to print series: <br/>i. Fibonacci series <br/>ii. Cube of numbers <br/>iii. Square of numbers <br/>Write a java program to generate ‘n’ terms of the above series',
          marks: 25,
          sol: `/*
 package Series;

public class FibonacciSeries {
 public static void generateSeries(int n) {
  int firstTerm = 0, secondTerm = 1;
  System.out.println("Fibonacci Series:");

  for (int i = 0; i < n; i++) {
   System.out.print(firstTerm + " ");
   int nextTerm = firstTerm + secondTerm;
   firstTerm = secondTerm;
   secondTerm = nextTerm;
  }

  System.out.println("\\n---------------------");
 }
}


package Series;

public class CubeSeries {
 public static void generateSeries(int n) {
  System.out.println("Cube Series:");

  for (int i = 1; i <= n; i++) {
   int cube = i * i * i;
   System.out.print(cube + " ");
  }

  System.out.println("\\n---------------------");
 }
}


package Series;

public class SquareSeries {
 public static void generateSeries(int n) {
  System.out.println("Square Series:");

  for (int i = 1; i <= n; i++) {
   int square = i * i;
   System.out.print(square + " ");
  }

  System.out.println("\\n---------------------");
 }
}

 */
import Series.FibonacciSeries;
import Series.CubeSeries;
import Series.SquareSeries;

public class Slip25b {
 public static void main(String[] args) {
  int n = 10; 

  FibonacciSeries.generateSeries(n);
  CubeSeries.generateSeries(n);
  SquareSeries.generateSeries(n);
 }
}
`,
        },
      ],
    },
    {
      slipId: 26,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to display ASCII values of the characters from a file`,
          marks: 15,
          sol: `import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class Slip26a {
 public static void main(String[] args) {
  String fileName = "input.txt"; 

  try (FileReader fileReader = new FileReader(fileName);
   BufferedReader bufferedReader = new BufferedReader(fileReader)) {
   int c;
   while ((c = bufferedReader.read()) != -1) {
    System.out.println("Character: " + (char) c + ", ASCII Value: " + c);
   }
  } catch (IOException e) {
   System.err.println("Error reading the file: " + e.getMessage());
   System.exit(1);
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program using applet to draw Temple.`,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;

public class Slip26b {
 public static void main(String[] args) {

  JFrame frame = new JFrame("Temple Drawing");
  frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

  JPanel templePanel = new JPanel() {
   @Override
   protected void paintComponent(Graphics g) {
    super.paintComponent(g);

    g.drawRect(100, 150, 90, 120);
    g.drawRect(130, 230, 20, 40);
    g.drawLine(150, 100, 100, 150);
    g.drawLine(150, 100, 190, 150);
    g.drawLine(150, 50, 150, 100);
    g.drawLine(150, 50, 190, 60);
    g.drawLine(190, 60, 150, 70);
    //x:[150,190,150]
    //y:[50,60,70]

    Color c = new Color(255, 100, 0);
    g.setColor(c);
    int[] xPoints = { 150, 190, 150 };
    int[] yPoints = { 50, 60, 70 };
    int nPoints = 3;
    g.fillPolygon(xPoints, yPoints, nPoints);

    // Fill the polygon with a color

    // g.drawRect(150,50,20,20);

    // Color c = new Color(255, 100, 0);
    // g.setColor(c);
    // g.fillRect(150, 50, 20, 20);
   }
  };

  frame.getContentPane().add(templePanel);
  frame.setSize(400, 400);
  frame.setVisible(true);
 }
}
`,
        },
      ],
    },
    {
      slipId: 27,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to accept a number from user, If it is greater than 1000 then throw user defined exception “Number is out of Range” otherwise display the factors of that number. (Use static keyword)`,
          marks: 15,
          sol: `import java.util.Scanner;

class NumberOutOfRangeException extends Exception {
 public NumberOutOfRangeException(String message) {
  super(message);
 }

}

public class Slip27a {
 public static void main(String[] args) {
  Scanner scanner = new Scanner(System.in);

  try {
   System.out.print("Enter a number: ");
   int number = scanner.nextInt();
   displayFactors(number);
  } catch (NumberOutOfRangeException e) {
   System.err.println("Error: " + e.getMessage());
  }
  scanner.close();
 }

 public static void displayFactors(int number) throws NumberOutOfRangeException {
  if (number > 1000) {
   throw new NumberOutOfRangeException("Number is out of Range");
  } else {
   System.out.println("Factors of " + number + ":");
   for (int i = 1; i <= number; i++) {
    if (number % i == 0) {
     System.out.println(i);
    }
   }
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to accept directory name in TextField and display list of files and subdirectories in List Control from that directory by clicking on Button.`,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;

public class Slip27b extends JFrame {

 private JTextField directoryTextField;
 private JTextArea fileListTextArea;

 public Slip27b() {
  setTitle("File Explorer");

  initializeUI();
  setVisible(true);
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setSize(400, 300);
  setLocationRelativeTo(null);
 }

 private void initializeUI() {
  JPanel mainPanel = new JPanel(new BorderLayout());

  JLabel label = new JLabel("Enter Directory Path:");
  directoryTextField = new JTextField();
  JButton listFilesButton = new JButton("List Files");

  fileListTextArea = new JTextArea();

  mainPanel.add(label, BorderLayout.NORTH);
  mainPanel.add(directoryTextField, BorderLayout.CENTER);
  mainPanel.add(listFilesButton, BorderLayout.SOUTH);

  listFilesButton.addActionListener(new ActionListener() {
   @Override
   public void actionPerformed(ActionEvent e) {
    listFilesAndDirectories();
   }
  });

  getContentPane().add(mainPanel, BorderLayout.NORTH);
  getContentPane().add(new JScrollPane(fileListTextArea), BorderLayout.CENTER);
 }

 private void listFilesAndDirectories() {
  String directoryPath = directoryTextField.getText();

  if (directoryPath.isEmpty()) {
   JOptionPane.showMessageDialog(this, "Please enter a directory path.");
   return;
  }

  File directory = new File(directoryPath);

  if (!directory.exists() || !directory.isDirectory()) {
   JOptionPane.showMessageDialog(this, "Invalid directory path.");
   return;
  }

  File[] files = directory.listFiles();

  if (files != null) {
   fileListTextArea.setText("");

   for (File file : files) {
    fileListTextArea.append(file.getName() + "\\n");
   }
  }
 }

 public static void main(String[] args) {
  new Slip27b();
 }
}
`,
        },
      ],
    },
    {
      slipId: 28,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to count the number of integers from a given list. (Use Command line arguments). `,
          marks: 15,
          sol: `public class Slip28a {
 public static void main(String[] args) {
  int count = 0;

  for (String arg : args) {
   try {
    int num = Integer.parseInt(arg);
    count++;
   } catch (NumberFormatException e) {
   }

  }

  System.out.println("Number of integers in the list: " + count);
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java Program to accept the details of 5 employees (Eno, Ename, Salary) and display it onto the JTable.`,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;
import javax.swing.table.DefaultTableModel;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Slip28b extends JFrame {

 private DefaultTableModel tableModel;
 private JTable employeeTable;
 private JTextField enoField, enameField, salaryField;
 private JButton addButton;

 public Slip28b() {
  setTitle("Employee Details");

  initializeUI();
  setVisible(true);
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setSize(500, 400);
  setLocationRelativeTo(null);
 }

 private void initializeUI() {
  tableModel = new DefaultTableModel();
  tableModel.addColumn("Employee Number");
  tableModel.addColumn("Employee Name");
  tableModel.addColumn("Salary");

  employeeTable = new JTable(tableModel);

  JPanel inputPanel = new JPanel(new GridLayout(2, 3, 5, 5));

  enoField = new JTextField(10);
  enameField = new JTextField(10);
  salaryField = new JTextField(10);
  addButton = new JButton("Add Employee");

  inputPanel.add(new JLabel("Employee Number:"));
  inputPanel.add(enoField);
  inputPanel.add(new JLabel("Employee Name:"));
  inputPanel.add(enameField);
  inputPanel.add(new JLabel("Salary:"));
  inputPanel.add(salaryField);
  inputPanel.add(addButton);

  addButton.addActionListener(new ActionListener() {
   @Override
   public void actionPerformed(ActionEvent e) {
    addEmployee();
   }
  });

  getContentPane().setLayout(new BoxLayout(getContentPane(), BoxLayout.Y_AXIS));
  getContentPane().add(new JScrollPane(employeeTable));
  getContentPane().add(inputPanel);
 }

 private void addEmployee() {
  String eno = enoField.getText();
  String ename = enameField.getText();
  String salary = salaryField.getText();

  if (!eno.isEmpty() && !ename.isEmpty() && !salary.isEmpty()) {
   tableModel.addRow(new String[] { eno, ename, salary });
   enoField.setText("");
   enameField.setText("");
   salaryField.setText("");
  } else {
   JOptionPane.showMessageDialog(this, "Please enter all details.");
  }
 }

 public static void main(String[] args) {
  new Slip28b();
 }
}
`,
        },
      ],
    },
    {
      slipId: 29,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to check whether given candidate is eligible for voting or not. Handle user defined as well as system defined Exception. `,
          marks: 15,
          sol: `import java.util.Scanner;

class AgeException extends Exception {
 public AgeException(String message) {
  super(message);
 }

}

public class Slip29a {
 public static void main(String[] args) {
  Scanner scanner = new Scanner(System.in);

  try {
   System.out.print("Enter candidate's age: ");
   int age = scanner.nextInt();
   checkEligibility(age);
  } catch (AgeException e) {
   System.err.println("Age Exception: " + e.getMessage());
  } catch (Exception e) {
   System.err.println("System Exception: " + e.getMessage());
  }
  scanner.close();
 }

 public static void checkEligibility(int age) throws AgeException {
  if (age < 18) {
   throw new AgeException("Candidate is not eligible for voting. Age is less than 18.");
  } else {
   System.out.println("Candidate is eligible for voting.");
  }
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program using Applet for bouncing ball. Ball should change its color for each bounce.`,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Slip29b extends JFrame {

 private BallPanel ballPanel;

 public Slip29b() {
  setTitle("Bouncing Ball");

  initializeUI();
  setVisible(true);
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setSize(400, 400);
  setLocationRelativeTo(null);
 }

 private void initializeUI() {
  ballPanel = new BallPanel();
  add(ballPanel);

  Timer timer = new Timer(10, new ActionListener() {
   @Override
   public void actionPerformed(ActionEvent e) {
    ballPanel.moveBall();
   }
  });
  timer.start();
 }

 public static void main(String[] args) {
  new Slip29b();
 }

 private static class BallPanel extends JPanel {

  private int x = 50;
  private int y = 50;
  private int xSpeed = 2;
  private int ySpeed = 2;
  private Color ballColor;

  public BallPanel() {
   ballColor = getRandomColor();
  }

  @Override
  protected void paintComponent(Graphics g) {
   super.paintComponent(g);
   g.setColor(ballColor);
   g.fillOval(x, y, 50, 50);
  }

  public void moveBall() {
   if (x + xSpeed < 0 || x + xSpeed > getWidth() - 50) {
    xSpeed = -xSpeed;
    changeColor();
   }
   if (y + ySpeed < 0 || y + ySpeed > getHeight() - 50) {
    ySpeed = -ySpeed;
    changeColor();
   }
   x += xSpeed;
   y += ySpeed;
   repaint();
  }

  public void changeColor() {
   ballColor = getRandomColor();
   repaint();
  }

  private Color getRandomColor() {
   int red = (int) (Math.random() * 256);
   int green = (int) (Math.random() * 256);
   int blue = (int) (Math.random() * 256);
   return new Color(red, green, blue);
  }
 }
}
`,
        },
      ],
    },
    {
      slipId: 30,
      questions: [
        {
          questionId: 1,
          text: `Write a java program to accept a number from a user, if it is zero then throw user defined Exception “Number is Zero”. If it is non-numeric then generate an error “Number is Invalid” otherwise check whether it is palindrome or not.`,
          marks: 15,
          sol: `import java.util.Scanner;

class ZeroException extends Exception {
 public ZeroException(String message) {
  super(message);
 }

}

public class Slip30a {
 public static void main(String[] args) {
  Scanner scanner = new Scanner(System.in);

  try {
   System.out.print("Enter a number: ");
   String input = scanner.nextLine();
   checkNumber(input);
  } catch (ZeroException e) {
   System.err.println("Zero Exception: " + e.getMessage());
  } catch (NumberFormatException e) {
   System.err.println("Number is Invalid: " + e.getMessage());
  }
  scanner.close();
 }

 public static void checkNumber(String input) throws ZeroException {
  if (input.equals("0")) {
   throw new ZeroException("Number is Zero.");
  }

  try {
   int num = Integer.parseInt(input);

   if (isPalindrome(input)) {
    System.out.println("The number is a palindrome.");
   } else {
    System.out.println("The number is not a palindrome.");
   }
  } catch (NumberFormatException e) {
   throw new NumberFormatException("Number is Invalid");
  }
 }

 public static boolean isPalindrome(String str) {
  return str.equals(new StringBuilder(str).reverse().toString());
 }
}
`,
        },
        {
          questionId: 2,
          text: `Write a java program to design a following GUI (Use Swing).`,
          marks: 25,
          sol: `import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class Slip30b extends JFrame {

 private JTextField firstNameField, lastNameField, addressField, mobileNumberField;
 private JRadioButton maleRadioButton, femaleRadioButton;
 private JCheckBox computerCheckBox, sportsCheckBox, musicCheckBox;

 public Slip30b() {
  setTitle("Personal Information");
  initializeUI();
  setVisible(true);   
  setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  setSize(500, 400);
  setLocationRelativeTo(null);
 }

 private void initializeUI() {
  JPanel mainPanel = new JPanel(new GridLayout(9, 2, 3, 5));

  JPanel headingPanel = new JPanel(new FlowLayout(FlowLayout.CENTER));
  JLabel headingLabel = new JLabel("Personal Information");
  
  headingPanel.add(headingLabel);

  mainPanel.add(headingPanel);
  mainPanel.add(new JLabel());

  mainPanel.add(new JLabel("First Name:"));
  firstNameField = new JTextField();
  mainPanel.add(firstNameField);

  mainPanel.add(new JLabel("Last Name:"));
  lastNameField = new JTextField();
  mainPanel.add(lastNameField);

  mainPanel.add(new JLabel("Address:"));
  addressField = new JTextField();
  mainPanel.add(addressField);

  mainPanel.add(new JLabel("Mobile Number:"));
  mobileNumberField = new JTextField();
  mainPanel.add(mobileNumberField);

  mainPanel.add(new JLabel("Gender:"));
  JPanel genderPanel = new JPanel();
  maleRadioButton = new JRadioButton("Male");
  femaleRadioButton = new JRadioButton("Female");
  ButtonGroup genderGroup = new ButtonGroup();
  genderGroup.add(maleRadioButton);
  genderGroup.add(femaleRadioButton);
  genderPanel.add(maleRadioButton);
  genderPanel.add(femaleRadioButton);
  mainPanel.add(genderPanel);

  mainPanel.add(new JLabel("Your Interests:"));
  JPanel interestsPanel = new JPanel();
  computerCheckBox = new JCheckBox("Computer");
  sportsCheckBox = new JCheckBox("Sports");
  musicCheckBox = new JCheckBox("Music");
  interestsPanel.add(computerCheckBox);
  interestsPanel.add(sportsCheckBox);
  interestsPanel.add(musicCheckBox);
  mainPanel.add(interestsPanel);

  JButton submitButton = new JButton("Submit");
  JButton resetButton = new JButton("Reset");

  submitButton.addActionListener(new ActionListener() {
   @Override
   public void actionPerformed(ActionEvent e) {
    submitAction();
   }
  });

  resetButton.addActionListener(new ActionListener() {
   @Override
   public void actionPerformed(ActionEvent e) {
    resetAction();
   }
  });

  mainPanel.add(submitButton);
  mainPanel.add(resetButton);

  getContentPane().add(mainPanel);
 }

 private void submitAction() {
  System.out.println("First Name: " + firstNameField.getText());
  System.out.println("Last Name: " + lastNameField.getText());
  System.out.println("Address: " + addressField.getText());
  System.out.println("Mobile Number: " + mobileNumberField.getText());

  String gender = maleRadioButton.isSelected() ? "Male" : "Female";
  System.out.println("Gender: " + gender);

  System.out.println("Interests:");
  if (computerCheckBox.isSelected()) {
   System.out.println("- Computer");
  }
  if (sportsCheckBox.isSelected()) {
   System.out.println("- Sports");
  }
  if (musicCheckBox.isSelected()) {
   System.out.println("- Music");
  }
 }

 private void resetAction() {
  firstNameField.setText("");
  lastNameField.setText("");
  addressField.setText("");
  mobileNumberField.setText("");
  maleRadioButton.setSelected(false);
  femaleRadioButton.setSelected(false);
  computerCheckBox.setSelected(false);
  sportsCheckBox.setSelected(false);
  musicCheckBox.setSelected(false);
 }

 public static void main(String[] args) {
  new Slip30b();
 }
}
`,
        },
      ],
    },
  ],
  language: 'java',
}
