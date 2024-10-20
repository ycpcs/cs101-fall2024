---
layout: default
title: "Lab 12b: Function Design"
---

Getting started
===============

Refer to [Lab 1](lab01.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab12b.zip](CS101_Lab12b.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab12b.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab12b** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab12b** subdirectory inside the **CS101\_Lab12b** subdirectory, move the files to the outer **CS101\_Lab12b** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab12b

Using **Notepad++**, open the files

> **H:\\CS101\\CS101\_Lab12b\\FunctionDesign.cpp**

Your Task
=========

Your task is to design and implement the following functions:

> Function name | Description
> ------------- | -----------
> `roundToNearest100` | given an integer value, returns the same integer rounded to the nearest multiple of 100: e.g., 137 would round down to 100, 153 would round up to 200, etc.
> `isOdd` | given an integer value, returns `true` if the integer is odd, and `false` if it is even
> `poly` | given a number *x* (which is not necessarily an integer), returns the value of 3<i>x</i><sup>2</sup> + 6<i>x</i> + 12b
> `celsiusToFahrenheit` | given a temperature *t* in Celsius (not necessarily an integer), return the equivalent temperature in Fahrenheit, which is (*t* &times; 9/5) + 32

Part 1: Design
--------------

For each function, create a [design artifact](../design-template.pdf), including input (parameters) and output (return value).  Discuss your design with your neighbors.  Did you agree on what parameters and parameter data types are needed?  Did you agree on the return type?

Part 2: Implementation and Testing
----------------------------------

For each function, add a prototype and function definition to the program.

To test a function, add at least four *assertions* to the `main` function.  An assertion tests a function by calling the function with hard-coded values, and verifies that the correct result is returned.

An example function called `addInts` is provided, along with several test assertions.

When you run the program, it will print

    All tests passed!

if all of the tests succeed.  Otherwise, you will see a message about a failed assertion.  This means that either the function returned the wrong value, or the test is incorrect.

When you are ready to compile the program, in the Cygwin window type the command:

    make

To run the program, in the Cygwin window type the command

    ./FunctionDesign.exe

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

Hints
=====

The `bool` type is appropriate for representing the values `true` and `false`.

A good way to specify an expected value for a function that does a numeric computation is to specify the expected value as the same computation on whatever hard-coded value or values were passed to the function. For example, to test the `celsiusToFahrenheit` function, you might specify the assertion as

    assert(celsiusToFahrenheit(49.5) == ((49.5 * 9.0) / 5.0) + 32.0);

Submit
======

When you are done, run the following command from the Cygwin bash shell:

    make submit

You will be prompted for your Marmoset username and password, which you should have received by email. Note that your password will not appear on the screen.
