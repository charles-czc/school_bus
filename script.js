document.addEventListener('DOMContentLoaded', () => {
    // 显示完整日期
    const fullDateElement = document.getElementById('current-full-date');
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');

    // 获取当前完整日期并格式化为 "xxxx年xx月xx日"
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1; // 月份从0开始，需要加1
    let day = now.getDate();

    // 去掉月份和日期的前导零
    month = month < 10 ? month : month;
    day = day < 10 ? day : day;

    const formattedFullDate = `${year}年${month}月${day}日`;
    fullDateElement.textContent = formattedFullDate;

    // 每秒更新时间
    setInterval(() => {
        const now = new Date();

        // 格式化日期：xx月xx日
        let month = now.getMonth() + 1;
        let day = now.getDate();

        // 去掉前导零
        month = month < 10 ? month : month;
        day = day < 10 ? day : day;

        const formattedDate = `${month}月${day}日`;

        // 格式化时间：xx:xx:xx
        const formattedTime = now.toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        });

        // 更新页面上的日期和时间
        dateElement.textContent = formattedDate;
        timeElement.textContent = formattedTime;
    }, 1000);
});
