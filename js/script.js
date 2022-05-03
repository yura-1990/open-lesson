class Bounce {
    constructor(options) {
        this.item = document.querySelector(options.item);
        this.speed = options.speed;
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        this.velocityX = 1;
        this.velocityY = 1;
        if (options.borderColor && options.borderColor === 'random') {
            this.item.style.transition = `border 2s`
            setInterval(() => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                this.item.style.borderColor = `#${randomColor}`
            }, 3000);
        }
        if (options.backgroundColor && options.backgroundColor === 'random') {
            setInterval(() => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                this.item.style.transition = `background-color 3s`
                this.item.style.backgroundColor = `#${randomColor}`
            }, 3000);
        }
        setInterval(() => {
            let rect = this.item.getBoundingClientRect()
            let left = rect.x
            let top = rect.y
            if (left + rect.width >= this.width || left <= 0) {
                this.velocityX = -this.velocityX
            }
            if (top + rect.height >= this.height || top <= 0) {
                this.velocityY = -this.velocityY
            }
            this.item.style.left = rect.x + this.velocityX + 'px'
            this.item.style.top = rect.y + this.velocityY + 'px'
        }, this.speed)
    }
}

const greenCircle = new Bounce({
    item: '.web-programming__green-circle',
    speed: 10,
    borderColor: 'random',
})
const whiteBgCircle = new Bounce({
    item: '.web-programming__white-bg-circle',
    speed: 5,
    backgroundColor: 'random'
})
const blueBgCircle = new Bounce({
    item: '.web-programming__blue-bg-circle',
    speed: 10
})
const blueCircle = new Bounce({
    item: '.web-programming__blue-circle',
    speed: 15
})
////////////////////////////////////////////////
const longLine = document.querySelector('.web-programming__long-line');
setInterval(() => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    longLine.style.borderColor = `#${randomColor}`
}, 3000);
////////////////////////////////////////////////////////


let webProgramming = document.querySelector('.web-programming');
let whyNeed = document.querySelector('.why-need');
let salary = document.querySelector('.salary');
let freelance = document.querySelector('.freelance');
let freelance2 = document.querySelector('.freelance2');
let webPartsView = document.querySelector('.web-parts-view');
let webParts = document.querySelector('.web-parts');
let languages = document.querySelector('.languages');
let developing = document.querySelector('.developing');
let webPartsInfo = document.querySelector('.web-parts-info');
let advantages = document.querySelector('.advantages');
let target = document.querySelector('.target');
let questions = document.querySelector('.questions');
let counter = 1;

const countTime = document.querySelector('.questions__timer');
const countTimeMinute = document.querySelector('.questions__timer-minute');
const countTimeSecond = document.querySelector('.questions__timersecond');
let interval
countTime.innerHTML = '10:00'
function startTimer(duration, display) {
        clearInterval(interval)
        display.innerHTML == '10:00'
        let timer = duration, minutes, seconds;
        interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            if ((minutes + ":" + seconds) != countTime.innerHTML) {
                display.textContent = minutes + ":" + seconds;
            }
            if (--timer < 0) {
                timer = duration;
            }
            if (display.innerHTML == '00:00') {
                clearInterval(interval)
            }
        }, 10);
}

document.onkeydown = e => {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        counter += 1
        if(counter >= 13){
            counter =13
        }
    }
    if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        counter -= 1
        if (counter <= 1) {
            counter = 1
        }
    }
    if (counter == 1) {
        whyNeed.classList.remove('active')
        webProgramming.classList.add('active')
    }
    if (counter == 2) {
        webProgramming.classList.remove('active')
        salary.classList.remove('active')
        whyNeed.classList.add('active')
    }
    if (counter == 3) {
        whyNeed.classList.remove('active')
        freelance.classList.remove('active')
        salary.classList.add('active')
    }
    if (counter == 4) {
        salary.classList.remove('active')
        freelance2.classList.remove('active')
        freelance.classList.add('active')
    }
    if (counter == 5) {
        freelance.classList.remove('active')
        webPartsView.classList.remove('active')
        freelance2.classList.add('active')
    }
    if (counter == 6) {
        freelance2.classList.remove('active')
        webParts.classList.remove('active')
        webPartsView.classList.add('active')
    }
    if (counter == 7) {
        webPartsView.classList.remove('active')
        languages.classList.remove('active')
        webParts.classList.add('active')
    }
    if (counter == 8) {
        webParts.classList.remove('active')
        developing.classList.remove('active')
        languages.classList.add('active')
    }
    if (counter == 9) {
        languages.classList.remove('active')
        webPartsInfo.classList.remove('active')
        developing.classList.add('active')
    }
    if (counter == 10) {
        developing.classList.remove('active')
        advantages.classList.remove('active')
        webPartsInfo.classList.add('active')
    }
    if (counter == 11) {
        webPartsInfo.classList.remove('active')
        target.classList.remove('active')
        advantages.classList.add('active')
    }
    if (counter == 12) {
        advantages.classList.remove('active')
        questions.classList.remove('active')
        target.classList.add('active')
        clearInterval(interval)
    }
    if (counter == 13) {
        target.classList.remove('active')
        questions.classList.add('active')

    }
    if (counter == 13) {
        countTime.innerHTML = '10:00'
        setTimeout(() => {
            let fiveMinutes = 60 * 10,
                display = document.querySelector('.questions__timer');
            startTimer(fiveMinutes, display);
        }, 1500)
    }
}
///////////////////////////////////////////////////////////////
