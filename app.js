// First Solution
/*
const luckArray = ["good", "bad", "fair", "dangerous", "great"];
let randomLuck = luckArray[Math.floor(Math.random() * 5)];
const fortuneArray = ['You will inherit a large sum of money',
  'You will meet a new friend', 'You will gain noteriety in a relevant field',
  'You will lose something important', 'You will find the answer soon'];
let randomFortune = fortuneArray[Math.floor(Math.random() * 5)];
const directionArray = ['avoid a risky situation', 'reach out to a loved one',
  'heed upcoming advice', 'take a new risk', 'take some time for yourself'];
let randomDirection = directionArray[Math.floor(Math.random() * 5)];

//console.log(luckArray[Math.floor(Math.random() * 5)]);
//console.log(fortuneArray[Math.floor(Math.random() * 5)]);
//console.log(directionArray[Math.floor(Math.random() * 5)]);
// console.log(`You are having ${randomLuck} luck. ${randomFortune}. You should 
// ${ randomDirection }.`); 

let fortuneButton = () => {
  return `You are having ${randomLuck} luck.${randomFortune}. You should ${randomDirection}.`;
};

console.log(fortuneButton());
*/

//Refactor 

const allPredictions = {
  luckType: ["good", "bad", "fair", "dangerous", "great", "weird", "hard"],
  fortune: ['You will inherit a large sum of money',
    'You will meet a new friend', 'You will gain noteriety in a relevant field',
    'You will lose something important', 'You will find the answer soon', 'You will take a big trip'],
  direction: ['avoid a risky situation', 'reach out to a loved one',
    'heed upcoming advice', 'take a new risk', 'take some time for yourself']
};

//use this syntax to access array indices: 
//console.log(allPredictions.luckType[1]);
//and this for accessing the value of a key
//console.log(allPredictions.fortune);
//console.log(allPredictions.direction);
let outputArray = [];
//loop through allPredictions and push to an output array 
for (let prop in allPredictions) {
  //find random index number to push 
  let randomNum = Math.floor(Math.random() * allPredictions[prop].length);
  //console.log(randomNum);
  if (prop === 'luckType') {
    //console.log(allPredictions.luckType[randomNum])
    outputArray.push(`You are having ${allPredictions.luckType[randomNum]} luck.`)
  } else if (prop === 'fortune') {
    //console.log(allPredictions.fortune[randomNum]);
    outputArray.push(allPredictions.fortune[randomNum]);
  } else if (prop === 'direction') {
    //console.log(allPredictions.direction[randomNum]);
    outputArray.push(allPredictions.direction[randomNum]);
  }
};
console.log(outputArray);