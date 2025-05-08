// Password entry function
function checkCode() {
    let code = document.getElementById("code-input").value;
    if (code === "15") {
        document.getElementById("entry-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        alert("Wrong code! Try again.");
    }
}

// Scroll effect for blurring and focusing images
window.addEventListener("scroll", function () {
    let images = document.querySelectorAll(".scroll-image");

    images.forEach((img) => {
        let rect = img.getBoundingClientRect();
        let windowHeight = window.innerHeight;
        
        if (rect.top > windowHeight * 0.3 && rect.top < windowHeight * 0.7) {
            img.classList.add("focused");
            img.classList.remove("left", "right");
        } else if (rect.top < windowHeight * 0.3) {
            img.classList.add("left");
            img.classList.remove("focused", "right");
        } else {
            img.classList.add("right");
            img.classList.remove("focused", "left");
        }
    });
});
