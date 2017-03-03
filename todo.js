// VARIABLES
// empty list item declared
var listItem;

// empty array
var todoListItem = [];



//FUNCTIONS
function questionUser() {
	listItem = prompt("What would you like to do? (type quit to exit and/or goto Browser Console.");
	console.log(listItem);

	if(listItem == "new") {
	// add todo list item

	// looping back into prompt 
	// this is no longer DRY
	// created: may have to create a function to call this prompt when needed
	addTodo();
	// questionUser();

	} else if(listItem == "list") {
		// view all lists items todoListItem
		// listItem.push(); WRONG
		console.log(todoListItem);

		// this will be replaced as a function call 
		// questionUser();

	} else if(listItem == "quit") {
		// clear out end the prompt
		// clear the output
		console.log("I see you quit, goodbye.");

	} else {
		console.log("Please enter 1 of 3 answers: New / List / Quit");
		questionUser();
	} 
};


function addTodo() {
	var newTodo = prompt("Enter a new todo...");
	console.log(newTodo);
	newTodo = todoListItem.push(newTodo);
	console.log(newTodo);

	// added this in to compare and conrast the output, if it is the same then there is no need for above line of code.
	console.log(todoListItem);
};


do {
	questionUser();
} while(listItem == "new" || listItem == "list" || listItem == null)


// 20170226_FUTURE RERENCE: When I get back to this what's the differences?
