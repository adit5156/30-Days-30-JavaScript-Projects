const form = document.querySelector("form");
const expenseBtn = document.querySelector("#expenseBtn");
const incomeBtn = document.querySelector("#incomeBtn");
const transactionParent = document.querySelector("#transactionParent");
const amount = document.querySelector("#amount");
const details = document.querySelector("#details");
const balance = document.querySelector("#balance");
const incomeDisplay = document.querySelector("#incomeDisplay");
const expenseDisplay = document.querySelector("#expenseDisplay");

let whichBtn = "";

expenseBtn.addEventListener("click", (e) => {
    whichBtn = "Expense Button";
});

incomeBtn.addEventListener("click", (e) => {
    whichBtn = "Income Button";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(whichBtn);
    console.log(amount.value);
    console.log(details.value);
    if(whichBtn === "Expense Button") {
        const transaction = document.createElement("h2");
        transaction.innerText = `Expense ${amount.value} by ${details.value}`;
        transaction.className = "border-2 border-red-500 rounded-xl px-5 py-2 mt-2";
        transactionParent.appendChild(transaction);
        balance.innerText = Number(balance.innerText) - Number(amount.value);
        expenseDisplay.innerText = Number(expenseDisplay.innerText) + Number(amount.value);
    }
    else if(whichBtn === "Income Button") {
        const transaction = document.createElement("h2");
        transaction.innerText = `Income ${amount.value} by ${details.value}`;
        transaction.className = "border-2 border-green-500 rounded-xl px-5 py-2 mt-2";
        transactionParent.appendChild(transaction);
        balance.innerText = Number(balance.innerText) + Number(amount.value);
        incomeDisplay.innerText = Number(incomeDisplay.innerText) + Number(amount.value);
    }
});