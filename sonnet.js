// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
// Find and output the starting position of the word "orphans".
// Output the number of characters in the sonnet.
// Replace the first occurance of the string "winter" with "yuletide".
// Replace all occurances of the string "the" with "a large".
// Set the content of the sonnet div with the new string.

console.log("hello");

var sonnet = document.getElementById("sonnet").innerHTML;
console.log("testing", index);

var index = sonnet.indexOf('orphans');
console.log("index of orphans", index);

var length = sonnet.length;
console.log("length of sonnet", length);

sonnet = sonnet.replace('winter', 'yuletide');
console.log('replace winter', sonnet);

sonnet = sonnet.replace(/the /gi, 'a large ');
console.log('replace the', sonnet);

document.getElementById('sonnet').innerHTML = sonnet;