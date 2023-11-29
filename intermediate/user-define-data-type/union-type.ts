let userId: string | number | boolean;
userId = 23;
userId = "23";
userId = true;

// union array

let unionArray: (string | number)[] = [12, "twelve", "ten", 10, "seven", 7];
console.log(unionArray);
console.log(`array length: ${unionArray.length}`);

// union object

let obj: {
  userName: string;
  id: number;
  status: boolean;
};

obj = {
  userName: "Mr.Been",
  id: 20001,
  status: true,
};

console.log(obj);
