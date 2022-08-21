document.getElementById('btn-deposit').addEventListener('click', function () {
    // 1. get the element by id
    // 2. get the value from the element
    // 3.convert String value to a Number


    const depositInputField = document.getElementById('deposit-field');
    const depositInputString = depositInputField.value;
    const depositInput = parseFloat(depositInputString);

    if (isNaN(depositInput)) {
        alert('invalid amount')
        return;
    }
    depositInputField.value = '';

    // 1. get the element by id
    // 2. get the value from the element
    // 3.convert String value to a Number
    const depositAmountField = document.getElementById('deposit-amount');
    const depositAmountString = depositAmountField.innerText;
    const depositAmount = parseFloat(depositAmountString);

    depositAmountField.innerText = depositInput + depositAmount;



    // 1. get the element by id
    // 2. get the value from the element
    // 3.convert String value to a Number
    const balanceField = document.getElementById('blance-amount');
    const balanceAmountString = balanceField.innerText;
    const balanceAmount = parseFloat(balanceAmountString);
    balanceField.innerText = depositInput + balanceAmount;


})