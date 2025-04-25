const removeFromArray = function(array, ...membersToRemove) {
    for (const member of membersToRemove) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === member) {
                array.splice(i, 1);
                i--;
            }
        }
    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
