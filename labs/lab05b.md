---
layout: default
title: "Lab 5b: Checking the Weather"
---

Getting Started
===============

Refer to [Lab 1](lab01.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab05b.zip](CS101_Lab05b.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab05b.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab05b** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab05b** subdirectory inside the **CS101\_Lab05b** subdirectory, move the files to the outer **CS101\_Lab05b** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab05b

Using **Notepad++**, open the file

> **H:\\CS101\\CS101\_Lab05b\\WeatherApp.cpp**

Your Task
=========

Write a program that provides some feedback on the weather conditions given the current temperature and chance for precipitation.

Your program should prompt the user to enter the current temperature and the chance for precipitation (as a percentage). Based on the temperature, your program should then print one of the following messages:

-   If the temperature is **higher than 90 degrees**, print:  
    *"It's a scorcher!"*

-   If the temperature is **below 90 degrees, but higher than 70 degrees**, print:  
    *"It's a warm day."*

-   If the temperature is **below 70 degrees, but higher than 32 degrees**, print:  
    *"It's a cool day."*

-   If the temperature is **below 32 degrees, but higher than 0 degrees**, print:  
    *"It's very cold outside."*

-   If the temperature is **below 0 degrees**, print:  
    *"You'll freeze out there."*

**Additionally**, your program should simulate the weather to determine whether or not it rained. To do this, first generate a random number such that there are 100 possible values (e.g., 0 to 99, or 1 to 100). If the generated number is less than the percent chance of precipitation entered by the user, then your program should indicate that it has precipitated. Otherwise, your program should indicate that it has not precipitated.

Example run (user input in **bold**):

<pre>
Enter the current temperature: <b>78</b>
What is the chance of precipitation (in percentage): <b>85</b>

It's a warm day.
It's raining, better bring an umbrella.
</pre>

In the example above, there was an 85 percent chance of precipitation, and it rained.

Another example (user input in **bold**):

<pre>
Enter the current temperature: <b>53</b>
What is the chance of precipitation (in percentage): <b>76</b>

It's a cool day.
No rain today.
</pre>

In this second example, there was an 76 percent chance of precipitation, but it did not rain.

A third example (user input in **bold**):

<pre>
Enter the current temperature: <b>25</b>
What is the chance of precipitation (in percentage): <b>88</b>

It's very cold outside.
It's snowing, put on your boots.
</pre>

In this example, there was an 88 percent chance of precipitation and because it was so cold, it snowed.

When you are ready to compile the program, in the Cygwin window type the command

    make

To run the program, in the Cygwin window type the command

    ./WeatherApp.exe

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

Hints
=====

Use an **if/else if** statement to determine which message to print. Use a second **if/else if** statement to determine which of the three precipitation messages to print.

It snows when precipitation occurs at temperates less than or equal to 32 degrees.

You should add the following **\#include** directives at the top of the file:

{% highlight cpp %}
#include <stdlib.h>
#include <time.h>
{% endhighlight %}

Near the beginning of the statements in your **main** function add the statement

{% highlight cpp %}
srand(time(0));
{% endhighlight %}

This statement will seed the random number generator with a value based on the current time.

When the program simulates the weather, it can "randomly" choose an integer with 100 possible values (0 to 99 inclusive) using the expression

{% highlight cpp %}
rand() % 100
{% endhighlight %}

Submit
======

To submit your work, type the command

    make submit

Enter your Marmoset username and password (which you should have received by email.) Note that your password will not be echoed to the screen.
