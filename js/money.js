function getMoneyFromInput(inputId) {
    const inputFieldId = document.getElementById(inputId);
    const inputValueString = inputFieldId.value;
    const inputFieldValue = parseInt(inputValueString);
    // inputFieldId.value = '';
    return inputFieldValue;
}
function getMoneyFromText(textId) {
    const textFieldId = document.getElementById(textId);
    const textValueString = textFieldId.innerText;
    const textFieldValue = parseInt(textValueString);
    // inputFieldId.value = '';
    return textFieldValue;
}

function setMoneyText(textId, value) {
    const tetxFieldId = document.getElementById(textId);
    if (value > 0) {
        tetxFieldId.innerText = value;
    }
}

document.getElementById("calculate-btn").addEventListener("click", function () {
    const totalIncomeField = getMoneyFromInput("total-income-id");
    const totalExpenseField = setMoneyText("total-expense");
    const balanceField = document.getElementById("balance-field");

    const foodField = getMoneyFromInput("food-id");

    const rentField = getMoneyFromInput("rent-id");

    const clothesField = getMoneyFromInput("clothes-id");

    if (foodField <= 0 || rentField <= 0 || clothesField <= 0) {
        alert("negative number is not accepted")
        return;
    }

    const foodRentClothesValue = foodField + rentField + clothesField;
    const remainingTotal = foodRentClothesValue;
    let remainingBalance = totalIncomeField - remainingTotal;
    if (typeof (totalIncomeField) !== "string" && typeof (foodRentClothesValue) !== "string" && totalIncomeField > foodRentClothesValue) {
        setMoneyText("total-expense", remainingTotal);
        setMoneyText("balance-field", remainingBalance);
    }

    else {
        alert("valid number accepted");
    }
})

document.getElementById("balance-save").addEventListener("click", function () {
    const totalRemainingBalance = document.getElementById("remaining-balance");
    const totalIncome = getMoneyFromInput("total-income-id");
    const saveAmount = getMoneyFromText("save-amount");
    const balanceField = document.getElementById("balance-field");
    const savingBalance = document.getElementById("saving-balance");
    if (totalIncome >= 5000) {
        const save = (totalIncome * saveAmount) / 100;
        setMoneyText("saving-balance", save);
        const remainingLastBalance = balanceField.innerText - savingBalance.innerText;
        setMoneyText("remaining-balance", remainingLastBalance);
    }
    else {
        alert("your total income is less then 5000")
    }
})

document.getElementById("reset").addEventListener("click", function () {
    const inputs = document.getElementsByClassName("one");
    for (let input of inputs) {
        input.value = '';
    }
    const texts = document.getElementsByClassName("two");
    for (let text of texts) {
        text.innerText = 0;
    }
})