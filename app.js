const firstName = "William";
const lastName = "Johnson";
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design, web development,programming';


let val;

val = firstName + lastName;

// concatenation
val = firstName + ' ' + lastName;

// append (add on)
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// escaping
val = 'That\'s awesome, I can\'t wait';

// length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[0];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt
val = firstName.charAt('2');
// get last character
val = firstName.charAt(firstName.length - 1);

// substring
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// split
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('Hello');


console.log(val);