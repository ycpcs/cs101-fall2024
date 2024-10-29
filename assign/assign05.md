---
layout: default
title: "Assignment 5: Structs"
---

**Due dates**:

* Code due: **Monday, Nov 11th** by 11:59 PM

Getting Started
===============

Start by downloading [CS101\_Assign05\_Fa24.zip](CS101_Assign05_Fa24.zip), saving it in the directory **H:\\CS101**. In Windows File Explorer, navigate to **H:\\CS101**, right click on **CS101\_Assign05\_Fa24.zip**, and select **Extract All** to create a **CS101\_Assign05\_Fa24** directory with the assignment files.

Start a **Cygwin Bash Shell** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Assign05_Fa24

Using **Notepad++**, open the files

> **H:\\CS101\\CS101\_Assign05\_Fa24\\TaxTime.cpp**
> **H:\\CS101\\CS101\_Assign05\_Fa24\\HitBox.cpp**

You will add your code to these files (separately).

Your Tasks
==========

## Tax Time

Add code to **TaxTime.cpp**

Initially, declare a struct named **Person** that contains the following fields:

-    social security number (int)
-    filing status (int)
-    gross income (double)
-    deduction amount (double)

Then, the program should prompt the user to enter values for each field and store them in a struct variable. (**Note:** filing status is given by 1 - Single, 2 - Married joint, 3- Head of household, 4 - Married separate. Also, a negative value for the deduction amount indicates the person is taking the standard deduction). 

Once the information is collected, the struct should be passed to a function named **calcTaxes()** which takes a single **Person** struct parameter and returns a **double** for the tax obligation. **Note:** The function should print out the taxable income and tax rate (for debugging), while the main program should print the final tax obligation.

### Tax Obligation

The tax obligation is computed by first determining the deduction amount which is either the actual amount or the amount given by the following table based on the filing status, **whichever is greater**:

Filing Status     | Standard Deduction
----------------- | ------------------
Single            | $12,000
Married joint     | $24,000
Head of Household | $18,000
Married Separate  | $12,000

### Taxable Income

The individual's gross income is then given as their gross income minus their deduction amount.

### Tax Rate

Using the taxable income, the tax rate is then determined by the following table:

Tax Rate | Single           | Married joint     | Head of Household | Married Separate 
-------- | ---------------- | ----------------- | ----------------- | ----------------
10%      | <$10,001         | <$20,001          | <$13,001          | <$9,501
20%      | $10,001-$80,000  | $20,001-$165,000  | $13,001-$82,500   | $9,501-$82,500
30%      | $80,001-$200,000 | $165,001-$400,000 | $82,501-$200,000  | $82,501-$200,000
35%      | >$200,001        | >$400,001         | >$200,001         | >$200,001

### Tax Obligation

Finally, the tax obligation is given by the taxable income times the tax rate. **Note:** The tax obligation cannot be negative, thus if the deductions exceed the gross income, the tax obligation is $0.

When you are ready to compile the program, in the Cygwin window type the command

    make TaxTime

To run the program, type the command

    ./TaxTime.exe

Here are some example runs (user input in **bold**):

<pre>
Please enter
SSN: <b>123456789</b>
Filing Status (1-Single, 2-Married Joint, 3-Head of Household, 4-Married Separate): <b>1</b>
Gross Income: <b>78654.00</b>
Deductions (-1 if none): <b>6250.00</b>

Taxable income: $66654.00
Tax rate: 20%
Tax obligation: $13330.80
</pre>

<pre>
Please enter
SSN: <b>123456789</b>
Filing Status (1-Single, 2-Married Joint, 3-Head of Household, 4-Married Separate): <b>3</b>
Gross Income: <b>167430.25</b>
Deductions (-1 if none): <b>23410.00</b>

Taxable income: $144020.25
Tax rate: 30%
Tax obligation: $43206.07
</pre>

<pre>
Please enter
SSN: <b>123456789</b>
Filing Status (1-Single, 2-Married Joint, 3-Head of Household, 4-Married Separate): <b>4</b>
Gross Income: <b>435890.00</b>
Deductions (-1 if none): <b>-1</b>

Taxable income: $423890.00
Tax rate: 35%
Tax obligation: $148361.50
</pre>

<pre>
Please enter
SSN: <b>123456789</b>
Filing Status (1-Single, 2-Married Joint, 3-Head of Household, 4-Married Separate): <b>1</b>
Gross Income: <b>8640.10</b>
Deductions (-1 if none): <b>550.00</b>

Taxable income: $-3359.90
Tax rate: 10%
Tax obligation: $0.00
</pre>


## HitBox

Add code to **HitBox.cpp** to complete the **hitbox()** function definition.

A **Rect** struct definition is provided which contains four fields:

-    **x** - the leftmost x coordinate (double)
-    **y** - the bottom y coordinate (double)
-    **width** - the width of the rectangle (double)
-    **height** - the height of the rectangle (double)

Thus the rectangle extents will go from **x** to **x+width** and **y** to **y+height**.

The provided main function will create several different **Rect** variable pair tests and pass them to the **hitbox()** function and test the return value, i.e. **DO NOT** modify main().

The **hitbox()** function should take two **Rect** parameters and return a **double** value indicating the area of overlap between the two rectangles. The function should return 0 if the rectangles do not overlap.

**Hint:** To determine if two rectangles overlap, check if the *edges* of one rectangle (which could be either) are *within* the *extents* of the other to determine the *extents* (min and max x/y) of the overlapping rectangle. You will want to check x and y separately and consider the different cases that can occur.

When you are ready to compile the program, in the Cygwin window type the command

    make HitBox

To run the program, type the command

    ./HitBox.exe

You will either see the output (note there is **no** user input) 

<pre>
All tests passed!
</pre>

Or an error message indicating which test failed. You may want to sketch the rectangles for any tests that are failing to see what your logic is computing to compare against the value specified in the assert statement.

Grading
=======

Your grade will be determined as follows:

* TaxTime: 50
* HitBox: 50

We expect you to use good coding style.  Points may be deducted for poor variable names, inconsistent or missing indentation, and/or lack of comments.

Submitting
==========

To submit your code, make sure your **TaxTime.cpp** and **HitBox.cpp** files are saved, and in the Cygwin window type 

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen. Make sure that after you enter your username and password, you see a message indicating that the submission was successful.

Make sure that you check the file(s) you submitted to ensure that they are correct.  See the instructions for [Verifying your submission](../submitting.html#verifying-your-submission).

<div class="callout">
<b>Important</b>: It is your responsibility to verify that you submitted the correct files.  You may receive a grade of 0 for incorrectly submitted work.
</div>
