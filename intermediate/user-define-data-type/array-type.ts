//string array

let userNames: string[] = ["mr.been", "mr.den", "mr.tin", "mr.fin"];
console.log(`Only String type Array values : ${userNames}`);

// number array

let Id: number[] = [2001, 20002, 20003, 20004, 20005];
console.log(`Only number type array values : ${Id}`);

// union type of array

let multipleTypes: (string | number | boolean)[];
multipleTypes = [2122, "mr.been", true];
console.log(multipleTypes);
