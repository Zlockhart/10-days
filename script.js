const results = {
    twoWords: ["灵嗅", "灵闻", "灵视", "灵触", "癫人", "致哀", "探囊", "不灭", "穿梭", "离析", "跃迁", "忘忧", "滞空", "传音", "入梦", "巧物", "惊雷", "茂木", "读心", "疯长", "缄默", "蛮力", "治愈", "隐匿", "赝品", "魂迁", "招灾", "显灵", "强运", "化形", "无垢", "硬化", "傀儡", "激发", "原物", "植物", "嫁祸", "因果", "业力", "替罪", "扩音", "爆燃", "巨化", "液化", "挪移", "贮能", "赤炎", "爆闪", "寻踪", "劲风", "嫁接"],
    threeWords: ["天行健", "夺心魄", "双生花", "破万法"],
    fourWords: ["生生不息", "万物生灵"]
};

const heavenList = ["天龙-LOCKHART", "天狗-安洁"];

document.addEventListener('DOMContentLoaded', () => {
    // 初始化代码，设置元素逐渐出现的时间
    setTimeout(() => {
        document.getElementById('sub-message1').style.opacity = 1;
    }, 1000);

    setTimeout(() => {
        document.getElementById('sub-message2').style.opacity = 1;
    }, 2000);

    setTimeout(() => {
        document.getElementById('final-message1').style.opacity = 1;
    }, 3000);

    setTimeout(() => {
        document.getElementById('final-message2').style.opacity = 1;
    }, 4000);

    setTimeout(() => {
        document.getElementById('belief-button').style.opacity = 1;
        document.getElementById('heaven-button').style.opacity = 1;
    }, 5000);

    // 点击信念按钮事件处理
    document.getElementById('belief-button').addEventListener('click', handleBeliefButtonClick);

    // 点击天按钮事件处理
    document.getElementById('heaven-button').addEventListener('click', handleHeavenButtonClick);

    // 处理输入框回车事件
    document.getElementById('input-text').addEventListener('keypress', handleInputKeypress);
});

function handleBeliefButtonClick() {
    document.getElementById('container').style.visibility = 'hidden';
    showRandomResult();
}

function handleHeavenButtonClick() {
    const inputText = document.getElementById('input-text');
    if (inputText.classList.contains('hidden')) {
        // 如果输入框隐藏，则显示输入框
        inputText.classList.remove('hidden');
        inputText.style.opacity = 1;
        inputText.focus();
    } else {
        // 否则，视为尝试提交文本
        submitHeavenInput(inputText.value.trim());
    }
}

function handleInputKeypress(e) {
    if (e.key === 'Enter') {
        submitHeavenInput(e.target.value.trim());
    }
}

function submitHeavenInput(input) {
    if (heavenList.includes(input)) {
        showRandomResult(10); // 显示10个随机结果
    } else {
        location.reload();
    }
}

function showRandomResult(count = 1) {
    const displayScreen = document.getElementById('display-screen');
    displayScreen.innerHTML = '';
    displayScreen.style.visibility = 'visible';
    displayScreen.style.opacity = 1;

    for (let i = 0; i < count; i++) {
        const result = getRandomResult();
        const div = document.createElement('div');
        div.textContent = result.text;
        div.className = result.styleClass;
        displayScreen.appendChild(div);
    }
}

function getRandomResult() {
    let random = Math.random();
    let selectedText, styleClass;

    if (random < 0.89) {
        selectedText = results.twoWords[Math.floor(Math.random() * results.twoWords.length)];
        styleClass = 'small';
    } else if (random < 0.99) {
        selectedText = results.threeWords[Math.floor(Math.random() * results.threeWords.length)];
        styleClass = 'medium';
    } else {
        selectedText = results.fourWords[Math.floor(Math.random() * results.fourWords.length)];
        styleClass = 'large';
    }

    let messagePrefix = styleClass === 'large' ? "我看见了「" : "我听到了「";
    let messageSuffix = styleClass === 'large' ? "」的激荡" : "」的回响";
    return { text: messagePrefix + selectedText + messageSuffix, styleClass };
}
