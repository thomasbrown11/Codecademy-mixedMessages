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
console.log(`You are having ${randomLuck} luck. ${randomFortune}. You should 
${randomDirection}.`); 