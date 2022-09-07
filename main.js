/**
 * @param  {function that return string length}
 * ToDo: choose better names.
 */
function strLength(string) {
    let strings = Array.from(string);
    let count = 0;
    strings.forEach(string => {
        count++;
    })
    return count;
}
strLength("babmoty");

/**
 * @param  {function that reverse string} string
 */
function strReverse(string) {
    let reversed = "";
    for (let i = string.length-1; i >= 0; i--) reversed +=string[i]; return reversed;
}
strReverse("google");