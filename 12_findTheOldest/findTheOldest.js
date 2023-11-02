const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
      const firstAge = 'yearOfDeath' in person ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth;
      const secondAge = 'yearOfDeath' in oldest ? oldest.yearOfDeath - oldest.yearOfBirth : new Date().getFullYear() - oldest.yearOfBirth;
      return firstAge > secondAge ? person : oldest;
    }); 
};

// Do not edit below this line
module.exports = findTheOldest;
