//////////////////////JAVASCRIPT NÂNG CAO///////////////////////

//scope :là phạm vi truy cập cảu biến
//phạm vi toàn cục là khai báo bên ngoài thì ở đâu cũng sử dụng được
//phạm vi cục bộ : là một biến được khai náo trong hàm thì biến này là biến cục bộ và chỉ sử dụng đuocwj ở trong hàm đó
//toàn cục
// const a = 10;
// function test() {
//   let a = 10;
//   console.log(a);
// }

//cục bộ
// function test() {
//   let a = 10;
//   console.log(a);
// }
// test();
// console.log(a); ///dòng này dùng bên ngoài hàm ko sử dụng được

//2.1 Biến trong hoisting
///Hoisting nghĩa là có thể sử dụng 1 biến xong sau đó mới cần khai báo biến đố
//JS sẽ di chuyển toàn bộ các khai báo biến lên đầu chương trình
// Vì vậy ,những dòng code có sử dụng biến mà chưa khai báo sẽ ko bị lỗi
//nếu sử dụng let và const chưa gắn giá trị sẽ bị báo lỗi:ko có tính hoisting

// var a;
// console.log(a);

// var a = "helo";
// console.log(a);

///2.3//Hàm trong hoisting
//Declaration Funcition có tính hoisting
// test();
// function test() {
//   console.log("ok");
// }

//Expression Funcition ko có tính hoisting
// test1();
// var test1 = function () {
//   console.log("ok");
// };
//
//Arrow funcition ko có tính hoisting
// test1();
// var test1 = () => {
//   console.log("ok");
// };
///3 Từ khóa this
//Từ khóa this sẽ trỏ về đối tượng mà nó đang thuộc về
///nếu this ở ngoài cùng chương trình sẽ trả về đôi tượng window
// console.log(this);

///3.2
// const button = document.querySelector("#button");

// console.log(button);
// button.addEventListener("click", function () {
//   console.log(this);///trỏ về button
// });

///3.3 this trong obj
// var inforUser = {
//   fullname: "luu duc tho",
//   email: "ldtho1604@gmail.com",
//   phone: "02312387123",
//   getPhone: function () {
//     console.log(this.phone);
//   },

//   cccd: {
//     phone: "023423423",
//     getPhone: function () {
//       console.log(this.phone);
//     },
//   },
// };
// inforUser.getPhone();
// inforUser.cccd.getPhone();

// 3.4 This trong arrow funcition  ko dùng được ko tồn tại

///4 modules trong js
//là một files bình thường ,đặt tên có ý nghĩa
//giúp code nhanh và tái sử dụng dùng từ khóa export
// ví dụ
// export const sum = (a, b) => {
//     return a + b;
//   };
//   const result = sum(20, 30);
//   console.log(result);

///4.3 Đôỉ tên module  ko quam trọng lắm
///4.4 Default export module
// Dùng để export mặc định
// Mỗi file chỉ có 1 hàm (hoặc 1 biến ) được export defaul

///5 JON là một dạng dữ liệu dưới dạng chuỗi
///cho phép các kiểu dữ liệu cơ bản :number,string,array
//không cho phép :funcition, date,undefine
//trong trường hợp giá trị của JSON là dạng OBJ:
/// có các cặp Key=value
// Key đặt trong dấu ngoặc kép
// không có dấu phẩy ở cặp key/value cuối cùng

//5 VÍ Dụ obj có giá trị object
// var obj = {
//   fullName: "luu duc tho",
//   email: "ldtho1604@gmail.com",
//   phone: "0832842374",
// };

// ///obj thông thường
// var objJson = `{
//     "fullName": "luu duc tho",
//     "email": "ldtho1604@gmail.com",
//     "phone": "0832842374"
// }`;

// //obj kiểu dạng JSON

// //chuyển từ JSON sang JS
// const objectJS = JSON.parse(objJson);
// console.log(objectJS);
// //chuyển từ JSsang JSON
// const objectJSON = JSON.stringify(obj);
// console.log(objectJSON);
//Ví dụ 2: JSON có giá trị là number

// var numberJSON = `10`;
// console.log(numberJSON);

// var numberJS = JSON.parse(numberJSON);
// console.log(numberJS);
// //chUYỂN TỪ JSon VỀ js
// var numberJSON2 = JSON.stringify(numberJS);
// console.log(numberJSON2);
// // //chuyển từ JS sang JSON

//Ví dụ 3: JSON có giá trị là string
// var stringJson = `"abc"`;

// var stringJS = JSON.parse(stringJson);
// console.log(stringJS);
// //chUYỂN TỪ JSon VỀ js
// var stringJSON2 = JSON.stringify(stringJS);
// console.log(stringJSON2);
//chUYỂN TỪ JS VỀ json

//Ví dụ 4: JSON có giá trị là boolean
// var booleanJson = `true`;

// var booleanJS = JSON.parse(booleanJson);
// console.log(booleanJS);
// //chUYỂN TỪ JSon VỀ js
// var booleanJSON2 = JSON.stringify(booleanJS);
// console.log(booleanJSON2);
// // chUYỂN TỪ JS VỀ json

//Ví dụ 2: JSON có giá trị là array
// var arrayJSON = `[
//     {
//         "fullName":"luu duc tho",
//         "email":"ldtho1604@gmail.com"
//     },
//     {
//         "fullName":"luu duc tho1",
//         "email":"ldtho1604@gmail.com"
//     }
// ]`;

// var arrayJS = JSON.parse(arrayJSON);
// console.log(arrayJS);
// var arrayJSON = JSON.stringify(arrayJS);
// console.log(arrayJSON);

//Ví dụ 2: JSON có giá trị là null
// var nullJson = `null`;

// var nullJS = JSON.parse(nullJson);
// console.log(nullJS);
// //chUYỂN TỪ JSon VỀ js
// var nullJSON2 = JSON.stringify(nullJS);
// console.log(nullJSON2);
// // chUYỂN TỪ JS VỀ json
