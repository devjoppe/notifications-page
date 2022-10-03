let notificationNumber = 3;
var numberID = 'readnumbers';
document.getElementById(numberID).innerHTML = notificationNumber;

$(".unread").click(function(){
    $(this).removeClass("unread").addClass("read");
    let notification = $(this).children();
    notification.children(".unread-mark").addClass("hide");
    notificationNumber--;
    if (notificationNumber >= 0) {
        document.getElementById(numberID).innerHTML = notificationNumber;
    }
  });



