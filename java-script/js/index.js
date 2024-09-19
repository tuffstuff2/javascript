// const d = document;
// let one = d.querySelector('.one')
// let two = d.querySelector('.two')

// one.onclick = () => {
//   two.style. backgroundColor = 'black'
//   one.style. backgroundColor = 'blue'
// }
// two.onclick = () => {
//   one.style. backgroundColor = 'black'
//   two.style. backgroundColor = 'blue'
// }

// let body = d.body;
// let div = d.createElement('div')
// body.appendChild(div);
// let arr = [
//   { text: "ipad" },
//   { text: "ipad" },
//   { text: "ipad" },
//   { text: "ipad" },
//   { text: "ipad" },
//   { text: "ipad" },
// ];

// for (let i = 0; i < arr.length; i++) {
//   let a = d.createElement("a");
//   a.textContent = arr[i].text;
//   a.href = "#";
//   a.style.color = "black";
//   a.style.fontSize = "10px";
//   a.style.textDecoration = "none";
//   a.style.padding = ' 0 50px'
//   div.style.margin = '0 0 0 100px'
//   div.appendChild(a);
// }

// let successful = [];

// let unSuccessful = [];

// let taxes = 0;

// let taxesMax = {};

// let taxesMin = {};

// // Реальные данные 2021*

// let bank = [
//   {
//     name: "Apple",

//     budget: 1000000,

//     tax: 28,

//     expensesPerYear: [
//       { title: "Salaries", total: 125000 },

//       { title: "Utilites", total: 18000 },

//       { title: "Rent", total: 258000 },
//     ],
//   },

//   {
//     name: "Microsoft",

//     budget: 988000,

//     tax: 21,

//     expensesPerYear: [
//       {
//         title: "Salaries",

//         total: 148000,
//       },

//       {
//         title: "Utilites",

//         total: 124000,
//       },

//       {
//         title: "Rent",

//         total: 314000,
//       },
//     ],
//   },

//   {
//     name: "HP",

//     budget: 609000,

//     tax: 14,

//     expensesPerYear: [
//       {
//         title: "Salaries",

//         total: 414000,
//       },

//       {
//         title: "Utilites",

//         total: 19000,
//       },

//       {
//         title: "Rent",

//         total: 114400,
//       },
//     ],
//   },

//   {
//     name: "Xiomi",

//     budget: 889500,

//     tax: 17,

//     expensesPerYear: [
//       {
//         title: "Salaries",

//         total: 318000,
//       },

//       {
//         title: "Utilites",

//         total: 14000,
//       },

//       {
//         title: "Rent",

//         total: 169000,
//       },
//     ],
//   },

//   {
//     name: "Samsung",

//     budget: 889500,

//     tax: 12,

//     expensesPerYear: [
//       {
//         title: "Salaries",

//         total: 650400,
//       },

//       {
//         title: "Utilites",

//         total: 29000,
//       },

//       {
//         title: "Rent",

//         total: 212000,
//       },
//     ],
//   },
// ];

// const setup = () => {
//   let taxes = 0;
//   let max = 0;
//   let min = bank[0].budget;

//   for (let item of bank) {

//      // 1. Высчитать месячные траты, создав ключ expensesPerMonth в объектах*
//     let manthe = 0;
//     for (let i of item.expensesPerYear) {
//       manthe += i.total;
//     }
//     item.expensesPerMonth = Math.round(manthe / 12)

//     // 2. Высчитать отношение трат в месяц к месячному бюджету в процентах, создав ключ procent в объектах. Например компания в месяц зарабатывает 100,000, а тратит 25,000, значит ее ключ procent = 25%*
//     item.procent = (item.expensesPerMonth * 100) / (item.budget / 12);

//     // 3. Сохранить successful и unsuccessful и добавить туда фирмы, вычитав налог tax*
//     item.expensesPerYear =  item.expensesPerMonth - (item.expensesPerMonth * item.tax) / 100;
//     if (item.procent > 100) {
//       unSuccessful.push(item);
//     } else {
//       successful.push(item);
//     }

//     // 4. Сохранить в переменной taxes общее количество налогов со всех компаний. Например все платят по 20,000 в месяц. В итоге taxes = 100,000*
//     taxes += (item.budget / 100) * item.tax;

//     // 5. Сохранить в переменных taxesMax и taxesMin те, компанию которая больше и меньше всех платит налоги*
//     if ((item.budget / 100) * item.tax > max) {
//       max = (item.budget / 100) * item.tax;
//       taxesMax = item;
//     }

//     if ((item.budget / 100) * item.tax < min) {
//       min = (item.budget / 100) * item.tax;
//       taxesMin = item;
//     }

//  // 6. Добавить ключ totalMoney в каждой компании. Эта переменная показывает сколько в итоге осталось денег в компании после вычета всех налогов и трат*
//     item.totalMoney = item.budget - (taxes + manthe / 12);
//   }

// // Вывод результатов
// console.log(bank);
//   console.log(successful);
//   console.log(unSuccessful);
//   console.log(taxes);
//   console.log(taxesMax);
//   console.log(taxesMin);
// };

// setup();

// // ИСХОДНЫЕ ДАННЫЕ НЕ ТРОГАТЬ!*

// let discount = prompt("Какая скидка?");

// let totalSale = 0;

// let total = 0;

// let max = {};

// let min = {};

// let average = 0;

// let arr = [
//   {
//     name: "Milk",

//     price: 3.25,
//   },

//   {
//     name: "Coffee",

//     price: 1.5,
//   },

//   {
//     name: "Ice Cream",

//     price: 7.85,
//   },

//   {
//     name: "Tomatos",

//     price: 4.14,
//   },

//   {
//     name: "Onion",

//     price: 2.25,
//   },
// ];

// let arr_sale = [];

// // * Писать весь код в функции `setup()`*

// // ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*

// const setup = () => {
//   let maximum = 0;
//   let minimus = arr[0].price;

//   // 1. Сохранить самый дорогой товар в переменную`max`*
//   for (let i of arr) {
//     if (i.price > maximum) {
//       maximum = i.price;
//       max = i;
//     }
//     // 2. Сохранить самый дешевый товар в переменную`min`*
//     if (i.price < minimus) {
//       minimus = i;
//       min = i;
//     }
//     // 3. Сохранить общую цену без скидок в переменную`total`*
//     total += i.price;
//     // 4. Сохранить общую цену со скидкой в переменную`totalSale`*
//     let scitca = i.price - (i.price / 100) * discount;
//     totalSale += scitca;
//     // 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*
//     let scidka = i.price - (i.price / 100) * discount;

//     arr_sale.push(`Цена со скидкой ${scidka}`);
//     // 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*
//     average += i.price;
//   }
//   average /= arr.length;
//   console.log(max);
//   console.log(min);
//   console.log(total);
//   console.log(totalSale);
//   console.log(arr_sale);
//   console.log(average);
// };

// setup();

// function romain(str) {
//   const map = {
//       "I": 1,
//       "V": 5,
//       "X": 10,
//       "L": 50,
//       "C": 100,
//       "D": 500,
//       "M": 1000
//   }

//   let result = 0
//   let prev = 0

//   for(let i = str.length - 1; i >= 0; i--) {
//       let curr = map[str[i]]

//       result += curr

//   }

//   return result
// }

// // romain("MCMXC") // 1990
// // romain("MCMXC") // 1990
// console.log(romain("IV")); // 1990

// function bubble_sort(arr) {
//   for (let item = 0; item < arr.length; item++) {
//     for (let i = 0; i < arr.length - 1 - item; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let numb = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = numb;
//       }
//     }
//   }
//   return arr.flat();
// }

// let mas = [22, 11, 3, 5, 66, 7, 33];

// console.log(bubble_sort(mas));

// //Примеры на замыкание //

// function creteStape() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let step = creteStape();
// step();
// step();
// step();

// function random(min, max) {
//   let rand = min - 0.5 + Math.random() * (max - min + 1);
//   return Math.round(rand);
// }

// function careateBugger() {
//   let s = 0;
//   return function begger() {
//     s += random(0, 100);
//     console.log(s);
//     if (s >= 250) return;
//     begger();
//   };
// }

// let begg1 = careateBugger();
// begg1();

// // Пример рекурсии //

// function fib(a) {
//   if (a <= 1) {
//     return a;
//   } else {
//     return (a = fib(a - 1) + fib(a - 2));
//   }
// }

// console.log(fib(7));

// function max_name(name1, name2, name3) {
//   let longest_name = "";

//   if (name1.length >= name2.length && name1.length >= name3.length) {
//     longest_name = name1;
//   } else if (name2.length >= name1.length && name2.length >= name3.length) {
//     longest_name = name2;
//   } else {
//     longest_name = name3;
//   }
//   return longest_name;
// }
// console.log(max_name("Alex", "George", "Michael"));

// // пропорции //
// let procent = (a, b) => {
//   a = +prompt("Введите число");
//   b = +prompt("Число для пропорции");
//   if (a >= b) {
//     alert(`${(b * 100) / a}%`);
//   } else {
//     alert("Не коректно");
//   }
// };
// procent();

// // фибоначи //
// let n = +prompt("Введите число");
// let fib = [0, 1];
// for (let i = 2; i <= n; i++) {
//   fib[i] = fib[i - 1] + fib[i - 2];
// }
// alert(fib[n]);

