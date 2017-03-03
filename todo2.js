// VARIABLES
// empty list item declared
var listItem;

// empty array
var todoListItem = [];



//FUNCTIONS
function questionUser() {
	listItem = prompt("What would you like to do? (type quit to exit and/or goto Browser Console.)");
	console.log(listItem);

	if(listItem === "new") {
	// add todo list item

	// looping back into prompt 
	// this is no longer DRY
	// created: may have to create a function to call this prompt when needed
	addTodo();
	// questionUser();

	} else if(listItem === "list") {
		// view all lists items todoListItem
		// listItem.push(); WRONG
		console.log(todoListItem);
		todoListing();

		// this will be replaced as a function call 
		// questionUser();

	} else if(listItem === "quit") {
		// clear out end the prompt
		// clear the output
		console.log("I see you quit, goodbye.");

	} else if(listItem === "delete") {
		deleteList();
		questionUser();

	} else if(listItem === "deleteIndex") {
		deleteListIndex();
		questionUser();
	} else {
		console.log("Please enter 1 of 3 answers: New / List / Quit");
		questionUser();
	} 
};


// NEW ADD A TODO FUNCTION
function addTodo() {
	newTodo = prompt("Enter a new todo...");
	console.log(newTodo + " added to the list");

	console.log(todoListItem.push(newTodo));
	// I may have to delete this index of for it keeps coming back as -1 (RESEARCH)
	console.log("indexOf: " + todoListItem.indexOf(newTodo));

	// look up more info on .indexOf and .push

	// FIRST TEST
	console.log("// FIRST TEST");

	// newTodo = todoListItem.push(newTodo);
	console.log(newTodo);

	// added this in to compare and conrast the output, if it is the same then there is no need for above line of code.
	console.log(todoListItem);
};


// LIST VIEW ALL TODOS FUNCTION
function todoListing() {
	// newtodo = todoListItem;
	var newTodo = todoListItem;


/* Answer for all todos solution:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
-- see "Loop over an Array"

********************************
Example:
Loop over an Array

fruits.forEach(function(item, index, array) {
  console.log(item, index);
});
// Apple 0
// Banana 1

********************************
Description from this link:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Description
callback is invoked with three arguments:

the element value
the element index
the array being traversed

*/
	console.log("*****************");
	todoListItem.forEach(function(todoListItem, index) {
		// console.log(todoListItem.push(newTodo));
		console.log(index + ": " + todoListItem);
	});
	console.log("*****************");
};


// DELETE REMOVE SPECIFIC TODO FUNCTION
function deleteList() {
	console.log("Here are the various list of todos: " + todoListItem);
	var deleteListItem = prompt("What would you like to delete?");

	// todoListItem = deleteListItem;
	console.log(todoListItem.indexOf(deleteListItem));

	var removeArrNum = todoListItem.indexOf(deleteListItem);


	// .splice removes the item to be deleted
	console.log("to get the Value Of: " + todoListItem.splice(removeArrNum, 1));


	console.log("index number of deleted item: " + removeArrNum);
	console.log(todoListItem);
};


// DELETE REMOVE SPECIFIC TODO FUNCTION BY INDEX (copied from previous delete function with addon/deleted code)
function deleteListIndex() {
	console.log("Here are the various list of todos: " + todoListItem);
	var deleteListItemIndex = prompt("What would you like to delete (by index Number)?");

	// todoListItem = deleteListItemIndex;
	// console.log("to get the indexOf: " + todoListItem.indexOf(deleteListItemIndex));

	console.log("to get the indexOf: " + todoListItem.splice(deleteListItemIndex, 1));

/*	
	var removeArrNum = todoListItem.indexOf(deleteListItemIndex);


	// .splice removes the item to be deleted
	console.log("splices to remove this: " + todoListItem.splice(removeArrNum, 1));


	console.log("index number of deleted item: " + removeArrNum);

*/
	console.log(todoListItem);
};





do {
	questionUser();
} while(listItem === "new" || listItem === "list" || listItem !== "quit")


// 20170226_FUTURE RERENCE: When I get back to this what's the differences?

// new todo with "delete" and "list" now lists all todos, as instructed at 'Todo List Code Along Part 2'

/*
Output should show up like this for "list":

***********
0: Buy New Turtle
1: Kill Voldemont
***********

*/ 


/*
// ADDITIONAL WORKS
console.log("ADDITIONAL WORKS");

var colors = ["red", "orange", "yellow", "green"];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

for(var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}


colors.forEach(function(colors) {
	console.log("forEach colors: " + colors);

});
this is kingzLoFitness
this is racketINK
*/