# Program Objects: 
- Render a randomized fortune with three distinct randomized pieces 

## Planning 

- [x] Should use 3 separate arrays with 5 messages a piece to tell a fortune. 
- [x] three messages:
  1. How is your luck? 
  2. A random fortune
  3. Something you should do
- [x] Use Math.floor(Math.random()*5) to assign one of the strings in the array... would be cool if the number was attached to an index (probably separate from the run function) of the array and then would just output the index.
- [x] message should fill by pulling an index from each array containing one of the possible fortunes... use a console.log(`You are having ${luckArray[Math.floor(Math.random()*5)} luck. ${fortuneArray[Math.floor(Math.random()*5)]}. You should: ${directionArray[Math.floor(Math.random()*5)]}.`); 
- [x] The message should generate from a fortuneButton() function that could eventually be linked to a website in a future refactoring. 
- [x] Refactor so that new values can be added to your arrays and random number will still function (array.length() will need to be used). 
- [x] What if you grouped the arrays into a single object? Object-oriented JS could be more elegant. 