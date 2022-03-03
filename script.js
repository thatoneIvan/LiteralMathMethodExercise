// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs"
console.log(warmHugs);
//Hi, I'm Olaf and I like warm hugs

// 1b
let text = "warmHugs"
console.log(text.toUpperCase());
//WARMHUGS

// 1c
console.log(warmHugs.replace("like","love"));
//Hi, I'm Olaf and I love warm hugs

// 2a
var beenImpaled = "Oh, look at that. I've been impaled"
console.log(beenImpaled);
//Oh, look at that. I've been impaled

// 2b
var beenImpaled = "Oh, look at that. I've been impaled"
console.log(beenImpaled.slice(18));
// I've been impaled

// 3a
let dotDotDot = "..."
console.log(dotDotDot);
//...

//3b
let skullBones = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones);
//I don't have a skull...or bones.

//4
console.log(Math.PI);
//3.141592653589793

//5
let randomNumber = Math.random();
console.log(randomNumber);
//0.9001002006971326


//BONUS
//6
let letItGo = " Let it Go!"
console.log(letItGo.toUpperCase().repeat(2));

// 7
let reindeers = "Reindeers are better than people."
console.log(reindeers);