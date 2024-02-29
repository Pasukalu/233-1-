document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('seatForm');
    const submitButton = document.getElementById('submitButton');

    // 如果需要添加其他逻辑，可以在这里处理表单数据

    // 为表单添加提交事件
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // 阻止表单默认的提交行为

        // 这里可以添加一些提交前的处理逻辑

        // 手动提交表单
        form.submit();
    });

    // 添加按钮颜色渐变逻辑（CSS动画即可，无需JS）
});