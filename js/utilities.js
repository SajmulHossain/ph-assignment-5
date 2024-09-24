function redirectToBlog(id) {
  document.getElementById(id).addEventListener("click", function () {
    window.location.href = "page/blog.html";
  });
}

function redirectToHome(id) {
  document.getElementById(id).addEventListener("click", function () {
    window.location.href = "../index.html";
  });
}

function btnToggle(clickBtn, secondBtn) {
  clickBtn.classList.remove(
    "font-medium",
    "text-para",
    "border",
    "border-para",
    "bg-transparent"
  );
  clickBtn.classList.add("bg-main", "font-bold");

  secondBtn.classList.remove("bg-main", "font-bold");
  secondBtn.classList.add(
    "font-medium",
    "text-para",
    "border",
    "border-para",
    "bg-transparent"
  );
}

function donation(donatedAmount, input, insufficient, invalid, text) {
  const totalAmount = document.getElementById("totalAmount");
  let totalAmountValue = Number(totalAmount.innerText);

  const inputAmount = document.getElementById(input);
  const inputValue = Number(inputAmount.value);

  const donateAmount = document.getElementById(donatedAmount);
  let donatedAmountValue = Number(donateAmount.innerText);

  const insufficientMsg = document.getElementById(insufficient);
  const invalidMsg = document.getElementById(invalid);
  const remainBalance = totalAmountValue - inputValue;
  const textContent = document.getElementById(text).innerText;
  const modal = document.getElementById('modalPara');

  if (isNaN(inputValue) || inputValue <= 0) {
    invalidMsg.classList.remove("hidden");
    alert('⚠️Invalid Amount');
    return;
  } else {
    invalidMsg.classList.add("hidden");
  }

  if (inputValue > totalAmountValue) {
    insufficientMsg.classList.remove("hidden");
    alert('Insufficient Balance')
    return;
  } else {
    insufficientMsg.classList.add("hidden");
  }

  totalAmount.innerText = remainBalance;
  donatedAmountValue += inputValue;
  donateAmount.innerText = donatedAmountValue;

  inputAmount.value = "";

  document.getElementById("historyBox").classList.add("hidden");

  const date = new Date().toLocaleString();
  const historyEl = document.getElementById("history");

  const div = document.createElement("div");
  div.classList.add("border", "border-para", "p-4", "lg:p-8", "rounded-2xl");

  const h3 = document.createElement("h3");
  h3.classList.add("font-bold", "lg:text-xl", "mb-4");
  h3.innerText = `${inputValue} Taka is donated for ${textContent}`;

  const p = document.createElement("p");
  p.classList.add("font-light", "text-para");

  p.innerText = `Date : ${date}`;

  div.append(h3, p);
  historyEl.appendChild(div);

  modal.innerText = textContent;

  my_modal_1.showModal();
}
