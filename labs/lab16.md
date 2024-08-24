---
layout: default
title: "Lab 16: Boing! with pointers"
---

In this lab, we will implement a version of the bouncing character animation using a **Scene** struct type to represent the position and direction of the character. However, the accessor functions to initialize, render, and update the struct will use pointers to take an instance of **struct Scene**.

Getting Started
===============

Refer to [Lab 1](lab1.html) if you need a reminder about how to start **Cygwin Terminal** or **Notepad++**.

Start by downloading [CS101\_Lab16.zip](CS101_Lab16.zip), saving it in the directory **H:\\CS101**. Using Windows File Explorer, navigate to your **CS101** directory on your **H:** drive and right click on the **CS101\_Lab16.zip** file and select **Extract All**. This should create a subdirectory named **CS101\_Lab16** that contains the lab files. 

**NOTE:** If there is another **CS101\_Lab16** subdirectory inside the **CS101\_Lab16** subdirectory, move the files to the outer **CS101\_Lab16** subdirectory and delete the inner one.

Start a **Cygwin Terminal** and run the following commands:

    cd h:
    cd CS101
    cd CS101_Lab16

Using **Notepad++**, open the file

> **H:\\CS101\\CS101\_Lab16\\Boing3.cpp**

Your Task
=========

The task is similar to [Lab 14](lab14.html) and [Lab 16](lab16.html): implement a bouncing character animation.

The main difference is that the **scene\_init**, **scene\_render**, and **scene\_update** functions will now have the following prototypes:

{% highlight cpp %}
void scene_init(struct Scene *s);
void scene_render(const struct Scene *s);
void scene_update(struct Scene *s);
{% endhighlight %}

As you can see, the functions now take a pointer to the **struct Scene**.

You will need to do three things to complete the program:

-   Add fields to the **struct Scene** data type
-   Modify the **main** function to add calls to these functions, as indicated by the *TODO* comments
-   Implement these functions to match the prototypes

When you are ready to compile the program, in the Cygwin window type the command

    make

To run the program, in the Cygwin window type the command

    ./Boing3.exe

The program will exit when you press a key.

**IF** you get an error message that the file is not found, ensure that you are in the correct directory and that there are no syntax errors in your source code.

Hints
-----

Since these functions take a pointer to a **struct Scene**, you will need to take the address of the **myScene** variable in **main** in order to pass it to these functions.  (Recall that `&` is the address-of operator.)

Use the arrow (**-\>**) operator to access the fields of the **struct Scene** within the functions.

Submit
======

When you are done, run the following command from the Cygwin bash shell:

    make submit

You will be prompted for your Marmoset username and password, which you should have received by email. Note that your password will not appear on the screen.
