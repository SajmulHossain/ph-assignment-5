redirectToBlog("blogBtn");
redirectToBlog("mobileBlogBtn");

const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");
const donationContainer = document.getElementById("donation");
const historyContainer = document.getElementById("history");

historyBtn.addEventListener("click", function () {
  btnToggle(historyBtn, donationBtn);
  donationContainer.classList.add("hidden");
  historyContainer.classList.remove("hidden");
});

donationBtn.addEventListener("click", function () {
  btnToggle(donationBtn, historyBtn);
  donationContainer.classList.remove("hidden");
  historyContainer.classList.add("hidden");
});





const btnNoakhali = document.getElementById("btnNoakhali");



btnNoakhali.addEventListener("click", function () {
    const totalAmount = document.getElementById('totalAmount');
    let totalAmountValue = parseFloat(totalAmount.innerText);
  const amountNoakhali =document.getElementById("amountNoakhali");
  let amountNoakhaliValue = parseFloat(amountNoakhali.innerText);
  const inputNoakhali = document.getElementById("inputNoakhali");
  const inputNoakhaliValue = parseFloat(inputNoakhali.value);

  const insufficientNoakhali = document.getElementById("insufficientNoakhali");

  if (inputNoakhaliValue > totalAmountValue) {
    insufficientNoakhali.classList.remove("hidden");
    return;
  } else {
    insufficientNoakhali.classList.add("hidden");
  }

  const invalidNoakhali = document.getElementById("invalidNoakhali");

  if (isNaN(inputNoakhaliValue) || inputNoakhaliValue <= 0) {
    invalidNoakhali.classList.remove("hidden");
    return;
  } else {
    invalidNoakhali.classList.add("hidden");
  }

  const remainBalance = totalAmountValue - inputNoakhaliValue;


  totalAmount.innerText = remainBalance;
  console.log(totalAmount.innerText);
 

  amountNoakhaliValue += inputNoakhaliValue;
amountNoakhali.innerText = amountNoakhaliValue;

  inputNoakhali.value = '';
});
