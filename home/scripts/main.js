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
const popupSubscribeButton = document.querySelector('#popupSubscribeButton');
const popupSubscribeButtonApply = document.querySelector('#popupSubscribeButtonApply');
const popupSubscribeClose = document.querySelector('#popupSubscribeClose');


const popupPaymentWrapper = document.querySelector('#popupPaymentWrapper');
const popupPaymentClose = document.querySelector('#popupPaymentClose');
const popupPaymentButtonCard = document.querySelector('#popupPaymentButtonCard');
const popupPaymentButtonWallet = document.querySelector('#popupPaymentButtonWallet');


const popupPaidWrapper = document.querySelector('#popupPaidWrapper');
const popupPaidClose = document.querySelector('#popupPaidClose');
const popupPaidButton = document.querySelector('#popupPaidButton');

popupSubscribeButton.addEventListener('click',function () {
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



const popupLogin = document.querySelector('#popupLogin');
const popupLoginCurtain = document.querySelector('#popupLoginCurtain');
const popupLoginWrapper = document.querySelector('#popupLoginWrapper');
const popupLoginButton = document.querySelector('#popupLoginButton');
const popupLoginButtonModal = document.querySelector('#popupLoginButtonModal');
const popupLoginSignUp = document.querySelector('#popupLoginSignUp');
const popupLoginClose = document.querySelector('#popupLoginClose');
const popupLoginCreate = document.querySelector('#popupLoginCreate');
const popupLoginButtonRetrieve = document.querySelector('#popupLoginButtonRetrieve');
const popupLoginButtonEnter = document.querySelector('#popupLoginButtonEnter');


popupLoginButton.addEventListener('click',function () {
    popupLogin.classList.add('active')
    popupLoginWrapper.classList.add('active')
    body.classList.add('noscroll')
});

popupLoginButtonModal.addEventListener('click',function () {
    popupLogin.classList.add('active')
    popupLoginWrapper.classList.add('active')
    modal.classList.remove('active')
    button.classList.remove('active')
    body.classList.add('noscroll')
});

popupLoginSignUp.addEventListener('click',function () {
    popupLogin.classList.add('active')
    popupCreateWrapper.classList.add('active')
    modal.classList.remove('active')
    button.classList.remove('active')
    body.classList.add('noscroll')
});

popupLoginClose.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupLoginWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupLoginCurtain.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupLoginWrapper.classList.remove('active')
    popupCreateWrapper.classList.remove('active')
    popupVerificationWrapper.classList.remove('active')
    popupFinishWrapper.classList.remove('active')
    popupRetrieveWrapper.classList.remove('active')
    popupCodeWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupLoginButtonEnter.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupLoginWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});


const popupCreateWrapper = document.querySelector('#popupCreateWrapper');
const popupCreateClose = document.querySelector('#popupCreateClose');
const popupCreateButtonReg = document.querySelector('#popupCreateButtonReg');
const popupCreateEnter = document.querySelector('#popupCreateEnter');

popupLoginCreate.addEventListener('click',function () {
    popupLoginWrapper.classList.remove('active')
    popupCreateWrapper.classList.add('active')
});

popupCreateClose.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupCreateWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupCreateEnter.addEventListener('click',function () {
    popupCreateWrapper.classList.remove('active')
    popupLoginWrapper.classList.add('active')
});

popupCreateButtonReg.addEventListener('click',function () {
    popupCreateWrapper.classList.remove('active')
    popupVerificationWrapper.classList.add('active')
});

const popupVerificationWrapper = document.querySelector('#popupVerificationWrapper');
const popupVerificationClose = document.querySelector('#popupVerificationClose');
const popupVerificationButtonReg = document.querySelector('#popupVerificationButtonReg');

popupVerificationClose.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupVerificationWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupVerificationButtonReg.addEventListener('click',function () {
    popupVerificationWrapper.classList.remove('active')
    popupFinishWrapper.classList.add('active')
});

const popupFinishWrapper = document.querySelector('#popupFinishWrapper');
const popupFinishClose = document.querySelector('#popupFinishClose');
const popupFinishButton = document.querySelector('#popupFinishButton');

popupFinishClose.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupFinishWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupFinishButton.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupFinishWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

const popupRetrieveWrapper = document.querySelector('#popupRetrieveWrapper');
const popupRetrieveClose = document.querySelector('#popupRetrieveClose');
const popupRetrieveButton = document.querySelector('#popupRetrieveButton');


popupLoginButtonRetrieve.addEventListener('click',function () {
    popupLoginWrapper.classList.remove('active')
    popupRetrieveWrapper.classList.add('active')
});

popupRetrieveClose.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupRetrieveWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupRetrieveButton.addEventListener('click',function () {
    popupRetrieveWrapper.classList.remove('active')
    popupCodeWrapper.classList.add('active')
});


const popupCodeWrapper = document.querySelector('#popupCodeWrapper');
const popupCodeClose = document.querySelector('#popupCodeClose');
const popupCodeButton = document.querySelector('#popupCodeButton');

popupCodeClose.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupCodeWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupCodeButton.addEventListener('click',function () {
    popupCodeWrapper.classList.remove('active')
    popupNewWrapper.classList.add('active')
});


const popupNewWrapper = document.querySelector('#popupNewWrapper');
const popupNewClose = document.querySelector('#popupNewClose');
const popupNewButton = document.querySelector('#popupNewButton');

popupNewClose.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupNewWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});

popupNewButton.addEventListener('click',function () {
    popupLogin.classList.remove('active')
    popupNewWrapper.classList.remove('active')
    body.classList.remove('noscroll')
});