(function ($) {
    $(document).ready(function () {

        $("a.popupTrigger").colorbox({
            inline: true,
            maxWidth: "60%",
            maxHeight: "80%",
            onOpen: function () {
                $($(this).attr("href")).show();
            },
            onClosed: function () {
                $($(this).attr("href")).hide();
            }
        });

    });
}(jQuery));
