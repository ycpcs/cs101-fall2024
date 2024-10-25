---
layout: default
title: "Assignment 4: Structs"
---

**Due dates**:

* Code due: **Tuesday, Nov 12th** by 11:59 PM

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

**Tax Time**

Initially, declare a struct named **Person** that contains the following fields:

-    social security number (int)
-    filing status (int)
-    gross income (double)
-    deduction amount (double)

Then, the program should prompt the user to enter values for each field and store them in a struct variable. (**Note:** filing status is given by 1 - Single, 2 - Married joint, 3- Head of household, 4 - Married separate. Also, a negative value for the deduction amount indicates the person is taking the standard deduction). 

Once the information is collected, the struct should be passed to a function named **calcTaxes()** which takes a single **Person** struct parameter and returns a **double** for the tax obligation.

*Tax Obligation*

The tax obligation is computed by first determining the deduction amount which is either the actual amount or the amount given by the following table based on the filing status, **whichever is greater**:

Filing Status     | Standard Deduction
----------------- | ------------------
Single            | $12,000
Married joint     | $24,000
Head of Household | $18,000
Married Separate  | $12,000

*Taxable Income*

The individual's gross income is then given as their gross income minus their deduction amount.

*Tax Rate*



**Summary of Roulette**:
There are 38 slots, two green (slots 0 and 37), and the rest numbered 1 through 36.

- If you land on green, you automatically lose your bet.
- If you bet odd or even and you win, you win the amount that you bet.
- If you bet on a number and win, you win 35 times your bet.

When you are ready to compile the program, in the Cygwin window type the command

    make

To run the program, type the command

    ./Roulette.exe

Here is an example run (user input in bold):

<pre>
Enter the amount of money you are starting with: $ <b>1000</b>
How do you wish to bet?
1 To bet on Odd
2 To bet on Even
3 To bet on a Particular Number

<b>1</b>

Enter your bet: $ <b>100</b>

The ball landed on 14.
Sorry, you lose $100.00
Your current account is $900.00

Enter 0 to Quit: <b>1</b>
How do you wish to bet?
1 To bet on Odd
2 To bet on Even
3 To bet on a Particular Number

<b>2</b>

Enter your bet: $ <b>100</b>

The ball landed on 8.
That's even, you win $100.00
Your current account is $1000.00

Enter 0 to Quit: <b>1</b>
How do you wish to bet?
1 To bet on Odd
2 To bet on Even
3 To bet on a Particular Number

<b>3</b>

Enter the number you would like to bet on (1 - 36 only): <b>15</b>
Enter your bet: $ <b>100</b>

The ball landed on 15.
That's the number, you win $3500.00
Your current account is $4500.00

Enter 0 to Quit: <b>0</b>
Thank you for playing Roulette.
</pre>

## Roulette Functions

Your program **MUST** implement the following functions:

-   **get_bet_type()** - which takes no parameters, and returns a valid bet type obtained from the user. The function should contain all prompts for the user and validate the type is between 1-3.
-   **get_number()** - which takes no parameters, and returns the user's chosen value between 1-36. The function should contain all prompts for the user and validate the number is between 1-36. This function will be called from **main()** if the bet type is for a particular number.
-   **get_bet_amount()** - which takes the current account as a parameter, and returns a valid bet amount obtained from the user. The function should contain all prompts for the user and validate that the bet is greater than 0 and less than the current account amount.
-   **spin_wheel()** - which takes no parameters, and returns a random number generated between 0-37
-   **evaluate_spin()** - which takes four parameters: the wheel spin, the bet amount, the bet type, and the specific number. It should print the win/loss result and return the amount won/lost.
-   **print_account()** - which takes a parameter for the current amount of the account, and returns no value. The function should simply print out the current amount of money the user has remaining.

**DO NOT CHANGE THE FUNCTION NAMES** or parameter specifications.

## Approach/Hints

### Main

You will want to look through the main function to see how the various functions are used to be sure the data types and order for the parameters and return values match. **Note:** Since the functions are **completely** separate from **main()** you may use any variable names you wish in the function declarations and inside the functions.

### Function declarations

Consider the data types for each parameter and the return type of each function. **Write each function as a standalone routine.** Be sure to add function prototypes before main().

### Spinning the wheel

When the program simulates a spin of the roulette wheel,
it can "randomly" choose an integer in the range
0 through 37 (inclusive) using the expression

    rand() % 38

Grading
=======

Your grade will be determined as follows:

* get_bet_type(): 15
* get_number(): 15
* get_bet_amount(): 20
* spin_wheel(): 10
* evaluate_spin(): 30
* print_account(): 10

We expect you to use good coding style.  Points may be deducted for poor variable names, inconsistent or missing indentation, and/or lack of comments.

Submitting
==========

To submit your code, make sure your **Roulette.cpp** file is saved, and in the Cygwin window type 

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen. Make sure that after you enter your username and password, you see a message indicating that the submission was successful.

Make sure that you check the file(s) you submitted to ensure that they are correct.  See the instructions for [Verifying your submission](../submitting.html#verifying-your-submission).

<div class="callout">
<b>Important</b>: It is your responsibility to verify that you submitted the correct files.  You may receive a grade of 0 for incorrectly submitted work.
</div>
