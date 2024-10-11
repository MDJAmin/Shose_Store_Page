
window.addEventListener("load", event => {

// - - - Variable - - - //

    function productHeading() {
        const product = {

            value: 125,
            images: [{
                    img: '../assets/img01.png'
                },
                {
                    img: '../assets/img02.png'
                },
                {
                    img: '../assets/img03.png'
                },
                {
                    img: '../assets/img04.png'
                },
                {
                    img: '../assets/img05.png'
                },
                {
                    img: '../assets/img06.png'
                }
            ]
        }

        const btnAdd = document.querySelector('.btn.add'),
            btnContainer = document.querySelector('.btnContainer'),
            wrapper = document.querySelector('.wrapper'),
            itemNumber = document.querySelector('.itemNumber'),
            shoppingQuantity = document.querySelector('.shoppingQuantity'),
            inputQuantity = document.querySelector('.inputQuantity'),
            plus = document.querySelector('.plus'),
            minus = document.querySelector('.minus'),
            arrowDrop = document.querySelector('.arrowDrop'),
            dropdown = document.querySelector('.dropdown'),
            nav = document.querySelector('nav'),
            error = document.querySelector('.error'),
            shoppingIcon = document.querySelector('.shoppingIcon'),
            shoppingMenu = document.querySelector('.shoppingMenu'),
            emptyCart = document.querySelector('.emptyCart');

        let = priceFinal = document.querySelector('.priceFinal'),
            priceOriginal = document.querySelector('.priceOriginal'),
            discount = null,
            sizeNumber = document.querySelector('.sizeNumber'),
            dropItem = document.querySelectorAll('.dropItem'),
            maxQuantity = 5,
            newMaxQuantity = maxQuantity;

            
            // - - - Events - - - ///


        btnAdd.addEventListener('click', addItem);
        plus.addEventListener("click", plusQuantity);
        minus.addEventListener("click", minusQuantity);
        arrowDrop.addEventListener("click", openDrop);
        shoppingIcon.addEventListener("click", openShoppingCart);

        emptyCart.addEventListener("click", cleanCart);

        dropItem.forEach(function (el) {
            el.addEventListener("click", getSize);
        })

        window.addEventListener("resize", resize);

// - - - Functionality - - - //

        // Fixed Nav 

        window.onscroll = function () {
            if (window.pageYOffset >= 60) {
                nav.classList.add("fixed");
            } else {
                nav.classList.remove("fixed");
            }
        };

        // Change button position on mobile

        function resize() {
            //Button
            if (window.innerHeight > wrapper.offsetHeight) {
                btnContainer.classList.remove('fixedBtn');
            } else {
                btnContainer.classList.add('fixedBtn');
            }
            parallax();
        }

        // Parallax

        function parallax() {
            if (window.innerWidth > 800) {
                var scene = document.querySelectorAll('.scene');
                scene.forEach(pic => {
                    var parallax = new Parallax(pic);
                })
            }
        }

        // Calculate the Discount

        function getDisccount() {
            priceOriginal.innerText = product.value + "€";
            discount = product.value - (product.value * (30 / 100));
            priceFinal.innerText = discount + "€";
        }

        // Calculate the the Prices with discounts

        function getPrice() {

            priceFinal.innerText = discount * inputQuantity.value + "€";
            priceOriginal.innerText = product.value * inputQuantity.value + "€";

            setTimeout(() => {
                priceFinal.classList.remove('anime');
            }, 400);
        }

        // Update the prices with the quantity counter

        function plusQuantity() {
            if (inputQuantity.value < maxQuantity) {
                inputQuantity.value == inputQuantity.value++;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

        function minusQuantity() {
            if (inputQuantity.value > 1) {
                inputQuantity.value == inputQuantity.value--;
                priceFinal.classList.add('anime');
            }
            getPrice();
        }

    }

    productHeading();
});