// let bank = [
//   {
//     name: "ruxshona beaty salon",
//     budget: 13000,
//     tax: 12,
//     expensesPerYear: [
//       {
//         title: "rent",
//         total: 6000,
//       },
//       {
//         title: "others",
//         total: 7000,
//       },
//       {
//         title: "ads",
//         total: 2000,
//       },
//     ],
//   },
//   {
//     name: "emin nosfrush",
//     budget: 5000,
//     tax: 0,
//     expensesPerYear: [
//       {
//         title: "rent",
//         total: 300,
//       },
//     ],
//   },
//   {
//     name: "akva mashennik",
//     budget: 80000,
//     tax: 15,
//     expensesPerYear: [
//       {
//         title: "rent",
//         total: 3008,
//       },
//     ],
//   },
// ];

// let nalog = 0;
// let banktax;
// for (let item of bank) {
//   let calcnalog = (item.budget / 100) * item.tax;

//   if (calcnalog > nalog) {
//     nalog = calcnalog;
//     banktax = item;
//   }
// }

// console.log(banktax);

// for (let item of bank) {
//   let all = 0;
//   for (let i of item.expensesPerYear) {
//     all += i.total;
//   }
//   item.procent = `${all / (item.budget / 100)}%`;
//   console.log(item);
// }

// let lucky = [];
// let unlucky = [];

// for (let item of bank) {
//   let calcnalog = (item.budget / 100) * item.tax;
//   let all = 0;
//   for (let i of item.expensesPerYear) {
//     all += i.total;
//   }
//   if (item.budget - (calcnalog + all) > 0) {
//     lucky.push(item);
//   } else {
//     unlucky.push(item);
//   }
// }

// console.log(lucky);
// console.log(unlucky);

//  let password = 7777;
//  let count = 3;
//  let ale;

//  do {
//    ale = +prompt(`Введите пароль осталось ${count} попытки`);
//    count--;

//  } while (ale !== password && count != 0);

// // Отфильтровать задачи в переменные а и b
// // Сохранить количество в ключе count
// // Сохранить сами задачи в массиве-ключе arr
// let arr = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut au`tem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",

//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true,
//   },
//   {
//     userId: 1,

//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true,
//   },
// ];
// let a = {
//   count: 0,
//   arr: [],
// };

// let b = {
//   count: 0,
//   arr: [],
// };

// arr.forEach((i) => {
//   if (i.completed === true) {
//     a.arr.push(i);
//     a.count++;
//   } else {
//     b.arr.push(i);
//     b.count++;
//   }
// });

// console.log(a);
// console.log(b);

// // Раскидать людей в разные массивы в зависимости от их почты
// let users = [
//   {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496",
//       },
//     },
//     phone: "1-770-736-8031 x56442",
//     website: "hildegard.org",
//     company: {
//       name: "Romaguera-Crona",
//       catchPhrase: "Multi-layered client-server neural-net",
//       bs: "harness real-time e-markets",
//     },
//   },
//   {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//       street: "Victor Plains",
//       suite: "Suite 879",
//       city: "Wisokyburgh",
//       zipcode: "90566-7771",
//       geo: {
//         lat: "-43.9509",
//         lng: "-34.4618",
//       },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//       name: "Deckow-Crist",
//       catchPhrase: "Proactive didactic contingency",
//       bs: "synergize scalable supply-chains",
//     },
//   },
//   {
//     id: 3,
//     name: "Clementine Bauch",
//     username: "Samantha",
//     email: "Nathan@yesenia.net",
//     address: {
//       street: "Douglas Extension",
//       suite: "Suite 847",
//       city: "McKenziehaven",
//       zipcode: "59590-4157",
//       geo: {
//         lat: "-68.6102",
//         lng: "-47.0653",
//       },
//     },
//     phone: "1-463-123-4447",
//     website: "ramiro.info",
//     company: {
//       name: "Romaguera-Jacobson",
//       catchPhrase: "Face to face bifurcated interface",
//       bs: "e-enable strategic applications",
//     },
//   },
//   {
//     id: 4,
//     name: "Patricia Lebsack",
//     username: "Karianne",
//     email: "Julianne.OConner@kory.org",
//     address: {
//       street: "Hoeger Mall",
//       suite: "Apt. 692",
//       city: "South Elvis",
//       zipcode: "53919-4257",
//       geo: {
//         lat: "29.4572",
//         lng: "-164.2990",
//       },
//     },
//     phone: "493-170-9623 x156",
//     website: "kale.biz",
//     company: {
//       name: "Robel-Corkery",
//       catchPhrase: "Multi-tiered zero tolerance productivity",
//       bs: "transition cutting-edge web services",
//     },
//   },
//   {
//     id: 5,
//     name: "Chelsey Dietrich",
//     username: "Kamren",
//     email: "Lucio_Hettinger@annie.ca",
//     address: {
//       street: "Skiles Walks",
//       suite: "Suite 351",
//       city: "Roscoeview",
//       zipcode: "33263",
//       geo: {
//         lat: "-31.8129",
//         lng: "62.5342",
//       },
//     },
//     phone: "(254)954-1289",
//     website: "demarco.info",
//     company: {
//       name: "Keebler LLC",
//       catchPhrase: "User-centric fault-tolerant solution",
//       bs: "revolutionize end-to-end systems",
//     },
//   },
//   {
//     id: 6,
//     name: "Mrs. Dennis Schulist",
//     username: "Leopoldo_Corkery",
//     email: "Karley_Dach@jasper.info",
//     address: {
//       street: "Norberto Crossing",
//       suite: "Apt. 950",
//       city: "South Christy",
//       zipcode: "23505-1337",
//       geo: {
//         lat: "-71.4197",
//         lng: "71.7478",
//       },
//     },
//     phone: "1-477-935-8478 x6430",
//     website: "ola.org",
//     company: {
//       name: "Considine-Lockman",
//       catchPhrase: "Synchronised bottom-line interface",
//       bs: "e-enable innovative applications",
//     },
//   },
//   {
//     id: 7,
//     name: "Kurtis Weissnat",
//     username: "Elwyn.Skiles",
//     email: "Telly.Hoeger@billy.biz",
//     address: {
//       street: "Rex Trail",
//       suite: "Suite 280",
//       city: "Howemouth",
//       zipcode: "58804-1099",
//       geo: {
//         lat: "24.8918",
//         lng: "21.8984",
//       },
//     },
//     phone: "210.067.6132",
//     website: "elvis.io",
//     company: {
//       name: "Johns Group",
//       catchPhrase: "Configurable multimedia task-force",
//       bs: "generate enterprise e-tailers",
//     },
//   },
//   {
//     id: 8,
//     name: "Nicholas Runolfsdottir V",
//     username: "Maxime_Nienow",
//     email: "Sherwood@rosamond.me",
//     address: {
//       street: "Ellsworth Summit",
//       suite: "Suite 729",
//       city: "Aliyaview",
//       zipcode: "45169",
//       geo: {
//         lat: "-14.3990",
//         lng: "-120.7677",
//       },
//     },
//     phone: "586.493.6943 x140",
//     website: "jacynthe.com",
//     company: {
//       name: "Abernathy Group",
//       catchPhrase: "Implemented secondary concept",
//       bs: "e-enable extensible e-tailers",
//     },
//   },
//   {
//     id: 9,
//     name: "Glenna Reichert",
//     username: "Delphine",
//     email: "Chaim_McDermott@dana.io",
//     address: {
//       street: "Dayna Park",
//       suite: "Suite 449",
//       city: "Bartholomebury",
//       zipcode: "76495-3109",
//       geo: {
//         lat: "24.6463",
//         lng: "-168.8889",
//       },
//     },
//     phone: "(775)976-6794 x41206",
//     website: "conrad.com",
//     company: {
//       name: "Yost and Sons",
//       catchPhrase: "Switchable contextually-based project",
//       bs: "aggregate real-time technologies",
//     },
//   },
//   {
//     id: 10,
//     name: "Clementina DuBuque",
//     username: "Moriah.Stanton",
//     email: "Rey.Padberg@karina.biz",
//     address: {
//       street: "Kattie Turnpike",
//       suite: "Suite 198",
//       city: "Lebsackbury",
//       zipcode: "31428-2261",
//       geo: {
//         lat: "-38.2386",
//         lng: "57.2232",
//       },
//     },
//     phone: "024-648-3804",
//     website: "ambrose.net",
//     company: {
//       name: "Hoeger LLC",
//       catchPhrase: "Centralized empowering task-force",
//       bs: "target end-to-end models",
//     },
//   },
// ];
// let emails = {
//   org: [],
//   net: [],
//   info: [],
// };
// let other = [];

// let filt2 = users.filter((i)=> {
//     if(i.email.includes('org')){
//         emails.org.push(i)
//     }else if(i.email.includes('net')){
//         emails.net.push(i)
//     }else if(i.email.includes('info')){
//         emails.info.push(i)
//     }else {
//         other.push(i)
//     }
// })

// console.log(emails);
// console.log(other);

// let types = {
//   number: [],
//   string: [],
//   boolean: [],
//   object: [],
// };

// const obj1 = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   hobbies: ["reading", "swimming"],
// };

// const obj2 = {
//   address: "123 Main St",
//   phone: "555-555-5555",
//   isAdmin: true,
//   job: {
//     title: "Developer",
//     company: "ABC Corp",
//   },
// };

// // 1. Соеденить два объекта в одно целое но не изменяя исходные данные
// let obj = { ...obj1, ...obj2 };

