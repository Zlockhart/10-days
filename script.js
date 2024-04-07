const results = {
    twoWords: ["灵嗅", "灵闻", "灵视", "灵触", "癫人", "致哀", "探囊", "不灭", "穿梭", "离析", "跃迁", "忘忧", "滞空", "传音", "入梦", "巧物", "惊雷", "茂木", "读心", "疯长", "缄默", "蛮力", "治愈", "隐匿", "赝品", "魂迁", "招灾", "显灵", "强运", "化形", "无垢", "硬化", "傀儡", "激发", "原物", "植物", "嫁祸", "因果", "业力", "替罪",  "扩音", "爆燃", "巨化", "液化", "挪移", "贮能", "赤炎", "爆闪", "寻踪", "劲风"],
    threeWords: [ "天行健", "夺心魄", "双生花",  "破万法"],
    fourWords: ["生生不息", "念念不忘，轮回不止"]
};

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

document.getElementById('belief-button').addEventListener('click', function() {
    const displayScreen = document.getElementById('display-screen');
    const resultContainer = document.getElementById('random-result');
    displayScreen.classList.remove("hidden");
    const result = getRandomResult();

    resultContainer.className = ''; // 清除之前的样式类
    resultContainer.classList.add(result.styleClass); // 应用新的样式类
    resultContainer.innerHTML = result.text; // 设置文本内容
});
