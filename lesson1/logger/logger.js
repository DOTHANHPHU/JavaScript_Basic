
    // function logger(log, type = 'log') {
    //     console[type](log);
    // }

// Đây là export mặc định
// Cú pháp xuất: export default 'tên module'
    // export default logger;

// --------------------------------------------------------------
/*
    - Một module chỉ đc export 1 cái mặc định
    - Còn export thông thường thì vô số
*/
// export thông thường
    // export const TYPE_LOG = 'log';
    // export const TYPE_WARN = 'warn';
    // export const TYPE_ERROR = 'error';

    // function logger(log, type = TYPE_LOG) {
    //     console[type](log);
    // }

    // export default logger;

// ----------------------------------------------------------------
// TH1: import tách hẳn file ra ngoài, dùng destructuring
// export 1 file đã tách hẳn ra ngoài, cụ thể là file constants.js
/* 
    1. import các thằng đã tạo bên file constants.js
    2. import các thằng đã tạo qua file chính: main.js
*/
    // import {
    // // dùng thằng nào thì import thk đó
    //     TYPE_LOG,
    //     // TYPE_WARN,
    //     // TYPE_ERROR
    // } from '../constants.js';

    // function logger(log, type = TYPE_LOG) {
    //     console[type](log);
    // }

    // export default logger;

// ----------------------------------------------------------------
// TH2: Đưa logger.js vào trong 1 thư mục riêng
/* vì trong logger vừa ném vào 1 cấp khác là index 
    => thêm 1 dấu chấm để constants chui ra từ cấp ngoài
*/
    // import {
    // // dùng thằng nào thì import thk đó
    //     TYPE_LOG,
    //     // TYPE_WARN,
    //     // TYPE_ERROR
    // } from '../constants.js';

    // function logger(log, type = TYPE_LOG) {
    //     console[type](log);
    // }

    // export default logger;