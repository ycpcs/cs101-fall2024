---
layout: default
title: "Lab 5: Animal Classifier"
---

# Getting started

Get started by reading this lab description carefully, completing a [design](../design-template.pdf) to solve the problem described below, and then (in class) working in a small group to finalize a design.

**Do not start writing code** until your group is done with the design.

# First task: design

Consider the following animal classification flowchart:

> ![Animal classification flowchart](images/lab05/animals.png)

This flowchart describes how to ask the user some yes/no questions in order to determine what kind of animal she is.  (We'll admit that this may not be 100% accurate for all animals.)

## Designing for control flow

When a problem requires that the program make decisions, we will need to design the *control flow* of the program, meaning how the program will use `if`/`else` statements and loops.

*Pseudo code* is a very helpful way to design control flow.  Pseudo code is a "sketch" of the code you plan to write, omitting less important details, and focusing on the more important details.  For example, let's say you want to write code to determine whether or not the user is eligible to vote.  A pseudo code sketch of the program might look something like:

    prompt user to enter her age

    if ( age is greater than or equal to 18 ) {
        user can vote, print congratulatory message
    } else {
        user can't vote yet, print sympathetic message
    }

Note that the pseudo code sketch omits some details about the program, but indicates clearly how an `if`/`else` statement will be used to print different messages depending on whether or not the user's age meets the criterion for being eligible to vote.

**What you should do**: In the "control flow sketch" section of the design template, write pseudo code showing how the animal classification flowchart can be implemented using `if`/`else` statements.  Show where user interaction (prompts and user input) should occur.  For each `if`/`else` statement, indicate the condition that will be tested.

*Hint*: You will most likely need to use *nested* `if`/`else` statements, meaning that there is an "outer" `if`/`else` statement, and within the if and else blocks of the outer statement, there are "inner" `if`/`else` statements.

# Second task: code

Once your group has reached a consensus regarding how to structure the control flow in the program, translate your design into code.

Refer to [Lab 1](lab01.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab05.zip](CS101_Lab05.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab05.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab05** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab05** subdirectory inside the **CS101\_Lab05** subdirectory, move the files to the outer **CS101\_Lab05** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab05

Using **Notepad++**, open the file

> **H:\\CS101\\CS101\_Lab05\\Animals.cpp**


Write the program to implement the logic from your design, the output should look something like this (user input in <b>bold</b>):

<pre>
Are you a mammal? (1=yes, 0=no) <b>1</b>
Are you a marsupial? (1=yes, 0=no) <b>0</b>
You are a horse.
</pre>

Note that the answers to yes/no questions are implemented by asking the user to enter an integer value, with 0 meaning "no" and 1 meaning "yes".

When you are ready to compile the program, in the Cygwin window type the command

    make

To run the program, in the Cygwin window type the command

    ./Animal.exe

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.


# Submit

To submit your work, type the command

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen.
