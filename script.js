var ClickCount = 0
var TotalClickCount = 0
function getRandomInt(min,max ) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


function GachaTrungThuong () {
    ClickCount++
    const result = getRandomInt(1,100)
    console.log(ClickCount)
    const ClickTimes = document.getElementById('click-count').innerHTML = "Đã bấm " + ClickCount + " lần"
    const Button = document.getElementById('random').style.display = 'none'
    const continuebtn = document.getElementById('Continue').style.display = 'block'
    // const RollingAnim = document.getElementById('result').style.animation = "rotate-vert-center 1s 1"
    // const RollingAnimState = document.getElementById('result').style.animationPlayState = "running"
    if (result < 60) {
        const ResultDisplay = document.getElementById('result').innerHTML = "Chúc bạn may mắn lần sau"
        const ResultDesc = document.getElementById('result-desc').innerHTML = ":<"
        // const ResultDisplayEffect = document.getElementById('result').style.animation = "ColorChangeDuringRoll-Fail 1s"
        const ResultColor = document.getElementById('result').style.color = "red"
    } else if (result > 60 && result < 90) {
        const ResultDisplay = document.getElementById('result').innerHTML = "Chúc mừng bạn đã trúng 1 viên kẹo :D"
        const ResultDisplayEffect = document.getElementById('result').style.animation = "anim-popoutin 3s"
        const ResultColor = document.getElementById('result').style.color = "green"
        // const ResultDisplayEffectPlayState = document.getElementById('result').style.animationPlayState = "paused"
        const ResultDesc = document.getElementById('result-desc').innerHTML = "Bạn cũng may mắn đó :D (tỉ lệ 30%)"
    } else if (result > 90) {
        const ResultDisplay = document.getElementById('result').innerHTML = "Chúc mừng bạn đã trúng 3 viên kẹo :O"
        const ResultDesc = document.getElementById('result-desc').innerHTML = "tỉ lệ trúng chỉ có 10% thôi đấy :O"
        const ResultDisplayEffect = document.getElementById('result').style.animation = "anim-popoutin 3s, color-text-flow-keys 2s linear infinite"
    }


    // sleep(5000).then(() => {
    //     const ResultDisplay = document.getElementById('result').innerHTML = "Kết quả ở đây"
    //     const ResultDesc = document.getElementById('result-desc').innerHTML = ""
    //     const ResultDisplayEffect = document.getElementById('result').style.animation = "color-text-flow-keys 0s 0"
    //     const Button = document.getElementById('random').style.display = 'block'

    //     // sleep(100).then(() => {
    //     //     const ResultColor = document.getElementById('result').style.color = "white"
    //     // })

    // })
    
}

function continuebtn() {
    const ResultDesc = document.getElementById('result-desc').innerHTML = ""
    const ResultDisplay = document.getElementById('result').innerHTML = "Kết quả ở đây"
    const Button = document.getElementById('random').style.display = 'block'
    const continuebtn = document.getElementById('Continue').style.display = 'none'
    const ResultColor = document.getElementById('result').style.color = "white"
    const ResultDisplayEffect = document.getElementById('result').style.animation = "color-text-flow-keys 0s 0"
    }