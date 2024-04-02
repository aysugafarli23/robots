// 1. Her defe ferqli rengde ekrana cixmali (console.log(`${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`);)

// let birthday = new Date('03-28-2024')
// setInterval(() => {
//   let now = new Date()
//   let between = now - birthday
//   let il = Math.trunc(between / (1000 * 60 * 60 * 24 * 365))
//   let gun = Math.trunc(between / (1000 * 60 * 60 * 24))
//   let saat = Math.trunc((between / (1000 * 60 * 60)) % 24)
//   let deqiqe = Math.trunc((between / (1000 * 60)) % 60)
//   let saniye = Math.trunc(between / 1000) % 60
//   console.clear()
  
// const colors = {
//   1: 'red',
//   2: 'green',
//   3: 'blue',
//   4: 'yellow',
//   5: 'pink',
//   6: 'black',
//   7:'purple',
//   8: 'orange',
//   9:'cyan',
//   10:'gray'
// };


// const keys = Object.keys(colors);
// const randIndex = Math.floor(Math.random() * keys.length);
// const randKey = keys[randIndex];
// const color = colors[randKey];

// console.log(color);

//   console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`, `color: ${color}; font-size: 30px;`)
  
// }, 1000)


// 2. Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir.

// let students = [
//   {
//     id: 1,
//     name:"Hidayet",
//     lastname:"G",
//     hobbies: ['drawing', 'talking', 'basketball'],
//     features: ['smart', 'funny', 'cool', 'handsome', 'sweet', 'hardworking'],
//     age: 8,
//     gpa: 85,
//     gender: 'male'
//   },
//   {
//     id: 2,
//     name:"Aysu",
//     lastname:"G",
//     hobbies: ['swimming', 'learning Korean', 'tennis'],
//     features: ['funny', 'diligent', 'calm', 'joyful'],
//     age: 21,
//     gpa: 93,
//     gender: 'female'
//   },
//   {
//     id: 3,
//     name:"Christian",
//     lastname:"G",
//     hobbies: ['self-improvement', 'travelling', 'voleyball', 'coding'],
//     features: ['angry', 'funny', 'well-formed'],
//     age: 28,
//     gpa: 37,
//     gender: 'male'
//   },
//   {
//     id: 4,
//     name:"Lala",
//     lastname:"F",
//     hobbies: ['networking', 'discovering nature', 'shoppping'],
//     features: ['smart', 'happy', 'cool', 'handsome', 'lovely'],
//     age: 32,
//     gpa: 90,
//     gender: 'female'
//   },
//   {
//     id: 5,
//     name:"Pakhlava_shekerbura",
//     lastname:"Goghalov",
//     hobbies: ['cooking', 'learning Korean', 'fishing'],
//     features: ['smart', 'delighted', 'tech buddy', 'genius', 'hardworking'],
//     age: 30,
//     gpa: 56,
//     gender: 'male'
//   }
// ];


// const studentName = prompt("Enter student name:");
// const foundStudents = students.filter(student => student.name === studentName);

// if (foundStudents.length > 0) {
//   console.log("Telebe tapildi", studentName, ":");
//   console.log(foundStudents); 
// } else {
//   console.log("Daxil etdiyiniz telebe sistemde movcud deyil");
// }




// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
//Ornek: hello
//h
//he
//hel
//hell
//hello
//hell
//hel
//he
//h

function repeatChars(str) {
  let output = "";
  for (let i = 1; i <= str.length; i++) {
    output += str.slice(0, i).repeat(i) + "\n";
  }
  return output;
}

const userInput = prompt("Soz daxil edin:");
const result = repeatChars(userInput);
console.log(result);



// 4. toLocaleDateString(); ->arashdir


