const php = [
  {
    subject: 'Php',
    slips: [
      {
        slipId: 1,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept a string. Write a function to count the total number of vowels (a,e,i,o,u) from the string. Show the occurrences of each vowel from the string. Check whether the given string is a palindrome or not, without using built-in functions. (Use radio buttons and the concept of function. Use ‘include’ construct or require statement.)`,
            marks: 25,
            sol: `<!-- index.html  -->

<html>
    <head></head>
    <body>
        <form method="Post" action="function.php">
            Enter the string :
            <input type="text" name="str"><br><br>
            Choose :
            <input type="radio" name="choice" value="vowels">String Occurrence
            <input type="radio" name="choice" value="palidrome">Palidrome<br><br>
            <input type="submit" value="submit">
        </form>
    </body>
<html>


<!-- function.php  -->

<?php 

function strVovels($str){
    $str = strtolower($str);
    $vowels = array('a'=>0, 'e'=>0, 'i'=>0, 'o'=>0, 'u'=>0);
    for($i=0; $i<strlen($str); $i++){
        $char = $str[$i];
        if(array_key_exists($char, $vowels)){
           $vowels[$char]++;
        }
    }
    echo "Occurrences of each vovels :<br>";
    foreach($vowels as $vowel => $count){
        echo "$vowel : $count <br>";
    }
}

function palindrome($str){
    $str = strtolower($str);
    if($str == strrev($str)){
        echo "$str is Palindrome";
    }else{
        echo "$str is not Palindrome";
    }
}


    $str = $_POST['str'];   
    $choice = $_POST['choice'];

    if($choice == 'vowels'){
        strVovels($str);
    }
    else{
        palindrome($str);

}


?>`,
          },
        ],
      },
      {
        slipId: 2,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept two strings from the user. Find the first occurrence and the last occurrence of the small string in the large string. Also count the total number of occurrences of the small string in the large string. Provide a text box to accept a string, which will replace the small string in the large string. (Use built-in functions)`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <head></head>
    <body>
        <form method="post" action="">
            Enter the Large String :
            <input type="text" name="str1"><br><br>
            Enter the Small String :
            <input type="text" name="str2"><br><br>
            Enter String to Replace :
            <input type="text" name="str3" ><br><br>
            <input type="submit" name="submit" value="submit">
        </form>

        <?php 
        
        if(isset($_POST['submit'])){
            $str1 = $_POST['str1'];
            $str2 = $_POST['str2'];
            $str3 = $_POST['str3'];

            $first = strpos($str1, $str2);
            $last = strrpos($str1, $str2);
            $total = substr_count($str1, $str2);
            $replace = str_replace($str2, $str3, $str1);

            echo "first occurrences of string : $first <br>";
            echo "Last occurrences of string : $last <br>";
            echo "replace string : $replace";
        }

        ?>
    </body>
</html>`,
          },
        ],
      },
      {
        slipId: 3,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept two numbers from the user. Give options to choose the arithmetic operation (use radio buttons). Display the result on the next form. (Use the concept of function and default parameters. Use ‘include’ construct or require stmt)`,
            marks: 25,
            sol: `<!-- index.html  -->

<!DOCTYPE html>
<html>
  <head>
    <title>Simple Calculator</title>
  </head>
  <body>
    <h3>Simple Calculator</h3>
    <form action="3.php" method="GET">
      <table>
        <tr>
          <td><h3>Enter first number:</h3></td>
          <td><input type="text" name="no1" required /></td>
        </tr>
        <tr>
          <td><h3>Enter second number:</h3></td>
          <td><input type="text" name="no2" required /></td>
        </tr>
        <tr>
          <td><b>Select the operation you want to perform:</b></td>
        </tr>
        <tr>
          <td><input type="radio" value="1" name="cal" required />Addition</td>
        </tr>
        <tr>
          <td><input type="radio" value="2" name="cal" />Subtraction</td>
        </tr>
        <tr>
          <td><input type="radio" value="3" name="cal" />Multiplication</td>
        </tr>
        <tr>
          <td><input type="radio" value="4" name="cal" />Division</td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" name="submit" value="Calculate" /></td>
        </tr>
      </table>
    </form>
  </body>
</html>


<!-- 3.php  -->

<?php
// Get the numbers and the selected operation from the form
$number1 = $_POST['number1'];
$number2 = $_POST['number2'];
$operation = $_POST['operation'];

// Function to perform the calculation based on the operation
function calculate($number1, $number2, $operation) {
    switch ($operation) {
        case 'add':
            return $number1 + $number2;
        case 'subtract':
            return $number1 - $number2;
        case 'multiply':
            return $number1 * $number2;
        case 'divide':
            if ($number2 != 0) {
                return $number1 / $number2;
            } else {
                return "Error: Division by zero!";
            }
        default:
            return "Invalid operation selected.";
    }
}

// Call the function and store the result
$result = calculate($number1, $number2, $operation);

// Display the result
echo "<h2>Result: $result</h2>";
?>
`,
          },
        ],
      },
      {
        slipId: 4,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept two strings from the user. Find whether the small string appears at the start of the large string. Provide a text box to accept the string that will replace all occurrences of small string present in the large string. Also split the large string into separate words. (Use regular expressions)`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <head></head>
    <body>
        <form method="post" action="#">
            Enter Small String :
            <input type="text" name="str1"><br><br>
            Enter Large String :
            <input type="text" name="str2"><br><br>
            Enter string to replace :
            <input type="text" name="str3" ><br><br>
            Choose :
            <input type="radio" name="choice" value="1">Occurrence
            <input type="radio" name="choice" value="2">Replace
            <input type="radio" name="choice" value="3">Split <br><br>
            <input type="submit" name ="submit" value="submit">
        </form>

        <?php 
        
            if(isset($_POST['submit'])){
                $str1 = $_POST['str1'];
                $str2 = $_POST['str2'];
                $str3 = $_POST['str3'];
                $choice = $_POST['choice'];

                switch($choice){
                    case 1 : $first = strpos($str2, $str1);
                    if($first == 0){
                        echo "$str1 string appear at first of $str2 string";
                    }
                    else{
                        echo "String not appear at first";
                    }
                    break;
                    case 2 :
                        str_replace($str1, $str3,  $str2);
                        echo "Replace string : $str1";
                        break;
                    case 3 : 
                       $str = preg_split('/[\s]/', $str2);
                        echo "Words in Large string :<br>";
                        foreach($str as $words)
                        echo "$words <br>";
                        break;
                }
            }
        ?>
    </body>
</html>`,
          },
        ],
      },
      {
        slipId: 5,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following: Design a form to accept the details of 5 different items, such as item code, item name, units sold, rate. Display the bill in the tabular format. Use only 4 text boxes. (Hint : Use of explode function.)`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <head></head>
    <body>
        <form method="post" action="display.php">
            Enter item details : 
            <input type="text" name="itemDetails"> <br> 
            (code, name, unit, rate *Separated by space*)<br><br>
            <input type="submit" name="gBill" value="Generate Bill">
        </form>
    </body>
</html>


<!-- display.php  -->

<html>
    <head></head>
    <body>

<?php 

if(isset($_POST['gBill'])){
    $itemDetails = $_POST['itemDetails'];

    $item = explode(' ', $itemDetails);

    if(count($item) % 4 == 0){
        echo "<table border='1'>";
        echo "<tr><th>Item Code</th><th>Item Name</th><th>Units sold</th><th>Rate</th><th>Total Amount</th></tr>";
        for($i=0; $i < count($item); $i+=4){
                $code = $item[$i];
                $name = $item[$i+1];
                $unit = $item[$i+2];
                $rate = $item[$i+3];
                $total = $unit * $rate;
                echo "<tr><td>$code</td><td>$name</td><td>$unit</td><td>$rate</td><td>$total</td></tr>";
        }

    }else{
        echo "invalid input";
    }
}

?>

    </body>
</html>
`,
          },
        ],
      },
      {
        slipId: 6,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script for the following:<br>
             Design a form to accept two strings. Compare the two strings using both methods (= = operator & strcmp function).<br>
             Append the second string to the first string.<br>
             Accept the position from the user; from where the characters from the first string are reversed. (Use radio buttons)`,
            marks: 25,
            sol: `<!-- index.php  -->

<htlml>
    <head></head>
    <body>
        <form method="post" action="#">
            Enter the First String :
            <input type="text" name="str1"><br><br>
            Enter the Second String :
            <input type="text" name="str2"><br><br>
            Choose the method to compare string :
            <input type="radio" name="choice" value="operator"> Using ==
            <input type="radio" name="choice" value="function"> Using strcmp function <br><br>
            Enter the Position from you want to reverse the String :
            <input type="number" name="pos"><br><br>
            <input type="submit" name="submit" value="Manipulate">
        </form>

        <?php
    if(isset($_POST['submit'])) {
        $str1 = $_POST['str1'];
        $str2 = $_POST['str2'];
        $pos = $_POST['pos'];
        $choice = $_POST['choice'];

        if ($choice == 'operator') {
            if ($str1 == $str2) {
                echo "$str1 is equal to $str2 <br>";
            } else {
                echo "$str1 is not equal to $str2 <br>";
            }
        } else {
            if (strcmp($str1, $str2) === 0) {
                echo "$str1 is equal to $str2 <br>";
            } else {
                echo "$str1 is not equal to $str2 <br>";
            }
        }

        // Concatenate the two strings
        $appendStr = $str1 . $str2;
        echo "Concatenated String: $appendStr <br>";

        $reverseStr = '';
            for($i=0; $i <= $pos; $i++){
                $reverseStr .= $str1[$i];
            }
            for($i = $pos; $i>=0; $i--)
            $reverseStr .= $str1[$i];

            echo "Reverse String : $reverseStr";
        }

        ?>

    </body>
</html>`,
          },
        ],
      },
      {
        slipId: 7,
        questions: [
          {
            questionId: 1,
            text: `Write a menu driven PHP program to perform the following operations on an associative array:<br>
             i. Display the elements of an array along with the keys.<br>
             ii. Display the size of an array.<br>
             iii. Delete an element from an array from the given index.<br>
             iv. Reverse the order of each element’s key-value pair. [Hint: use array_flip()]<br>
             v. Traverse the elements in an array in random order. [Hint: use shuffle()]`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <head></head>
    <body>  
        Choose from the following operation : <br><br>
        1. Display the elements of an array along with the keys.<br>
        2. Display the size of an array<br>
        3. Delete an element from an array from the given index.<br>
        4. Reverse the order of each element’s key-value pair<br>
        5. Traverse the elements in an array in random order   <br><br>
        
        Enter the Number :
        <form action="" method="post">
            <input type="number" name="choice"><br><br>
            Enter Index to Delete :<br>
            <input type="number" name="index"><br><br>
            <input type="submit" name="run" value="run">
        </form>
            <?php
            
            if(isset($_POST['run'])){
                $choice = $_POST['choice'];

                $students = array(
                    "Student1" => "Yash",
                    "Student2" => "Tony",
                    "Student3" => "Master",
                    "Student4" => "chatur"
                );
                
                switch($choice){
                    case 1 :
                        echo "Display the array :<br>";
                        foreach($students as $student => $value){
                            echo "$student : $value <br>";
                        }
                        break;
                    case 2 :
                        echo "Size of associative array is :" . count($students);
                        break;
                    case 3 :
                        if(isset($_POST['index'])){
                            $index = $_POST['index'];
                            unset($students[$index]);
                            echo "index deleted<br>";
                        }
                        break;
                    case 4 :
                        $students = array_flip($students);
                        echo "Array after flipping the key-value element :<br>";
                        foreach($students as $student => $value){
                            echo "$student => $value<br>";
                        }
                        break;
                    case 5 :
                        shuffle($students);
                        print_r($students);
                        break;
                    default :
                    echo "Invalide Choice ";                        
                }
                
            }
        ?>
    </body>
</html>`,
          },
        ],
      },
      {
        slipId: 8,
        questions: [
          {
            questionId: 1,
            text: `Write a menu driven PHP program to perform the following operations on associative arrays:<br>
             a) Sort the array by values (changing the keys) in ascending, descending order.<br>
             b) Also sort the array by values without changing the keys.<br>
             c) Filter the odd elements from an array.<br>
             d) Sort the different arrays at a glance using single function.<br>
             e) Merge the given arrays.<br>
             f) Find the Union, intersection & set difference of two arrays.`,
            marks: 25,
            sol: `<html>
    <head></head>
    <body>
        Choose from the Following : <br><br>
        1. Sort the array by values (changing the keys) in ascending, descending order.<br>
        2. Also sort the array by values without changing the keys.<br>
        3. Filter the odd elements from an array.<br>
        4. Merge the given arrays.<br>
        5. Find the Union, intersection& set difference of two arrays.<br><br>

        <form method="post" action="">
            Enter Your Choice :
            <input type="number" name="choice"><br><br>
            <input type="submit" name="Run" value="run">
        </form>

        <?php 
        
            if(isset($_POST['Run'])){
                $choice = $_POST['choice'];

                $array1 = array('a' => 1, 'b' => 4, 'c' => 5, 'd' => 8);
                $array2 = array('e' => 2, 'f' => 5, 'g' => 6, 'h' => 7);
                switch($choice){
                    case 1 :
                        asort($array1);
                        echo "Ascending order of array :";
                        print_r($array1);
                        arsort($array1);
                        echo "<br>Descending order of array :";
                        print_r($array1);
                        break;
                    case 2 :
                        sort($array1);
                        echo "Sorted array without changing the keys :";
                        print_r($array1);
                        break;
                    case 3 :
                        function oddelement($num){
                            return ($num % 2 == 1);
                        }
                        echo "Filterd array :";
                        print_r(array_filter($array1,'oddelement'));
                        break;
                    case 4 :
                        echo "Merged Arrays : ";
                        print_r(array_merge($array1, $array2));
                        break;
                    case 5 :
                        echo "Union of array :";
                        print_r(array_merge($array1, $array2));
                        echo "<br>Intersection of array :";
                        print_r(array_intersect($array1, $array2));
                        echo "<br>Difference of two array :";
                        print_r(array_diff($array1, $array2));
                        break;
                    default :
                    echo "Invalide Choice";                   
                }
            }
        ?>
    </body>
</html>`,
          },
        ],
      },
      {
        slipId: 9,
        questions: [
          {
            questionId: 1,
            text: `Write PHP script to define an interface which has methods area(), volume(). Define constant PI.<br>
             Create a class cylinder which implements this interface and calculate area and volume.`,
            marks: 25,
            sol: `<html>
<head></head>
<body>  
    <form method="post" action="">
        Enter the Radius of Cylinder:
        <input type="number" name="r"><br><br>
        Enter the Height of Cylinder:
        <input type="number" name="h"><br><br>
        <input type="submit" name="submit" value="run">
    </form>
    
<?php
if(isset($_POST['submit'])){
    $r = $_POST['r'];
    $h = $_POST['h'];

    define('PI', 3.14);

    interface cal{
        function area($r, $h);
        function vol($r, $h);
    }

    class cylinder{
        function area($r, $h){
            $area = 2 * PI * $r * ($r + $h);
            echo "Area of cylinder is: $area <br>";
        }
        function vol($r, $h){
            $vol = PI * $r * $r * $h;
            echo "Volume of cylinder is: $vol";
        }
    }

    $c = new cylinder;
    $c->area($r, $h);
    $c->vol($r, $h);
}
?>
</body>
</html>
`,
          },
        ],
      },
      {
        slipId: 10,
        questions: [
          {
            questionId: 1,
            text: `Write class declarations and member function definitions for an employee (code, name, designation). Design derived classes as emp_account (account_no, joining_date) from employee and emp_sal (basic_pay, earnings, deduction) from emp_account.<br>
             Write a menu driven PHP program:<br>
             a) to build a master table<br>
             b) to sort all entries<br>
             c) to search an entry<br>
             d) Display salary.`,
            marks: 25,
            sol: `<!DOCTYPE html>
<html>
    <body>
        <form method="post" action="">
            Choose from the following : <br><br>
            1] to build a master table <br>
            2] to sort all entries <br>
            3] to search an entry <br>
            4] Display salary <br><br>
            Enter your choice :<br>
            <input type="number" name="choice"><br><br>
            Enter Name To Search :<br>
            <input type="text" name="sName"><br><br>
            <input type="submit" name="submit" value="run">
        </form>

        <?php 
        class Employee {
            public $code, $name, $designation;

            function __construct($c, $n, $d) {
                $this->code = $c;
                $this->name = $n;
                $this->designation = $d;
            }
            function getName(){
                return $this->name;
            }
        }

        class EmpAcc extends Employee {
            public $ano, $jdate;

            function __construct($c, $n, $d, $no, $jdate) {
                parent::__construct($c, $n, $d);
                $this->ano = $no;
                $this->jdate = $jdate;
            }
        }

        class EmpSal extends EmpAcc {
            public $bPay, $earn, $deduct, $total;

            function __construct($c, $n, $d, $no, $jdate, $bPay, $earn, $deduct) {
                parent::__construct($c, $n, $d, $no, $jdate);
                $this->bPay = $bPay;
                $this->earn = $earn;
                $this->deduct = $deduct;
                $this->total = $this->bPay + $this->earn - $this->deduct;
            }
        }

        // Create some sample employees
        $emp = array(
            new EmpSal('100', 'Loka', 'Manager', '12345', '2023-01-15', 50000, 7000, 3000),
            new EmpSal('101', 'Myra', 'Engineer', '23451', '2023-02-10', 45000, 6000, 2500)
        );

        function table($emp){
            echo "<table border='1'>";
            echo "<tr><th>Code</th><th>Name</th><th>Designation</th><th>Account No</th><th>Join Date</th><th>Basic Pay</th><th>Earning</th><th>Deduction</th></tr>";
            foreach ($emp as $employee) {
                echo "<tr>";
                echo "<td>".$employee->code."</td>";
                echo "<td>".$employee->name."</td>";
                echo "<td>".$employee->designation."</td>";
                echo "<td>".$employee->ano."</td>";
                echo "<td>".$employee->jdate."</td>";
                echo "<td>".$employee->bPay."</td>";
                echo "<td>".$employee->earn."</td>";
                echo "<td>".$employee->deduct."</td>";
                echo "</tr>";
            }
            echo "</table>";
        }

        function sortCode($a, $b){
            return strcmp($a->code, $b->code);
        }

        if (isset($_POST['submit'])) {
            $choice = $_POST['choice'];

            switch ($choice) {
                case 1:
                    table($emp);
                    break;
                case 2:
                    usort($emp, "sortCode");
                    table($emp);
                    break;
                case 3:
                    if(isset($_POST['sName'])){
                        $ename = $_POST['sName'];
                        $found = false;
                        foreach ($emp as $employee) {
                            $temp = $employee->getName();
                            if ($temp === $ename) {
                                echo "$temp is found in records";
                                $found = true;
                                break;
                            }
                        }
                        if (!$found) {
                            echo "$ename not found in records";
                        }
                    }
                    break;
                case 4:
                    foreach($emp as $employee){
                        echo "Employee Name : $employee->name" . "<br>";
                        echo "Employee salary : $employee->total" . "<br>";
                    }
                    break;
                default:
                    echo "Invalid choice";
            }
        }
        ?>
    </body>
</html>
`,
          },
        ],
      },
      {
        slipId: 11,
        questions: [
          {
            questionId: 1,
            text: `Derive a class square from class Rectangle. Create one more class circle.<br>
             Create an interface with only one method called area(). Implement this interface in all the classes.<br>
             Include appropriate data members and constructors in all classes.<br>
             Write a PHP program to accept details of a square, circle and rectangle and display the area.`,
            marks: 25,
            sol: `<!-- index.php  -->

<!DOCTYPE html>
<html>
    <body>
        <form action="" method="post">
            <h3>Square:</h3>
            Enter the side of Square:
            <input type="number" name="s"><br>
            <input type="submit" name="submit1" value="Calculate">
            <h3>Rectangle:</h3>
            Enter the width of Rectangle:
            <input type="number" name="w"><br>
            Enter the height of Rectangle:
            <input type="number" name="h"><br>
            <input type="submit" name="submit2" value="Calculate">
            <h3>Circle:</h3>
            Enter the radius of Circle:
            <input type="number" name="r"><br>
            <input type="submit" name="submit3" value="Calculate">
        </form>

        <?php
        interface AreaFun {
            function area($a, $b);
        }

        class Rectangle implements AreaFun {
            function area($w, $h) {
                $area = $w * $h;
                echo "Area Of Rectangle: " . $area . "<br>";
            }
        }

        class Square extends Rectangle {
            function area($s, $s1) {
                $area = $s * $s1;
                echo "Area Of Square: " . $area . "<br>";
            }
        }

        class Circle implements AreaFun {
            function area($r, $r1) {
                $area = 3.14 * $r * $r1;
                echo "Area Of Circle: " . $area . "<br>";
            }
        }
        
        if(isset($_POST['submit1'])){
            $side = $_POST["s"];
            $obj = new Square();
            $obj->area($side, $side);
        }
        if(isset($_POST['submit2'])){
            $w = $_POST['w'];
            $h = $_POST['h'];
            $rect = new rectangle();
            $rect->area($w,$h);
        }
        if(isset($_POST['submit3'])){
            $r = $_POST["r"];
            $cir = new Circle();
            $cir->area($r, $r);
        }
        ?>
    </body>
</html>
`,
          },
        ],
      },
      {
        slipId: 12,
        questions: [
          {
            questionId: 1,
            text: `Write PHP Script to create a class account (accno, cust_name).<br>
             Derive two classes from account as saving_acc (balance, min_amount) and current_acc (balance, min_amount).<br>
             Display a menu:<br>
             a) Saving Account<br>
             b) Current Account<br>
             For each of this, display a menu with the following options:<br>
             1. Create account<br>
             2. Deposit<br>
             3. Withdrawal`,
            marks: 25,
            sol: `<!-- index.html  -->

<!DOCTYPE html>
<html>
  <body>
    <form action="12.php" method="GET">
      Please select your Account<br />

      <input type="checkbox" name="check_b[]" value="saving" /> Saving
      Account<br />
      <input type="checkbox" name="check_b[]" value="current" /> Current
      Account<br />

      <select id="saving" name="operation">
        <option value="create">Create</option>
        <option value="deposit">Deposit</option>
        <option value="withdraw">Withdraw</option></select
      ><br /><br />

      <input type="submit" value="Submit" />
    </form>
  </body>
</html>


<!-- 12.php  -->

<!DOCTYPE html>
<html>
<body>

<?php
class Account {
    public $acc_no;
    public $acc_name;

    public function __construct($acc_name, $acc_no) {
        $this->acc_name = $acc_name;
        $this->acc_no = $acc_no;
    }

    public function intro() {
        echo "The Account name is {$this->acc_name} and Account No is {$this->acc_no}.";
    }
}

class Saving_acc extends Account {
    public $balance;
    public $min_amount;

    public function __construct($acc_name, $acc_no, $balance, $min_amount) {
        parent::__construct($acc_name, $acc_no);
        $this->balance = $balance;
        $this->min_amount = $min_amount;
    }

    public function intro() {
        echo "<table border='2'>";
        echo "<tr><td>Account Name</td><td>Account No</td><td>Balance</td><td>Min Balance</td></tr>";
        echo "<tr><td>{$this->acc_name}</td>";
        echo "<td>{$this->acc_no}</td>";
        echo "<td>{$this->balance}</td>";
        echo "<td>{$this->min_amount}</td></tr>";
    }
}

class Current_acc extends Account {
    public $balance;
    public $min_amount;

    public function __construct($acc_name, $acc_no, $balance, $min_amount) {
        parent::__construct($acc_name, $acc_no);
        $this->balance = $balance;
        $this->min_amount = $min_amount;
    }

    public function intro() {
        echo "<tr><td>{$this->acc_name}</td>";
        echo "<td>{$this->acc_no}</td>";
        echo "<td>{$this->balance}</td>";
        echo "<td>{$this->min_amount}</td></tr>";
    }
}

echo "</table>";

$saving_acc = new Saving_acc("Ravindra", 1111, 5000, 1000);
$saving_acc->intro();

$current_acc = new Current_acc("Kiran", 2222, 100000, 1000);
$current_acc->intro();

?>

</body>
</html>
`,
          },
        ],
      },
      {
        slipId: 13,
        questions: [
          {
            questionId: 1,
            text: `Implement calculator to convert distances between (both ways) miles and kilometres.<br>
             One mile is about 1.609 kilometres.<br>
             User interface (distance.html) has one text-input, two radio-buttons, submit and reset buttons.<br>
             Values are posted to PHP-script (distance.php) which calculates the conversions according to user input.`,
            marks: 25,
            sol: `<!-- index.html  -->

<html>
  <body>
    <h1>Distance Convert</h1>
    <form method="post" action="distance.php">
      Enter the Distance :
      <input type="number" name="dist" /><br />
      Select Unit :
      <input type="radio" name="unit" value="Mile" /> Miles
      <input type="radio" name="unit" value="kilo" /> Kilometers<br />
      <input type="submit" name="convert" value="convert" />
      <input type="reset" name="reset" />
    </form>
  </body>
</html>


<!-- distance.php  -->

<html>
    <body>

<?php

if(isset($_POST['convert'])){
    $dist = $_POST['dist'];
    $unit = $_POST['unit'];

    if($unit === 'kilo'){
        $mile = $dist / 1.609;
        echo "$dist kilometer is equal to the $mile miles. <br><br>";
    }else{
        $kilo = $dist * 1.609;
        echo "$dist mile is equal to the $kilo kilometers. <br><br>";
    }
    
}
?>
<a href="distance.html">Go back</a>
    </body>
</html>`,
          },
        ],
      },
      {
        slipId: 14,
        questions: [
          {
            questionId: 1,
            text: `Using regular expressions check for the validity of entered email-id.<br>
             The @ symbol should not appear more than once.<br>
             The dot (.) can appear at the most once before @ and at the most twice or at least once after @ symbol.<br>
             The substring before @ should not begin with a digit or underscore or dot or @ or any other special character.<br>
             (Use explode and ereg function.)`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
<head></head>
<body>
    <h1>Email Validation</h1>
    <form action="" method="post">
        Enter your email address: 
        <input type="text" name="email"><br>
        <input type="submit" name="check" value="Check">
    </form>

    <?php
    if(isset($_POST['check'])){
        $email = $_POST['email'];

        if (preg_match('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$^', $email)) {
            echo "Valid Email Address";
        } else {
            echo "Invalid Email Address";
        }
    }
    ?>
</body>
</html>
    `,
          },
        ],
      },
      {
        slipId: 15,
        questions: [
          {
            questionId: 1,
            text: `Write PHP program to create input form for Grocery that displays List of grocery items with checkboxes.<br>
             Create a bill according to list of items selected after clicking submit button.`,
            marks: 25,
            sol: `<!-- index.php  -->

<!DOCTYPE html>
<html>
<head>
    <title>Grocery List</title>
</head>
<body>
    <h1>Grocery List</h1>
    <form method="post">
        <h2>Select Grocery Items:</h2>
        <input type="checkbox" name="items[]" value="Apple"> Apple - $1.00<br>
        <input type="checkbox" name="items[]" value="Banana"> Banana - $0.50<br>
        <input type="checkbox" name="items[]" value="Milk"> Milk - $2.00<br>
        <input type="checkbox" name="items[]" value="Bread"> Bread - $1.50<br>
        <input type="checkbox" name="items[]" value="Eggs"> Eggs - $2.50<br>
        <input type="checkbox" name="items[]" value="Chicken"> Chicken - $5.00<br>

        <h2>Quantity:</h2>
        <input type="number" name="quantity" value="1" min="1"><br><br>

        <input type="submit" name="calculate" value="Calculate Bill">
    </form>

    <?php
    if (isset($_POST['calculate'])) {
        $selectedItems = $_POST['items'] ?? [];
        $quantity = isset($_POST['quantity']) ? intval($_POST['quantity']) : 1;
        $totalCost = 0;

        $itemPrices = [
            'Apple' => 1.00,
            'Banana' => 0.50,
            'Milk' => 2.00,
            'Bread' => 1.50,
            'Eggs' => 2.50,
            'Chicken' => 5.00,
        ];

        foreach ($selectedItems as $item) {
            if (array_key_exists($item, $itemPrices)) {
                $totalCost += $itemPrices[$item] * $quantity;
            }
        }

        echo "<h2>Bill:</h2>";
        echo "Total Cost: $" . number_format($totalCost, 2);
    }
    ?>

</body>
</html>
`,
          },
        ],
      },
      {
        slipId: 16,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP program that accepts customer name, consumer number, and number of electricity units consumed from an input form and prints the electricity bill from the following data:<br>
             ● For the first 50 units – Rs. 3.50/unit<br>
             ● For the next 100 units – Rs. 4.00/unit<br>
             ● For the next 100 units – Rs. 5.20/unit<br>
             ● For units above 250 – Rs. 6.50/unit<br>
             ● Fixed meter and service charge – Rs. 150/-`,
            marks: 25,
            sol: `<!-- index.php  -->

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $consumer_number = $_POST['consumer_number'];
    $units = $_POST['units'];

    $bill = 150; // fixed meter and service charge
    if ($units <= 50) {
        $bill += $units * 3.50;
    } elseif ($units <= 150) {
        $bill += 50 * 3.50 + ($units - 50) * 4.00;
    } elseif ($units <= 250) {
        $bill += 50 * 3.50 + 100 * 4.00 + ($units - 150) * 5.20;
    } else {
        $bill += 50 * 3.50 + 100 * 4.00 + 100 * 5.20 + ($units - 250) * 6.50;
    }

    echo "Customer Name: " . $name . "<br>";
    echo "Consumer Number: " . $consumer_number . "<br>";
    echo "Electricity Bill: Rs." . number_format($bill, 2);
} else {
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="name">Customer Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="consumer_number">Consumer Number:</label><br>
    <input type="text" id="consumer_number" name="consumer_number"><br>
    <label for="units">Units Consumed:</label><br>
    <input type="number" id="units" name="units"><br>
    <input type="submit">
</form>

<?php
}
?>
`,
          },
        ],
      },
      {
        slipId: 17,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP program for course registration of a learner in an institute that accepts Name, Course to be admitted, Mobile number using input form validation such as Name should be only a string of characters, mobile number should contain digits with valid length, and so on. Provide feedback to the learner with registration details including registration number.`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <head></head>
    <body>
        <form method="post" action="">
            <h2>Course Registration</h2>
            Student Name :
            <input type="text" name="name" ><br>
            Mobile Number :
            <input type="number" name="number" required pattern ="[0-9]{10}"><br>
            Course Name :
            <input type="text" name="cname"><br>
            <input type="submit" name="regi" value="Register">
        </form>

        <?php
        
        if(isset($_POST['regi'])){
            $name = $_POST['name'];
            $number = $_POST['number'];
            $course = $_POST['cname'];

            if(!preg_match('/^[a-zA-Z\s]+$/', $name)){
                echo "Invalid Name Enter Valid Name ";
            }else{
                $registerNumber = "REG" . rand(1000, 9999);

                echo "<h2>Registration Details </h2>";
                echo "Student Name : ". $name . "<br>";
                echo "Course :" . $course . "<br>";
                echo "Mobile Number :" . $number . "<br>";
                echo "Registration Number :" . $registerNumber;
            }
        }
        
        ?>
    </body>
</html>`,
          },
        ],
      },
      {
        slipId: 18,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to create a login form with a username and password. Once the user logs in, the second form should be displayed to accept user details (name, city, phone number). If the user doesn’t enter information within a specified time limit, expire their session and give a warning.`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <body>
        <form method="post" action="login.php">
            UserName : <input type="email" name="username"><br>
            Password : <input type="password" name="password"><br>
            <input type="submit" name="login" value ="Log In">
        </form>
    </body>
</html>



<!-- login.php  -->

<html>
    <body>
    <?php        
        if(isset($_POST['login'])){
            $user = $_POST['username'];
        
            echo "Welcome, $user";
            echo "<form method='post' action='display.php'>
                Name : <input type='text' name = 'name'><br>
                City : <input type='text' name='city'><br>
                Phone No : <input type='number' name='no'><br>
                <input type='submit' name ='submit' value='submit'>
                </form>";
        }else{
            echo "Invalide Login";
        }
            
    ?>
    </body>
</html>


<!-- display.php  -->

<?php
session_start();

if (isset($_POST['submit'])) {
    $name = $_POST["name"];
    $city = $_POST['city'];
    $no = $_POST['no'];
    
    // Store the submitted data in session variables
    $_SESSION['name'] = $name;
    $_SESSION['city'] = $city;
    $_SESSION['no'] = $no;
}

// Set a session timeout
$session_timeout = 10; 
$current_time = time();

if (isset($_SESSION['timeout']) && $current_time > $_SESSION['timeout']) {
    // Session has expired, unset session variables
    session_unset();
    session_destroy();
    echo "Session expired. Please submit the form again.";
} else {
    // Extend the session timeout
    $_SESSION['timeout'] = $current_time + $session_timeout;
    
    echo "<h2>User Details:</h2>";
    echo "Name: " . $_SESSION['name'] . "<br>";
    echo "City: " . $_SESSION['city'] . "<br>";
    echo "Phone No: " . $_SESSION['no'];
}
?>
`,
          },
        ],
      },
      {
        slipId: 19,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to keep track of the number of times the web page has been accessed.`,
            marks: 25,
            sol: `<!-- index.php  -->

<?php
session_start();

if (isset($_SESSION['views'])) {
    $_SESSION['views'] = $_SESSION['views'] + 1;
} else {
    $_SESSION['views'] = 1;
}

echo "This page has been accessed " . $_SESSION['views'] . " times.";
?>
`,
          },
        ],
      },
      {
        slipId: 20,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to change the preferences of your web page like font style, font size, font color, background color using cookies. Display selected settings on the next web page and actual implementation (with new settings) on the third web page.`,
            marks: 25,
            sol: `<!-- index.html  -->

<html>
  <body>
    <form action="display.php" method="post">
      Enter String : <input type="text" name="str" /><br /><br />
      Enter Font family: <input type="text" name="fontF" /><br /><br />
      Enter Font Size : <input type="number" name="fSize" /><br /><br />
      Enter Font Color : <input type="color" name="fColor" /><br /><br />
      Enter Background Color : <input type="color" name="bgC" /><br /><br />
      <input type="submit" name="submit" />
    </form>
  </body>
</html>


<!-- display.php  -->

<?php
    if(isset($_POST['submit'])){
        setcookie('str', $_POST['str']);
        setcookie('fontF', $_POST['fontF']);
        setcookie('fSize', $_POST['fSize']);
        setcookie('fColor', $_POST['fColor']);
        setcookie('bgColor', $_POST['bgC']);

        echo "<h2>You Select :</h2>";
        echo "Font Family :" .$_POST['fontF']. "<br>";
        echo "Font Size :" .$_POST['fSize']. "<br>";
        echo "Font Color :" .$_POST['fColor']. "<br>";
        echo "Background Color :" .$_POST['bgC']. "<br>";
        echo "<a href = 'view.php'> Show Output </a>";
    }
?>


<!-- view.php  -->

<?php
    $str = $_COOKIE['str'];
    $fontF = $_COOKIE['fontF'];
    $fSize = $_COOKIE['fSize'];
    $fColor =  $_COOKIE['fColor'];
    $bgColor =  $_COOKIE['bgColor'];
    echo "<body style ='color : $fColor; background-color : $bgColor; font-family: $fontF; font-size : $fSize;'";
    echo "<h1>$str</h1>";
?>`,
          },
        ],
      },
      {
        slipId: 21,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to create a form to accept student information (name, class, address). Once the student information is accepted, accept marks in the next form (Phy, Bio, Chem, Maths, Marathi, English). Display the mark sheet for the student in the next form containing name, class, marks of the subjects, total, and percentage.`,
            marks: 25,
            sol: `<!-- index.php  -->

<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {
        $_SESSION['name'] = $_POST['name'];
        $_SESSION['class'] = $_POST['class'];
        $_SESSION['address'] = $_POST['address'];
    } else {
        $marks = array($_POST['phy'], $_POST['bio'], $_POST['chem'], $_POST['maths'], $_POST['marathi'], $_POST['english']);
        $total = array_sum($marks);
        $percentage = $total / 6;

        echo "Name: " . $_SESSION['name'] . "<br>";
        echo "Class: " . $_SESSION['class'] . "<br>";
        echo "Marks: Phy - " . $marks[0] . ", Bio - " . $marks[1] . ", Chem - " . $marks[2] . ", Maths - " . $marks[3] . ", Marathi - " . $marks[4] . ", English - " . $marks[5] . "<br>";
        echo "Total: " . $total . "<br>";
        echo "Percentage: " . number_format($percentage, 2) . "%";
    }
} else {
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="class">Class:</label><br>
    <input type="text" id="class" name="class"><br>
    <label for="address">Address:</label><br>
    <input type="text" id="address" name="address"><br>
    <input type="submit">
</form>

<?php
}
?>

