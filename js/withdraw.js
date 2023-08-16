document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    const previousWithdrawAmount = getTextElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    setTextElementValueById('withdraw-total', newWithdrawTotal );

    const previousBalanceTotal = getTextElementValueById('balance-total');

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalanceTotal);

})