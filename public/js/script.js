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

    $('#btnInventory').on('click', function () {
        window.open('http://w1w024.financeexpress.com/clients/baymotors/inventory_list.aspx', '_blank');
    });
});