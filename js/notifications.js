let notificationNumber = 3;
var numberID = 'readnumbers';
var myPosts = $(".unread");
var checked = $(".unmarked")

document.getElementById(numberID).innerHTML = notificationNumber;

$(".unread").click(function(){
    var myTest = this.className;
    $(this).removeClass("unread").addClass("read");
    if (myTest != ('read')) {
        notificationNumber--;
        let notification = $(this).children();
        notification.children(".unread-mark").addClass("hide");
        document.getElementById(numberID).innerHTML = notificationNumber;   
    }
});

$("#mark-all").click(function() {
    myPosts.removeClass("unread").addClass("read");
    console.log(myPosts);
    if (notificationNumber > 0 ) {
        notificationNumber = 0;
        document.getElementById(numberID).innerHTML = notificationNumber;
    }
});

$('.unread-number').bind("DOMSubtreeModified", function() {
    console.log("Changed");
    console.log(notificationNumber);
     if (notificationNumber == 0 ) {
        checked.addClass("check");
    }
});