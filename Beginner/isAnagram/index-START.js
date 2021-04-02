/* CHALLENGE
Given a two strings, write an algorithm to check if they are anagrams
of each other. Return true if the pass the test and false if they
don't. E.g
    isAnagram('silent', 'listen') // should return true
*/



function isAnagram(stringA, stringB) {
    // Code goes here
    let splitA = stringA.split("");
    let splitB = stringB.split("");
    let ret = true;
    if (splitA.length == splitB.length) {
        splitA.forEach((val, i) => {
        if (ret) {
            ret = splitB.includes(val);
        }
        });
    }
    return ret;
}


module.exports = isAnagram