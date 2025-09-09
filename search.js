// 搜索按钮点击事件
document.getElementById('search').addEventListener('click', () => {
    const subject = document.getElementById('subject').value;
    const type = document.getElementById('type').value;
    const keyword = document.getElementById('keyword').value;
    // 后续可补充：根据筛选条件渲染错题
    console.log(`筛选条件：${subject || '全部学科'}，${type || '全部题型'}，关键词：${keyword}`);
});
