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
  const totalAmount = document.getElementById("totalAmount");
  let totalAmountValue = Number(totalAmount.innerText);
  const amountNoakhali = document.getElementById("amountNoakhali");
  let amountNoakhaliValue = Number(amountNoakhali.innerText);
  const inputNoakhali = document.getElementById("inputNoakhali");
  const inputNoakhaliValue = Number(inputNoakhali.value);
  const insufficientNoakhali = document.getElementById("insufficientNoakhali");
  const invalidNoakhali = document.getElementById("invalidNoakhali");
  
  if (isNaN(inputNoakhaliValue) || inputNoakhaliValue <= 0) {
    invalidNoakhali.classList.remove("hidden");
    return;
  } else {
    invalidNoakhali.classList.add("hidden");
  }
  
  if (inputNoakhaliValue > totalAmountValue) {
    insufficientNoakhali.classList.remove("hidden");
    return;
  } else {
    insufficientNoakhali.classList.add("hidden");
  }
  
  const remainBalance = totalAmountValue - inputNoakhaliValue;
  totalAmount.innerText = remainBalance;


  amountNoakhaliValue += inputNoakhaliValue;
  amountNoakhali.innerText = amountNoakhaliValue;

  inputNoakhali.value = "";
});

// btnNoakhali.addEventListener('click', function() {
//   donation('amountNoakhali','inputNoakhali','insufficientNoakhali', 'invalidNoakhali');
// })