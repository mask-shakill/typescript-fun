//enum -store constants and duplicate value is not allowed here

// enum types : 1. numeric 2. string 3. heterogenous

// numeric enum
enum enumNumber {
  dataOne = 1,
  dataTwo = 2,
  dataThree,
}

console.log(enumNumber);

enum enumString {
  stringOne = "to",
  stringTwo = "for",
  stringThree = "require",
}

console.log(enumString);

// heterogenous enum

enum enumHeterogenous {
  enumsOne = "from",
  enumsTwo = 11,
  enumThree = "ok",
}

console.log(enumHeterogenous);
