redirectToBlog('blogBtn');
redirectToBlog('mobileBlogBtn');


const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationContainer = document.getElementById('donation');
const historyContainer = document.getElementById('history');

historyBtn.addEventListener('click', function() {
    btnToggle(historyBtn,donationBtn);
    donationContainer.classList.add('hidden');
    historyContainer.classList.remove('hidden');
})


donationBtn.addEventListener('click', function() {
    btnToggle(donationBtn,historyBtn);
    donationContainer.classList.remove('hidden');
    historyContainer.classList.add('hidden');
})