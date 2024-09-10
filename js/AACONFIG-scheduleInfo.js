// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("How To Succeed in CS101", "success.html", "Week1", ["hello*",],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1966"]),
		lab: new NumberedLab(1, "Hello CS101!")
	},
	{
		topic: new DoubleTopic("Lecture 1: printf, scanf, int variables", "lectures/lecture01.html", "Lecture 2: More data types, expressions", "lectures/lecture02.html", "Week2",["it goes to 11*","how many tacos?", "What day is it?", "hamster years*", "F to C*", "Mmmm, piece of candy!*","Cost of lunch"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1967", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1968", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1969", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1970",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1971", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1972", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1973"]),
		lab: new DoubleNumberedLab(1, "Hello CS101!", 2, "Expensive Calculator")

	},
	{
		topic: new Topic("Lecture 3: More about variables and expressions", "lectures/lecture03.html","Week2",["quarters", "radius of circle*", "Divvy up the rice*"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2045", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1974", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1975"]),
		lab: new NumberedLab(3, "Right Triangle")

	},
//	{
//		topic: new Topic("Workday", "","",[],[]),
//	},	
	{
		topic: new Topic("Lecture 4: Conditions and decisions", "lectures/lecture04.html","Week3",["Basic Double Coupon*", "Simple Filter*", "Restaurant check calculator*", "Bank Balance*", "make change"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1976", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1977", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1979",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1978",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2013"]),
		lab: new NumberedLab(4, "Salary Calculator")
	},
	{
		topic: new Topic("Lecture 5: If/else if/else statements, random numbers", "lectures/lecture05.html","Week3",["Triple Coupon*", "member discount*", "Complex Filter*", "grading", "Smallest of 3", "happy birthday", "Median of three@", "buy 3, get 1 free", "Restaurant check calculator", "More Fleems"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1980", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1981", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1982",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2023",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2035",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2046",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2027",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2029", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2008", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2063"
]),
		lab: new DoubleNumberedLab(5, "Animal Classifier", "5b", "Checking the Weather")
	},
	{
		topic: new Topic("Lecture 6: For loops, loop recipes", "lectures/lecture06.html","Week4",["bananana*", "Eeeeeeek!*", "countdown*", "keep doubling*", "dice rolls@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1983", "https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2012", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1984",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1985",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2014"]),
		lab: new NumberedLab(6, "Compute Pi")
	},
	{
		topic: new Topic("Lecture 7: While loops, coding style", "lectures/lecture07.html","Week4",["Check Input*", "squares*", "day numbers"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1986", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1987",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1988"]),
		lab: new NumberedLab(7, "Gone loopy")
	},
	{
		topic: new Topic("Lecture 8: Nested loops, char data types", "lectures/lecture08.html","Week5",["111222333444*", "multiplication table*", "which and how many?@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1989", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2028",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1990"]),
		lab: new DoubleNumberedLab(8, "Bar Graph", "8b", "Fancy Rectangle")
	},
	{
		topic: new Topic("Exam 1 Review", "","Exam1Review",["fleems", "plus four", "triangle counting", "First digit", "Perfect Number@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2024", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2051",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2052", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2041",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2036"]),
		lab: new NumberedLab("8c", "<b>Optional</b> Barn Door")
	},
	{
 		topic: new Topic("** Exam 1", "",[],[])
 	},
	{
		topic: new Topic("Lecture 9: Arrays", "lectures/lecture09.html","Week7",["Array Scanner*", "Pair sums*", "Exceeded Amount", "weighted average", "Not like the others@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1991", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1992",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1993", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2044",
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1994"]),
		lab: new NumberedLabNoFile(9, "Array Exercises")
	},
	{
		topic: new Topic("Lecture 9: Arrays, cont.", "lectures/lecture09.html","",[],[]),
		lab: new NumberedLab("9b", "Sorting and Finding Median of an Array")
	},
	{
		topic: new Topic("Lecture 10: Multidimensional arrays", "lectures/lecture10.html","Week8",["tic-tac-toe check", "Magic Squares"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2022", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2033"]),
		lab: new NumberedLab(10, "<b>Optional</b> Kitten Pictures")
	},
	{
		topic: new Topic("Lecture 11: Functions, top-down design", "lectures/lecture11.html","Week8",["PrintSum*", "Deep Thought*", "Find Primes@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1995", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1996", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1997"]),
		lab: new NumberedLab(11, "Right Triangle")
	},
	{
		topic: new Topic("Lecture 12: Functions that return a value", "lectures/lecture12.html","Week9",["SumBetween*", "MaxOfThree*", "feetToMeters*", "inRange*", "ContainersNeeded", "WeeklyPay", "diamond@"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2001", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2002", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2019", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2020", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2031", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2032", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2021"]),
		lab: new NumberedLab(12, "Simple Stats")
	},
	{
 		topic: new Topic("Assignment workday", "",[],[]),
 	},
	{
 		topic: new Topic("Exam 2 Review", "",[],[]),
 		lab: new NumberedLab("12b", "<b>Optional</b> Function Design")
 	},
	{
 		topic: new Topic("** Exam 2", "",[],[])
 	},
	{
		topic: new DoubleTopic("Lecture 13: Struct types", "lectures/lecture13.html","Lecture 14: Using structs with functions", "lectures/lecture14.html","Week10",["find_midpoint*"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2048"]),
		lab: new DoubleNumberedLab(13, "Fancy Output", 14, "Boing!")
	},
	{
		topic: new Topic("Lecture 15: Pointers, reference parameters", "lectures/lecture15.html","",[],[]),
		lab: new NumberedLab(15, "Boing! revisited")
	},
	{
		topic: new Topic("Lecture 16: Pointers to structs", "lectures/lecture16.html", "Week11",["AddEmUp*", "area of Rectangle*", "quadrant*"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2003", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2004", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2030"]),
		lab: new NumberedLab(16, "Boing! with pointers")
	},
	{
		topic: new Topic("Lecture 17: Composition of structs", "lectures/lecture17.html","",[],[]),
		lab: new NumberedLab(17, "Mini Golf")
	},
	{
		topic: new Topic("Lecture 18: Arrays and functions", "lectures/lecture18.html","Week13",["ArraySum*", "IsAscending*", "countOdd*", "Min Array Entry"],[
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1998", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2000", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=1999", 
"https://cs.ycp.edu/cloudcoder/#exercise?c=36,p=2034"]),
		lab: new NumberedLab(18, "Grass Fire")
	},
	{
		topic: new Topic("Lecture 19: Arrays of structs", "lectures/lecture19.html","",[],[]),
		lab: new NumberedLab(19, "Boing! particle simulation")
	},
	{
		topic: new Topic("Lecture 19: Arrays of structs, cont.", "lectures/lecture19.html","",[],[]),
		lab: new NumberedLab(19, "Boing! particle simulation")
	},
	{
 		topic: new Topic("Assignment workday", "",[],[]),
 	},
	{
 		topic: new Topic("Exam 3 Review", "",[],[]),
 	},
	{
 		topic: new Topic("** Exam 3", "",[],[])
 	},

];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("103 (11:00am)", new Date("12/12/2024 10:15:00")),
		new FinalExamDay("101 (2:00pm)", new Date("12/12/2024 12:45:00")),
		new FinalExamDay("102 (9:30am)", new Date("12/14/2024 08:00:00")),
];

// vim:ts=2:
