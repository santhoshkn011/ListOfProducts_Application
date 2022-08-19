window.addEventListener('DOMContentLoaded', (event) => {
    validateName();
    validateQuantity();

});


function validateName() {
    const vegetable = document.querySelector('#vegetable');
    const vegError = document.querySelector('.veg-error');
    vegetable.addEventListener('input', function () {
        if (vegetable.value.length == 0) {
            vegError.textContent = "";
            return;
        }
        try {
            (new ListData()).vegetable = vegetable.value;
            vegError.textContent = "";
        } catch (e) {
            vegError.textContent = e;
        }
    });
    const fruits = document.querySelector('#fruits');
    const frError = document.querySelector('.fruits-error');
    fruits.addEventListener('input', function () {
        if (fruits.value.length == 0) {
            frError.textContent = "";
            return;
        }
        try {
            (new ListData()).fruits = fruits.value;
            frError.textContent = "";
        } catch (e) {
            frError.textContent = e;
        }
    });
    const others = document.querySelector('#others');
    const otherError = document.querySelector('.others-error');
    others.addEventListener('input', function () {
        if (others.value.length == 0) {
            otherError.textContent = "";
            return;
        }
        try {
            (new ListData()).others = others.value;
            otherError.textContent = "";
        } catch (e) {
            otherError.textContent = e;
        }
    });
}

function validateQuantity() {
    const vegetableQ = document.querySelector('#vegetableQuantity');
    const vegError = document.querySelector('.vegQ-error');
    vegetableQ.addEventListener('input', function () {
        if (vegetableQ.value.length == 0) {
            vegError.textContent = "";
            return;
        }
        try {
            (new ListData()).vegetableQuantity = vegetableQuantity.value;
            vegError.textContent = "";
        } catch (e) {
            vegError.textContent = e;
        }
    });
    const fruitsQ = document.querySelector('#fruitsQuantity');
    const frError = document.querySelector('.fruitsQ-error');
    fruitsQ.addEventListener('input', function () {
        if (fruitsQ.value.length == 0) {
            frError.textContent = "";
            return;
        }
        try {
            (new ListData()).fruitsQuantity = fruitsQuantity.value;
            frError.textContent = "";
        } catch (e) {
            frError.textContent = e;
        }
    });

    const othersQ = document.querySelector('#othersQuantity');
    const otherError = document.querySelector('.othersQ-error');
    othersQ.addEventListener('input', function () {
        if (othersQ.value.length == 0) {
            otherError.textContent = "";
            return;
        }
        try {
            (new ListData()).othersQuantity = othersQuantity.value;
            otherError.textContent = "";
        } catch (e) {
            otherError.textContent = e;
        }
    });
    
}


