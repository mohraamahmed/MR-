function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");

    // إعداد حجم وموضع النجمة بشكل عشوائي
    const size = Math.random() * 3 + 2 + "px";
    star.style.width = size;
    star.style.height = size;
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%"; // تصحيح 'let' إلى 'left'

    document.body.appendChild(star);

    // إزالة النجمة بعد فترة زمنية محددة
    setTimeout(() => {
        star.remove();
    }, 3000);
}

// توليد النجوم بشكل متكرر
setInterval(createStar, 99);
