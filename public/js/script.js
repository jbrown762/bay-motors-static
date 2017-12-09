$(document).ready(function () {
    $('#nav').load("../templates/nav.html");

    function resizeSubsections(newHeight) {
        var newSubsectionHeight = newHeight || Math.max($('#subsection1').height(), $('#subsection2').height());

        $('#subsection1').height(newSubsectionHeight);
        $('#subsection2').height(newSubsectionHeight);
    }

    resizeSubsections();

    $(window).resize(function () {
        if ($(window).width() > 980) {
            resizeSubsections();
        } else {
            resizeSubsections("auto");
        }

    });

    $("[name='btnInventory']").on('click', function () {
        window.open('http://w1w024.financeexpress.com/clients/baymotors/inventory_list.aspx', '_blank');
    });




    // var isSubmitClicked = false;
    // var form = document.forms["contactForm"];
    // var inputs = {
    //     name: form["name"],
    //     subject: form["subject"],
    //     email: form["email"],
    //     message: form["message"]
    // }

    // function addInputListener(input) {
    //     var inputEl = inputs[input];
    //     inputEl.addEventListener("input", function (event) {
    //         checkValidity(input);

    //     }, false);
    // };

    // function checkValidity(input) {
    //     var inputEl = inputs[input];
    //     if (isSubmitClicked) {
    //         if (inputEl.validity.valid) {
    //             console.log('removing error')
    //             $(inputEl).removeClass('has-error');
    //             $('#' + input + '-error-required').addClass('d-none')
    //             return true;
    //         } else {
    //             $(inputEl).addClass('has-error');
    //             $('#' + input + '-error-required').removeClass('d-none')
    //             return false;
    //         }
    //     }
    // };

    // for (input in inputs) {
    //     addInputListener(input);
    // };

    // form.addEventListener("submit", function (event) {
    //     console.log("clicked")
    //     event.preventDefault();

    //     var isFormValid = true;
    //     isSubmitClicked = true;

    //     for (input in inputs) {
    //         if (!checkValidity(input)) {
    //             isFormValid = false;
    //         }
    //     };

    //     if (isFormValid) {
    //         console.log("submit form!!!")
    //     }
    // }, false);

    var form = document.forms["contactForm"];
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity() === true) {
            console.log("clicked, send email")
        }
        
        form.classList.add('was-validated');
    }, false);
});