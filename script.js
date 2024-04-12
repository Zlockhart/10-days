const results = {
    twoWords: ["灵嗅", "灵闻", "灵视", "灵触", "癫人", "致哀", "探囊", "不灭", "穿梭", "离析", "跃迁", "忘忧", "滞空", "传音", "入梦", "巧物", "惊雷", "茂木", "读心", "疯长", "缄默", "蛮力", "治愈", "隐匿", "赝品", "魂迁", "招灾", "显灵", "强运", "化形", "无垢", "硬化", "傀儡", "激发", "原物", "植物", "嫁祸", "因果", "业力", "替罪",  "扩音", "爆燃", "巨化", "液化", "挪移", "贮能", "赤炎", "爆闪", "寻踪", "劲风" , "嫁接"],
    threeWords: [ "天行健", "夺心魄", "双生花",  "破万法"],
    fourWords: ["生生不息", "万物生灵"]
};


document.addEventListener('DOMContentLoaded', () => {
    // 设置每个元素逐渐出现的时间
    setTimeout(() => {
        document.getElementById('sub-message1').style.opacity = 1;
    }, 1000); // 1秒后显示第一条信息

    setTimeout(() => {
        document.getElementById('sub-message2').style.opacity = 1;
    }, 2000); // 2秒后显示第二条信息

    setTimeout(() => {
        document.getElementById('final-message1').style.opacity = 1;
    }, 3000); // 3秒后显示第三条信息

    setTimeout(() => {
        document.getElementById('final-message2').style.opacity = 1;
    }, 4000); // 4秒后显示第四条信息

    // 最后显示信念按钮
    setTimeout(() => {
        document.getElementById('belief-button').style.opacity = 1;
    }, 5000); // 5秒后显示按钮
    
    // 天按钮
    setTimeout(() => {
        document.getElementById('heaven-button').style.opacity = 1; // 确保天按钮也有透明度变化的CSS规则
    }, 5000); // 与信念按钮同时出现

    // 确保这部分代码包含在DOMContentLoaded事件的回调函数中

    document.getElementById('heaven-button').addEventListener('click', () => {
        const inputText = document.getElementById('input-text');
        inputText.classList.remove('hidden'); // 移除hidden类
        inputText.style.opacity = 1; // 设置透明度为1，使其可见
        inputText.focus(); // 将焦点设置到输入框
    });

    document.getElementById('belief-button').addEventListener('click', () => {
    // 隐藏所有消息
    document.getElementById('container').style.visibility = 'hidden';

    const heavenList = ["天龙-LOCKHART", "天狗-安洁"];


document.getElementById('input-text').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const input = e.target.value.trim(); // 获取输入值并去除两端空白字符
        // 检查输入是否在heavenList列表中
        if (heavenList.includes(input)) {
            // 如果输入匹配，显示10个随机结果
            const displayScreen = document.getElementById('display-screen');
            displayScreen.innerHTML = ''; // 清空当前显示内容
            displayScreen.style.visibility = 'visible';
            displayScreen.style.opacity = 1;
            for (let i = 0; i < 10; i++) {
                const result = getRandomResult();
                // 为了保持显示的内容不超出display-screen，添加的元素可能需要一定的样式调整
                const div = document.createElement('div');
                div.textContent = result.text;
                div.className = result.styleClass; // 应用之前定义好的大小样式
                displayScreen.appendChild(div);
            }
        } else {
            // 如果输入不匹配，刷新网页
            location.reload();
        }
    }
});

    // 显示带边框的显示屏
    const displayScreen = document.getElementById('display-screen');
    displayScreen.style.visibility = 'visible';
    displayScreen.style.opacity = 1;

    // 显示随机结果
    const result = getRandomResult();
    const resultContainer = document.getElementById('random-result');
    resultContainer.className = result.styleClass;
    resultContainer.innerHTML = result.text;

    // 获取按钮并修改其位置和文本内容
    const beliefButton = document.getElementById('belief-button');
    beliefButton.classList.add('bigger-button');
    beliefButton.style.fontSize = '2em'; // 或者使用 '24px', '150%', 等
    beliefButton.style.padding = '15px 30px'; // 增加内边距
    beliefButton.style.position = 'absolute';
    beliefButton.style.top = 'auto';
    beliefButton.style.bottom = '0';
    beliefButton.style.left = '50%';
    beliefButton.style.transform = 'translateX(-50%)';
    beliefButton.style.visibility = 'visible';

    // 更新按钮文本
    beliefButton.textContent = '封印契机，重塑回响';
    });
});


function getRandomResult() {
    let random = Math.random();
    let selectedText, styleClass;

    if (random < 0.89) {
        // 如果是二字词
        selectedText = results.twoWords[Math.floor(Math.random() * results.twoWords.length)];
        styleClass = 'small'; // 应用小字体大小
    } else if (random < 0.99) {
        // 如果是三字词
        selectedText = results.threeWords[Math.floor(Math.random() * results.threeWords.length)];
        styleClass = 'medium'; // 应用中等字体大小
    } else {
        // 如果是四字词
        selectedText = results.fourWords[Math.floor(Math.random() * results.fourWords.length)];
        styleClass = 'large'; // 应用大字体大小
    }

    let messagePrefix = styleClass === 'large' ? "我看见了「" : "我听到了「";
    let messageSuffix = styleClass === 'large' ? "」的激荡" : "」的回响";
    return { text: messagePrefix + selectedText + messageSuffix, styleClass };
}
