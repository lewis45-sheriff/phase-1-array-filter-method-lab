// Code your solution here

function findMatching(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === string.toLowerCase();
    });
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(string.toLowerCase());
    });
}


function matchName(drivers, string) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase() === string.toLowerCase();
    });
}


 let drivers = [
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Sarah', hometown: 'San Francisco' }
];

// Test cases
console.log(findMatching(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'Bobby'));
console.log(fuzzyMatch(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah'], 'Sa')); 
console.log(matchName(drivers, 'Bobby')); 
