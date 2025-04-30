const findTheOldest = function(people) {
    // Sort the people from oldest to youngest and return the first one
    people.sort((firstPerson, nextPerson) => {
        // If the year of death is undefined, use the current year
        if (firstPerson.yearOfDeath === undefined) {
            firstPerson.yearOfDeath = new Date().getFullYear();
        }
        if (nextPerson.yearOfDeath === undefined) {
            nextPerson.yearOfDeath = new Date().getFullYear();
        }
            
        return nextPerson.yearOfDeath - nextPerson.yearOfBirth -
        (firstPerson.yearOfDeath - firstPerson.yearOfBirth);
    });

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
