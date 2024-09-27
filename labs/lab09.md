---
layout: default
title: "Lab 9: Palindrome"
---

Getting started
===============

Refer to [Lab 1](lab01.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab09.zip](CS101_Lab09.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab09.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab09** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab09** subdirectory inside the **CS101\_Lab09** subdirectory, move the files to the outer **CS101\_Lab09** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab09

Using **Notepad++**, open the file

> **H:\\CS101\\CS101\_Lab09\\Palindrome.cpp**

Right Triangle
==============

Your task in this lab is to initially prompt the user to enter the number of integer values they wish to enter (up to a maximum of **MAX\_NUMS**). Then obtain the values from the user storing them into an array. Finally, the array should be checked to see if it is a "palindrome", i.e. if the first and last elements are the same, the second and next to last elements are the same, etc.

Here is an example run of the program (user input in **bold**):

<pre>
Enter the number of values: <b>7</b>

Enter number 1: <b>3</b>
Enter number 2: <b>6</b>
Enter number 3: <b>2</b>
Enter number 4: <b>4</b>
Enter number 5: <b>2</b>
Enter number 6: <b>6</b>
Enter number 7: <b>3</b>

Congratulations, this sequence is a palindrome!
</pre>

Here is another example run of the program (user input in **bold**):

<pre>
Enter the number of values: <b>4</b>

Enter number 1: <b>-1</b>
Enter number 2: <b>8</b>
Enter number 3: <b>4</b>
Enter number 4: <b>-2</b>

Sorry, this sequence is not a palindrome!
</pre>

When you are ready to compile the program, in the Cygwin window type the command

    make

when you are ready to compile the program. To run the program, run the command

    ./Palindrome.exe

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

Hints
=====

Be sure to validate the number of values the user wishes to enter to make sure it is between 1 and **MAX\_NUMS**.

Use the **scanf** function to read values typed by the user into the proper *array elements*. Remember, array indices start at 0.

Use two separate loops for the data entry and the palindrome check.

For the palindrome check, consider how the indices of the element pairs are related - first to last, second to next to last, etc. and consider when to stop checking. It might be helpful to draw out an example on paper.

Create a *flag* variable (as an int) that is initialized to 1 (assume the sequence is a palindrome). Then if you find any pairs that *don't match*, set the flag to 0 since you know the array is *not* a palindrome.

Once the checking loop is complete, check the flag to print out the appropriate message.

**Challenge:** Consider how to stop checking once you know the array is *not* a palindrome.


Submit
======

To submit your work, type the command

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen.
