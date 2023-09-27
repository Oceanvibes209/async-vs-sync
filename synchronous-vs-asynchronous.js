/*My notes from MDM Web Docs

Synchronous javascript is single threaded and will initialize one line of code at a time.
An example would be a cashier ringing up one customer at a time while the rest continue to wait there turn.

Asynchronous is multithreaded and will execute multiple lines of code at the same time,
an example is a supervisor giving out job duties to the workers and have them leave at the same time and return when they finish their task usually at
different times.



*/

/* ChatGpt Example
In synchronous JavaScript, code is executed sequentially, one line at a time. 
Each operation must complete before moving on to the next one. This can lead to blocking behavior, 
where the execution of code waits for a particular operation to finish before moving forward.


Here's an example of synchronous JavaScript using the setTimeout function:

*/
console.log("Start");

// Synchronous operation: blocking
function synchronousOperation() {
  for (let i = 0; i <= 5; i++) {
    console.log("Synchronous operation:", i);
  }
}

synchronousOperation();

console.log("End");
/* In this example, the for loop inside synchronousOperation will complete before moving on to the next line. So, the output will be:

Start
 Synchronous operation: 0
 Synchronous operation: 1
 Synchronous operation: 2
End
Asynchronous JavaScript:

In asynchronous JavaScript, operations can be initiated and allowed to complete in the background while the program continues to execute other code. 
Callbacks, Promises, and async/await are mechanisms used to work with asynchronous code.

Here's an example using setTimeout to simulate an asynchronous operation:*/


console.log("Start");

// Asynchronous operation: non-blocking
function asynchronousOperation() {
  setTimeout(function () {
    console.log("Asynchronous operation: Timeout complete");
  }, 4000);
}

asynchronousOperation();

console.log("End");
/* In this example, setTimeout initiates an asynchronous operation that completes after 2000 milliseconds. 
Meanwhile, the program continues to execute, and "End" is logged before the asynchronous operation finishes.
The output might look like:
Start
 End
Asynchronous operation: Timeout complete
Asynchronous JavaScript is crucial for handling tasks like fetching data from a server, handling user input, 
and other operations that may take time. It helps prevent blocking, ensuring that the application remains responsive.*/