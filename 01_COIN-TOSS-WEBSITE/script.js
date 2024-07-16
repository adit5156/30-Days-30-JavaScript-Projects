const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
const loader = document.querySelector("#loader");


btn.addEventListener("click", (e)=> {
    // const random = Math.round(Math.random());
    // if(random === 0) {
    //     result.innerText = "Heads";
    // }
    // else {
    //     result.innerText = "Tails";
    // }

    const tossArray = ["Heads", "Tails"];
    const finalResult = tossArray[Math.round(Math.random())];
    console.log(finalResult);

    if(finalResult.includes("Heads")) {
        result.innerText = tossArray[0];
    }
    else {
        result.innerText = tossArray[1];
    }

    result.style.display = "none";
    btn.style.display = "none";
    loader.style.display = "flex";

    setTimeout(()=> {
        result.style.display = "block";
        btn.style.display = "flex";
        loader.style.display = "none";
        btn.innerText = "Toss Again";
    }, 1000);
});