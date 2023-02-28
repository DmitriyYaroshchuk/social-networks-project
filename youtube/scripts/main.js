const wrapper = document.querySelectorAll(".faq__wrapper");

wrapper.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active");
    })
});

const menu = document.querySelectorAll(".menu__js_open");

menu.forEach(menu => {
    menu.addEventListener('click', () => {
        menu.classList.toggle("active");
    })
});

const button = document.querySelector("#modal__button");
const modal = document.querySelector("#modal");
const body = document.body;

button.addEventListener("click",modalHandler);
function modalHandler(e) {
    e.preventDefault();
    modal.classList.toggle("active");
    button.classList.toggle("active");
    body.classList.toggle("noscroll")
}


const popupSubscribe = document.querySelector('#popupSubscribe');
const popupSubscribeCurtain = document.querySelector('#popupSubscribeCurtain');
const popupSubscribeWrapper = document.querySelector('#popupSubscribeWrapper');
const popupSubscribeButtonMusic = document.querySelector('#popupSubscribeButtonMusic');
const popupSubscribeButtonPremium = document.querySelector('#popupSubscribeButtonPremium');
const popupSubscribeButtonApply = document.querySelector('#popupSubscribeButtonApply');
const popupSubscribeClose = document.querySelector('#popupSubscribeClose');


const popupPaymentWrapper = document.querySelector('#popupPaymentWrapper');
const popupPaymentClose = document.querySelector('#popupPaymentClose');
const popupPaymentButtonCard = document.querySelector('#popupPaymentButtonCard');
const popupPaymentButtonWallet = document.querySelector('#popupPaymentButtonWallet');


const popupPaidWrapper = document.querySelector('#popupPaidWrapper');
const popupPaidClose = document.querySelector('#popupPaidClose');
const popupPaidButton = document.querySelector('#popupPaidButton');

popupSubscribeButtonMusic.addEventListener('click',function () {
    popupSubscribe.classList.add('active')
    popupSubscribeWrapper.classList.add('active')
    body.classList.add('noscroll')
});

popupSubscribeButtonPremium.addEventListener('click',function () {
    popupSubscribe.classList.add('active')
    popupSubscribeWrapper.classList.add('active')
    body.classList.add('noscroll')
});

popupSubscribeClose.addEventListener('click',function () {
    popupSubscribe.classList.remove('active')
    popupSubscribeWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupSubscribeCurtain.addEventListener('click',function () {
    popupSubscribe.classList.remove('active')
    popupSubscribeWrapper.classList.remove('active')
    popupPaymentWrapper.classList.remove('active')
    popupPaidWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupSubscribeButtonApply.addEventListener('click',function () {
    popupSubscribeWrapper.classList.remove('active')
    popupPaymentWrapper.classList.add('active')
});

popupPaymentClose.addEventListener('click', function () {
    popupSubscribe.classList.remove('active')
    popupPaymentWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupPaymentButtonCard.addEventListener('click',function () {
    popupPaymentWrapper.classList.remove('active')
    popupPaidWrapper.classList.add('active')
});

popupPaymentButtonWallet.addEventListener('click',function () {
    popupPaymentWrapper.classList.remove('active')
    popupPaidWrapper.classList.add('active')
});

popupPaidClose.addEventListener('click',function () {
    popupSubscribe.classList.remove('active')
    popupPaidWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupPaidButton.addEventListener('click',function () {
    popupSubscribe.classList.remove('active')
    popupPaidWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});
