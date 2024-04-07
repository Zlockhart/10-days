const results = {
    twoWords: ["灵嗅", "灵闻", "灵视", "灵触", "癫人", "致哀", "探囊", "不灭", "穿梭", "离析", "跃迁", "忘忧", "滞空", "传音", "入梦", "巧物", "惊雷", "茂木", "读心", "疯长", "缄默", "蛮力", "治愈", "隐匿", "赝品", "魂迁", "招灾", "显灵", "强运", "化形", "无垢", "硬化", "傀儡", "激发", "原物", "植物", "嫁祸", "因果", "业力", "替罪",  "扩音", "爆燃", "巨化", "液化", "挪移", "贮能", "赤炎", "爆闪", "寻踪", "劲风"],
    threeWords: [ "天行健", "夺心魄", "双生花",  "破万法"],
    fourWords: ["生生不息", "念念不忘，轮回不止"]
};


document.addEventListener('DOMContentLoaded', () => {
    // 初始只显示主消息
    document.getElementById('sub-message1').style.opacity = 0;
    document.getElementById('sub-message2').style.opacity = 0;
    document.getElementById('final-message1').style.opacity = 0;
    document.getElementById('final-message2').style.opacity = 0;
    document.getElementById('belief-button').style.opacity = 0;
    document.getElementById('display-screen').style.opacity = 0;
    
    // 顺序显示消息
    setTimeout(() => {
        document.getElementById('sub-message1').style.opacity = 1;
    }, 1000); // 1秒后显示

    setTimeout(() => {
        document.getElementById('sub-message2').style.opacity = 1;
    }, 2000); // 2秒后显示

    setTimeout(() => {
        document.getElementById('final-message1').style.opacity = 1;
    }, 3000); // 3秒后显示

    setTimeout(() => {
        document.getElementById('final-message2').style.opacity = 1;
    }, 4000); // 4秒后显示

    // 最后显示按钮
    setTimeout(() => {
        document.getElementById('belief-button').style.opacity = 1;
    }, 5000); // 5秒后显示按钮

    document.getElementById('belief-button').addEventListener('click', () => {
        // 点击按钮后隐藏容器和按钮，显示显示屏
        document.getElementById('container').style.display = 'none';

        const displayScreen = document.getElementById('display-screen');
        displayScreen.style.opacity = 1;
        displayScreen.style.zIndex = 1000; // 确保显示屏在最上层

        // 显示随机结果
        let result = getRandomResult();
        let resultContainer = document.getElementById('random-result');
        resultContainer.className = result.styleClass; // 设置样式类
        resultContainer.innerHTML = result.text; // 设置文本内容
    });
});


function getRandomResult() {
    let random = Math.random();
    let selectedText;
    let styleClass;

    if (random < 0.89) {
        selectedText = results.twoWords[Math.floor(Math.random() * results.twoWords.length)];
        styleClass = "small";
    } else if (random < 0.99) {
        selectedText = results.threeWords[Math.floor(Math.random() * results.threeWords.length)];
        styleClass = "medium";
    } else {
        selectedText = results.fourWords[Math.floor(Math.random() * results.fourWords.length)];
        styleClass = "large";
    }

    let messagePrefix = styleClass === "large" ? "我看见了「" : "我听见了「";
    let messageSuffix = styleClass === "large" ? "」的激荡" : "」的回响";
    return { text: messagePrefix + selectedText + messageSuffix, styleClass };
}