<?php
if (isset($_SESSION['name'])) {
?>

<form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="phy">Phy:</label><br>
    <input type="number" id="phy" name="phy"><br>
    <label for="bio">Bio:</label><br>
    <input type="number" id="bio" name="bio"><br>
    <label for="chem">Chem:</label><br>
    <input type="number" id="chem" name="chem"><br>
    <label for="maths">Maths:</label><br>
    <input type="number" id="maths" name="maths"><br>
    <label for="marathi">Marathi:</label><br>
    <input type="number" id="marathi" name="marathi"><br>
    <label for="english">English:</label><br>
    <input type="number" id="english" name="english"><br>
    <input type="submit">
</form>

<?php
}
?>
`,
          },
        ],
      },
      {
        slipId: 22,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP program to create a shopping mall UI. User must be allowed to make purchases from two pages. Each page should have a page total. The third page should display a bill, which consists of a page total of whatever the purchase has been done and print the total. (Use HTTP session tracking).`,
            marks: 25,
            sol: `<!-- page1.php  -->

<?php
session_start();

if (!isset($_SESSION['page1_total'])) {
    $_SESSION['page1_total'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $item_price = $_POST['item_price'];
    $_SESSION['page1_total'] += $item_price;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Shopping Mall - Page 1</title>
</head>
<body>
    <h1>Shopping Page 1</h1>
    <form method="post">
        <p>Select an item to add to your cart:</p>
        <select name="item_price">
            <option value="50">Item 1 - $50</option>
            <option value="30">Item 2 - $30</option>
            <option value="20">Item 3 - $20</option>
        </select>
        <br><br>
        <input type="submit" value="Add to Cart">
    </form>

    <h2>Page 1 Total: $<?php echo $_SESSION['page1_total']; ?></h2>
    <a href="page2.php">Go to Page 2</a>
</body>
</html>


<!-- page2.php  -->

<?php
session_start();

if (!isset($_SESSION['page2_total'])) {
    $_SESSION['page2_total'] = 0;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $item_price = $_POST['item_price'];
    $_SESSION['page2_total'] += $item_price;
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Shopping Mall - Page 2</title>
</head>
<body>
    <h1>Shopping Page 2</h1>
    <form method="post">
        <p>Select an item to add to your cart:</p>
        <select name="item_price">
            <option value="60">Item 4 - $60</option>
            <option value="40">Item 5 - $40</option>
            <option value="25">Item 6 - $25</option>
        </select>
        <br><br>
        <input type="submit" value="Add to Cart">
    </form>

    <h2>Page 2 Total: $<?php echo $_SESSION['page2_total']; ?></h2>
    <a href="bill.php">View Bill</a>
</body>
</html>



<!-- bill.php  -->

<?php
session_start();

$page1_total = isset($_SESSION['page1_total']) ? $_SESSION['page1_total'] : 0;
$page2_total = isset($_SESSION['page2_total']) ? $_SESSION['page2_total'] : 0;
$grand_total = $page1_total + $page2_total;
?>

<!DOCTYPE html>
<html>
<head>
    <title>Shopping Mall - Bill</title>
</head>
<body>
    <h1>Your Bill</h1>
    <p>Page 1 Total: $<?php echo $page1_total; ?></p>
    <p>Page 2 Total: $<?php echo $page2_total; ?></p>
    <h2>Grand Total: $<?php echo $grand_total; ?></h2>

    <a href="page1.php">Back to Page 1</a><br>
    <a href="page2.php">Back to Page 2</a><br>
    <a href="clear_session.php">Clear Cart and Start Over</a>
</body>
</html>


<!-- clear-session.php  -->

<?php
session_start();
session_unset();
session_destroy();
header("Location: page1.php");
exit();

`,
          },
        ],
      },
      {
        slipId: 23,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to create a form to accept customer information (name, address, phone number). Once the customer information is accepted, accept product information in the next form (Product name, qty, rate). Display the bill for the customer in the next form. The bill should contain the customer information and the information of the products entered.`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <body>
        <form method="post" action="proInfo.php">
            <h2>Customer Information</h2>
            Name : <input type="text" name="name"><br>
            Address : <input type="text" name="address"><br>
            Phone No : <input type="number" name="no"><br>
            <input type="submit" name="next" value="next">
        </form>
    </body>
</html>


<!-- proInfo.php  -->

<?php 
    if(isset($_POST['next'])){
        $name = $_POST["name"];
        $address = $_POST['address'];
        $no = $_POST['no'];
        echo "<h2> Customer Information :</h2>";
        echo "Name :" . $name. "<br>";
        echo "Address :" . $address. "<br>";
        echo "Phone No :" . $no. "<br>";
    }
?>

<html>
    <body>
        <form method="post" action="bill.php">
            <h2>Product Information :</h2>
            Product Name : <input type="text" name="pname"><br>
            Quantity : <input type="number" name="quantity"><br>
            Rate : <input type = "number" name="rate"><br>
            <input type="submit" name="bill" value="Generate Bill">
            <input type="hidden" name="name" value="<?php echo $name; ?>">
            <input type="hidden" name="address" value="<?php echo $address; ?>">
            <input type="hidden" name="no" value="<?php echo $no; ?>">

        </form>
    </body>
</html>


<!-- bill.php  -->

<?php 
    if(isset($_POST['bill'])){
        echo "<h2> Customer Information :</h2>";
        echo "Name : " . $_POST['name']. "<br>";
        echo "Address : " . $_POST['address']. "<br>";
        echo "Phone No : " . $_POST['no']. "<br>";
        
        echo "<h2> Customer Information :</h2>";
        echo "Product Name : " . $_POST['pname']. "<br>";
        echo "Quantity : " . $_POST['quantity']. "<br>";
        echo "Rate : " . $_POST['rate']. "<br>";
        echo "Total Bill : " . $_POST['quantity'] * $_POST['rate'] . "<br>";
    }
?>
`,
          },
        ],
      },
      {
        slipId: 24,
        questions: [
          {
            questionId: 1,
            text: `Write a PHP script to accept a username and password. If the username and password are correct within the first three attempts, then display the second form; otherwise, display an error message.`,
            marks: 25,
            sol: `<!-- index.php  -->

<?php
// Initialize session and variables
session_start();
$username = "";
$password = "";
$error = "";
$attempt = 0;

// Check if the form is submitted
if (isset($_POST["submit"])) {
  // Get the input values
  $username = $_POST["username"];
  $password = $_POST["password"];

  // Validate the username and password
  if ($username == "admin" && $password == "admin") {
        header("Location:display.php");
  } else {
    // Incorrect credentials, increment the attempt counter
    $attempt = $_SESSION["attempt"] ?? 0;
    $attempt++;
    $_SESSION["attempt"] = $attempt;

    // Check if the user has exceeded the maximum attempts
    if ($attempt >= 3) {
      // Display error message and exit
      echo "<p style='color:red'>You have entered wrong username or password 3 times. Access denied.</p>";
      exit();
    } else {
      // Display error message and remaining attempts
      $error = "Wrong username or password. You have " . (3 - $attempt) . " attempts left.";
    }
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Login Form</title>
</head>
<body>
  <h1>Login Form</h1>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" value="<?php echo $username; ?>"><br>
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" value="<?php echo $password; ?>"><br>
    <input type="submit" name="submit" value="Login">
  </form>
  <p style="color:red"><?php echo $error; ?></p>
</body>
</html>


<!-- display.php  -->

<html>
    <body>
        <h1>Welcome , Yash</h1>
        <p>You successfully login</p>
    </body>
</html>
`,
          },
        ],
      },
      {
        slipId: 25,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Emp (emp_no, emp_name, address, phone, salary)<br>
             Salary (emp_no, Basic, HR, TA, DA)<br>
             Dept (dept_no, dept_name, location)<br>
             Emp-Dept are related with a one-many relationship.<br>
             Create a RDB for the above and solve the following using the above database:<br>
             Write a PHP script which will print a salary statement for a specified emp_no with their details.`,
            marks: 25,
            sol: `<!-- index.php  -->

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "EmployeeDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the emp_no from the request
$emp_no = $_GET['emp_no'];

// Fetch employee details
$sql_emp = "SELECT e.emp_name, e.address, e.phone, e.salary, d.dept_name, d.location 
            FROM Emp e
            JOIN Emp_Dept ed ON e.emp_no = ed.emp_no
            JOIN Dept d ON ed.dept_no = d.dept_no
            WHERE e.emp_no = $emp_no";
$result_emp = $conn->query($sql_emp);

if ($result_emp->num_rows > 0) {
    // Fetch salary details
    $sql_salary = "SELECT Basic, HR, TA, DA FROM Salary WHERE emp_no = $emp_no";
    $result_salary = $conn->query($sql_salary);

    if ($result_salary->num_rows > 0) {
        // Output employee details
        $row_emp = $result_emp->fetch_assoc();
        echo "<h1>Salary Statement for Employee No: " . $emp_no . "</h1>";
        echo "<p>Name: " . $row_emp['emp_name'] . "</p>";
        echo "<p>Address: " . $row_emp['address'] . "</p>";
        echo "<p>Phone: " . $row_emp['phone'] . "</p>";
        echo "<p>Department: " . $row_emp['dept_name'] . " (" . $row_emp['location'] . ")</p>";
        echo "<hr>";

        // Output salary details
        $row_salary = $result_salary->fetch_assoc();
        echo "<h2>Salary Breakdown</h2>";
        echo "<p>Basic: $" . $row_salary['Basic'] . "</p>";
        echo "<p>HR: $" . $row_salary['HR'] . "</p>";
        echo "<p>TA: $" . $row_salary['TA'] . "</p>";
        echo "<p>DA: $" . $row_salary['DA'] . "</p>";
        
        // Calculate total salary
        $total_salary = $row_salary['Basic'] + $row_salary['HR'] + $row_salary['TA'] + $row_salary['DA'];
        echo "<h3>Total Salary: $" . $total_salary . "</h3>";
    } else {
        echo "<p>No salary details found for employee no: " . $emp_no . "</p>";
    }
} else {
    echo "<p>No employee found with employee no: " . $emp_no . "</p>";
}

$conn->close();
?>
`,
          },
        ],
      },
      {
        slipId: 26,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Doctor (doc_no, doc_name, address, city, area)<br>
             Hospital (hosp_no, hosp_name, hosp_city)<br>
             Doctor and Hospital are related with a many-many relationship.<br>
             Create an RDB in 3NF for the above and solve the following using the above database:<br>
             Write a PHP script which accepts hospital name and prints information about doctors visiting or working in that hospital in tabular format.`,
            marks: 25,
            sol: `<!-- index.php  -->


<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "HospitalDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the hospital name from the request
$hosp_name = $_GET['hosp_name'];

// Fetch hospital and doctor details
$sql = "SELECT d.doc_name, d.address, d.city, d.area 
        FROM Doctor d
        JOIN Doctor_Hospital dh ON d.doc_no = dh.doc_no
        JOIN Hospital h ON dh.hosp_no = h.hosp_no
        WHERE h.hosp_name = ?";

$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $hosp_name);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "<h1>Doctors Working/Visiting at " . htmlspecialchars($hosp_name) . "</h1>";
    echo "<table border='1'>
            <tr>
                <th>Doctor Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Area</th>
            </tr>";
    
    // Output each doctor's information
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>" . htmlspecialchars($row['doc_name']) . "</td>
                <td>" . htmlspecialchars($row['address']) . "</td>
                <td>" . htmlspecialchars($row['city']) . "</td>
                <td>" . htmlspecialchars($row['area']) . "</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p>No doctors found for the hospital: " . htmlspecialchars($hosp_name) . "</p>";
}

$stmt->close();
$conn->close();
?>
`,
          },
        ],
      },
      {
        slipId: 27,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Project (pno integer, p_name char(30), ptype char(20), duration integer)<br>
             Employee (eno integer, e_name char(20), qualification char(15), joindate date)<br>
             The relationship between project and employee is many-many, with descriptive attributes as start_date (date), no_of_hours_worked (integer).<br>
             Using the above database, write a PHP script to accept a project name from the user and display information about employees working on the project.`,
            marks: 25,
            sol: `<!-- index.php  -->


<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$p_name = $_POST['p_name'];

$sql = "SELECT e.* FROM employee e 
        JOIN project_employee pe ON e.eno = pe.eno 
        JOIN project p ON pe.pno = p.pno 
        WHERE p.p_name = '$p_name'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "eno: " . $row["eno"]. ", Name: " . $row["e_name"]. ", Qualification: " . $row["qualification"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
`,
          },
        ],
      },
      {
        slipId: 28,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Student (sno integer, s_name char(30), s_class char(10), s_addr char(50))<br>
             Teacher (tno integer, t_name char(20), qualification char(15), experience integer)<br>
             The relationship between student and teacher is many-many with a descriptive attribute subject.<br>
             Using the above database, write a PHP script to accept a teacher name from the user and display the names of students along with the subjects to whom the teacher is teaching.`,
            marks: 25,
            sol: `<!-- index.php  -->

<html>
    <body>
        <form method="post" action="">
            Enter teacher Name : 
            <input type="text" name="tname"><br><br>
            <input type="submit" name="submit" value="Run">
        </form>
    </body>
    <?php
    if(isset($_POST['submit'])){
        $conn = mysqli_connect('localhost', 'root', '', 'school') or die("Connection was unsuccessful");

        $tname = $_POST['tname']; // teacher name 
        $sql = "SELECT s.Sname, st.subject FROM student s, teacher t, stud_tea st WHERE s.SNo = st.Sno AND t.Tno = st.Tno AND t.Tname = '$tname'";
        $result = mysqli_query($conn, $sql) or die("Query was unsuccessful");

        if(mysqli_num_rows($result) > 0){
            echo "<table border='1'>";
            echo "<tr><th>Student Name</th><th>Subject Name</th></tr>";

            while($row = mysqli_fetch_assoc($result)){
                echo "<tr><td>" . $row['Sname'] . "</td><td>" . $row['subject'] . "</td></tr>";
            }
            echo "</table>";
        }
        else{
            echo "No records found.";
        }
        mysqli_close($conn);
    }
    ?>
</html>
`,
          },
        ],
      },
      {
        slipId: 29,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Movie (movie_no, movie_name, release_year)<br>
             Actor (actor_no, name)<br>
             The relationship between movie and actor is many-many with an attribute rate in Rs.<br>
             Create an RDB in 3NF for the above and solve the following using the above database:<br>
             (Hint: Create an HTML form having three radio buttons)<br>
             a) Accept actor name and display the names of the movies in which he has acted.<br>
             b) Insert new movie information.<br>
             c) Update the release year of a movie. (Accept the movie name from the user)`,
            marks: 25,
            sol: `index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Movie Database Operations</title>
  </head>
  <body>
    <h1>Movie Database Operations</h1>

    <form action="movies.php" method="post">
      <h3>Select an Operation:</h3>

      <input
        type="radio"
        id="display_movies"
        name="operation"
        value="display_movies"
      />
      <label for="display_movies">Display Movies by Actor</label><br />

      <input
        type="radio"
        id="insert_movie"
        name="operation"
        value="insert_movie"
      />
      <label for="insert_movie">Insert New Movie</label><br />

      <input
        type="radio"
        id="update_movie"
        name="operation"
        value="update_movie"
      />
      <label for="update_movie">Update Release Year of Movie</label><br /><br />

      <!-- Form fields for each operation -->
      <div id="display_movies_form" style="display: none">
        <label for="actor_name">Enter Actor Name:</label>
        <input type="text" id="actor_name" name="actor_name" /><br /><br />
      </div>

      <div id="insert_movie_form" style="display: none">
        <label for="movie_name">Enter Movie Name:</label>
        <input type="text" id="movie_name" name="movie_name" /><br /><br />
        <label for="release_year">Enter Release Year:</label>
        <input
          type="number"
          id="release_year"
          name="release_year"
        /><br /><br />
      </div>

      <div id="update_movie_form" style="display: none">
        <label for="movie_name_update">Enter Movie Name:</label>
        <input
          type="text"
          id="movie_name_update"
          name="movie_name"
        /><br /><br />
        <label for="new_release_year">Enter New Release Year:</label>
        <input
          type="number"
          id="new_release_year"
          name="new_release_year"
        /><br /><br />
      </div>

      <input type="submit" value="Submit" />
    </form>

    <script>
      // JavaScript to handle form display based on selected operation
      document.querySelectorAll('input[name="operation"]').forEach((radio) => {
        radio.addEventListener("change", () => {
          document.getElementById("display_movies_form").style.display = "none";
          document.getElementById("insert_movie_form").style.display = "none";
          document.getElementById("update_movie_form").style.display = "none";

          if (radio.value === "display_movies") {
            document.getElementById("display_movies_form").style.display =
              "block";
          } else if (radio.value === "insert_movie") {
            document.getElementById("insert_movie_form").style.display =
              "block";
          } else if (radio.value === "update_movie") {
            document.getElementById("update_movie_form").style.display =
              "block";
          }
        });
      });
    </script>
  </body>
