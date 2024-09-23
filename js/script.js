redirectToBlog("blogBtn");


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



document.getElementById("btnNoakhali").addEventListener('click', function() {
  donation('amountNoakhali','inputNoakhali','insufficientNoakhali', 'invalidNoakhali','textNoakhali');
})


document.getElementById('btnFeni').addEventListener('click', function() {
  donation('amountFeni','inputFeni','insufficientFeni','invalidFeni','textFeni');
})
document.getElementById('donateBtn').addEventListener('click', function() {
  donation('amount','inputAmount','insufficientMsg','invalidMsg','text')
})

