---
layout: default
title: "Lab 8: Bar Graph"
---

Getting started
===============

Refer to [Lab 1](lab01.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab08.zip](CS101_Lab08.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab08.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab08** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab08** subdirectory inside the **CS101\_Lab08** subdirectory, move the files to the outer **CS101\_Lab08** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab08

Using **Notepad++**, open the file

> **H:\\CS101\\CS101\_Lab08\\BarGraph.cpp**

# Design notes

When you create your [design artifact](../design-template.pdf) for this lab, you should create two control flow sketches:

* One for allowing the user to specify a bar length and drawing a single bar
* One for repeatedly drawing bars and asking the user whether or not she wants to continue

Each control flow sketch should be in pseudo code: see [Lab 5](lab05.html) for a discussion of what pseudo code should look like.

Your task
=========

Write a program that prompts the user to draw one or more bars of a bar graph.

To draw each bar, the program should prompt the user for a length, and then draw a bar with that many equals ("=") characters.  After drawing each bar, the program should ask whether or not to continue, and read a single input character.  If the user enters a 'Y' or 'y' character, then the program should continue.  If the user enters any other character, the program should finish.

Example of running the program (user input in **bold**):

<pre>
length? <b>20</b>
====================
another? <b>y</b>
length? <b>65</b>
=================================================================
another? <b>y</b>
length? <b>51</b>
===================================================
another? <b>n</b>
</pre>

When you are ready to compile the program, in the Cygwin window type the command

    make

To run the program, in the Cygwin window type the command

    ./BarGraph.exe

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

Hints
=====

You will need nested loops.  The outer loop will have the code to prompt for and draw a single bar.  The inner loop will draw each character in a single bar.

For each loop, you will need to choose between a <span style="font-weight: bold;">while</span> and a <span style="font-weight: bold;">do/while</span> loop.  The rule is that if the loop should be able to execute 0 times, it should be a <span style="font-weight: bold;">while</span>.  If it must be guaranteed to execute at least once, it should be a <span style="font-weight: bold;">do/while</span>.

You should start with a program that prompts for and draws a single bar.  That code will then become the body of the outer loop that draws however many bars the user requests.

You can use the following code to read a single character from the user and check whether it is "Y" or "y":

```c
char answer;
scanf(" %c", &answer);
if (answer == 'Y' || answer == 'y') {
    // user entered "Y" or "y"
} else {
    // user entered some other character
}
```

Note that in the call to `scanf` there is a space before the `%c`.

Submit
======

To submit your work, type the command

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen.
