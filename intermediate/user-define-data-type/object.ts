let userShakil: { name: string; age: number; id?: number };
// ? =  optional assign
userShakil = {
  name: "shakil",
  age: 32,
};

let userShakilOne: object;
userShakilOne = [
  {
    name: "Shakil",
    age: 26,
    id: 2,
  },
];

console.log(userShakil);
console.log(userShakilOne);
