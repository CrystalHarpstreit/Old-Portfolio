5th January 2015

Here I'm using Underscore's methods _.filter and _.contains in order to pick out vowels in an array and display them in a new array.

The method _.filter takes a collection (an array or object) and a predicate (A logical expression which evaluates to true or false). The method _.contains takes a list and a value and will return true if the value is present in the list.

In my function, I define the variables 'letters' and 'vowels', both arrays. And then define another, 'result' which will use both of the above mentioned methods.

I give 'letters' to _.filter and it looks through each value in the list and returns an array of all the values that pass the truth test. Then I define my predicate which uses _.contains and will return true if the value is present in the list.

I ask _.contains if the letter given as the argument to the predicate is in fact a vowel (contained in the vowels array) and if it is, it passes the truth test and is passed to the new array.

This library definitely makes things simpler; I wrote out the same function in vanilla JS which I might post about later just to solidify these concepts. I'm excited to see what else Underscore can do for me.


var letters = ['a', 'b', 'b', 'j', 'k', 'l', 'o', 'q', 'y'];
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

var result = _.filter(letters, function(letter) {
  return _.contains(vowels, letter);
});

console.log(result);
