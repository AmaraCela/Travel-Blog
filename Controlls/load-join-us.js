$(document).ready(function() {
    const showPopupButton = $('#join-us-icon');
    const popupContainer = $('#join-us-popup-container');
    console.log(showPopupButton);
    console.log(popupContainer);
    let popupLoaded = false;

    showPopupButton.click(function() {
        if (!popupLoaded) {

            $.get('./Components/JoinUs.html', function(data) {
                
                popupContainer.html(data);
                popupLoaded = true;

                $('#join-us-popup').removeClass('inactive-popup');
            });
        } else {
            
            $('#join-us-popup').toggleClass('inactive-popup');
        }
    });
});


