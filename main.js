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
    console.log(count);
}
strLength("babmoty");