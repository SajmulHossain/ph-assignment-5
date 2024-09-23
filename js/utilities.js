function redirectToBlog(id) {
    document.getElementById(id).addEventListener('click', function() {
        window.location.href = 'page/blog.html';
    })
}

function redirectToHome(id) {
    document.getElementById(id).addEventListener('click', function() {
        window.location.href = '../index.html';
    })
}


function btnToggle(clickBtn, secondBtn) {
    clickBtn.classList.remove('font-medium' ,'text-para' ,'border' ,'border-para' ,'bg-transparent');
    clickBtn.classList.add('bg-main', 'font-bold');

    secondBtn.classList.remove('bg-main', 'font-bold');
    secondBtn.classList.add('font-medium' ,'text-para' ,'border' ,'border-para' ,'bg-transparent');
}


function donation(donatedAmount,input, insufficient,invalid) {
    const totalAmount = document.getElementById("totalAmount");
  let totalAmountValue = Number(totalAmount.innerText);
  

  const inputAmount = document.getElementById(input);
  const inputValue = Number(inputAmount.value);
  

  const donateAmount = document.getElementById(donatedAmount);
  let donatedAmountValue = Number(donateAmount.innerText);
  
  const insufficientMsg = document.getElementById(insufficient);
  const invalidMsg = document.getElementById(invalid);
  const remainBalance = totalAmountValue - inputValue;
  

  if(isNaN(inputValue) || inputValue <= 0) {
    invalidMsg.classList.remove('hidden');
    return;
  } else {
    invalidMsg.classList.add('hidden');
  }

  if(inputValue > totalAmountValue) {
    insufficientMsg.classList.remove('hidden');
    return;
  } else {
    insufficientMsg.classList.add('hidden');
  }

totalAmount.innerText = remainBalance;
console.log(totalAmount.innerText);
donatedAmountValue += inputValue;
donateAmount.innerText = donatedAmountValue;

inputAmount.value = '';
}
