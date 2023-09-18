/*
 Hàm (function) trong JavaScript
 
 1. Hàm?
    - Một khối mã
    - Làm 1 việc cụ thể

2. Loại hàm
    - Built-in
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi định nghĩa
    - Chỉ thực thi khi được gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị

4. Cách viết hàm
    - Tên hàm chứa chữ cái a-z, A-Z, 0-9, _, $
    - Không được đặt số ở ký tự đầu tiên
 */

// function showDialog() {
//     alert('Hi Welcome To JS!');
// }

// showDialog();

//-----------------------------------------------------------------------------------
/* 
1. Tham số?
    - Định nghĩa: Là 1 giá trị truyền vào khi gọi tới 1 function. Dùng để xử lý dữ liệu trong function
    - Kiểu dữ liệu: Không giới hạn kiểu dữ liệu
    - Tính private: Chỉ thực hiện trong function
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - Nhiều tham số

3. Arguments?
    - Đối tượng arguments
    - Giới thiệu vòng for of
*/

// //Tham số message 
// function writeLog(message, message2) { 
//     console.log(message)
//     console.log(message2)
// }

// // 'Day la message' khi gọi ra là đối số;
// writeLog('JS', 'HTML');

// //arguments
// function writeLog() { 
//     console.log(arguments);
// }
// writeLog('JS', 'HTML', 'CSS');

// //Vòng for of
// function writeLog() { 
//     var myString = '';
//     //khi chạy sẽ chạy qua cái arguments (argu là 1 array), 
//     //và gán cho biến param, sau đó sẽ chạy dòng code trong for
//     //vòng for sẽ chạy theo số lần giá trị tương ứng
//     for (var param of arguments) {
//         // dùng (`` này là templates string) để nối param với dấu '-'
//        myString += `${param} - `
//     }
//     console.log(myString)
// }

// writeLog('JS', 'HTML', 'CSS');

//-----------------------------------------------------------------------------------
/*
    Các loại function

    1. Declaration function: Có thể gọi thực thi trước khi định nghĩa

        showMessage();

        function showMessage() {
            console.log('Declaration function')
        }

    2. Expression function

        var showMessage2 = function() {
            console.log('Expression function')

        }

        setTimeout(function() {

        });

        var myObject = {
            myFynction: function() {

            }
        }
*/

/*
        Template String:

        var firstName = 'Do';
        var lastName = 'Phu';

        console.log('Toi la:' + firstName + ' ' + lastName);

        => console.log(`Toi la: ${firstName} ${lastName}`);
*/

//-----------------------------------------------------------------------------------
// LÀM VIỆC VỚI CHUỖI

// var myString = 'Hoc JS tai F8!';

// keyword: JavaScript string methods

// 1. Length
// console.log(myString.length)


// 2. Find index
// indexOf: Trả về vị trí đầu tiên trong chuỗi
// console.log(myString.indexOf('JS', 6))

// lastIndexOf: Tìm vị trí cuối trong chuỗi
// console.log(myString.lastIndexOf('JS'))

// search: chỉ tìm kiếm theo biếu thức chính quy
// console.log(myString.search('JS'))

// 3. Cut string
// slice(4,6): cắt tại vị trí bắt đầu, kết thúc từ trái sang phải
// console.log(myString.slice(4, 6))

// slice(-3,-1): cắt tại vị trí bắt đầu, kết thúc từ phải sang trái
// console.log(myString.slice(-3, -1))

// 4. Replace string
// replace: ghi đè
// console.log(myString.replace('JS', 'JavaScript'))

// /JS/g: dùng biểu thức chính quy để ghi đè các chuỗi JS
// console.log(myString.replace(/JS/g, 'JavaScript'))

// 5. Convert to upper case
// console.log(myString.toUpperCase())

// 6. Convert to lower case
// console.log(myString.toLowerCase())

// 7. Trim
// Loại bỏ ký tự, khoảng trắng thừa
// console.log(myString.trim())

// 8. Split
// Cắt 1 chuỗi thành 1 Array (tìm điểm chung để cắt, như vd là ', ')
// var languages = 'JavaScript, PHP, Ruby';

// console.log(myString.split(', '))

// 9. Get a character by index
// Lấy 1 ký tự bởi 1 index cho trước
// const myString2 = 'Phu Do'

// console.log(myString2.charAt(0))
// console.log(myString2.[0])

//-----------------------------------------------------------------------------------
/*
    Kiểu số (Number) trong JavaScript

    1. Tạo giá trị Number
        - Các cách tạo
        - Dùng cách nào? Tại sao?
        - Kiểm tra data type

    2. Làm việc với Number
        - To string
        - To Fixded
*/

// var age = 18
// var PI = 3.14

// console.log(age.toString())

// Làm tròn số thập phân
// console.log(PI.toFixed())

//-----------------------------------------------------------------------------------
/* 
    Mảng trong JS - Array

    1. Tạo mảng
        - Cách tạo
        - Sử dụng cách nào, tại sao
        - Kiểm tra data type dùng typeof
    2. Truy xuất mảng
        - Độ dài mảng
        - Lấy phần tử theo index
*/
// 1
// var languages = [
//     'JavaScript',
//     'PHP',
//     'Ruby',
//     null,
//     undefined,
//     function() {

//     },
//     {},
//     123
// ];

// console.log(typeof languages);

// Cách kiểm tra kiểu dữ liệu phân biệt giữa Object và Array
// console.log(Array.isArray([])); //true là array

// 2
// Truy xuất
// console.log(languages.length);

// Lấy pt
// console.log(languages[0]);

//-----------------------------------------------------------------------------------
/*
    Làm việc với Array

    // keyword: JavaScript array methods

    var languages = [
        'JavaScript',
        'PHP',
        'Ruby'
    ];

    var languages2 = [
        'Java',
        'HTML',
        'CSS'
    ];

    1. To String
    console.log(languages.toString());

    2. Join 
    // Thay đổi dấu ngăn cách
    console.log(languages.join(''));

    3. Pop
    // Xóa element cuối mảng và trả về phần tử đã xóa
    console.log(languages.pop());

    4. Shift
    // Xóa element đầu mảng và trả về phần tử đã xóa
    console.log(languages.shift());

    5. Push
    // Thêm 1 or nhiều phần tử vào cuối mảng, và trả về độ dài mới của mảng
    console.log(languages.push('Dart', 'Java'));

    6. Unshift
    // Thêm 1 or nhiều phần tử vào đầu mảng, và trả về độ dài mới của mảng
    console.log(languages.unshift('Dart', 'Java'));

    7. Splicing
    // Xóa phần tử mới vào mảng 
    (số đầu tiên là chọn vị trí bắt đầu)
    (số thứ hai là chọn xóa bao nhiêu pt)
    languages.splice(1, 2);

    // Chèn phần tử mới vào mảng
    (hàm sẽ chọn vị trí đầu tiên, sau đó k xóa pt nào, và thêm pt Dart)
    languages.splice(1, 0, 'Dart');

    // Thay phần tử mới vào mảng
    (hàm sẽ chọn vị trí đầu tiên, sau đó xóa pt thứ nhất, và thay thành Dart)
    languages.splice(1, 1, 'Dart');

    8. Concat
    // Nối hai array lại
    console.log(languages.concat(languages2));

    9. Slicing
    // Cắt 1 hoặc nhiều elements chiều xuôi, ngược
    (tham số thu nhất sẽ lấy vị trí đầu để cắt)
    (tham số thứ hai là vị trí ngừng khi cắt)
    (nếu muốn cắt hết thì bỏ tham số thứ 2)
    console.log(languages.slice(1, 2));

*/

//-----------------------------------------------------------------------------------
// Object

// var emailKey = 'email';

// var myInfo = {
//     name: 'Phu Do', //name là thuộc tính
//     age: 21,
//     address: 'Ho Chi Minh,VN',
//     [emailKey]: 'phudt@gmail.com', // value key mới bằng biến
//     getName: function() { // Thêm value bằng 1 function
//         return this.name; //this.name = myInfo.name
//     }
// };

// // Lấy tất cả value
// console.log(myInfo);

// // Lấy value add và mykey
// var myKey = 'address';

// console.log(myInfo[myKey]);

// // Thêm value mới thông thường
// myInfo.email = 'phudt@gmail.com';

// // Cách đặt key có dấu gạch
// myInfo.['my-email'] = 'phudt@gmail.com';

// // Lấy value name c1:
// console.log(myInfo.name);

// // Lấy value name c2:
// console.log(myInfo['name']);

// // Xóa key age trong Obj
// delete myInfo.age;

/* Cách gọi key đúng: 
    - Function --> Phương thức / methods
    - Others --> Thuộc tính / property
*/

//-----------------------------------------------------------------------------------
// Object constructor: Xây dựng đối tượng là tạo bảng thiết kế để tạo ra đối tượng đó
// Ví dụ: Khi xây nhà, ta cần tạo ra bảng thiết kế, từ bảng thiết kế đó ta sẽ xây cái ngôi nhà

