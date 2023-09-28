/* 
    Xây dựng Tabs UI
*/

// Dùng bind để tí nữa chỉ cần gõ tên biến mà k cần gõ lại chuỗi dài
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const tabs = $$('.tab-item');
    const panes = $$('.tab-pane');

    const tabActive = $('.tab-item.active');
    const line = $('.tabs .line');

    requestIdleCallback( function() {
        line.style.left = tabActive.offsetLeft + 'px'
        line.style.width = tabActive.offsetWidth + 'px'
    });

// Lặp qua các tab 
    tabs.forEach((tab, index) => {

        // Lấy theo index của panes
        const pane = panes[index];

        // lắng nghe sự kiện
        tab.onclick = function() {
            
            // Tìm thằng nào đang có .active thì xóa active đi
            $('.tab-item.active').classList.remove('active');
            $('.tab-pane.active').classList.remove('active');

            // requestIdleCallback();

            // offsetLeft, offsetWidth: Lấy vị trí bên trái, và chiều ngang của line
            line.style.left = this.offsetLeft + 'px'
            line.style.width = this.offsetWidth + 'px'

            // Khi click vào tab khác, thì cái active chạy sang tag đó
            this.classList.add('active');
            pane.classList.add('active');

        }
    })
