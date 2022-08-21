document.getElementById('btn-Withdraw').addEventListener('click', function () {
    // 1. get the element by id
    // 2. get the value from the element
    // 3.convert String value to a Number

    const withdrawInputField = document.getElementById('withdraw-field');
    const withdrawInputString = withdrawInputField.value;
    const withdrawInput = parseFloat(withdrawInputString);

    withdrawInputField.value = '';
    if (isNaN(withdrawInput)) {
        alert('invalid amount')
        return;
    }

    // 1. get the element by id
    // 2. get the value from the element
    // 3.convert String value to a Number
    const withdrawAmountField = document.getElementById('withdraw-amount')
    const withdrawAmountString = withdrawAmountField.innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);



    // 1. get the element by id
    // 2. get the value from the element
    // 3.convert String value to a Number
    const balanceField = document.getElementById('blance-amount');
    const balanceAmountString = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountString);

    if (withdrawInput > balanceAmount) {
        alert('you do not have enough cash to with');
        return;
    }

    withdrawAmountField.innerText = withdrawInput + withdrawAmount;
    balanceField.innerText = balanceAmount - withdrawInput;


})