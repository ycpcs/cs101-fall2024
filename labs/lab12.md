---
layout: default
title: "Lab 12: Simple Stats"
---

Getting Started
===============

Refer to [Lab 1](lab01.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab12.zip](CS101_Lab12.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab12.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab12** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab12** subdirectory inside the **CS101\_Lab12** subdirectory, move the files to the outer **CS101\_Lab12** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab12

Using **Notepad++**, open the files

> **H:\\CS101\\CS101\_Lab12\\Stats.cpp**

Your Task
=========

Write a program that computes some simple statistics from user specified input. Your program should prompt the user to enter four integer values, and then compute the following statistical values based on the user input: the **mean**, the **standard deviation**, the **maximum** value, and the **minimum** value.

You must write the following four functions to perform the computation for these statistical values:

-   **mean** - Computes the mean of four input values  
    *Input:* Accepts four integer arguments

    *Returns* the **mean** of the four integer input values as a **double**

-   **stddev** - Computes the standard deviation of four input values (see below for an example of how to compute the standard deviation)  
    *Input:* Accepts four integer arguments

    *Returns* the **standard deviation** of the four integer input values as a **double**

-   **max** - Determines the maximum of four input values  
    *Input:* Accepts four integer arguments

    *Returns* the **maximum** of the four integer input values as an **integer**

-   **min** - Determines the minimum of four input values  
    *Input:* Accepts four integer arguments

    *Returns* the **minimum** of the four integer input values as an **integer**

In all, your final program should have a total of five functions (the four above, plus your **main** function)

Example run (user input in **bold**):

<pre>
Enter four integer values: <b>66 12 33 99</b>

The mean of your values is 52.50
The standard deviation of your values is 33.03
The max of your values is 99
The min of your values is 12
</pre>

When you are ready to compile the program, in the Cygwin window type the command:

    make

To run the program, in the Cygwin window type the command

    ./Stats.exe

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

**Computing standard deviation**

From [Wikipedia (standard deviation)](http://en.wikipedia.org/wiki/Standard_deviation):

To compute the standard deviation of a set of numbers, such as those below:

> ![image](images/lab12/list_of_numbers.png)

first, find the **mean** of those numbers

> ![image](images/lab12/computing_mean.png)

then, compute the difference of each data point from the mean, and square the result of each (see hints below):

> ![image](images/lab12/computing_difference.png)

Finally, compute the average of these values, and the take square root to get the standard deviation:

> ![image](images/lab12/computing_stddev.png)

In this example, the standard deviation is **2**.

Hints
=====

You may find it useful to use the **pow(double x, double y)** function in the **math.h** library: it computes <i>x<sup>y</sup></i> (*x* raised to the power *y*).  You can read more about the **pow** function [here](http://pubs.opengroup.org/onlinepubs/9699919799/functions/pow.html).

Submitting
==========

When you are done, run the following command from the Cygwin bash shell:

    make submit

You will be prompted for your Marmoset username and password, which you should have received by email. Note that your password will not appear on the screen.
