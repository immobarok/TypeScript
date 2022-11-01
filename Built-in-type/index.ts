//built in type :number,string,boolean,void,undefined,null;

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;
userId = 101;
firstName = "Mobarok";
lastName = "Ali";
isActivated = true;
fullName = firstName.concat(lastName);

console.log(userId);
console.log(isActivated);
console.log(`Your name is :${firstName} ${lastName}
Your id is:${userId}`);
console.log("Your full name is :", fullName);
console.log(fullName.split(""));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