// // 2. Из этого объекта вытащить все клюи в отдельную переменную (ключи)
// let keys = Object.keys(obj);

// // 3. Из этого объекта вытащить все значени в отдельную переменную (значения)
// let values = Object.values(obj);

// // 4. Эти два полученных массива вы должны соеденить
// let arr = keys.concat(values);

// arr.forEach((item) => {
//   let type = typeof item;
//   if (type === "number") {
//     types.number.push(item);
//   } else if (type === "string") {
//     types.string.push(item);
//   } else if (type === "boolean") {
//     types.boolean.push(item);
//   } else if (type === "object") {
//     if (Array.isArray(item)) {
//       types.object = types.object.concat(item);
//     } else {
//       types.object.push(item);
//     }
//   }
// });

// console.log(types);

// let popArtists = [
//   "usmonova",
//   "morgenshtern",
//   "baskov",
//   "eldzhey",
//   "50cent",
//   "eminem",
//   "oxy",
// ];
// let long = popArtists[0];
// popArtists.forEach((nam) => {
//   if (nam.length < long.length) {
//     long = nam;
//   }
// });
// console.log(long);

// let cars = [
//   {
//     name: "malibu",
//     price: 31000,
//   },
//   {
//     name: "nexia",
//     price: 12000,
//   },
//   {
//     name: "onix",
//     price: 21000,
//   },
//   {
//     name: "tahoe",
//     price: 100000,
//   },
//   {
//     name: "cobalt",
//     price: 13000,
//   },
//   {
//     name: "tracker",
//     price: 26000,
//   },
//   {
//     name: "kia k5",
//     price: 43000,
//   },
//   {
//     name: "santafe",
//     price: 50000,
//   },
//   {
//     name: "elantra",
//     price: 35000,
//   },
//   {
//     name: "tico",
//     price: 2500,
//   },
// ];

// let max = 0
// cars.forEach((cel)=> {
//   if(cel.price > max){
//     max = cel.price
//   }
// })
// console.log(max);

// let ever = 0
// cars.forEach((cel)=> {
//   ever += cel.price
// })
// ever /= cars.length
// console.log(ever);

// //  +prompt("Введите число мин ${arr.map((arr) => arr.n)")}\n //
// let from = +prompt("Введите число мин"); // 10000
// let up = +prompt("Введите число мак"); // 40000

// let arr = cars.filter((car) => car.price >= from && car.price <= up);

// if (arr.length === 0) {
//   alert("Нет машины с такой ценой.");
// } else if (arr.length === 1) {
//   let Car = arr[0];
//   let inf = confirm(
//     `Вы выбрали ${Car.name} за ${Car.price}. Хотите купить? Да/Нет`
//   );
//   if (inf === true) {
//     let payment = prompt(`Введите сумму для оплаты ${Car.price}:`);
//     if (payment == Car.price) {
//       alert(`Спасибо за покупку ${Car.name}!`);
//     } else {
//       alert("Не достаточно денег");
//     }
//   } else {
//     alert("Приходите еще");
//   }
// } else {
//   alert("Выберите машину из списка:");
//   arr.forEach((car, index) => {
//     alert(`${index + 1}. ${car.name} за ${car.price}`);
//   });
//   let choice = prompt("Введите номер машины:");
//   if (choice >= 1 && choice <= arr.length) {
//     let Car = arr[choice - 1];
//     let inf = confirm(
//       `Вы выбрали ${Car.name} за ${Car.price}. Хотите купить? Да/Нет`
//     );
//     if (inf === true) {
//       let payment = prompt(`Введите сумму для оплаты ${Car.price}:`);
//       if (payment == Car.price) {
//         alert(`Спасибо за покупку ${Car.name}!`);
//       } else {
//         alert("Оплата не принята.");
//       }
//     } else {
//       alert("Приходите еще");
//     }
//   } else {
//     alert("Приходите еще.");
//   }
// }

// какую вы из этих машин купите ?

// если выбирает конкретную машину то следующий промпт с просьбой оплатить стоимость этой машины

// let arr = [
//   "ruxshona",
//   "jojo",
//   "ulmas",
//   "shoxrux",
//   "javohir",
//   "samir",
//   "damir",
//   "jasmina",
// ].find((name) => name.length % 2 === 0);
// console.log(arr);

//  let nam = prompt('Ваше имя')

//  if(nam.length % 2 == 0){
//      alert('проходите')
//  }else{
//      alert('нет')
//  }

//  let num = +prompt('Четность числа')

//  if( num % 2 == 0){
//      alert('четно')
//  }else{
//      alert('нет')
//  }

//  let chislo = +prompt('числа')
//  let znak = prompt('+/-/*/ : через знак /')
//  let chislo1 = +prompt('числа')

//  if(znak == '+'){
//      alert(chislo + chislo1)
//  }else if(znak == '-'){
//      alert(chislo - chislo1)
//  }else if(znak == '*'){
//      alert(chislo * chislo1)
//  }else if(znak == '/'){
//      alert(chislo / chislo1)
//  }else {
//      alert('нет')
//  }

// let month = +prompt('сезон')
// if(month >= 3 && month <= 6){
//     alert('Весна')
// }else if(month >= 6 && month <= 9){
//     alert('Лето')
// }else if(month >= 9 && month <= 11){
//     alert('Осень')
// }else if(month >= 2){
//     alert('Зима')
// }else if(month == 12){
//     alert('Зима')
// }else {
//     alert('Нет')
// }

//  let myv = 123
//  console.log(myv instanceof String);
//  console.log(typeof myv);
//  let myv2 = myv
// console.log(myv2);

// let m = Math.random()
// m = String(m).slice(2)
// m = Number(m)
// console.log(m);

// // let nam = prompt('Введите имя')
// // let n = nam.slice(0,1).toUpperCase()  + nam.slice(1).toLowerCase()
// // console.log(n);

// let ran = Math.ceil(Math.random() * 899) + 100
// console.log(ran);

// let hell = "hELLOwORLD"
//   let h = hell.slice(0, 1).toUpperCase() + hell.slice(1, 5).toLowerCase()
//   let w = hell.slice(5, 6).toUpperCase() + hell.slice(6).toLowerCase()
//    w = w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()
//    hell = `${h} ${w}`
//    console.log(hell)

//  let a = prompt('Введите дробное число через .')
//  let b = prompt('Введите на какую степень хотите возвести')
//  let c = a ** b
//  let str = c.toString()
//  console.log(c);
//  console.log(str);
//  alert(Math.ceil(c));

// let a = +prompt('Введите дробное число через .')
// let b = +prompt('Введите натуральное число')
// let c = +prompt('На какю степень хотите воздвигнуть')
// let result = (a + b) **c

// alert(Math.ceil(result),);

//  let hotel = [

//       // 1 этаж //

//       [
//       {
//       room: 1,
//       price: 300,
//       brand: "Luxe",
//       children: false,
//       },
//       {
//       room: 2,
//       price: 4000,
//       brand: "Deluxe",
//      children: true,
//       },
//       {
//       room: 3,
//       price: 1000,
//       brand: "Deluxe",
//       children: false,
//       },
//       {
//      room: 4,
//       price: 900,
//      brand: "Luxe",
//       children: true,
//       },
//       ],

//       // 2 этаж //

//       [
//       {
//       room: 5,
//       price: 700,
//       brand: "Luxe",
//       children: true,
//      },
//       {
//      room: 6,
//       price: 79000,
//       brand: "President",
//       children: true,
//       },
//      {
//       room: 7,
//       price: 600,
//       brand: "Luxe",
//       children: false,
//      },
//       {
//       room: 8,
//       price: 950,
//       brand: "Luxe",
//       children: true,
//       },
//       ],

//        // 3 этаж //

//       [
//       {
//       room: 9,
//       price: 1900,
//       brand: "Deluxe",
//       children: false,
//       },
//      {
//       room: 10,
//       price: 5000,
//      brand: "Deluxe",
//       children: true,
//       },
//       {
//       room: 11,
//       price: 1000,
//       brand: "Deluxe",
//       children: false,
//       },
//      {
//       room: 12,
//       price: 250,
//       brand: "Luxe",
//       children: false,
//       },
//       ],

//        // 4 этаж //

//       [
//       {
//       room: 13,
//       price: 10000,
//       brand: "President",
//       children: true,
//       },
//       {
//       room: 14,
//       price: 8000,
//       brand: "President",
//       children: false,
//       },
//       ],
//      ];

//      let rooms = {
//       all_roms: [],
//      rooms: 0,
//      };
//      let brands = {
//       president: [],
//       deluxe: [],
//       luxe: [],
//      };

//      let room_level = {
//       perviy: 0,
//       vtoroy: 0,
//       tretiy: 0,
//       chetvertiy: 0,
//      };

//  let fun = function(){
//      let child_room = []

//      // 1 задание //
//  for(let item of hotel){
//     for(let i of item){
//      let branding = i.brand
//      if(branding == "President"){
//          brands.president.push(branding)
//      }else if(branding == "Deluxe"){
//      brands.deluxe.push(branding)
//  }else if(branding == "Luxe"){
//      brands.luxe.push(branding)
//  }else{
//      break
//  }
//  }

//  // 2 задание //
//  for(let eat of item){
//      eat.eating = true
//  }

//  // 3 задание //
//  for(let rum of item){
//      rooms.all_roms.push(rum.room)
//      rooms.all_roms.sort((a, b)=> a - b)
//      rooms.rooms++
//  }

