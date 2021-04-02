/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


function vowelsCounter(text) {
    let vowelsCount = text.match(/[aeiou]/gi);
    return vowelsCount ? vowelsCount.length : 0;
}

module.exports = vowelsCounter;