</html>

<!-- movies.php  -->

<?php
$operation = $_POST['operation'];

if ($operation === 'display_movies') {
    include 'display_movies.php';
} elseif ($operation === 'insert_movie') {
    include 'insert_movie.php';
} elseif ($operation === 'update_movie') {
    include 'update_movie.php';
} else {
    echo "Invalid operation selected.";
}
?>

<!-- 29.php  -->



<!-- Accept Actor Name And Display Movies  -->

 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "MovieDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['actor_name'])) {
    $actor_name = $_POST['actor_name'];

    $sql = "SELECT m.movie_name 
            FROM Movie m
            JOIN Movie_Actor ma ON m.movie_no = ma.movie_no
            JOIN Actor a ON ma.actor_no = a.actor_no
            WHERE a.name = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $actor_name);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo "<h2>Movies featuring " . htmlspecialchars($actor_name) . ":</h2><ul>";
        while ($row = $result->fetch_assoc()) {
            echo "<li>" . htmlspecialchars($row['movie_name']) . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p>No movies found for the actor: " . htmlspecialchars($actor_name) . "</p>";
    }

    $stmt->close();
}

$conn->close();
?>


<!-- Insert New Movies Information -->

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "MovieDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['movie_name']) && isset($_POST['release_year'])) {
    $movie_name = $_POST['movie_name'];
    $release_year = $_POST['release_year'];

    $sql = "INSERT INTO Movie (movie_name, release_year) VALUES (?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $movie_name, $release_year);

    if ($stmt->execute()) {
        echo "<p>New movie '" . htmlspecialchars($movie_name) . "' added successfully.</p>";
    } else {
        echo "<p>Error: " . $stmt->error . "</p>";
    }

    $stmt->close();
}