//  // 7 задание //

//      for(let chl of item){
//          if(chl.children == true){
//              child_room.push(chl)
//          }else{

//          }
//      }

//  }

//  // 4 задание //
//  let max_price = hotel.flat().sort((a, b) => a.price - b.price );
//  let ma_price = max_price.pop()

//  // 5 задание //

//  for (let item = 0; item < hotel.length; item++) {
//       let floor_price = 0;
//      for (let i = 0; i < hotel[item].length; i++) {
//       floor_price += hotel[item][i].price;
//       }
//       if (item === 0) {
//       room_level.perviy = floor_price;
//       } else if (item === 1) {
//      room_level.vtoroy = floor_price;
//       } else if (item === 2) {
//       room_level.tretiy = floor_price;
//       } else if (item === 3) {
//      room_level.chetvertiy = floor_price;
//       }else{
//          break
//      }
//      }

//      // 6 задание //
//   let all_price = hotel.flat().reduce((a, b) => a + b.price, 0)

//  console.log(room_level);
//  console.log(brands);
//  console.log(rooms);
//  console.log(child_room);
//  console.log(all_price);
//  console.log(ma_price);
//  }
//  console.log(fun())

// Задача 1 //
//  let c = 'first'
//  let e = 'second'

//  function reverse() {
//     c = 'second'
//     console.log(c)
//  }
//     reverse()
//  function reverse1() {
//     e = 'first'
//     console.log(e)
//    }
//    reverse1()

//  // Задача 2 //
//  function max_name(name1,name2,name3) {
//     let longest_name = '';

//     if(name1.length >= name2.length && name1.length >= name3.length) {
//         longest_name = name1;
//     } else if(name2.length >= name1.length && name2.length >= name3.length) {
//         longest_name = name2;
//     } else {
//         longest_name = name3;
//     }
//     return longest_name // как это работает ? //
//  }

//  console.log( max_name('Alex', 'George', 'Michael'))

// // Задача 3 //
//  function email_machine() {
//     let user_name = prompt('Введите имя')
// let user_sername = prompt('Введите Фамилию')
//     let casino = Math.floor(Math.random() * 3) + 1
//     if (casino == 1) {
//         alert(`${user_name}${user_sername}@gmail.com`)
//     }else if(casino == 2) {
//         alert(`${user_sername}${user_name}@gmail.com`)
//     }else {
//         alert(`@gmail.com${user_sername}${user_name}`)
//     }
//  }

//  email_machine()

//  // Задача 4 //
//  let fun = () => {
//     return 'Привет мир'
//  }
//  console.log(fun());

//  let fun1 = () => {
//     console.log('Привет мир');
//  }
//  fun1()

// // Задача 5 //

// let time = setTimeout(() => {
//     console.log('Привет мир!')
// }, 15000)

//     let i = 1
//     let time1 = setInterval(() => {
//        console.log(`Сообщение ${i}`)
//        i++;
//        if(i > 4){
//            clearInterval(time1)
//        }
//        }, 2000)
//        let time2 = setTimeout(() => {
//         console.log('Сообщение 5')
//     }, 10000)

// // Задача 6 //
// function weatherForecast(city, weather) {
// if(weather == '' || weather == undefined){
//     console.log('Прогноз погоды для города' + city+ ':'+ 'Отличная погода')
// }else {
//     console.log('Прогноз погоды для города' + city+ ':'+ weather)
// }
// }
// weatherForecast('Dubai', 'Солнечно')
// weatherForecast('France')

// // Задача 7 //
// function createGreeting() {
//     let greetingString = "Hey, this is"

//     function greet(imya){
//     return `${greetingString} ${imya}`
// }
//     function changeGreeting(change) {
//     greetingString = change
// }
// return {
//     greet,
//     changeGreeting,
// };
// }

// let greeting1 = createGreeting()

// console.log(greeting1.greet('Bob'))

// // Задача 8 //

// let week = ['Суббота', 'Панидельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Воскрксенье',]

// let today = new Date().getDay()

// console.log(`Сегодня ${week[today]}`)

//   let lines = +prompt('Елка');
//   let str = ""

//   for (let item of Array(lines)){
//       str += "*"
//       console.log(str)

//   }

//   let lines1 = +prompt('Елка-')
//   let str1 = "*"
//   let star = str1

//   for (let item = 0; item < lines1; item++){
// console.log(star)

// star = star + str1
// if(item == lines1 - 1){
//  for(let item = lines1; item > 0; item--){
//    star = star.slice(0, -1)
//    console.log(star)
//  }
// }
//   }

//  let n_arr = [[1,2,3],4,5,[[6,7],10],8,9]
//  n_arr = n_arr.flat(Infinity)
//  n_arr.sort((a, b) => a- b)
//  console.log(n_arr)

// let arr1 = [[{a: {price: 20}}],[{a: {price: 35}}],[{a: {price: 44}}]]

// let total1 = 0;

// for (let item of arr1){
//     for(let i of item){
//         let inn = i.a.price
//         total1 += inn;
//     }
// }
// console.log(total1)

//  let discount = +prompt('Какая скидка?')

//  let totalSale = 0

//  let total = 0

//  let max = {
//      name: '',
//      price: 0,
//  }

//  let min = {
//      name: '',
//      price:Infinity,
//  }

//  let average = 0

//  let arr = [

//  {

//  name: 'Milk',

//  price: 3.25

//  },

//  {

//  name: 'Coffee',

//  price: 1.5

//  },

//  {

//  name: 'Ice Cream',

//  price: 7.85

//  },

//  {

//  name: 'Tomatos',

//  price: 4.14

//  },

//  {

//  name: 'Onion',

//  price: 2.25

//  }

//  ]

//  let arr_sale = []

//  for(let item of arr){
//      if(item.price > max.price){
//          max = item
//      }
//  }
//  console.log(max)

//  for(let item of arr){
//      if(item.price < min.price){
//          min = item
//      }
//  }
//  console.log(min)

//  for(let item of arr){
//      total += item.price
//  }
//  console.log(total)

//  for(let item of arr){
//      let scitca = item.price-(item.price / 100 * discount)
//      totalSale += scitca
//  }
//  console.log(totalSale)
//  for(let item of arr){
//      let scidka = item.price -(item.price / 100 * discount)

//    arr_sale.push(`Цена со скидкой ${scidka}`);

//  }

//  console.log(arr_sale);

//  for(let item of arr){
//      average += item.price
//  }
//  average /= arr.length;

//  console.log(average);

// 1 Задание //
// let arr = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut au`tem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",

//         "completed":
//             true
//     },
//     {
//         "userId": 1,
//         "id": 5,
//         "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 6,
//         "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 7,
//         "title": "illo expedita consequatur quia in",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 8,
//         "title": "quo adipisci enim quam ut ab",
//         "completed": true
//     },
//     {
//         "userId": 1,

//         "id": 9,
//         "title": "molestiae perspiciatis ipsa",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 10,
//         "title": "illo est ratione doloremque quia maiores aut",
//         "completed": true
//     },
// ]

// let a = {
//     count: 0,
//     arr: []
// }

