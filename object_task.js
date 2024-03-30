// Taskiniz:
// 1. Obyekt yaradin.
// 2. Array icinde coxlu obyektler yaradin
// 3. Telebeler obyektinde bir nece telebe elave edin. Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
// 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)
// 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.

// 1. Obyekt yaradin.
// let boy = {
//     dream_pet: ["hen", "cock ", " horse"],
//     dream_city: ["Aghdam", "Ganja"],
//     fav_friend: "Omar",
//     hobbies: ["growing trees", "reading books", "cycling", "cooking"]
// }

// console.log(boy);

// 2. Array icinde coxlu obyektler yaradin
// let name = [];
// let fav_food = [];
// let fav_color = [];
// let fav_game = []
// let obj = [
//     {
//         name: "Hidayet",
//         fav_food: "cake",
//         fav_color: "blue",
//         fav_game: "myminpark"
//     },
//     {
//         name: "Esma",
//         fav_food: "banana",
//         fav_color: "pink",
//         fav_game: "farmland"
//     }
// ]
// console.log(obj);

// Object.keys(obj).map((e) => {
//     name.push((`${obj[e].name}`));
//     console.log(name.join(" ve "));
//     fav_food.push((`${obj[e].fav_food}`));
//     console.log(fav_food.join(" ve "));
//     fav_color.push((`${obj[e].fav_color}`));
//     console.log(fav_color.join(" ve "));
//     fav_game.push((`${obj[e].fav_game}`));
//     console.log(fav_game.join(" ve "));
// }

// )

// 3. Telebeler obyektinde bir nece telebe elave edin.Hobbileri, xususiyettleri kimi icerisindede deyerleri qeyd edin.
let students = [
  {
    id: 1,
    name:"Hidayet",
    lastname:"G",
    hobbies: ['drawing', 'talking', 'basketball'],
    features: ['smart', 'funny', 'cool', 'handsome', 'sweet', 'hardworking'],
    age: 8,
    gpa: 85,
    gender: 'male'
  },
  {
    id: 2,
    name:"Aysu",
    lastname:"G",
    hobbies: ['swimming', 'learning Korean', 'tennis'],
    features: ['funny', 'diligent', 'calm', 'joyful'],
    age: 21,
    gpa: 93,
    gender: 'female'
  },
  {
    id: 3,
    name:"Christian",
    lastname:"G",
    hobbies: ['self-improvement', 'travelling', 'voleyball', 'coding'],
    features: ['angry', 'funny', 'well-formed'],
    age: 28,
    gpa: 37,
    gender: 'male'
  },
  {
    id: 4,
    name:"Lala",
    lastname:"F",
    hobbies: ['networking', 'discovering nature', 'shoppping'],
    features: ['smart', 'happy', 'cool', 'handsome', 'lovely'],
    age: 32,
    gpa: 90,
    gender: 'female'
  },
  {
    id: 5,
    name:"Pakhlava_shekerbura",
    lastname:"Goghalov",
    hobbies: ['cooking', 'learning Korean', 'fishing'],
    features: ['smart', 'delighted', 'tech buddy', 'genius', 'hardworking'],
    age: 30,
    gpa: 56,
    gender: 'male'
  }
]

// console.log(Object.keys(students))
// console.log(Object.values(students))

// 4. Students arrayinin qiymet ortalamasini cixardin. (Butun telebelerin qiymetlerini alib sayini bolun.)

// let gpa = []

// Object.keys(students).map(e => {
//   gpa.push(students[e].gpa)
// })
// console.log(gpa);

// const sum = gpa.reduce((a,b)=>a+b , 0);
// const avg =(sum / gpa.length) ;

// console.log(`The sum >> ${sum}. The average >> ${avg}`);


// 5. Qiymeti 90-dan az olan telebeleri Ad ve Soyadi ile birlikde ekrana cixardib onlara xeberdarliq edin.


let losers = [];
const check =students.map((e)=> {
  if (e.gpa < 90){
    losers.push(e.name, e.lastname, ",")
  }
  
}
)

console.log(losers.join(" "));
alert(`Deyerli gelecek robotlarimiz, bagislayin cari telebelerimiz, ${losers.join(" ")}  zehmet olmasa, daha cox vaxtinizi uniye serf ederek ozunuzu daha az inkisaf etdirin, cunki belelikle daha az qazanib, daha cox robotlaşa bilersiniz  ~~~Hormetle BLA BLA UNISI `)
