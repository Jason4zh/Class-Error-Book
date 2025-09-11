// 点击上传区域触发文件选择
const uploadArea = document.getElementById('uploadArea');
const questionImg = document.getElementById('questionImg');
uploadArea.addEventListener('click', () => {
    questionImg.click();
});

// 可选：图片选择后提示（后续可扩展预览功能）
questionImg.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        alert(`已选择图片：${file.name}（大小：${(file.size/1024).toFixed(1)}KB）`);
    }
});

// 提交按钮逻辑（后续补充：收集表单数据并存储）
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
    
});
