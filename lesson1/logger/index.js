/*
    - Đây là 1 cách export ra ngoài từ 1 module khác
    - Lúc này file index.js là trung gian

*/
// Đây là export logger default
// Cách viết thông thường
    // import logger from './logger.js';

    // export default logger;

// Cách ngắn gọn
    // export { default } from './logger.js';

// export logger thông thường
// as sang 1 tên mới
    // export { default as logger2 } from './logger.js';