$conn->close();
?>


<!-- Update the release year of movie  -->

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "MovieDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST['movie_name']) && isset($_POST['new_release_year'])) {
    $movie_name = $_POST['movie_name'];
    $new_release_year = $_POST['new_release_year'];

    $sql = "UPDATE Movie SET release_year = ? WHERE movie_name = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("is", $new_release_year, $movie_name);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            echo "<p>Release year for '" . htmlspecialchars($movie_name) . "' updated to " . htmlspecialchars($new_release_year) . ".</p>";
        } else {
            echo "<p>No movie found with the name '" . htmlspecialchars($movie_name) . "'</p>";
        }
    } else {
        echo "<p>Error: " . $stmt->error . "</p>";
    }

    $stmt->close();
}

$conn->close();
?>


`,
          },
        ],
      },
      {
        slipId: 30,
        questions: [
          {
            questionId: 1,
            text: `Consider the following entities and their relationships:<br>
             Student (Stud_id, name, class)<br>
             Competition (c_no, c_name, type)<br>
             The relationship between student and competition is many-many with attributes rank and year.<br>
             Create an RDB in 3NF for the above and solve the following:<br>
             Using the above database, write a PHP script to accept a competition name from the user and display information about students who have secured 1st rank in that competition.`,
            marks: 25,
            sol: `<!-- index.php  -->

<?php
$c_name = $_POST['c_name'];
$query = "SELECT Student.* FROM Student s
        JOIN Stu_Comp sc ON s.sid  = sc.sid 
        JOIN Competition  c ON c.cno = sc.cno 
        WHERE c.cname = '$c_name' 
        AND sc.rank = 1";

$result = mysqli_query($conn, $query);
while($row = mysqli_fetch_assoc($result)) {
    echo "Student ID: " . $row['Stud_id'] . ", Name: " . $row['name'] . ", Class: " . $row['class'];
}
?>
`,
          },
        ],
      },
    ],
    language: 'php',
  },
];
