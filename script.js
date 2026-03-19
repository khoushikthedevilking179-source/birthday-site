// ⏳ COUNTDOWN
const targetDate = new Date("March 20, 2026 00:00:00").getTime();

function checkTime() {
    const now = new Date().getTime();

    if (now >= targetDate) {
        document.getElementById("countdownScreen").style.display = "none";
        document.getElementById("lockScreen").style.display = "block";
    } else {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("countdownScreen").style.display = "block";
        startCountdown();
    }
}

function startCountdown() {
    setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
        const minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        const seconds = Math.floor((distance % (1000*60))/1000);

        document.getElementById("countdown").innerHTML =
            hours + "h " + minutes + "m " + seconds + "s";
    }, 1000);
}

// 🔐 PASSWORD
function checkPassword() {
    const password = document.getElementById("passwordInput").value;

    if (password === "Dhi-Dhi123") {
        document.getElementById("lockScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        typingEffect();
    } else {
        alert("Wrong password ❌");
    }
}

// ⌨️ TYPING
const text = "Hey Dhi-Dhi 👋 I made something special for you...";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}

// 🎁 SURPRISE
function startSurprise() {
    document.getElementById("surprise").style.display = "block";

    const music = document.getElementById("music");
    const voice = document.getElementById("voice");

    music.volume = 0;
    music.play();

    let volume = 0;
    const fade = setInterval(() => {
        if (volume < 1) {
            volume += 0.05;
            music.volume = volume;
        } else {
            clearInterval(fade);
        }
    }, 200);

    setTimeout(() => {
        voice.play();
    }, 2000);

    startFireworks();
    createHearts();
}

// 🎆 FIREWORKS
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }, 100);
}

// 💓 HEARTS
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💓";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

// RUN
checkTime();