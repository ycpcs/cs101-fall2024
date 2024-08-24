---
layout: default
title: "Lab 1: Hello, CS101!"
---

In this lab, you will learn how to use the cygwin/gcc environment to write, compile, and run C programs.

Getting Started
===============

**(1)** Start the cygwin bash shell. This is available from the **Start** menu on all of the computers in the KEC building. The full path in the menu is:

> **Start &rarr; All Programs &rarr; Cygwin &rarr; Cygwin Terminal**

Once the cygwin bash shell has started, type the following commands, pressing the **Enter** key after each command:

    cd h:
    mkdir -p CS101
    cd CS101

**(2)** Using a web browser, download [CS101\_Lab01.zip](CS101_Lab01.zip). Save the zip file in the **CS101** directory within your home directory.

**(3)** Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab01.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab01** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab01** subdirectory inside the **CS101\_Lab01** subdirectory, move the files to the outer **CS101\_Lab01** subdirectory and delete the inner one.

**(4)** In cygwin, navigate into the **CS101\_Lab01** directory containing the lab files:

    cd CS101_Lab01
    
You will know you are in the correct subdirectory if the command

    ls
    
shows the **hello.cpp** file (and others such as **Makefile**). **IF** it shows another **CS101\_Lab01** directory, refer to the note above in step 3.

**(5)** Start **Notepad++**.

On the KEC lab computers, Notepad++ is available from the **Start** menu:

> **Start &rarr; All Programs &rarr; Notepad++ &rarr; Notepad++**

Once your text editor has started, choose **File&rarr;Open** from the menu, and open the file

> **hello.cpp**

on your **H:** drive in the **CS101** directory and **CS101\_Lab01** subdirectory.

Your Task
=========

Your task is to add a **main** function to the **hello.cpp** file to accomplish the following tasks:

1.  Print the message **Hello, CS 101!** to the output window
2.  Prompt the user for their age in years. Store the value entered by the user in an **int** variable.
3.  Print the message **OK, you are N years old**, where *N* is the integer value entered by the user.

Here is an example run (user input in **bold**):

<pre>
Hello, CS 101!
How old are you? <b>36</b>
OK, you are 36 years old
</pre>

To compile the program (run the compiler to translate your C source code into an executable file), run the following command using the Cygwin bash shell:

    make

If the compilation is successful, you should see something like the following output:

    g++ -g -Wall   -c -o hello.o hello.cpp
    g++ -o hello.exe hello.o

If you see a compiler error message, ask the instructor or lab coach for help.

Once the program is compiled, run the program by typing the following command in the Cygwin bash shell:

    ./hello.exe
    
**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

Hints
=====

-   Put **#include &lt;stdio.h&gt;** at the top of **hello.cpp**. This will allow your progam to use the **printf** and **scanf** functions.
-   Use the **printf** function to print output to the screen.
-   Declare an **int** variable to store the user's age.
-   Use the **scanf** function to read the user's age.

Submitting
==========

When you are done, run the following command from the Cygwin bash shell:

    make submit

You will be prompted for your Marmoset username and password, which you should have received by email. The entire submission process should produce output that looks something like the following:

<pre>
$ <b>make submit</b>
Creating submit.properties file
Collecting the names of files to be submitted
Creating a solution zip file
updating: hello.cpp (deflated 4%)
updating: submitToMarmoset.pl (deflated 60%)
updating: Makefile (deflated 52%)
perl submitToMarmoset.pl solution.zip submit.properties
Enter your username: <b>jstudent</b>
Enter your password: 
######################################################################
              >>>>>>>> Successful submission! <<<<<<<<<

Make sure that you log into the marmoset server to manually
check that the files you submitted are correct.

Details:

         Semester:   Fall 2024
         Course:     CS 101
         Assignment: lab01

######################################################################
</pre>

You will use your own username in place of "jstudent". Note that when you type your password, it will not be echoed to the screen.
