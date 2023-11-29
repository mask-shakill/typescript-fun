//enum -store constants and duplicate value is not allowed here
// enum types : 1. numeric 2. string 3. heterogenous
// numeric enum
var enumNumber;
(function (enumNumber) {
    enumNumber[enumNumber["dataOne"] = 1] = "dataOne";
    enumNumber[enumNumber["dataTwo"] = 2] = "dataTwo";
    enumNumber[enumNumber["dataThree"] = 3] = "dataThree";
})(enumNumber || (enumNumber = {}));
console.log(enumNumber);
var enumString;
(function (enumString) {
    enumString["stringOne"] = "to";
    enumString["stringTwo"] = "for";
    enumString["stringThree"] = "require";
})(enumString || (enumString = {}));
console.log(enumString);
// heterogenous enum
var enumHeterogenous;
(function (enumHeterogenous) {
    enumHeterogenous["enumsOne"] = "from";
    enumHeterogenous[enumHeterogenous["enumsTwo"] = 11] = "enumsTwo";
    enumHeterogenous["enumThree"] = "ok";
})(enumHeterogenous || (enumHeterogenous = {}));
console.log(enumHeterogenous);
