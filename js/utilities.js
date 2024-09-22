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
