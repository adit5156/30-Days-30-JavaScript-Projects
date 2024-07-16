const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");
const btnBody = document.querySelector(".btnBody");

noBtn.addEventListener("mouseover", (e)=> {
    if(btnBody.style.cssText.includes("flex-direction: column-reverse")) {
        btnBody.style.cssText = "flex-direction: column";
    }
    else {
        btnBody.style.cssText = "flex-direction: column-reverse";
    }
});

yesBtn.addEventListener("click", (e)=> {
    window.open("https://www.youtube.com/@webdevdost")
})