// let b = {
//     count: 0,
//     arr: []
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].completed == false) {
//         a.arr.push(arr[i]);
//     } else if (arr[i].completed == true) {
//         b.arr.push(arr[i]);
//     }
// }
// a.count = a.arr.length;
// b.count = b.arr.length;
// console.log(a);
// console.log(b);

// // 2 Задание //

// let arr1 = [4, 16, 19, 22, 11, 144, 967, 19124]

// let even = []
// let odd = []

// for (let i1 = 0; i1 < arr1.length; i1++) {
//     if (arr1[i1] % 2 == 0) {
//         even.push(arr1[i1])
//     } else {
//         odd.push(arr1[i1])
//     }
// }

// console.log(even);
// console.log(odd);

// // 3 Задание //

// let cheap = []

// let cars = [{
//     carBrand: "BMW",
//     price: 25000,

// },
// {
//     carBrand: "Audy",
//     price: 40000,

// }]

// for (let i2 = 0; i2 < cars.length; i2++) {
//     if (cars[i2].price < 35000) {
//         cheap.push(cars[i2])
//     }
// }

// console.log(cheap)

// // 4 Задание //

// let arr2 = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica'];
// let index = prompt('Введите индекс который хотите удалить ');

// if(index <= arr2.length -1){
//     arr2.splice(index,1)
// }else{
//     alert('Не коректно')
// }
// console.log(arr2)

// // 5 Задание //

// let arr3 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22];
// let number_c = 0;

// for (let i3 = 0; i3 < arr3.length; i3++) {
//     if (typeof arr3[i3] == 'number') {
//         number_c++;
//     }
// }

// if (number_c > 5) {
//     console.log('Гуд');
// } else {
//     console.log('Не гуд');
// }

// // 6 Задание //

// let scoole4 = ["Alex", "John", "Mary"];

// scoole4.push("Marj", "Kayt", "Luci")

// console.log(scoole4)

// // 7 Задание //

// let cars1 = [
//     {
//         carBrand: "Toyota",
//         price: 25000,
//         isAvailableForSale: true
//     },
//     {
//         carBrand: "BMW",
//         price: 35000,
//         isAvailableForSale: false
//     },
//     {
//         carBrand: "Malibu",
//         price: 20000,
//         isAvailableForSale: true
//     }
// ];

// cars1.push({
//     carBrand: "Ford",
//     price: 30000,
//     isAvailableForSale: true
// });

// console.log(cars1)

// // 8 Задание //

// let myCities = ["London", "New York", "Paris", "Moscow"];

// for (let i4 = 0; i4 <  myCities.length; i4++){
//     let cityInfo = myCities[i4] + `под индексом   ${i4}  в массиве myCities`;
//     console.log(cityInfo);
// }

// // 1 Задание //
// let scoole1 = {
//     name: ["Alex", "Bob", "Jin"]
// }

// let scoole2 = {
//     name: ["Andrew", "Jams", "Alee"]
// }

// let scoole3 = {
//     name: ["Frank", "Mag", "Lusi"]
// }

// let arr1 = scoole1.name
// let arr2 = scoole2.name
// let arr3 = scoole3.name
// arr1 = arr1.concat(arr2, arr3)

// console.log(arr1)

// // 2 Задание //
// let people_name = ["Alex", "Bob", "Jin", "Andrew", "Jams", "Alee", "Frank", "Mag", "Lusi"]
// let delate_name = prompt('Введите имя которое хотите удалить')
// delate_name = delate_name.slice(0, 1).toLocaleUpperCase() + delate_name.slice(1).toLocaleLowerCase()
// let index_name = people_name.indexOf(delate_name)

// if (index_name !== -1) {
//     people_name.splice(index_name, 1)
//     alert(`Имя ${delate_name} удалено оставшиеся имена ${people_name}`)
// } else if ((index_name == -1)) {
//     alert(`Имя ${delate_name} не найденно`)
// } else {
//     alert('Не коректно')
// }

// // 3 Задание //
// let array = [1, 2, 3, 4, 5, 6]
// console.log(array[4])

// let array_first = array[0]
// let array_last = array[array.length - 1]
// console.log(array_first, array_last)

// array.pop(5)
// console.log(array)

// array.shift(0)
// console.log(array)

// array.push(10)
// console.log(array)

// array.unshift(0)
// console.log(array)

// let poisk = array.includes(10)
// console.log(poisk)

// let spin = array.reverse()
// console.log(spin)

// let inf = confirm('Ходите зарегистрироваться')

// if (inf == true) {
//     let user_nmae = prompt('Введите имя')
//     user_nmae = user_nmae.slice(0).toLowerCase()
//     console.log(user_nmae)
//     let user_code = +prompt('Введите код')
//     console.log(user_code)
//     let user_summe = +prompt('Введите Сумму вашего счета')
//     console.log(user_summe)
//     let inf1 = confirm('Ходите Войти')
//     if (inf1 == true) {
//         let user_nmae1 = prompt('Введите имя')
//         if (user_nmae == user_nmae1) {
//             alert('Праходите')
//             let user_code1 = +prompt('Введите код')
//             if (user_code == user_code1) {
//                 alert('Праходите')
//                 let user_summe1 = +prompt(`Ваш баланс составляет ${user_summe}`)
//                 if (user_summe - user_summe1 >= user_summe * 0.5 && user_summe - user_summe1 <= user_summe * 1) {
//                     alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${user_summe - user_summe1 - user_summe1 * 0.05}`)
//                 } else if (user_summe - user_summe1 >= user_summe * 0.3 && user_summe - user_summe1 <= user_summe * 0.5) {
//                     alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${money - user_summe1 - user_summe1 * 0.03}`)
//                 } else if (user_summe - user_summe1 >= user_summe * 0 && user_summe - user_summe1 <= user_summe * 0.3) {
//                     alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${user_summe - user_summe1 - user_summe1 * 0.00}`)
//                 } else if (user_summe1 > user_summe) {
//                     alert('Не достаточно средств')
//                 }else {
//                     alert('Не коректно')
//                 }
//             }else {
//                 alert('Не коректно')
//             }
//         } else {
//             alert('Не коректно')
//         }
//     } else if (inf1 == false) {
//         alert('Приходите еще')
//     } else {
//         alert('Не коректно')
//     }
// } else if (inf == false) {
//     alert('Приходите еще')
// } else {
//     alert('Не коректно')
// }

// let objact = {
//     name: "Alex",
//     money: 10000,
//     account: 7777,
// }
// let objact1 = {
//     name: "Jeen",
//     money: 40000,
//     account: 2424,
// }
// let objact2 = {
//     name: "Bred",
//     money: 20000,
//     account: 8921,
// }
// let user_name = prompt('Введите имя')

// if (user_name == objact.name) {
//     alert('Проходите')
//     let password = +prompt('Введите номер счета')
//     if (password == objact.account) {
//         alert('Проходите')
//         let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${objact.money}`)
//         if (objact.money - kamisiya >= objact.money * 0.5 && objact.money - kamisiya <= objact.money * 1) {
//             alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${objact.money - kamisiya - kamisiya * 0.05}`)
//         } else if (objact.money - kamisiya >= objact.money * 0.3 && objact.money - kamisiya <= objact.money * 0.5) {
//             alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${objact.money - kamisiya - kamisiya * 0.03}`)
//         } else if (objact.money - kamisiya >= objact.money * 0 && objact.money - kamisiya <= objact.money * 0.3) {
//             alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${objact.money - kamisiya - kamisiya * 0.00}`)
//         } else if (kamisiya > objact.money) {
//             alert('Не достаточно средств')
//         } else if (password !== objact.account) {
//             alert('Не коректно')
//         }

//     } else {
//         alert('Не коректно')
//     }
// } else if (user_name !== objact.name && user_name == objact1.name) {
//     alert('Проходите')
//     let password = +prompt('Введите номер счета')
//     if (password == objact1.account) {
//         alert('Проходите')
//         let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${objact1.money}`)
//         if (objact1.money - kamisiya >= objact1.money * 0.5 && objact1.money - kamisiya <= objact1.money * 1) {
//             alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${objact1.money - kamisiya - kamisiya * 0.05}`)
//         } else if (objact1.money - kamisiya >= objact1.money * 0.3 && objact1.money - kamisiya <= objact1.money * 0.5) {
//             alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${objact1.money - kamisiya - kamisiya * 0.03}`)
//         } else if (objact1.money - kamisiya >= objact1.money * 0 && objact1.money - kamisiya <= objact1.money * 0.3) {
//             alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${objact1.money - kamisiya - kamisiya * 0.00}`)
//         } else if (kamisiya > objact1.money) {
//             alert('Не достаточно средств')
//         } else if (password !== objact1.account) {
//             alert('Не коректно')
//         }
//     } else {
//         alert('Не коректно')
//     }
// }
// else if (user_name !== objact1.name && user_name == objact2.name) {
//     alert('Проходите')
//     let password = +prompt('Введите номер счета')
//     if (password == objact2.account) {
//         alert('Проходите')
//         let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${objact2.money}`)
//         if (objact2.money - kamisiya >= objact2.money * 0.5 && objact2.money - kamisiya <= objact2.money * 1) {
//             alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${objact2.money - kamisiya - kamisiya * 0.05}`)
//         } else if (objact2.money - kamisiya >= objact2.money * 0.3 && objact2.money - kamisiya <= objact2.money * 0.5) {
//             alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${money - kamisiya - kamisiya * 0.03}`)
//         } else if (objact2.money - kamisiya >= objact2.money * 0 && objact2.money - kamisiya <= objact2.money * 0.3) {
//             alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${objact2.money - kamisiya - kamisiya * 0.00}`)
//         } else if (kamisiya > objact2.money) {
//             alert('Не достаточно средств')
//         } else if (password !== objact1.account) {
//             alert('Не коректно')
//         }
//     } else {
//         alert('Не коректно')
//     }
// } else {
//     alert('Не коректно')
// }

// let car = confirm('Хотите узнаить о машиннах')
// switch (car) {
//     case false:
//         alert('Приходите еще')
//         break;
//     case true:
//         let car1 = +prompt('Введите номер 1.Gentra 2.Spark 3.Laseti 4.Malibu 5.Cobalt');
//         switch (car1) {
//             case 1:
//                 alert('110 лошадиных сил');
//                 break;
//             case 2:
//                 alert('85 лошадиных сил');
//                 break;
//             case 3:
//                 alert('122 лошадиных сил');
//                 break;
//             case 4:
//                 alert('200 лошадиных сил');
//                 break;
//             case 5:
//                 alert('105 лошадиных сил');
//                 break;
//             default:
//                 alert('Что ты Вел');
//                 break;
//         }
//         let buy_car = confirm(`Хотите купить машинну под номером-${car1}`);
//         switch (buy_car) {
//             case true:
//                 alert(`Поздравляем с покупкой машины под номером-${car1}`);
//                 break;
//             case false:
//                 alert('Приходите еще');
//                 break;
//             default:
//                 alert('Что ты Вел');
//                 break;
//         }
//         break;
//     default:
//         alert('Приходите еще');
//         break;
// }

// let random = Math.floor(Math.random() * 3) + 1;
// let use_num = prompt('Введите имя');
// let ser_num = prompt('Введите фамилию');
// let data = +prompt('Введите цифру');

// switch (random) {
//     case 1:
//         alert(`${use_num}${ser_num}${data}gmail.com`);
//         break;

//     case 2:
//         alert(`${use_num}${data}${ser_num}gmail.com`);
//         break;

//     case 3:
//         alert(`${data}${use_num}${ser_num}gmail.com`);
//         break;

//     default:
//         alert('нет');
//         break;
// }

// let date = new Date()
// let day = date.getDay()

// switch (day) {
//     case 0:
//         console.log('Воскресенье')
//         break;
//     case 1:
//         console.log('Понедельник')
//         break;
//     case 2:
//         console.log('Вторник')
//         break;
//     case 3:
//         console.log('Среда')
//         break;
//     case 4:
//         console.log('Четверг')
//         break;
//     case 5:
//         console.log('Пятница')
//         break;
//     case 6:
//         console.log('Суббота')
//         break;
// }

//  let name = "Alex"
//  let money = 10000
//  let account = 7777

//  let user_name = prompt('Введите имя')

//  if (user_name == name) {
//      alert('Проходите')
//      let password = +prompt('Введите номер счета')
//      if (password == account) {
//          alert('Проходите')
//          let kamisiya = +prompt(`Сколько хотите обналичить баланс счета составляет ${money}`)
//          if (money - kamisiya >= money * 0.5 && money - kamisiya <= money * 1) {
//              alert(`Оставшаяся сумма вместе с 5% комиссией составляет ${money - kamisiya - kamisiya * 0.05}`)
//          } else if (money - kamisiya >= money * 0.3 && money - kamisiya <= money * 0.5) {
//              alert(`Оставшаяся сумма вместе с 3% комиссией составляет ${money - kamisiya - kamisiya * 0.03}`)
//          } else if (money - kamisiya >= money * 0 && money - kamisiya <= money * 0.3) {
//              alert(`Оставшаяся сумма вместе с 0% комиссией составляет ${money - kamisiya - kamisiya * 0.00}`)
//          } else if (kamisiya > money) {
//              alert('Не достаточно средств')
//          }
//      }else if (password !== account) {
//          alert('Не коректно')
//      }
//  } else {
//      alert('Не коректно')
//  }

//  let car = confirm('Хотите узнаить о машиннах')

//  if (car === true) {
//      let car1 = +prompt(`Введите номер  1.Gentra 2.Spark 3.Laseti 4.Malibu 5.Cobalt`)
//      if (car1 === 1) {
//          alert('110 лошадиных сил')
//      } else if (car1 === 2) {
//          alert('85 лошадиных сил')
//      } else if (car1 === 3) {
//          alert('122 лошадиных сил')
//      } else if (car1 === 4) {
//          alert('200 лошадиных сил')
//      } else if (car1 === 5) {
//          alert('105 лошадиных сил')
//      } else {
//          alert('Что ты Вел')
//      }
//      let buy_car = confirm('Хотите купить машинну')
//      if (buy_car === true) {
//          alert(`Поздравляем c покупкой машины под номером-${car1}`)
//      } else if (buy_car === false) {
//          alert('Приходите еще')
//      } else {
//          alert('Что ты Вел')
//      }

//  } else {
//      alert('Приходите еще')
//  }

// let random = Math.floor(Math.random() * 3) + 1

// let use_num = prompt('Введите имя')
// let ser_num = prompt('Введите фмилию')
// let data = +prompt('Введите дату рождения')

// if (random === 1) {
//     alert(`${use_num}${ser_num}${data}gmail.com`)
// } else if (random === 2) {
//     alert(`${use_num}${data}${ser_num}gmail.com`)
// } else if (random === 3) {
//     alert(` ${data}${use_num}${ser_num}gmail.com`)
// } else {
//     alert('нет')
// }

// !== не равно, || = или или, && = и то и то, else if = ? ;//

// Кондитерская //

//  let cond = +prompt("Время работы")

//  if(cond >= 8 && cond < 13){
//      alert('1 смена')
//  }else if(cond >= 13 && cond < 15){
//      alert('Обед')
//  }else if(cond >= 15 && cond < 23){
//      alert('2 смена')
//  }else if(cond <= 24 || cond <= 7){
//      alert('Отдых')
//  }else {
//      alert('Че ты написал')
//  }

// // Циферблат //

// let chas = +prompt('Ведите час')
// let chas1 = chas+1
//  let minut = +prompt('Ведите минуты')

// if((chas >= 0 && chas <=23) && (minut >=0 && minut <=5)){
//     alert(`Пять минут-${chas1} Точное время ровно-${chas}:0${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=5 && minut <=9)){
//     alert(`Десять минут-${chas1} Точное время ровно-${chas}:0${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=10 && minut <=15)){
//     alert(`Пятнадцать минут-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=15 && minut <=20)){
//     alert(`Дватцать минут-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=20 && minut <=25)){
//     alert(`Дватцать-пять минут-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=25 && minut <=30)){
//     alert(`Пол-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=30 && minut <=35)){
//     alert(`Без-двадцатипяти-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=35 && minut <=40)){
//     alert(`Без-двадцати-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=40 && minut <=45)){
//     alert(`Без-Пятнадцати-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=45 && minut <=50)){
//     alert(`Без-Десяти-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas >= 0 && chas <=23) && (minut >=50 && minut <=59)){
//     alert(`Без-Пяти-${chas1} Точное время ровно-${chas}:${minut}`)

// }else if((chas == 0 ) && (minut == 0)){
//     alert(`Полноч`)

// }else{
//     alert('Что ты ввел')
// }

// // Задание 0 //

// let hell = "HELLOWORLD"
// let h = "HELLO"
// h = h.slice(0, 1).toUpperCase() + h.slice(1).toLowerCase()
// let w = "WORLD"
// w = w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase()
// hell = `${h} ${w}`
// console.log(hell)

// // Задание 1 //

// // 1 окно //
// let a = 24
//     b = 49
// let windmax = Math.max(a, b)
// let windmin = Math.min(a, b)

// // 2 окно //
// let a1 = 15
//     b1 = 82
// let windmax1 = Math.max(a1, b1)
// let windmin1 = Math.min(a1, b1)
// let max = Math.max(windmax, windmax1)
// console.log(max)

// // Задание 2 //

// let maximus = Math.max(windmax, windmax1)
// let minimus = Math.min( windmin,  windmin1)
// let difirent = maximus - minimus
// console.log(difirent)

// // Задание 3-5 //

// let numb = prompt(Math.floor(Math.random() * 10) + ".com");
// let result = numb + ".com";

// alert(result);

// // Задание 4 //
// let str = "O.34"
// let num = parseFloat("O.34")
// if(typeof num === "number"){
// console.log("well")
// }else{
//     console.log("bad")
// }

// Задача 1 //

// let numb = +prompt("Четное Нечотое")
// if (numb % 2 == 0) {
//     alert("Четное")
// } else {
//     alert("Нечотное")
// }

// // Задача 2 //
// let car = prompt(`Ведите название машины 1.Gentra 2.Spark 3.Laseti 4.Malibu 5.Cobalt`)

// if (car == "Gentra") {
//     alert('110 лошадиных сил')
// } else if (car == "Spark") {
//     alert('85 лошадиных сил')
// } else if (car == "Laseti") {
//     alert('122 лошадиных сил')
// } else if (car == "Malibu") {
//     alert('200 лошадиных сил')
// } else if (car == "Cobalt") {
//     alert('105 лошадиных сил')
// } else {
//     alert('Что ты Вел')
// }

// // Задача 3 //
// let a = +prompt("Ведите первое число")
// let plus = +prompt("Ведите знак +")
// let b = +prompt("Ведите второе число")

// if (a + b) {
//     alert(a + b)
// } else {
//     alert("Ошибка")
// }

// let a1 = +prompt("Ведите первое число")
// let plus1 = +prompt("Ведите знак -")
// let b1 = +prompt("Ведите второе число")

// if (a1 - b1) {
//     alert(a1 - b1)
// } else {
//     alert("Ошибка")
// }

// let a2 = +prompt("Ведите первое число")
// let plus2 = +prompt("Ведите знак *")
// let b2 = +prompt("Ведите второе число")

// if (a2 * b2) {
//     alert(a2 * b2)
// } else {
//     alert("Ошибка")
// }

// let a3 = +prompt("Ведите первое число")
// let plus3 = +prompt("Ведите знак /")
// let b3 = +prompt("Ведите второе число")

// if (a3 / b3) {
//     alert(a3 / b3)
// } else {
//     alert("Ошибка")
// }

// // задача 4 //

// let name = prompt("Ведите имя")
// name = name.slice(0, 1)

// if (name == "Р") {
//     alert("Красавчик")
// } else if (name == "О") {
//     alert("Соболезную")
// } else {
//     alert("Молодец")
// }

// // 1 Задача //
// let my_country = "Uzbekistan"
// console.log(my_country)

// // 2 Задача //
// let is_student;
// is_student = true
// console.log(is_student)

// is_student = false
// console.log(is_student)

// // 3 Задача //
// let x = "7"
// let y = "12"
// let z = x*y
// console.log(z)

// // Задача 4 //
// let Name = "Azim"
// let Surname = "Turdiyev"
// let Job = "Student"

// let message = `Меня зовут ${Name} ${Surname} и я ${Job}`;

// console.log(message);

// // Задача 6 //
// let string = "Строка"
// let number = 13
// let logics = true
// let Null = null
// let Undefined;

// console.log(typeof string);
// console.log(typeof number);
// console.log(typeof  logics);
// console.log(typeof Null);
// console.log(typeof Undefined);

// // Баланс //
// let Balance =25000
// // Траты //
// let car =4480
// let food =890
// // Доход //
// let invoice =5500
// let stock =4200
// // Итог //
// let total_balance = Balance - (car + food) + (invoice + stock)

// console.log(total_balance);

// // Random //
// let casino = Math.floor(Math.random() * 8999) + 1000;
// console.log(casino)

// let random = Math.random().toString();
// random = random.slice(0, 1) + random.slice(2);
// console.log(random);

// let str = "ccc@bbb@aaa@";
// str = str.split("@").join("!");
// console.log(str);

// let hell = "hELLOwORLD";
// let h = hell.slice(0, 1).toUpperCase() + hell.slice(1, 5).toLowerCase();
// let w = hell.slice(5, 6).toUpperCase() + hell.slice(6).toLowerCase();
// hell = `${h} ${w}`;
// console.log(hell);

// let name = prompt('Введите имя')
// let secName = prompt('Введите фамилию')
// let date = prompt('Введите дату рождение в формате 01.01.2000')

// let massege = `Привет ${name} ${secName} ${date } года рождение`
// alert(massege);

// let time = +prompt('Введите время')
// if ( time >= 9 && time <= 18) {
//     alert('Работает')
// } else {
//     alert('пошол')
// }

// let years = +prompt('Введите год')

// if(years % 4 <= 0 && years % 4 >= 0){
//     alert('Високосныый')
// }else {
//     alert('Не високосныый')
// }

// let name = "alex";
// let money = 10000;
// let account = 7777;

// let user_name = prompt("Введите имя");
// user_name = user_name.toLowerCase();
// if (user_name == name) {
//   alert("Проходите");
//   let password = +prompt("Введите номер счета");
//   if (password == account) {
//     alert("Проходите");
//     let kamisiya = +prompt(
//       `Сколько хотите обналичить баланс счета составляет ${money}`
//     );
//     if (kamisiya >= money) {
//       alert("Не достаточно средств");
//     } else if (
//       money - kamisiya >= money * 0.5 &&
//       money - kamisiya <= money * 1
//     ) {
//       alert(
//         `Оставшаяся сумма вместе с 5% комиссией составляет ${
//           money - kamisiya - kamisiya * 0.05
//         }`
//       );
//     } else if (
//       money - kamisiya >= money * 0.3 &&
//       money - kamisiya <= money * 0.5
//     ) {
//       alert(
//         `Оставшаяся сумма вместе с 3% комиссией составляет ${
//           money - kamisiya - kamisiya * 0.03
//         }`
//       );
//     } else if (money - kamisiya <= money * 0.3) {
//       alert(
//         `Оставшаяся сумма вместе с 0% комиссией составляет ${
//           money - kamisiya - kamisiya * 0.0
//         }`
//       );
//     }
//   } else if (password !== account) {
//     alert("Не коректно");
//   }
// } else {
//   alert("Не коректно");
// }

// let century = +prompt("Узнать какой век");
// if (century / 100 >= 0) {
//   alert(`Это ${Math.ceil(century / 100)} век`);
// } else {
//   alert("не коректно");
// }
// let month = +prompt("Введите месяц");
// switch (month) {
//   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//     alert("В этом месяце 31 день");
//     break;
//   case 4: case 6: case 9: case 11:
//     alert("В этом месяце 30 деней");
//     break;
//     case 2:
//     alert("В этом месяце 28 или 29 деней");
//     break;
//   default:
//     alert('Нет такого месяца')
//     break;
// }

// let numA = +prompt('Введите число')
// let sin = prompt('Введите знак +,-,/,*,%.')
// let numB = +prompt('Введите число')

// switch (sin) {
//  case '+':
//      alert(numA + numB)
//      break;
//  case '-':
//      alert(numA - numB)
//      break;
//  case '/':
//      alert(numA / numB)
//      break;
//  case '*':
//      alert(numA * numB)
//      break;
//  case '%':
//      alert((numA / 100) * numB)
//      break;
//  default:
//         alert('Некорректно')
//      break;
// }

// let hour = +prompt("Введите текущее время (часы):");

// switch (true) {
//   case (hour >= 0 && hour < 6):
//     alert("Доброй ночи");
//     break;
//   case (hour >= 6 && hour < 12):
//     alert("Доброе утро");
//     break;
//   case (hour >= 12 && hour < 18):
//     alert("Добрый день");
//     break;
//   case (hour >= 18 && hour < 24):
//     alert("Добрый вечер");
//     break;
//   default:
//     alert("Некорректное");
//     break;
// }

// let name = prompt("Ведите имя");
// name = name[0].toLowerCase().trim();

// if (name == "a") {
//   alert("Да");
// } else {
//   alert("Нет");
// }

// let decada = +prompt("какое число");
// if (decada >= 1 && decada <= 10) {
//   alert("1 Декада");
// } else if (decada >= 11 && decada <= 20) {
//   alert("2 Декада");
// } else if (decada >= 21 && decada < 32) {
//   alert("3 Декада");
// } else {
//   alert("нет");
// }

// let month = +prompt("Введите месяц");
// if ((month <= 2 && month > 0) || month == 12) {
//   alert("Зима");
// } else if (month >= 3 && month <= 5) {
//   alert("Весна");
// } else if (month >= 6 && month <= 8) {
//   alert("Лето");
// } else if (month >= 9 && month <= 11) {
//   alert("Осень");
// } else {
//   alert("Нет такого месяца");
// }

// const guestList = "Mirziyoyev Putin Zelenskiy Likashenko Kimchenin Biden"
// let security = prompt('Скажите имя')

// if ( guestList.includes(security)) {
//   alert('Добро прожаловать')
// }else {
//   alert('Пошол отсюда')
// }
// let random = Math.floor(Math.random()*10) + 1
// let user = prompt("Введите имя").trim();
// if (user[0].toLowerCase() == "a") {
//   let age = +prompt("Сколько лет");
//   if (age >= 20 && age <= 40) {
//     let mony = +prompt("Сколько у вас денег");
//     if (mony >= 100) {
//       let guessts = +prompt(`Сколько людей хотят зайти сейчас в клубе ${random} гостей свободных мест осталовь ${10 - random}`)
//       if(guessts + random <= 10){
//         alert('Проходите')
//       }else {
//         alert("Гуляй");
//       }
//     } else {
//       alert("Гуляй");
//     }
//   } else {
//     alert("Гуляй");
//   }
// } else {
//   alert("Гуляй");
// }

// let splittedTEXT = [
//   "nigga two",
//   "nigga four Рәхим итегез,",
//   "добро пожаловать",
//   ["Nigga one,", [".Это город"]],
//   "в мой дом",
//   [1, [2, 3], "рэперов, всюду пыль", "nigga three,"],
//   "да бетон",
// ];

// let track =
//   splittedTEXT[3][0] +
//   splittedTEXT[0] +
//   splittedTEXT[5][3] +
//   splittedTEXT[1] +
//   splittedTEXT[2] +
//   splittedTEXT[4] +
//   splittedTEXT[3][1][0] +
//   splittedTEXT[5][2] +
//   splittedTEXT[6];

// console.log(track);

// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0;

// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
// }

// console.log(total);

// let students = ["Farxod", "Azim", "Davlat", "Jasur", "Daler", "Doni"];

// let even = [];
// let odd = [];
// let gl = "AOUEIY";

// students.forEach((std) => {
//   if (gl.includes(std[0])) {
//     even.push(std);
//   } else {
//     odd.push(std);
//   }
// });

// console.log(even);
// console.log(odd);

// let students = ["Farxod", "Azim", "Davlat", "Jasur", "Daler", "doni"];
// let longestName = students.sort((a, b) => b.length - a.length)[0];

// console.log(longestName);

// let numbers = [1, 16, 4, 31, 11, 8, 28, 2, 3, 6, 4, 7, 5];
// let largestNumber = numbers.sort((a, b) => b - a)[0];

// console.log(largestNumber);

// let arr = ['hello', 1, 0, false, true,'',null,99,[],{},NaN]
// let arr2 = []

// arr.filter((alem) => {
// if(alem){
//     arr2.push(alem)
// }
// })
// console.log(arr2);

// const users = [
//   {
//     name: "Davlat",
//     age: 17,
//     isMarried: true,
//     wifes: ["malika", "kamila", "samir", "miron"],
//   },
//   {
//     name: "Samir",
//     age: 13,
//     isMarried: false,
//     wifes: [],
//   },
//   {
//     name: "Jasur",
//     age: 17,
//     isMarried: false,
//     wifes: [],
//   },
//   {
//     name: "Islom",
//     age: 16,
//     isMarried: true,
//     wifes: ["Davlat"],
//   },
// ];

// let max = 0;
// let min = users[0].age;
// let ever = 0;

// users.forEach((user) => {
//   if (user.age > max) {
//     max = user.age;
//   }
//   if (user.age < min) {
//     min = user.age;
//   }
//   ever += user.age;
// });
// console.log(max);
// console.log(min);
// console.log((ever /= users.length));

// const cars = [
//   {
//     model: "malibu",
//     mark: "gm",
//     price: 22000,
//     year: 2018,
//     mileage: 64000,
//     horsePower: 212,
//   },
//   {
//     model: "cobalt",
//     mark: "gm",
//     price: 11000,
//     year: 2023,
//     mileage: 4000,
//     horsePower: 190,
//   },
//   {
//     model: "cls-63",
//     mark: "mercedes-benz",
//     price: 64000,
//     year: 2010,
//     mileage: 120000,
//     horsePower: 450,
//   },
//   {
//     model: "competition",
//     mark: "BMW",
//     price: 120000,
//     year: 2020,
//     mileage: 20000,
//     horsePower: 520,
//   },
//   {
//     model: "k5",
//     mark: "kia",
//     price: 32000,
//     year: 2024,
//     mileage: 1000,
//     horsePower: 240,
//   },
// ];
// let faster = cars[0];
// let mil = cars[0];
// let young = cars[0];
// cars.forEach((care) => {
//   if (care.horsePower > faster.horsePower) {
//     faster = care;
//   }
//   if (care.mileage > mil.mileage) {
//     mil = care;
//   }
//   if (care.year > young.year) {
//     young = care;
//   }
// });

// console.log(faster, mil, young);

// let tree = +prompt("Введите число:");
// let stars = '';
// let spaces = '';

// for (let i = 0; i < tree; i++) {
//   spaces = '';
//   for (let j = 0; j < tree - i - 1; j++) {
//     spaces += ' ';
//   }
//   stars += '*';
//   console.log(spaces + stars + stars.slice(1));
// }

// let fibonachi = +prompt('Введите число')
// let a = 0
// let b = 1
// let c;
// for (let i = 0; i < fibonachi; i++) {
//   c = a + b
//   a = b
//   b = c
// }
// console.log(b);

// // задание показать только те машины тем кому не больше двух лет
// let cars = [
//   {
//     model: "cobalt",
//     company: "general motors",
//     engine: 1.5,
//     price: 15000,
//     beatan: true,
//     year: 2022,
//     mileage: 13000,
//     tech_passport: {
//       date: 2022,
//       exp_date: 2032,
//     },
//   },
//   {
//     model: "malibu",
//     company: "general motors",
//     color: "dry asphalt",
//     engine: 2.4,
//     price: 30000,
//     beaten: false,
//     year: 2022,
//     mileage: 1000,
//     tech_passport: {
//       date: 2022,
//       exp_date: 2032,
//     },
//   },
//   {
//     model: "tracker",
//     company: "general motors",
//     color: "black",
//     engine: "2.2",
//     price: 22000,
//     beaten: false,
//     year: 2021,
//     mileage: 2000,
//     tech_passport: {
//       date: 2021,
//       exp_date: 3031,
//     },
//   },
//   {
//     model: "gentra",
//     company: "general motors",
//     color: "black",
//     engine: 1.5,
//     price: 17000,
//     beaten: false,
//     year: 2021,
//     mileage: 6000,
//     tech_passport: {
//       date: 2021,
//       exp_date: 2031,
//     },
//   },
//   {
//     model: "Damas",
//     company: "Chevrolet",
//     color: "White",
//     engine: 2.4,
//     price: 10000,
//     beaten: false,
//     year: 2023,
//     mileage: 100,
//     tech_pasport: {
//       date: 2023,
//       exp_date: 2033,
//     },
//   },
//   {
//     model: "Spark",
//     company: "general motors",
//     color: "dirtygreen",
//     engine: 1.25,
//     price: 7000,
//     beaten: true,
//     year: 2008,
//     mileage: 328000,
//     tech_passport: {
//       date: 2008,
//       exp_date: 2023,
//     },
//   },
//   {
//     model: "Labo",
//     company: "GM ",
//     color: "white",
//     engine: 0.8,
//     price: 10000,
//     beaten: false,
//     year: 2023,
//     mileage: 0,
//     tech_passport: {
//       date: 2023,
//       exp_date: 2033,
//     },
//   },
//   {
//     model: "tico",
//     company: "daewoo",
//     color: "black",
//     engine: 1.5,
//     price: 10000,
//     beaten: true,
//     year: 2010,
//     mileage: 1000,
//     tech_passport: {
//       date: 2022,
//       exp_date: 2025,
//     },
//   },
//   {
//     model: "traverse",
//     company: "chevrolet",
//     color: "black",
//     engine: 3.6,
//     price: 60000,
//     beaten: false,
//     year: 2023,
//     mileage: 500,
//     tech_passport: {
//       date: 2023,
//       exp_date: 2033,
//     },
//   },
//   {
//     model: "volga",
//     company: "uaz",
//     color: "white",
//     engine: 0.4,
//     price: 700000,
//     beaten: true,
//     year: 1964,
//     mileage: 3000000,
//     tech_passport: {
//       date: 1964,
//       exp_date: 2023,
//     },
//   },
//   {
//     model: "velik",
//     company: "Philips",
//     color: "red",
//     engine: "v12",
//     price: 12000,
//     beaten: false,
//     year: 2009,
//     mileage: 0,
//     tech_passport: {
//       date: 2022,
//       exp_date: 2032,
//     },
//   },
//   {
//     model: "Porter",
//     company: "Hyundai",
//     color: "black",
//     engine: 2.5,
//     hp: 145,
//     price: 31000,
//     beaten: false,
//     fuel_comsumption: 10.2,
//     year: 2023,
//     mileage: 100,
//     tech_passport: {
//       date: 2023,
//       exp_date: 2033,
//     },
//   },
//   {
//     model: "Tahoe",
//     company: "CHEVROLET",
//     color: "black",
//     engine: {
//       capacity: "5.3",
//       horsePower: "343hp",
//     },
//     price: 110000,
//     beaten: false,
//     year: 2022,
//     mileage: 0,
//     tech_passport: {
//       date: 2022,
//       expDate: 2032,
//     },
//   },
//   {
//     model: "Mercedes-Benz CLS",
//     company: "Mercedes-Benz",
//     color: "black",
//     engine: 3.0,
//     price: 110000,
//     beaten: false,
//     year: 2023,
//     mileage: 200,
//     tech_passport: {
//       date: 2023,
//       exp_date: 2033,
//     },
//   },
//   {
//     model: "malibu",
//     company: "Chevrolet",
//     color: "sky rim",
//     engine: 2.4,
//     price: 15000,
//     year: 2022,
//     clash: false,
//     mileage: 1500,
//     tech_passport: {
//       date: 2022,
//       exp_date: 2054,
//     },
//   },
//   {
//     model: "matiz",
//     company: "general motors",
//     color: "yellow",
//     engine: 0.8,
//     price: 4000,
//     beaten: false,
//     year: 2018,
//     mileage: 5000,
//     tech_passport: {
//       date: 2018,
//       exp_date: 2028,
//     },
//   },
//   {
//     model: "porter",
//     company: "hyundai",
//     color: "black",
//     engine: 2.5,
//     hp: 145,
//     price: 31000,
//     beaten: false,
//     fuel_comsumption: 10.2,
//     year: 2023,
//     mileage: 100,
//     tech_passport: {
//       date: 2023,
//       exp_date: 2033,
//     },
//   },
//   {
//     model: "bmw_x7",
//     year: 2023,
//     price: 85000,
//     engine: 6.5,
//     Drivetrain: "All Wheel Drive",
//     Transmission_Order_Code: "2TB",
//     engine: "3000cc",
//     power: "375Bhp",
//     Seating_Capacity: 6,
//     Mileage: "11.29 - 14 kmpl",
//     Fuel: "diesel",
//     horsepower: 1000,
//     beaten: false,
//     color: "black",
//   },
// ];

// let currYear = 2024;

// let newcars = [];
// let companyas = [
//   {
//     chevrolet: [],
//   },
//   {
//     generalmotors: [],
//   },
//   {
//     hyundai: [],
//   },
// ];

// for (let i = 0; i < cars.length; i++) {
//   if (cars[i].company === "Сhevrolet") {
//     companyas[0].chevrolet.push(cars[i]);
//   } else if (cars[i].company === "general motors") {
//     companyas[1].generalmotors.push(cars[i]);
//   } else if (cars[i].company === "hyundai") {
//     companyas[2].hyundai.push(cars[i]);
//   }
// }

// console.log(companyas);
// // for (let i = 0; i < cars.length; i++) {
// //  if (cars[i].year > 2022) {
// //   newcars.push(cars[i])
// //  }
// // }
// // console.log(newcars);

let ask;
let pop = 4;
do {
  ask = +prompt(`Введите пароль у тебя есть ${pop} попытки`);
  pop--;
} while (ask != 1111 && pop > 0);

let users = [
  {
    id: 1,
    name: "Samir",
    tax: 12,
    budget: 400,
    expenses: [100, 120, 170],
  },
  {
    id: 2,
    name: "Safina",
    tax: 9,
    budget: 1700,
    expenses: [300, 200, 600],
  },
  {
    id: 3,
    name: "Leyla",
    tax: 9,
    budget: 1500,
    expenses: [180, 240, 500],
  },
  {
    id: 4,
    name: "Azim",
    tax: 12,
    budget: 180,
    expenses: [40, 30, 10],
  },
];

let successfull = [];
let unsuccessfull = [];
let rich = 0;
let poor = users[0].budget
for (let user of users) {
  let totalEx = 0;
  let TaxSum = (user.tax / 100) * user.budget;
  totalEx += TaxSum;

  for (let expense of user.expenses) {
    totalEx += expense;
  }

  if (totalEx > user.budget) {
    unsuccessfull.push(user);
  } else {
    successfull.push(user);
  }

  
  if (user.budget - totalEx > rich) {
    rich = user;
  }
  if (user.budget - totalEx < poor) {
    poor = user;
  }
  console.log(totalEx);
  
}
console.log(rich, poor);