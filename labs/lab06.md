---
layout: default
title: "Lab 6: Compute Pi"
---

Getting started
===============

Refer to [Lab 1](lab01.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab06.zip](CS101_Lab06.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab06.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab06** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab06** subdirectory inside the **CS101\_Lab06** subdirectory, move the files to the outer **CS101\_Lab06** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab06

Using **Notepad++**, open the file

> **H:\\CS101\\CS101\_Lab06\\ComputePi.cpp**

Your Task
=========

Your task in this lab is to prompt the user for the number of terms to use in computing the series approximation for π, compute the approximation using a loop, and then print out the value to the user compared to the math library **M\_PI** value.

Here is an example run of the program (user input in **bold**):

<pre>
Enter the number of terms to compute pi: <b>7</b>

Pi is approximately 3.283738
M_PI is 3.141593
</pre>

When you are ready to compile the program, in the Cygwin window type the command

    make

when you are ready to compile the program. To run the program, run the command

    ./ComputePi.exe

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

Hints
=====

The series approximation for π is given by

>    π ≈ 4*(1 - 1/3 + 1/5 - 1/7 + 1/9 - 1/11 + 1/13 - ...)

For the series sum use a loop to repeatedly add the next term of the sum to a variable that stores the current sum. Note that the *denominator* for each subsequent term in the series is simply two more than the current term, i.e. 1,3,5,... Also note that the *sign* of each subsequent term flips (consider using a variable that switches between +1 and -1).


Submit
======

To submit your work, type the command

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen.