// Tạo bảng thiết kế (có chung thuộc tính/ phương thức chung)
// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

//     this.getName = function() { // tạo phương thức getName
//         return `${this.firstName} ${this.lastName}` // trả về 2 thuộc tính
//     }
// }

// // Tạo đối tượng
// var author = new User('Phu', 'Do', 'anh.png');
// var user = new User('Phong', 'Do', 'anh2.png');

// // Thêm thuộc tính/ phương thức riêng lẻ cho từng đối tượng
// author.title = 'Day la Admin';
// user.comment = 'Cmt tu User';

// console.log(author);
// console.log(user);


//-----------------------------------------------------------------------------------
/* 
    Object propertype - Basic : Đối tượng nguyên mẫu, có thể add sau khi tọa hàm tạo

    1. Prototype là gì: Là thuộc tính Nguyên mẫu
    2. Sử dụng khi nào?
*/

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function() { // tạo phương thức getName
//         return `${this.firstName} ${this.lastName}` // trả về 2 thuộc tính
//     }
// }

// // Thêm 1 thuộc tính className = F8, để 2 user đều học trong F8
// // prototype sẽ thêm vào đối tượng được tạo ra
// // Tất cả thuộc tính/ phương thức đc thêm qua prototype và hàm tạo thì sẽ nằm trong proto 
// User.prototype.className = 'F8';
// User.prototype.getClassName = function () {
//     return this.className;
// };


// var user = new User('Phu', 'Do', 'anh.png');
// var user2 = new User('Phong', 'Do', 'anh2.png');

// console.log(user.className);
// console.log(user2.getClassName);

//-----------------------------------------------------------------------------------
// Đối tượng Date

// Tài liệu: JavaScript date object mozilla 

// var date = new Date();

// // +1 vì khi để bth nó sẽ tính từ 0-11 = 1-12
// var month = date.getMonth() + 1;
// var year = date.getFullYear();
// var day = date.getDate();

// console.log('${day}/${month}/${year}');

//-----------------------------------------------------------------------------------
/* 
    Math object

    - Math.PI
    console.log(Math.PI);    

    - Math.round(): Làm tròn số
    console.log(Math.round(1.6));    

    - Math.abs(): Gía trị tuyệt đối
    console.log(Math.abs(4));    

    - Math.ceil(): Làm tròn trên
    console.log(Math.ceil(4.5)); --> 5   

    - Math.floor(): Làm tròn dưới
    console.log(Math.floor(4.999)); --> 4

    - Math.random()
    console.log(Math.random());    

    - Math.min()
    console.log(Math.min(-100, 1, 5, 8, 999));    

    - Math.max()
    console.log(Math.max(-100, 1, 5, 8, 999));    
*/

// Tạo ra dãy số ngẫu nhiên trong khoảng 1 - 10
// console.log(Math.floor(Math.random() * 10));

// // random phần thưởng ngẫu nhiên trong 5
// var random = Math.floor(Math.random() * 5);

// var bonus = [
//     '10 coin',
//     '30 coin',
//     '50 coin',
//     '100 coin',
//     '200 coin',
// ];

// console.log(bonus[random]);

// // random ngẫu nhiên ở 5%
// var random = Math.floor(Math.random() * 100);

// if (random < 5) {
//     console.log('Cuong hoa thanh cong');
// }


//-----------------------------------------------------------------------------------
// Câu lệnh rẽ nhánh - If else thường dùng để so sánh đúng sai, toán tử > < =

// var date = 2;

// if (date === 2) {
//     console.log('Hom nay la thu 2');
// } else if (date === 3){
//     console.log('Hom nay la thu 3');
// } else if (date === 4){
//     console.log('Hom nay la thu 4');
// } else {
//     console.log('ko biet');
// }

//-----------------------------------------------------------------------------------
// Lệnh rẽ nhánh - Switch thường dùng khi cho trước giá trị

// var date = 2;

// switch(date) {
//     case 2: // dùng toán tử ==== để so sánh
//         console.log('Hom nay la thu 2'); 
//         break;
//     case 3: 
//         console.log('Hom nay la thu 3');
//         break;
//     case 4:
//         console.log('Hom nay la thu 4');
//         break;
//     default:
//         console.log('ko biet');
// }

//-----------------------------------------------------------------------------------
// Toán tử 3 ngôi - Ternary operator

// var course = {
//     name: 'JavaScript',
//     coin: 250
// }

// // if (course.coin > 0) {
// //     console.log(`${course.coin} Coins`);
// // } else {
// //     console.log(`Miễn Phí`);
// // }

// var result = course.coin > 0 ? `${course.coin} Coins` : `Miễn Phí`;
// console.log(result);

//-----------------------------------------------------------------------------------
/* 
    Vòng lặp - Loop

    1. for - Lặp với đk đúng
    2. for/in - Lặp qua key của đối tượng
    3. for/of - Lặp qua value của đối tượng
    4. while - Lặp khi đk đúng
    5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi đk đúng
*/

// 1. Vòng lặp for
// In 1 dãy số tăng dần từ 1 - 1000
// for (var i = 1; i <= 1000; i++) {
//     console.log(i);
// }

// // Lấy các pt trong mảng
// var myArray = [
//     'JavaScript',
//     'Python',
//     'PHP',
//     'Java'
// ];

// // lấy độ dài của ả
// var arrLength = myArray.length;

//     for (var i = 0; i < arrLength; i++) {
//         console.log(myArray[i]);
//     }

// 2. Vòng lặp for/in

// // Object {}
// var myInfo = {
//     name: 'Phu Do',
//     age: 18,
//     address: 'HCM'
// };

// for (var key in myInfo) {
//     console.log(myInfo[key]);
// }

// // Array []
// var languages = [
//     'JavaScript',
//     'Python',
//     'PHP',
//     'Java'
// ];

// for (var key in languages) {
//     console.log(languages[key]);
// }

// // Chuỗi. Khi dùng for/in sẽ in ra từng chữ cái trong chuỗi
// var myString = 'JavaScript'

// for (var key in myString) {
//     console.log(myString[key]);
// }
// 3. Vòng lặp for/of

// // Lấy pt trong mảng
// var languages = [
//      'Python',
//    'JavaScript',
//     'PHP',
//     'Java'
// ];

// // Lấy từng chữ cái trong chuỗi
// var languages2 = 'JavaScript'     

// for (var value of languages) {
//     console.log(value);
// }

// // Objects
// var myInfo = {
//     name: 'Phu Do',
//     age: 18,
//     address: 'HCM'
// };   

// // Lấy key: Object.keys(myInfo)
// for (var value of Object.keys(myInfo)) {
//     console.log(myInfo[value]);
// }

// // Hoặc lấy value: Object.values(myInfo)
// for (var value of Object.values(myInfo)) {
//     console.log(value);
// }

// 4. Vòng lặp while

// // i = 0 --> i < 1000 và i++ để trên/ i = 1 --> i <= 1000 và i++ phải để dưới
// var i = 0;
// while (i < 1000) {
//     i++;
//     console.log(i);
// }

// // lặp array
// var myArr = [
//     'Python',
//     'JavaScript',
//     'PHP',
//     'Java'
// ];        

// var i = 1;
// while (i < myArr.length) {    
//     console.log(myArr[i]);
//     i++;
// }

// 5. Vòng lặp do/while: sẽ chạy đoạn code trong vòng lặp 1 lần, sau đó mới chạy qua dkd để chạy lần 2

// // In ra dãy số tăng dần từ 1-10
// var i = 0;

// do {
//     i++;
//     console.log(i);
// } while (i < 10);

// //Nạp thẻ
// var i = 0;
// var isSuccess = false;

// do {
//     i++;
//     console.log('Nap the lan ' + i);

//     // thành công
//     if (true) {
//         isSuccess = true;
//     }
// } while (!isSuccess && i <= 3);

//-----------------------------------------------------------------------------------
// Break & Continute in loop

// // In ra từ 0-5 trong vòng lặp từ 0-10
// for (var i = 0; i < 10; i++) {
//     console.log(i);

//     if (i >= 5) {
//         break;
//     }
// }

// // Loại bỏ các số lẻ trong dãy số từ 0-10
// for (var i = 0; i < 10; i++) {

//     if (i%2 !==0) {
//         continue;
//     }

//     console.log(i);
// }

//-----------------------------------------------------------------------------------
// Vòng lặp lồng nhau - Nested loop

// Sd vòng lặp, truy xuất vào pt trong mảng con và in ra chúng
// var myArr = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ];

// for (var i = 0; i < myArr.length; i++) { 
//     for (var j = 0; j < myArr[i].length; j++) { // myArr[i]: mảng con
//         console.log(myArr[i][j]);
//     }
// }

// đầu tiên vòng for cha chạy, định nghĩa i = 0, sau đó myArr.length = 3
// sau đó for con chạy, định nghĩa j = 0, rồi myArr[i].length = 2
// rồi console in ra.
//  i = 0 --> lấy từ mảng thứ nhất là [1, 2]
// j = 0 --> lấy pt trong mảng 1 là số 1, sau đó tăng j++ -> j = 1 --> j sẽ lấy giá trị 2 là số 2

//----------------------------------------------------------------
// Ví dụ về vòng lặp

// // In số thứ tự từ 100-1
// for (var i = 100; i > 0; i--) {
//     console.log(i);
// }

// // In các gtrị 0, 5, 10, 15
// for (var i = 0; i <= 100; i += 5) { //i += 5 để cộng thêm 5 gtrị
//     console.log(i);
// }

// In ra số thứ tự từ 100-0 và nhảy bước theo 5 bước 5, 10, 15 thueo hướng ngược lại từ 100-0
// for (var i = 100; i >= 0; i -= 5) { 
//     console.log(i);
// }

// i -= 5: Là bước cập nhật biến i. Sau mỗi vòng lặp, giá trị của i sẽ giảm đi 5 (do i -= 5),
// nghĩa là chúng ta đang lùi về từ 100 về 0 với bước nhảy -5.

//----------------------------------------------------------------
/*
    Array methods:
        forEach()
        every()
        some()
        find()
        filter()
        map()
        reduce()
*/

// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 100
//     },        
//     {
//         id: 2,
//         name: 'HTML',
//         coin: 200
//     },        
//     {
//         id: 3,
//         name: 'PHP',
//         coin: 300
//     },        
//     {
//         id: 4,
//         name: 'ReactJS',
//         coin: 400
//     },   
//     {
//         id: 5,
//         name: 'PHP',
//         coin: 400
//     },
// ];

// 1. forEach(): Duyệt qua các pt của mảng
// courses.forEach(function(course, index) {
//     console.log(index, course);
// });

// 2. every(): Kiểm tra tất cả pt của 1 mảng phải thõa mãn 1 đk nào đó
// KT khóa học nào miễn phí khi coin <= 0, nếu có coin > 0  -> false
// var isFree = courses.every(function(course, index) {
//     return course.coin === 0 // khi trả về với đk đúng thì mới kiểm tra pt thứ 2, và đk sai thì ngừng lại ngay
// });

// console.log(isFree);

// 3. some(): Kiểm tra tất cả pt của 1 mảng và Chỉ cần 1 pt thỏa mãn đk nào đó trong mảng
// var isFree = courses.some(function(course, index) {
//     return course.coin === 0 // khi trả về với đk đúng thì dừng lại ngay
// });

// console.log(isFree);

// 4. find(): Tìm 1 pt trong mảng và chỉ trả về 1 pt
// var listCourse = courses.find(function(course, index) {
//     return course.name === 'PHP'; // khi trả về với đk đúng sẽ ngừng lại ngay
// });

// console.log(listCourse);    

// 5. filter(): Lọc 1 pt trong mảng và trả về tất cả pt 
// var listCourse = courses.filter(function(course, index) {
//     return course.name === 'PHP'; // khi trả về với đk đúng sẽ ngừng lại ngay
// });

// console.log(listCourse); 

// 6. map(): Thay đổi element của 1 array
// Thêm 'Khoa hoc' vào trước tên ở key name, và thêm 1 key mới là coinText: Gia'0'

/*
    - khi truyền 1 đối số vào 1 phương thức map() thì phải truyền vào 1 function
    - Đầu tiên map sẽ duyện qua pt 1, sau đó gán vào function
    - tiếp đến function sẽ return giá trị mình truyền vào, và gán lên cho courses.map 
*/

// var newCourses = courses.map(function(course) {
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`
//     };
// }); 
// // map(): sẽ trả về số lượng pt mới = số lượng pt cũ

// console.log(newCourses);

// Tách mảng mới, lấy ra tên của các khóa học đưa ra mảng mới
// var newCourses = courses.map(function(course) {
//     return course.name;
// }); 

// console.log(newCourses);

// 7. reduce(): muốn nhận về 1 gtrị duy nhất sau khi tính toán, xử lý trên các pt trong 1 array

// nhận 1 gtrị duy nhất là tổng số coin của tất cả khóa học
// c1: vòng lăp
// var totalCoin = 0;

// for (var course of courses) {
//     totalCoin += course.coin;
// }

// console.log(totalCoin);

/* c2: reduce()
    - truyền vào reduce() có 2 đối số: function và 0
    - 0 (initial value): giá trị khởi tạo đc gán cho accumulator trong lượt chạy đầu tiên
    - trong function có các tham số là 
    - accumulator: biến lưu trữ
    - currentValue: giá trị hiện tại = currentIndex
    - originArray = courses
    - trong function ta return cái gì thì sẽ thực hiện lưu trữ cái đó
    - trong lần chạy 1, biến tích trữ = 0, giá KH + biến tích trữ = 100 -> tích trữ đc = 100
    - trong lần chạy 2, biến tích trữ luôn = gtrị tích trữ được của lần 1 -> accu = 100, giá KH + accu ->> 100 + 200 = 300 --> tích trữ được (total) = 300
    - giá tích trữ cuối cùng sẽ return ra ngoài        
*/
// var i = 0;

// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     i++;
//     var total = accumulator + currentIndex.coin
//     console.table({
//         'Lượt chạy: ': i,
//         'Biến tích trữ: ': accumulator,
//         'Giá khóa học: ': currentValue.coin,
//         'Tích trữ được: ': total
//     });

//     return total;
// }

// var totalCoin = courses.reduce(coinHandler, 0);

// console.log(totalCoin);

// Đáp án dùng reduce()
// var totalCoin = courses.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue.coin;
// }, 0);

// console.log(totalCoin);

//----------------------------------------------------------------
// Array reduce() method phần 2
/* 
    - 0: initial value là giá trị không bắt buộc, tùy vào bài toán
    - Khi k có init... nó sẽ lấy pt đầu tiên của mảng để làm gtrị khởi tạo
    - Lúc đó currentValue = course sẽ là gtrị thứ 2
    - Trong lần chạy 1, đã lấy ra cả 2 obj 
    --> bị giảm 1 lần chạy, gọi lại của function -> gọi lại chỉ còn 4
    - khi k đặt init... --> kết quả cuối cùng là 1 object, trong khi kết quả cần đạt là 1 number
    --> tùy vào mong muốn cuối cùng trả về là gtrị gì thì ta sẽ đưa init... theo kiểu đó
*/
// var i = 0;

// var totalCoin = courses.reduce(function(total, course) {
//     i++;

//     console.log(i, total, course);

//     return total + course.coin;
// }); 

/* 
    - Bài toán k cần đưa init...
    - Khi k có init... mà kết quả trả về vẫn đúng kết quả mong muốn 
    --> k cần đưa init...
*/
// var numbers = [100, 200, 250, 300, 350];

// var totalCoin = numbers.reduce(function(total, number) {
//     return total + number;
// }, 0);

// console.log(totalCoin);

/* 
    Bài 1: Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
    - depthItem: array nhỏ bên trong
    - gtrị cuối cùng mong muốn là 1 flat - mảng làm phẳng
    --> init... đưa vào là 1 mảng rỗng [] -> lần chạy 1 flatOut = []
*/
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
//     return flatOutput.concat(depthItem); // concat: nối mảng
// }, []);

/* 
    Bài 2: Lấy ra các khóa học đưa vào 1 mảng mới
    - gtrị cuối cùng mong muốn là 1 array
    --> init... đưa vào là 1 mảng rỗng [] -> lần chạy 1 courses = []
    - tham số topic = {
            topic: "Front-end",
            courses: [
                {
                    id: 1,
                    title: "HTML, CSS"
                }, 
                
                {
                    id: 2,
                    title: "Javascript"
                }
            ]
        },
*/
// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             }, 

//             {
//                 id: 2,
//                 title: "Javascript"
//             }
//         ]
//     },

//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"
//             }, 

//             {
//                 id: 2,
//                 title: "NodeJS"
//             }
//         ]
//     },
// ];

// var newCourses = topics.reduce(function(courses, topic) {
//     return courses.concat(topic.courses);
// }, []);

// console.log(newCourses);

//----------------------------------------------------------------
/*
    - Bài tập, theo đề bài ta có thể hiểu yêu cầu là:
        - muốn kết quả trả về là một object { name: 'Sơn Đặng', age: 18 } -> initial value ta cần truyền vào là {}

    - Khai báo biến result để lưu trữ kết quả

    - accumulator: là giá trị tích lũy ban đầu = obj rỗng {}

    - currentValue: là giá trị hiện hành -> chính là value của arr(mảng lớn)

    - Bước vào vòng duyệt(thêm key và value cho obj): 

    - arr(mảng lớn) khi index = 0 
        -> value của currentValue lúc này là(mảng nhỏ) -> currentValue = ["name", "Sơn Đặng"] 
        => currentValue[0] = name , currentValue[1] = Sơn Đặng

    - arr(mảng lớn) khi index = 1 
        -> value của currentValue lúc này là(mảng nhỏ) -> currentValue = ["age", 18]
        => currentValue[0] = age , currentValue[1] = 18

    - Cuối cùng trả về obj đã lưu

    - Cách thêm key vào object: object[key] = value; accumulator là object rỗng {} 
        -> vậy cách thêm vào accumulator là: accumulator[currentValue[0]] = currentValue[1] 
        => accumulator là : object => currentValue[0] là: "key" => currentValue[1] là: "value"
*/
// var arr = [ 
//     ['name', 'Sơn Đặng'], 
//     ['age', 18], 
// ];

// function arrToObj(obj) { 
//     var result = obj.reduce((accumulator, currentValue) => {
//         accumulator[currentValue[0]] = currentValue[1]; 
//         return accumulator; 
//     }, {}); 
//     return result; 
// }

// // Hoặc
// function arrToObj(obj) { 
//     var result = obj.reduce(function(accumulator, currentValue) {
//         accumulator[currentValue[0]] = currentValue[1]; 
//         return accumulator; 
//     }, {}); 
//     return result; 
// }

// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

//----------------------------------------------------------------
/*
    Phương thức reduce có logic như thế nào?
        - reduce(): nhận 2 đối số
            + callback = accumulator hàm được gọi lại (bắt buộc khi dùng reduce)
                -> khi truyền đối số vào hàm reduce, trong hàm reduce sẽ gọi lại hàm đó
            + 10: initialValue: giá trị khởi tạo
        - Khi hàm reduce() hoạt động, nó sẽ gọi lại thk callback và trả về 4 đối số
        - Trong đó sẽ có 4 tham số gồm:
            1. accumulator: biến tích trữ ban đầu, đc gọi là callback
            2. currentValue
            3. index
            4. array
*/

// Tính tổng các số trong mảng có initial value
// const numbers = [1, 2, 3, 4, 5]

// var result = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 10);

// console.log(result);
/*
    - Nếu ban đầu init có gtrị, thì sau mỗi lần lặp, biến tích trữ ban đầu sẽ thành kết quả đc return
     -> initialValue = result
    - Mỗi lần lặp sẽ gọi lại callback, và nhận 4 đối số ở dòng 1092
        -> result = accumulator, currentValue = this[i], index = i, array = this
*/

/*
    dòng 1083 - 1087
    let i = 0
        if (arguments.length < 2) {
            i = 1;
            result = this[0];
        }

    - Khi k truyền init thì argument.length < 2, có truyền thì = 2
    - Và accumulator: biến tích trữ = pt đầu tiên của mảng (result = this[0];)
    - Và currentValue = pt thứ 2 của mảng -> phải lặp i = 1 (i = 0 là vtrị thứ 1)
*/
// Tự code ra reduce2()
// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1;
//         result = this[0];
//     }

//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this);
//     }
//     return result;
// }

// const numbers = [1, 2, 3, 4, 5]

// // có truyền init 
//  Vd: accumulator = 10, currentValue = 1 -> return = 11 -> result = 11
// -> khi result = 11 -> accumulator = 11, 
// và tiếp theo currentValue = 2 -> return = 13 -> result = 13

// var result = numbers.reduce2((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 10);

// // ko truyền init 
//  Vd: accumulator = 1, currentValue = 2 -> return = 3 -> result = 3
// -> khi result = 3 -> accumulator = 3, 
// và tiếp theo currentValue = 3 -> return = 6 -> result = 6

// var result = numbers.reduce2((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(result);

//----------------------------------------------------------------
/* 
    String/Array includes() method: có sẵn trong array/string

*/
// Dùng trong string: kiểm tra trong chuỗi có chứa pt gì ko
// var title = 'Hello welcome to JS'

// console.log(title.prototype.includes('to')); //--> true là có

// // Dùng trong array: kiểm tra trong mảng có chứa pt gì ko
// var coures = ['Java', 'PHP', 'Dart']

// console.log(coures.prototype.includes('Java')); //--> true là có

//----------------------------------------------------------------
/*
    Callback? 
    
    - Là hàm (function) được truyền qua đối số khi gọi hàm khác

    1. Là hàm
    2. Được truyền qua đối số

    - Dòng 1152 khi truyền vào đối số là myCallback, 
    consl dòng 1145 sẽ trả về 1 function -> param = myCallback là 1 callback
*/

// function myFunction(param) {
//     console.log(typeof param);
// }

// function myCallback() {

// }

// myFunction(myCallback);

/*
    - gọi hàm myCallback và truyền đối số 123 ở dòng 1167, 
    lúc đó dòng 1164 sẽ thực thi và gán 123 vào value
*/
// function myFunction(param) {

// }

// function myCallback(value) {
//     console.log('Value: ', value);

// }

// myCallback(123);

/*
    - Cách khác: truyền đối số vào param ở dòng 1174,
    và dòng 1179 sẽ thực thi, 
    điều này có nghĩa ta có thể gọi hàm callback ra trong 1 hàm khác
*/
// function myFunction(param) {
//     if (typeof param === 'function') { // hàm này sẽ kt nếu param là 1 function thì mới được thực thi
//         param(123);
//     }
// }

// function myCallback(value) {
//     console.log('Value: ', value);

// }

// myFunction(myCallback);

/*
sumCb(a, b): Hàm này nhận vào hai tham số a và b và trả về tổng của hai số đó (a + b).

subCb(a, b): Hàm này nhận vào hai tham số a và b và trả về hiệu của hai số đó (a - b).

multiCb(a, b): Hàm này nhận vào hai tham số a và b và trả về tích của hai số đó (a * b).

divCb(a, b): Hàm này nhận vào hai tham số a và b và trả về thương của hai số đó (a / b).

caculate(a, b, cb): Hàm này nhận vào hai đối số a và b, cùng với một hàm callback cb. Hàm caculate() thực hiện việc gọi hàm callback cb với a và b là đối số và trả về kết quả của hàm callback đó.
*/

// function sumCb(a, b) {
//     return a + b;
// }

// function subCb(a, b) {
//     return a - b;
// }

// function multiCb (a, b) {
//     return a * b;
// }

// function divCb (a, b) {
//     return a / b;
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// console.log(caculate(1, 2, sumCb));
// console.log(caculate(1, 2, subCb));
// console.log(caculate(1, 2, multiCb));
// console.log(caculate(1, 2, divCb));

//----------------------------------------------------------------
/*
    Callback phần 2

    1. Là hàm
    2. Truyền qua đối số
    3. Được gọi lại (trong hàm nhận đối số)

*/

/*
    - this: chính là thằng mình gọi. vd course.map2(); thì this = course
    - this[i] = course, i = index
    - course.map2()= callback
    - muốn htmls = kết quả như <h2></h2> dòng 1267, thì map2() phải trả về kết quả đó
    ->> định nghĩa output là 1 kết quả trống [] ->> htmls = output
*/

/*
    // Tự định nghĩa map2(); và hoạt động như code dòng 1265
    Array.prototype.map2 = function(callback) {
        var output = []; // định nghĩa là 1 kết quả trống
        var arrayLength = this.length; // dòng này để tránh trường hợp chọc vào length sau mỗi lần lặp, nó chỉ cần chọc vào 1 lần

        for (var i = 0; i < arrayLength; ++i){
            var result = callback(this[i], i); // gọi về callback và trả về course, index
            output.push(result); // dùng push để đẩy thêm 1 pt vào 1 array, sau đó đẩy kết quả nhận được sau mỗi lần gọi callback
        }
        return output;
    }

    var courses = [
        'JavaScript',
        'PHP',
        'Ruby'
    ];

    // định nghĩa hàm
    // courses.map2(function(course, index) {
    //     console.log(index, course)
    // });

    //nhưng muốn return như dòng 1269 thì viết
    var htmls =  courses.map2(function(course) {
        return `<h2>${course}</h2>`; // kết quả trả về của <h2></h2> ở đây sẽ là result ở dòng 1246
    });

    console.log(htmls.join(''));

*/

// trong map() có gọi function(course) -> đây là callback
// đây là cách truyền func trực tiếp
// courses.map(function(course) {
//     console.log(course);
// });    

// thông thường khi map chạy
// var htmls =  courses.map(function(course) {
//     return `<h2>${course}</h2>`;
// });

// console.log(htmls.join(''));

/*
    Bài tập: chọn ngẫu nhiên những phương thức
        - forEach
        - reduce
        - find
        - filter
    tạo ra các phương thức tương tự
    https://jsfiddle.net/feoa539v/
*/

//------------------------------------------------------------------------------
/*  Empty elements of array?

*/

// var courses = [
//     'JavaScript',
//     'PHP',
// ];

// console.log(courses); //output JavaScript, PHP -> 2 pt, length = 2

// Tuy nhiên length không phải lúc nào cũng tượng trưng cho số lượng pt
// var courses = [
//     'JavaScript',
//     'PHP',
// ];

// courses.length = 10; // định nghĩa length là 10

// console.log(courses); // output lúc này length là 10, và vẫn có 2 pt, lúc này 8pt còn lại là empty

// Tương tự trường hợp dùng vòng lặp này cũng ch chính xác hoàn toàn
// Thực ra vòng for này, k thiết kế để lặp mảng mà không quan tâm course có bao nhiêu pt, nó chỉ dựa vào đk trong for
// for (var i = 0; i < courses.length; ++i){
//     console.log(courses[i]); // output chỉ có 2 pt thực là javascript, PHP, còn 8pt còn lại là k có
// }

// Vậy cách lặp mảng đúng là ntn?
// for in sẽ lặp mảng và trả về các pt thực
// for (var index in courses) {
//     console.log(courses[index]); // output lúc này length là 10, nhưng chỉ trả về 2 pt thực
// }

// Cách kiểm tra khác
/* 
    Lưu ý Array(...,...). nếu ta chuyền 1 gtrị, nó sẽ hiểu array này là 1 độ dài
    - còn khi truyền vào 2 gtrị trở lên. vd Array(10, 12) ->> đây là 2 pt của mảng
*/
// var courses = new Array(10);

// console.log(courses);

// for (var index in courses) {
//     console.log(courses[index]); // output lúc này length là 10, nhưng k trả về pt nào
// }

//----------------------------------------------------------------
/*
    Giải bài tập
        - forEach
        - reduce
        - find
        - filter
    tạo ra các phương thức tương tự các phương thức trên
*/

// forEach: hoạt động như vòng lặp, và sẽ k cần return
// var courses = [
//     'JavaScript',
//     'PHP',
//     'Ruby'
// ]; 

// courses.length = 1000; // dòng này kiểm tra xem nó có lặp dựa theo độ dài mảng k -> nó dựa trên length -> v k dùng kiểu vòng lặp .length

// output = courses.forEach(function(course, index, array) {
//     console.log(course, index, array);
// });

/**
    // Tạo forEach2, dùng vòng lặp for in
    /*
        - Khi địng nghĩa (prototype) phương thức forEach2 cho array contructor, 
            thì khi array constructor có nhừng phương thức gì đối tượng được khởi tạo từ đó sẽ thừa hưởng những phương thức đó
            như courses sẽ thừa hưởng những phương thức của array constructor, và thừa hưởng key = forEach2
        - Xem các phương thức ở trong __proto__ dùng console.log(courses);

        - Tại sao 1 array có thể gọi đc các phương thức? thực chất course = array được khởi tạo từ array constructor, 
            nên course sẽ được kế thừa các phương thức có sẵn trong prototype     
        
        - for in k chỉ duyệt qua các pt trong mảng mà còn duyệt qua các pt trong __proto__
        - Vậy để làm bài toán này, chúng ta cần bỏ qua thk forEach2 nằm trong __proto__

    Array.prototype.forEach2 = function(callback) {
        for (var index in this) {
            console.log('index: ', index);
        }
    }

    var courses = [
        'JavaScript',
        'PHP',
        'Ruby'
    ]; 

    output = courses.forEach2(function(course, index, array) {
        console.log(course, index, array);
    });
*/

/*
    - Để kiểm tra xem 1 index có phải là index của thk gần nhất hay không?
        nghĩa là key đó phải nằm ở gần object, k nằm trong __proto__
        vd: 0: "JavaScript"
            1: "PHP"
            2: "Ruby"
            forEach2
        là các key mà mình định nghĩa
    --> dùng hasOwnProperty(index), ta sẽ truyền 1 key vào, key ở đây là index
        --> kết quả ở dòng 1418 là 0: "JavaScript" = true
                                1: "PHP" = true
                                2: "Ruby" = true
                                forEach2 = false
                nghĩa là 3 key đầu là index của thk gần nhất, gần object nghĩa là nằm trong các phần tử phương thức gần nhất
                còn forEach2 nó nằm trong __proto__

    Array.prototype.forEach2 = function(callback) {
        for (var index in this) {
            // console.log('index: ', this.hasOwnProperty(index));
            if (this.hasOwnProperty(index)) { 
                callback(this[index], index, this);
            }
        }
    }

    var courses = [
        'JavaScript',
        'PHP',
        'Ruby'
    ]; 

    // var coures = new Arayy(100); // dùng để kt xem có dựa vào length ko

    output = courses.forEach2(function(course, index, array) {
        console.log(course, index, array);
    });

*/

//----------------------------------------------------------------
/*
    filter2
*/
// // Tạo filter2
// Array.prototype.filter2 = function(callback) {
//     var output = [];

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) { 
//             var result = callback(this[index], index, this);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }


// // filter: lọc các pt trong mảng
// // lọc các Khóa học có coin > 700 và đưa các khóa học đó vào mảng mới
// var courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 900
//     },        
//     {
//         id: 2,
//         name: 'HTML',
//         coin: 700
//     },        
//     {
//         id: 3,
//         name: 'PHP',
//         coin: 800
//     }  
// ];

// var filterCourse = courses.filter2(function(course, index, array) {
//     return course.coin > 700;
// });

// console.log(filterCourse);

//----------------------------------------------------------------
/*
    some2()
*/

/*
    // tạo some2()
    Array.prototype.some2 = function(callback) {
        var out = false;

        for (var index in this) {
            if (this.hasOwnProperty(index)) { 
                if (callback(this[index], index, this)) {
                    out = true;
                    break;
                }
            }
        }
        return out;
    }


    // some(): cho biết tối thiểu có 1 pt trong mảng thỏa mãn đk, chỉ cần 1 pt true thì sẽ dừng vòng lặp ,trả về true/ false
    // kiểm tra xem học viên đã học xong tối thiểu một môn học hay chưa
    var courses = [
        {
            name: 'Javascript',
            coin: 900,
            isFinish: true
        },        
        {
            name: 'HTML',
            coin: 700,
            isFinish: false
        },        
        {
            name: 'PHP',
            coin: 800,
            isFinish: false
        }  
    ];

    var result = courses.some2(function(course, index, array) {
        return course.isFinish;
    });

    console.log(result);
*/

//----------------------------------------------------------------
/*
    every2()
*/

// every(): kt tất cả pt trong mảng, và tất cả pt phải thỏa mãn đk, nếu có 1 pt false thì sẽ trả về false và dừng vòng lặp
// tạo every2()
// Array.prototype.every2 = function(callback) {
//     var out = true;

//     for (var index in this) {
//         if (this.hasOwnProperty(index)) { 
//             var kq = callback(this[index], index, this);
//             if (!kq) {
//                 out = false;
//                 break;
//             }
//         }
//     }
//     return out;
// }

// var courses = [
//     {
//         name: 'Javascript',
//         coin: 900,
//         isFinish: true
//     },        
//     {
//         name: 'HTML',
//         coin: 700,
//         isFinish: true
//     },        
//     {
//         name: 'PHP',
//         coin: 800,
//         isFinish: false
//     }  
// ];

// var result = courses.every2(function(course, index, array) {
//     return course.isFinish;
// });

// console.log(result);

//----------------------------------------------------------------
/*
    HTML DOM là gì? xem sơ đồ trên w3schools - là quy chuẩn của W3C  
        - Document Object Model
        - DOM có 3 thành phần
            1. Element: <></>, thẻ tag
            2. Attributes: thuộc tính nằm trong thẻ vd: class, id ...
            3. Text: nội dung trong thẻ
        - Mỗi hình vuông trong sơ đồ gọi là node, điểm gồ lên trên
        - Khi dùng javascript, ta có thể thay đổi 3 thành phần trong DOM
*/

//----------------------------------------------------------------
// Phân định ranh giới giữa HTML DOM và JavaScript


//----------------------------------------------------------------
/*
    Document object: đại diện cho website

    Get element methods
        - Get qua id, class, tag, CSS selector, HTML colection

*/
// Get element theo id: mỗi element chỉ đc 1 id khác nhau
// var headingNode = document.getElementById('heading');

// console.log(headingNode);

// Get class: có thể đặt class cho nhiều element giống nhau
// var headingNodes = document.getElementsByClassName('heading');

// console.log(headingNodes);

// Get tagname
// var headingNodes = document.getElementsByTagName('p');

// console.log(headingNodes);

// Get CSS selector: có thể đặt class cho nhiều element giống nhau
// querySelector: chỉ lấy element đầu
// var headingNode = document.querySelector('.heading');

// console.log(headingNode);

// querySelectorAll: lấy all elements
// var headingNodes = document.querySelectorAll('.heading');

// console.log(headingNodes[1]);

// HTML colection
// Khi select qua form, k cần get qua ID, có thể gọi trực tiếp
// Truy xuất form theo id, cú pháp tự đặt
// console.log(document.forms['form-1']);

// Truy xuất form theo id, cú pháp mặc định
// console.log(document.forms.testForm);

// trả về các thẻ <a></a> có thuộc tính name
// console.log(document.anchors);

//----------------------------------------------------------------
/*
    Get element methods - 2
        


// Select thẻ <li></li> trong box-1, box-2
    // cách 1: lấy thẳng trong .box-1
    var listItemNodes = document.querySelectorAll('.box-1 li');

    console.log(listItemNodes);

    // cách 2: lấy từ cha vào con
    // Công việc 1: Sử dụng với boxNode, lấu .box-1
    var boxNode = document.querySelector('.box-1');
    console.log(boxNode);

    // Công việc 2: Sử dụng tới các li element là con của .box-1
    console.log(boxNode.querySelectorAll('li'));
    // hoặc
    console.log(boxNode.getElementsByTagName('li'));
    console.log(boxNode.querySelector('p'));
*/

//----------------------------------------------------------------
/* 
    Get element methods - 3
    1. getElementsById
    2. getElementsByClassName
    3. getElementsByTagName
    4. querySelector
    5. querySelectorAll (NodeList)

    -> 1, 4 trả về trực tiếp element
    -> 1, 4 số ít, trả về 1 element (đối tượng)
    -> 1, 2, 3, 5 số nhiều, trả về nhiều elements
    -> 5 lựa chọn ra tất cả elements

    6. HTML collection
    7. document.write. ngay sau khi đoạn mã đc thực thi, nó sẽ in ngay dòng chữ ta truyền vào
 */

//----------------------------------------------------------------
/* 
    Attribute node & Text node

    vd: id, class, title là attribute node
        Heading là text node
*/

//----------------------------------------------------------------
/* 
    DOM Attribute 
        - muốn tương tác với attribute phải getElement
        - setAttribute là attribute mình có thể tùy biến định nghĩa
        - getAttribute là lấy attribute hợp lệ vs element
        - ta có thể chấm đến thuộc tính hợp lệ của element
        vd: trong thẻ h1 có thuộc tính name là hợp lệ,
            -> ta có thể .name ra trực tiếp bằng cách
            viết console.log(headingElement.getAttribute.name);
                -> kết quả là value của name = 'name-text'

            còn attribute href k hợp lệ vs thẻ h1. 
            -> nên ta phải dùng get lấy nó ra thông qua set đã định nghĩa
            vd: dòng 1720, ta định nghĩa 1 attribute là href bằng cách setAttribute
                sau đó viết headingElement.getAttribute('href') để lấy value của href
*/

// var headingElement = document.querySelector('h1')

// seter: toán tử gán. phải đặt attribute hợp lệ với element
// Thêm 1 attribute (title) vào element
// headingElement.title = 'Title-text' 

// Ngoại lệ khi thêm class phải là className
// headingElement.className = 'Heading'

// setAttribute không cần hợp lệ với element
// vd: thêm thẻ href trong thẻ h1
// headingElement.setAttribute('hreft','heading')

// Lấy value của attribute có sẵn ở index
// console.log(headingElement.getAttribute('class'));

// Lấy attribute được thêm vào bởi js, thêm ở dòng 1713
// get attribute title
// console.log(headingElement.getAttribute('title'));

//----------------------------------------------------------------
/*
    Bài tập 1
    Câu 1
        1. Thêm attribute title vào thẻ h1 với giá trị Học lập trình tại F8
        2. Thêm attribute class cho thẻ div với giá trị box
        3. Thêm attribute width cho thẻ img với giá trị 100

    Câu 2
        1. Lấy attribute href vào thẻ a ở vị trí thứ nhất
        2. Thêm giá trị f8ShortLink vào attribute href trong thẻ a ở vị trí thứ hai 
        3. Thêm attribute data-url vào thẻ div có giá trị f8ShortLink 
*/
/*
    // Câu 1:
    // 1. Thêm attribute title vào thẻ h1 với giá trị Học lập trình tại F8
        var theH1 = document.getElementsByTagName('h1')[0];
        theH1.title = 'Học lập trình tại F8';

    //2. Thêm attribute class cho thẻ div với giá trị box
        var theDiv = document.getElementsByTagName('div')[0];
        theDiv.className = 'box';

    //3. Thêm attribute width cho thẻ img với giá trị 100
        var theImg = document.getElementsByTagName('img')[0];
        theImg.width = 100;

    // Câu 2
    // 1. Lấy giá trị của href trong thẻ a ở vị trí thứ nhất
        var theA = document.querySelectorAll('a');
        console.log(theA[0].getAttribute('href'));

    //2. Thêm giá trị f8ShortLink vào attribute href trong thẻ a ở vị trí thứ hai
        theA[1].href = 'f8ShortLink';

    //3. Thêm attribute data-url vào thẻ div có giá trị https://f8.edu.vn/
        var theDiv = document.getElementsByTagName('div')[1]
        theDiv.setAttribute('data-url','https://f8.edu.vn/')
*/

//----------------------------------------------------------------
/* 
    innerText vs textContent Property
        - innerText khi get ra, nội dung lấy được sẽ giống với nd mình nhìn thấy trên trình duyệt
        - innerText: lấy ra text, bỏ qua các thẻ bên trong
        - innerText: là thuộc tính của elementNode
        - textContent khi get ra, sẽ lấy nd thật của nó
        - textContent: lấy ra text, bỏ qua các thẻ bên trong, lấy cả khoảng trống
        - textContent: tồn tại trên elementNode và textNode
        - Khi set nd khác thì dù thêm 1 thẻ tag vào đó, nó vẫn xem thẻ tag đó là 1 textNode
        vd: dòng 1803, lúc này ke vẫn trả về 1 textNode
        - Khi lấy textNode ta có thể gọi textContent để lấy nd text của textNode
        nhưng k thể dùng innerText để lấy nd

*/
/*
    var headingElement = document.querySelector('.heading')

    // Lấy text ra
        // console.log(headingElement.innerText)
        // console.log(headingElement.textContent)

    // Thay đổi text
        // headingElement.innerText = 'New Heading'
        // headingElement.textContent = 'New Heading'

    // Vd sự khác nhau
    // innerText: lấy ra text, bỏ qua các thẻ bên trong
        console.log(headingElement.innerText)

    // textContent: lấy ra text, bỏ qua các thẻ bên trong, lấy cả khoảng trống, hoặc những gì ẩn đi
        console.log(headingElement.textContent)

    // set 1 textNode là 1 elementNode mới: <i>New Heading</i>
        headingElement.innerText = '<i>New Heading</i>'
*/
/*
    - khi set nd bằng 1 template string ``
        1. ở HTML innerText sẽ lấy ra tất cả giá trị ẩn, giá trị gốc
        vd: dòng 1012
        2. Còn textContent chỉ lấy ra giá trị gốc ở HTML
        vd: dòng 1818
*/
// headingElement.innerText = `

//     text heading

// `

// headingElement.textContent = `

//     text heading

// `

//----------------------------------------------------------------
/* 
    InnerHTML vs OuterHTML Property
        - Thêm 1 element vào trong element đang có sẵn
        - Cả 2 đều là thuộc tính của elementNode
        - Khi thêm 1 elementNode vào trong element, đồng thời sẽ thêm luôn textNode, attributeNode
            -> từ đó ta có thể get elementNode đã được set ra
        1. innerHTML
        2. outerHTML
*/
// var boxElement = document.querySelector('.box');

// innerHTML
// Set elementNode h1 có textNode là Heading
// boxElement.innerHTML = '<h1 title="Heading">New Heading</h1>';

// innerHTML: lấy nd HTML ở bên trong element box
// Get nội dung HTML (elementNode đã tạo) bên trong element
// console.log(boxElement.innerHTML);

// Get elementNode đã được set
// console.log(document.querySelector('h1').innerText);

// ----------------------------------------------------------------
// outerHTML
//Set elementNode span có textNode là Test
// Lúc này nó sẽ ghi đè , thay thế hoàn toàn thằng elementNode ban đầu là box 
// boxElement.outerHTML = '<span>Test</span>';

// Lúc này khi in ra thì elementNode là box vẫn còn trong bộ nhớ
// Nhưng trong DOM k còn nữa và từ đó k thể get được các nội dung bên trong nữa
// console.log(boxElement);

// outerHTML: lấy tất cả nd ra tính từ element ta gọi ra, cụ thể là box
// Get nội dung HTML (elementNode có sẵn) bên trong element
// console.log(boxElement.outerHTML);

//----------------------------------------------------------------
/* 
    Bài tập:
        Các bạn hãy viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.

        Ví dụ: Với mảng var courses = ['ReactJS', 'AngularJS', 'VueJS'] sẽ thu được kết quả:

        . ReactJS
        . AngularJS
        . VueJS

        Gợi ý:

        Sử dụng phương thức map kết hợp với join để tạo chuỗi HTML từ mảng courses.
        Gán chuỗi HTML vừa tạo vào thuộc innerHTML của thẻ ul giống bài trước nhé.  
*/

/*
    var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

    function render(courses) {
        // Tạo 1 mảng chứa các thẻ li cho từng khóa học
            let arr = courses.map((course) => `<li>${course}</li>`);
        // Ghi danh sách khóa học vào chuỗi HTML
            let liElement = arr.join(' ');

        // get ul ra, và gán chuỗi li vào
            document.querySelector('ul').innerHTML = liElement;
    }

    render(courses)
*/

//----------------------------------------------------------------
/*
    Node properties

    - console.log([boxElement]) đây là cách tìm cách phương thức dưới dạng object

    - innerHTML: lấy ra nd HTML của element
    
    - innerText: lấy ra nd text của elementNode
    
    - clientHeight: kích thước chiều cao của element (chiều dọc)
    
    - clientWidth: kích thước chiều rộng của element (chiều ngang)
    
    - clientLeft: trục ngang (x)

    - clientTop: trục dọc (y)

    - attributes: trả về đối tượng NamedNodeMap, nó như array nó có đánh index cho các phần tử bên trong và có thuộc tính length để chỉ ra độ dài. 
        Nó là 1 thuộc tính của elementNode.

    - autocapitalize: nếu nó = true tức là nó được enable thì các dòng chữ sẽ được tự động viết hoa

    - autofocus: tự động kích hoạt con trỏ chuột nháy nháy trong ô input

    - baseURI: trả về URI hiện tại đang truy cập, bao gồm cả domain, hostname và cả bass đằng sau nứa

    - childElementCount: đếm phần tử con là elementNode ở bên trong, trả về số lượng elementNode

    - childNodes: đếm các phần tử con bên trong bao gồm cả textNode và ElementNode bên trong

    - childrend: là con, trả về elementNode cụ thể là HTML colection, giống vs array, chứa các elementNode bên trong

    - nodeValue: cũng là nội dụng

    - textNode childRen: trả về HTMLCollection và có các ElementNode ở bên trong

    - classList: quản lí 1 attribute class của 1 Element

    - firstChild: lấy ra Node(con) đầu tiên của boxElement, có thể là textNode hoặc elementNode

    - firstElementChild: trả về Element đầu tiên, có thể là thẻ h1, nếu như có thêm nhiều thẻ thì nó sẽ chỉ lấy thẻ đầu tiên

    - hidden: kiểm tra có đang ẩn hay không trả về true false localName là name trong Element

    - (div) nextElementSibling: là các thằng anh em ruột, nó trả về element đằng sau thằng đang xét, nếu mà nó không có thì nó sẽ trả về null

    - nextSibling: nó trả về Node tiếp theo bao gồm cả textNode hoặc là ElementNode

    - ownerDocument:element đang xét nằm trong tài liệu sở hữu nào thì nó sẽ trả về tài liệu sở hữu đó (thường thì nằm trong document)
    
    - parentElement là thẻ cha của element đang xét, (parent sẽ luôn là Element)

    - parentNode: là node cha của node đang xét 
    
    - spellcheck: để check chính tả 
    
    - tabIndex: là khoảng cách tab title trả về title attribute, 
        nội dung của title ElementNode sẽ có nodeType là 1 AttributeNode có nodeType là 2 TextNode có type nodeType 3

    - Tất cả các Element trong HTML đều có thể biến thành 1 thẻ input Khi 1 Element có attribute là contenteditable="" thì chính nó và element con của nó có thể chỉnh sữa như 1 thẻ input

    - attribute : trả về các thuộc tính của element

    - childElementCount : số element con children : trả về mảng htmlcollection[ chứa element bên trong]

    - draggable : kéo thả element

    - firstElementchild : lấy ra element con đầu tiên lastElementchild

    - hidden : element ẩn hay ko

    - localName : trả về tên thẻ của element hiện tại
    
    - nextElementSibling : trả về thẻ liền kề(bên dưới nó) 
    
    - nodeType : 1-2-3(elementNode-attributeNode-textNode) 
    
    - offsetHeight/ width : kích thước cao,ngang của elementh + px tương tự vs left/top: vị trí trên và trái
    
    - offsetParent : đang là con của thẻ nào parentElement : thẻ cha là gì ownerDocument : chủ sở hữu của element hiện tại(documebt)

    - scrollHeight : vị trí hành động kéo thả
*/

//Các phương thức và thuộc tính của boxElement 
// var boxElement = document.querySelector('.box'); 
// console.log([boxElement]); 

// ----------------------------------------------------------------
/*  
    DOM style 
*/
    // var boxElement = document.querySelector('.box');


    // Set cho box có ngang, dọc, background
    // Cách 1
        // boxElement.style.width = '100px'
        // boxElement.style.height = '200px'
        // boxElement.style.backgroundColor = 'red'

    // Cách 2:
        // Object.assign(boxElement.style, {
        //     width: '200px',
        //     height: '100px',
        //     backgroundColor: 'green'

        // });

    // get gtrị của thuộc tính css trong element style
        // console.log(boxElement.style.backgroundColor);

//----------------------------------------------------------------
/*
    ClassList Property: 
        - classList chứa danh sách các class của element đó.
        - Quản lý class của element được gọi
        - Là 1 thuộc tính của elementNode 
        - Chỉ truy cập được vào các phương thức ở dưới khi lấy ra elementNode
        
        1. add
        2. contains: kiểm tra 1 class có nằm trong element ko (có/ko)
        3. remove
        4. toggle: 
            - Nếu đang có 1 class ở element thì sẽ xóa bỏ class đó
            - Nếu không có 1 class ở element thì sẽ thêm 1 class vào
            - Phương thức toggle dùng để thêm class được chỉ định vào element nếu class đó chưa xuất hiện 
                -> và xóa bỏ class đó nếu đã xuất hiện.
            - Đối số truyền vào là chuỗi thể hiện tên class được chỉ định nhé.
        
        - console.log(boxElement.classList);
            -> có thể lấy ra 2 chỉ mục từ DOMTokenList như array
        - 0: class 1 (box)
        - 1: class 2 (box-2)
            -> 2 cái này là chỉ mục
        - console.log(boxElement.classList.length);
            -> kiểm tra elements có số lượng class mon muốn hay k
        - console.log(boxElement.classList.[0]);
            -> truy xuất vào phần tử qua index để lấy class
        - console.log(boxElement.classList.value);
            -> lấy ra chuỗi ở trong attribute class

*/
/*
    var boxElement = document.querySelector('.box')

    // console.log(boxElement.classList);

    // 1. add thêm class red cho thẻ div
    // add nhiều class khác bằng cách dùng dấu ,
        // boxElement.classList.add('red')

    // 2. Kiểm tra có tồn tại class red hay k
    // contains(đối số) sẽ nhận 1 đối số vào để kiểm tra trong element có tồn tại hay k
        console.log(boxElement.classList.contains('red'));

    // 3. Remove, Xóa class red ra khỏi element 
        console.log(boxElement.classList.remove('red'));

    // 4. toggle, kiểm tra element có class hay ko, có sẽ xóa, k có sẽ thêm
        console.log(boxElement.classList.toggle('red'));
    
    // dùng setInterval (nhấp nháy) để có thể dễ hình dung toggle
        setInterval(() => {
            boxElement.classList.toggle('red');
        }, 1000);
*/

// ----------------------------------------------------------------
/* 
    DOM events
        - Những sự kiện diễn ra trong DOM
        - Những hành vi diễn ra của trình duyệt, của người dùng khi dùng trang web 

        1. Attribute events
            - Dùng để lắng nghe sự kiện diễn ra, hành vi người dùng
                bằng cách dùng attribute khi định nghĩa 1 thẻ HTML
        2. Assign event uisng the element node
            - Gán sự kiện qua elementNode

        B1: Biết được tên sự kiện (kiếm HTML DOM events trên w3sc)
        - thêm on vào trước các events
        vd: click -> onClick,...
*/
    // 1. Attribute events
    // Học even click
    // Click vào chữ DOM events, sẽ in ra 1 dãy số ngẫu nhiên. Viết trực tiếp bên HTML
    // Xem cụ thể bên HTML
        // <h1 onclick="console.log(Math.random())">DOM events</h1>

    // 2. Assign event uisng the element node
    // Click vào và in ra ngẫu nhiên số
        // var h1Element = document.querySelectorAll('h1');

    /* 
        - Với i = 0, h1Element[0].onclick sẽ được gán bằng function(e){ //code } 
            (Không cần biết đoạn code bên trong là gì, vì code lúc này chưa chạy, chỉ mới định nghĩa).
        - Với i = 1, 2 --> h1Element[1], h1Element[2] tương tự.
        - Sau khi vòng lặp kết thúc và định nghĩa hết. Ta sẽ click vào 
            -> lúc đó đoạn code bên trong mới được thực thi
    */
        // for (var i = 0; i < h1Element.length; ++i) {
        //     h1Element[i].onclick = function(e) {
        //         // code ở đây chỉ được thực thi khi sự kiện onclick diễn ra
        //         console.log(e.target); // target trả về chính element đang lắng nghe DOM event
        //     }
        // }   

    /* 
        - Vấn đề dùng biến ở bên ngoài. cụ thể là truyền h1Element[i]
        - Lúc này sẽ ra undefined bởi vì lúc này vòng lặp chạy qua, i đã = 3
        - h1Element lúc này chỉ có 3 phần tử và có index là 0, 1, 2
        - Hành vi click vào nó sẽ diễn ra sau khi vòng lặp for chạy, khi đó i = 3
            -> h1Element[3] -> index 3, nhưng kết quả ban đầu chỉ có index 0, 1, 2
            -> lúc này h1Element k được định nghĩa và trả về undefined

    */
        // for (var i = 0; i < h1Element.length; ++i) {
        //     h1Element[i].onclick = function(e) {
        //         console.log(h1Element[i]);
        //     }
        // } 

        // console.log(i);

// ----------------------------------------------------------------
/* 
    DOM events example

    1. input/ select
    2. Key up/ down
*/
    // 1. input/ select
    // Lấy value của các thẻ input
        // var inputElement = document.querySelector('input[type="input"]');
        
        // onchange: chỉ được thực thi khi ta bỏ con trở chuột ra ngoài
        // nó chỉ in ra value khác với value ban đầu
        //     inputElement.onchange = function (e) {
        //         console.log(e.target.value);
        //     }

        // oninput: đưa value lúc nào thì sẽ in ngay value đó ra
            // inputElement.oninput = function (e) {
            //     console.log(e.target.value);
            // }
    
    // Checkbox
        // var inputElement = document.querySelector('input[type="checkbox"]');

        // checked: để kiểm tra xem có check vào box hay ko
            // inputElement.onchange = function (e) {
            //     console.log(e.target.checked);
            // }

    // Select
        // var inputElement = document.querySelector('select');
        
        // in ra value của option chứ k phải text
        // inputElement.onchange = function (e) {
        //     console.log(e.target.value);
        // }

    // 2. Key up/ down
        // var inputElement = document.querySelector('input[type="text"]');
        
        // keydown: khi nhấn phím vào, khi dùng để lấy value, nó sẽ lấy chậm 1 nhịp
        // vd: nhập a và thả, nó sẽ k lấy liền, nó chỉ lấy ra a khi nhập vào chữ thứ 2
            // inputElement.onkeydown = function (e) {
            //     console.log(e.target.value);
            // }

        // keyup: khi thả phím ra
            // inputElement.onkeyup = function (e) {
            //     console.log(e.target.value);
            // }

        // Cách để nhận biết ta đang bấm vào phím nào
        // lắng nghe sự kiện trên thẻ input
        // which là mã code của phím đó
        // vd: 27 là ESC
            // inputElement.onkeyup = function (e) {
            //     console.log(e.which);

            //     switch(e.which) {
            //         case 27:
            //             console.log('Đây là phím ESC')
            //             break;
            //     }
            // }

        // Nhận biết phím khi lắng nghe sự kiện document (lắng nghe sự kiện cả website)
            // document.onkeydown = function(e) {
            //     switch(e.which) {
            //         case 27:
            //             console.log('Đây là phím ESC')
            //             break;
            //     }
            // }

// ----------------------------------------------------------------
/* 
    DOM events
        1. preventDefault
            - Loại bỏ hành vi mặc định của trình duyệt trên 1 thẻ HTML
        2. stopPropagation
            - Loại bỏ sự kiện nổi bọt
*/

    // 1. preventDefault
    // Ví dụ 1: Nếu click vào link, mà nó chứa chữ f8.edu.vn thì mới chuyển trang, còn k phải thì k làm gì
    // Nếu dùng anchors thì trong thả a phải có thẻ name
    // Nếu dùng links thì sẽ trả về tất cả thẻ a
        // var aElements = document.links;
        
        // dùng vòng lặp for để lắng nghe sự kiện của tất cả thẻ a
        // for (var i = 0; i < aElements.length; ++i) {
        //     aElements[i].onclick = function (e) {
                
        //         // startWith: thuộc tính của chuỗi, để check xem chuỗi của ta có bắt đầu vs 1 chuỗi nào đó hay k
        //         // Nếu thuộc tính href k chứa chuỗi https://f8.edu.vn, thì sẽ không chuyển đến trang f8 (ngăn chặn hành vi mặc định)
        //         if (!e.target.href.startWith('https://f8.edu.vn')) {
        //             e.preventDefault();
        //         }
        //     }
        // }

    // Ví dụ 2: Hành vi mặc định là Khi click vào input mới hiện ra li
    // Nhưng muốn khi click ra ngoài vẫn hiện li thì...
    // Và bỏ đi hành vi mặc định trên
        // var ulElement = document.querySelector('ul');
        
        // onmousedown: khi click chuột xuống
        // ulElement.onmousedown = (e) => {
        //     e.preventDefault();
        // }

        // ulElement.onclick = (e) => {
        //     console.log(e.target)
        // }


    // 2. stopPropagation
    // Loại bỏ hành vi nổi bọt bên dí dụ ở HTML
        // document.querySelector('div').onclick = (e) => {
        //     console.log('DIV')
        // }

        // document.querySelector('button').onclick = (e) => {
        //     e.stopPropagation();
        //     console.log('Click me!')
        // }

// ----------------------------------------------------------------
/* 
    1. Event listener
        - Tương tự DOM event là lắng nghe sự kiện xảy ra
    2. JSON
    3. Fetch
    4. DOM location
    5. Local storage
    6. Session storage
    7. Coding convention
    8. Best Practices
    9. Mistakes
    10. Performance

    1. Xử lý nhiều việc khi 1 event xảy ra
    2. Lắng nghe/ Hủy bỏ lắng nghe
*/

    // 1. DOM events
        // var btn = document.getElementById('btn')

        // 1. Xử lý nhiều việc khi 1 event xảy ra
            // btn.onclick = () => {
            //         console.log('Việc 1')
            //         console.log('Việc 2')
            //         alert('Việc 3')
            //     }

        // 2. Lắng nghe/ Hủy bỏ lắng nghe
        // Lắng nghe, nhớ ẩn đoạn code dòng 2270
        // Khi trang web được tải, 3s đầu tiên khi click sẽ k xảy ra gì, sau 3s click vào thì hoạt động các việc
            // setTimeout(() => {
            //     btn.onclick = () => {
            //         console.log('Việc 1')
            //         console.log('Việc 2')
            //         alert('Việc 3')
            //     }
            // }, 3000);

        // Hủy lắng nghe, bỏ ẩn đoạn code dòng 2270
        // Đang lắng nghe, nhưng sau 3s không muốn lắng nghe nữa
            // setTimeout(() => {
            //     // onclick chỉ là key của 1 object, nên khi thực thi nó sẽ ghi đè
            //     btn.onclick = () => {} // khi đè function rỗng lên function ở dòng 2270
            // }, 3000);
        

    // 1. Event listener
        /*
            - Lắng nghe 1 sự kiện khi dùng Event listener
                - Lắng nghe sự kiện click và in ra nhiều việc
                - addEventListener('', ''): sẽ nhận 2 đối số
                    1. eventName: bỏ on ở trước, vd: onclick -> click
                    2. callback
                - Nó sẽ gọi theo thứ tự được add vào
                - Phải tách functione ở các đối số ra ngoài riêng 
                    thì việc hủy bỏ lắng nghe mới có thể đồng loạt sử dụng cả khi lắng nghe và hủy bỏ lắng nghe
        */
            // var btn = document.getElementById('btn')

            // c1:
                // btn.addEventListener('click',(e) => {
                //     console.log('Event 1');
                // });

                // btn.addEventListener('click',(e) => {
                //     console.log('Event 2');
                // });

            // c2:
                // function viec1() { 
                //     console.log('Event 1');
                // }

                // function viec2() { 
                //     console.log('Event 2');
                // }

                // btn.addEventListener('click', viec1);
                // btn.addEventListener('click', viec2);

            // Hủy bó lắng nghe
            // Sau 3s sẽ hủy bỏ lắng nghe việc 1
            // removeEventListener('',''): truyền vào đối số thứ 2 thằng muốn hủy bỏ lắng nghe
                // setTimeout(() => {
                //     btn.removeEventListener('click',viec1)
                // }, 3000)

/* 
    ***Lưu ý:
        - DOM events được sử dụng trong trường hợp đơn giản, code ngắn gọn
            vd: Cần lắng nghe 1 sự kiện nào đó, và k có nhu cầu gỡ bỏ nó 
        
        - Event Listener được sử dụng nếu muốn xử lí nhiều việc khi event xảy ra
            nhưng muốn hủy bỏ 1 sự kiện trong 1 trường hợp cụ thể nào đó

        ** Cả 2 đều có thể sd khi muốn xử lí nhiều việc khi event xảy ra
        nhưng nếu phương thức quá dài, thì nên dùng Event Listener để bóc tách ra, giúp đỡ rối
*/
                