var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");
var modalOkayButton = document.querySelector(".modal__action__btn");
var signupForm = document.querySelector(".signup-form");
var signupButton = document.querySelector(".signup_btn");


// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = 'open'; // This will actually overwrite the complete class list
        modal.classList.add("open");
        backdrop.style.display = "block";
        setTimeout(function() {
            backdrop.classList.add("open");
        }, 10);
    });
}

backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
        setTimeout(function() {
            mobileNav.style.display = "none";
        }, 200);
    }
    backdrop.classList.remove("open");
    setTimeout(function() {
        backdrop.style.display = "none";
    }, 200);
}

toggleButton.addEventListener("click", function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.style.display = "block";
    setTimeout(function() {
        mobileNav.classList.add("open");
    }, 10);

    backdrop.style.display = "block";
    setTimeout(function() {
        backdrop.classList.add("open");
    }, 200);
});

// ctaButton.addEventListener('animationstart', function() {
//     console.log("animation started", event);
// });

// ctaButton.addEventListener('animationend', function() {
//     console.log("animation ended", event);
// });

// ctaButton.addEventListener('animationiteration', function() {
//     console.log("animation iteration", event);
// });

signupButton.addEventListener('click', function() {

    backdrop.classList.add('open');
    modal.classList.add('open');
});

modalOkayButton.addEventListener('click', function() {
    console.log("form button clicked");
    backdrop.classList.remove('open');
    modal.classList.remove('open');
});

signupForm.children[10].addEventListener('click', function() {
    var firstName = document.querySelector('#first-name');
    var lastName = document.querySelector('#last-name');
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');

    if (firstName.checkValidity() && lastName.checkValidity() && email.checkValidity() && password.checkValidity()) {
        signupButton.disabled = false;
    }
});