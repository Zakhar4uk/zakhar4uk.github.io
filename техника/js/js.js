function test() {
    let money = document.getElementById('userMoney').value;
    let age = document.getElementById('userAge').value;
    let text = document.getElementById('text');
    let image = document.getElementById('image');
    
    if(age<20){
        money=money*1.05;
    }
    else if(age>65){
        money=money*1.1;
    }

    if (money >= 300 && money <= 3000) { 
        text.innerText = 'можете купить чайник.';
        image.src = "img/teapot.jpg";
    } else if (money >= 3001 && money <= 10000) {
        text.innerText = 'можете купить пылесос.';
        image.src = "img/cleaner.jpg";
    } else if (money > 10000) {
        text.innerText = 'можете купить холодильник.';
        image.src = "img/fridge.jpg";
    } else {
        text.innerText = 'недостаточно средств.';
        image.src = "";
    }
}