let findTheOldest = function (array) {
  return array.reduce(
    (oldest, obj) => {
      let currentYear = new Date().getFullYear();
      let age;
      if (!obj.yearOfDeath) {
        //not dead yet
        age = currentYear - obj.yearOfBirth;
      } else {
        //dead
        age = obj.yearOfDeath - obj.yearOfBirth;
      }

      if (!oldest.yearOfDeath) {
        // the oldest
        if (age > currentYear - oldest.yearOfBirth) {
          oldest = obj;
        }
      } else {
        if (age > oldest.yearOfDeath - oldest.yearOfBirth) {
          oldest = obj;
        }
      }
      return oldest;
    },
    { yearOfBirth: Infinity, yearOfDeath: 0 }
  );
};

module.exports = findTheOldest;
